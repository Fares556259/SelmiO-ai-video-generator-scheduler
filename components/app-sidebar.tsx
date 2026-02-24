"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter
} from "@/components/ui/sidebar"
import { Video, Film, BookOpen, CreditCard, Settings, Plus, Sparkles } from "lucide-react"
import Link from "next/link"

const items = [
    {
        title: "Series",
        url: "/dashboard/series",
        icon: Film,
    },
    {
        title: "Videos",
        url: "/dashboard/videos",
        icon: Video,
    },
    {
        title: "Guides",
        url: "/dashboard/guides",
        icon: BookOpen,
    },
    {
        title: "Billing",
        url: "/dashboard/billing",
        icon: CreditCard,
    },
    {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar className="border-r border-white/10 dark">
            <SidebarHeader className="py-4">
                <div className="flex items-center gap-2 px-4 py-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shrink-0">
                        <Video className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">SelmiO</span>
                </div>

                <div className="px-4 mt-2">
                    <button className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-lg px-4 py-2.5 hover:bg-zinc-200 transition-colors">
                        <Plus className="w-4 h-4" />
                        New Series
                    </button>
                </div>
            </SidebarHeader>

            <SidebarContent className="mt-4">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-2">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="text-zinc-400 hover:text-white hover:bg-white/5 py-5 px-4 font-medium rounded-lg">
                                        <Link href={item.url}>
                                            <item.icon className="w-5 h-5 mr-3" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4 mb-2">
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-900/40 to-transparent border border-purple-500/30 flex flex-col">
                    <div className="flex items-center gap-2 text-purple-300 font-semibold mb-2">
                        <Sparkles className="w-4 h-4" />
                        Upgrade to Pro
                    </div>
                    <p className="text-purple-200/60 text-xs mb-3">Unlock unlimited AI generations and scheduling.</p>
                    <button className="w-full px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition-colors">
                        Upgrade Now
                    </button>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}

