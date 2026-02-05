import { ContactForm } from "@/components/ui";



const Contact = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-secondary">
        <div className="mx-auto max-w-6xl text-center">
          <span className="text-sm text-muted-foreground uppercase tracking-widest text-accent">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight tracking-tight text-foreground mt-4 mb-6">
            Contact Us
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We'd love to hear from you. Whether you're interested in membership,
            have questions about our programs, or want to collaborate, reach out to us.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 py-20 md:px-12 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-8">Chapter Information</h2>

              {/* Location */}
              <div className="bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-rose-light flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Meeting Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Assistance League of Pasadena
                      <br />
                      Pasadena, California
                    </p>
                  </div>
                </div>
              </div>

              {/* Communities */}
              <div className="bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-rose-light flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Communities We Serve</h3>
                    <p className="text-sm text-muted-foreground">
                      La Cañada • Arcadia • Los Angeles
                      <br />
                      Alhambra • Pasadena • Glendale
                    </p>
                  </div>
                </div>
              </div>

              {/* Affiliation */}
              <div className="bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-rose-light flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Our Affiliation</h3>
                    <p className="text-sm text-muted-foreground">
                      Delta Kappa Gamma Society International
                      <br />
                      Area XIII, Chi State - California
                      <br />
                      Founded May 11, 1929
                    </p>
                  </div>
                </div>
              </div>

              {/* Join CTA */}
              <div className="bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-rose-light">
                <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground mb-4">Interested in Joining?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Alpha Upsilon welcomes women educators who are passionate about
                  professional growth and making a difference in education. Members
                  are invited by current members.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "Leading Women Educators Impacting Education Worldwide"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
