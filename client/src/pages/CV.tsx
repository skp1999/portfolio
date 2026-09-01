/**
 * CV Page - Researcher Portfolio
 */

import { Link } from "wouter";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function CV() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container py-4 flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Link href="/" className="px-4 py-1.5 rounded-full border border-accent/30 text-sm font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors">Home</Link>
            <Link href="/publications" className="px-4 py-1.5 rounded-full border border-accent/30 text-sm font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors">Publications</Link>
            <Link href="/blogs" className="px-4 py-1.5 rounded-full border border-accent/30 text-sm font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors">Blogs</Link>
            <Link href="/travel" className="px-4 py-1.5 rounded-full border border-accent/30 text-sm font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors">Life@OOF</Link>
            <Link href="/cv" className="px-4 py-1.5 rounded-full border border-accent bg-accent text-sm font-semibold text-accent-foreground transition-colors">CV</Link>
            <a href="#contact" className="px-4 py-1.5 rounded-full border border-accent/30 text-sm font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* CV Content */}
      <main className="container py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Curriculum Vitae</h1>
          <p className="text-muted-foreground">
            View or <a href={`${import.meta.env.BASE_URL}cv.pdf?v=20260902b`} download className="text-accent hover:underline">download</a> my CV.
          </p>
        </div>
        
        {/* CV iframe - fits full width, native zoom supported */}
        <div className="w-full h-[calc(100vh-200px)] rounded-lg border border-border overflow-hidden">
          <iframe
            src={`${import.meta.env.BASE_URL}cv.pdf?v=20260902b`}
            className="w-full h-full"
            title="Saurabh Kumar Pandey - CV"
          />
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
