/* eslint-disable react/prop-types */
import React from 'react';
import { Calendar, MapPin, DollarSign } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

export default function EnquiryCard({ enquiry }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <div
        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#393939]">
              {enquiry.productName}
            </h3>
            <span className="px-3 py-1 bg-[#f37a1f]/10 text-[#f37a1f] text-sm rounded-full">
              {enquiry.category}
            </span>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center text-[#393939]/60">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{enquiry.destination}</span>
            </div>
            <div className="flex items-center text-[#393939]/60">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Expires: {enquiry.expiryDate}</span>
            </div>
            <div className="flex items-center text-[#393939]/60">
              <DollarSign className="w-4 h-4 mr-2" />
              <span>{enquiry.targetPrice}</span>
            </div>
          </div>

          <p className="mt-4 text-sm text-[#393939]/80 line-clamp-2">
            {enquiry.description}
          </p>
        </div>
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        enquiry={enquiry}
      />
    </>
  );
}
