import { useState, useEffect } from "react";
import { FileText, CheckCircle, Edit3, Trash2 } from "lucide-react";

export default function KycDocuments() {
  const [userData, setUserData] = useState();
  const [documents, setDocuments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDoc, setCurrentDoc] = useState({
    label: "",
    value: "",
    verified: false,
  });

  const exampleDocuments = [
    { label: "GST Number", value: "27AABCT1234A1Z5", verified: true },
    { label: "PAN Number", value: "AABCT1234A", verified: true },
    { label: "CIN", value: "U72200MH2008PTC123456", verified: true },
    {
      label: "MSME Registration",
      value: "UDYAM-MH-01-0123456",
      verified: true,
    },
    { label: "IEC Code", value: "0123456789", verified: true },
  ];

  console.log("examl", exampleDocuments);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    console.log("kycDocuments stored data", storedData);
    if (storedData) {
      setUserData(storedData);

      if (storedData.kycDocuments) {
        setDocuments([...documents, ...storedData.kycDocuments]);
      }
    }
  }, []);

  console.log("documents----", documents);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentDoc((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    const updatedDocs = [...documents];
    const existingIndex = updatedDocs.findIndex(
      (doc) => doc.label === currentDoc.label
    );

    if (existingIndex > -1) {
      updatedDocs[existingIndex] = currentDoc;
    } else {
      updatedDocs.push(currentDoc);
    }

    setDocuments(updatedDocs);
    const data = { ...userData, kycDocuments: [...updatedDocs] };
    localStorage.setItem("userData", JSON.stringify(data));
    setIsModalOpen(false);
    setCurrentDoc({ label: "", value: "", verified: false });
  };

  const handleDelete = (index) => {
    const updatedDocs = documents.filter((_, i) => i !== index);
    setDocuments(updatedDocs);
    const data = { ...userData, kycDocuments: [...updatedDocs] };
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const missingDocuments = exampleDocuments.filter(
    (exampleDoc) => !documents?.some((doc) => doc.label === exampleDoc.label)
  );

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-[#393939]">KYC Documents</h2>
        <button
          onClick={() => {
            setIsModalOpen(true);
            setCurrentDoc({ label: "", value: "", verified: false });
          }}
          className="p-2 text-[#393939] bg-gray-100 rounded-full"
        >
          <Edit3 className="w-5 h-5" />
        </button>
      </div>

      {documents.length !== 5 && (
        <div className=" pb-6">
          <p className="text-gray-600 mb-4">
            You need to add the following KYC documents:
          </p>
          <ul className="list-disc list-inside mb-4">
            {missingDocuments.map((doc, index) => (
              <li key={index} className="text-red-600">
                {doc.label}
              </li>
            ))}
          </ul>

          <p className="text-gray-600">
            Click the <span className="font-semibold">Edit</span> button to add
            these documents.
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documents?.map((doc, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-[#f37a1f]" />
              <div>
                <p className="font-medium text-[#393939]">{doc.label}</p>
                <p className="text-sm text-[#393939]/60">{doc.value}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {doc.verified && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
              <button
                onClick={() => handleDelete(index)}
                className="p-2 text-red-600 bg-gray-100 rounded-full hover:bg-red-50"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Add/Edit KYC Document
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600">
                  Document Name
                </label>
                <select
                  name="label"
                  value={currentDoc.label}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                >
                  <option value="" disabled>
                    Select a document
                  </option>
                  {missingDocuments.length > 0 ? (
                    missingDocuments.map((doc, index) => (
                      <option key={index} value={doc.label}>
                        {doc.label}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      All documents are already added
                    </option>
                  )}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600">
                  Document Value
                </label>
                <input
                  type="text"
                  name="value"
                  value={currentDoc.value}
                  onChange={handleInputChange}
                  placeholder="e.g., 27AABCT1234A1Z5"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#f37a1f]"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="verified"
                  checked={currentDoc.verified}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-[#f37a1f] border-gray-300 rounded focus:ring focus:ring-[#f37a1f]"
                />
                <label className="text-sm text-gray-600">Verified</label>
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
