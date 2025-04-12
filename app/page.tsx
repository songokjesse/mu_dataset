import { ArrowDownToLine, BookOpen, Github, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TableOfContents } from "@/components/table-of-contents"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/moi-university-logo.png"
                alt="Moi University Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="hidden font-bold sm:inline-block">Benchmark Dataset</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#overview" className="transition-colors hover:text-foreground/80">
              Overview
            </Link>
            <Link href="#methodology" className="transition-colors hover:text-foreground/80">
              Methodology
            </Link>
            <Link href="#fields" className="transition-colors hover:text-foreground/80">
              Fields
            </Link>
            <Link href="#limitations" className="transition-colors hover:text-foreground/80">
              Limitations
            </Link>
            <Link href="#citation" className="transition-colors hover:text-foreground/80">
              Citation
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Image
              src="/path-international-logo.png"
              alt="PATH International Logo"
              width={100}
              height={40}
              className="h-8 w-auto"
            />
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/yourusername/your-repo" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-4rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pr-2 pl-8">
            <TableOfContents />
          </div>
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8">
          <div className="mx-auto w-full min-w-0">
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">Datasets</div>
              <div>/</div>
              <div className="font-medium text-foreground">Dataset Name</div>
            </div>
            <div className="space-y-2">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight" id="overview">
                Dataset Name
              </h1>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">v1.0.0</Badge>
                <Badge variant="outline">CC BY-NC-SA 4.0</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
              </div>
              <p className="text-lg text-muted-foreground">
                A comprehensive dataset for [purpose/domain] research and applications.
              </p>
            </div>
            <div className="flex items-center space-x-2 pt-4">
              <Button className="gap-1">
                <ArrowDownToLine className="h-4 w-4" />
                Download
              </Button>
              <Button variant="outline" asChild>
                <Link href="#citation">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cite
                </Link>
              </Button>
            </div>
            <Separator className="my-8" />
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger
                  value="overview"
                  className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="examples"
                  className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground"
                >
                  Examples
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="pt-4">
                <div className="space-y-8">
                  <Card id="methodology">
                    <CardHeader>
                      <CardTitle>Data Collection Methodology</CardTitle>
                      <CardDescription>How the data was collected and curated</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <h3 className="text-lg font-medium">Collection Process</h3>
                      <p>Describe your data collection process here. Include information about:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Sources of the data (e.g., web scraping, surveys, sensors)</li>
                        <li>Time period during which data was collected</li>
                        <li>Sampling methodology</li>
                        <li>Consent and privacy considerations</li>
                        <li>Tools and technologies used for collection</li>
                      </ul>

                      <h3 className="text-lg font-medium pt-4">Data Processing Steps</h3>
                      <p>Explain the processing pipeline that transformed raw data into the final dataset:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Cleaning procedures (handling missing values, outliers, etc.)</li>
                        <li>Normalization or standardization techniques</li>
                        <li>Feature engineering</li>
                        <li>Anonymization or de-identification steps</li>
                        <li>Quality assurance measures</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card id="fields">
                    <CardHeader>
                      <CardTitle>Dataset Fields</CardTitle>
                      <CardDescription>Description of the fields included in the dataset</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="py-3 text-left font-medium">Field Name</th>
                              <th className="py-3 text-left font-medium">Type</th>
                              <th className="py-3 text-left font-medium">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-3 font-medium">id</td>
                              <td className="py-3 text-muted-foreground">string</td>
                              <td className="py-3">Unique identifier for each record</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 font-medium">timestamp</td>
                              <td className="py-3 text-muted-foreground">datetime</td>
                              <td className="py-3">When the data was recorded</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 font-medium">field_1</td>
                              <td className="py-3 text-muted-foreground">numeric</td>
                              <td className="py-3">Description of field_1</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 font-medium">field_2</td>
                              <td className="py-3 text-muted-foreground">categorical</td>
                              <td className="py-3">Description of field_2</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 font-medium">field_3</td>
                              <td className="py-3 text-muted-foreground">text</td>
                              <td className="py-3">Description of field_3</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  <Card id="limitations">
                    <CardHeader>
                      <CardTitle>Limitations and Potential Biases</CardTitle>
                      <CardDescription>Important considerations when using this dataset</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <h3 className="text-lg font-medium">Known Limitations</h3>
                      <p>Describe the limitations of your dataset here. Be transparent about:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Coverage gaps or underrepresented groups</li>
                        <li>Temporal limitations (e.g., data becoming outdated)</li>
                        <li>Geographical constraints</li>
                        <li>Technical limitations in collection or processing</li>
                      </ul>

                      <h3 className="text-lg font-medium pt-4">Potential Biases</h3>
                      <p>Acknowledge potential biases in your dataset:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Selection bias in data sources</li>
                        <li>Demographic biases</li>
                        <li>Measurement biases</li>
                        <li>Cultural or contextual biases</li>
                        <li>Recommendations for mitigating these biases</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card id="citation">
                    <CardHeader>
                      <CardTitle>Citation Information</CardTitle>
                      <CardDescription>How to cite this dataset in academic work</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-md bg-muted p-4">
                        <pre className="text-sm whitespace-pre-wrap">
                          {`Author, A., & Researcher, B. (2023). Dataset Name: A comprehensive dataset for [purpose/domain]. 
DOI: 10.xxxx/xxxxx`}
                        </pre>
                      </div>
                      <div className="pt-4">
                        <p className="text-sm text-muted-foreground">
                          This dataset is licensed under{" "}
                          <Link
                            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                            className="font-medium underline underline-offset-4"
                            target="_blank"
                          >
                            CC BY-NC-SA 4.0
                          </Link>
                          . This license allows reusers to distribute, remix, adapt, and build upon the material in any
                          medium or format for noncommercial purposes only, and only so long as attribution is given to
                          the creator. If you remix, adapt, or build upon the material, you must license the modified
                          material under identical terms.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                      <CardDescription>Get in touch with questions or feedback</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <span>dataset-contact@example.com</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Github className="h-5 w-5 text-muted-foreground" />
                        <Link
                          href="https://github.com/yourusername/your-repo/issues"
                          className="underline underline-offset-4"
                          target="_blank"
                        >
                          Submit an issue on GitHub
                        </Link>
                      </div>
                      <p className="pt-2 text-sm text-muted-foreground">
                        For questions about usage, reporting issues, or collaboration opportunities, please reach out
                        using the contact information above.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="examples" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Dataset Examples</CardTitle>
                    <CardDescription>Sample entries from the dataset</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="py-3 text-left font-medium">id</th>
                            <th className="py-3 text-left font-medium">timestamp</th>
                            <th className="py-3 text-left font-medium">field_1</th>
                            <th className="py-3 text-left font-medium">field_2</th>
                            <th className="py-3 text-left font-medium">field_3</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-3">001</td>
                            <td className="py-3">2023-01-15T08:30:00Z</td>
                            <td className="py-3">42.5</td>
                            <td className="py-3">Category A</td>
                            <td className="py-3">Sample text for record 1</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3">002</td>
                            <td className="py-3">2023-01-15T09:45:00Z</td>
                            <td className="py-3">37.2</td>
                            <td className="py-3">Category B</td>
                            <td className="py-3">Sample text for record 2</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3">003</td>
                            <td className="py-3">2023-01-15T11:15:00Z</td>
                            <td className="py-3">29.8</td>
                            <td className="py-3">Category A</td>
                            <td className="py-3">Sample text for record 3</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src="/moi-university-logo.png"
              alt="Moi University Logo"
              width={30}
              height={30}
              className="h-8 w-auto"
            />
            <Image
              src="/path-international-logo.png"
              alt="PATH International Logo"
              width={80}
              height={30}
              className="h-6 w-auto"
            />
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Moi University & PATH International. This dataset is licensed under{" "}
            <Link
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              className="font-medium underline underline-offset-4"
            >
              CC BY-NC-SA 4.0
            </Link>
            .
          </p>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">DOI: 10.xxxx/xxxxx</p>
        </div>
      </footer>
    </div>
  )
}

