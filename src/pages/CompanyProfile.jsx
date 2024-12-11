import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { miniLogo } from "../assets";

const CompanyProfile = () => {
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("companyData"));
    setCompanyData(data);
  }, []);

  return (
    <div className="min-h-screen bg-background p-4 md:ml-64 transition-all">
      <div className="container mx-auto">
        <div className="space-y-8 md:space-y-12">
          {companyData ? (
            <div className="mx-auto space-y-8">
              {/* Cover Image and Logo */}
              <div className="relative">
                <img
                  src={
                    companyData.coverImage ||
                    "https://s.alicdn.com/@img/imgextra/i4/O1CN01ustqhi1Tz44lu4arh_!!6000000002452-0-tps-3840-1248.jpg_q60.jpg"
                  }
                  alt="Cover Image"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg transition-all ease-in-out duration-300"
                />
                <img
                  src={companyData.logo || miniLogo}
                  alt="Company Logo"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>

              {/* Company Name, Type, and Edit Icon */}
              <div className="flex justify-between items-center px-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold flex items-center text-gray-900">
                    {companyData.companyName}
                    {companyData.isVerified ? (
                      <FaCheckCircle
                        size={25}
                        className="ml-2 text-green-400"
                      />
                    ) : (
                      <FaTimesCircle size={25} className="ml-2 text-red-500" />
                    )}
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {companyData.companyType.map((item, index) => (
                      <span
                        key={index}
                        className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg shadow-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="btn btn-circle btn-outline text-blue-500 hover:text-white hover:bg-blue-500 mt-4 md:mt-0 transition-all ease-in-out duration-300">
                  <FaEdit size={20} />
                </button>
              </div>

              {/* Company Details */}
              <div className="space-y-6 px-6">
                <div>
                  <p className="text-lg">
                    <strong className="font-semibold">Contact:</strong>{" "}
                    {companyData.contact || "Not provided"}
                  </p>
                  <p className="text-lg">
                    <strong className="font-semibold">Country:</strong>{" "}
                    {companyData.country || "Not provided"}
                  </p>
                  <p className="text-lg">
                    <strong className="font-semibold">Username:</strong>{" "}
                    {companyData.userName || "Not provided"}
                  </p>
                </div>
              </div>

              {/* KYC and Bank Details */}
              <div className="space-y-6 px-6">
                <div>
                  <p className="text-lg">
                    <strong className="font-semibold">PAN:</strong>{" "}
                    {companyData.pan || "Not provided"}
                  </p>
                  <p className="text-lg">
                    <strong className="font-semibold">GST:</strong>{" "}
                    {companyData.gst || "Not provided"}
                  </p>
                  <p className="text-lg">
                    <strong className="font-semibold">Bank Details:</strong>{" "}
                    {companyData.bankDetails || "Not provided"}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-600">
              Loading company details...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
