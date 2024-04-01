'use client';

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Share = () => {
  
  const { toast } = useToast();
  const meetingLink = window.location.href;

  return (
    <Button
          className="bg-dark-3"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({
              title: "Link Copied",
            });
          }}
        >
          Share
        </Button>
  );
};

export default Share;
