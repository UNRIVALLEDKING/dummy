import { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import localeData from '../constants/localeData';

export default function SellersLogin() {
  const [step, setStep] = useState(1);
  const [isIndian, setIsIndian] = useState(true);
  const [formData, setFormData] = useState({
    country: 'India',
    contact: '',
    otp: '',
    companyName: '',
    userName: '',
    companyType: [],
    isVerified: false,
  });
  const [generatedOTP, setGeneratedOTP] = useState('');
  const navigate = useNavigate();

  const COMPANY_TYPES = [
    'Supplier/Trader',
    'Manufacturer',
    'Distributor',
    'Exporter',
    'Importer',
    'Dropshipper',
  ];

  const saveToLocalStorage = (data) => {
    localStorage.setItem('companyData', JSON.stringify(data));
  };

  const generateOTP = () => {
    // Simple OTP generation (6 digits)
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOTP(otp);
    console.log('Generated OTP:', otp);
  };

  const handleCompanyTypeChange = (type) => {
    const updatedTypes = formData.companyType.includes(type)
      ? formData.companyType.filter((t) => t !== type)
      : [...formData.companyType, type];

    const updatedData = { ...formData, companyType: updatedTypes };
    setFormData(updatedData);
    saveToLocalStorage(updatedData);
  };

  const nextStep = () => {
    switch (step) {
      case 1:
        // Validate contact input
        if (!formData.contact) {
          alert('Please enter contact information');
          return;
        }
        generateOTP();
        break;
      case 2:
        // Verify OTP
        if (formData.otp !== generatedOTP) {
          alert('Incorrect OTP');
          return;
        }
        break;
      case 3:
        // Validate company and user details
        if (!formData.companyName || !formData.userName) {
          alert('Please enter Company Name and User Name');
          return;
        }
        setFormData({
          country: 'India',
          contact: '',
          otp: '',
          companyName: '',
          userName: '',
          companyType: [],
        });
        // Trigger auth state change
        window.dispatchEvent(new Event('authStatusChanged'));

        navigate(`/company-dashboard`);

        break;
    }

    // Update localStorage and move to next step
    saveToLocalStorage(formData);
    setStep(step + 1);
  };

  const previousStep = () => setStep(step - 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    saveToLocalStorage(updatedData);
  };

  useEffect(() => {
    // Load existing data from localStorage
    const savedData = localStorage.getItem('sellerRegistrationData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="min-h-screen bg-background p-4 flex items-center justify-center">
      <div className="bg-background border border-primary rounded-lg shadow-lg p-8 w-full max-w-md">
        <ul className="steps w-full mb-6 text-primary font-semibold">
          <li className={`step ${step >= 1 ? 'step-primary' : ''}`}>Login</li>
          <li className={`step ${step >= 2 ? 'step-primary' : ''}`}>Verify</li>
          <li className={`step ${step === 3 ? 'step-primary' : ''}`}>
            Details
          </li>
        </ul>

        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-primary mb-4">
              Company Login
            </h2>
            <div className="mb-4">
              <label className="block bg-inherit text-gray-600 font-medium mb-2">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                className="select bg-inherit text-secondary select-bordered w-full"
                onChange={(e) => {
                  setIsIndian(e.target.value === 'India');
                  handleInputChange(e);
                }}
              >
                {localeData.map((item, id) => (
                  <option
                    onChange={handleCompanyTypeChange}
                    key={id}
                    value={item.name}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            {isIndian ? (
              <div className="mb-4">
                <label className="block text-secondary font-medium mb-2">
                  Mobile Number
                </label>
                <div className="flex items-center space-x-2">
                  <FiPhone className="text-primary h-6 w-6" />
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    placeholder="Enter your mobile number"
                    onChange={handleInputChange}
                    className="input input-bordered w-full bg-white text-secondary"
                  />
                </div>
              </div>
            ) : (
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2">
                  Email Address
                </label>
                <div className="flex items-center space-x-2">
                  <FiMail className="text-primary h-6 w-6" />
                  <input
                    type="email"
                    name="contact"
                    value={formData.contact}
                    placeholder="Enter your email"
                    onChange={handleInputChange}
                    className="input input-bordered w-full bg-white text-secondary"
                  />
                </div>
              </div>
            )}
            <button className="btn btn-primary w-full" onClick={nextStep}>
              Next Step
              <FiArrowRight className="inline ml-2" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold text-primary mb-4">Verify OTP</h2>
            <p className="text-secondary mb-4">
              OTP sent to {formData.contact} (OTP : {generatedOTP})
            </p>
            <div className="mb-4">
              <label className="block text-secondary font-medium mb-2">
                Enter OTP
              </label>
              <input
                type="text"
                name="otp"
                value={formData.otp}
                placeholder="Enter 6-digit OTP"
                onChange={handleInputChange}
                className="input input-bordered w-full bg-white text-secondary"
                maxLength="6"
              />
            </div>

            <div className="flex flex-col space-y-4">
              <button
                className="btn text-secondary btn-outline w-full"
                onClick={previousStep}
              >
                Back
              </button>
              <button className="btn btn-primary w-full" onClick={nextStep}>
                Verify OTP
                <FiArrowRight className="inline ml-2" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold text-primary mb-4">
              Company Details
            </h2>
            <div className="mb-4">
              <label className="block text-secondary font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                placeholder="Enter your company name"
                onChange={handleInputChange}
                className="input input-bordered w-full bg-white text-secondary"
              />
            </div>
            <div className="mb-4">
              <label className="block text-secondary font-medium mb-2">
                Company Type(s)
              </label>
              <div className="flex flex-wrap gap-2">
                {COMPANY_TYPES.map((type) => (
                  <div
                    key={type}
                    className={`badge cursor-pointer ${
                      formData.companyType.includes(type)
                        ? 'badge-primary'
                        : 'badge-outline'
                    }`}
                    onClick={() => handleCompanyTypeChange(type)}
                  >
                    {type}
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-secondary font-medium mb-2">
                User Name
              </label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                placeholder="Enter your name"
                onChange={handleInputChange}
                className="input input-bordered w-full bg-white text-secondary"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <button
                className="btn text-secondary btn-outline w-full"
                onClick={previousStep}
              >
                Back
              </button>
              <button className="btn btn-primary w-full" onClick={nextStep}>
                Complete Registration
                <FiArrowRight className="inline ml-2" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
