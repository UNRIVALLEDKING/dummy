import { ArrowRight } from "lucide-react";
import SampleProductDeals from "./SampleProductDeals";
import { Tag } from "../../ui/Tabs";
import BestDealCard from "./BestDealCard";

// eslint-disable-next-line react/prop-types
export default function BestDealShowCase({ title, subtitle }) {
  console.log(SampleProductDeals);

  const products = SampleProductDeals;
  const remainingCount = Math.max(0, products.length - 6);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#393939]">{title}</h2>
            <p className="text-[#393939]/60 mt-2">{subtitle}</p>
          </div>
          <button className="flex items-center space-x-2 text-[#f37a1f] hover:text-[#e06a1f] transition-colors">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.slice(0, 6).map((product) => (
            <BestDealCard key={product.id} product={product} size={"small"} />
          ))}

          {remainingCount > 0 && (
            <div className="relative bg-gradient-to-br from-[#f37a1f]/5 to-[#f37a1f]/10 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:from-[#f37a1f]/10 hover:to-[#f37a1f]/20 transition-all group">
              <div className="absolute -top-2 -right-2">
                <Tag variant="count">{remainingCount}</Tag>
              </div>
              <ArrowRight className="w-8 h-8 text-[#f37a1f] mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-[#f37a1f] mb-2">
                View More
              </h3>
              <p className="text-sm text-[#393939]/60 text-center">
                Discover more products
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
