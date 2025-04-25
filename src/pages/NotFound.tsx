
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="container flex max-w-md flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">404</h1>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Page not found</h2>
          <p className="text-muted-foreground md:text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex justify-center">
          <Button asChild>
            <Link to="/">Return to Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
