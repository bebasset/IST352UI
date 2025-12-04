import { useState } from 'react';
import { ChevronDown, ChevronUp, Hotel, Star, Phone, MapPin, Bed } from 'lucide-react';

interface HotelDetailsProps {
  hotel: {
    name: string;
    rating: number;
    phone: string;
    location: string;
    roomRate: number;
    nights: number;
    rooms: number;
    totalCost: number;
  };
}

export function HotelDetails({ hotel }: HotelDetailsProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Hotel className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-left">
            <h3 className="text-gray-900">Hotel Accommodations</h3>
            <p className="text-gray-600 text-sm">{hotel.name}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-900">{formatCurrency(hotel.totalCost)}</span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-6 mt-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm text-gray-600">Rating</span>
              </div>
              <p className="text-gray-900">{hotel.rating} / 5.0</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">Phone</span>
              </div>
              <p className="text-gray-900">{hotel.phone}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">Location</span>
              </div>
              <p className="text-gray-900">{hotel.location}</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-3">
              <Bed className="w-5 h-5 text-blue-600" />
              <span className="text-gray-900">Room Details</span>
            </div>
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-gray-600 mb-1">Rate per Night</div>
                <div className="text-gray-900">{formatCurrency(hotel.roomRate)}</div>
              </div>
              <div>
                <div className="text-gray-600 mb-1">Nights</div>
                <div className="text-gray-900">{hotel.nights}</div>
              </div>
              <div>
                <div className="text-gray-600 mb-1">Rooms</div>
                <div className="text-gray-900">{hotel.rooms}</div>
              </div>
              <div>
                <div className="text-gray-600 mb-1">Total</div>
                <div className="text-gray-900">{formatCurrency(hotel.totalCost)}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
