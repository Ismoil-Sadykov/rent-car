import { Link, useNavigate } from "react-router-dom";
import logoLogIn from "../assets/Logo (3).png";
import { axiosRequest } from "../../utils/axios";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  interface SignUpData {
    email: string;
    password: string;
    name?: string;
  }

  const SignUp = async (obj: SignUpData) => {
    try {
      setLoading(true);
      await axiosRequest.post("/api/auth/register", obj);
      navigate("/homePage");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .matches(/@gmail\.com$/, "Email must end with @gmail.com")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Confirm your password"),
  });

  const { handleSubmit, handleChange, values, resetForm, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema,
      onSubmit: (values) => {
        SignUp(values);
        resetForm();
      },
    });

  return (
    <div className="min-h-dvh bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
      <div className="bg-white w-[420px] rounded-2xl shadow-xl p-8">
        <img src={logoLogIn} alt="" className="m-auto mb-5 w-28" />
        <p className="text-2xl font-semibold text-center mb-6">
          Create your account
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="email"
            onChange={handleChange}
            value={values.email}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700
             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
             transition"
          />
          {touched.email && errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
          <input
            name="password"
            onChange={handleChange}
            value={values.password}
            type="password"
            placeholder="password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700
             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
             transition"
          />
          {touched.password && errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
          <input
            name="confirmPassword"
            onChange={handleChange}
            value={values.confirmPassword}
            type="password"
            placeholder="Confirm Your Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700
             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
             transition"
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-6 py-3 rounded-lg font-medium transition
    ${loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 cursor-pointer text-white"
              }`}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <Link to="/"><button
            type="button"
            disabled={loading}
            className={`w-full mt-6 py-3 rounded-lg font-medium transition
    ${loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 cursor-pointer text-white"
              }`}
          >
            {loading ? "Loading..." : "Log In"}
          </button></Link>
        </form>
      </div>
    </div>
  );
}
