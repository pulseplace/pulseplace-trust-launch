
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface OrganizationDetailsFormProps {
  organizationName: string;
  organizationSize: string;
  email: string;
  onOrganizationNameChange: (value: string) => void;
  onOrganizationSizeChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onSubmit: () => void;
}

const OrganizationDetailsForm = ({
  organizationName,
  organizationSize,
  email,
  onOrganizationNameChange,
  onOrganizationSizeChange,
  onEmailChange,
  onSubmit,
}: OrganizationDetailsFormProps) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-pulse-blue">PulsePlace.ai</h1>
          <h2 className="mt-3 text-xl font-semibold">Get Started with Your Trust Assessment</h2>
          <p className="mt-2 text-gray-500">
            Tell us a bit about your organization to begin.
          </p>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="organization-name">Organization Name</Label>
                <Input
                  id="organization-name"
                  placeholder="Enter your organization name"
                  value={organizationName}
                  onChange={(e) => onOrganizationNameChange(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="organization-size">Organization Size</Label>
                <Input
                  id="organization-size"
                  placeholder="Number of employees"
                  value={organizationSize}
                  onChange={(e) => onOrganizationSizeChange(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email to receive results"
                  value={email}
                  onChange={(e) => onEmailChange(e.target.value)}
                />
              </div>
              
              <Button 
                type="button" 
                className="w-full bg-pulse-blue hover:bg-pulse-blue/90"
                onClick={onSubmit}
                disabled={!organizationName || !email}
              >
                Start Assessment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrganizationDetailsForm;
