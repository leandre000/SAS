
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Book, Calendar, Home, Users, GraduationCap, Settings, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    title: "Dashboard",
    icon: Home,
    path: "/",
  },
  {
    title: "Students",
    icon: Users,
    path: "/students",
  },
  {
    title: "Courses",
    icon: Book,
    path: "/courses",
  },
  {
    title: "Calendar",
    icon: Calendar,
    path: "/calendar",
  },
  {
    title: "Grades",
    icon: GraduationCap,
    path: "/grades",
  },
  {
    title: "Reports",
    icon: BarChart3,
    path: "/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="flex h-14 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold text-school-blue">SAS</span>
            <span className="text-xl font-bold text-school-red">.</span>
          </div>
          <span className="font-medium text-sm">School Management</span>
        </Link>
        <SidebarTrigger className="ml-auto h-8 w-8" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "flex gap-2",
                      location.pathname === item.path && "bg-primary/10 text-primary"
                    )}
                  >
                    <Link to={item.path}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="h-14 p-4 text-xs text-muted-foreground">
        <div>© 2025 SAS School Management</div>
      </SidebarFooter>
    </Sidebar>
  );
}
