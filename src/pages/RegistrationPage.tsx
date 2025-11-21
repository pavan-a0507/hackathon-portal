import { Navigation } from "@/components/Navigation";
import RegistrationFormContent from "@/components/RegistrationFormContent";
import { Card, CardContent } from "@/components/ui/card";

const RegistrationPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="container mx-auto px-4 py-16">
                <div className="max-w-2xl mx-auto">
                    <Card>
                        <CardContent className="p-6">
                            <RegistrationFormContent />
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default RegistrationPage;