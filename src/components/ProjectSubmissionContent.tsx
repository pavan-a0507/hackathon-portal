// src/components/ProjectSubmissionContent.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Upload, File as FileIcon, X } from "lucide-react";

const MAX_FILE_SIZE = 1024 * 1024 * 1024; // 1GB in bytes

const ProjectSubmissionContent = ({ onSubmitted }: { onSubmitted?: () => void }) => {
    const { toast } = useToast();
    const [file, setFile] = useState<File | null>(null);
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];

            if (selectedFile.size > MAX_FILE_SIZE) {
                toast({
                    title: "File too large",
                    description: "Please select a file smaller than 1GB.",
                    variant: "destructive",
                });
                return;
            }

            setFile(selectedFile);
        }
    };

    const removeFile = () => {
        setFile(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!file) {
            toast({
                title: "No file selected",
                description: "Please upload your project file before submitting.",
                variant: "destructive",
            });
            return;
        }

        // Simulate submission
        console.log("Submitting project:", { projectName, description, fileName: file.name });

        toast({
            title: "Project Submitted! 🚀",
            description: "Your project has been successfully uploaded.",
        });

        // Reset form
        setProjectName("");
        setDescription("");
        setFile(null);

        onSubmitted?.();
    };

    return (
        <>
            <CardHeader className="p-0 space-y-1">
                <CardTitle className="text-2xl">Submit Your Project</CardTitle>
                <CardDescription>
                    Upload your project details and files. Max file size is 1GB.
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit} className="space-y-6 pt-6">
                <div className="space-y-2">
                    <Label htmlFor="projectName">Project Name</Label>
                    <Input
                        id="projectName"
                        required
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder="e.g., EcoTracker App"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea
                        id="description"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe what your project does..."
                        rows={4}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Project Files (Zip/Rar/PDF)</Label>
                    {!file ? (
                        <div className="flex items-center justify-center w-full">
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors border-muted-foreground/25"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                                    <p className="text-sm text-muted-foreground">
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-muted-foreground">Max size 1GB</p>
                                </div>
                                <Input
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/20">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <FileIcon className="h-5 w-5 text-primary" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-medium truncate">{file.name}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                                    </p>
                                </div>
                            </div>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={removeFile}
                                className="shrink-0"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    )}
                </div>

                <Button type="submit" className="w-full" size="lg">
                    Submit Project
                </Button>
            </form>
        </>
    );
};

export default ProjectSubmissionContent;