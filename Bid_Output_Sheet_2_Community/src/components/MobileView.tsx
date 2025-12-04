import { useState } from 'react';
import { ArrowLeft, Check, Edit, MessageCircle, Share2, ChevronDown, ChevronUp, Phone, Mail, MapPin, Star, Paperclip } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Textarea } from './ui/textarea';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

interface MobileViewProps {
  bidStatus: string;
  setBidStatus: (status: 'Draft' | 'Submitted' | 'Under Review' | 'Approved' | 'Declined') => void;
}

export function MobileView({ bidStatus, setBidStatus }: MobileViewProps) {
  const [expandedSection, setExpandedSection] = useState<string>('summary');
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? '' : section);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <ArrowLeft className="w-6 h-6" />
          <span className="text-sm">Bid #BID-2024-1847</span>
          <Badge className={`${
            bidStatus === 'Approved' ? 'bg-green-100 text-green-700' :
            bidStatus === 'Under Review' ? 'bg-purple-100 text-purple-700' :
            'bg-blue-100 text-blue-700'
          }`}>
            {bidStatus}
          </Badge>
        </div>
        
        <div className="text-center mb-3">
          <div className="text-4xl mb-1">$45,750</div>
          <p className="text-sm opacity-80">Total Estimate</p>
        </div>
        
        <div className="h-1 bg-white bg-opacity-30 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full w-2/3"></div>
        </div>
      </div>
      
      {/* Quick Action Strip */}
      <div className="bg-white shadow-md p-4 flex justify-around">
        <button className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="w-6 h-6 text-green-600" />
          </div>
          <span className="text-xs text-gray-700">Approve</span>
        </button>
        
        <button className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <Edit className="w-6 h-6 text-orange-600" />
          </div>
          <span className="text-xs text-gray-700">Request Changes</span>
        </button>
        
        <button className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-blue-600" />
          </div>
          <span className="text-xs text-gray-700">Message Team</span>
        </button>
        
        <button className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <Share2 className="w-6 h-6 text-gray-600" />
          </div>
          <span className="text-xs text-gray-700">Share</span>
        </button>
      </div>
      
      {/* Accordion Sections */}
      <div className="p-4 space-y-3">
        {/* Summary Section */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <button
            onClick={() => toggleSection('summary')}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <h3>Summary</h3>
            {expandedSection === 'summary' ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          {expandedSection === 'summary' && (
            <div className="px-5 pb-5 border-t border-gray-100">
              <h4 className="mb-2">Acme Corporation</h4>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                Comprehensive corporate event planning for annual company retreat. Includes graphic design for event materials, hotel accommodations...
                <button className="text-blue-600 ml-1">Read more</button>
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 text-sm">Design Hours</p>
                  <p className="text-gray-900">85</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 text-sm">Duration</p>
                  <p className="text-gray-900">14 days</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 text-sm">Activities</p>
                  <p className="text-gray-900">6</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 text-sm">Hotel Rating</p>
                  <p className="text-gray-900">5★</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Investment Breakdown Section */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <button
            onClick={() => toggleSection('breakdown')}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <h3>Investment Breakdown</h3>
            {expandedSection === 'breakdown' ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          {expandedSection === 'breakdown' && (
            <div className="px-5 pb-5 border-t border-gray-100">
              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Graphic Design</span>
                    <span className="text-sm">$8,500</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '18.6%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Hotel Services</span>
                    <span className="text-sm">$28,000</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '61.2%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Activities</span>
                    <span className="text-sm">$9,250</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '20.2%' }}></div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mb-3">Swipe cards to see detailed breakdown</p>
              
              <div className="overflow-x-auto flex gap-3 pb-3 -mx-5 px-5">
                {[
                  { title: 'Graphic Design', amount: '$8,500', items: 4 },
                  { title: 'Hotel Services', amount: '$28,000', items: 3 },
                  { title: 'Activities', amount: '$9,250', items: 3 }
                ].map((card, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 min-w-[280px]">
                    <p className="text-gray-600 text-sm mb-1">{card.title}</p>
                    <p className="text-gray-900 mb-2">{card.amount}</p>
                    <Button variant="ghost" size="sm" className="w-full">
                      View {card.items} items →
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Your Team Section */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <button
            onClick={() => toggleSection('team')}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <h3>Your Team</h3>
            {expandedSection === 'team' ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          {expandedSection === 'team' && (
            <div className="px-5 pb-5 border-t border-gray-100">
              <div className="overflow-x-auto flex gap-3 pb-3 -mx-5 px-5">
                {[
                  { name: 'Jessica Davis', role: 'Project Manager', initials: 'JD', color: 'from-blue-500 to-purple-600' },
                  { name: 'Marcus Chen', role: 'Graphic Designer', initials: 'MC', color: 'from-green-500 to-teal-600' }
                ].map((member, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 min-w-[280px]">
                    <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-white mx-auto mb-3`}>
                      <span className="text-xl">{member.initials}</span>
                    </div>
                    <p className="text-center mb-1">{member.name}</p>
                    <p className="text-center text-sm text-gray-600 mb-4">{member.role}</p>
                    <div className="flex gap-2 justify-center">
                      <button className="p-2 bg-white rounded-full border border-gray-200">
                        <Phone className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-white rounded-full border border-gray-200">
                        <MessageCircle className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    <button className="w-full mt-3 text-sm text-blue-600">View bio →</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Venue & Activities Section */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <button
            onClick={() => toggleSection('venue')}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <h3>Venue & Activities</h3>
            {expandedSection === 'venue' ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          {expandedSection === 'venue' && (
            <div className="border-t border-gray-100">
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white">The Grand Resort & Spa</p>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>Resort City, CA</span>
                </div>
                <Button variant="outline" className="w-full gap-2">
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </Button>
              </div>
              
              <div className="px-5 pb-5 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-3 mt-3">Activities Timeline</p>
                <div className="space-y-3">
                  {[
                    { name: 'Team Building Workshop', cost: '$4,500', duration: '4 hours' },
                    { name: 'Evening Entertainment', cost: '$2,750', duration: '3 hours' },
                    { name: 'Transportation', cost: '$2,000', duration: '2 days' }
                  ].map((activity, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.name}</p>
                        <p className="text-xs text-gray-600">{activity.cost} • {activity.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Communication Section */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <button
            onClick={() => toggleSection('communication')}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <h3>Communication</h3>
            {expandedSection === 'communication' ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          {expandedSection === 'communication' && (
            <div className="px-5 pb-5 border-t border-gray-100">
              <div className="space-y-4 mb-4">
                {[
                  { name: 'Jessica Davis', message: 'Updated the hotel accommodations section', time: '2 hours ago', initials: 'JD' },
                  { name: 'Client', message: 'Can we adjust the activities budget?', time: '1 day ago', initials: 'AC' }
                ].map((msg, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm shrink-0">
                      {msg.initials}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <p className="text-sm">{msg.name}</p>
                        <span className="text-xs text-gray-500">{msg.time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <Textarea
                  placeholder="Add a comment or question..."
                  rows={3}
                  className="mb-2"
                />
                <div className="flex gap-2">
                  <button className="p-2 border border-gray-200 rounded-lg">
                    <Paperclip className="w-4 h-4 text-gray-600" />
                  </button>
                  <Button className="flex-1">Send</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Floating Action Button */}
      <Sheet open={showBottomSheet} onOpenChange={setShowBottomSheet}>
        <SheetTrigger asChild>
          <button className="fixed bottom-6 right-6 w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all">
            <Check className="w-8 h-8" />
          </button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[400px]">
          <SheetHeader>
            <SheetTitle>Approve Bid?</SheetTitle>
            <SheetDescription>
              You're about to approve this bid for $45,750. This will notify the team to begin work.
            </SheetDescription>
          </SheetHeader>
          
          <div className="mt-6 space-y-3">
            <Button className="w-full h-14 bg-green-600 hover:bg-green-700 text-white">
              <Check className="w-5 h-5 mr-2" />
              Approve Bid
            </Button>
            
            <Button variant="outline" className="w-full h-14">
              Request Changes First
            </Button>
            
            <Button variant="ghost" className="w-full" onClick={() => setShowBottomSheet(false)}>
              Cancel
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      
      {/* Add spacing at bottom for FAB */}
      <div className="h-24"></div>
    </div>
  );
}
