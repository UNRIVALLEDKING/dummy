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
            src="https://www.youtube.com/embed/g9UT7rz6Qro"
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

export const BestDeals = () => (
  <div className="space-y-6">
    <h4 className="font-semibold text-[#393939] mb-4">Find the Best Deals</h4>
    <p className="text-gray-600">
      Discover exclusive offers tailored for you. Find deals, upload your
      requirements, and let us help you connect with the best sellers.
    </p>

    <div className="space-y-4">
      <h5 className="font-semibold text-[#393939]">How to Get Started:</h5>
      <ul className="space-y-2">
        <li>
          <strong>1. Explore:</strong> Browse through curated deals and find
          offers that fit your needs.
        </li>
        <li>
          <strong>2. Personalized Offers:</strong> Upload your requirements and
          get matched with the best options.
        </li>
        <li>
          <strong>3. Connect:</strong> Contact sellers to negotiate or finalize
          your deals.
        </li>
      </ul>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {['Deal 1', 'Deal 2', 'Deal 3', 'Deal 4', 'Deal 5'].map((deal) => (
        <div
          key={deal}
          className="p-4 bg-gray-50 rounded-lg border border-gray-300 text-center"
        >
          <h4 className="font-semibold text-gray-800">{deal}</h4>
          <p className="text-sm text-gray-600">Up to 50% Off</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm rounded">
            View Details
          </button>
        </div>
      ))}
    </div>
  </div>
);

export const Communication = () => (
  <div className="space-y-6">
    <h4 className="font-semibold text-[#393939] mb-4">Stay Connected</h4>
    <ul className="space-y-2">
      <li>Chat with verified partners</li>
      <li>Send inquiries and get responses in real-time</li>
      <li>Instant notifications for important updates</li>
    </ul>
  </div>
);

export const Analytics = () => (
  <div className="space-y-6">
    <h4 className="font-semibold text-[#393939] mb-4">Analytics Dashboard</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 bg-gray-50 rounded-lg">
        <h5 className="font-semibold mb-2">Sales Overview</h5>
        <p>Track your sales and revenue trends with detailed charts.</p>
      </div>
      <div className="p-6 bg-gray-50 rounded-lg">
        <h5 className="font-semibold mb-2">User Engagement</h5>
        <p>Understand your audience with data-driven insights.</p>
      </div>
    </div>
  </div>
);

export const NewsAlerts = () => (
  <div className="space-y-6">
    <h4 className="font-semibold text-[#393939] mb-4">Latest Updates</h4>
    <ul className="space-y-2">
      <li>New product launches and updates</li>
      <li>Industry news and trends</li>
      <li>Upcoming promotions and offers</li>
    </ul>
  </div>
);

export const Events = () => (
  <div className="space-y-6">
    <h4 className="font-semibold text-[#393939] mb-4">Upcoming Events</h4>
    <ul className="space-y-2">
      <li>Trade Shows</li>
      <li>Webinars and Online Sessions</li>
      <li>Product Demonstrations</li>
      <li>Networking Meetups</li>
    </ul>
  </div>
);

// Feature content components
export const GlobalMarketplace = () => (
  <div className="space-y-6">
    <p>
      Connect with verified suppliers and buyers worldwide through our
      comprehensive trading platform.
    </p>
  </div>
);

export const LiveBroadcasting = () => (
  <div className="space-y-6">
    <p>
      Showcase products through live streams, interactive demos, and virtual
      trade shows.
    </p>
  </div>
);

export const VerifiedPartners = () => (
  <div className="space-y-6">
    <p>
      All suppliers and products undergo thorough verification for secure
      trading.
    </p>
  </div>
);

export const BusinessNetwork = () => (
  <div className="space-y-6">
    <p>
      Build lasting relationships with importers, exporters, manufacturers, and
      distributors.
    </p>
  </div>
);

export const AnalyticsDashboard = () => (
  <div className="space-y-6">
    <p>Track performance, market trends, and business insights in real-time.</p>
  </div>
);

export const Support24x7 = () => (
  <div className="space-y-6">
    <p>Access multilingual support and assistance whenever you need it.</p>
  </div>
);

export const TechnicalAssistance = () => (
  <div className="space-y-6">
    <h4 className="font-semibold text-[#393939] mb-4">Technical Assistance</h4>
    <p>
      Get expert support for website development, SEO optimization, and
      enhancing your digital presence. Our team will guide you through technical
      challenges and help you build a stronger online presence.
    </p>
    <ul className="space-y-2">
      <li>Website Development</li>
      <li>SEO Optimization</li>
      <li>Social Media Management</li>
      <li>Digital Marketing Assistance</li>
    </ul>
  </div>
);

export const MarketingSupport = () => (
  <div className="space-y-6">
    <h4 className="font-semibold text-[#393939] mb-4">Marketing Support</h4>
    <p>
      Comprehensive marketing solutions that help you elevate your business.
      From video production to podcasts and social media strategies, we offer
      tools to build your brand and reach your audience.
    </p>
    <ul className="space-y-2">
      <li>Video Production</li>
      <li>Podcast Creation</li>
      <li>Social Media Management</li>
      <li>Targeted Digital Campaigns</li>
    </ul>
  </div>
);

export const DocumentationSupport = () => (
  <div className="space-y-6">
    <h4 className="font-semibold text-[#393939] mb-4">Documentation Support</h4>
    <p>
      Get guidance on important business registrations and documentation. We
      assist with GST, IEC codes, FSSAI registration, and other essential
      business documents to ensure you are compliant and ready to do business.
    </p>
    <ul className="space-y-2">
      <li>GST Registration Assistance</li>
      <li>IEC Code Application</li>
      <li>FSSAI Registration</li>
      <li>Business Documentation Support</li>
    </ul>
  </div>
);

export const HiringAssistance = () => (
  <div className="space-y-6">
    <h4 className="font-semibold text-[#393939] mb-4">Hiring Assistance</h4>
    <p>
      Our recruitment services help you find the best talent for your business.
      From job postings to candidate screening and interviews, we support you
      through every step of the hiring process.
    </p>
    <ul className="space-y-2">
      <li>End-to-End Recruitment</li>
      <li>Job Postings</li>
      <li>Candidate Screening</li>
      <li>Interview Coordination</li>
    </ul>
  </div>
);

export const FinancialSupport = () => (
  <div className="space-y-6">
    <h4 className="font-semibold text-[#393939] mb-4">Financial Support</h4>
    <p>
      Access tailored financial solutions for your business. We offer
      low-interest loans and customized financing options to help your business
      grow and succeed.
    </p>
    <ul className="space-y-2">
      <li>Low-Interest Loans</li>
      <li>Customized Financing Solutions</li>
      <li>Cash Flow Management</li>
      <li>Financial Planning</li>
    </ul>
  </div>
);
