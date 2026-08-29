/**
 * Home Page - Researcher Portfolio
 * Design: Modern Research Lab aesthetic
 * Color Palette: Deep navy (#0f172a) with vibrant teal (#0891b2) accents
 * Typography: Poppins (700 for headings, 400/600 for body)
 * Layout: Two-column with sidebar and main content
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Award, Mail, Calendar, Linkedin, Twitter, Github, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const renderNewsTitle = (title: string) => {
  const isMicrosoftJoining = title.includes("Joined Microsoft as a Senior Applied Scientist");
  const emphasizedText = isMicrosoftJoining
    ? /(Outstanding Paper Award|SAC Theme Award|Microsoft|Senior Applied Scientist)/
    : /(Outstanding Paper Award|SAC Theme Award)/;

  return title.split(emphasizedText).map((part, partIdx) => {
    if (isMicrosoftJoining && part === "Microsoft") {
      return (
        <span key={partIdx} className="inline-flex items-center gap-1 align-middle">
          <strong>{part}</strong>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt=""
            aria-hidden="true"
            className="h-3.5 w-3.5"
          />
        </span>
      );
    }

    return part === "Outstanding Paper Award" || part === "SAC Theme Award" || (isMicrosoftJoining && part === "Senior Applied Scientist")
      ? <strong key={partIdx}>{part}</strong>
      : part;
  });
};

export default function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container py-4 flex items-center justify-end">
          <div className="flex flex-wrap items-center justify-end gap-4 sm:gap-6">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-sm hover:text-accent transition-colors cursor-pointer">Home</a>
            <Link href="/publications" className="text-sm hover:text-accent transition-colors">Publications</Link>
            <Link href="/blogs" className="text-sm hover:text-accent transition-colors">Blogs</Link>
            <Link href="/travel" className="text-sm hover:text-accent transition-colors">Travel</Link>
            <Link href="/cv" className="text-sm hover:text-accent transition-colors">CV</Link>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/5">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-research.png`}
            alt="Research visualization" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent"></div>
        
        <div className="container relative py-10 sm:py-14">
          <div className="grid md:grid-cols-4 gap-8 items-stretch">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <Card className="h-full p-6 pt-12 bg-card border border-border">
                <div className="text-center">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/profile.jpeg`}
                    alt="Saurabh Kumar Pandey" 
                    className="w-36 h-36 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h2 className="text-xl font-bold mb-1">Saurabh Kumar Pandey</h2>
                  <p className="text-sm text-accent font-semibold mb-1">Senior Applied Scientist</p>
                  <a href="https://www.linkedin.com/company/microsoft/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-accent transition-colors block">Microsoft</a>
                </div>

                <div className="space-y-3 border-t border-border pt-3 mt-3">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4" />
                    Bengaluru, India
                  </div>
                  <a href="https://scholar.google.com/citations?user=gP9uqGYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-accent transition-colors">
                    <BookOpen className="w-4 h-4" />
                    Google Scholar
                  </a>
                  <a href="https://www.linkedin.com/in/skp1999/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-accent transition-colors">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a href="https://x.com/skp_2709" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-accent transition-colors">
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </a>
                  <a href="https://github.com/skp1999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-accent transition-colors">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="md:col-span-3">
              <Card className="p-6 bg-card border border-border h-full">
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-semibold text-accent">
                    All About Me
                  </span>
                </div>
                
                <p className="text-base text-muted-foreground mb-2 leading-relaxed">
                  Hello! I am a Senior Applied Scientist at <a href="https://www.linkedin.com/company/microsoft/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft</a>, currently part of the NLX team within Microsoft Word. I am privileged to work alongside renowned and leading researchers like <a href="https://www.linkedin.com/in/si-qing-chen-seattle/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Si-Qing Chen</a>, <a href="https://www.linkedin.com/in/jcogley/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people%3BX2xDeIwlTHSdIKNJ683IUQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">James Cogley</a>, and <a href="https://uk.linkedin.com/in/carina-suzana-negreanu" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Carina Negreanu</a>, focusing on advancing natural language capabilities at Word.
                </p>
                <p className="text-base text-muted-foreground mb-2 leading-relaxed">
                  Prior to joining Microsoft, I was a Research Associate in the <a href="https://mbzuai.ac.ae/research/department/natural-language-processing-department/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Natural Language Processing Department</a> at <a href="https://mbzuai.ac.ae/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">MBZUAI</a>. Advised by <a href="https://mbzuai.ac.ae/study/faculty/monojit-choudhury/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Prof. Monojit Choudhury</a>, my research sat at the critical intersection of Culture and LLMs. Earlier in my career, I served as a Research Staff Member at <a href="https://www.linkedin.com/company/vijnalabs/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">V-Labs</a>, working at the intersection of CV and NLP. leading the development of end-to-end products leveraging LLMs for Information Extraction from financial documents.
                </p>
                <p className="text-base text-muted-foreground mb-3 leading-relaxed">
                  I graduated with a Dual Degree (M.Tech + B.Tech), specializing in AI & Applications, from <a href="https://www.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">IIT Kharagpur</a>. During my time there, I had the privilege of working with <a href="https://cse.iitkgp.ac.in/~animeshm/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Prof. Animesh Mukherjee</a> and <a href="https://cse.iitkgp.ac.in/~pawang/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Prof. Pawan Goyal</a>. I also remain closely associated with <a href="https://cnerg-iitkgp.github.io/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">CNeRG</a>.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/publications">
                    <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      View Publications <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & News Section */}
      <section className="py-10 sm:py-14 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Timeline - Left Side */}
            <div className="md:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Journey</h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border"></div>
                
                <div className="space-y-6">
                  {[
                    { year: "Oct 2025 - Present", role: "Senior Applied Scientist", org: "Microsoft", location: "Bengaluru, India" },
                    { year: "Jul 2025 - Oct 2025", role: "Senior Machine Learning Engineer", org: "Quantiphi", location: "Bengaluru, India" },
                    { year: "Jul 2024 - Jun 2025", role: "Research Associate II", org: "MBZUAI", location: "Abu Dhabi, UAE" },
                    { year: "Jun 2022 - Jun 2024", role: "Associate Research Staff Member", org: "V-Labs", location: "Bengaluru, India" },
                    { year: "Jul 2017 - May 2022", role: "Integrated Dual Degree (B.Tech + M.Tech)", org: "IIT Kharagpur", location: "Kharagpur, India" },
                  ].map((item, idx) => (
                    <div key={idx} className="relative pl-8">
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-0.5 w-4 h-4 rounded-full bg-accent border-4 border-background"></div>
                      <p className="text-xs font-semibold text-accent mb-1">{item.year}</p>
                      <p className="font-bold text-foreground">{item.role}</p>
                      <p className="text-sm text-muted-foreground">{item.org}</p>
                      <p className="text-xs text-muted-foreground">{item.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* News - Right Side */}
            <div className="md:col-span-3">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">News</h2>
              <div className="relative border border-border rounded-xl bg-card/30 overflow-hidden h-[530px]">
                <div className="h-full overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 transparent' }}>
                  {[
                    { date: "Aug 2026", title: "📄 Paper accepted at EMNLP 2026:", papers: [{ name: "FBHM: Functional Benchmarking and Steering of VLMs for Hateful Meme Detection", url: "https://arxiv.org/abs/2605.31349" }] },
                    { date: "Jul 2026", title: "✈️ Visiting Microsoft Redmond HQ for a business trip", papers: null },
                    { date: "Jul 2026", title: "🏆 Received Outstanding Paper Award for our paper at C3NLP@ACL 2026", papers: null },
                    { date: "Jul 2026", title: "📄 Presenting our paper at C3NLP:", papers: [{ name: "Beyond Monolithic Culture: Evaluating Understandability of Online Text Across Cultural Dimensions", url: "https://aclanthology.org/2026.c3nlp-1.16/" }] },
                    { date: "Jul 2026", title: "✈️ Attending and presenting at ACL 2026", papers: null },
    
                    { date: "May 2026", title: "📄 Paper accepted at ICML 2026:", papers: [{ name: "Measuring Meta-Cultural Competency: A Spectral Framework for LLM Knowledge Structures", url: "https://openreview.net/pdf?id=3UHHW9Gzi7" }] },
                    { date: "May 2026", title: "📄 Paper accepted at C3NLP@ACL 2026:", papers: [{ name: "Beyond Monolithic Culture: Evaluating Understandability of Online Text Across Cultural Dimensions", url: "https://aclanthology.org/2026.c3nlp-1.16/" }] },
                    { date: "Dec 2025", title: "✈️ Attending and presenting at IJCNLP-AACL 2025 in Mumbai, India", papers: null },
                    { date: "Oct 2025", title: "📄 Paper accepted at IJCNLP-AACL 2025:", papers: [{ name: "To Generate or Discriminate? Methodological Considerations for Measuring Cultural Alignment in LLMs", url: "https://aclanthology.org/2025.findings-ijcnlp.95/" }] },
                    { date: "Oct 2025", title: "🚀 Joined Microsoft as a Senior Applied Scientist", papers: null },
                    { date: "Jul 2025", title: "📄 Paper accepted at Social Sim Workshop (Co-located with COLM 2025):", papers: [{ name: "All Norms and No Nuance Make LLMs Dull Cultural Simulators", url: "https://openreview.net/pdf?id=8YNId9UgaA" }] },
                    { date: "May 2025", title: "🏆 Received SAC Theme Award for Meta-Cultural Competence paper at NAACL 2025", papers: null },
                    { date: "Apr 2025", title: "✈️ Attending and presenting our works at NAACL 2025 in Albuquerque, USA", papers: null },
                    { date: "Feb 2025", title: "📄 3 papers accepted at NAACL 2025:", papers: [
                      { name: "SMAB: MAB based word Sensitivity Estimation Framework", url: "https://aclanthology.org/2025.naacl-long.463/" },
                      { name: "Reading between the Lines: Can LLMs Identify Cross-Cultural Communication Gaps?", url: "https://aclanthology.org/2025.naacl-long.409/" },
                      { name: "Meta-Cultural Competence: Climbing the Right Hill of Cultural Awareness", url: "https://aclanthology.org/2025.naacl-long.408/" }
                    ]},
                    { date: "Jan 2025", title: "✈️ Attending and presenting COLING demo paper in Abu Dhabi, UAE", papers: null },
                    { date: "Nov 2024", title: "📄 COLING demo paper accepted:", papers: [{ name: "CULTURALLY YOURS: A Reading Assistant for Cross-Cultural Content", url: "https://aclanthology.org/2025.coling-demos.21/" }] },
                    { date: "Jul 2024", title: "🚀 Excited to be joining MBZUAI as a Research Associate with ", titleLink: { text: "Prof. Monojit Choudhury", url: "https://mbzuai.ac.ae/study/faculty/monojit-choudhury/" }, papers: null },
                    { date: "Feb 2024", title: "📄 Paper accepted at LREC-COLING 2024:", papers: [{ name: "Evaluating ChatGPT against Functionality Tests for Hate Speech Detection", url: "https://aclanthology.org/2024.lrec-main.564/" }] },
                    { date: "Jan 2024", title: "📄 Paper accepted at EACL 2024:", papers: [{ name: "Low-Resource Counterspeech Generation for Indic Languages", url: "https://aclanthology.org/2024.findings-eacl.111/" }] },
                    { date: "Dec 2023", title: "✈️ Attending EMNLP 2023 in Singapore (my first conference attendance)", papers: null },
                    { date: "Oct 2023", title: "📄 Paper accepted at EMNLP 2023:", papers: [{ name: "CONTRASTE: Supervised Contrastive Pre-training for Aspect Sentiment Triplet Extraction", url: "https://aclanthology.org/2023.findings-emnlp.807/" }] },
                    { date: "Mar 2023", title: "📄 Our work on fear speech published in PNAS:", papers: [{ name: "On the rise of fear speech in online social media", url: "https://www.pnas.org/doi/abs/10.1073/pnas.2212270120" }] },
                    { date: "Dec 2022", title: "🎓 Attending Graduation Ceremony at IIT Kharagpur", papers: null },
                    { date: "Jun 2022", title: "🚀 Joined V-Labs as Associate Research Staff Member", papers: null },
                    { date: "May 2022", title: "🎓 Graduated from IIT Kharagpur with Specialization in AI & Applications", papers: null },
                  ].map((news, idx, arr) => (
                    <div 
                      key={idx} 
                      className={`flex items-start gap-4 px-4 py-4 hover:bg-accent/10 transition-all cursor-default ${
                        idx !== arr.length - 1 ? 'border-b border-border/50' : ''
                      }`}
                    >
                      <span className="text-xs font-semibold text-accent whitespace-nowrap min-w-[70px] pt-0.5">{news.date}</span>
                      <div className="text-sm text-foreground leading-relaxed">
                        {renderNewsTitle(news.title)}
                        {news.titleLink && (
                          <a 
                            href={news.titleLink.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-accent hover:underline font-medium"
                          >
                            {news.titleLink.text}
                          </a>
                        )}
                        {news.papers && news.papers.length === 1 && (
                          <>
                            {" "}
                            {news.papers[0].url ? (
                              <a 
                                href={news.papers[0].url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-accent hover:underline font-semibold"
                              >
                                {news.papers[0].name}
                              </a>
                            ) : (
                              <span className="font-semibold">{news.papers[0].name}</span>
                            )}
                          </>
                        )}
                        {news.papers && news.papers.length > 1 && (
                          <ul className="mt-2 space-y-1">
                            {news.papers.map((paper, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2">
                                <span className="text-accent">•</span>
                                {paper.url ? (
                                  <a 
                                    href={paper.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-accent hover:underline font-semibold"
                                  >
                                    {paper.name}
                                  </a>
                                ) : (
                                  <span className="font-semibold">{paper.name}</span>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Fade gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-card/80 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
