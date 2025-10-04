import { use } from "react";
import AuthContext from "../context/AuthContext";

const SignUp = () => {
  const { createUser } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        const userProfile = {
          email,
          ...restFormData,
          creationTime: user?.metadata?.creationTime,
          lastSignInTime: user?.metadata?.lastSignInTime,
        };

        // save user profile to your database
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              alert("User profile created successfully");
            }
          });
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked");
  };
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-4xl">
        <div className="text-center lg:text-left lg:w-1/2 p-6">
          <h1 className="text-5xl font-extrabold  mb-4">Welcome!</h1>
          <p className="py-6 ">
            Sign up to join our coffee community! Create an account to
            personalize your experience, save favorites, and get exclusive
            offers. It only takes a minute to start your journey with us.
          </p>
        </div>

        {/* Login Card Section */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-xl p-6 lg:w-1/2">
          <form onSubmit={handleSubmit} className="card-body p-0">
            <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

            <div className="form-control">
              {/* Email Input */}
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full rounded-lg transition duration-150 focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="john doe"
                autoComplete="name"
                name="name"
                required
              />
            </div>

            <div className="form-control">
              {/* Email Input */}
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full rounded-lg transition duration-150 focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="you@example.com"
                autoComplete="email"
                name="email"
                required
              />
            </div>

            <div className="form-control">
              {/* address Input */}
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full rounded-lg transition duration-150 focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="123 Main St"
                autoComplete="address"
                name="address"
                required
              />
            </div>

            <div className="form-control">
              {/* Phone Input */}
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full rounded-lg transition duration-150 focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="01XXXXXXXXX"
                autoComplete="phone"
                name="phone"
                required
              />
            </div>

            <div className="form-control">
              {/* photoURL Input */}
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full rounded-lg transition duration-150 focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="http://example.com/photo.jpg"
                autoComplete="photoURL"
                name="photoURL"
                required
              />
            </div>

            <div className="form-control mt-4">
              {/* Password Input */}
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full rounded-lg transition duration-150 focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter your password"
                autoComplete="current-password"
                name="password"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary w-full rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Alternative Sign-in Methods (Outside the core email/password form) */}
          <div className="mt-6">
            <div className="divider text-sm text-base-content/60">
              OR CONTINUE WITH
            </div>

            {/* Google Sign-In Button */}
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-info w-full mt-4 rounded-lg transition duration-300 flex items-center justify-center"
            >
              Sign Up with Google
            </button>

            {/* Register Link */}
            <div className="mt-8 text-center">
              <p className="text-sm text-base-content/80">
                Already have an account?{" "}
                <a
                  href="/signin"
                  className="link link-hover font-bold text-secondary transition duration-150 hover:underline"
                >
                  SignIn here!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
