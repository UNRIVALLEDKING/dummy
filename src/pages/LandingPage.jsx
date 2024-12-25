import ServiceButtons from '../components/services/ServiceButtons';

import VideoShowcase from '../components/videos/VideoShowcase';
import HomeSwiper from '../components/HomeSwiper';
import RegionSection from '../components/RegionSection';
import CountrySection from '../components/CountrySection';
import ProductShowcase from '../components/products/ProductShowcase';
// import BusinessCounselling from '../components/BusinessCounselling';
// import TradeConfidence from '../components/TradeConfidence';
import ProcessFlow from '../components/ProcessFlow';
import IndianCities from '../components/IndianCities';
import CategoryScroller from '../components/CategoryScroll';
import Vision from '../components/Vision';
import Mission from '../components/Mission';
import Milestones from '../components/Milestone';
import BestDealShowCase from '../components/products/bestdeals/BestDealShowCase';
import EnquiryList from '../components/enquiries/EnquiryList';
import Explore from '../components/Explore';
import LiveStreamShowcase from '../components/LiveStreamShowcase';

export default function LandingPage() {
  return (
    <main>
      <HomeSwiper />
      <ServiceButtons />
      <RegionSection />
      <CountrySection />
      <IndianCities />
      <CategoryScroller />

      <BestDealShowCase
        title="Best Deals"
        subtitle="Unbeatable prices on top-rated products"
      />
      <ProductShowcase
        title="Innovative Products"
        subtitle="Discover cutting-edge solutions and unique offerings"
        type="innovative"
      />
      <ProductShowcase
        title="Featured Products"
        subtitle="Hand-picked quality products from verified sellers"
        type="featured"
      />
      <ProductShowcase
        title="Trending Products"
        subtitle="Most sought-after products in the market"
        type="trending"
      />

      <ProductShowcase
        title="New Produccts"
        subtitle="Discover the latest and most popular products"
        type="newProducts"
      />

      <div className="container mx-auto mb-10 px-6 ">
        <h2 className="text-3xl font-bold text-[#393939]">Live Enquiries</h2>
        <EnquiryList />
      </div>
      {/* <TradeConfidence /> */}
      <LiveStreamShowcase />
      <Explore />
      <ProcessFlow />
      <Vision />
      <Mission />
      <Milestones />
      {/* <BusinessCounselling /> */}
      <VideoShowcase />
    </main>
  );
}
