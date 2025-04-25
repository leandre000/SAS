
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Reports() {
  return (
    <div className="w-full space-y-4">
      <h1 className="text-3xl font-bold">Reports</h1>
      <p className="text-muted-foreground">
        Generate and view reports on student performance, attendance, and more.
      </p>
      
      <Card className="border-dashed">
        <CardHeader>
          <CardTitle>Reports Dashboard</CardTitle>
          <CardDescription>This page is under development.</CardDescription>
        </CardHeader>
        <CardContent className="flex min-h-[300px] items-center justify-center">
          <p className="text-center text-muted-foreground">
            This feature will be implemented in the next version.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
