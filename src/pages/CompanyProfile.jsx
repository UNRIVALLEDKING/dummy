import { useEffect, useState } from 'react';
import { FaEdit, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { miniLogo } from '../assets';

const CompanyProfile = () => {
  const [companyData, setCompanyData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    pan: '',
    gst: '',
    bankDetails: null,
    ownerName: '',
    idProof: null,
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('companyData'));
    setCompanyData(data);
  }, []);

  useEffect(() => {
    if (companyData) {
      setFormData({
        pan: companyData.pan || '',
        gst: companyData.gst || '',
        bankDetails: companyData.bankDetails || null,
        ownerName: companyData.ownerName || '',
        idProof: companyData.idProof || null,
      });
    }
  }, [companyData]);

  const isVerified =
    formData.pan && formData.gst && formData.bankDetails ? true : false;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, [name]: file }));
  };

  const handleSave = () => {
    const updatedData = { ...companyData, ...formData, isVerified };
    setCompanyData(updatedData);
    localStorage.setItem('companyData', JSON.stringify(updatedData));
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:ml-64">
      <div className="container mx-auto">
        <div className="space-y-8 md:space-y-12">
          {companyData ? (
            <div className="space-y-8">
              {/* Cover Image and Logo */}
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={
                    companyData.coverImage ||
                    'https://www.ust.com/content/dam/ust/images/people/event-banner-image.jpg'
                  }
                  alt="Cover"
                  className="w-full object-left-top h-64 md:h-80 object-cover"
                />
                <img
                  src={companyData.logo || miniLogo}
                  alt="Logo"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-md"
                />
              </div>

              {/* Company Details */}
              <div className="px-6 bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                    {companyData.companyName || 'Sample Company'}
                  </h2>
                  <button
                    className={`flex items-center px-4 py-2 text-sm font-semibold rounded-full shadow-sm ${
                      isVerified
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-red-100 text-red-700 hover:bg-red-200'
                    }`}
                  >
                    {isVerified ? (
                      <>
                        <FaCheckCircle className="mr-2" /> Verified
                      </>
                    ) : (
                      <>
                        <FaTimesCircle className="mr-2" /> Not Verified
                      </>
                    )}
                  </button>
                </div>

                <p className="mt-4 text-gray-700 text-lg">
                  {companyData.businessDescription ||
                    'We are a leading company providing exceptional services in our domain.'}
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center bg-gray-100 rounded-md p-4 shadow-sm">
                    <strong className="text-gray-800 mr-2">Contact:</strong>
                    <span>{companyData.contact || 'Not provided'}</span>
                  </div>
                  <div className="flex items-center bg-gray-100 rounded-md p-4 shadow-sm">
                    <strong className="text-gray-800 mr-2">Country:</strong>
                    <span>{companyData.country || 'Not provided'}</span>
                  </div>
                  <div className="flex items-center bg-gray-100 rounded-md p-4 shadow-sm">
                    <strong className="text-gray-800 mr-2">Established:</strong>
                    <span>{companyData.establishedYear || 'Not provided'}</span>
                  </div>
                  <div className="flex items-center bg-gray-100 rounded-md p-4 shadow-sm">
                    <strong className="text-gray-800 mr-2">Employees:</strong>
                    <span>{companyData.employees || 'Not provided'}</span>
                  </div>
                </div>

                {/* KYC Section */}
                <div className=" pt-10  ">
                  <div className="flex justify-between border-b items-start  ">
                    <h3 className="text-2xl font-semibold text-gray-900  pb-3">
                      KYC Details
                    </h3>
                    <div className="px-6">
                      <button
                        onClick={() => setShowModal(true)}
                        className="rounded-md flex items-center bg-primary px-5 py-2.5 text-sm font-medium text-white shadow  "
                      >
                        <FaEdit className="inline mr-2" /> Edit KYC Details
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* PAN Details */}
                    <div className="bg-gray-100 p-4 rounded-md shadow-sm flex flex-col">
                      <strong className="text-gray-800 text-lg mb-2">
                        PAN Card Number
                      </strong>
                      <p className="text-sm text-gray-700">
                        {formData.pan || 'Not provided'}
                      </p>
                      <span
                        className={`mt-2 inline-block text-xs font-medium px-3 py-1 rounded-full ${
                          isVerified
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {isVerified ? 'Verified' : 'Unverified'}
                      </span>
                    </div>

                    {/* GST Details */}
                    <div className="bg-gray-100 p-4 rounded-md shadow-sm flex flex-col">
                      <strong className="text-gray-800 text-lg mb-2">
                        GST Number
                      </strong>
                      <p className="text-sm text-gray-700">
                        {formData.gst || 'Not provided'}
                      </p>
                      <span
                        className={`mt-2 inline-block text-xs font-medium px-3 py-1 rounded-full ${
                          isVerified
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {isVerified ? 'Verified' : 'Unverified'}
                      </span>
                    </div>

                    {/* Bank Transactions */}
                    <div className="bg-gray-100 p-4 rounded-md shadow-sm flex flex-col">
                      <strong className="text-gray-800 text-lg mb-2">
                        Bank Transactions
                      </strong>
                      {formData.bankDetails ? (
                        <button
                          onClick={() =>
                            window.open(
                              URL.createObjectURL(formData.bankDetails)
                            )
                          }
                          className="text-blue-500 underline text-sm mt-1"
                        >
                          View PDF
                        </button>
                      ) : (
                        <p className="text-sm text-gray-700">Not provided</p>
                      )}
                      <span
                        className={`mt-2 inline-block text-xs font-medium px-3 py-1 rounded-full ${
                          isVerified
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {isVerified ? 'Verified' : 'Unverified'}
                      </span>
                    </div>
                  </div>
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Edit Company Details
            </h3>
            <div className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  PAN Card Number
                </label>
                <input
                  type="text"
                  name="pan"
                  value={formData.pan}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  GST Number
                </label>
                <input
                  type="text"
                  name="gst"
                  value={formData.gst}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload Bank Transactions (PDF)
                </label>
                <input
                  type="file"
                  name="bankDetails"
                  accept="application/pdf"
                  onChange={handleFileUpload}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyProfile;
