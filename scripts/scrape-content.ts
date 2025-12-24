import Firecrawl from "@mendable/firecrawl-js";
import * as fs from "fs";
import * as path from "path";

// Initialize Firecrawl
const apiKey = process.env.FIRECRAWL_API_KEY;
if (!apiKey) {
  console.error("Error: FIRECRAWL_API_KEY environment variable is required");
  process.exit(1);
}

const app = new Firecrawl({ apiKey });

// Pages to scrape from At Home Nursing Care
const pagesToScrape = [
  { url: "https://athomenursingcare.com/", name: "homepage" },
  { url: "https://athomenursingcare.com/about/", name: "about" },
  { url: "https://athomenursingcare.com/contact/", name: "contact" },
  { url: "https://athomenursingcare.com/careers/", name: "careers" },
  { url: "https://athomenursingcare.com/services/home-care/", name: "service-home-care" },
  { url: "https://athomenursingcare.com/services/personal-care/", name: "service-personal-care" },
  { url: "https://athomenursingcare.com/services/respite/", name: "service-respite" },
  { url: "https://athomenursingcare.com/services/hospice/", name: "service-hospice" },
  { url: "https://athomenursingcare.com/services/specialty-services/", name: "service-specialty" },
];

// Content replacements for branding
const replacements: [RegExp, string][] = [
  [/At Home Nursing Care/gi, "Medical Service Company"],
  [/AHNC/gi, "MSC"],
  [/athomenursingcare\.com/gi, "medicalservicecompany.com"],
  // Replace phone numbers with placeholder
  [/\(\d{3}\)\s*\d{3}[-.\s]?\d{4}/g, "(619) 555-0100"],
  [/\d{3}[-.\s]\d{3}[-.\s]\d{4}/g, "619-555-0100"],
  // Replace email addresses
  [/[\w.-]+@athomenursingcare\.com/gi, "info@medicalservicecompany.com"],
];

function adaptContent(content: string): string {
  let adapted = content;
  for (const [pattern, replacement] of replacements) {
    adapted = adapted.replace(pattern, replacement);
  }
  return adapted;
}

interface ScrapedPage {
  url: string;
  name: string;
  title: string;
  content: string;
  markdown: string;
  metadata: Record<string, unknown>;
  scrapedAt: string;
}

async function scrapePage(url: string, name: string): Promise<ScrapedPage | null> {
  try {
    console.log(`Scraping: ${url}`);

    const result = await app.scrape(url, {
      formats: ["markdown", "html"],
    });

    const adaptedMarkdown = adaptContent(result.markdown || "");
    const adaptedHtml = adaptContent(result.html || "");

    return {
      url,
      name,
      title: adaptContent((result.metadata?.title as string) || ""),
      content: adaptedHtml,
      markdown: adaptedMarkdown,
      metadata: (result.metadata as Record<string, unknown>) || {},
      scrapedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error(`Error scraping ${url}:`, error);
    return null;
  }
}

async function main() {
  console.log("Starting content scrape...\n");

  const contentDir = path.join(process.cwd(), "content");
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  const results: ScrapedPage[] = [];

  for (const page of pagesToScrape) {
    const result = await scrapePage(page.url, page.name);
    if (result) {
      results.push(result);

      // Save individual page content
      const pagePath = path.join(contentDir, `${page.name}.json`);
      fs.writeFileSync(pagePath, JSON.stringify(result, null, 2));
      console.log(`Saved: ${pagePath}\n`);
    }

    // Rate limiting - wait between requests
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  // Save combined results
  const allContentPath = path.join(contentDir, "all-scraped-content.json");
  fs.writeFileSync(allContentPath, JSON.stringify(results, null, 2));
  console.log(`\nAll content saved to: ${allContentPath}`);

  // Extract and save structured data
  const structuredData = {
    scrapedAt: new Date().toISOString(),
    pageCount: results.length,
    pages: results.map((r) => ({
      name: r.name,
      title: r.title,
      url: r.url,
    })),
  };

  const summaryPath = path.join(contentDir, "scrape-summary.json");
  fs.writeFileSync(summaryPath, JSON.stringify(structuredData, null, 2));
  console.log(`Summary saved to: ${summaryPath}`);

  console.log("\nScraping complete!");
  console.log(`Total pages scraped: ${results.length}`);
}

main().catch(console.error);
