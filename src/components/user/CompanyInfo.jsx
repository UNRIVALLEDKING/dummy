import { Building2, Users, Calendar, CreditCard } from 'lucide-react';

export default function CompanyInfo() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-[#393939] mb-4">
        Company Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Building2 className="w-5 h-5 text-[#f37a1f]" />
            <div>
              <p className="font-medium text-[#393939]">
                TechCraft Electronics
              </p>
              <p className="text-sm text-[#393939]/60">
                Private Limited Company
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-[#f37a1f]" />
            <div>
              <p className="text-[#393939]">50-100 employees</p>
              <p className="text-sm text-[#393939]/60">Company Size</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-[#f37a1f]" />
            <div>
              <p className="text-[#393939]">Mon - Sat: 9:00 AM - 6:00 PM</p>
              <p className="text-sm text-[#393939]/60">Business Hours</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <CreditCard className="w-5 h-5 text-[#f37a1f]" />
            <div>
              <p className="text-[#393939]">Bank Transfer, UPI, Cash</p>
              <p className="text-sm text-[#393939]/60">Payment Methods</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
