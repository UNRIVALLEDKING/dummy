import OverviewStats from '../../components/analytics/OverviewStats';
import ProductPerformance from '../../components/analytics/ProductPerformance';
import RegionalTraffic from '../../components/analytics/RegionalTraffic';
import LeadMetrics from '../../components/analytics/LeadMetrics';
import KeywordAnalysis from '../../components/analytics/KeywordAnalysis';
import EnquiryAnalytics from '../../components/analytics/EnquiryAnalytics';

export default function Analytics() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="ml-64 flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-[#393939] mb-8">
            Analytics Dashboard
          </h1>
          <div className="space-y-8">
            <OverviewStats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProductPerformance />
              <RegionalTraffic />
            </div>
            <LeadMetrics />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <KeywordAnalysis />
              <EnquiryAnalytics />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
