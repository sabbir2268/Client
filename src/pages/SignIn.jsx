import { use } from "react";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const SignIn = () => {
  const { signInUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // Sign in the user to Firebase
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const signInInfo = {
          email: user.email,
          lastSignInTime: user?.metadata?.lastSignInTime,
        };
        // update user login time in your database
        fetch(`http://localhost:3000/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signInInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("User sign-in time updated", data);
          });

        //rediret to dashboard
        navigate("/");

        // -------------------
        Swal.fire({
          icon: "success",
          title: "Signed in successfully!",
          text: `Welcome back, ${user.email}`,
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-4xl">
        {/* Login Card Section */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-xl p-6 lg:w-1/2">
          <form onSubmit={handleSubmit} className="card-body p-0">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Account Login
            </h2>

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

              {/* Forgot Password Link */}
              <div className="mt-2 text-right">
                <a
                  href="#"
                  className="link link-hover text-sm text-primary/80 hover:text-primary transition duration-150"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary w-full rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Register Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-base-content/80">
              New user?{" "}
              <a
                href="/signUp"
                className="link link-hover font-bold text-secondary transition duration-150 hover:underline"
              >
                Register here!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
