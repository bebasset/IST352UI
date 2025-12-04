import { useState } from 'react';
import { TopNav } from './components/TopNav';
import { Sidebar } from './components/Sidebar';
import { BidHeaderCard } from './components/BidHeaderCard';
import { Timeline } from './components/Timeline';
import { ProjectDetails } from './components/ProjectDetails';
import { CostBreakdown } from './components/CostBreakdown';
import { TeamResources } from './components/TeamResources';
import { ActivityFeed } from './components/ActivityFeed';
import { BottomActionBar } from './components/BottomActionBar';
import { MobileView } from './components/MobileView';

export default function App() {
  const [bidStatus, setBidStatus] = useState<'Draft' | 'Submitted' | 'Under Review' | 'Approved' | 'Declined'>('Under Review');
  
  // Determine if mobile based on screen width
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  if (isMobile) {
    return <MobileView bidStatus={bidStatus} setBidStatus={setBidStatus} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-8 pb-24">
          <BidHeaderCard bidStatus={bidStatus} setBidStatus={setBidStatus} />
          
          <Timeline currentStep={bidStatus === 'Approved' ? 5 : bidStatus === 'Under Review' ? 2 : 1} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <ProjectDetails />
            <CostBreakdown />
            <TeamResources />
          </div>
        </main>
        
        <ActivityFeed />
      </div>
      
      <BottomActionBar />
    </div>
  );
}