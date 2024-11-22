import React, { useState } from "react";

function SignInFormLeft() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleEmailChange = (event) => {
    const { value } = event.target;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmail(value);
    if (emailRegex.test(value) || value === "") {
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email format" });
    }
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    const passwordRegex = /^[a-zA-Z0-9!@#$&/_\-~=]+$/;
    if (passwordRegex.test(value) || value === "") {
      setErrors({ ...errors, password: "" });
      if (password.length > 0 && password.length < 5) {
        setErrors({
          ...errors,
          password: "Password must be at least 6 characters",
        });
      }
      setPassword(value);
    } else {
      setErrors({
        ...errors,
        password:
          "Password must contain only letters, numbers, and the following special characters: '!@#$&/_-~=.'",
      });
    }
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleRememberMeChange = (event) => setRememberMe(event.target.checked);

  const handleSubmission = (event) => {
    event.preventDefault();
    if (errors.email || errors.password || !email || !password) {
      setErrors({
        email: !email ? "Email cannot be empty or invalid." : "",
        password: !password ? "Password cannot be empty or invalid." : "",
      });
      return;
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen bg-slate-100 text-black dark:bg-neutral-800 dark:text-white">
      <div className="w-full h-screen flex border border-neutral-500">
        {/* Sign In Form Section */}
        <div className="flex-1">
      <div className="m-8 sm:m-28 rounded">
        <div className="flex justify-center mb-6">
          <h1 className="text-2xl font-bold">auraui</h1>
        </div>
        <h2 className="text-center text-2xl font-semibold mb-2">Sign in</h2>
        <p className="text-center mb-6">
          Don't have an account?{" "}
          <span className="underline cursor-pointer">Signup</span>.
        </p>

        <form onSubmit={handleSubmission} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="h-10 w-full border border-black dark:border-white bg-transparent px-3 py-2 text-base focus:outline-blue-400 placeholder-gray-400 rounded"
              placeholder="Email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Email should be in a valid format, e.g., example@domain.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <span className="text-sm text-blue-600 cursor-pointer hover:underline">
                Forgot your password?
              </span>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="h-10 w-full border border-black dark:border-white bg-transparent px-3 py-2 text-base focus:outline-blue-400 placeholder-gray-400 rounded"
                placeholder="Password"
                autoComplete="current-password"
                aria-invalid={!!errors.password}
                pattern="^[a-zA-Z0-9!@#$&/_\-=~]+$"
                title="Password must contain only letters, numbers, and the following special characters: '!@#$&/_-~=.'"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 dark:text-gray-400 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="mr-2 h-4"
            />
            <label htmlFor="rememberMe" className="text-sm">
              Remember me
            </label>
          </div>

          <button
            className={`w-full py-2 rounded mb-2 ${errors.email || errors.password || !email || !password ? 'bg-green-700' : 'bg-green-500'} `}
            disabled={errors.email || errors.password || !email || !password}
          >
            Submit
          </button>

        </form>

        <div className="flex items-center space-x-2 my-4">
          <hr className="flex-1 border-t border-black dark:border-white" />
          <p className="text-sm font-bold">or</p>
          <hr className="flex-1 border-t border-black dark:border-white" />
        </div>
        <button className="inline-flex w-full items-center justify-center gap-3 rounded  bg-black p-3 text-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"></path>
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"></path>
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"></path>
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"></path>
            <path
              d="M1 1h22v22H1z"
              fill="none"></path>
          </svg>
          Login with Google
        </button>
      </div>
    </div>

        {/* Logo/Image Section */}
        <div className="flex-1 relative hidden sm:block">
      <img 
        src="https://images.pexels.com/photos/13916089/pexels-photo-13916089.jpeg" 
        alt="Logo"  
        className="absolute w-full h-full object-cover"
      />
    </div>
      </div>
    </div>
  );
}

export default SignInFormLeft;
