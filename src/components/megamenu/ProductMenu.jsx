export default function ProductMenu() {
  return (
    <div className="absolute left-0 hidden  w-[60vw] bg-white shadow-lg group-hover:block z-50 rounded-md">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-3 gap-8">
          {/* Column 1: Product Categories */}
          <div>
            <h3 className="font-semibold text-lg text-primary">Categories</h3>
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
                  href="/products?category=beauty"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Beauty
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
                  href="/products?category=home-appliances"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Home Appliances
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Featured Products */}
          <div>
            <h3 className="font-semibold text-lg text-primary">
              Featured Products
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
                  href="/products?category=beauty&featured=true"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Trending Beauty
                </a>
              </li>
              <li>
                <a
                  href="/products?category=sports&featured=true"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Popular Sports Gear
                </a>
              </li>
              <li>
                <a
                  href="/products?category=home-appliances&featured=true"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Latest Home Appliances
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Top Brands */}
          <div>
            <h3 className="font-semibold text-lg text-primary">Top Brands</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/products?brand=samsung"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Samsung
                </a>
              </li>
              <li>
                <a
                  href="/products?brand=apple"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Apple
                </a>
              </li>
              <li>
                <a
                  href="/products?brand=nike"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Nike
                </a>
              </li>
              <li>
                <a
                  href="/products?brand=lg"
                  className="text-sm text-secondary hover:text-primary"
                >
                  LG
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
