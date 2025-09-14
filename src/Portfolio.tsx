import { useMemo, useState } from "react";
import { Download, Mail, Phone, MapPin, Linkedin } from "lucide-react";
// Option 2: Robust bundler URL (Vite) for the resume file. Place the .docx at src/assets/
const resumeURL = new URL('./Suraj_Sharma_DS_Updated.docx', import.meta.url).href;

const DATA = {
  name: "Suraj Sharma",
  title: "Senior Data Scientist | Generative AI & Data Solutions",
  location: "New Delhi, India",
  phone: "+91 83778 33094",
  email: "suraj.mae27@gmail.com",
  linkedin: "https://www.linkedin.com/in/",
  summary:
    "Senior Data Scientist with 6+ years in Machine Learning, Deep Learning, and Generative AI. Expert in LLMs, prompt engineering, and fine-tuning transformer architectures (GPT, BERT) for NLP, semantic discovery, and enterprise automation. Proven track record in end-to-end ML pipelines, deployments on AWS SageMaker & Azure ML, and delivering data-driven solutions across Healthcare, FMCG, and SaaS.",
  competencies: [
    "Generative AI & LLMs: GPT, BERT, Prompt Engineering, Fine-tuning, Domain Adaptation",
    "Deep Learning & NLP: TensorFlow, PyTorch, Transformer Models, NLP2SQL, NER, Semantic Search, Sentiment Analysis",
    "MLOps & Cloud Deployment: AWS SageMaker, Azure ML, CI/CD Pipelines, Docker, Kubernetes",
    "Data Engineering & Platforms: Medallion Architecture, Databricks, Snowflake, BigQuery, Kafka",
    "Visualisation & BI: Power BI, Executive Dashboards",
    "Stakeholder Engagement: Discovery Workshops, Customer Collaboration, Technical Mentorship",
  ],
  experience: [
    {
      role: "Senior Data Scientist",
      company: "Publicis Sapient",
      period: "Aug 2025 – Present",
      bullets: [
        "Leading GenAI solutions for healthcare clients—clinical NLP, knowledge assistants, and workflow automation.",
        "Designing scalable transformer-based pipelines for patient journey analytics, insights extraction, and personalization.",
        "Partnering with cross-functional teams to embed AI safely in healthcare platforms with privacy and compliance in mind.",
      ],
      tag: "Generative AI, Healthcare",
    },
    {
      role: "Senior Data Scientist",
      company: "DQLabs.ai (Remote)",
      period: "Mar 2025 – Present",
      bullets: [
        "Designed and deployed LLM-powered NLP2SQL solutions using fine-tuned GPT models, reducing handling time by ~60%.",
        "Built a semantic data discovery engine leveraging transformers & advanced prompting to enhance enterprise data accessibility.",
        "Led discovery workshops with enterprise clients to co-create Generative AI strategies aligned to business objectives.",
      ],
      tag: "LLMs, NLP2SQL",
    },
    {
      role: "Engineer – Data Science",
      company: "Pentair Waters",
      period: "Oct 2023 – Mar 2025",
      bullets: [
        "Introduced medallion architecture for resilient, multi-layered data pipelines; delivered scalable ML models to production.",
        "Built a patent-pending computer vision pipeline for geo-image perimeter extraction; explored GenAI for analytics.",
        "Launched AI-driven executive dashboards and NLP automations, cutting enterprise response times by ~40%.",
        "Mentored junior data scientists and scaled best practices across functions.",
      ],
      tag: "MLOps, CV",
    },
    {
      role: "Data Scientist",
      company: "LTIMindtree",
      period: "May 2022 – Oct 2023",
      bullets: [
        "Deployed transformer-based NER for FIU-IND to extract entities from STRs (≈75% accuracy).",
        "Designed risk-scoring frameworks to prioritise high-risk entities in AML workflows.",
        "Built forecasting models to flag anomalous transaction patterns and strengthen compliance monitoring.",
      ],
      tag: "NLP, AML",
    },
    {
      role: "Data Scientist",
      company: "iLink Digital",
      period: "Jul 2019 – May 2022",
      bullets: [
        "Built a conversational-AI telemedicine platform with robust NLP pipelines for tailored patient interactions.",
        "Shipped real-time social sentiment analysis (RNN-based) for brand insights.",
        "Implemented OCR-based enrolment with Tesseract OCR; deployed at scale on Azure/AWS & Kubernetes.",
      ],
      tag: "NLP, OCR",
    },
    {
      role: "Data Analyst",
      company: "NSYUS",
      period: "Jun 2017 – Aug 2018",
      bullets: [
        "Ran A/B tests & behavioural analytics to improve conversion rates (~15%).",
        "Redesigned customer journeys to drive ~20% lift in online sales.",
      ],
      tag: "Analytics",
    },
  ],
  education: [
    "M.Tech in Data Science – BITS Pilani (2023–2025, Completed)",
    "PGP in Data Science – INSOFE Hyderabad (2018–2019)",
    "B.Tech in Mechanical & Automation – GGSIPU Delhi (2013–2017)",
  ],
  certifications: [
    "Microsoft Azure AI Fundamentals (AI-900)",
    "AWS Certified Cloud Practitioner",
  ],
  skills: [
    "Programming: Python, SQL",
    "Libraries: TensorFlow, PyTorch, scikit-learn",
    "Deployment: AWS SageMaker, Azure ML, Docker, Kubernetes, Flask",
    "Data Processing: Hadoop, Spark, H2O.ai",
    "Visualisation: Power BI",
  ],};

function Section({ title, children }: { title: string; children: any }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold tracking-tight mb-4 flex items-center gap-2">
        <span className="h-6 w-1.5 rounded bg-black/80 dark:bg-white/80" />
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function Badge({ children }: { children: any }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium">
      {children}
    </span>
  );
}

export default function Portfolio() {
  const [query, setQuery] = useState("");
  const filteredExp = useMemo(() => {
    if (!query.trim()) return DATA.experience;
    const q = query.toLowerCase();
    return DATA.experience.filter((e) =>
      [e.role, e.company, e.period, e.tag, ...(e.bullets || [])].join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <header className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{DATA.name}</h1>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mt-1">{DATA.title}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {DATA.location}</span>
                <span className="inline-flex items-center gap-1"><Phone className="h-4 w-4" /> {DATA.phone}</span>
                <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${DATA.email}`}><Mail className="h-4 w-4" /> {DATA.email}</a>
                <a className="inline-flex items-center gap-1 hover:underline" href={DATA.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={resumeURL}
                className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold shadow-sm hover:shadow"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
          </div>
        </header>

        <Section title="Professional Summary">
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{DATA.summary}</p>
        </Section>

        <div className="mb-10 rounded-2xl border bg-white/60 dark:bg-zinc-900/60 p-4">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <input
              type="text"
              placeholder="Search roles, skills or achievements (e.g., LLM, AML, Healthcare)"
              className="w-full rounded-xl border px-4 py-2 bg-white/80 dark:bg-zinc-900/80"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="flex flex-wrap gap-2">
              {["LLMs", "NLP2SQL", "AML", "MLOps", "Computer Vision", "Kubernetes"].map((k) => (
                <button
                  key={k}
                  className="rounded-xl border px-3 py-1 text-xs"
                  onClick={() => setQuery(k)}
                >
                  {k}
                </button>
              ))}
              <button className="rounded-xl border px-3 py-1 text-xs" onClick={() => setQuery("")}>Clear</button>
            </div>
          </div>
        </div>

        <Section title="Professional Experience">
          <div className="grid gap-4">
            {filteredExp.map((exp, idx) => (
              <div key={idx} className="rounded-2xl border bg-white/60 dark:bg-zinc-900/60 p-5">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h3 className="text-xl font-semibold">{exp.role} <span className="text-zinc-500">| {exp.company}</span></h3>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">{exp.period}</div>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">{exp.tag && <Badge>{exp.tag}</Badge>}</div>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Core Competencies">
          <div className="grid md:grid-cols-2 gap-3">
            {DATA.competencies.map((c, i) => (
              <div key={i} className="rounded-xl border bg-white/60 dark:bg-zinc-900/60 p-3 text-sm">
                {c}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Technical Skills">
          <div className="grid md:grid-cols-2 gap-3">
            {DATA.skills.map((s, i) => (
              <div key={i} className="rounded-xl border bg-white/60 dark:bg-zinc-900/60 p-3 text-sm">
                {s}
              </div>
            ))}
          </div>
        </Section>

        <div className="grid md:grid-cols-2 gap-8">
          <Section title="Education">
            <ul className="list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
              {DATA.education.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </Section>
          <Section title="Certifications">
            <ul className="list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
              {DATA.certifications.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </Section>
        </div>

        <footer className="mt-16 pb-8 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} {DATA.name}. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
