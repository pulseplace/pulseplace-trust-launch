
import React from "react";
import { Award, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CertificationDownload = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <div className="border p-4 rounded-lg bg-white">
                <Award className="h-20 w-20 text-pulse-blue" />
              </div>
              <h3 className="mt-4 font-medium">Standard Badge</h3>
              <p className="text-xs text-gray-500 mb-4">
                300 x 300px PNG file
              </p>
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download PNG
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <div className="border p-4 rounded-lg bg-white">
                <div className="flex items-center">
                  <Award className="h-16 w-16 text-pulse-blue" />
                  <div className="ml-2">
                    <div className="font-bold">PulsePlace Certified</div>
                    <div className="text-sm">Trust Score: 85</div>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 font-medium">Horizontal Badge</h3>
              <p className="text-xs text-gray-500 mb-4">
                600 x 200px PNG file
              </p>
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download PNG
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="border-t pt-4">
        <h3 className="font-medium mb-2">Additional Formats</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["SVG", "PDF", "JPG", "EPS"].map((format) => (
            <Button key={format} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              {format}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationDownload;
