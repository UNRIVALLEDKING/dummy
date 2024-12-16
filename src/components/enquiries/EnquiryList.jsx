import EnquiryCard from './EnquiryCard';
import { sampleEnquiries } from './sampleData';

export default function EnquiryList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sampleEnquiries.map((enquiry, index) => (
        <EnquiryCard key={index} enquiry={enquiry} />
      ))}
    </div>
  );
}
