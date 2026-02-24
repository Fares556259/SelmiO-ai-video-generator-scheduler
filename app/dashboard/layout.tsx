import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { UserButton } from "@clerk/nextjs"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen bg-black w-full overflow-hidden">
                <AppSidebar />

                {/* Main Content Wrapper */}
                <div className="flex-1 flex flex-col min-h-screen relative overflow-x-hidden">

                    {/* Top Header */}
                    <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            {/* Sidebar trigger for mobile/collapsing */}
                            <SidebarTrigger className="text-white hover:text-zinc-300 transition-colors" />
                            <h2 className="text-white font-medium text-lg hidden sm:block">Dashboard</h2>
                        </div>

                        <div className="flex items-center gap-4">
                            <UserButton
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: "w-9 h-9 border border-white/20",
                                    }
                                }}
                            />
                        </div>
                    </header>

                    {/* Page Content */}
                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main>

                </div>
            </div>
        </SidebarProvider>
    )
}
