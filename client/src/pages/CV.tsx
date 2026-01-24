/**
 * CV Page - Researcher Portfolio
 */

export default function CV() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="/images/profile.jpeg" 
              alt="Saurabh Kumar Pandey" 
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-tight">Saurabh Kumar Pandey</p>
              <p className="text-xs text-muted-foreground">Senior Applied Scientist · Microsoft</p>
            </div>
          </a>
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm hover:text-accent transition-colors">Home</a>
            <a href="/publications" className="text-sm hover:text-accent transition-colors">Publications</a>
            <a href="/cv" className="text-sm font-semibold text-accent">CV</a>
          </div>
        </nav>
      </header>

      {/* CV Content */}
      <main className="container py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Curriculum Vitae</h1>
          <p className="text-muted-foreground">
            View or <a href="/cv.pdf" download className="text-accent hover:underline">download</a> my CV.
          </p>
        </div>
        
        <div className="w-full h-[calc(100vh-200px)] rounded-lg border border-border overflow-hidden">
          <iframe
            src="/cv.pdf"
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
