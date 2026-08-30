/**
 * Teaching Page - Researcher Portfolio
 * Design: Modern Research Lab aesthetic
 * Displays teaching experience, courses, and educational activities
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Award } from "lucide-react";

export default function Teaching() {
  const courses = [
    {
      id: "course001",
      title: "Advanced Machine Learning",
      institution: "University of Technology",
      role: "Instructor",
      semester: "Fall 2024",
      students: "120+",
      description: "A comprehensive course covering advanced ML techniques including deep learning, reinforcement learning, and modern architectures.",
      syllabusUrl: "#"
    },
    {
      id: "course002",
      title: "Natural Language Processing",
      institution: "University of Technology",
      role: "Instructor",
      semester: "Spring 2024",
      students: "85",
      description: "Introduction to NLP fundamentals, text processing, language models, and practical applications in real-world scenarios.",
      syllabusUrl: "#"
    },
    {
      id: "course003",
      title: "Deep Learning for Computer Vision",
      institution: "University of Technology",
      role: "Teaching Assistant",
      semester: "Fall 2023",
      students: "95",
      description: "Hands-on course on CNN architectures, image classification, object detection, and modern vision transformers.",
      syllabusUrl: "#"
    },
    {
      id: "course004",
      title: "Data Science Fundamentals",
      institution: "Online Learning Platform",
      role: "Course Creator",
      semester: "Ongoing",
      students: "5000+",
      description: "A comprehensive online course covering data analysis, visualization, and machine learning fundamentals for beginners.",
      syllabusUrl: "#"
    }
  ];

  const mentoring = [
    {
      id: "mentor001",
      name: "PhD Student Mentoring",
      description: "Currently advising 3 PhD students on research projects in machine learning and NLP",
      count: "3 students"
    },
    {
      id: "mentor002",
      name: "Master's Thesis Supervision",
      description: "Supervised 8 master's thesis projects with focus on applied ML and data science",
      count: "8 theses"
    },
    {
      id: "mentor003",
      name: "Undergraduate Research",
      description: "Mentored 15+ undergraduate students in research internships and capstone projects",
      count: "15+ students"
    }
  ];

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
            <a href="/talks" className="px-4 py-1.5 rounded-full border border-accent/30 text-sm font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors">Talks</a>
            <a href="/teaching" className="px-4 py-1.5 rounded-full border border-accent bg-accent text-sm font-semibold text-accent-foreground transition-colors">Teaching</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container py-16 sm:py-24">
        <div className="max-w-4xl">
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Teaching & Mentoring</h1>
            <p className="text-lg text-muted-foreground">
              I am passionate about education and mentoring the next generation of researchers and engineers.
            </p>
          </div>

          {/* Courses Section */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-accent" />
              Courses Taught
            </h2>

            <div className="space-y-6">
              {courses.map((course) => (
                <Card key={course.id} className="p-6 sm:p-8 bg-card border border-border hover:border-accent/30 transition-colors">
                  <div className="mb-4">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {course.institution} • {course.semester}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-semibold text-accent">{course.role}</p>
                        <p className="text-xs text-muted-foreground mt-1">{course.students} students</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{course.description}</p>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-accent border-accent/30 hover:bg-accent/10"
                  >
                    View Syllabus
                  </Button>
                </Card>
              ))}
            </div>
          </section>

          {/* Mentoring Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
              <Users className="w-6 h-6 text-accent" />
              Student Mentoring
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {mentoring.map((mentor) => (
                <Card key={mentor.id} className="p-6 bg-card border border-border hover:border-accent/30 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <h3 className="font-bold text-foreground">{mentor.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{mentor.description}</p>
                  <p className="text-sm font-semibold text-accent">{mentor.count}</p>
                </Card>
              ))}
            </div>

            <Card className="mt-8 p-6 sm:p-8 bg-accent/5 border border-accent/20">
              <h3 className="font-bold text-lg mb-3 text-foreground">Mentoring Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in fostering critical thinking and encouraging students to ask challenging questions. 
                My approach emphasizes hands-on learning, collaborative problem-solving, and providing constructive 
                feedback to help students grow both academically and professionally. I am committed to creating an 
                inclusive learning environment where all students feel supported and motivated to excel.
              </p>
            </Card>
          </section>
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
