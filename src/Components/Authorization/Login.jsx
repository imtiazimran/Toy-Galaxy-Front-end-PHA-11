import { Button } from "flowbite-react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";






const LoginForm = () => {
  const navigate = useNavigate()
  const from = useLocation()
  const destination = from?.state?.pathname || "/"

  const { login, googleSingIn } = useContext(AuthContext)

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value
    const password = form.password.value

    login(email, password)
      .then(res => {
        const user = res.user
        toast.success(`Log In Success as: ${user.email}`)
        navigate(destination)
      })
      .catch(err => {
        if (err.code == "auth/wrong-password") {
          toast.error('Wrong Password')
        }
        if (err.code == "auth/too-many-requests") {
          toast.error("You Have Tried Too Much Try again Later")
        }
        if (err.code == "auth/user-not-found") {
          toast.error('User Not Found Please Register First')
        }
        console.log(err.code)
      })
  }

  const continueWithGoogle = () => {
    googleSingIn()
      .then(res => {
        const user = res.user
        toast.success(`Log In Success as: ${user.email}`)
        navigate(destination)
      })
      .catch(err => {
        if (err.code == "auth/wrong-password") {
          toast.error('Wrong Password')
        }
        if (err.code == "auth/too-many-requests") {
          toast.error("You Have Tried Too Much Try again Later")
        }
        if (err.code == "auth/user-not-found") {
          toast.error('User Not Found Please Register First')
        }
        console.log(err.code)
      })
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded shadow-lg">
        <div className="px-8 py-6">
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                name="email"
                className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <button
                  className="absolute top-0 right-0 mt-3 mr-3 text-gray-500 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm0-3a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.071 7.757A9 9 0 1 0 4.929 16.243m2.828-2.828A5 5 0 1 1 16.243 4.93"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <input
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Log In"
              />
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                type="button"
                onClick={continueWithGoogle}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm5.146-10.663l1.469-1.415C16.621 6.433 15.617 6 14.5 6c-1.253 0-2.247.86-2.247 2.249 0 .18.022.356.066.528l-1.937 1.927C9.213 10.3 9 10.65 9 11.012V13h3v-1.601c0-.431.191-.847.512-1.129l2.634-2.543zM18 8h-2v2h-2V8h-2V6h2V4h2v2h2v2z"
                    clipRule="evenodd"
                  />
                </svg>
                Sign in with Google
              </button>
            </div>
          </form>
          <Link to="/register">New to ToyGalaxy? <Button className="inline mt-5" outline={true} gradientDuoTone="purpleToBlue">Register </Button></Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
