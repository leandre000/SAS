
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Plus, Search, Download, Upload, Filter } from "lucide-react";

// Sample student data
const students = [
  {
    id: 1,
    name: "Emma Wilson",
    grade: "10th",
    className: "10-A",
    email: "emma.w@schoolmail.com",
    attendance: "96%",
    gpa: "3.8",
    status: "active",
  },
  {
    id: 2,
    name: "Michael Johnson",
    grade: "10th",
    className: "10-B",
    email: "michael.j@schoolmail.com",
    attendance: "92%",
    gpa: "3.5",
    status: "active",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    grade: "11th",
    className: "11-A",
    email: "sophia.m@schoolmail.com",
    attendance: "98%",
    gpa: "3.9",
    status: "active",
  },
  {
    id: 4,
    name: "Noah Thompson",
    grade: "9th",
    className: "9-C",
    email: "noah.t@schoolmail.com",
    attendance: "88%",
    gpa: "3.2",
    status: "warning",
  },
  {
    id: 5,
    name: "Olivia Davis",
    grade: "12th",
    className: "12-A",
    email: "olivia.d@schoolmail.com",
    attendance: "95%",
    gpa: "4.0",
    status: "active",
  },
  {
    id: 6,
    name: "William Brown",
    grade: "11th",
    className: "11-B",
    email: "william.b@schoolmail.com",
    attendance: "85%",
    gpa: "3.0",
    status: "warning",
  },
  {
    id: 7,
    name: "Ava Jones",
    grade: "9th",
    className: "9-A",
    email: "ava.j@schoolmail.com",
    attendance: "97%",
    gpa: "3.7",
    status: "active",
  },
  {
    id: 8,
    name: "Ethan Miller",
    grade: "12th",
    className: "12-C",
    email: "ethan.m@schoolmail.com",
    attendance: "80%",
    gpa: "2.9",
    status: "inactive",
  },
];

export default function Students() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.grade.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.className.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full space-y-4">
      <h1 className="text-3xl font-bold">Students</h1>
      <p className="text-muted-foreground">
        Manage student records, view profiles, and track performance.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:max-w-[300px]"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="ml-2">
                <Filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All Students</DropdownMenuItem>
              <DropdownMenuItem>Active</DropdownMenuItem>
              <DropdownMenuItem>Warning</DropdownMenuItem>
              <DropdownMenuItem>Inactive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Student
          </Button>
        </div>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Attendance</TableHead>
              <TableHead>GPA</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[60px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center">
                  No students found.
                </TableCell>
              </TableRow>
            ) : (
              filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://avatar.vercel.sh/${student.id}.png`} />
                        <AvatarFallback>
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span>{student.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell>{student.className}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.attendance}</TableCell>
                  <TableCell>{student.gpa}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`${
                        student.status === "active"
                          ? "border-green-500 bg-green-50 text-green-700"
                          : student.status === "warning"
                          ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                          : "border-red-500 bg-red-50 text-red-700"
                      }`}
                    >
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit Student</DropdownMenuItem>
                        <DropdownMenuItem>Contact Parent</DropdownMenuItem>
                        <DropdownMenuItem>View Attendance</DropdownMenuItem>
                        <DropdownMenuItem>View Grades</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
