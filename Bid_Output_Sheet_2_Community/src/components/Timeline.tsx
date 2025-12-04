import { Check } from 'lucide-react';

interface TimelineProps {
  currentStep: number;
}

export function Timeline({ currentStep }: TimelineProps) {
  const steps = [
    'Bid Created',
    'Submitted',
    'Client Review',
    'Revisions Requested',
    'Approved',
    'Project Started'
  ];

  return (
    <div className="mt-6 bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                index < currentStep 
                  ? 'bg-green-500 text-white' 
                  : index === currentStep 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {index < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span className={`mt-2 text-xs text-center ${
                index <= currentStep ? 'text-gray-900' : 'text-gray-400'
              }`}>
                {step}
              </span>
            </div>
            
            {index < steps.length - 1 && (
              <div className={`flex-1 h-1 mx-2 ${
                index < currentStep ? 'bg-green-500' : 'bg-gray-200'
              }`}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
