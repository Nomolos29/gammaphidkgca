import { EventCard } from "@/components/ui";


const events = [
  {
    date: "18",
    day: "Sept",
    title: "Welcome Back",
    location: "Assistance League of Pasadena",
    description: "Join us for our season opener as we reconnect and share our summer experiences.",
  },
  {
    date: "15",
    day: "Oct",
    title: "The Arts of Eliot Magnet School",
    location: "Assistance League of Pasadena",
    description: "Explore the creative programs shaping young minds at Eliot Magnet School.",
  },
  {
    date: "13",
    day: "Nov",
    title: "Wills & Trusts Tune Up",
    location: "Assistance League of Pasadena",
    description: "Essential information for planning your future and protecting your assets.",
  },
  {
    date: "4",
    day: "Dec",
    title: "Decorating Hillsides",
    location: "Community Event",
    description: "Join our festive holiday community service project.",
  },
  {
    date: "7",
    day: "Dec",
    title: "Holiday Party for CASA",
    location: "Robin William's Residence",
    description: "Celebrate the season while supporting Court Appointed Special Advocates.",
  },
  {
    date: "14",
    day: "Jan",
    title: "History of Letters",
    location: "Assistance League of Pasadena",
    description: "A fascinating journey through the evolution of written communication.",
  },
  {
    date: "7",
    day: "Feb",
    title: "Area XIII Conference",
    location: "Double Tree in Monrovia",
    description: "Connect with members from across Area XIII at our annual conference.",
  },
  {
    date: "7",
    day: "Mar",
    title: "Field Trip to Motion Picture Academy",
    location: "Academy of Motion Picture Museum",
    description: "Experience the magic of cinema history at this world-class museum.",
  },
  {
    date: "19",
    day: "Mar",
    title: "Crafts with Randy Bayard",
    location: "Assistance League of Pasadena",
    description: "Get creative with our hands-on crafting session led by Randy Bayard.",
  },
];

const specialEvents = [
  {
    date: "May 2, 2026",
    title: "SoCal Conference",
    location: "Costa Mesa",
  },
  {
    date: "2027",
    title: "DKG International Convention",
    location: "TBA",
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-secondary">
        <div className="mx-auto max-w-6xl text-center">
          <span className="text-sm text-muted-foreground uppercase tracking-widest text-accent">2025-2026 Season</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight tracking-tight text-foreground mt-4 mb-6">
            Program Calendar
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Join us for an enriching year of professional development, community service,
            and fellowship. All members and guests are welcome.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="px-6 py-20 md:px-12 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Events */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-8">Upcoming Events</h2>
              {events.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>

            {/* Sidebar - Special Events */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border">
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground mb-6">Special Events</h3>
                  <div className="space-y-6">
                    {specialEvents.map((event, index) => (
                      <div key={index} className="pb-6 border-b border-border last:border-0 last:pb-0">
                        <p className="text-sm text-muted-foreground text-accent font-medium">{event.date}</p>
                        <p className="font-serif text-lg text-foreground mt-1">{event.title}</p>
                        <p className="text-sm text-muted-foreground">{event.location}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border mt-6 bg-rose-light">
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground mb-4">Meeting Information</h3>
                  <p className="text-sm text-muted-foreground">
                    Most meetings are held at the Assistance League of Pasadena.
                    Contact us for specific times and additional details.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
