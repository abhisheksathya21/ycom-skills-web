import Header from "@/app/components/layout/Header";
import Sidebar from "@/app/components/layout/Sidebar";

export default function HomeLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      {/* TOP HEADER */}
      <Header />

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  );
}
