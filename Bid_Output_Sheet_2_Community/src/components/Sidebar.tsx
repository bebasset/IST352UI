import { FileText, Clock, CheckCircle, Archive, Settings } from 'lucide-react';
import { Badge } from './ui/badge';

export function Sidebar() {
  return (
    <aside className="w-70 bg-gray-50 border-r border-gray-200 min-h-screen p-6">
      <nav className="space-y-2">
        <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5" />
            <span>Active Bids</span>
          </div>
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">12</Badge>
        </button>
        
        <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5" />
            <span>Pending Approval</span>
          </div>
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        </button>
        
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <CheckCircle className="w-5 h-5" />
          <span>Approved Bids</span>
        </button>
        
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <Archive className="w-5 h-5" />
          <span>Archived</span>
        </button>
      </nav>
      
      <div className="absolute bottom-6 left-6 right-6">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
}
