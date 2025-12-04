import { useState } from 'react';
import { Eye, Edit, MessageSquare, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

export function ActivityFeed() {
  const [newComment, setNewComment] = useState('');

  const activities = [
    { type: 'view', message: 'Client viewed bid', time: '2 hours ago', icon: Eye },
    { type: 'edit', message: 'Designer updated estimate', time: '5 hours ago', icon: Edit },
    { type: 'comment', message: 'Comment added by Jessica Davis', time: '1 day ago', icon: MessageSquare },
    { type: 'view', message: 'Client viewed bid', time: '2 days ago', icon: Eye },
    { type: 'edit', message: 'Budget adjusted', time: '3 days ago', icon: Edit },
    { type: 'comment', message: 'Client requested changes', time: '4 days ago', icon: MessageSquare },
  ];

  const handleAddNote = () => {
    if (newComment.trim()) {
      // Handle adding note
      setNewComment('');
    }
  };

  return (
    <aside className="w-80 bg-white border-l border-gray-200 min-h-screen p-6">
      <h2 className="mb-6">Recent Activity</h2>
      
      <div className="space-y-4 mb-6 max-h-[600px] overflow-y-auto">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="flex gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                activity.type === 'view' ? 'bg-blue-100' :
                activity.type === 'edit' ? 'bg-purple-100' :
                'bg-green-100'
              }`}>
                <Icon className={`w-4 h-4 ${
                  activity.type === 'view' ? 'text-blue-600' :
                  activity.type === 'edit' ? 'text-purple-600' :
                  'text-green-600'
                }`} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">{activity.message}</p>
                <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <Textarea
          placeholder="Add a note or comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={3}
          className="mb-3"
        />
        <Button onClick={handleAddNote} className="w-full">
          Add Note
        </Button>
      </div>
    </aside>
  );
}
