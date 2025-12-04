import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface BidHeaderCardProps {
  bidStatus: 'Draft' | 'Submitted' | 'Under Review' | 'Approved' | 'Declined';
  setBidStatus: (status: 'Draft' | 'Submitted' | 'Under Review' | 'Approved' | 'Declined') => void;
}

export function BidHeaderCard({ bidStatus, setBidStatus }: BidHeaderCardProps) {
  const statusColors = {
    Draft: 'bg-gray-100 text-gray-700',
    Submitted: 'bg-blue-100 text-blue-700',
    'Under Review': 'bg-purple-100 text-purple-700',
    Approved: 'bg-green-100 text-green-700',
    Declined: 'bg-red-100 text-red-700',
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white relative">
      <div className="flex items-start justify-between mb-8">
        <span className="text-sm opacity-80">Bid ID: #BID-2024-1847</span>
        
        <DropdownMenu>
          <DropdownMenuTrigger className={`flex items-center gap-2 px-4 py-2 rounded-full ${statusColors[bidStatus]} transition-all`}>
            {bidStatus}
            <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setBidStatus('Draft')}>Draft</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setBidStatus('Submitted')}>Submitted</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setBidStatus('Under Review')}>Under Review</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setBidStatus('Approved')}>Approved</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setBidStatus('Declined')}>Declined</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="text-center">
        <h1 className="mb-2">Acme Corporation</h1>
        <div className="text-7xl mb-4">$45,750</div>
        <p className="text-sm opacity-80">
          Submitted: Nov 28, 2024 • Last Modified: Dec 1, 2024
        </p>
      </div>
    </div>
  );
}
