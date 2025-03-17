// app/mobile/layout.js
import MobileHeader from "@/components/MobileHeader";
import BottomNav from "@/(uix)/mobile/components/ui/BottomNav";

export default function MobileLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pb-16">
        {/* pb-16 reserves space for BottomNav */}
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
