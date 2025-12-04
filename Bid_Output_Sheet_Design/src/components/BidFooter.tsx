import { Download, Printer, Share2, Mail, Phone } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface BidFooterProps {
  total: number;
  projectManager: {
    name: string;
    title: string;
    email: string;
    phone: string;
  };
}

export function BidFooter({ total, projectManager }: BidFooterProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleDownloadPDF = () => {
    toast.success('PDF download initiated');
    // In a real application, this would generate and download a PDF
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    toast.success('Share link copied to clipboard');
    // In a real application, this would copy a shareable link
  };

  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        {/* Total Estimate */}
        <div>
          <div className="text-gray-600 mb-1">Total Estimate</div>
          <div className="text-green-600">{formatCurrency(total)}</div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Printer className="w-4 h-4" />
            Print
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>

      {/* Project Manager Information */}
      <div className="pt-6 border-t border-gray-200">
        <div className="text-sm text-gray-600 mb-3">Project Manager</div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-gray-900">{projectManager.name}</div>
            <div className="text-gray-600 text-sm">{projectManager.title}</div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-600" />
              <span className="text-gray-900">{projectManager.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-600" />
              <span className="text-gray-900">{projectManager.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
