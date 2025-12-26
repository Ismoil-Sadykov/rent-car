import { Link, useNavigate } from "react-router-dom";
import logoLogIn from "../assets/Logo (3).png";
import { axiosRequest, SaveToken } from "./../../utils/axios";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const LogIn = async (obj) => {
    try {
      setLoading(true);
      setAuthError("");
      let { data } = await axiosRequest.post("/api/auth/login", obj);
      SaveToken(data);
      navigate("/homePage");
    } catch (error) {
      setAuthError("Wrong login or password");
    } finally {
      setLoading(false);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      LogIn(values);
    },
  });

  return (
    <div className="min-h-dvh bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
      <div className="bg-white w-[420px] rounded-2xl shadow-xl p-8 hover:shadow-[0px_0px_20px_white] transition-all">
        <div className="flex justify-center mb-6">
          <img src={logoLogIn} alt="Logo" className="w-28" />
        </div>
        <p className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Log in to your account
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {touched.email && errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {touched.password && errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
          {authError && (
            <p className="text-red-600 text-center text-sm mt-2">{authError}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-6 py-3 rounded-lg font-medium transition
    ${
      loading
        ? "bg-blue-300 cursor-not-allowed"
        : "bg-blue-500 hover:bg-blue-600 cursor-pointer text-white"
    }`}
          >
            {loading ? "Loading..." : "Log In"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link to="/signUpPage">
            <span className="text-blue-500 cursor-pointer hover:underline">
              Sign up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
