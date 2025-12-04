import { Search, Bell, User } from 'lucide-react';
import { Input } from './ui/input';

export function TopNav() {
  return (
    <nav className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white">MM</span>
          </div>
          <span className="text-gray-900">Meeting Makers</span>
        </div>
      </div>
      
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Search bids, clients, projects..." 
            className="pl-10"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
            3
          </span>
        </button>
        
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
      </div>
    </nav>
  );
}
