import { useState, useEffect } from "react";
import { Building2, Users, Calendar, CreditCard, Edit3 } from "lucide-react";

const COMPANY_TYPES = [
  "Supplier/Trader",
  "Manufacturer",
  "Distributor",
  "Exporter",
  "Importer",
  "Dropshipper",
  "Homemade Creators",
  "IRDS (Independent Representative Direct Sales)",
];

const PAYMENT_METHODS = ["Credit Card", "PayPal", "Bank Transfer", "Cash"];

const TIMEZONES = [
  "UTC",
  "PST (Pacific Standard Time)",
  "CST (Central Standard Time)",
  "EST (Eastern Standard Time)",
  "GMT (Greenwich Mean Time)",
  "CET (Central European Time)",
  "IST (Indian Standard Time)",
  "AEST (Australian Eastern Standard Time)",
];

export default function CompanyInfo() {
  const [userData, setUserData] = useState();
  const [companyInfo, setCompanyInfo] = useState({
    companyName: "",
    companyType: [],
    companySize: "",
    businessHours: { open: "", close: "", timezone: "" },
    paymentMethods: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUserData(storedData);
      if (storedData.companyInfo) {
        setCompanyInfo({ ...companyInfo, ...storedData.companyInfo });
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e, key) => {
    const { value, checked } = e.target;
    setCompanyInfo((prev) => ({
      ...prev,
      [key]: checked
        ? [...prev[key], value]
        : prev[key].filter((item) => item !== value),
    }));
  };

  const handleBusinessHoursChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo((prev) => ({
      ...prev,
      businessHours: {
        ...prev.businessHours,
        [name]: value,
      },
    }));
  };

  const handleSave = () => {
    const data = { ...userData, companyInfo: { ...companyInfo } };
    localStorage.setItem("userData", JSON.stringify(data));
    setIsModalOpen(false);
  };

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#393939] mb-4">
          Company Information
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="p-2 text-[#393939] bg-gray-100 hover:bg-gray-200 rounded-full"
        >
          <Edit3 className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Building2 className="w-5 h-5 text-[#f37a1f]" />
            <div>
              <p className="font-medium text-[#393939]">
                {companyInfo.companyName || "No data added"}
              </p>
              <p className="text-sm text-[#393939]/60">
                {companyInfo.companyType.length > 0
                  ? companyInfo.companyType.join(", ")
                  : "No data added"}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-[#f37a1f]" />
            <div>
              <p className="text-[#393939]">
                {companyInfo.companySize || "No data added"}
              </p>
              <p className="text-sm text-[#393939]/60">Company Size</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-[#f37a1f]" />
            <div>
              <p className="text-[#393939]">
                {companyInfo.businessHours.open &&
                companyInfo.businessHours.close
                  ? `${companyInfo.businessHours.open} - ${
                      companyInfo.businessHours.close
                    } (${
                      companyInfo.businessHours.timezone || "No timezone set"
                    })`
                  : "No data added"}
              </p>
              <p className="text-sm text-[#393939]/60">Business Hours</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <CreditCard className="w-5 h-5 text-[#f37a1f]" />
            <div>
              <p className="text-[#393939]">
                {companyInfo.paymentMethods.length > 0
                  ? companyInfo.paymentMethods.join(", ")
                  : "No data added"}
              </p>
              <p className="text-sm text-[#393939]/60">Payment Methods</p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Edit Company Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={companyInfo.companyName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Company Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {COMPANY_TYPES.map((type) => (
                    <label
                      key={type}
                      className={`flex items-center px-3 py-1 border text-sm rounded-full cursor-pointer ${
                        companyInfo.companyType.includes(type)
                          ? "bg-[#f37a1f] text-white border-[#f37a1f]"
                          : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
                      }`}
                    >
                      <input
                        type="checkbox"
                        value={type}
                        checked={companyInfo.companyType.includes(type)}
                        onChange={(e) => handleCheckboxChange(e, "companyType")}
                        className="hidden"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">
                  Company Size
                </label>
                <select
                  name="companySize"
                  value={companyInfo.companySize}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                >
                  <option value="">Select Company Size</option>
                  <option value="0 - 5 employees">0 - 5 employees</option>
                  <option value="6 - 10 employees">6 - 10 employees</option>
                  <option value="11 - 50 employees">11 - 50 employees</option>
                  <option value="51 - 200 employees">51 - 200 employees</option>
                  <option value="200+ employees">200+ employees</option>
                </select>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <label className="block text-sm text-gray-600">
                    Business Hours
                  </label>
                  <div className="flex space-x-4">
                    <input
                      type="time"
                      name="open"
                      value={companyInfo.businessHours.open}
                      onChange={handleBusinessHoursChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                    />
                    <input
                      type="time"
                      name="close"
                      value={companyInfo.businessHours.close}
                      onChange={handleBusinessHoursChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600">
                    Time Zone
                  </label>
                  <select
                    name="timezone"
                    value={companyInfo.businessHours.timezone}
                    onChange={handleBusinessHoursChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                  >
                    <option value="">Select Time Zone</option>
                    {TIMEZONES.map((timezone) => (
                      <option key={timezone} value={timezone}>
                        {timezone}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Payment Methods
                </label>
                <div className="flex flex-wrap gap-2">
                  {PAYMENT_METHODS.map((method) => (
                    <label
                      key={method}
                      className={`flex items-center px-3 py-1 border text-sm rounded-full cursor-pointer ${
                        companyInfo.paymentMethods.includes(method)
                          ? "bg-[#f37a1f] text-white border-[#f37a1f]"
                          : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
                      }`}
                    >
                      <input
                        type="checkbox"
                        value={method}
                        checked={companyInfo.paymentMethods.includes(method)}
                        onChange={(e) =>
                          handleCheckboxChange(e, "paymentMethods")
                        }
                        className="hidden"
                      />
                      {method}
                    </label>
                  ))}
                </div>
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
