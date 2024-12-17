export default function ServicesMenu() {
  return (
    <div
      className={`dropdown-content menu  bg-white shadow-lg z-50 rounded-md w-[60vw] absolute left-0 top-full`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-5 gap-6">
          {/* Mega Menu Columns */}
          <div>
            <h3 className="font-semibold text-lg text-primary">Products</h3>
            <ul className="mt-2 space-y-2  ">
              <li>
                <a
                  href="/products?category=electronics"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Electronics
                </a>
              </li>
              <li>
                <a
                  href="/products?category=fashion"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Fashion
                </a>
              </li>
              <li>
                <a
                  href="/products?category=home-appliances"
                  className="text-sm text-secondary  hover:text-primary"
                >
                  Home Appliances
                </a>
              </li>
              <li>
                <a
                  href="/products?category=sports"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Sports
                </a>
              </li>
              <li>
                <a
                  href="/products?category=beauty"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Beauty
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-primary">
              Manufacturers
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/manufacturers"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Top Manufacturers
                </a>
              </li>
              <li>
                <a
                  href="/manufacturers"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Verified Manufacturers
                </a>
              </li>
              <li>
                <a
                  href="/manufacturers"
                  className="text-sm text-secondary hover:text-primary"
                >
                  New Manufacturers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-primary">Suppliers</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/suppliers"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Top Suppliers
                </a>
              </li>
              <li>
                <a
                  href="/suppliers"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Verified Suppliers
                </a>
              </li>
              <li>
                <a
                  href="/suppliers"
                  className="text-sm text-secondary hover:text-primary"
                >
                  New Suppliers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-primary">Importers</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/importers"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Top Importers
                </a>
              </li>
              <li>
                <a
                  href="/importers"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Verified Importers
                </a>
              </li>
              <li>
                <a
                  href="/importers"
                  className="text-sm text-secondary hover:text-primary"
                >
                  New Importers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-primary">Exporters</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/exporters"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Top Exporters
                </a>
              </li>
              <li>
                <a
                  href="/exporters"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Verified Exporters
                </a>
              </li>
              <li>
                <a
                  href="/exporters"
                  className="text-sm text-secondary hover:text-primary"
                >
                  New Exporters
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
