interface EventCardProps {
  date: string;
  day: string;
  title: string;
  location: string;
  description?: string;
}

const EventCard = ({ date, day, title, location, description }: EventCardProps) => {
  return (
    <article className="bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col md:flex-row gap-6 group">
      {/* Date Block */}
      <div className="shrink-0 flex flex-col items-center justify-center w-20 h-20 bg-rose-light rounded-lg">
        <span className="text-2xl font-serif font-medium text-accent">{date}</span>
        <span className="text-xs uppercase tracking-wide text-muted-foreground">{day}</span>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2">
        <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          <svg
            className="w-4 h-4 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location}
        </p>
        {description && (
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-sm">{description}</p>
        )}
      </div>
    </article>
  );
};

export default EventCard;
