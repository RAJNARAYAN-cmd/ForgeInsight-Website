import { useEffect, useState } from "react"

const TECH_CATEGORIES = [
  {
    name: "AI & Machine Learning",
    short: "AI & ML",
    items: [
      {
        name: "RAG",
        label: "Retrieval-Augmented Generation",
        description:
          "Grounds model answers in your own documents, so responses stay current and traceable.",
        tags: ["Embeddings", "Vector search"],
      },
      {
        name: "LLMs",
        label: "Large language models",
        description:
          "The reasoning and writing engine behind chat, summaries and content generation.",
        tags: ["Prompting", "Fine-tuning"],
      },
      {
        name: "AI Agents",
        label: "Autonomous task agents",
        description:
          "Models that plan, call tools and finish multi-step work without hand-holding.",
        tags: ["Tool use", "Planning"],
      },
      {
        name: "Computer Vision",
        label: "Image and video understanding",
        description:
          "Detects, classifies and describes what is inside images and video frames.",
        tags: ["Detection", "Segmentation"],
      },
      {
        name: "Machine Learning",
        label: "Predictive models",
        description:
          "Classic training pipelines for forecasting, scoring and recommendation.",
        tags: ["Training", "Evaluation"],
      },
      {
        name: "LangChain",
        label: "Orchestration framework",
        description:
          "Chains prompts, retrievers and tools into production-ready AI workflows.",
        tags: ["Chains", "Memory"],
      },
    ],
  },
  {
    name: "Data Infrastructure",
    short: "Data",
    items: [
      {
        name: "PostgreSQL",
        label: "Relational database",
        description:
          "The primary store for structured, transactional application data.",
        tags: ["SQL", "Indexes"],
      },
      {
        name: "Redis",
        label: "In-memory cache",
        description:
          "Keeps hot data and queues close to the app for instant reads.",
        tags: ["Caching", "Queues"],
      },
      {
        name: "Vector DB",
        label: "Embedding storage",
        description:
          "Stores embeddings for fast similarity search across documents.",
        tags: ["Pinecone", "pgvector"],
      },
      {
        name: "ETL",
        label: "Data pipelines",
        description:
          "Moves raw data in, cleans it, and delivers it ready for analysis.",
        tags: ["Ingest", "Transform"],
      },
      {
        name: "Kafka",
        label: "Event streaming",
        description: "Streams events between services in real time.",
        tags: ["Topics", "Consumers"],
      },
      {
        name: "Warehouse",
        label: "Analytics storage",
        description: "A single place to query history and report on it.",
        tags: ["BigQuery", "Reporting"],
      },
    ],
  },
  {
    name: "Cloud & DevOps",
    short: "Cloud",
    items: [
      {
        name: "AWS",
        label: "Cloud platform",
        description:
          "Hosts compute, storage and managed services behind the product.",
        tags: ["EC2", "S3"],
      },
      {
        name: "Docker",
        label: "Containers",
        description: "Packages every service so it runs the same everywhere.",
        tags: ["Images", "Compose"],
      },
      {
        name: "Kubernetes",
        label: "Orchestration",
        description:
          "Schedules, scales and heals containers across the cluster.",
        tags: ["Scaling", "Rollouts"],
      },
      {
        name: "CI/CD",
        label: "Automated delivery",
        description:
          "Tests and ships each change automatically after it merges.",
        tags: ["Actions", "Previews"],
      },
      {
        name: "Terraform",
        label: "Infrastructure as code",
        description: "Defines cloud resources in version-controlled files.",
        tags: ["Modules", "State"],
      },
      {
        name: "Monitoring",
        label: "Observability",
        description:
          "Logs, metrics and alerts that show problems before users do.",
        tags: ["Metrics", "Alerts"],
      },
    ],
  },
] as const

const TOTAL_TECHNOLOGIES = TECH_CATEGORIES.reduce(
  (total, category) => total + category.items.length,
  0,
)
const AUTO_ADVANCE_MS = 5000

function ArrowIcon({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className={
        direction === "previous"
          ? "forge-tech-stack__arrow--previous"
          : undefined
      }
    >
      <path d="M3.75 14.25 14.25 3.75M7 3.75h7.25V11" />
    </svg>
  )
}

function TechStack() {
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [technologyIndex, setTechnologyIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const category = TECH_CATEGORIES[categoryIndex]
  const technology = category.items[technologyIndex]
  const globalIndex = categoryIndex * category.items.length + technologyIndex

  const selectTechnology = (nextCategory: number, nextTechnology: number) => {
    setCategoryIndex(nextCategory)
    setTechnologyIndex(nextTechnology)
  }

  const move = (direction: 1 | -1) => {
    const nextGlobalIndex =
      (globalIndex + direction + TOTAL_TECHNOLOGIES) % TOTAL_TECHNOLOGIES
    selectTechnology(Math.floor(nextGlobalIndex / 6), nextGlobalIndex % 6)
  }

  useEffect(() => {
    if (isPaused) return
    const timer = window.setInterval(() => move(1), AUTO_ADVANCE_MS)
    return () => window.clearInterval(timer)
  }, [globalIndex, isPaused])

  return (
    <section
      className="forge-tech-stack section-boundary atmosphere-tech"
      aria-labelledby="forge-tech-stack-heading"
    >
      <div className="forge-tech-stack__inner">
        <header className="forge-tech-stack__header">
          <span className="forge-tech-stack__eyebrow">
            Engineering Foundation
          </span>
          <h2
            id="forge-tech-stack-heading"
            className="forge-tech-stack__heading"
          >
            Tech <em>Stack</em>
          </h2>
        </header>

        <div
          className="forge-tech-stack__tabs"
          role="tablist"
          aria-label="Technology categories"
        >
          {TECH_CATEGORIES.map((item, index) => (
            <button
              key={item.name}
              id={`forge-tech-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={categoryIndex === index}
              aria-controls="forge-tech-panel"
              onClick={() => selectTechnology(index, 0)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="forge-tech-stack__stage">
          <div className="forge-tech-stack__ambient" aria-hidden="true" />

          <button
            type="button"
            className="forge-tech-stack__nav forge-tech-stack__nav--previous"
            onClick={() => move(-1)}
            aria-label="Previous technology"
          >
            <ArrowIcon direction="previous" />
          </button>

          <article
            id="forge-tech-panel"
            className={`forge-tech-stack__card ${
              globalIndex % 2 === 0 ? "is-ember" : "is-orange"
            }`}
            role="tabpanel"
            aria-labelledby={`forge-tech-tab-${categoryIndex}`}
            aria-live="polite"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget))
                setIsPaused(false)
            }}
          >
            <div className="forge-tech-stack__card-glow" aria-hidden="true" />
            <div className="forge-tech-stack__card-top">
              <span className="forge-tech-stack__signal" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="forge-tech-stack__category-short">
                {category.short}
              </span>
              <span className="forge-tech-stack__category-pill">
                {category.name}
              </span>
            </div>

            <div
              key={`${categoryIndex}-${technologyIndex}`}
              className="forge-tech-stack__content"
            >
              <span className="forge-tech-stack__index">
                {String(globalIndex + 1).padStart(2, "0")} —{" "}
                {String(TOTAL_TECHNOLOGIES).padStart(2, "0")}
              </span>
              <h3 className="forge-tech-stack__technology">
                {technology.name}
              </h3>
              <p className="forge-tech-stack__technology-label">
                {technology.label}
              </p>
              <p className="forge-tech-stack__description">
                {technology.description}
              </p>
            </div>

            <div
              className="forge-tech-stack__tags"
              aria-label="Supporting technologies"
            >
              {technology.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div
              className="forge-tech-stack__indicators"
              aria-label={`${category.name} technologies`}
            >
              {category.items.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show ${item.name}`}
                  aria-current={technologyIndex === index ? "true" : undefined}
                  onClick={() => selectTechnology(categoryIndex, index)}
                />
              ))}
            </div>
          </article>

          <button
            type="button"
            className="forge-tech-stack__nav forge-tech-stack__nav--next"
            onClick={() => move(1)}
            aria-label="Next technology"
          >
            <ArrowIcon direction="next" />
          </button>
        </div>

        <div className="forge-tech-stack__mobile-controls">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous technology"
          >
            <ArrowIcon direction="previous" />
          </button>
          <span>
            {String(globalIndex + 1).padStart(2, "0")} /{" "}
            {String(TOTAL_TECHNOLOGIES).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next technology"
          >
            <ArrowIcon direction="next" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TechStack
