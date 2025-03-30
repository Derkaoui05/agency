import {
  Sparkles,
  Users,
  LineChart,
  Lightbulb,
  Rocket,
  Heart,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function About() {
  return (
    <section className="py-16 md:py-24 h-screen overflow-hidden md:overflow-visible bg-background" id="about">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-blue-700/60 border-2 rounded-full mb-4">
            <Sparkles className="h-6 w-6 text-primary mr-2" />
            <span className="text-sm font-medium">About Spark Studio</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            We create digital experiences that{" "}
            <span className="text-primary">inspire</span>
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Founded in 2018, we combine stunning design with technical
            excellence to transform businesses through thoughtful digital
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1727341554370-80e0fe9ad082?q=80&w=2276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Spark Studio team collaborating"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <p className="text-muted-foreground">
              Spark Studio was born from a simple belief: digital experiences
              should be both beautiful and effective. Founded by a team of
              designers and developers frustrated by the gap between creative
              agencies that made pretty websites and technical firms that built
              functional but uninspiring platforms, we set out to create
              something different.
            </p>
            <p className="text-muted-foreground">
              What began as a small team working out of a converted warehouse
              has grown into a full-service digital agency with a global client
              base. But despite our growth, we&apos;ve remained true to our founding
              principle: combining stunning design with technical excellence to
              create digital experiences that drive real business results.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              We transform businesses through thoughtful digital design and
              innovative technology solutions. Our mission is to create digital
              experiences that not only look exceptional but also perform
              brilliantly, helping our clients connect with their audiences and
              achieve their business goals.
            </p>
          </div>
        </div>

        <Tabs defaultValue="approach" className="mb-16">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="approach">Our Approach</TabsTrigger>
              <TabsTrigger value="team">Our Team</TabsTrigger>
              <TabsTrigger value="difference">Our Difference</TabsTrigger>
              <TabsTrigger value="values">Our Values</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="approach">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold">
                      Human-Centered Design
                    </h4>
                    <p className="text-muted-foreground">
                      We design for people first. Every project begins with
                      understanding the needs, behaviors, and pain points of
                      your users.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <LineChart className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold">
                      Data-Informed Decisions
                    </h4>
                    <p className="text-muted-foreground">
                      Beautiful design isn&apos;t enough—it needs to perform. We use
                      data and analytics to guide our decisions and measure
                      impact.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold">
                      Collaborative Partnership
                    </h4>
                    <p className="text-muted-foreground">
                      We don&apos;t just work for you; we work with you. Your
                      insights and expertise are invaluable throughout the
                      process.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold">
                      Continuous Innovation
                    </h4>
                    <p className="text-muted-foreground">
                      The digital landscape never stands still, and neither do
                      we. We&apos;re constantly exploring new technologies and
                      approaches.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="team">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Spark Studio team"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Behind Every Project</h3>
                <p className="text-muted-foreground">
                  Behind every Spark Studio project is a diverse team of
                  creative thinkers, technical experts, and strategic minds.
                  We&apos;ve assembled a team that brings together:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Visionary Designers</span>{" "}
                      who transform concepts into compelling visual experiences
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Expert Developers</span> who
                      build robust, scalable technical solutions
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Strategic Thinkers</span>{" "}
                      who ensure every decision aligns with your business goals
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Project Orchestrators</span>{" "}
                      who keep everything moving smoothly from concept to launch
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="difference">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold">
                      Balanced Expertise
                    </h4>
                    <p className="text-muted-foreground">
                      Unlike agencies that excel at either design or
                      development, we bring equal strength to both.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <LineChart className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold">
                      Results Orientation
                    </h4>
                    <p className="text-muted-foreground">
                      We measure our success by your success. Every decision is
                      guided by how it will impact your business goals.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold">
                      Transparent Process
                    </h4>
                    <p className="text-muted-foreground">
                      No black boxes or surprises. We believe in clear
                      communication and keeping you informed every step of the
                      way.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold">
                      Long-Term Thinking
                    </h4>
                    <p className="text-muted-foreground">
                      We don&apos;t just build for today; we create solutions
                      designed to grow and evolve with your business over time.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="values">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { value: "Excellence", description: "in everything we create" },
                {
                  value: "Integrity",
                  description: "in how we conduct business",
                },
                {
                  value: "Innovation",
                  description: "in our approach to challenges",
                },
                {
                  value: "Collaboration",
                  description: "with our clients and each other",
                },
                {
                  value: "Impact",
                  description: "that extends beyond aesthetics",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Heart className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold">{item.value}</h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Let&apos;s create something extraordinary together
          </h3>
          <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg mb-8">
            At Spark Studio, we&apos;re not just building websites—we&apos;re crafting
            digital experiences that transform businesses. Whether you&apos;re
            looking to launch a new brand, revitalize your digital presence, or
            create a custom application, we bring the perfect blend of
            creativity, technical expertise, and strategic thinking to make it
            happen.
          </p>
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer">
            Get in touch
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

// We're a passionate team of designers and developers dedicated to crafting beautiful, functional websites
// that drive results. With over a decade of experience, we've helped hundreds of businesses establish their
// digital presence and achieve their goals. Our client-centered approach means we listen first, then create
// solutions that perfectly align with your vision and business objectives. We don't just build websites—we
// build lasting partnerships.