export function AboutSection2() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">About</h2>

          <p className="text-muted-foreground leading-relaxed">
            I’m a web developer with a strong interest in building secure,
            maintainable, and performance-focused applications. My learning
            approach is hands-on — I prefer building real projects, solving real
            problems, and improving through iteration.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            I’m particularly interested in how thoughtful design, clean code,
            and security-aware practices come together to create reliable
            systems that scale well over time.
          </p>

          {/* subtle personal touch */}
          <p className="text-sm text-muted-foreground pt-2">
            Outside of coding, I enjoy refining side projects, learning through
            experimentation, and continuously improving how I build things.
          </p>
        </div>
      </div>
    </section>
  );
}
