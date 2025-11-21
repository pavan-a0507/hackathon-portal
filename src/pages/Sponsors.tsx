import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Sponsors = () => {
    const sponsors = [
        {
            tier: "Platinum",
            name: "TechCorp Inc",
            description: "Leading technology solutions provider",
            benefits: "Main stage naming rights, unlimited swag, 5 mentor spots for Sapthahacks 2025",
            color: "bg-accent",
            website: "https://www.techcorp.com"
        },
        {
            tier: "Gold",
            name: "StartupVentures",
            description: "Empowering the next generation of innovators",
            benefits: "Workshop sponsorship, branded booth, 3 mentor spots for Sapthahacks 2025",
            color: "bg-primary",
            website: "https://www.startupventures.com"
        },
        {
            tier: "Gold",
            name: "CloudHost Pro",
            description: "Enterprise cloud infrastructure",
            benefits: "Prize category sponsor, 2 mentor spots",
            color: "bg-primary",
            website: "https://www.cloudhostpro.com"
        },
        {
            tier: "Silver",
            name: "DataSystems",
            description: "Big data and analytics solutions",
            benefits: "Networking session sponsor, 1 mentor spot",
            color: "bg-muted",
            website: "https://www.datasystems.com"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Our Sponsors 🤝</h1>
                    <p className="text-muted-foreground">
                        Thank you to our amazing sponsors who make this hackathon possible!
                    </p>
                </div>

                <div className="grid gap-6 mb-8">
                    {sponsors.map((sponsor, index) => (
                        <Card key={index} className="overflow-hidden">
                            <div className={`h-2 ${sponsor.color}`} />
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <CardTitle className="text-2xl">{sponsor.name}</CardTitle>
                                            <Badge variant="outline">{sponsor.tier}</Badge>
                                        </div>
                                        <CardDescription className="text-base">
                                            {sponsor.description}
                                        </CardDescription>
                                    </div>
                                    <a
                                        href={sponsor.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-4 p-2 rounded-lg hover:bg-muted transition-colors"
                                    >
                                        <ExternalLink className="h-5 w-5" />
                                    </a>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-sm font-medium mb-1">Sponsorship Benefits:</p>
                                        <p className="text-sm text-muted-foreground">{sponsor.benefits}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Interested in Sponsoring?</CardTitle>
                        <CardDescription>
                            Join our family of sponsors and help support the next generation of developers at Sapthahacks 2025
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-4 rounded-lg border border-border">
                                <h3 className="font-bold mb-2">Platinum Tier</h3>
                                <p className="text-2xl font-bold mb-2 text-accent">₹10,000+</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Main stage naming</li>
                                    <li>• 5 mentor spots</li>
                                    <li>• Premium booth space</li>
                                    <li>• Unlimited swag distribution</li>
                                </ul>
                            </div>

                            <div className="p-4 rounded-lg border border-border">
                                <h3 className="font-bold mb-2">Gold Tier</h3>
                                <p className="text-2xl font-bold mb-2 text-primary">₹5,000+</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Workshop sponsorship</li>
                                    <li>• 3 mentor spots</li>
                                    <li>• Standard booth space</li>
                                    <li>• Swag distribution</li>
                                </ul>
                            </div>

                            <div className="p-4 rounded-lg border border-border">
                                <h3 className="font-bold mb-2">Silver Tier</h3>
                                <p className="text-2xl font-bold mb-2">₹2,500+</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Logo placement</li>
                                    <li>• 1 mentor spot</li>
                                    <li>• Session sponsorship</li>
                                    <li>• Social media mentions</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                            <p className="text-sm">
                                <span className="font-medium">Want to become a sponsor?</span> Contact us at{" "}
                                <a href="mailto:sponsors@hackevent.com" className="text-primary hover:underline">
                                    sponsors@sapthahacks.com
                                </a>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};

export default Sponsors;