/**
 * Publications Page - Researcher Portfolio
 * Design: Modern Research Lab aesthetic
 * Displays academic publications with links to papers, code, and citations
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, FileText, Quote, Presentation, Image, Filter, Award, BookOpen, Mail, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Publications() {
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [selectedDomain, setSelectedDomain] = useState<string>("All");
  const [selectedConference, setSelectedConference] = useState<string>("All");

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const publications = [
    // 2026
    {
      id: "pub2026-fbhm",
      title: "FBHM: Functional Benchmarking and Steering of VLMs for Hateful Meme Detection",
      authors: "Paramananda Bhaskar, Naquee Rizwan, Daksh Jogchand, Saurabh Kumar Pandey, Animesh Mukherjee",
      venue: "Conference on Empirical Methods in Natural Language Processing (EMNLP 2026)",
      venueUrl: "https://2026.emnlp.org/",
      date: "2026",
      year: "2026",
      domain: "Content Moderation",
      conference: "EMNLP",
      paperUrl: "https://arxiv.org/pdf/2605.31349",
      codeUrl: "#",
      arxivUrl: "https://arxiv.org/abs/2605.31349",
      posterUrl: "#",
      slidesUrl: "#",
      citationUrl: "https://arxiv.org/abs/2605.31349",
      citation: `@article{bhaskar-etal-2026-fbhm,
    title = "{FBHM}: Functional Benchmarking and Steering of {VLM}s for Hateful Meme Detection",
    author = "Bhaskar, Paramananda and Rizwan, Naquee and Jogchand, Daksh and Pandey, Saurabh Kumar and Mukherjee, Animesh",
    journal = "arXiv preprint arXiv:2605.31349",
    year = "2026"
}`
    },
    {
      id: "pub2026-meta-cultural-spectral",
      title: "Measuring Meta-Cultural Competency: A Spectral Framework for LLM Knowledge Structures",
      authors: "Sougata Saha, Madhur Jindal, Saurabh Kumar Pandey, Mahardika Krisna Ihsani, Alham Fikri Aji, Monojit Choudhury",
      venue: "International Conference on Machine Learning (ICML 2026)",
      venueUrl: "https://icml.cc/Conferences/2026",
      date: "2026",
      year: "2026",
      domain: "Culture & LLMs",
      conference: "ICML",
      paperUrl: "https://openreview.net/pdf?id=3UHHW9Gzi7",
      codeUrl: "#",
      arxivUrl: "#",
      posterUrl: "#",
      slidesUrl: "#",
      citationUrl: "https://openreview.net/forum?id=3UHHW9Gzi7",
      citation: `@inproceedings{saha-etal-2026-measuring,
    title = "Measuring Meta-Cultural Competency: A Spectral Framework for {LLM} Knowledge Structures",
    author = "Saha, Sougata and Jindal, Madhur and Pandey, Saurabh Kumar and Ihsani, Mahardika Krisna and Aji, Alham Fikri and Choudhury, Monojit",
    booktitle = "Proceedings of the 43rd International Conference on Machine Learning",
    year = "2026"
}`
    },
    {
      id: "pub2026-c3nlp-16",
      title: "Beyond Monolithic Culture: Evaluating Understandability of Online Text Across Cultural Dimensions",
      authors: "Saurabh Kumar Pandey, Harshit Gupta, Sougata Saha, Monojit Choudhury",
      venue: "Workshop on Cross-Cultural Considerations in NLP (C3NLP at ACL 2026)",
      venueUrl: "https://aclanthology.org/volumes/2026.c3nlp-1/",
      date: "2026",
      year: "2026",
      domain: "Culture & LLMs",
      conference: "Workshops",
      award: "Outstanding Paper Award",
      paperUrl: "https://aclanthology.org/2026.c3nlp-1.16/",
      codeUrl: "#",
      arxivUrl: "#",
      posterUrl: "#",
      slidesUrl: "#",
      citation: `@inproceedings{pandey-etal-2026-beyond,
    title = "Beyond Monolithic Culture: Evaluating Understandability of Online Text Across Cultural Dimensions",
    author = "Pandey, Saurabh Kumar and Gupta, Harshit and Saha, Sougata and Choudhury, Monojit",
    booktitle = "Proceedings of the 4th Workshop on Cross-Cultural Considerations in NLP (C3NLP 2026)",
    year = "2026"
}`
    },
    // 2025
    {
      id: "pub001",
      title: "To Generate or Discriminate? Methodological Considerations for Measuring Cultural Alignment in LLMs",
      authors: "Saurabh Kumar Pandey, Sougata Saha, Monojit Choudhury",
      venue: "International Joint Conference on Natural Language Processing and Conference of the Asia-Pacific Chapter of the Association for Computational Linguistics (IJCNLP-AACL 2025)",
      venueUrl: "https://2025.aaclnet.org/",
      date: "2025",
      year: "2025",
      domain: "Culture & LLMs",
      conference: "IJCNLP-AACL",
      paperUrl: "https://aclanthology.org/2025.findings-ijcnlp.95/",
      codeUrl: "#",
      arxivUrl: "#",
      posterUrl: "#",
      slidesUrl: "#",
      citation: `@inproceedings{pandey-etal-2025-generate,
    title = "To Generate or Discriminate? Methodological Considerations for Measuring Cultural Alignment in {LLM}s",
    author = "Pandey, Saurabh Kumar and Saha, Sougata and Choudhury, Monojit",
    booktitle = "Findings of the Association for Computational Linguistics: IJCNLP-AACL 2025",
    year = "2025"
}`
    },
    {
      id: "pub002",
      title: "SMAB: MAB based word Sensitivity Estimation Framework and its Applications in Adversarial Text Generation",
      authors: "Saurabh Kumar Pandey, Sachin Vashistha, Debrup Das, Somak Aditya, Monojit Choudhury",
      venue: "Annual Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics (NAACL 2025)",
      venueUrl: "https://2025.naacl.org/",
      date: "2025",
      year: "2025",
      domain: "Interpretability",
      conference: "NAACL",
      paperUrl: "https://aclanthology.org/2025.naacl-long.463/",
      codeUrl: "#",
      arxivUrl: "#",
      posterUrl: "#",
      slidesUrl: "#",
      citation: `@inproceedings{pandey-etal-2025-smab,
    title = "{SMAB}: {MAB} based word Sensitivity Estimation Framework and its Applications in Adversarial Text Generation",
    author = "Pandey, Saurabh Kumar and Vashistha, Sachin and Das, Debrup and Aditya, Somak and Choudhury, Monojit",
    booktitle = "Proceedings of the 2025 Annual Conference of the Nations American Chapter of the ACL",
    year = "2025"
}`
    },
    {
      id: "pub003",
      title: "Reading between the Lines: Can LLMs Identify Cross-Cultural Communication Gaps?",
      authors: "Sougata Saha, Saurabh Kumar Pandey, Harshit Gupta, Monojit Choudhury",
      venue: "Annual Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics (NAACL 2025)",
      venueUrl: "https://2025.naacl.org/",
      date: "2025",
      year: "2025",
      domain: "Culture & LLMs",
      conference: "NAACL",
      paperUrl: "https://aclanthology.org/2025.naacl-long.409/",
      codeUrl: "#",
      arxivUrl: "#",
      posterUrl: "#",
      slidesUrl: "#",
      citation: `@inproceedings{saha-etal-2025-reading,
    title = "Reading between the Lines: Can {LLM}s Identify Cross-Cultural Communication Gaps?",
    author = "Saha, Sougata and Pandey, Saurabh Kumar and Gupta, Harshit and Choudhury, Monojit",
    booktitle = "Proceedings of the 2025 Annual Conference of the Nations American Chapter of the ACL",
    year = "2025"
}`
    },
    {
      id: "pub004",
      title: "Meta-Cultural Competence: Climbing the Right Hill of Cultural Awareness",
      authors: "Sougata Saha, Saurabh Kumar Pandey, Monojit Choudhury",
      venue: "Annual Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics (NAACL 2025)",
      venueUrl: "https://2025.naacl.org/",
      date: "2025",
      year: "2025",
      domain: "Culture & LLMs",
      conference: "NAACL",
      award: "SAC Theme Award",
      paperUrl: "https://aclanthology.org/2025.naacl-long.408/",
      codeUrl: "#",
      arxivUrl: "#",
      posterUrl: "#",
      slidesUrl: "#",
      citation: `@inproceedings{saha-etal-2025-meta,
    title = "Meta-Cultural Competence: Climbing the Right Hill of Cultural Awareness",
    author = "Saha, Sougata and Pandey, Saurabh Kumar and Choudhury, Monojit",
    booktitle = "Proceedings of the 2025 Annual Conference of the Nations American Chapter of the ACL",
    year = "2025"
}`
    },
    {
      id: "pub005",
      title: "CULTURALLY YOURS: A Reading Assistant for Cross-Cultural Content",
      authors: "Saurabh Kumar Pandey, Harshit Budhiraja, Sougata Saha, Monojit Choudhury",
      venue: "International Conference on Computational Linguistics: System Demonstrations (COLING 2025)",
      venueUrl: "https://coling2025.org/",
      date: "2025",
      year: "2025",
      domain: "Culture & LLMs",
      conference: "COLING",
      paperUrl: "https://aclanthology.org/2025.coling-demos.21/",
      codeUrl: "#",
      arxivUrl: "#",
      posterUrl: "#",
      slidesUrl: "#",
      citation: `@inproceedings{pandey-etal-2025-culturally,
    title = "{CULTURALLY} {YOURS}: A Reading Assistant for Cross-Cultural Content",
    author = "Pandey, Saurabh Kumar and Budhiraja, Harshit and Saha, Sougata and Choudhury, Monojit",
    booktitle = "Proceedings of the 31st International Conference on Computational Linguistics: System Demonstrations",
    year = "2025"
}`
    },
    {
      id: "pub006",
      title: "All Norms and No Nuance Make LLMs Dull Cultural Simulators",
      authors: "Saurabh Kumar Pandey, Sougata Saha, Monojit Choudhury",
      venue: "Workshop on Social Simulation with LLMs",
      venueUrl: "https://sites.google.com/view/social-sims-with-llms/social-sim25?authuser=0",
      date: "2025",
      year: "2025",
      domain: "Culture & LLMs",
      conference: "Workshops",
      paperUrl: "https://openreview.net/pdf?id=8YNId9UgaA",
      codeUrl: "#",
      arxivUrl: "#",
      posterUrl: "#",
      slidesUrl: "#",
      citationUrl: "https://openreview.net/forum?id=8YNId9UgaA&noteId=su39ZMMYAg",
      citation: `@inproceedings{pandey-etal-2025-norms,
    title = "All Norms and No Nuance Make {LLM}s Dull Cultural Simulators",
    author = "Pandey, Saurabh Kumar and Saha, Sougata and Choudhury, Monojit",
    booktitle = "First Workshop on Social Simulation with LLMs",
    year = "2025"
}`
    },
    // 2024
    {
      id: "pub007",
      title: "Evaluating ChatGPT against Functionality Tests for Hate Speech Detection",
      authors: "Mithun Das, Saurabh Kumar Pandey, Animesh Mukherjee",
      venue: "Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024)",
      venueUrl: "https://lrec-coling-2024.org/",
      date: "2024",
      year: "2024",
      domain: "Content Moderation",
      conference: "COLING",
      paperUrl: "https://aclanthology.org/2024.lrec-main.564/",
      codeUrl: "#",
      arxivUrl: "#",
      posterUrl: "#",
      slidesUrl: "#",
      citation: `@inproceedings{das-etal-2024-evaluating,
    title = "Evaluating {C}hat{GPT}{\\textquotesingle}s Performance for Multilingual and Emoji-based Hate Speech Detection",
    author = "Das, Mithun and Pandey, Saurabh Kumar and Mukherjee, Animesh",
    booktitle = "Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation",
    year = "2024"
}`
    },
    {
      id: "pub008",
      title: "Low-Resource Counterspeech Generation for Indic Languages: The Case of Bengali and Hindi",
      authors: "Mithun Das, Saurabh Kumar Pandey, Somnath Sethi, Punyajoy Saha, Animesh Mukherjee",
      venue: "Conference of the European Chapter of the Association for Computational Linguistics (EACL 2024)",
      venueUrl: "https://2024.eacl.org/",
      date: "2024",
      year: "2024",
      domain: "Content Moderation",
      conference: "EACL",
      paperUrl: "https://aclanthology.org/2024.findings-eacl.111/",
      codeUrl: "#",
      arxivUrl: "#",
      posterUrl: "#",
      slidesUrl: "#",
      citation: `@inproceedings{das-etal-2024-low,
    title = "Low-Resource Counterspeech Generation for {I}ndic Languages: The Case of {B}engali and {H}indi",
    author = "Das, Mithun and Pandey, Saurabh Kumar and Sethi, Somnath and Saha, Punyajoy and Mukherjee, Animesh",
    booktitle = "Proceedings of the 18th Conference of the European Chapter of the ACL",
    year = "2024"
}`
    },
    // 2023
    {
      id: "pub009",
      title: "CONTRASTE: Supervised Contrastive Pre-training With Aspect-based Prompts For Aspect Sentiment Triplet Extraction",
      authors: "Rajdeep Mukherjee, Nithish Kannen, Saurabh Kumar Pandey, Pawan Goyal",
      venue: "Conference on Empirical Methods in Natural Language Processing (EMNLP 2023)",
      venueUrl: "https://2023.emnlp.org/",
      date: "2023",
      year: "2023",
      domain: "Sentiment Analysis",
      conference: "EMNLP",
      paperUrl: "https://aclanthology.org/2023.findings-emnlp.807/",
      codeUrl: "#",
      arxivUrl: "#",
      posterUrl: "#",
      slidesUrl: "#",
      citation: `@inproceedings{mukherjee-etal-2023-contraste,
    title = "{CONTRASTE}: Supervised Contrastive Pre-training With Aspect-based Prompts For Aspect Sentiment Triplet Extraction",
    author = "Mukherjee, Rajdeep and Kannen, Nithish and Pandey, Saurabh Kumar and Goyal, Pawan",
    booktitle = "Findings of the Association for Computational Linguistics: EMNLP 2023",
    year = "2023"
}`
    },
    {
      id: "pub010",
      title: "On the rise of fear speech in online social media",
      authors: "Punyajoy Saha, Kiran Garimella, Narla Komal Kalyan, Saurabh Kumar Pandey, Paras Meher, Binny Mathew, Animesh Mukherjee",
      venue: "Proceedings of the National Academy of Sciences (PNAS)",
      venueUrl: "https://www.pnas.org/",
      date: "2023",
      year: "2023",
      domain: "Content Moderation",
      conference: "PNAS",
      paperUrl: "https://www.pnas.org/doi/abs/10.1073/pnas.2212270120",
      codeUrl: "#",
      arxivUrl: "#",
      posterUrl: "#",
      slidesUrl: "#",
      citation: `@article{saha2023rise,
    title = "On the rise of fear speech in online social media",
    author = "Saha, Punyajoy and Garimella, Kiran and Kalyan, Narla Komal and Pandey, Saurabh Kumar and Meher, Paras and Mathew, Binny and Mukherjee, Animesh",
    journal = "Proceedings of the National Academy of Sciences",
    volume = "120",
    number = "11",
    year = "2023"
}`
    }
  ];

  // Get unique values for filters
  const years = ["All", ...Array.from(new Set(publications.map(p => p.year))).sort().reverse()];
  const domains = ["All", ...Array.from(new Set(publications.map(p => p.domain))).sort()];
  const conferences = ["All", ...Array.from(new Set(publications.map(p => p.conference))).sort()];

  // Filter publications
  const filteredPublications = publications.filter(pub => {
    const yearMatch = selectedYear === "All" || pub.year === selectedYear;
    const domainMatch = selectedDomain === "All" || pub.domain === selectedDomain;
    const conferenceMatch = selectedConference === "All" || pub.conference === selectedConference;
    return yearMatch && domainMatch && conferenceMatch;
  });
  const filteredYears = Array.from(new Set(filteredPublications.map(pub => pub.year)))
    .sort((firstYear, secondYear) => Number(secondYear) - Number(firstYear));

  // Get available options based on current filters (cascading filters)
  const getAvailableYears = () => {
    const filtered = publications.filter(pub => {
      const domainMatch = selectedDomain === "All" || pub.domain === selectedDomain;
      const conferenceMatch = selectedConference === "All" || pub.conference === selectedConference;
      return domainMatch && conferenceMatch;
    });
    return new Set(filtered.map(p => p.year));
  };

  const getAvailableDomains = () => {
    const filtered = publications.filter(pub => {
      const yearMatch = selectedYear === "All" || pub.year === selectedYear;
      const conferenceMatch = selectedConference === "All" || pub.conference === selectedConference;
      return yearMatch && conferenceMatch;
    });
    return new Set(filtered.map(p => p.domain));
  };

  const getAvailableConferences = () => {
    const filtered = publications.filter(pub => {
      const yearMatch = selectedYear === "All" || pub.year === selectedYear;
      const domainMatch = selectedDomain === "All" || pub.domain === selectedDomain;
      return yearMatch && domainMatch;
    });
    return new Set(filtered.map(p => p.conference));
  };

  const availableYears = getAvailableYears();
  const availableDomains = getAvailableDomains();
  const availableConferences = getAvailableConferences();
  const distinctCollaborators = new Set(
    publications
      .flatMap(publication => publication.authors.split(", "))
      .filter(author => author !== "Saurabh Kumar Pandey")
  ).size;
  const publicationStats = [
    { value: publications.length, label: "Peer-reviewed Papers" },
    { value: "190+", label: "Citations" },
    { value: new Set(publications.map(publication => publication.conference)).size, label: "Venues" },
    { value: new Set(publications.map(publication => publication.domain)).size, label: "Research Areas" },
    { value: publications.filter(publication => "award" in publication && publication.award).length, label: "Awards" },
    { value: `${Math.floor(distinctCollaborators / 10) * 10}+`, label: "Collaborators" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container py-4 flex items-center justify-end">
          <div className="flex flex-wrap items-center justify-end gap-4 sm:gap-6">
            <Link href="/" className="text-sm hover:text-accent transition-colors">Home</Link>
            <Link href="/publications" className="text-sm font-semibold text-accent">Publications</Link>
            <Link href="/blogs" className="text-sm hover:text-accent transition-colors">Blogs</Link>
            <Link href="/travel" className="text-sm hover:text-accent transition-colors">Travel</Link>
            <Link href="/cv" className="text-sm hover:text-accent transition-colors">CV</Link>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container py-8 sm:py-12">
        <div>
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <h1 className="text-4xl sm:text-5xl font-bold">Publications</h1>
              
              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {/* Clear filters - desktop only (left side) */}
                {(selectedYear !== "All" || selectedDomain !== "All" || selectedConference !== "All") && (
                  <button 
                    onClick={() => {
                      setSelectedYear("All");
                      setSelectedDomain("All");
                      setSelectedConference("All");
                    }}
                    className="hidden sm:block px-3 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    Clear
                  </button>
                )}
                <select 
                  value={selectedYear} 
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className={`px-3 py-2 text-sm rounded-lg border transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                    selectedYear !== "All" 
                      ? "bg-accent text-white border-accent font-medium" 
                      : "bg-background border-border text-foreground hover:border-accent/50"
                  }`}
                >
                  {years.map(year => {
                    const isDisabled = year !== "All" && !availableYears.has(year);
                    return (
                      <option 
                        key={year} 
                        value={year}
                        disabled={isDisabled}
                        style={{ backgroundColor: 'white', color: isDisabled ? '#999' : '#000' }}
                      >
                        {year === "All" ? "Year" : year}
                      </option>
                    );
                  })}
                </select>
                <select 
                  value={selectedDomain} 
                  onChange={(e) => setSelectedDomain(e.target.value)}
                  className={`px-3 py-2 text-sm rounded-lg border transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                    selectedDomain !== "All" 
                      ? "bg-accent text-white border-accent font-medium" 
                      : "bg-background border-border text-foreground hover:border-accent/50"
                  }`}
                >
                  {domains.map(domain => {
                    const isDisabled = domain !== "All" && !availableDomains.has(domain);
                    return (
                      <option 
                        key={domain} 
                        value={domain}
                        disabled={isDisabled}
                        style={{ backgroundColor: 'white', color: isDisabled ? '#999' : '#000' }}
                      >
                        {domain === "All" ? "Domain" : domain}
                      </option>
                    );
                  })}
                </select>
                {/* Venue + Clear (mobile only) grouped together */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <select 
                    value={selectedConference} 
                    onChange={(e) => setSelectedConference(e.target.value)}
                    className={`px-3 py-2 text-sm rounded-lg border transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                      selectedConference !== "All" 
                        ? "bg-accent text-white border-accent font-medium" 
                        : "bg-background border-border text-foreground hover:border-accent/50"
                    }`}
                  >
                    {conferences.map(conf => {
                      const isDisabled = conf !== "All" && !availableConferences.has(conf);
                      return (
                        <option 
                          key={conf} 
                          value={conf}
                          disabled={isDisabled}
                          style={{ backgroundColor: 'white', color: isDisabled ? '#999' : '#000' }}
                        >
                          {conf === "All" ? "Venue" : conf}
                        </option>
                      );
                    })}
                  </select>
                  {/* Clear filters - mobile only (right of Venue) */}
                  {(selectedYear !== "All" || selectedDomain !== "All" || selectedConference !== "All") && (
                    <button 
                      onClick={() => {
                        setSelectedYear("All");
                        setSelectedDomain("All");
                        setSelectedConference("All");
                      }}
                      className="sm:hidden px-3 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-6 mt-7 border-y border-foreground/25">
              {publicationStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`py-4 text-center ${index % 2 !== 0 ? "border-l border-foreground/25" : ""} ${index > 1 ? "border-t border-foreground/25 sm:border-t-0" : ""} ${index > 0 ? "sm:border-l sm:border-foreground/25" : ""}`}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            {(selectedYear !== "All" || selectedDomain !== "All" || selectedConference !== "All") && (
              <p className="mt-4 text-sm text-muted-foreground">
                {filteredPublications.length} result{filteredPublications.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>

          {/* Publications List */}
          <div className="space-y-10">
            {filteredYears.map((year) => (
              <section key={year} aria-labelledby={`publications-${year}`}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="h-px flex-1 bg-border/60" aria-hidden="true" />
                  <h2 id={`publications-${year}`} className="text-2xl sm:text-3xl font-bold text-foreground">
                    {year}
                  </h2>
                  <span className="h-px flex-1 bg-border/60" aria-hidden="true" />
                </div>
                <div className="space-y-4">
                  {filteredPublications.filter(pub => pub.year === year).map((pub) => (
                    <Card key={pub.id} className="p-4 bg-card border border-border hover:border-accent/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground leading-tight">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {pub.authors}
                    </p>
                    <p className="text-sm mt-3">
                      {pub.venueUrl ? (
                        <a href={pub.venueUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">{pub.venue}</a>
                      ) : (
                        <span className="font-semibold">{pub.venue}</span>
                      )}
                    </p>
                    {pub.award && (
                      <div className="flex items-center gap-1.5 mt-2">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">{pub.award}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:flex-shrink-0">
                    {pub.paperUrl && pub.paperUrl !== "#" && (
                      <a href={pub.paperUrl} target="_blank" rel="noopener noreferrer">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-accent border-accent/30 hover:bg-accent/10"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Paper
                        </Button>
                      </a>
                    )}
                    {pub.citation && (pub.citationUrl || (pub.paperUrl && pub.paperUrl !== "#")) && (
                      <a href={pub.citationUrl || pub.paperUrl} target="_blank" rel="noopener noreferrer">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-accent border-accent/30 hover:bg-accent/10"
                        >
                          <Quote className="w-4 h-4 mr-2" />
                          Cite
                        </Button>
                      </a>
                    )}
                    {pub.codeUrl && pub.codeUrl !== "#" && (
                      <a href={pub.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-accent border-accent/30 hover:bg-accent/10"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
                    </Card>
                  ))}
                </div>
              </section>
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
