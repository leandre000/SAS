
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Plus, Search, Clock, Users, BookOpen } from "lucide-react";

// Sample course data
const courses = [
  {
    id: 1,
    title: "Mathematics 101",
    department: "Mathematics",
    code: "MATH101",
    teacher: "Dr. Sarah Mitchell",
    teacherId: "t1",
    students: 28,
    schedule: "Mon, Wed, Fri 9:00 AM - 10:30 AM",
    room: "Room 205",
    description: "Introduction to algebra, geometry, and calculus concepts for first-year students.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    term: "Spring 2025",
  },
  {
    id: 2,
    title: "Introduction to Physics",
    department: "Science",
    code: "PHYS101",
    teacher: "Prof. David Chen",
    teacherId: "t2",
    students: 24,
    schedule: "Tue, Thu 11:00 AM - 12:30 PM",
    room: "Lab 103",
    description: "Fundamental principles of mechanics, electricity, and magnetism with laboratory experiments.",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa",
    term: "Spring 2025",
  },
  {
    id: 3,
    title: "World Literature",
    department: "English",
    code: "ENG201",
    teacher: "Ms. Emily Johnson",
    teacherId: "t3",
    students: 22,
    schedule: "Mon, Wed 1:00 PM - 2:30 PM",
    room: "Room 118",
    description: "Survey of major works of world literature from ancient to modern times.",
    image: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18",
    term: "Spring 2025",
  },
  {
    id: 4,
    title: "U.S. History",
    department: "History",
    code: "HIST101",
    teacher: "Mr. James Rodriguez",
    teacherId: "t4",
    students: 30,
    schedule: "Tue, Thu 9:00 AM - 10:30 AM",
    room: "Room 220",
    description: "Overview of United States history from colonial period to present day.",
    image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e",
    term: "Spring 2025",
  },
  {
    id: 5,
    title: "Digital Art & Design",
    department: "Art",
    code: "ART205",
    teacher: "Ms. Amanda Lee",
    teacherId: "t5",
    students: 18,
    schedule: "Fri 1:00 PM - 4:00 PM",
    room: "Art Studio B",
    description: "Introduction to digital art creation using industry-standard software and techniques.",
    image: "https://images.unsplash.com/photo-1545665277-5937489579f2",
    term: "Spring 2025",
  },
  {
    id: 6,
    title: "Chemistry Fundamentals",
    department: "Science",
    code: "CHEM101",
    teacher: "Dr. Michael Peters",
    teacherId: "t6",
    students: 26,
    schedule: "Mon, Wed 2:30 PM - 4:00 PM",
    room: "Lab 205",
    description: "Basic principles of chemistry, atomic structure, and chemical reactions.",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6",
    term: "Spring 2025",
  },
];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");

  const filteredCourses = courses.filter(
    (course) =>
      (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.teacher.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedTab === "all" || course.department.toLowerCase() === selectedTab)
  );

  return (
    <div className="w-full space-y-4">
      <h1 className="text-3xl font-bold">Courses</h1>
      <p className="text-muted-foreground">
        Browse available courses, view details, and manage course information.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:max-w-[300px]"
          />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Course
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedTab}>
        <TabsList className="mb-4 w-full justify-start overflow-x-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
          <TabsTrigger value="science">Science</TabsTrigger>
          <TabsTrigger value="english">English</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="art">Art</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="m-0">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.length === 0 ? (
              <div className="col-span-full text-center">
                <p className="text-muted-foreground">No courses found.</p>
              </div>
            ) : (
              filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            )}
          </div>
        </TabsContent>
        {["mathematics", "science", "english", "history", "art"].map((dept) => (
          <TabsContent key={dept} value={dept} className="m-0">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.length === 0 ? (
                <div className="col-span-full text-center">
                  <p className="text-muted-foreground">No courses found.</p>
                </div>
              ) : (
                filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <Badge className="bg-school-blue text-white">{course.department}</Badge>
          <Badge variant="outline">{course.code}</Badge>
        </div>
        <CardTitle className="line-clamp-1 text-xl">{course.title}</CardTitle>
        <CardDescription className="flex items-center">
          <Avatar className="mr-2 h-6 w-6">
            <AvatarImage src={`https://avatar.vercel.sh/${course.teacherId}.png`} />
            <AvatarFallback>
              {course.teacher
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          {course.teacher}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="line-clamp-2 text-sm text-muted-foreground">
          {course.description}
        </div>
        <div className="flex flex-wrap gap-3 pt-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span className="text-xs">{course.schedule}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="mr-1 h-4 w-4" />
            <span className="text-xs">{course.room}</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-1 h-4 w-4" />
            <span className="text-xs">{course.students} students</span>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-2 w-full" variant="outline">
              View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{course.title}</DialogTitle>
              <DialogDescription>
                {course.code} • {course.term}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div>
                <h4 className="mb-2 font-medium">Description</h4>
                <p className="text-sm text-muted-foreground">{course.description}</p>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium">Instructor</h4>
                  <p className="text-sm text-muted-foreground">{course.teacher}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Schedule</h4>
                  <p className="text-sm text-muted-foreground">{course.schedule}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Location</h4>
                  <p className="text-sm text-muted-foreground">{course.room}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Enrolled</h4>
                  <p className="text-sm text-muted-foreground">{course.students} students</p>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Edit Course</Button>
                <Button>View Roster</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
