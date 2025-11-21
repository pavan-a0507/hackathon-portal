// src/components/RegistrationFormContent.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const RegistrationFormContent = ({ onSubmitted }: { onSubmitted?: () => void }) => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        university: "",
        experience: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission logic (e.g., API call)
        console.log("Submitting registration:", formData);

        toast({
            title: "Registration Submitted! 🎉",
            description: "We'll send you a confirmation email shortly.",
        });

        // Reset form after submission
        setFormData({ name: "", email: "", university: "", experience: "" });

        // Close the drawer/modal if applicable
        onSubmitted?.();
    };

    return (
        <>
            <CardHeader className="p-0 space-y-1">
                <CardTitle className="text-2xl">Register for Sapthahacks 2025</CardTitle>
                <CardDescription>
                    Fill out the form below to secure your spot. Registration is free!
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-6">
                <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <Label htmlFor="university">University/School *</Label>
                    <Input
                        id="university"
                        required
                        value={formData.university}
                        onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                        placeholder="Tech University"
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
        </>
    );
};

export default RegistrationFormContent;