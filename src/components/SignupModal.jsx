import { useState } from 'react';
import Select from 'react-select';
import Flag from 'react-world-flags';
import countryList from 'react-select-country-list';
import { useNavigate } from 'react-router';

export default function SignupModal() {
  const [useMobile, setUseMobile] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    password: '',
    country: '',
  });

  const navigate = useNavigate();

  const countries = countryList()
    .getData()
    .map((country) => ({
      value: country.label,
      label: (
        <div className="flex items-center">
          <Flag
            code={country.value}
            className="mr-2 w-6 h-4 rounded-sm object-cover border"
          />
          {country.label}
        </div>
      ),
      name: country.label,
      code: country.value,
    }));

  const handleCountryChange = (selectedOption) => {
    setFormData({ ...formData, country: selectedOption.name });
    setUseMobile(selectedOption.name === 'India');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user data in localStorage
    localStorage.setItem('userData', JSON.stringify(formData));
    document.getElementById('signup_modal').close();

    // Redirect to profile page
    navigate('/profile');
  };

  function showLoginModal() {
    document.getElementById('signup_modal').close();
    document.getElementById('login_modal').showModal();
  }

  return (
    <dialog id="signup_modal" className="modal">
      <div className="modal-box bg-white border-2 border-primary rounded-lg shadow-lg">
        {/* Close Button */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        {/* Modal Content */}
        <h3 className="font-bold text-2xl text-primary text-center mb-2">
          Create Your Account
        </h3>
        <p className="text-tri text-center mb-4">
          Sign up to access personalized features and services.
        </p>

        {/* Signup Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Country Dropdown */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-secondary font-semibold">
                Select Country
              </span>
            </label>
            <Select
              options={countries}
              onChange={handleCountryChange}
              placeholder="Select your country"
              className="basic-multi-select"
              classNamePrefix="select"
              defaultValue={countries.find(
                (country) => country.value === 'India'
              )}
            />
          </div>

          {/* Mobile or Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-secondary font-semibold">
                {useMobile ? 'Mobile Number' : 'Email'}
              </span>
            </label>
            <input
              type={useMobile ? 'tel' : 'email'}
              name="contact"
              placeholder={
                useMobile ? 'Enter your mobile number' : 'Enter your email'
              }
              value={formData.contact}
              onChange={handleInputChange}
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
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleInputChange}
              className="input input-bordered bg-background w-full border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none rounded-md"
              required
            />
          </div>

          {/* First Name and Last Name Field */}
          <div className="flex justify-between ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-secondary font-semibold">
                  First Name
                </span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="input input-bordered bg-background w-full border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none rounded-md"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-secondary font-semibold">
                  Last Name
                </span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="input input-bordered bg-background w-full border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none rounded-md"
                required
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="form-control">
            <label className="cursor-pointer flex items-center space-x-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                required
              />
              <span className="text-sm text-gray-700">
                I agree to the{' '}
                <a
                  href="/terms"
                  className="text-primary font-semibold hover:underline"
                >
                  Terms and Conditions
                </a>
              </span>
            </label>
          </div>

          {/* Signup Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn w-full bg-primary text-white font-medium py-3 rounded-md hover:bg-secondary hover:text-white transition-all"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <a
              onClick={showLoginModal}
              className="text-primary cursor-pointer font-semibold hover:underline"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </dialog>
  );
}
