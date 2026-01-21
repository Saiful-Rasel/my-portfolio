
"use client"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,

  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Button } from "@/components/button-1"
import { signOut } from "next-auth/react"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Blog",
    url: "/dashboard/blog",
    icon: Inbox,
  },
  {
    title: "Project",
    url: "/dashboard/project",
    icon: Calendar,
  },
  {
    title: "Messages",
    url: "/dashboard/messages",
    icon: Inbox,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
         
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Button onClick={() => signOut({
        callbackUrl:'/'
      })} className=" md:w-[80%] mx-auto bg-red-800 text-white" >LogOut</Button>
    </Sidebar>
  )
}