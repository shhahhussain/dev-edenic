"use client"
import { motion } from "framer-motion"
import { Cloud, Server, Code, RefreshCw, TrendingUp } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import ServiceConnectors from "./ServiceConnectors"
import { useRef, useEffect, useState } from "react"

const services = [
  {
    slug: "web-app-development",
    name: "Web App Development",
    description: "Build responsive web app with React and Tailwind CSS.   Smart cross-platform interfaces scale with your venture, accelerating business-development growth!!.",
    icon: Code,
  },
  {
    slug: "api-integration",
    name: "API Integration & Backend",
    description: "Express and MongoDB API streamline data flow.  Integrate third-party svcs  securely with documented endpoints to grow business-development partnerships!!!!.",
    icon: Server,
  },
  {
    slug: "database-design",
    name: "Database Design & Optimization",
    description: "Efficient MongoDB and SQL schemas boost pace. Structured data models keep app more fast and reliable, supporting business-development goals across teams?!!.",
    icon: Code,
  },
  {
    slug: "mvp-development",
    name: "MVP & SaaS Development",
    description: "Rapid MVP cycles deliver dashboards and auth. Launch subscription features and stat fast from day one, advancing business-development for your SaaS model.!!",
    icon: Cloud,
  },
  {
    slug: "full-stack-architecture",
    name: "Full Stack Architecture",
    description: "End-to-end solutions span frontend to deployment. Auto CI/CD pipelines and monitoring deliver reliable releases, powering business-development success!!!!0K",
    icon: RefreshCw,
  },
  {
    slug: "business-development",
    name: "Business Development Consulting",
    description: "Accelerate business-development with strategic consulting. We help tech companies expand market reach and optimize sales for innovative web products!!!!!!A!",
    icon: TrendingUp,
  }
]

export default function Services() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [iconPositions, setIconPositions] = useState<{ x: number; y: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateIconPositions = () => {
      if (!containerRef.current) return;

      const newPositions: { x: number; y: number }[] = [];
      const containerRect = containerRef.current.getBoundingClientRect();

      cardRefs.current.forEach((ref) => {
        if (ref) {
          const iconDiv = ref.querySelector(".service-icon-container");
          if (iconDiv) {
            const iconRect = iconDiv.getBoundingClientRect();
            newPositions.push({
              x: iconRect.left + iconRect.width / 2 - containerRect.left,
              y: iconRect.top + iconRect.height / 2 - containerRect.top,
            });
          }
        }
      });
      setIconPositions(newPositions);
    };

    calculateIconPositions();

    const resizeObserver = new ResizeObserver(() => {
      calculateIconPositions();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <section id="services" className="py-24 bg-background dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-blue-600 dark:text-white mb-4">Solutions & Services</h2>
          </motion.div>

          <div className="relative" ref={containerRef}>
            <ServiceConnectors iconPositions={iconPositions} totalItems={services.length} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800/50"
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 transition-colors duration-300 group-hover:from-blue-600/5 group-hover:to-blue-600/10 dark:group-hover:from-blue-400/5 dark:group-hover:to-blue-400/10" />
                  <div className="relative p-8">
                    <div className="service-icon-container mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-500 dark:bg-gray-700 dark:group-hover:bg-blue-600">
                      <service.icon className="h-8 w-8 text-white transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary dark:text-gray-100 dark:group-hover:text-blue-400">{service.name}</h3>
                    <p className="mb-8 flex-grow text-muted-foreground dark:text-gray-300">{service.description}</p>
                    <Button
                      asChild
                      size="lg"
                      className="w-full rounded-xl transition-colors duration-300 group-hover:shadow-lg"
                    >
                      <Link href={`/services/${service.slug}`} className="flex items-center justify-center gap-2">
                        Explore More
                        <svg
                          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

