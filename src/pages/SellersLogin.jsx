import { useState } from 'react';
import { FiMail, FiPhone, FiArrowRight } from 'react-icons/fi';

export default function SellersLogin() {
  const [step, setStep] = useState(1);
  const [isIndian, setIsIndian] = useState(true);
  //   const [formData, setFormData] = useState({
  //     country: "India",
  //     mobile: "",
  //     email: "",
  //     gst: "",
  //     pan: "",
  //     bankAccount: "",
  //     bankStatement: null,
  //     companyType: "",
  //   });

  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-background p-4 flex items-center justify-center">
      <div className="bg-background border border-primary rounded-lg shadow-lg p-8 w-full max-w-md">
        <ul className="steps w-full mb-6 text-primary font-semibold">
          <li className={`step ${step >= 1 ? 'step-primary' : ''}`}>Login</li>
          <li className={`step ${step >= 2 ? 'step-primary' : ''}`}>Details</li>
          <li className={`step ${step === 3 ? 'step-primary' : ''}`}>
            Verification
          </li>
        </ul>

        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-primary mb-4">
              Company Login
            </h2>
            <p className="text-gray-700 mb-4">
              Enter your details to start the registration process.
            </p>
            <div className="mb-4">
              <label className="block bg-inherit text-gray-600 font-medium mb-2">
                Country
              </label>
              <select
                className="select bg-inherit text-secondary select-bordered w-full"
                onChange={(e) => setIsIndian(e.target.value === 'India')}
              >
                <option value="India">India</option>
                <option value="Other">Other</option>
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
                    placeholder="Enter your mobile number"
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
                    placeholder="Enter your email"
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
            <h2 className="text-xl font-bold text-primary mb-4">
              Company Details
            </h2>
            <p className="text-secondary mb-4">
              Provide additional information about your company.
            </p>
            <div className="mb-4">
              <label className="block text-secondary font-medium mb-2">
                Company Type
              </label>
              <select className="select text-secondary select-bordered w-full bg-white">
                <option value="Supplier/Trader">Supplier/Trader</option>
                <option value="Manufacturer">Manufacturer</option>
                <option value="Distributor">Distributor</option>
                <option value="Exporter">Exporter</option>
                <option value="Importer">Importer</option>
                <option value="Dropshipper">Dropshipper</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">
                GST Number
              </label>
              <input
                type="text"
                placeholder="Enter your GST number"
                className="input input-bordered w-full bg-white text-secondary"
              />
            </div>
            <div className="mb-4">
              <label className="block text-secondary font-medium mb-2">
                PAN Number
              </label>
              <input
                type="text"
                placeholder="Enter your PAN number"
                className="input text-secondary input-bordered w-full bg-white"
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
                Next Step
                <FiArrowRight className="inline ml-2" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold text-primary mb-4">
              Verification
            </h2>
            <p className="text-gray-700 mb-4">
              Upload required documents for verification.
            </p>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">
                Bank Account Number
              </label>
              <input
                type="text"
                placeholder="Enter your bank account number"
                className="input text-secondary input-bordered w-full bg-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">
                Upload Bank Statement
              </label>
              <input
                type="file"
                className="file-input file-input-bordered text-secondary w-full bg-white"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <button
                className="btn text-secondary btn-outline w-full"
                onClick={previousStep}
              >
                Back
              </button>

              <button className="btn btn-primary w-full">
                Submit for Verification
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
