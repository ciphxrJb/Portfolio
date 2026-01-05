import { MapPin, Mail, Github, FileText } from "lucide-react";

export function ProfileHeader() {
  return (
    <header className="relative z-10">
      <div className="container mx-auto px-6 pt-20 pb-14">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:items-center">
          {/* Profile Photo */}
          <div className="shrink-0">
            <img
              src="../images/temp_photo.jpg"
              alt="Profile photo"
              className="w-24 h-24 rounded-xl object-cover border border-border"
            />
          </div>

          {/* Identity */}
          <div className="flex-1 space-y-3">
            <h1 className="text-2xl md:text-3xl font-semibold">
              Santos, Jose Bernardo
            </h1>

            <p className="text-muted-foreground">Full Stack Web Developer</p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Philippines
              </span>

              <span className="text-green-500 font-medium">Open to Work</span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4 text-sm">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:bg-accent transition"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>

              <a
                href="https://github.com/ciphxrJb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:bg-accent transition"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <a
                href="mailto:your@email.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:bg-accent transition"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
