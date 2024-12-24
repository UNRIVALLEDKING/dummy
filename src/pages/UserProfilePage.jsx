/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import CompanySidebar from "../components/CompanySidebar";
import ContactInfo from "../components/user/ContactInfo";
import CompanyInfo from "../components/user/CompanyInfo";
import KycDocuments from "../components/user/KycDocuments";
import SocialLinks from "../components/user/SocialLinks";
import BankDetails from "../components/user/BankDetails";

export default function UserProfilePage() {
  const [userData, setUserData] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    companySize: "",
    goals: [],
    challenges: [],
    customGoal: "",
    customChallenge: "",
  });
  const [defaultGoals, setDefaultGoals] = useState([
    { id: 0, value: "Expand business globally" },
    { id: 1, value: "Find reliable suppliers and buyers" },
    { id: 2, value: "Increase sales and reduce costs" },
    { id: 3, value: "Improve product visibility" },
  ]);
  const [defaultChallenges, setDefaultChallenges] = useState([
    { id: 0, value: "Difficulty in finding trustworthy business partners" },
    { id: 1, value: "Limited knowledge of international markets" },
    { id: 2, value: "High costs of traditional networking" },
  ]);

  useEffect(() => {
    // Fetch user data from localStorage
    const storedData = JSON.parse(localStorage.getItem("userData"));
    console.log("storedData----", storedData);
    if (storedData) {
      setUserData(storedData);
      setFormData({ ...formData, ...storedData });
    }
  }, []);

  console.log("userData---->", userData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e, type, arrayData) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      // If the goal is checked, add it to the goals array, otherwise remove it
      const newValues = checked
        ? [
            ...prev[type],
            {
              id: Number(value),
              value: arrayData.find((goal) => goal.id === Number(value)).value,
            },
          ]
        : prev[type].filter((item) => item.id !== Number(value));

      return { ...prev, [type]: newValues };
    });
  };

  const handleAddCustomGoal = () => {
    setDefaultGoals((prev) => [
      ...prev,
      { id: defaultGoals.length, value: formData.customGoal },
    ]);
    setFormData((prev) => ({
      ...prev,
      goals: [
        ...prev.goals,
        { id: defaultGoals.length, value: formData.customGoal },
      ],
      customGoal: "",
    }));
  };

  const handleAddCustomChallenge = () => {
    setDefaultChallenges((prev) => [
      ...prev,
      {
        id: defaultChallenges.length,
        value: formData.customChallenge,
      },
    ]);
    setFormData((prev) => ({
      ...prev,
      challenges: [
        ...prev.challenges,
        { id: defaultChallenges.length, value: formData.customChallenge },
      ],
      customChallenge: "",
    }));
  };

  console.log("formData---->", formData);

  const handleSaveDetails = () => {
    try {
      // Save the updated details to localStorage
      const updatedUserData = { ...userData, ...formData };
      console.log("updatedUserData---->", updatedUserData);
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
      setUserData(updatedUserData);
      setIsModalOpen(false); // Close the modal after saving
    } catch (err) {
      console.log("err in saving details---", err);
    }
  };

  if (!userData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-500 text-lg">
          No user data found. Please register.
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <CompanySidebar />
      <main className="ml-64 flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header/Banner */}
            <div className="h-32 bg-gradient-to-r from-[#f37a1f] to-[#e06a10]" />

            {/* Profile Section */}
            <div className="px-8 py-6 -mt-16">
              <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
                  alt="Rajesh Kumar"
                  className="w-32 h-32 rounded-xl border-4 border-white shadow-lg"
                />
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-[#393939]">
                    {userData.firstName} {userData.lastName}
                  </h1>
                  <p className="text-[#393939]/60">
                    Owner - {userData.companyInfo?.companyName}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-8">
              <ContactInfo />
              <CompanyInfo />
              <BankDetails />
              <KycDocuments />
              <SocialLinks />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
