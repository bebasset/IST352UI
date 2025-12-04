import logo from 'figma:asset/8cdbd11756bae3e9c04b243f1c5f805fb38e64a7.png';

interface BidHeaderProps {
  bidNumber: string;
  date: string;
  client: {
    company: string;
    contact: string;
    email: string;
    phone: string;
  };
}

export function BidHeader({ bidNumber, date, client }: BidHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start justify-between">
        {/* Left: Company Branding */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Meeting Makers Logo" className="w-16 h-16 object-contain" />
          <div>
            <h1 className="text-gray-900">Meeting Makers</h1>
            <p className="text-gray-600 text-sm">Professional Event Planning</p>
          </div>
        </div>

        {/* Right: Bid Number and Date */}
        <div className="text-right">
          <div className="text-gray-600 text-sm">Bid Reference</div>
          <div className="text-blue-600">{bidNumber}</div>
          <div className="text-gray-500 text-sm mt-1">{date}</div>
        </div>
      </div>

      {/* Client Information Card */}
      <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
        <div className="text-sm text-gray-600 mb-2">Prepared For:</div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-gray-900">{client.company}</div>
            <div className="text-gray-600 text-sm mt-1">{client.contact}</div>
          </div>
          <div className="text-sm">
            <div className="text-gray-600">Email: <span className="text-gray-900">{client.email}</span></div>
            <div className="text-gray-600 mt-1">Phone: <span className="text-gray-900">{client.phone}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}