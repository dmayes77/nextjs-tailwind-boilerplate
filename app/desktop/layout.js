// app/desktop/layout.js
import DesktopHeader from '@/components/DesktopHeader';

export default function DesktopLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DesktopHeader />
      <main className="max-w-4xl mx-auto p-6">{children}</main>
    </div>
  );
}
