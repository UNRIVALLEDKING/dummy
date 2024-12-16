import { useEffect, useState } from "react";

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
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50 flex flex-col items-center py-10">
      {/* Profile Header */}
      <div className="w-11/12 max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-between border-b pb-6 mb-8">
          <h1 className="text-3xl font-bold text-primary">
            Welcome, {userData.firstName}!
          </h1>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="btn bg-red-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-red-600"
          >
            Log Out
          </button>
        </div>

        {/* Profile Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold text-secondary">
              Personal Information
            </h2>
            <div className="mt-4 space-y-3">
              <div className="flex items-center">
                <span className="font-semibold text-gray-600 w-32">
                  First Name:
                </span>
                <span className="text-gray-800">{userData.firstName}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-600 w-32">
                  Last Name:
                </span>
                <span className="text-gray-800">{userData.lastName}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-600 w-32">
                  Country:
                </span>
                <span className="text-gray-800">{userData.country}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-600 w-32">
                  {userData.country === "India" ? "Mobile Number" : "Email"}:
                </span>
                <span className="text-gray-800">{userData.contact}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary">
              Company Information
            </h2>
            <div className="mt-4 space-y-3">
              <div className="flex items-center">
                <span className="font-semibold text-gray-600 w-32">
                  Company Name:
                </span>
                <span className="text-gray-800">
                  {userData.companyName || "Not Provided"}
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-600 w-32">
                  Company Size:
                </span>
                <span className="text-gray-800">
                  {userData.companySize || "Not Provided"}
                </span>
              </div>
              <div className=" flex flex-col   ">
                <span className="font-semibold text-gray-600 w-32">Goals:</span>
                <div className="  ">
                  {userData.goals?.map((goal) => (
                    <div key={goal.id} className=" pl-2  text-gray-800">
                      {goal.value}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-col items-start ">
                <span className="font-semibold text-gray-600 w-32">
                  Challenges:
                </span>
                <div>
                  {userData.challenges?.map((challenge) => (
                    <div key={challenge.id} className=" pl-2  text-gray-800">
                      {challenge.value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Details Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary"
          >
            Add Company Details
          </button>
        </div>
      </div>

      {/* Profile Avatar Section */}
      <div className="w-11/12 max-w-4xl bg-white rounded-lg shadow-lg mt-6 p-8 flex flex-col items-center">
        <img
          src={`https://avatars.dicebear.com/api/initials/${userData.firstName}-${userData.lastName}.svg`}
          alt="User Avatar"
          className="w-32 h-32 rounded-full shadow-lg border-4 border-primary"
        />
        <h2 className="text-xl font-semibold text-primary mt-4">
          {userData.firstName} {userData.lastName}
        </h2>
        <p className="text-gray-500">{userData.country}</p>
      </div>

      {/* Modal for Adding Details */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-11/12 max-w-lg">
            <h3 className="text-xl font-bold text-primary mb-4">
              Add Company Details
            </h3>

            <div className="space-y-4">
              {/* Company Name */}
              <div>
                <label className="block text-gray-600 font-semibold">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="input input-bordered w-full mt-2"
                />
              </div>

              {/* Company Size */}
              <div>
                <label className="block text-gray-600 font-semibold">
                  Company Size
                </label>
                <input
                  type="text"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  className="input input-bordered w-full mt-2"
                />
              </div>

              {/* Goals */}
              <div>
                <label className="block text-gray-600 font-semibold">
                  Goals
                </label>
                <div className="mt-2 space-y-2">
                  {defaultGoals.map((goal) => (
                    <div key={goal.id} className="flex items-center">
                      <input
                        type="checkbox"
                        value={goal.id} // Ensure value is set to the goal id
                        checked={formData.goals?.some((g) => g.id === goal.id)} // Check if the goal's id is in the selected goals array
                        onChange={(e) =>
                          handleCheckboxChange(e, "goals", defaultGoals)
                        }
                        className="checkbox"
                      />
                      <span className="ml-2">{goal.value}</span>
                    </div>
                  ))}
                  <div className="flex items-center mt-2">
                    <input
                      type="text"
                      name="customGoal"
                      value={formData.customGoal}
                      onChange={handleInputChange}
                      className="input input-bordered w-4/5"
                      placeholder="Add Custom Goal"
                    />
                    <button
                      type="button"
                      onClick={handleAddCustomGoal}
                      className="btn btn-outline ml-2"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>

              {/* Challenges */}
              <div>
                <label className="block text-gray-600 font-semibold">
                  Challenges
                </label>
                <div className="mt-2 space-y-2">
                  {defaultChallenges.map((challenge) => (
                    <div key={challenge.id} className="flex items-center">
                      <input
                        type="checkbox"
                        value={challenge.id}
                        checked={formData.challenges?.some(
                          (c) => c.id === challenge.id
                        )}
                        onChange={(e) =>
                          handleCheckboxChange(
                            e,
                            "challenges",
                            defaultChallenges
                          )
                        }
                        className="checkbox"
                      />
                      <span className="ml-2">{challenge.value}</span>
                    </div>
                  ))}
                  <div className="flex items-center mt-2">
                    <input
                      type="text"
                      name="customChallenge"
                      value={formData.customChallenge}
                      onChange={handleInputChange}
                      className="input input-bordered w-4/5"
                      placeholder="Add Custom Challenge"
                    />
                    <button
                      type="button"
                      onClick={handleAddCustomChallenge}
                      className="btn btn-outline ml-2"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn btn-ghost text-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveDetails}
                className="btn bg-primary text-white"
              >
                Save Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
