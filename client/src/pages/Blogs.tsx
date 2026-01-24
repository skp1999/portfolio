/**
 * Blogs Page - Researcher Portfolio
 */

import { Link } from "wouter";
import { PenLine, Mail, Linkedin, Twitter } from "lucide-react";

export default function Blogs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container py-4 flex items-center justify-end">
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/" className="text-sm hover:text-accent transition-colors">Home</Link>
            <Link href="/publications" className="text-sm hover:text-accent transition-colors">Publications</Link>
            <Link href="/blogs" className="text-sm font-semibold text-accent">Blogs</Link>
            <Link href="/cv" className="text-sm hover:text-accent transition-colors">CV</Link>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Coming Soon Content */}
      <main className="container py-20 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="text-center max-w-md">
          <div className="mb-8 relative">
            <div className="w-24 h-24 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
              <PenLine className="w-12 h-12 text-accent" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent/20 rounded-full">
              <span className="text-xs font-semibold text-accent tracking-wider uppercase">Coming Soon</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Blogs
          </h1>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            I'm working on sharing my thoughts, research insights, and tutorials. Stay tuned for upcoming posts!
          </p>
          
          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <div 
                key={i} 
                className="w-2 h-2 rounded-full bg-accent animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Contact Section */}
      <section id="contact" className="py-6 sm:py-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5 scroll-mt-20">
        <div className="container max-w-xl">
          <div className="text-center mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Get In Touch</h2>
            <p className="text-muted-foreground sm:whitespace-nowrap">Interested in collaborating or discussing research opportunities?</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:saurabh2000.iitkgp@gmail.com" className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
              <Mail className="w-4 h-4 text-accent" />
              Email
            </a>
            <a href="https://www.linkedin.com/in/skp1999/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
              <Linkedin className="w-4 h-4 text-accent" />
              LinkedIn
            </a>
            <a href="https://x.com/skp_2709" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
              <Twitter className="w-4 h-4 text-accent" />
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container py-6">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Saurabh Kumar Pandey. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
