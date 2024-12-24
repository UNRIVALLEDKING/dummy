import { useEffect, useState } from "react";
import { Banknote, Edit3 } from "lucide-react";

export default function BankDetails() {
  const [userData, setUserData] = useState();
  const [bankDetails, setBankDetails] = useState({
    ifscCode: "",
    accountNumber: "",
    bankName: "",
    accountType: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUserData(storedData);
      if (storedData.bankDetails) {
        setBankDetails({ ...bankDetails, ...storedData.bankDetails });
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBankDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setBankDetails(bankDetails);
    const data = { ...userData, bankDetails: { ...bankDetails } };
    localStorage.setItem("userData", JSON.stringify(data));
    setIsModalOpen(false);
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-[#393939]">Bank Details</h2>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="p-2 text-[#393939] bg-gray-100 rounded-full hover:bg-gray-200"
        >
          <Edit3 className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <Banknote className="w-5 h-5 text-[#f37a1f]" />
          <div>
            <p className="text-[#393939]">
              {bankDetails.bankName || "No data added"}
            </p>
            <p className="text-sm text-[#393939]/60">Bank Name</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <Banknote className="w-5 h-5 text-[#f37a1f]" />
          <div>
            <p className="text-[#393939]">
              {bankDetails.accountNumber || "No data added"}
            </p>
            <p className="text-sm text-[#393939]/60">Account Number</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <Banknote className="w-5 h-5 text-[#f37a1f]" />
          <div>
            <p className="text-[#393939]">
              {bankDetails.ifscCode || "No data added"}
            </p>
            <p className="text-sm text-[#393939]/60">IFSC Code</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <Banknote className="w-5 h-5 text-[#f37a1f]" />
          <div>
            <p className="text-[#393939]">
              {bankDetails.accountType || "No data added"}
            </p>
            <p className="text-sm text-[#393939]/60">Account Type</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Edit Bank Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">IFSC Code</label>
                <input
                  type="text"
                  name="ifscCode"
                  value={bankDetails.ifscCode}
                  onChange={handleInputChange}
                  placeholder="e.g., SBIN0000001"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">
                  Account Number
                </label>
                <input
                  type="text"
                  name="accountNumber"
                  value={bankDetails.accountNumber}
                  onChange={handleInputChange}
                  placeholder="e.g., 123456789012"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Bank Name</label>
                <input
                  type="text"
                  name="bankName"
                  value={bankDetails.bankName}
                  onChange={handleInputChange}
                  placeholder="e.g., State Bank of India"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">
                  Account Type
                </label>
                <select
                  name="accountType"
                  value={bankDetails.accountType}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                >
                  <option value="">Select Account Type</option>
                  <option value="Savings">Savings</option>
                  <option value="Current">Current</option>
                  <option value="Business">Business</option>
                  <option value="Joint">Joint</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-[#f37a1f] text-white rounded-md hover:bg-[#d4691a]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
