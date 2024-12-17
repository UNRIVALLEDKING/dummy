export default function CategoryMenu() {
  return (
    <div className="absolute left-0 hidden w-[60vw] bg-white shadow-lg group-hover:block z-50 rounded-md">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-3 gap-8">
          {/* Column 1: Main Categories */}
          <div>
            <h3 className="font-semibold text-lg text-primary">
              Main Categories
            </h3>
            <ul className="mt-2 space-y-2">
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
                  className="text-sm text-secondary hover:text-primary"
                >
                  Home Appliances
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Additional Categories */}
          <div>
            <h3 className="font-semibold text-lg text-primary">
              Additional Categories
            </h3>
            <ul className="mt-2 space-y-2">
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
              <li>
                <a
                  href="/products?category=health"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Health
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Items */}
          <div>
            <h3 className="font-semibold text-lg text-primary">
              Featured Items
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/products?category=electronics&featured=true"
                  className="text-sm text-secondary hover:text-primary"
                >
                  New Electronics
                </a>
              </li>
              <li>
                <a
                  href="/products?category=fashion&featured=true"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Trending Fashion
                </a>
              </li>
              <li>
                <a
                  href="/products?category=sports&featured=true"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Top Sports Gear
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
