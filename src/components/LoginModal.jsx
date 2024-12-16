export default function LoginModal() {
  const openModal = () => {
    document.getElementById("login_modal").close();
    document.getElementById("signup_modal").showModal();
  };

  return (
    <dialog id="login_modal" className="modal">
      <div className="modal-box bg-white border-2 border-primary rounded-lg shadow-lg">
        {/* Close Button */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        {/* Modal Content */}
        <h3 className="font-bold text-2xl text-primary text-center mb-2">
          Welcome Back!
        </h3>
        <p className="text-tri text-center mb-4">
          Please log in to continue to your account.
        </p>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-secondary font-semibold">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered bg-background w-full border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none rounded-md"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-secondary font-semibold">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered bg-background w-full border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none rounded-md"
              required
            />
          </div>

          {/* Login Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn w-full bg-primary text-white font-medium py-3 rounded-md hover:bg-secondary hover:text-white transition-all"
            >
              Login
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Don’t have an account?{" "}
            <a
              onClick={openModal}
              className="text-primary cursor-pointer font-semibold hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </dialog>
  );
}
