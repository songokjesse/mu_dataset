"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TableOfContentsProps {
  className?: string
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const sections = document.querySelectorAll("[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -80% 0px" },
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const items = [
    { id: "overview", title: "Overview", level: 1 },
    { id: "methodology", title: "Data Collection Methodology", level: 2 },
    { id: "fields", title: "Dataset Fields", level: 2 },
    { id: "limitations", title: "Limitations and Biases", level: 2 },
    { id: "citation", title: "Citation Information", level: 2 },
  ]

  return (
    <div className={cn("space-y-2", className)}>
      <p className="font-medium">On This Page</p>
      <ul className="m-0 list-none p-0">
        {items.map((item) => (
          <li key={item.id} className={cn("mt-0 pt-2", item.level === 2 && "pl-4")}>
            <a
              href={`#${item.id}`}
              className={cn(
                "inline-block no-underline transition-colors hover:text-foreground",
                activeSection === item.id ? "font-medium text-foreground" : "text-muted-foreground",
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

