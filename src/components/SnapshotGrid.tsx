import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  GraduationCap,
  Shield,
  Target,
  Briefcase,
  Rocket,
  Code2,
} from "lucide-react";

export function SnapshotGrid() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 — Education */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="font-semibold">Education</h3>
              <p className="text-sm text-muted-foreground">BSIT · 3rd Year</p>
              <Badge variant="secondary">Information Security</Badge>
            </CardContent>
          </Card>

          {/* Card 2 — Focus */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="font-semibold">Focus</h3>
              <p className="text-sm text-muted-foreground">
                Secure full-stack web development
              </p>
              <Badge variant="secondary">Security-first mindset</Badge>
            </CardContent>
          </Card>

          {/* Card 3 — Experience */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="font-semibold">Experience</h3>
              <p className="text-sm text-muted-foreground">
                Academic projects & freelance-ready
              </p>
              <Badge className="bg-green-600/15 text-green-500">
                Open to work
              </Badge>
            </CardContent>
          </Card>

          {/* Card 4 — Tech Level */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <Code2 className="w-6 h-6 text-primary" />
              <h3 className="font-semibold">Tech Level</h3>
              <p className="text-sm text-muted-foreground">
                Frontend-leaning, growing backend depth
              </p>
              <Badge variant="secondary">React · PHP</Badge>
            </CardContent>
          </Card>

          {/* Card 5 — Goals */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <Target className="w-6 h-6 text-primary" />
              <h3 className="font-semibold">Current Goal</h3>
              <p className="text-sm text-muted-foreground">
                Build real-world, production-ready apps
              </p>
              <Badge variant="secondary">Hands-on learning</Badge>
            </CardContent>
          </Card>

          {/* Card 6 — Direction */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <Rocket className="w-6 h-6 text-primary" />
              <h3 className="font-semibold">Direction</h3>
              <p className="text-sm text-muted-foreground">
                Junior → Mid full-stack developer
              </p>
              <Badge variant="secondary">Long-term growth</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
