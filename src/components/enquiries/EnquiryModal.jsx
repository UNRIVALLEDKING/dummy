/* eslint-disable react/prop-types */
import {
  X,
  Calendar,
  MapPin,
  DollarSign,
  Package,
  Truck,
  CreditCard,
} from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose, enquiry }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-[#d0d0c4] p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#393939]">
            {enquiry.productName}
          </h2>
          <button
            onClick={onClose}
            className="text-[#393939]/60 hover:text-[#393939]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 text-[#393939]/60">
              <MapPin className="w-5 h-5" />
              <span>{enquiry.destination}</span>
            </div>
            <div className="flex items-center space-x-2 text-[#393939]/60">
              <Calendar className="w-5 h-5" />
              <span>Expires: {enquiry.expiryDate}</span>
            </div>
            <div className="flex items-center space-x-2 text-[#393939]/60">
              <DollarSign className="w-5 h-5" />
              <span>{enquiry.targetPrice}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#393939] mb-2">
                Product Description
              </h3>
              <p className="text-[#393939]/80">{enquiry.description}</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#393939] mb-2">
                Specifications
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm text-[#393939]/80 whitespace-pre-wrap">
                  {enquiry.specifications}
                </pre>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-[#393939] mb-2">
                  Quantity Required
                </h3>
                <div className="flex items-center space-x-2 text-[#393939]/80">
                  <Package className="w-5 h-5" />
                  <span>{enquiry.quantity}</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[#393939] mb-2">
                  Shipping Terms
                </h3>
                <div className="flex items-center space-x-2 text-[#393939]/80">
                  <Truck className="w-5 h-5" />
                  <span>{enquiry.shippingTerms}</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[#393939] mb-2">
                  Payment Terms
                </h3>
                <div className="flex items-center space-x-2 text-[#393939]/80">
                  <CreditCard className="w-5 h-5" />
                  <span>{enquiry.paymentTerms}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#d0d0c4] pt-6">
            <button
              className="w-full bg-[#f37a1f] text-white py-3 rounded-lg hover:bg-[#e06a10] transition-colors"
              onClick={() =>
                console.log('Contact initiated for enquiry:', enquiry.id)
              }
            >
              Contact Buyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
