/**
 * Talks Page - Researcher Portfolio
 * Design: Modern Research Lab aesthetic
 * Displays conference presentations, seminars, and invited talks
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink, Presentation } from "lucide-react";

export default function Talks() {
  const talks = [
    {
      id: "talk001",
      title: "Deep Learning for Time Series: Recent Advances and Applications",
      event: "International Conference on Machine Learning (ICML) 2024",
      date: "July 2024",
      location: "Vienna, Austria",
      type: "Oral Presentation",
      slidesUrl: "#",
      videoUrl: "#"
    },
    {
      id: "talk002",
      title: "Scaling NLP Models: Challenges and Solutions",
      event: "ACL 2024 Workshop on Efficient NLP",
      date: "June 2024",
      location: "Bangkok, Thailand",
      type: "Workshop Presentation",
      slidesUrl: "#",
      videoUrl: "#"
    },
    {
      id: "talk003",
      title: "Invited Seminar: The Future of AI in Scientific Research",
      event: "Stanford University Computer Science Department",
      date: "May 2024",
      location: "Stanford, CA",
      type: "Invited Talk",
      slidesUrl: "#",
      videoUrl: "#"
    },
    {
      id: "talk004",
      title: "Graph Neural Networks for Molecular Property Prediction",
      event: "NeurIPS 2023 Workshop on Geometric Deep Learning",
      date: "December 2023",
      location: "New Orleans, LA",
      type: "Workshop Presentation",
      slidesUrl: "#",
      videoUrl: "#"
    },
    {
      id: "talk005",
      title: "Multilingual Models: Building Systems That Work Across Languages",
      event: "EMNLP 2023 Main Conference",
      date: "December 2023",
      location: "Singapore",
      type: "Oral Presentation",
      slidesUrl: "#",
      videoUrl: "#"
    },
    {
      id: "talk006",
      title: "Invited Seminar: Ethical Considerations in AI Development",
      event: "MIT Media Lab",
      date: "October 2023",
      location: "Cambridge, MA",
      type: "Invited Talk",
      slidesUrl: "#",
      videoUrl: "#"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Oral Presentation":
        return "bg-accent/10 text-accent border-accent/30";
      case "Workshop Presentation":
        return "bg-secondary/10 text-secondary border-secondary/30";
      case "Invited Talk":
        return "bg-purple-500/10 text-purple-600 border-purple-500/30";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container py-4 flex items-center justify-between">
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <div className="px-3 py-2 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-sm">Saurabh Kumar Pandey</span>
            </div>
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="/" className="px-4 py-1.5 rounded-full border border-accent/30 text-sm font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors">Home</a>
            <a href="/publications" className="px-4 py-1.5 rounded-full border border-accent/30 text-sm font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors">Publications</a>
            <a href="/talks" className="px-4 py-1.5 rounded-full border border-accent bg-accent text-sm font-semibold text-accent-foreground transition-colors">Talks</a>
            <a href="/teaching" className="px-4 py-1.5 rounded-full border border-accent/30 text-sm font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors">Teaching</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container py-16 sm:py-24">
        <div className="max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Talks & Presentations</h1>
            <p className="text-lg text-muted-foreground">
              A selection of my conference presentations, workshop talks, and invited seminars.
            </p>
          </div>

          {/* Talks List */}
          <div className="space-y-6">
            {talks.map((talk) => (
              <Card key={talk.id} className="p-6 sm:p-8 bg-card border border-border hover:border-accent/30 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 text-foreground leading-tight">
                      {talk.title}
                    </h2>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-semibold text-foreground">{talk.event}</p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-accent" />
                          <span>{talk.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-accent" />
                          <span>{talk.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${getTypeColor(talk.type)}`}>
                    {talk.type}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-accent border-accent/30 hover:bg-accent/10"
                  >
                    <Presentation className="w-4 h-4 mr-2" />
                    Slides
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-accent border-accent/30 hover:bg-accent/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Video
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background mt-16">
        <div className="container py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Researcher Portfolio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
