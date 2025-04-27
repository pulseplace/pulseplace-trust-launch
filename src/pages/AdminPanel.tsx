import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, PieChart, Users, Award, AlertTriangle, Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, AreaChart, Area, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart as RechartsPieChart, Pie, Cell } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Sample data
const monthlyRegistrations = [
  { month: "Jan", organizations: 12 },
  { month: "Feb", organizations: 18 },
  { month: "Mar", organizations: 24 },
  { month: "Apr", organizations: 32 },
  { month: "May", organizations: 38 },
  { month: "Jun", organizations: 45 },
];

const industryDistribution = [
  { name: "Technology", value: 35 },
  { name: "Healthcare", value: 20 },
  { name: "Financial Services", value: 15 },
  { name: "Education", value: 10 },
  { name: "Manufacturing", value: 10 },
  { name: "Other", value: 10 },
];

const organizationSizes = [
  { size: "1-50", count: 28 },
  { size: "51-200", count: 35 },
  { size: "201-500", count: 18 },
  { size: "501-1000", count: 10 },
  { size: "1000+", count: 9 },
];

const certificationsByStatus = [
  { status: "Active", count: 85 },
  { status: "Pending", count: 12 },
  { status: "Expired", count: 8 },
  { status: "Revoked", count: 2 },
];

const COLORS = ["#0F4C81", "#2E86AB", "#6E59A5", "#9b87f5", "#4ade80", "#94a3b8"];

// Organization data
const organizations = [
  { 
    id: "1",
    name: "TechCorp Inc.", 
    industry: "Technology",
    size: "201-500", 
    joinDate: "Jan 10, 2025",
    pulseScore: 85,
    status: "Active",
  },
  { 
    id: "2",
    name: "MediHealth Solutions", 
    industry: "Healthcare",
    size: "51-200", 
    joinDate: "Jan 15, 2025",
    pulseScore: 78,
    status: "Active",
  },
  { 
    id: "3",
    name: "EduFirst Academy", 
    industry: "Education",
    size: "51-200", 
    joinDate: "Feb 3, 2025",
    pulseScore: 92,
    status: "Active",
  },
  { 
    id: "4",
    name: "FinTrust Partners", 
    industry: "Financial Services",
    size: "1000+", 
    joinDate: "Feb 12, 2025",
    pulseScore: 81,
    status: "Active",
  },
  { 
    id: "5",
    name: "Quantum Manufacturing", 
    industry: "Manufacturing",
    size: "501-1000", 
    joinDate: "Mar 5, 2025",
    pulseScore: 76,
    status: "Pending",
  },
  { 
    id: "6",
    name: "Global Retail Co", 
    industry: "Retail",
    size: "1000+", 
    joinDate: "Mar 20, 2025",
    pulseScore: 68,
    status: "Pending",
  },
  { 
    id: "7",
    name: "AgriTech Innovations", 
    industry: "Agriculture",
    size: "51-200", 
    joinDate: "Apr 2, 2025",
    pulseScore: 74,
    status: "Active",
  },
  { 
    id: "8",
    name: "CreativeWorks Studio", 
    industry: "Media",
    size: "1-50", 
    joinDate: "Apr 15, 2025",
    pulseScore: 88,
    status: "Active",
  },
];

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [timeframe, setTimeframe] = useState("6m");
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-gray-500">
            Monitor platform usage, certifications, and organization metrics.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3m">Last 3 months</SelectItem>
              <SelectItem value="6m">Last 6 months</SelectItem>
              <SelectItem value="12m">Last 12 months</SelectItem>
              <SelectItem value="ytd">Year to date</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              Total Organizations
            </CardTitle>
            <CardDescription>
              Registered organizations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="text-5xl font-bold text-pulse-blue">102</div>
              <div className="ml-2 text-sm text-green-500">+24 this month</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              Active Certifications
            </CardTitle>
            <CardDescription>
              Current certified orgs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="text-5xl font-bold text-pulse-purple">85</div>
              <div className="ml-2 text-sm text-green-500">83% certification rate</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              Average PulseScore™
            </CardTitle>
            <CardDescription>
              Across all organizations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="text-5xl font-bold text-pulse-teal">79</div>
              <div className="ml-2 text-sm text-green-500">+2.5 vs last month</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              Response Rate
            </CardTitle>
            <CardDescription>
              Survey completion
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="text-5xl font-bold text-green-600">90%</div>
              <div className="ml-2 text-sm text-green-500">+5% vs benchmark</div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">
            <BarChart className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="organizations">
            <Users className="h-4 w-4 mr-2" />
            Organizations
          </TabsTrigger>
          <TabsTrigger value="certifications">
            <Award className="h-4 w-4 mr-2" />
            Certifications
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Organization Growth</CardTitle>
                <CardDescription>
                  New organizations per month
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={monthlyRegistrations}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <defs>
                        <linearGradient id="colorOrgs" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0F4C81" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#0F4C81" stopOpacity={0.2}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="organizations"
                        stroke="#0F4C81"
                        fillOpacity={1}
                        fill="url(#colorOrgs)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Industry Distribution</CardTitle>
                <CardDescription>
                  Organizations by sector
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={industryDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {industryDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Organization Size</CardTitle>
                <CardDescription>
                  Distribution by employee count
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart
                      data={organizationSizes}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <XAxis dataKey="size" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <Tooltip />
                      <Bar dataKey="count" fill="#6E59A5" radius={[4, 4, 0, 0]} />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Certification Status</CardTitle>
                <CardDescription>
                  Current status distribution
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={certificationsByStatus}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="count"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        nameKey="status"
                      >
                        {certificationsByStatus.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={
                              entry.status === "Active" ? "#10b981" :
                              entry.status === "Pending" ? "#f59e0b" :
                              entry.status === "Expired" ? "#6b7280" :
                              "#ef4444"
                            } 
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="organizations" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle>Registered Organizations</CardTitle>
                  <CardDescription>
                    All organizations using PulsePlace.ai
                  </CardDescription>
                </div>
                <div className="mt-4 md:mt-0 flex items-center space-x-2">
                  <Button variant="outline" className="h-8 px-2 text-xs">
                    Export
                  </Button>
                  <Button variant="outline" className="h-8 px-2 text-xs">
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Organization</TableHead>
                      <TableHead>Industry</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>PulseScore</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {organizations.map((org) => (
                      <TableRow key={org.id}>
                        <TableCell>
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarFallback className="bg-pulse-blue text-white text-xs">
                                {org.name.split(" ").map(word => word[0]).join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{org.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{org.industry}</TableCell>
                        <TableCell>{org.size}</TableCell>
                        <TableCell>{org.joinDate}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <span className={`font-medium ${
                              org.pulseScore >= 80 ? "text-green-600" :
                              org.pulseScore >= 70 ? "text-pulse-blue" :
                              "text-amber-600"
                            }`}>
                              {org.pulseScore}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              org.status === "Active" ? "default" :
                              org.status === "Pending" ? "outline" :
                              "secondary"
                            }
                            className={
                              org.status === "Active" ? "bg-green-500 hover:bg-green-600" :
                              org.status === "Pending" ? "border-amber-500 text-amber-600" :
                              ""
                            }
                          >
                            {org.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Showing 8 of 102 organizations
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="certifications" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Certification Pipeline</CardTitle>
                <CardDescription>Current status breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span>Active</span>
                    </div>
                    <div>
                      <span className="font-medium">85</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                      <span>Pending Review</span>
                    </div>
                    <div>
                      <span className="font-medium">12</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                      <span>Expired</span>
                    </div>
                    <div>
                      <span className="font-medium">8</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span>Revoked</span>
                    </div>
                    <div>
                      <span className="font-medium">2</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Pending Certifications</CardTitle>
                <CardDescription>Awaiting review and approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {organizations
                    .filter(org => org.status === "Pending")
                    .map((org) => (
                      <div key={org.id} className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarFallback className="bg-pulse-blue text-white text-xs">
                              {org.name.split(" ").map(word => word[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{org.name}</div>
                            <div className="text-xs text-gray-500">
                              PulseScore: {org.pulseScore}
                            </div>
                          </div>
                        </div>
                        <Button size="sm" className="h-8 px-2 text-xs">
                          Review
                        </Button>
                      </div>
                    ))
                  }
                  
                  {organizations.filter(org => org.status === "Pending").length === 0 && (
                    <div className="text-center py-4 text-gray-500">
                      No pending certifications
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Certification Insights</CardTitle>
                <CardDescription>Key statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500">Average Time to Certify</div>
                    <div className="text-2xl font-bold">3.5 days</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500">Certification Pass Rate</div>
                    <div className="text-2xl font-bold">83%</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500">Recertification Rate</div>
                    <div className="text-2xl font-bold">92%</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500">Average Score Improvement</div>
                    <div className="text-2xl font-bold">+5.3 points</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle>Certification Activity</CardTitle>
                  <CardDescription>
                    Recent certification events
                  </CardDescription>
                </div>
                <div className="mt-4 md:mt-0">
                  <Button variant="outline" size="sm">
                    View All Activity
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Organization</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead>PulseScore</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>User</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Jun 15, 2025</TableCell>
                      <TableCell>TechCorp Inc.</TableCell>
                      <TableCell>Certification Issued</TableCell>
                      <TableCell>85</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500 hover:bg-green-600">
                          Active
                        </Badge>
                      </TableCell>
                      <TableCell>Admin</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jun 10, 2025</TableCell>
                      <TableCell>EduFirst Academy</TableCell>
                      <TableCell>Certification Renewed</TableCell>
                      <TableCell>92</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500 hover:bg-green-600">
                          Active
                        </Badge>
                      </TableCell>
                      <TableCell>Admin</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jun 8, 2025</TableCell>
                      <TableCell>Quantum Manufacturing</TableCell>
                      <TableCell>Assessment Completed</TableCell>
                      <TableCell>76</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-amber-500 text-amber-600">
                          Pending
                        </Badge>
                      </TableCell>
                      <TableCell>System</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jun 5, 2025</TableCell>
                      <TableCell>Global Retail Co</TableCell>
                      <TableCell>Assessment Completed</TableCell>
                      <TableCell>68</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-amber-500 text-amber-600">
                          Pending
                        </Badge>
                      </TableCell>
                      <TableCell>System</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jun 1, 2025</TableCell>
                      <TableCell>AgriTech Innovations</TableCell>
                      <TableCell>Certification Issued</TableCell>
                      <TableCell>74</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500 hover:bg-green-600">
                          Active
                        </Badge>
                      </TableCell>
                      <TableCell>Admin</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPanel;
