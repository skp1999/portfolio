/**
 * CV Page - Researcher Portfolio
 */

import { Link } from "wouter";
import { useState } from "react";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

export default function CV() {
  const [scale, setScale] = useState(1);

  const zoomIn = () => setScale(prev => Math.min(prev + 0.25, 3));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setScale(1);

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
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Curriculum Vitae</h1>
            <p className="text-muted-foreground">
              View or <a href={`${import.meta.env.BASE_URL}cv.pdf`} download className="text-accent hover:underline">download</a> my CV.
            </p>
          </div>
          
          {/* Zoom Controls - visible on mobile */}
          <div className="flex items-center gap-2 sm:hidden">
            <button 
              onClick={zoomOut}
              className="p-2 rounded-lg border border-border hover:bg-accent/10 transition-colors"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <span className="text-sm font-medium min-w-[50px] text-center">{Math.round(scale * 100)}%</span>
            <button 
              onClick={zoomIn}
              className="p-2 rounded-lg border border-border hover:bg-accent/10 transition-colors"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button 
              onClick={resetZoom}
              className="p-2 rounded-lg border border-border hover:bg-accent/10 transition-colors"
              aria-label="Reset zoom"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Desktop: iframe with native controls */}
        <div className="hidden sm:block w-full h-[calc(100vh-200px)] rounded-lg border border-border overflow-hidden">
          <iframe
            src={`${import.meta.env.BASE_URL}cv.pdf`}
            className="w-full h-full"
            title="Saurabh Kumar Pandey - CV"
          />
        </div>

        {/* Mobile: scrollable view with zoom */}
        <div className="sm:hidden w-full h-[calc(100vh-280px)] rounded-lg border border-border overflow-auto">
          <div 
            style={{ 
              width: `${scale * 100}%`,
              minWidth: '100%'
            }}
          >
            <iframe
              src={`${import.meta.env.BASE_URL}cv.pdf`}
              className="w-full border-0"
              style={{ height: '1200px' }}
              title="Saurabh Kumar Pandey - CV"
            />
          </div>
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
