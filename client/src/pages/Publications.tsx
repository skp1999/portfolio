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

const publicationAbstracts: Record<string, string> = {
  "pub2026-fbhm": "Hateful meme detection remains a formidable challenge for vision-language models, as existing benchmarks are structurally observational - confounding rhetorical hate mechanisms with target community features and preventing causal evaluation of model vulnerabilities. To address this, we introduce FBHM, a systematically curated benchmark of Functionality Based Hateful Memes constructed along two orthogonal axes: 25 distinct rhetorical functionalities and 10 target communities (5,000 memes total). Benchmarking state-of-the-art VLMs reveals a severe generalization gap: models highly accurate on standard datasets catastrophically drop to near-random performance on FBHM, proving they exploit dataset-specific heuristics rather than robust multimodal reasoning. To efficiently close this gap, we propose LSV (learnable steering vectors), an ultra-low data regime strategy that applies a causal intervention objective on as few as 500 steering samples (50 unique base memes), boosting FBHM performance by ~30 Macro-F1 points while outperforming in-context learning and PEFT without degrading source-domain performance.",
  "pub2026-meta-cultural-spectral": "Most existing cultural evaluation frameworks for large language models (LLMs) focus on matching model outputs to ground-truth answers, primarily measuring factual cultural awareness. This overlooks whether models internalize broader cultural structure and pluralism. We introduce a spectral analysis-based framework that captures large-scale macrostructural patterns in models’ cultural knowledge and evaluate eight LLMs across nine cultural domains spanning all five of Newmark’s cultural dimensions and 170 countries. Comparing with human data, we find that instruction-tuned models align more closely with human cultural structure than older models, while increased model size does not consistently improve performance. Finally, simulation-based experiments show that our proposed spectral metric better predicts a model’s ability to serve users from unfamiliar cultural backgrounds than existing ones.",
  "pub2026-c3nlp-16": "Culture shapes how people interpret language, especially in online reviews containing culture-specific items (CSIs). Yet, most existing evaluations treat culture as a monolithic construct, offering no insight into which cultural dimensions pose difficulty for readers, or how large language models (LLMs), which power AI reading assistants, perform across them. This gap limits our ability to obtain reliable, cross-cultural estimates of model performance. To address this, we analyze CSIs in English Goodreads reviews across Newmark’s cultural dimensions (e.g., material, ecology, customs, habits, social) and evaluate six LLMs of varying sizes on their ability to identify CSIs within each dimension. We find that readers struggle most with CSIs from the material, customs, and social dimensions, while models underperform on more localized ones (e.g., habits), revealing systematic cultural blind spots. To support further research on culturally representative benchmarking, we release an expert-annotated dataset of CSIs labeled by cultural dimension. Empirical analysis shows our dataset as more challenging and of higher quality than existing cultural benchmarks, enabling finer-grained evaluation of cultural understanding in models.",
  "pub001": "Socio-demographic prompting (SDP) - prompting Large Language Models (LLMs) using demographic proxies to generate culturally aligned outputs - often shows LLM responses as stereotypical and biased. While effective in assessing LLMs’ cultural competency, SDP is prone to confounding factors such as prompt sensitivity, decoding parameters, and the inherent difficulty of generation over discrimination tasks due to larger output spaces. These factors complicate interpretation, making it difficult to determine if the poor performance is due to bias or the task design. To address this, we use inverse socio-demographic prompting (ISDP), where we prompt LLMs to discriminate and predict the demographic proxy from actual and simulated user behavior from different users. We use the Goodreads-CSI dataset (Saha et al., 2025), which captures difficulty in understanding English book reviews for users from India, Mexico, and the USA, and test four LLMs: Aya-23, Gemma-2, GPT-4o, and LLaMA-3.1 with ISDP. Results show that models perform better with actual behaviors than simulated ones, contrary to what SDP suggests. However, performance with both behavior types diminishes and becomes nearly equal at the individual level, indicating limits to personalization.",
  "pub002": "To understand the complexity of sequence classification tasks, Hahn et al. (2021) proposed sensitivity as the number of disjoint subsets of the input sequence that can each be individually changed to change the output. Though effective, calculating sensitivity at scale using this framework is costly because of exponential time complexity. Therefore, we introduce a Sensitivity-based Multi-Armed Bandit framework (SMAB), which provides a scalable approach for calculating word-level local (sentence-level) and global (aggregated) sensitivities concerning an underlying text classifier for any dataset. We establish the effectiveness of our approach through various applications. We perform a case study on CHECKLIST generated sentiment analysis dataset where we show that our algorithm indeed captures intuitively high and low-sensitive words. Through experiments on multiple tasks and languages, we show that sensitivity can serve as a proxy for accuracy in the absence of gold data. Lastly, we show that guiding perturbation prompts using sensitivity values in adversarial example generation improves attack success rate by 15.58%, whereas using sensitivity as an additional reward in adversarial paraphrase generation gives a 12.00% improvement over SOTA approaches. Warning: Contains potentially offensive content.",
  "pub003": "In a rapidly globalizing and digital world, content such as book and product reviews created by people from diverse cultures are read and consumed by others from different corners of the world. In this paper, we investigate the extent and patterns of gaps in understandability of book reviews due to the presence of culturally-specific items and elements that might be alien to users from another culture. Our user-study on 57 book reviews from Goodreads reveal that 83% of the reviews had at least one culture-specific difficult-to-understand element. We also evaluate the efficacy of GPT-4o in identifying such items, given the cultural background of the reader; the results are mixed, implying a significant scope for improvement. Our datasets are available here: https://github.com/sougata-ub/reading_between_lines.",
  "pub004": "Numerous recent studies have shown that Large Language Models (LLMs) are biased towards a Western and Anglo-centric worldview, which compromises their usefulness in non-Western cultural settings. However, “culture” is a complex, multifaceted topic, and its awareness, representation, and modeling in LLMs and LLM-based applications can be defined and measured in numerous ways. In this position paper, we ask what does it mean for an LLM to possess “cultural awareness”, and through a thought experiment, which is an extension of the Octopus test proposed by Bender and Koller (2020), we argue that it is not cultural awareness or knowledge, rather meta-cultural competence, which is required of an LLM and LLM-based AI system that will make it useful across various, including completely unseen, cultures. We lay out the principles of meta-cultural competence AI systems, and discuss ways to measure and model those.",
  "pub005": "Users from diverse cultural backgrounds frequently face challenges in understanding content from various online sources that are written by people from a different culture. This paper presents CULTURALLY YOURS (CY), a first-of-its-kind cultural reading assistant tool designed to identify culture-specific items (CSIs) for users from varying cultural contexts. By leveraging principles of relevance feedback and using culture as a prior, our tool personalizes to the user’s preferences based on the interaction of the user with the tool. CY can be powered by any LLM that can reason with cultural background of the user and the input text in English, provided as a part of the prompt that are iteratively refined as the user keeps interacting with the system. In this demo, we use GPT-4o as the back-end. We conduct a user study across 13 users from 8 different geographies. The results demonstrate CY’s effectiveness in enhancing user engagement and personalization alongside comprehension of cross-cultural content.",
  "pub006": "Socio-demographic prompting (SDP), which prompts Large Language Models (LLMs) to generate culturally aligned behaviors using demographic proxies, is commonly used to assess cultural biases in LLMs. However, its sensitivity to the prompt raises questions about its reliability in cultural assessment and user behavior simulation. Here, we explore inverse socio-demographic prompting (ISDP), a method that prompts LLMs to predict users' cultural backgrounds based on their behaviors, offering a robust alternative by mapping behaviors to cultural proxies. We evaluate SDP and ISDP across four LLMs - Aya-23, Gemma-2, GPT-4o, and LLama-3.1 - using the Goodreads-CSI dataset (Saha et al., 2025), which captures cross-cultural non-understandability in book reviews from users in India, Mexico, and the USA. Our analysis reveals that ISDP is a much more robust way of assessing LLMs' cultural alignment than SDP. Next, we simulate user behavior and evaluate model performance by aggregating behavior at different levels. We observe that at a group-level, GPT-4o excels in ISDP with actual user behavior and struggles when the behavior is LLM-generated. Furthermore, at the user level, GPT-4o performs best when the behavior is generated by itself or by the actual users. In contrast, at the group level, other models perform better with LLM-generated behavior than with the actual user behavior. We reason that this is likely because LLMs generate stereotypical outputs due to maximum likelihood decoding, which deviates from real-world user behavior, which is more nuanced and less normative - individuals do not exhibit all stereotypes of a culture. These findings have significant implications for simulating user behavior using LLMs and position ISDP as a valuable framework for understanding the limitations of user behavior simulation and studying cultural representation in LLMs.",
  "pub007": "Large language models like ChatGPT have recently shown a great promise in performing several tasks, including hate speech detection. However, it is crucial to comprehend the limitations of these models to build robust hate speech detection systems. To bridge this gap, our study aims to evaluate the strengths and weaknesses of the ChatGPT model in detecting hate speech at a granular level across 11 languages. Our evaluation employs a series of functionality tests that reveals various intricate failures of the model which the aggregate metrics like macro F1 or accuracy are not able to unfold. In addition, we investigate the influence of complex emotions, such as the use of emojis in hate speech, on the performance of the ChatGPT model. Our analysis highlights the shortcomings of the generative models in detecting certain types of hate speech and highlighting the need for further research and improvements in the workings of these models.",
  "pub008": "With the rise of online abuse, the NLP community has begun investigating the use of neural architectures to generate counterspeech that can “counter” the vicious tone of such abusive speech and dilute/ameliorate their rippling effect over the social network. However, most of the efforts so far have been primarily focused on English. To bridge the gap for low-resource languages such as Bengali and Hindi, we create a benchmark dataset of 5,062 abusive speech/counterspeech pairs, of which 2,460 pairs are in Bengali, and 2,602 pairs are in Hindi. We implement several baseline models considering various interlingual transfer mechanisms with different configurations to generate suitable counterspeech to set up an effective benchmark. We observe that the monolingual setup yields the best performance. Further, using synthetic transfer, language models can generate counterspeech to some extent; specifically, we notice that transferability is better when languages belong to the same language family.",
  "pub009": "Existing works on Aspect Sentiment Triplet Extraction (ASTE) explicitly focus on developing more efficient fine-tuning techniques for the task. Instead, our motivation is to come up with a generic approach that can improve the downstream performances of multiple ABSA tasks simultaneously. Towards this, we present CONTRASTE, a novel pre-training strategy using CONTRastive learning to enhance the ASTE performance. While we primarily focus on ASTE, we also demonstrate the advantage of our proposed technique on other ABSA tasks such as ACOS, TASD, and AESC. Given a sentence and its associated (aspect, opinion, sentiment) triplets, first, we design aspect-based prompts with corresponding sentiments masked. We then (pre)train an encoder-decoder model by applying contrastive learning on the decoder-generated aspect-aware sentiment representations of the masked terms. For fine-tuning the model weights thus obtained, we then propose a novel multi-task approach where the base encoder-decoder model is combined with two complementary modules, a tagging-based Opinion Term Detector, and a regression-based Triplet Count Estimator. Exhaustive experiments on four benchmark datasets and a detailed ablation study establish the importance of each of our proposed components as we achieve new state-of-the-art ASTE results.",
  "pub010": "Significance Existential fear has always been a concern across human history and even transcends to the rest of the animal world. This fear is so deeply ingrained that even the slightest “knock” to it could spark a violent conflict among different groups. Here, we demonstrate how social media platforms are used to extensively mediate elements of existential fear as fear speech posts. Their nontoxic and argumentative nature makes them appealing to even benign users who in turn contribute to their wide prevalence by resharing, liking, and replying to them. Remarkably, this prevalence is far stronger than the more well-known hate speech posts. Our work necessitates consolidated moderation efforts and awareness campaigns to mitigate the harmful effects of fear speech.",
};

export default function Publications() {
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [selectedDomain, setSelectedDomain] = useState<string>("All");
  const [selectedConference, setSelectedConference] = useState<string>("All");
  const [expandedAbstracts, setExpandedAbstracts] = useState<Set<string>>(() => new Set());

  const toggleAbstract = (publicationId: string) => {
    setExpandedAbstracts((current) => {
      const next = new Set(current);
      if (next.has(publicationId)) next.delete(publicationId);
      else next.add(publicationId);
      return next;
    });
  };

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
            <Link href="/travel" className="text-sm hover:text-accent transition-colors">Life@OOF</Link>
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
          <div className="space-y-5">
            {filteredYears.map((year) => (
              <section key={year} aria-labelledby={`publications-${year}`}>
                <div className="flex items-center gap-4 mb-3">
                  <span className="h-px flex-1 bg-border/60" aria-hidden="true" />
                  <h2 id={`publications-${year}`} className="text-2xl sm:text-3xl font-bold text-foreground">
                    {year}
                  </h2>
                  <span className="h-px flex-1 bg-border/60" aria-hidden="true" />
                </div>
                <div className="space-y-4">
                  {filteredPublications.filter(pub => pub.year === year).map((pub) => (
                    <Card key={pub.id} className={`relative gap-3 p-4 bg-card border transition-colors ${pub.award ? "pt-6 border-yellow-500/70" : "border-border hover:border-accent/30"}`}>
                {pub.award && (
                  <span className="absolute -top-3 left-4 inline-flex items-center gap-1.5 rounded-full bg-yellow-400 px-2.5 py-1 text-[11px] font-semibold text-yellow-950 shadow-sm ring-1 ring-yellow-500/50">
                    <Award className="h-3.5 w-3.5" aria-hidden="true" />
                    {pub.award}
                  </span>
                )}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-[17px] sm:text-[21px] font-bold mb-2 text-foreground leading-tight">
                      {pub.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {pub.authors}
                    </p>
                    <p className="text-xs mt-3">
                      {pub.venueUrl ? (
                        <a href={pub.venueUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">{pub.venue}</a>
                      ) : (
                        <span className="font-semibold">{pub.venue}</span>
                      )}
                    </p>

                  </div>
                  <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:flex-shrink-0">
                    {pub.paperUrl && pub.paperUrl !== "#" && (
                      <a href={pub.paperUrl} target="_blank" rel="noopener noreferrer">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-xs text-accent border-accent/30 hover:bg-accent/10"
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
                          className="text-xs text-accent border-accent/30 hover:bg-accent/10"
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
                          className="text-xs text-accent border-accent/30 hover:bg-accent/10"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
                <div className="border-t border-border/60 pt-2">
                  <div className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-foreground/80" aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                      <p
                        id={`abstract-${pub.id}`}
                        className={`text-xs leading-relaxed text-foreground/80 ${expandedAbstracts.has(pub.id) ? "" : "line-clamp-1"}`}
                      >
                        {publicationAbstracts[pub.id]}
                      </p>
                      {expandedAbstracts.has(pub.id) && (
                        <button
                          type="button"
                          onClick={() => toggleAbstract(pub.id)}
                          aria-expanded="true"
                          aria-controls={`abstract-${pub.id}`}
                          className="ml-auto mt-1 block text-xs font-medium text-accent hover:underline"
                        >
                          View less
                        </button>
                      )}
                    </div>
                    {!expandedAbstracts.has(pub.id) && (
                      <button
                        type="button"
                        onClick={() => toggleAbstract(pub.id)}
                        aria-expanded="false"
                        aria-controls={`abstract-${pub.id}`}
                        className="shrink-0 self-center text-xs font-medium text-accent hover:underline"
                      >
                        View more
                      </button>
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
