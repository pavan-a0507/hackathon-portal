import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Pencil, Check, X } from "lucide-react"; // Added Pencil, Check, X
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import ProjectSubmissionContent from "@/components/ProjectSubmissionContent";
import { useState, useEffect } from "react";

const Dashboard = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // =================================================================
    // 1. TEAM STATE LOGIC (New)
    // =================================================================
    const [teamName, setTeamName] = useState("Code Hub"); // Default name
    const [memberCount, setMemberCount] = useState("6");       // Default count (UPDATED)
    const [isEditingTeam, setIsEditingTeam] = useState(false); // Edit mode toggle

    // Temporary state to hold values while typing
    const [tempTeamName, setTempTeamName] = useState(teamName);
    const [tempMemberCount, setTempMemberCount] = useState(memberCount);

    const handleSaveTeam = () => {
        setTeamName(tempTeamName);
        setMemberCount(tempMemberCount);
        setIsEditingTeam(false);
    };

    const handleCancelEdit = () => {
        setTempTeamName(teamName);
        setTempMemberCount(memberCount);
        setIsEditingTeam(false);
    };

    // =================================================================
    // 2. TIMER LOGIC
    // =================================================================
    const INITIAL_HOURS = 2;
    const INITIAL_MINUTES = 0;
    const TOTAL_SECONDS = (INITIAL_HOURS * 3600) + (INITIAL_MINUTES * 60);

    const [timeLeft, setTimeLeft] = useState<number>(TOTAL_SECONDS);

    useEffect(() => {
        const timerId = window.setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 0) {
                    clearInterval(timerId);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        const hDisplay = h < 10 ? `0${h}` : h;
        const mDisplay = m < 10 ? `0${m}` : m;
        const sDisplay = s < 10 ? `0${s}` : s;
        return `${hDisplay}h ${mDisplay}m ${sDisplay}s`;
    };
    // =================================================================

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Welcome, Hacker! 👋</h1>
                    <p className="text-muted-foreground">Here's what's happening at Sapthahacks 2025</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Event Status</CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">Active</div>
                            <Badge className="mt-2 bg-primary">Registration Open</Badge>
                        </CardContent>
                    </Card>

                    {/* --- UPDATED TEAM CARD --- */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Your Team</CardTitle>
                            {/* Edit Toggle Button */}
                            {!isEditingTeam ? (
                                <button onClick={() => setIsEditingTeam(true)} className="text-muted-foreground hover:text-primary transition-colors">
                                    <Pencil className="h-4 w-4" />
                                </button>
                            ) : (
                                <div className="flex gap-2">
                                    <button onClick={handleSaveTeam} className="text-green-600 hover:text-green-700">
                                        <Check className="h-4 w-4" />
                                    </button>
                                    <button onClick={handleCancelEdit} className="text-red-500 hover:text-red-600">
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            )}
                        </CardHeader>
                        <CardContent>
                            {isEditingTeam ? (
                                // --- EDIT MODE ---
                                <div className="space-y-3 pt-1">
                                    <div>
                                        <label className="text-xs text-muted-foreground ml-1">Team Name</label>
                                        <input
                                            type="text"
                                            value={tempTeamName}
                                            onChange={(e) => setTempTeamName(e.target.value)}
                                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground ml-1">Members</label>
                                        <input
                                            type="number"
                                            value={tempMemberCount}
                                            onChange={(e) => setTempMemberCount(e.target.value)}
                                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        />
                                    </div>
                                </div>
                            ) : (
                                // --- VIEW MODE ---
                                <>
                                    <div className="text-2xl font-bold">{memberCount} Members</div>
                                    <p className="text-xs text-muted-foreground mt-2">Team: {teamName}</p>
                                </>
                            )}
                        </CardContent>
                    </Card>
                    {/* ------------------------- */}

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Time Left</CardTitle>
                            <Clock className={`h-4 w-4 ${timeLeft < 3600 ? 'text-red-500 animate-pulse' : 'text-muted-foreground'}`} />
                        </CardHeader>
                        <CardContent>
                            <div className={`text-2xl font-bold font-mono tabular-nums ${timeLeft < 3600 ? 'text-red-500' : ''}`}>
                                {formatTime(timeLeft)}
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">Until submission deadline</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Event Schedule</CardTitle>
                            <CardDescription>Upcoming events and workshops</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-4 border-l-2 border-primary pl-4">
                                <div className="min-w-0 flex-1">
                                    <p className="font-medium">Opening Ceremony</p>
                                    <p className="text-xs text-muted-foreground mt-1">Today, 9:00 AM</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 border-l-2 border-muted pl-4">
                                <div className="min-w-0 flex-1">
                                    <p className="font-medium">Presentation</p>
                                    <p className="text-xs text-muted-foreground mt-1">Today, 11:00 AM</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 border-l-2 border-muted pl-4">
                                <div className="min-w-0 flex-1">
                                    <p className="font-medium">Lunch Break</p>
                                    <p className="text-sm text-muted-foreground">Cafeteria</p>
                                    <p className="text-xs text-muted-foreground mt-1">Today, 1:00 PM</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 border-l-2 border-muted pl-4">
                                <div className="min-w-0 flex-1">
                                    <p className="font-medium">Judging Begins</p>
                                    <p className="text-xs text-muted-foreground mt-1">Today, 12:00 PM onwards</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Links</CardTitle>
                            <CardDescription>Important resources and info</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <a
                                href="https://maps.google.com/?q=SAPTHAGIRI+NPS+UNIVERSITY,+14/5,+Hesarghatta+Rd,+Chikkasandra,+Jalahalli+West,+Bengaluru,+Karnataka+560057"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-3 rounded-lg border border-border hover:border-primary transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Venue Map</p>
                                        <p className="text-xs text-muted-foreground">Find your way around</p>
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://www.instagram.com/slug_snpsu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-3 rounded-lg border border-border hover:border-primary transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                        <Users className="h-5 w-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Instagram Handle</p>
                                        <p className="text-xs text-muted-foreground">Follow us on Instagram</p>
                                    </div>
                                </div>
                            </a>
                            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                                <DrawerTrigger asChild>
                                    <div className="w-full text-left cursor-pointer">
                                        <div className="block p-3 rounded-lg border border-border hover:border-primary transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                    <Calendar className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <p className="font-medium">Submit Project</p>
                                                    <p className="text-xs text-muted-foreground">Upload your hackathon project</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </DrawerTrigger>
                                <DrawerContent className="max-w-xl mx-auto">
                                    <div className="p-4">
                                        <ProjectSubmissionContent onSubmitted={() => setIsDrawerOpen(false)} />
                                    </div>
                                </DrawerContent>
                            </Drawer>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;