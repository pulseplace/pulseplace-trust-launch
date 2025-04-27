
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, PieChart, Calendar, Users, AlertTriangle, Award, Check } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart as RechartsPieChart, Pie, Cell } from "recharts";

// Sample data for charts
const pulseScoreHistory = [
  { month: "Jan", score: 72 },
  { month: "Feb", score: 68 },
  { month: "Mar", score: 74 },
  { month: "Apr", score: 79 },
  { month: "May", score: 82 },
  { month: "Jun", score: 85 },
];

const dimensionScores = [
  { name: "Trust", value: 82 },
  { name: "Wellbeing", value: 78 },
  { name: "Growth", value: 85 },
  { name: "Communication", value: 76 },
  { name: "Inclusion", value: 79 },
];

const teamComparison = [
  { team: "Leadership", score: 88 },
  { team: "Engineering", score: 82 },
  { team: "Product", score: 79 },
  { team: "Marketing", score: 76 },
  { team: "Sales", score: 81 },
  { team: "Customer Support", score: 84 },
];

const COLORS = ["#0F4C81", "#2E86AB", "#6E59A5", "#9b87f5", "#4ade80"];

const TeamDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Dashboard</h1>
          <p className="text-gray-500">
            Monitor your team's culture health and PulseScore™ trends.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-2">
          <select className="px-2 py-1 border rounded-md text-sm">
            <option>Last 6 months</option>
            <option>Last 12 months</option>
            <option>Year to date</option>
          </select>
        </div>
      </div>
      
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">
            <BarChart className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="insights">
            <PieChart className="h-4 w-4 mr-2" />
            Insights
          </TabsTrigger>
          <TabsTrigger value="teams">
            <Users className="h-4 w-4 mr-2" />
            Teams
          </TabsTrigger>
          <TabsTrigger value="history">
            <Calendar className="h-4 w-4 mr-2" />
            History
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">
                  Current PulseScore™
                </CardTitle>
                <CardDescription>
                  Overall trust and wellbeing score
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-5xl font-bold text-pulse-blue">85</div>
                  <div className="ml-2 text-sm text-green-500">+3 since last month</div>
                </div>
                <div className="mt-4 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-pulse-blue w-[85%] rounded-full"></div>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  Certification threshold: 70
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">
                  Response Rate
                </CardTitle>
                <CardDescription>
                  Team participation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-5xl font-bold text-pulse-purple">92%</div>
                  <div className="ml-2 text-sm text-green-500">+5% from last survey</div>
                </div>
                <div className="mt-4 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-pulse-purple w-[92%] rounded-full"></div>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  48 of 52 team members participated
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">
                  Certification Status
                </CardTitle>
                <CardDescription>
                  Current badge status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="bg-green-50 rounded-full p-3">
                    <Award className="h-10 w-10 text-green-600" />
                  </div>
                  <div className="mt-2 font-semibold text-green-600">
                    Certified
                  </div>
                  <div className="mt-1 text-xs text-gray-500 text-center">
                    Valid until August 2025
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>PulseScore™ History</CardTitle>
                <CardDescription>
                  Last 6 months trend
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={pulseScoreHistory}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <defs>
                        <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0F4C81" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#0F4C81" stopOpacity={0.2}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" />
                      <YAxis domain={[60, 100]} />
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="score"
                        stroke="#0F4C81"
                        fillOpacity={1}
                        fill="url(#colorScore)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Dimension Breakdown</CardTitle>
                <CardDescription>
                  Key culture metrics
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart
                      data={dimensionScores}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
                    >
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="name" type="category" />
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <Tooltip />
                      <Bar dataKey="value" fill="#6E59A5" radius={[0, 4, 4, 0]} />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="insights" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dimension Breakdown</CardTitle>
              <CardDescription>
                Detailed analysis of each culture dimension
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={dimensionScores}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {dimensionScores.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="space-y-4">
                  {dimensionScores.map((dimension, index) => (
                    <div key={dimension.name} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                          />
                          <span>{dimension.name}</span>
                        </div>
                        <span className="font-medium">{dimension.value}</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${dimension.value}%`,
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Top Strengths</CardTitle>
                <CardDescription>Areas where your culture excels</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-50 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Growth Opportunities</p>
                      <p className="text-sm text-gray-500">
                        Team members consistently rate professional development opportunities highly
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-50 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Leadership Transparency</p>
                      <p className="text-sm text-gray-500">
                        Clear communication from leadership ranks in the top 20% of benchmarked companies
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-50 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Team Collaboration</p>
                      <p className="text-sm text-gray-500">
                        Cross-functional collaboration scores are consistently high
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Improvement Areas</CardTitle>
                <CardDescription>Opportunities to strengthen your culture</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-amber-50 p-1 rounded-full mr-3 mt-0.5">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Work-Life Balance</p>
                      <p className="text-sm text-gray-500">
                        Some teams report challenges with maintaining healthy boundaries
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-50 p-1 rounded-full mr-3 mt-0.5">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Recognition Programs</p>
                      <p className="text-sm text-gray-500">
                        Team members seek more consistent recognition for contributions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-50 p-1 rounded-full mr-3 mt-0.5">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Career Pathing</p>
                      <p className="text-sm text-gray-500">
                        More transparent advancement opportunities would improve retention
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="teams" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Comparison</CardTitle>
              <CardDescription>
                PulseScore™ by department
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart
                    data={teamComparison}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <XAxis dataKey="team" />
                    <YAxis domain={[60, 100]} />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <Tooltip />
                    <Bar dataKey="score" fill="#2E86AB" radius={[4, 4, 0, 0]} />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Leadership", "Engineering", "Marketing"].map((team) => (
              <Card key={team}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">
                    {team} Team
                  </CardTitle>
                  <CardDescription>
                    Team health overview
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-pulse-blue">
                      {team === "Leadership" ? 88 : team === "Engineering" ? 82 : 76}
                    </div>
                    <div className={`ml-2 text-sm ${
                      team === "Leadership" ? "text-green-500" : 
                      team === "Engineering" ? "text-green-500" : 
                      "text-amber-500"
                    }`}>
                      {team === "Leadership" ? "+2" : team === "Engineering" ? "+4" : "-2"}
                    </div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Trust</span>
                      <div className="h-2 w-3/4 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-pulse-blue w-[85%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Wellbeing</span>
                      <div className="h-2 w-3/4 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-pulse-purple w-[75%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Growth</span>
                      <div className="h-2 w-3/4 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-pulse-teal rounded-full"
                          style={{ width: team === "Marketing" ? "70%" : "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Historical Analysis</CardTitle>
              <CardDescription>
                PulseScore™ trends over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={[
                      ...pulseScoreHistory,
                      { month: "Jul", score: null },
                      { month: "Aug", score: null },
                      { month: "Sep", score: null },
                      { month: "Oct", score: null },
                      { month: "Nov", score: null },
                      { month: "Dec", score: null },
                    ]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <defs>
                      <linearGradient id="colorScoreHist" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6E59A5" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#6E59A5" stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis domain={[60, 100]} />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <Tooltip />
                    <Legend />
                    <Area
                      name="PulseScore"
                      type="monotone"
                      dataKey="score"
                      stroke="#6E59A5"
                      fillOpacity={1}
                      fill="url(#colorScoreHist)"
                      connectNulls
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 border-t pt-4 space-y-4">
                <h4 className="font-medium">Key Milestones</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-pulse-blue/10 p-1 rounded-full mr-3 mt-0.5">
                      <Calendar className="h-4 w-4 text-pulse-blue" />
                    </div>
                    <div>
                      <p className="font-medium">New Leadership Onboarding</p>
                      <p className="text-xs text-gray-500">February 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pulse-blue/10 p-1 rounded-full mr-3 mt-0.5">
                      <Calendar className="h-4 w-4 text-pulse-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Culture Workshop Series</p>
                      <p className="text-xs text-gray-500">April-May 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pulse-blue/10 p-1 rounded-full mr-3 mt-0.5">
                      <Calendar className="h-4 w-4 text-pulse-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Wellbeing Initiative Launch</p>
                      <p className="text-xs text-gray-500">June 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TeamDashboard;
