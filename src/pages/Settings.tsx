
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Settings() {
  return (
    <div className="w-full space-y-4">
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="text-muted-foreground">
        Configure system settings and preferences.
      </p>
      
      <Card className="border-dashed">
        <CardHeader>
          <CardTitle>System Settings</CardTitle>
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
