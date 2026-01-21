import { AppSidebar } from "@/components/modules/dashboard/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 ">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
