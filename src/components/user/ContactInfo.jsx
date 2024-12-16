import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-[#393939] mb-4">
        Contact Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-[#f37a1f]" />
            <div>
              <p className="text-[#393939]">+91 98765 43210</p>
              <p className="text-sm text-[#393939]/60">Primary</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-[#f37a1f]" />
            <div>
              <p className="text-[#393939]">+91 98765 43211</p>
              <p className="text-sm text-[#393939]/60">WhatsApp</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-[#f37a1f]" />
            <div>
              <p className="text-[#393939]">rajesh.kumar@techcraft.com</p>
              <p className="text-sm text-[#393939]/60">Primary</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-[#f37a1f]" />
            <div>
              <p className="text-[#393939]">123, Tech Park, Andheri East</p>
              <p className="text-[#393939]">Mumbai, Maharashtra - 400069</p>
              <p className="text-[#393939]">India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
