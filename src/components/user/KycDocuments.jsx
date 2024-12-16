import { FileText, CheckCircle } from 'lucide-react';

const documents = [
  { label: 'GST Number', value: '27AABCT1234A1Z5', verified: true },
  { label: 'PAN Number', value: 'AABCT1234A', verified: true },
  { label: 'CIN', value: 'U72200MH2008PTC123456', verified: true },
  { label: 'MSME Registration', value: 'UDYAM-MH-01-0123456', verified: true },
  { label: 'IEC Code', value: '0123456789', verified: true },
];

export default function KycDocuments() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-[#393939] mb-4">
        KYC Documents
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documents.map((doc, index) => (
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
            {doc.verified && <CheckCircle className="w-5 h-5 text-green-500" />}
          </div>
        ))}
      </div>
    </section>
  );
}
