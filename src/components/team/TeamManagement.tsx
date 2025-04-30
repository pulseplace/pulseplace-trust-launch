
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit, Plus, Trash2, UserPlus } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "HR Director",
    email: "sarah.johnson@example.com",
    status: "active",
    lastActive: "Today",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "People Operations",
    email: "michael.chen@example.com",
    status: "active",
    lastActive: "Yesterday",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Amelia Rodriguez",
    role: "Culture Lead",
    email: "amelia.rodriguez@example.com",
    status: "active",
    lastActive: "2 days ago",
    avatar: "AR",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Team Lead",
    email: "james.wilson@example.com",
    status: "invited",
    lastActive: "Never",
    avatar: "JW",
  },
];

const TeamManagement: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Team Management</CardTitle>
          <CardDescription>
            Manage team members who can access PulsePlace
          </CardDescription>
        </div>
        <Button className="bg-pulse-blue hover:bg-pulse-blue/90">
          <UserPlus className="h-4 w-4 mr-2" />
          Invite Member
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Member</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`/avatars/${member.id}.png`} alt={member.name} />
                      <AvatarFallback className="bg-pulse-blue/10 text-pulse-blue">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-xs text-gray-500">{member.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      member.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-amber-100 text-amber-800"
                    }
                  >
                    {member.status === "active" ? "Active" : "Invited"}
                  </Badge>
                </TableCell>
                <TableCell>{member.lastActive}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4 text-red-500" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TeamManagement;
