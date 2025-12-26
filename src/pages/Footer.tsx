import social from "../assets/Social icons (1).png";
import logo from "../assets/Logo (3).png";
import logo1 from "../assets/Icon+bg (1).png";
import logo2 from "../assets/Icon+bg (2).png";
import logo3 from "../assets/Icon+bg (3).png";
import appStore from "../assets/App Store.png";
import gPlay from "../assets/Google Play.png";

export default function Footer() {
  return (
    <footer className="bg-white pt-12 md:pt-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
      gap-6 md:gap-8
      mb-10 md:mb-16
    ">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img src={logo} alt="" />
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img src={logo1} alt="" />
            <p className="text-sm text-center md:text-left">
              <b>Address</b>
              <br />
              Oxford Ave. Cary, NC 27511
            </p>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img src={logo2} alt="" />
            <p className="text-sm text-center md:text-left">
              <b>Email</b>
              <br />
              nwigar@yahoo.com
            </p>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img src={logo3} alt="" />
            <p className="text-sm text-center md:text-left">
              <b>Phone</b>
              <br />
              +537 547-6401
            </p>
          </div>
        </div>
        <div className="
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
      gap-8 md:gap-10
      pb-12 md:pb-16
    ">
          <div className="text-center md:text-left">
            <p className="text-[18px] md:text-[20px] font-bold mb-6 md:mb-[35px]">
              Faucibus faucibus pellentesque dictum turpis. Id pellentesque
              turpis massa a id iaculis lorem t...
            </p>
            <div className="flex justify-center md:justify-start">
              <img src={social} alt="" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="font-bold mb-4">Useful links</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About us</li>
              <li>Contact us</li>
              <li>Gallery</li>
              <li>Blog</li>
              <li>F.A.Q</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <p className="font-bold mb-4">Vehicles</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Sedan</li>
              <li>Cabriolet</li>
              <li>Pickup</li>
              <li>Minivan</li>
              <li>SUV</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <p className="font-bold mb-4">Download App</p>
            <div className="flex flex-col items-center md:items-start gap-4">
              <img src={appStore} alt="" className="w-40" />
              <img src={gPlay} alt="" className="w-40" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-4 md:py-6 text-center text-sm text-gray-500">
        © Copyright Car Rental 2024. Design by Figma.guru
      </div>
    </footer>
  );
}
