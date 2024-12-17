import { useEffect, useState } from "react";
import { Globe, Facebook, Linkedin, Instagram, Edit3 } from "lucide-react";

export default function SocialLinks() {
  const [userData, setUserData] = useState();
  const [socialLinks, setSocialLinks] = useState({
    website: "",
    facebook: "",
    linkedin: "",
    instagram: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUserData(storedData);
      if (storedData.socialLinks) {
        setSocialLinks({ ...socialLinks, ...storedData.socialLinks });
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setSocialLinks(socialLinks);
    const data = { ...userData, socialLinks: { ...socialLinks } };
    localStorage.setItem("userData", JSON.stringify(data));
    setIsModalOpen(false);
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-[#393939]">
          Online Presence
        </h2>
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
        <a
          href={socialLinks.website}
          className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Globe className="w-5 h-5 text-[#f37a1f]" />
          <span className="text-[#393939]">
            {socialLinks.website || "Website Link"}
          </span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Facebook className="w-5 h-5 text-[#f37a1f]" />
          <span className="text-[#393939]">
            {socialLinks.facebook || "Facebook Link"}
          </span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Linkedin className="w-5 h-5 text-[#f37a1f]" />
          <span className="text-[#393939]">
            {socialLinks.linkedin || "Linkedin Link"}
          </span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Instagram className="w-5 h-5 text-[#f37a1f]" />
          <span className="text-[#393939]">
            {socialLinks.instagram || "Instagram Link"}
          </span>
        </a>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Edit Social Links
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600">
                  Website Link
                </label>
                <input
                  type="text"
                  name="website"
                  value={socialLinks.website ?? "Website Link"}
                  onChange={handleInputChange}
                  placeholder="e.g., www.list2ship.com"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">
                  Facebook Link
                </label>
                <input
                  type="text"
                  name="facebook"
                  value={socialLinks.facebook}
                  onChange={handleInputChange}
                  placeholder="e.g., https://www.facebook.com/list2ship"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">
                  LinkedIn Link
                </label>
                <input
                  type="text"
                  name="linkedin"
                  value={socialLinks.linkedin}
                  onChange={handleInputChange}
                  placeholder="e.g., https://www.linkedin.com/in/list2ship"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">
                  Instagram Link
                </label>
                <input
                  type="text"
                  name="instagram"
                  value={socialLinks.instagram}
                  onChange={handleInputChange}
                  placeholder="e.g., https://www.instagram.com/list2ship"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                />
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
