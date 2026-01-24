/**
 * CV Page - Researcher Portfolio
 */

import { Link } from "wouter";

export default function CV() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src={`${import.meta.env.BASE_URL}images/profile.jpeg`}
              alt="Saurabh Kumar Pandey" 
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-tight">Saurabh Kumar Pandey</p>
              <p className="text-xs text-muted-foreground">Senior Applied Scientist · Microsoft</p>
            </div>
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/" className="text-sm hover:text-accent transition-colors">Home</Link>
            <Link href="/publications" className="text-sm hover:text-accent transition-colors">Publications</Link>
            <Link href="/cv" className="text-sm font-semibold text-accent">CV</Link>
          </div>
        </nav>
      </header>

      {/* CV Content */}
      <main className="container py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Curriculum Vitae</h1>
          <p className="text-muted-foreground">
            View or <a href={`${import.meta.env.BASE_URL}cv.pdf`} download className="text-accent hover:underline">download</a> my CV.
          </p>
        </div>
        
        <div className="w-full h-[calc(100vh-200px)] rounded-lg border border-border overflow-hidden">
          <iframe
            src={`${import.meta.env.BASE_URL}cv.pdf`}
            className="w-full h-full"
            title="Saurabh Kumar Pandey - CV"
          />
        </div>
      </main>

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
