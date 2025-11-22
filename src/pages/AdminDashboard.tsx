import * as React from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, FileText, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// --- MOCK DATA TYPES ---
interface Participant {
    id: number;
    name: string;
    email: string;
    university: string;
}

interface Project {
    id: number;
    name: string;
    team: string;
    track: string;
    status: 'Submitted' | 'Scored';
    score: number | null;
}

// Mock initial data
const mockParticipants: Participant[] = [
    { id: 1, name: "Ram Sharma", email: "ram@example.com", university: "Sapthagiri NPS University" },
    { id: 2, name: "Priya Varma", email: "priya@university.edu", university: "Tech University" },
    { id: 3, name: "John Doe", email: "john@mail.com", university: "State College" },
];

const mockProjectsData: Project[] = [
    { id: 101, name: "EcoTracker App", team: "Green Code", track: "Mobile Apps", status: 'Submitted', score: null },
    { id: 102, name: "Quantum Solver", team: "Team Q", track: "AI/ML", status: 'Submitted', score: null },
    { id: 103, name: "SapthaHack Portal", team: "Code Warriors", track: "Web Development", status: 'Scored', score: 92 },
    { id: 104, name: "CampusConnect", team: "Socialites", track: "Mobile Apps", status: 'Submitted', score: null },
];
// --- END MOCK DATA ---


const AdminDashboard = () => {
    // State for all sections
    const [participants, setParticipants] = React.useState<Participant[]>([]);
    const [projects, setProjects] = React.useState<Project[]>([]);
    const [loading, setLoading] = React.useState(true);

    // State for the Judge Panel Modal
    const [isJudging, setIsJudging] = React.useState(false);
    const [activeProject, setActiveProject] = React.useState<Project | null>(null);
    const [newScore, setNewScore] = React.useState<string>("");
    const [feedback, setFeedback] = React.useState<string>("");

    React.useEffect(() => {
        // Simulate data fetch
        setTimeout(() => {
            setParticipants(mockParticipants);
            setProjects(mockProjectsData);
            setLoading(false);
        }, 1000);
    }, []);

    const handleJudgeClick = (project: Project) => {
        setActiveProject(project);
        setNewScore(project.score ? String(project.score) : ""); // Pre-fill if already scored
        setFeedback("");
        setIsJudging(true);
    };

    const handleScoreSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!activeProject || !newScore || isNaN(Number(newScore))) return;

        const scoreValue = Number(newScore);

        // Update the project list
        setProjects(prev => prev.map(p =>
            p.id === activeProject.id
                ? { ...p, score: scoreValue, status: 'Scored' }
                : p
        ));

        // Close modal and reset state
        setIsJudging(false);
        setActiveProject(null);
        setNewScore("");
        setFeedback("");
        console.log(`Project ${activeProject.name} scored ${scoreValue}. Feedback: ${feedback}`);
    };

    const scoredProjects = projects.filter(p => p.status === 'Scored').length;
    const pendingProjects = projects.filter(p => p.status === 'Submitted').length;

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2 text-destructive">Admin Dashboard</h1>
                    <p className="text-muted-foreground">Manage registrations, projects, and judging for SapthaHacks 2025.</p>
                </div>

                {/* Admin Metrics Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Registered</CardTitle>
                            <Users className="h-4 w-4 text-destructive" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{participants.length}</div>
                            <p className="text-xs text-muted-foreground mt-1">Total participant records</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Projects Submitted</CardTitle>
                            <FileText className="h-4 w-4 text-destructive" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{projects.length}</div>
                            <p className="text-xs text-muted-foreground mt-1">Total project files uploaded</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Projects Scored</CardTitle>
                            <Star className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{scoredProjects} / {projects.length}</div>
                            <p className="text-xs text-muted-foreground mt-1">{pendingProjects} pending evaluation</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Judge Panel Section */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Judge Panel: Project Evaluation</CardTitle>
                        <CardDescription>Assign scores and feedback to submitted projects.</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                        {loading ? (
                            <p>Loading project submissions...</p>
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Project Name</TableHead>
                                        <TableHead>Team</TableHead>
                                        <TableHead>Track</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Score</TableHead>
                                        <TableHead className="text-right">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {projects.map((project) => (
                                        <TableRow key={project.id}>
                                            <TableCell className="font-medium">{project.name}</TableCell>
                                            <TableCell>{project.team}</TableCell>
                                            <TableCell>{project.track}</TableCell>
                                            <TableCell>
                                                <span className={`font-semibold ${project.status === 'Submitted' ? 'text-yellow-600' : 'text-green-600'}`}>
                                                    {project.status}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right font-bold">{project.score !== null ? project.score : 'N/A'}</TableCell>
                                            <TableCell className="text-right">
                                                <Button
                                                    size="sm"
                                                    variant={project.status === 'Scored' ? 'secondary' : 'default'}
                                                    onClick={() => handleJudgeClick(project)}
                                                >
                                                    {project.status === 'Scored' ? 'Edit Score' : 'Evaluate'}
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}
                    </CardContent>
                </Card>


                {/* Registrations Table (from previous step) */}
                <Card>
                    <CardHeader>
                        <CardTitle>All Registrations</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        {loading ? (
                            <p>Loading participant data...</p>
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>ID</TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>University</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {participants.map((p) => (
                                        <TableRow key={p.id}>
                                            <TableCell className="font-medium">{p.id}</TableCell>
                                            <TableCell>{p.name}</TableCell>
                                            <TableCell>{p.email}</TableCell>
                                            <TableCell>{p.university}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}
                    </CardContent>
                </Card>
            </main>

            {/* Judging Modal/Dialog */}
            <Dialog open={isJudging} onOpenChange={setIsJudging}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Evaluate Project: {activeProject?.name}</DialogTitle>
                        <DialogDescription>
                            Score the project from 0 to 100 and leave optional feedback.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleScoreSubmit} className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="score" className="text-right">
                                Score (0-100)
                            </Label>
                            <Input
                                id="score"
                                type="number"
                                min="0"
                                max="100"
                                required
                                value={newScore}
                                onChange={(e) => setNewScore(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="feedback">Judge Feedback</Label>
                            <Textarea
                                id="feedback"
                                placeholder="E.g., Great UI, needs more backend logic."
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                            <DialogClose asChild>
                                <Button type="button" variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Submit Score</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AdminDashboard;