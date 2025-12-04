import { DollarSign, PenTool, Hotel, Sparkles } from 'lucide-react';

interface CostBreakdownProps {
  designerCost: number;
  hotelCost: number;
  activitiesCost: number;
  total: number;
}

export function CostBreakdown({ designerCost, hotelCost, activitiesCost, total }: CostBreakdownProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const items = [
    { label: 'Graphic Design', amount: designerCost, icon: PenTool, color: 'text-purple-600' },
    { label: 'Hotel Accommodations', amount: hotelCost, icon: Hotel, color: 'text-blue-600' },
    { label: 'Activities', amount: activitiesCost, icon: Sparkles, color: 'text-orange-600' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full">
      <h2 className="text-gray-900 mb-4">Cost Breakdown</h2>
      
      <div className="space-y-3">
        {items.map((item, index) => {
          const ItemIcon = item.icon;
          return (
            <div 
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
            >
              <div className="flex items-center gap-3">
                <ItemIcon className={`w-5 h-5 ${item.color}`} />
                <span className="text-gray-700">{item.label}</span>
              </div>
              <span className="text-gray-900">{formatCurrency(item.amount)}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-green-600" />
            <span className="text-gray-900">Subtotal</span>
          </div>
          <span className="text-gray-900">{formatCurrency(total)}</span>
        </div>
      </div>
    </div>
  );
}
