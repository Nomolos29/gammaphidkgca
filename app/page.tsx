import { Hero } from "@/components/layouts";
import roseImage from "@/public/rose-watercolor.png";
import Image from "next/image";
import Link from "next/link";

const opportunities = [
  {
    title: "Monthly Meetings",
    description: "Connect with fellow women educators and attend informational speaker sessions.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Professional Development",
    description: "Workshops, networking opportunities, and peer mentoring programs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Scholarships & Grants",
    description: "Financial support for members, student teachers, and education college students.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Community Projects",
    description: "Engage in philanthropic initiatives and fundraising events that make a difference.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <Hero
        title="Alpha Upsilon Chapter"
        subtitle="Leading Women Educators Impacting Education Worldwide since 1945. Join our community of dedicated professionals making a difference in Pasadena and beyond."
      />

      {/* About Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-sm text-muted-foreground uppercase tracking-widest text-accent">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight text-foreground">
                A Legacy of Excellence in Education
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our Alpha Upsilon Chapter was founded on December 8, 1945, in Pasadena, California,
                by Grace Post. For nearly eight decades, our members have worked tirelessly in the
                surrounding communities of La Cañada, Arcadia, Los Angeles, Alhambra, Pasadena, and Glendale.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                As part of the Delta Kappa Gamma Society International, we are committed to promoting
                professional and personal growth of women educators and excellence in education.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-accent bg-transparent px-8 py-3 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-white">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-rose-light rounded-2xl flex items-center justify-center">
                <Image
                  src={roseImage}
                  alt="Rose emblem"
                  className="w-2/3 h-2/3 object-contain"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg">
                <p className="text-3xl font-serif font-bold">1945</p>
                <p className="text-sm">Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-6 py-20 md:px-12 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border">
              <span className="text-sm text-muted-foreground uppercase tracking-widest text-accent mb-4 block">Vision</span>
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">
                Leading Women Educators
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Impacting Education Worldwide — empowering the next generation of learners
                through dedicated mentorship and innovative teaching practices.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border">
              <span className="text-sm text-muted-foreground uppercase tracking-widest text-accent mb-4 block">Mission</span>
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">
                Professional Growth
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                The Delta Kappa Gamma Society International promotes professional and personal
                growth of women educators and excellence in education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-sm text-muted-foreground uppercase tracking-widest text-accent">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight text-foreground mt-4">
              Membership Opportunities
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-4">
              Discover the many ways our chapter supports women educators in their
              professional journey and personal development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border flex gap-6"
              >
                <div className="shrink-0 w-16 h-16 rounded-full bg-rose-light flex items-center justify-center text-accent">
                  {opportunity.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground mb-2">{opportunity.title}</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-sm">{opportunity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight text-foreground mb-6">
            Join Our Community
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Whether you're an experienced educator or just starting your career,
            Alpha Upsilon welcomes you. Connect with like-minded professionals
            who share your passion for education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-accent-foreground transition-all duration-300 hover:bg-accent/90 hover:shadow-lg">
              View Our Programs
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-accent bg-transparent px-8 py-3 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-white">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
