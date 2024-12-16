import { DollarSign, Package, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    productName: '',
    destination: '',
    targetPrice: '',
    quantity: '',
    paymentTerms: '',
    shippingTerms: '',
    description: '',
    specifications: '',
    contactPerson: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-sm p-6 max-w-3xl mx-auto"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#393939] mb-2">
              Product Name
            </label>
            <div className="relative">
              <Package className="absolute left-3 top-3 w-5 h-5 text-[#393939]/40" />
              <input
                type="text"
                name="productName"
                className="pl-10 w-full p-3 rounded-lg border border-[#d0d0c4] focus:outline-none focus:ring-2 focus:ring-[#f37a1f]"
                placeholder="Enter product name"
                value={formData.productName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#393939] mb-2">
              Destination
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-[#393939]/40" />
              <input
                type="text"
                name="destination"
                className="pl-10 w-full p-3 rounded-lg border border-[#d0d0c4] focus:outline-none focus:ring-2 focus:ring-[#f37a1f]"
                placeholder="Enter destination country"
                value={formData.destination}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#393939] mb-2">
              Target Price
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 w-5 h-5 text-[#393939]/40" />
              <input
                type="text"
                name="targetPrice"
                className="pl-10 w-full p-3 rounded-lg border border-[#d0d0c4] focus:outline-none focus:ring-2 focus:ring-[#f37a1f]"
                placeholder="Enter target price or Negotiable"
                value={formData.targetPrice}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#393939] mb-2">
              Quantity Required
            </label>
            <input
              type="text"
              name="quantity"
              className="w-full p-3 rounded-lg border border-[#d0d0c4] focus:outline-none focus:ring-2 focus:ring-[#f37a1f]"
              placeholder="Enter required quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#393939] mb-2">
              Payment Terms
            </label>
            <select
              name="paymentTerms"
              className="w-full p-3 rounded-lg border border-[#d0d0c4] focus:outline-none focus:ring-2 focus:ring-[#f37a1f]"
              value={formData.paymentTerms}
              onChange={handleChange}
            >
              <option value="">Select payment terms</option>
              <option value="bank">Bank to Bank</option>
              <option value="lc">Letter of Credit</option>
              <option value="advance">Advance Payment</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#393939] mb-2">
              Shipping Terms
            </label>
            <select
              name="shippingTerms"
              className="w-full p-3 rounded-lg border border-[#d0d0c4] focus:outline-none focus:ring-2 focus:ring-[#f37a1f]"
              value={formData.shippingTerms}
              onChange={handleChange}
            >
              <option value="">Select shipping terms</option>
              <option value="door">Door to Door</option>
              <option value="fob">FOB</option>
              <option value="cif">CIF</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#393939] mb-2">
            Product Description
          </label>
          <textarea
            name="description"
            rows={4}
            className="w-full p-3 rounded-lg border border-[#d0d0c4] focus:outline-none focus:ring-2 focus:ring-[#f37a1f]"
            placeholder="Enter detailed product description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#393939] mb-2">
            Specifications
          </label>
          <textarea
            name="specifications"
            rows={3}
            className="w-full p-3 rounded-lg border border-[#d0d0c4] focus:outline-none focus:ring-2 focus:ring-[#f37a1f]"
            placeholder="Enter product specifications"
            value={formData.specifications}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#393939] mb-2">
            Contact Person
          </label>
          <input
            type="text"
            name="contactPerson"
            className="w-full p-3 rounded-lg border border-[#d0d0c4] focus:outline-none focus:ring-2 focus:ring-[#f37a1f]"
            placeholder="Enter contact person name"
            value={formData.contactPerson}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#f37a1f] text-white px-6 py-3 rounded-lg hover:bg-[#e06a10] transition-colors"
          >
            Post Enquiry
          </button>
        </div>
      </div>
    </form>
  );
}
