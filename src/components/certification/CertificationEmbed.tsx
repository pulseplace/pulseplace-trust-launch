
import React, { useState } from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import CertificationBadgePreview from "./CertificationBadgePreview";

const CertificationEmbed = () => {
  const [embedCode, setEmbedCode] = useState(
    '<iframe src="https://pulseplace.ai/embed/certification/COMPANY123" width="300" height="150" frameborder="0"></iframe>'
  );

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast({
          title: "Copied!",
          description: "Embed code copied to clipboard",
        });
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to copy text. Please try again.",
          variant: "destructive",
        });
      });
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        Copy this code and paste it on your website to display your certification badge.
      </p>
      
      <div className="relative">
        <Textarea
          value={embedCode}
          onChange={(e) => setEmbedCode(e.target.value)}
          className="h-24 font-mono text-sm"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard(embedCode)}
        >
          <Copy className="h-3.5 w-3.5" />
        </Button>
      </div>
      
      <div className="border p-4 rounded-lg">
        <div className="text-sm font-medium mb-2">Preview:</div>
        <div className="flex justify-center">
          <CertificationBadgePreview />
        </div>
      </div>
    </div>
  );
};

export default CertificationEmbed;
