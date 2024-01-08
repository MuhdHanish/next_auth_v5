
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log('mounted');
  }, []);
  return (
    <Button size={"lg"}>
      Click me
    </Button>
  );
};
