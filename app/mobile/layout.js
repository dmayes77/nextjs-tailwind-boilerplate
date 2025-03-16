// app/mobile/layout.js
import MobileHeader from '@/components/MobileHeader';

export default function MobileLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <MobileHeader />
      <main className="p-4">{children}</main>
    </div>
  );
}
