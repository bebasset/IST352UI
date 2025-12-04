import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Button } from './ui/button';

export function CostBreakdown() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const data = [
    { name: 'Graphic Design', value: 8500, color: '#3B82F6' },
    { name: 'Hotel Services', value: 28000, color: '#8B5CF6' },
    { name: 'Activities', value: 9250, color: '#10B981' },
  ];

  const lineItems = {
    'Graphic Design': [
      { name: 'Event Branding Package', cost: 3500 },
      { name: 'Print Materials', cost: 2000 },
      { name: 'Digital Assets', cost: 1800 },
      { name: 'Signage Design', cost: 1200 },
    ],
    'Hotel Services': [
      { name: 'Room Accommodations (150 rooms x 2 nights)', cost: 22500 },
      { name: 'Conference Space Rental', cost: 3500 },
      { name: 'Catering Services', cost: 2000 },
    ],
    'Activities': [
      { name: 'Team Building Workshop', cost: 4500 },
      { name: 'Evening Entertainment', cost: 2750 },
      { name: 'Transportation', cost: 2000 },
    ],
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="mb-6">Cost Breakdown</h2>
      
      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.name} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection(item.name)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span>{item.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span>${item.value.toLocaleString()}</span>
                {expandedSection === item.name ? (
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </div>
            </button>
            
            {expandedSection === item.name && (
              <div className="bg-gray-50 p-4 border-t border-gray-200">
                <div className="space-y-2">
                  {lineItems[item.name as keyof typeof lineItems].map((lineItem, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-600">{lineItem.name}</span>
                      <span className="text-gray-900">${lineItem.cost.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <Button variant="ghost" className="w-full mt-4">
        Request Adjustment
      </Button>
    </div>
  );
}
