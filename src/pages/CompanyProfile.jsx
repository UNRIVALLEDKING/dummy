import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { miniLogo } from '../assets';

const CompanyProfile = () => {
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('companyData'));
    setCompanyData(data);
  }, []);

  return (
    <div className="min-h-screen bg-background p-4 ml-64">
      <div className="container mx-auto grid grid-cols-12">
        <div className="ml-4 col-span-12 sm:col-span-10 space-y-6">
          {companyData ? (
            <div className="mx-auto space-y-6">
              <div className="relative">
                <img
                  src={
                    companyData.coverImage ||
                    'https://s.alicdn.com/@img/imgextra/i4/O1CN01ustqhi1Tz44lu4arh_!!6000000002452-0-tps-3840-1248.jpg_q60.jpg'
                  }
                  alt="Cover Image"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src={companyData.logo || miniLogo}
                  alt="Company Logo"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>

              {/* Company Name, Type, and Edit Icon */}
              <div className="flex justify-between space-x-2">
                <div>
                  <h2 className="text-4xl mb-2 font-semibold flex items-center">
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
                  <div className="space-x-2">
                    {companyData.companyType.map((item, index) => (
                      <span
                        key={index}
                        className="badge badge-primary text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <button className="btn btn-circle btn-outline mt-2">
                    <FaEdit size={20} />
                  </button>
                </div>
              </div>

              {/* Company Details */}
              <div className="space-y-6">
                <div>
                  <p>
                    <strong>Contact:</strong>{' '}
                    {companyData.contact || 'Not provided'}
                  </p>
                  <p>
                    <strong>Country:</strong>{' '}
                    {companyData.country || 'Not provided'}
                  </p>
                  <p>
                    <strong>Username:</strong>{' '}
                    {companyData.userName || 'Not provided'}
                  </p>
                </div>
              </div>

              {/* KYC and Bank Details */}
              <div className="space-y-6">
                <div>
                  <p>
                    <strong>PAN:</strong> {companyData.pan || 'Not provided'}
                  </p>
                  <p>
                    <strong>GST:</strong> {companyData.gst || 'Not provided'}
                  </p>
                  <p>
                    <strong>Bank Details:</strong>{' '}
                    {companyData.bankDetails || 'Not provided'}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading company details...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
