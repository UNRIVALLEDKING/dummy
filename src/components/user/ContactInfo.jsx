import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Edit3 } from "lucide-react";

export default function ContactInfo() {
  const [userData, setUserData] = useState();
  const [contactInfo, setContactInfo] = useState({
    whatsappNumber: "",
    email: "",
    address: {
      pinCode: "",
      city: "",
      state: "",
      country: "",
      houseNo: "",
      area: "",
      locality: "",
      landmark: "",
    },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUserData(storedData);
      if (storedData.contactInfo) {
        setContactInfo({ ...contactInfo, ...storedData.contactInfo });
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setContactInfo((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else {
      setContactInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSave = () => {
    const data = { ...userData, contactInfo: { ...contactInfo } };
    localStorage.setItem("userData", JSON.stringify(data));
    setIsModalOpen(false);
  };

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#393939] mb-4">
          Contact Information
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
            <Phone className="w-5 h-5 text-[#f37a1f]" />
            <div>
              <p className="text-[#393939]">
                {userData?.mobileNumber || "No data added"}
              </p>
              <p className="text-sm text-[#393939]/60">Primary</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-[#f37a1f]" />
            <div>
              <p className="text-[#393939]">
                {contactInfo?.whatsappNumber || "No data added"}
              </p>
              <p className="text-sm text-[#393939]/60">WhatsApp</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-[#f37a1f]" />
            <div>
              <p className="text-[#393939]">
                {contactInfo?.email || "No data added"}
              </p>
              <p className="text-sm text-[#393939]/60">Primary</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-[#f37a1f]" />
            <div>
              <p className="text-[#393939]">
                {contactInfo?.address
                  ? `${contactInfo.address.houseNo}, ${contactInfo.address.area}, ${contactInfo.address.locality}, ${contactInfo.address.landmark}, ${contactInfo.address.city}, ${contactInfo.address.state}, ${contactInfo.address.pinCode}, ${contactInfo.address.country}`
                  : "No data added"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Edit Contact Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">
                  WhatsApp Number
                </label>
                <input
                  type="text"
                  name="whatsappNumber"
                  value={contactInfo.whatsappNumber}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={contactInfo.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                />
              </div>
              {[
                { label: "Pin Code", name: "address.pinCode" },
                { label: "City", name: "address.city" },
                { label: "State", name: "address.state" },
                { label: "Country", name: "address.country" },
                { label: "House No./Block", name: "address.houseNo" },
                { label: "Area/Street", name: "address.area" },
                { label: "Locality", name: "address.locality" },
                { label: "Landmark", name: "address.landmark" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm text-gray-600">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    value={contactInfo.address[field.name.split(".")[1]] || ""}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                  />
                </div>
              ))}
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
