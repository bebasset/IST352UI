import { useState } from 'react';
import { MessageCircle, Phone, Mail, ChevronDown, ChevronUp, MapPin, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

export function TeamResources() {
  const [showHotelDetails, setShowHotelDetails] = useState(false);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="mb-6">Team & Resources</h2>
      
      {/* Project Manager */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <p className="text-sm text-gray-600 mb-3">Project Manager</p>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shrink-0">
            JD
          </div>
          <div className="flex-1">
            <p className="text-gray-900">Jessica Davis</p>
            <p className="text-sm text-gray-600 mb-3">Senior Project Manager</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                Message
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                Call
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Graphic Designer */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <p className="text-sm text-gray-600 mb-3">Graphic Designer</p>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white shrink-0">
            MC
          </div>
          <div className="flex-1">
            <p className="text-gray-900">Marcus Chen</p>
            <div className="mt-2 mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Time Estimate</span>
                <span className="text-gray-900">85 hours</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            <a href="#" className="text-blue-600 text-sm hover:underline">
              View Portfolio →
            </a>
          </div>
        </div>
      </div>
      
      {/* Hotel Details */}
      <div>
        <p className="text-sm text-gray-600 mb-3">Hotel Details</p>
        <div className="space-y-3">
          <div>
            <p className="text-gray-900 mb-1">The Grand Resort & Spa</p>
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>123 Luxury Lane, Resort City, CA 94000</span>
            </div>
          </div>
          
          <button
            onClick={() => setShowHotelDetails(!showHotelDetails)}
            className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <span className="text-sm">View Details</span>
            {showHotelDetails ? (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            )}
          </button>
          
          {showHotelDetails && (
            <div className="p-4 bg-gray-50 rounded-lg space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Check-in:</span>
                <span className="text-gray-900">March 15, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Check-out:</span>
                <span className="text-gray-900">March 17, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Rooms:</span>
                <span className="text-gray-900">150 Executive Suites</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Conference Space:</span>
                <span className="text-gray-900">Grand Ballroom (500 capacity)</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
