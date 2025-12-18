"use client";
import {
  Home,
  BookOpen,
  Layers,
  Heart,
  Award,
  ClipboardList,
  MessageSquare,
  MessageCircle,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-[calc(100vh-64px)] flex flex-col">
      
      {/* USER */}
      <div className="p-6 border-b">
        <p className="text-sm text-gray-500">Hey</p>
        <h3 className="font-semibold">Rohan</h3>
      </div>

      {/* MENU */}
      <nav className="flex-1 px-4 py-4 space-y-1 text-sm">
        <SidebarItem icon={<Home size={18} />} label="Home" />
        <SidebarItem icon={<BookOpen size={18} />} label="My Courses" />
        <SidebarItem icon={<Layers size={18} />} label="Category" />
        <SidebarItem icon={<Heart size={18} />} label="Favorite" />
        <SidebarItem icon={<Award size={18} />} label="Certificates" />
        <SidebarItem icon={<ClipboardList size={18} />} label="Assignment" />
        <SidebarItem icon={<MessageSquare size={18} />} label="Messages" />
        <SidebarItem icon={<MessageCircle size={18} />} label="Feedback" />
        <SidebarItem icon={<ClipboardList size={18} />} label="Request Course" />
      </nav>

      {/* BOTTOM */}
      <div className="p-4 border-t">
         <SidebarItem icon={<Settings size={18} />} label="Cybertron AI" />
        <SidebarItem icon={<Settings size={18} />} label="Settings" />
        <SidebarItem
          icon={<LogOut size={18} />}
          label="Logout"
          danger
        />
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, danger }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer
      ${danger ? "text-red-500" : "text-gray-700"}
      hover:bg-gray-100`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
