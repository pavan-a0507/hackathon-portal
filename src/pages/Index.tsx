import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {Calendar, MapPin, Users, Github, Twitter, Linkedin, Instagram, Mail} from "lucide-react";
import { useState } from "react";

const Index = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        university: "",
        experience: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Registration Submitted! 🎉",
            description: "We'll send you a confirmation email shortly.",
        });
        setFormData({ name: "", email: "", university: "", experience: "" });
    };

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b border-border">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Sapthahacks 2025
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                            Build. Learn. Connect. Join for innovation and creativity.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center mb-8">
                            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span className="text-sm">November 22nd 2025</span>
                            </div>
                            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span className="text-sm">Sapthagiri NPS University</span>
                            </div>
                            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                                <Users className="h-4 w-4 text-primary" />
                                <span className="text-sm">250+ Hackers</span>
                            </div>
                        </div>

                        <Button size="lg" className="text-lg px-8">
                            <a href="#register">Register Now</a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 border-b border-border">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">What to Expect</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Workshops & Mentorship</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Learn from industry experts through hands-on workshops and get guidance from experienced mentors throughout the event.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Amazing Prizes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Compete for prizes worth ₹10,000+ across multiple categories including Best Overall, Best UI/UX, and sponsor challenges.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Network & Collaborate</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Connect with fellow hackers, recruiters, and industry professionals. Build your network while building cool projects!
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Registration Form */}
            <section id="register" className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Register for Sapthahacks 2025</CardTitle>
                                <CardDescription>
                                    Fill out the form below to secure your spot. Registration is free!
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <Label htmlFor="name">Full Name *</Label>
                                        <Input
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Ram"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="email">Email Address *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="ram@example.com"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="university">University/School *</Label>
                                        <Input
                                            id="university"
                                            required
                                            value={formData.university}
                                            onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                                            placeholder="Sapthagiri NPS University"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="experience">Tell us about your experience</Label>
                                        <Textarea
                                            id="experience"
                                            value={formData.experience}
                                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                            placeholder="What technologies do you know? What are you excited to build?"
                                            rows={4}
                                        />
                                    </div>

                                    <Button type="submit" className="w-full" size="lg">
                                        Submit Registration
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 border-t border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Contact Us</CardTitle>
                                <CardDescription>
                                    Get in touch with the Sapthahacks 2025 organizing team.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {/* Instagram slug_snpsu */}
                                    <a
                                        href="https://www.instagram.com/slug_snpsu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted transition-colors"
                                    >
                                        <Instagram className="h-6 w-6 text-primary" />
                                        <div className="flex flex-col">
                                            <span className="font-medium">Instagram (SLUG)</span>
                                            <span className="text-sm text-muted-foreground">@slug_snpsu</span>
                                        </div>
                                    </a>
                                    {/* Instagram innovedge_snpsu (NEW) */}
                                    <a
                                        href="https://www.instagram.com/innovedge_snpsu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted transition-colors"
                                    >
                                        <Instagram className="h-6 w-6 text-primary" />
                                        <div className="flex flex-col">
                                            <span className="font-medium">Instagram (InnovEdge)</span>
                                            <span className="text-sm text-muted-foreground">@innovedge_snpsu</span>
                                        </div>
                                    </a>
                                    {/* Email */}
                                    <a
                                        href="mailto:sponsors@hackevent.com"
                                        className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted transition-colors"
                                    >
                                        <Mail className="h-6 w-6 text-primary" />
                                        <div className="flex flex-col">
                                            <span className="font-medium">Email</span>
                                            <span className="text-sm text-muted-foreground">sponsors@sapthahack.com</span>
                                        </div>
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground">
                            © 2025 SapthaHacks. All rights reserved.
                        </p>

                        <div className="flex gap-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;