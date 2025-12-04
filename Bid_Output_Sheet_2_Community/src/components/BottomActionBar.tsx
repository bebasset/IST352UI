import { Button } from './ui/button';

export function BottomActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-18 bg-white border-t border-gray-200 px-8 flex items-center justify-between">
      <Button variant="outline">
        Save Draft
      </Button>
      
      <Button variant="ghost">
        Preview Client View
      </Button>
      
      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
        Send to Client
      </Button>
    </div>
  );
}
