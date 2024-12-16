import { useState } from 'react';
import EnquiryForm from '../components/enquiries/EnquiryForm';
import EnquiryList from '../components/enquiries/EnquiryList';
import { FilterIcon } from 'lucide-react';

export default function Enquiries() {
  const [activeTab, setActiveTab] = useState('browse');
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#393939]">
            Live Enquiries Board
          </h1>
          <p className="text-[#393939]/60 mt-2">
            Post and respond to trade enquiries in real-time
          </p>
        </div>

        <div className="space-y-6">
          {/* Tab Navigation */}
          <div className="flex items-center  justify-between space-x-4">
            <div className="tabs tabs-boxed">
              <button
                className={`tab tab-boxed ${
                  activeTab === 'browse' ? 'tab-active !text-white' : ''
                }`}
                onClick={() => setActiveTab('browse')}
              >
                Browse Enquiries
              </button>
              <button
                className={`tab tab-boxed ${
                  activeTab === 'post' ? 'tab-active !text-white' : ''
                }`}
                onClick={() => setActiveTab('post')}
              >
                Post New Enquiry
              </button>
            </div>

            {/* Filter Icon */}
            <button
              className="btn btn-outline btn-sm flex items-center space-x-2"
              onClick={() => console.log('Filter button clicked!')}
            >
              <FilterIcon className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === 'browse' && <EnquiryList />}
            {activeTab === 'post' && <EnquiryForm />}
          </div>
        </div>
      </div>
    </div>
  );
}
