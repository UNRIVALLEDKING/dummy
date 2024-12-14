export const TrustedClients = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {['Amazon', 'Walmart', 'Target', 'Nike', 'Adidas', 'Samsung'].map(
        (client) => (
          <div
            key={client}
            className="p-4 border border-[#d0d0c4] rounded-lg text-center"
          >
            <h4 className="font-semibold text-[#393939]">{client}</h4>
            <p className="text-sm text-gray-600">Verified Partner</p>
          </div>
        )
      )}
    </div>
  </div>
);

export const LegalAssistance = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-[#393939] mb-4">Legal Services</h4>
        <ul className="space-y-2">
          <li>GST Registration</li>
          <li>IEC Code Application</li>
          <li>FSSAI Registration</li>
          <li>Business Documentation</li>
        </ul>
      </div>
      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-[#393939] mb-4">Technical Support</h4>
        <ul className="space-y-2">
          <li>Website Development</li>
          <li>SEO Optimization</li>
          <li>Social Media Management</li>
          <li>Digital Marketing</li>
        </ul>
      </div>
    </div>
  </div>
);

export const BuyingSelling = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-[#393939] mb-4">
          Training Resources
        </h4>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/placeholder1"
            title="Training Guide"
            allowFullScreen
          />
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="font-semibold text-[#393939]">Available Resources</h4>
        <ul className="space-y-2">
          <li>Step-by-step PDF guides</li>
          <li>Video tutorials</li>
          <li>Best practices documentation</li>
          <li>Case studies</li>
        </ul>
      </div>
    </div>
  </div>
);
