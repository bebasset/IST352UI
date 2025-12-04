import { useState } from 'react';
import { ChevronDown, ChevronUp, User, Mail, CheckCircle } from 'lucide-react';

interface DesignerInfoProps {
  designer: {
    name: string;
    role: string;
    email: string;
    estimate: number;
    deliverables: string[];
  };
}

export function DesignerInfo({ designer }: DesignerInfoProps) {
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
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-purple-600" />
          </div>
          <div className="text-left">
            <h3 className="text-gray-900">Graphic Designer</h3>
            <p className="text-gray-600 text-sm">{designer.name} - {designer.role}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-900">{formatCurrency(designer.estimate)}</span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">Contact</span>
              </div>
              <p className="text-gray-900">{designer.email}</p>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-3">Deliverables</div>
              <ul className="space-y-2">
                {designer.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
