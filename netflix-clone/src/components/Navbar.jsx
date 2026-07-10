import bgimg from '../assets/banner.jpg'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from 'react';


const Navbar = () => {
    const navigate = useNavigate();

    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleClick = () => {
        if (!value.trim()) {
        setError("Please enter your email or mobile number.");
        return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^[0-9]{10}$/;

        if (!emailRegex.test(value) && !mobileRegex.test(value)) {
        setError("Please enter a valid email or 10-digit mobile number.");
        return;
        }

        setError("");
        toast("🚧 Backend needs to be implemented.");
    };

  return (
    <>
      <div className="relative min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-5 bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>
        <div className="relative z-10">
          <div className="flex justify-between items-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">NETFLEX</div>
            <div className=" flex">
              <div>
                <select
                  className="border border-gray-500 bg-black/50 rounded px-3 py-2 mr-2"
                  name=""
                  id=""
                >
                  <option className="text-black" value="English">
                    English
                  </option>
                  <option className="text-black" value="Arabic">
                    Arabic
                  </option>
                </select>
              </div>
              <button className="cursor-pointer bg-red-600 px-3 sm:px-5 py-2 rounded" onClick={() => navigate('/signup')}>
                Sign In
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center min-h-[85vh]">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl text-center font-bold text-center ">
              Unlimited films, series and more
            </div>
            <div className="py-5 font-bold text-[18px]">
            Starts at $99. Cancel at any time.
            </div>
            <p className="max-w-xl text-center mt-2 px-4">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 py-5 w-full justify-center items-start">
  <div className="w-full sm:w-80 md:w-96">
    <input
      className={`w-full rounded bg-black/50 p-3 border ${
        error ? "border-red-500" : "border-gray-500"
      }`}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        setError("");
      }}
      type="email"
      placeholder="Email address"
    />

    {error && (
      <p className="mt-2 text-sm text-red-500 text-left">
        {error}
      </p>
    )}
  </div>

  <button
    className="cursor-pointer bg-red-600 px-6 py-3 rounded font-semibold w-full sm:w-auto"
    onClick={handleClick}
  >
    Get Started
  </button>
</div>
          </div>
        </div>
      </div>
    </>
    )
}

export default Navbar