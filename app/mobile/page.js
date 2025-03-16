// app/mobile/page.js
import { Card, Input, Button } from '@/components/ui';

export default function MobileHome() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-4">Book Your Car Detailing</h1>
        <form>
          <Input placeholder="Name" className="mb-3 w-full" />
          <Input placeholder="Phone Number" className="mb-3 w-full" />
          <Input placeholder="Preferred Date" className="mb-3 w-full" />
          <Button type="submit" className="w-full">Book Now</Button>
        </form>
      </Card>
    </div>
  );
}
