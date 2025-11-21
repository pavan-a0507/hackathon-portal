import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Code, Trophy, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Stats = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Live Statistics 📊</h1>
          <p className="text-muted-foreground">Real-time metrics from SapthaHacks 2025</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">300</div>
              <p className="text-xs text-muted-foreground mt-1">+23 from last hour</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Projects Submitted</CardTitle>
              <Code className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87</div>
              <p className="text-xs text-muted-foreground mt-1">64 still in progress</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Teams Formed</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">50</div>
              <p className="text-xs text-muted-foreground mt-1">Average 6 members/team</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">267</div>
              <p className="text-xs text-muted-foreground mt-1">Currently Active</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Track Distribution</CardTitle>
              <CardDescription>Projects by category</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Web Development</span>
                  <span className="text-sm text-muted-foreground">35%</span>
                </div>
                <Progress value={35} className="h-2" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">AI/ML</span>
                  <span className="text-sm text-muted-foreground">28%</span>
                </div>
                <Progress value={28} className="h-2" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Mobile Apps</span>
                  <span className="text-sm text-muted-foreground">22%</span>
                </div>
                <Progress value={22} className="h-2" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Hardware/IoT</span>
                  <span className="text-sm text-muted-foreground">15%</span>
                </div>
                <Progress value={15} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Technologies</CardTitle>
              <CardDescription>Most used tools and frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <span className="font-medium">React</span>
                  </div>
                  <span className="text-sm text-muted-foreground">124 projects</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <span className="font-medium">Python</span>
                  </div>
                  <span className="text-sm text-muted-foreground">98 projects</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <span className="font-medium">Node.js</span>
                  </div>
                  <span className="text-sm text-muted-foreground">87 projects</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center text-xs font-bold">
                      4
                    </div>
                    <span className="font-medium">TensorFlow</span>
                  </div>
                  <span className="text-sm text-muted-foreground">56 projects</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center text-xs font-bold">
                      5
                    </div>
                    <span className="font-medium">Firebase</span>
                  </div>
                  <span className="text-sm text-muted-foreground">43 projects</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Submissions</CardTitle>
            <CardDescription>Latest projects submitted</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-l-2 border-primary pl-4">
                <div>
                  <p className="font-medium">SapthaHack - Hackathon Portal</p>
                  <p className="text-sm text-muted-foreground">Team CodeHUB • 1 minutes ago</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  Web
                </span>
              </div>

              <div className="flex items-center justify-between border-l-2 border-muted pl-4">
                <div>
                  <p className="font-medium">AI Study Buddy</p>
                  <p className="text-sm text-muted-foreground">Team Neural Net • 15 minutes ago</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent font-medium">
                  AI/ML
                </span>
              </div>

              <div className="flex items-center justify-between border-l-2 border-muted pl-4">
                <div>
                  <p className="font-medium">CampusConnect Social Platform</p>
                  <p className="text-sm text-muted-foreground">Team Socialites • 32 minutes ago</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  Mobile
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Stats;
