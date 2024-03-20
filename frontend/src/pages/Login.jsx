import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { darkMode } from "@/context/ContextProvider";

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { isDarkMode } = useContext(darkMode);
  const { authUser, setAuthUser } = useContext(darkMode);

  console.log(message);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    setTimeout(async () => {
      try {
        const response = await axios.post(
          "https://northsea-server.vercel.app/api/login",
          data,
          {
            withCredentials: true,
          }
        );
        setMessage(response.data.message);
        localStorage.setItem("user", response.data.username);

        toast({
          description: `${response.data.message}`, // response.data.message sudah merupakan string, tidak perlu menggabungkan dengan setMessage dan data
        });

        await new Promise((resolve) => setTimeout(resolve, 3000));
        // Redirect to login page after 3 detik

        window.location.href = "/";
      } catch (error) {
        setMessage(error.response.data.message);

        toast({
          description: `${error.response.data.message}`, // response.data.message sudah merupakan string, tidak perlu menggabungkan dengan setMessage dan data
        });
      }
    }, 1500);
  };

  return (
    <div className={isDarkMode ? " min-h-screen bg-[#121212]" : "min-h-screen"}>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-12">
          <h2
            className={
              isDarkMode
                ? "mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100"
                : "mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
            }
          >
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm relative">
          <Toaster authUser={authUser} message={message} />
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className={
                  isDarkMode
                    ? "block text-sm font-medium leading-6 text-gray-100"
                    : "block text-sm font-medium leading-6 text-gray-900"
                }
              >
                username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className={
                    isDarkMode
                      ? "block w-full bg-[#252525] rounded-md pl-2 outline-none border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6"
                      : "block w-full rounded-md pl-2 outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  }
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className={
                    isDarkMode
                      ? "block text-sm font-medium leading-6 text-gray-200"
                      : "block text-sm font-medium leading-6 text-gray-900"
                  }
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={
                    isDarkMode
                      ? "block w-full bg-[#252525] rounded-md pl-2 outline-none border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6"
                      : "block w-full rounded-md pl-2 outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  }
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={
                  isDarkMode
                    ? "flex w-full justify-center rounded-md bg-indigo-900 px-3 py-1.5 text-sm font-semibold leading-6 text-[#f9f9f9]  active:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    : "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm active:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                }
              >
                Sign Up
              </button>
            </div>
          </form>

          <p
            className={
              isDarkMode
                ? "mt-10 text-center text-sm text-gray-300"
                : "mt-10 text-center text-sm text-gray-500"
            }
          >
            Do you have account?{" "}
            <Link
              to={"/register"}
              className={
                isDarkMode
                  ? "font-semibold leading-6 text-indigo-500 hover:text-indigo-600"
                  : "font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              }
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
