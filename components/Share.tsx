'use client';

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Share = () => {
  
  const { toast } = useToast();
  const meetingLink = window.location.href;

  return (
    <Button
          className= "cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]"
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
