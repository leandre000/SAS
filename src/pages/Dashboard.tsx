
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "@/components/ui/charts";
import { TabsContent } from "@/components/ui/tabs";
import { BarChart3, LineChart as LineChartIcon, PieChart as PieChartIcon, Users, BookOpen, Calendar as CalendarIcon, Award } from "lucide-react";

export default function Dashboard() {
  // Sample data for charts
  const studentAttendanceData = [
    {
      name: "Jan",
      total: 95,
    },
    {
      name: "Feb",
      total: 92,
    },
    {
      name: "Mar",
      total: 88,
    },
    {
      name: "Apr",
      total: 91,
    },
    {
      name: "May",
      total: 85,
    },
    {
      name: "Jun",
      total: 94,
    },
  ];

  const gradeDistributionData = [
    {
      name: "A",
      value: 25,
    },
    {
      name: "B",
      value: 40,
    },
    {
      name: "C",
      value: 20,
    },
    {
      name: "D",
      value: 10,
    },
    {
      name: "F",
      value: 5,
    },
  ];

  const subjectPerformanceData = [
    {
      name: "Math",
      average: 78,
    },
    {
      name: "Science",
      average: 85,
    },
    {
      name: "English",
      average: 72,
    },
    {
      name: "History",
      average: 81,
    },
    {
      name: "Art",
      average: 90,
    },
    {
      name: "P.E.",
      average: 88,
    },
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Parent-Teacher Conference",
      date: "April 28, 2025",
      time: "4:00 PM - 7:00 PM",
      type: "meeting",
    },
    {
      id: 2,
      title: "Science Fair",
      date: "May 5, 2025",
      time: "9:00 AM - 3:00 PM",
      type: "event",
    },
    {
      id: 3,
      title: "Final Exams",
      date: "June 1-5, 2025",
      time: "Regular hours",
      type: "exam",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-muted-foreground">
        Welcome to the school management system dashboard.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-muted-foreground">
              +5.2% from last year
            </p>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">56</div>
            <p className="text-xs text-muted-foreground">
              +3 new courses this term
            </p>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Events This Month</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              3 scheduled this week
            </p>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average GPA</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.41</div>
            <p className="text-xs text-muted-foreground">
              +0.2 from last semester
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 card-hover lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Attendance Rate</CardTitle>
              <CardDescription>Monthly attendance percentage</CardDescription>
            </div>
            <LineChartIcon className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <LineChart
              data={studentAttendanceData}
              categories={["total"]}
              index="name"
              colors={["#3db4f2"]}
              valueFormatter={(value: number) => `${value}%`}
              className="aspect-[4/3]"
            />
          </CardContent>
        </Card>
        <Card className="col-span-1 card-hover">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Grade Distribution</CardTitle>
              <CardDescription>Current term</CardDescription>
            </div>
            <PieChartIcon className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <PieChart
              data={gradeDistributionData}
              index="name"
              category="value"
              valueFormatter={(value: number) => `${value}%`}
              colors={["#3db4f2", "#4caf50", "#ffca28", "#ff9800", "#ff7b7b"]}
              className="aspect-[4/3]"
            />
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-7">
        <Card className="col-span-1 card-hover md:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Subject Performance</CardTitle>
              <CardDescription>Average score by subject</CardDescription>
            </div>
            <BarChart3 className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <BarChart
              data={subjectPerformanceData}
              index="name"
              categories={["average"]}
              colors={["#3db4f2"]}
              valueFormatter={(value: number) => `${value}%`}
              className="aspect-[4/3]"
            />
          </CardContent>
        </Card>
        <Card className="col-span-1 card-hover md:col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Schedule for next 30 days</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex flex-col gap-1 rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{event.title}</span>
                  <span 
                    className={`text-xs rounded-full px-2 py-0.5 ${
                      event.type === 'meeting' ? 'bg-school-blue/20 text-school-blue' :
                      event.type === 'event' ? 'bg-school-purple/20 text-school-purple' :
                      'bg-school-red/20 text-school-red'
                    }`}
                  >
                    {event.type}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {event.date} • {event.time}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
