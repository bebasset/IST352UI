import { Edit2, Paperclip, AlertCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';

export function ProjectDetails() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2>Project Overview</h2>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Edit2 className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      
      <Textarea 
        defaultValue="Comprehensive corporate event planning for annual company retreat. Includes graphic design for event materials, hotel accommodations for 150 attendees, and curated team-building activities."
        rows={4}
        className="mb-4"
      />
      
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge className="bg-blue-100 text-blue-700">Event Planning</Badge>
        <Badge className="bg-purple-100 text-purple-700">Corporate</Badge>
        <Badge className="bg-amber-100 text-amber-700">Luxury</Badge>
      </div>
      
      <div className="flex items-center gap-2 mb-4 p-3 bg-red-50 rounded-lg">
        <AlertCircle className="w-5 h-5 text-red-500" />
        <span className="text-red-700">High Priority</span>
      </div>
      
      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-700">Attachments</span>
          <Paperclip className="w-4 h-4 text-gray-400" />
        </div>
        
        <div className="space-y-2">
          {['Event_Requirements.pdf', 'Budget_Guidelines.xlsx', 'Venue_Preferences.docx'].map((file, index) => (
            <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                <span className="text-blue-600 text-xs">{file.split('.')[1].toUpperCase()}</span>
              </div>
              <span className="text-sm text-gray-700">{file}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
