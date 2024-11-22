import React, { useState } from "react";

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({
    firstName: "",
    surname: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case "firstName":
        newErrors.firstName = !value ? "First name is required" : "";
        break;

      case "surname":
        newErrors.surname = !value ? "Surname is required" : "";
        break;

      case "email":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        newErrors.email = !emailRegex.test(value) ? "Invalid email format" : "";
        break;

      case "dob":
        if (!value) {
          newErrors.dob = "Date of birth is required";
        } else {
          const dobDate = new Date(value);
          const today = new Date();
          const age = today.getFullYear() - dobDate.getFullYear();
          if (age < 13) {
            newErrors.dob = "You must be at least 13 years old";
          } else {
            newErrors.dob = "";
          }
        }
        break;

      case "password":
        const passwordRegex = /^[a-zA-Z0-9!@#$&/_\-~=]+$/;
        if (!passwordRegex.test(value)) {
          newErrors.password =
            "Password must contain only letters, numbers, and the following special characters: '!@#$&/_-~=.'";
        } else if (value.length < 6) {
          newErrors.password = "Password must be at least 6 characters";
        } else {
          newErrors.password = "";
        }
        // Also validate confirm password when password changes
        if (formData.confirmPassword) {
          newErrors.confirmPassword =
            value !== formData.confirmPassword
              ? "Passwords do not match"
              : "";
        }
        break;

      case "confirmPassword":
        newErrors.confirmPassword =
          value !== formData.password ? "Passwords do not match" : "";
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    
    // Validate all fields
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
    });

    // Check if there are any errors or empty required fields
    const hasErrors = Object.values(errors).some((error) => error !== "");
    const hasEmptyRequired = !formData.firstName || !formData.surname || !formData.dob || !formData.password || !formData.confirmPassword;

    if (hasErrors || hasEmptyRequired) {
      return;
    }

    // Proceed with submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <div className="h-screen bg-slate-100 text-black dark:bg-neutral-800 dark:text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm lg:max-w-md border border-neutral-500 rounded p-6">
        <div className="flex justify-center mb-6">
          <h1 className="text-2xl font-bold">auraui</h1>
        </div>
        <h2 className="text-center text-2xl font-semibold mb-2">Sign up</h2>
        <p className="text-center mb-6">
          Already have an account?{" "}
          <span className="underline cursor-pointer">Sign in</span>.
        </p>

        <form onSubmit={handleSubmission} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="text-lg">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="h-10 w-full border border-black dark:border-white bg-transparent px-3 py-2 text-base focus:outline-blue-400 placeholder-gray-400 rounded"
                placeholder="First Name"
                required
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="surname" className="text-lg">
                Surname
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                className="h-10 w-full border border-black dark:border-white bg-transparent px-3 py-2 text-base focus:outline-blue-400 placeholder-gray-400 rounded"
                placeholder="Surname"
                
              />
              {errors.surname && (
                <p className="text-red-600 text-sm mt-1">{errors.surname}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="h-10 w-full border border-black dark:border-white bg-transparent px-3 py-2 text-base focus:outline-blue-400 placeholder-gray-400 rounded"
              placeholder="Email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              required
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="dob" className="text-lg">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="h-10 w-full border border-black dark:border-white bg-transparent px-3 py-2 text-base focus:outline-blue-400 placeholder-gray-400 rounded"
              required
            />
            {errors.dob && (
              <p className="text-red-600 text-sm mt-1">{errors.dob}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="h-10 w-full border border-black dark:border-white bg-transparent px-3 py-2 text-base focus:outline-blue-400 placeholder-gray-400 rounded"
                placeholder="Password"
                pattern="^[a-zA-Z0-9!@#$&/_\-=~]+$"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 dark:text-gray-400 focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="text-lg">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="h-10 w-full border border-black dark:border-white bg-transparent px-3 py-2 text-base focus:outline-blue-400 placeholder-gray-400 rounded"
                placeholder="Confirm Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 dark:text-gray-400 focus:outline-none"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded ${
              Object.values(errors).some((error) => error !== "") ||
              !formData.firstName ||
              !formData.surname ||
              !formData.dob ||
              !formData.password ||
              !formData.confirmPassword
                ? "bg-green-700"
                : "bg-green-500"
            }`}
            disabled={
              Object.values(errors).some((error) => error !== "") ||
              !formData.firstName ||
              !formData.surname ||
              !formData.dob ||
              !formData.password ||
              !formData.confirmPassword
            }
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center space-x-2 my-4">
          <hr className="flex-1 border-t border-black dark:border-white" />
          <p className="text-sm font-bold">or</p>
          <hr className="flex-1 border-t border-black dark:border-white" />
        </div>

        <button className="inline-flex w-full items-center justify-center gap-3 rounded bg-black p-3 text-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            ></path>
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            ></path>
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            ></path>
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            ></path>
            <path d="M1 1h22v22H1z" fill="none"></path>
          </svg>
          Sign up with Google
        </button>
      </div>
    </div>
  );
}

export default SignUpForm;