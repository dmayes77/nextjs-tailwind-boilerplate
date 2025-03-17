// src/components/mobileUi/BottomNav.js
import Link from "next/link";
import SysIcon from "@/components/global/SysIcon"; // Adjust the path as needed

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 shadow-lg flex justify-around items-center pt-4 pb-8 z-50 text-white bg-mad-blue">
      <Link href="/mobile" className="flex flex-col items-center text-sm">
        <SysIcon name="LuHouse" set="lui" size={24} />
        <span>Home</span>
      </Link>
      <Link href="/mobile/services" className="flex flex-col items-center text-sm">
        <SysIcon name="LuBriefcase" set="lui" size={24} />
        <span>Services</span>
      </Link>
      <Link href="/mobile/booking" className="flex flex-col items-center text-sm">
        <SysIcon name="LuCalendar" set="lui" size={24} />
        <span>Booking</span>
      </Link>
      <Link href="/mobile/more" className="flex flex-col items-center text-sm">
        <SysIcon name="MdOutlineMenu" set="mdi" size={24} />
        <span>More</span>
      </Link>
    </nav>
  );
}
