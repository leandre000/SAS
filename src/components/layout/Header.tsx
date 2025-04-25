
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, UserCircle2, Bell } from "lucide-react";

export function Header() {
  return (
    <header className="flex h-14 w-full items-center gap-4 border-b bg-background px-4 lg:px-6">
      <div className="flex flex-1 items-center justify-between">
        <h1 className="text-lg font-semibold md:text-xl">School Management System</h1>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative rounded-full p-1 hover:bg-accent">
                <Bell className="h-5 w-5" />
                <span className="absolute right-0 top-0 flex h-2 w-2 rounded-full bg-school-red" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex items-center justify-between border-b p-4">
                <p className="text-sm font-medium">Notifications</p>
                <button className="text-xs text-primary">Mark all as read</button>
              </div>
              <div className="max-h-80 overflow-auto">
                <div className="flex items-start gap-4 p-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Bell className="h-4 w-4 text-primary" />
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">New grade posted</p>
                    <p className="text-xs text-muted-foreground">Math 101: Term paper grades are now available</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Bell className="h-4 w-4 text-primary" />
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Calendar updated</p>
                    <p className="text-xs text-muted-foreground">Spring break dates have been updated</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium">John Smith</p>
                  <p className="text-xs text-muted-foreground">admin@school.com</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserCircle2 className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
