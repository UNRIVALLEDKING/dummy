export default function MoreMenu() {
  return (
    <div className="absolute left-0 hidden  w-[60vw] bg-white shadow-lg group-hover:block z-50 rounded-md">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-3 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="font-semibold text-lg text-primary">Company Info</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/about-us"
                  className="text-sm text-secondary hover:text-primary"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Business Partners */}
          <div>
            <h3 className="font-semibold text-lg text-primary">
              Business Partners
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/suppliers"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Suppliers
                </a>
              </li>
              <li>
                <a
                  href="/importers"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Importers
                </a>
              </li>
              <li>
                <a
                  href="/exporters"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Exporters
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Additional Links */}
          <div>
            <h3 className="font-semibold text-lg text-primary">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/terms-and-conditions"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-sm text-secondary hover:text-primary"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
