
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { Plus, Calendar as CalendarIcon } from "lucide-react";

// Sample events data
const events = [
  {
    id: 1,
    title: "Parent-Teacher Conference",
    description: "Half-yearly parent-teacher meeting to discuss student progress",
    date: new Date(2025, 3, 28), // April 28, 2025
    time: "4:00 PM - 7:00 PM",
    location: "School Auditorium",
    type: "meeting",
  },
  {
    id: 2,
    title: "Science Fair",
    description: "Annual science fair open to all students from grades 8-12",
    date: new Date(2025, 4, 5), // May 5, 2025
    time: "9:00 AM - 3:00 PM",
    location: "School Gymnasium",
    type: "event",
  },
  {
    id: 3,
    title: "Final Exams",
    description: "End of term examinations for all subjects",
    date: new Date(2025, 5, 1), // June 1, 2025
    time: "8:00 AM - 3:00 PM",
    location: "All Classrooms",
    type: "exam",
  },
  {
    id: 4,
    title: "Basketball Tournament",
    description: "Inter-school basketball championship finals",
    date: new Date(2025, 4, 15), // May 15, 2025
    time: "1:00 PM - 5:00 PM",
    location: "School Sports Complex",
    type: "sports",
  },
  {
    id: 5,
    title: "Teacher Development Day",
    description: "Professional development workshop for all teaching staff",
    date: new Date(2025, 4, 20), // May 20, 2025
    time: "9:00 AM - 4:00 PM",
    location: "Conference Hall",
    type: "holiday",
  },
  {
    id: 6,
    title: "Annual Day Rehearsal",
    description: "Practice for the school annual day performance",
    date: new Date(2025, 5, 10), // June 10, 2025
    time: "2:00 PM - 5:00 PM",
    location: "Auditorium",
    type: "event",
  },
];

// Get event types for filtering
const eventTypes = [...new Set(events.map((event) => event.type))];

export default function SchoolCalendar() {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("month"); // month or list
  const [filterType, setFilterType] = useState("all");

  const filteredEvents = events.filter(
    (event) => filterType === "all" || event.type === filterType
  );

  // Events for the selected day
  const selectedDayEvents = filteredEvents.filter(
    (event) =>
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
  );

  // Function to determine which dates have events
  const isDayWithEvent = (day) => {
    return filteredEvents.some(
      (event) =>
        event.date.getDate() === day.getDate() &&
        event.date.getMonth() === day.getMonth() &&
        event.date.getFullYear() === day.getFullYear()
    );
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">School Calendar</h1>
          <p className="text-muted-foreground">
            View upcoming events and schedule for the academic year.
          </p>
        </div>
        <div className="flex gap-2">
          <Select
            value={filterType}
            onValueChange={setFilterType}
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Filter events" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              {eventTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Event
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add New Event</DialogTitle>
                <DialogDescription>
                  Create a new event in the school calendar.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {/* Form would go here in a real application */}
                <p className="text-center text-sm text-muted-foreground">
                  Event creation form would be implemented here.
                </p>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button type="button">Save Event</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="month" className="w-full" onValueChange={setView}>
        <TabsList className="mb-4">
          <TabsTrigger value="month">Month View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>
        <TabsContent value="month" className="m-0">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="col-span-2 md:col-span-2">
              <CardHeader className="pb-0">
                <CardTitle className="text-center">
                  {format(date, "MMMM yyyy")}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-4">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => setDate(newDate || new Date())}
                  className="rounded-md border"
                  modifiersStyles={{
                    selected: {
                      backgroundColor: "hsl(var(--primary))",
                      color: "white",
                    },
                  }}
                  modifiers={{
                    hasEvent: (day) => isDayWithEvent(day),
                  }}
                  styles={{
                    hasEvent: {
                      textDecoration: "underline",
                      fontWeight: "bold",
                    },
                  }}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>
                    Events for {format(date, "MMMM d, yyyy")}
                  </span>
                  <Badge variant="outline" className="ml-2">
                    {selectedDayEvents.length} Events
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="max-h-[500px] overflow-auto">
                {selectedDayEvents.length === 0 ? (
                  <p className="text-center text-sm text-muted-foreground">
                    No events scheduled for this day.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {selectedDayEvents.map((event) => (
                      <div key={event.id} className="rounded-lg border p-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{event.title}</h3>
                          <Badge
                            className={
                              event.type === "meeting"
                                ? "bg-school-blue text-white"
                                : event.type === "event"
                                ? "bg-school-purple text-white"
                                : event.type === "exam"
                                ? "bg-school-red text-white"
                                : event.type === "sports"
                                ? "bg-school-green text-white"
                                : "bg-school-yellow text-black"
                            }
                          >
                            {event.type}
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {event.time} • {event.location}
                        </p>
                        <p className="mt-2 text-sm">
                          {event.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="list" className="m-0">
          <Card>
            <CardHeader>
              <CardTitle>All Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              {filteredEvents.length === 0 ? (
                <p className="text-center text-sm text-muted-foreground">
                  No events found with the selected filter.
                </p>
              ) : (
                <div className="space-y-4">
                  {filteredEvents
                    .sort((a, b) => a.date.getTime() - b.date.getTime())
                    .map((event) => (
                      <div key={event.id} className="rounded-lg border p-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{event.title}</h3>
                          <Badge
                            className={
                              event.type === "meeting"
                                ? "bg-school-blue text-white"
                                : event.type === "event"
                                ? "bg-school-purple text-white"
                                : event.type === "exam"
                                ? "bg-school-red text-white"
                                : event.type === "sports"
                                ? "bg-school-green text-white"
                                : "bg-school-yellow text-black"
                            }
                          >
                            {event.type}
                          </Badge>
                        </div>
                        <div className="mt-1 flex items-center text-sm text-muted-foreground">
                          <CalendarIcon className="mr-1 h-4 w-4" />
                          {format(event.date, "MMMM d, yyyy")} • {event.time} • {event.location}
                        </div>
                        <p className="mt-2 text-sm">
                          {event.description}
                        </p>
                      </div>
                    ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
