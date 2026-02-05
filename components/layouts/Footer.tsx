import Link from "next/link";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-narrow section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="heading-sm text-accent">Alpha Upsilon</h3>
            <p className="text-small">
              Delta Kappa Gamma Society International
              <br />
              Area XIII, Chi State - California
            </p>
            <p className="text-small">
              Founded December 8, 1945
              <br />
              Pasadena, California
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-sans font-medium text-foreground uppercase text-sm tracking-wide">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-small hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/programs" className="text-small hover:text-accent transition-colors">
                Programs
              </Link>
              <Link href="/contact" className="text-small hover:text-accent transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h4 className="font-sans font-medium text-foreground uppercase text-sm tracking-wide">
              Our Mission
            </h4>
            <p className="text-small italic">
              "The Delta Kappa Gamma Society International promotes professional
              and personal growth of women educators and excellence in education."
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-small">
            © {currentYear} Alpha Upsilon Chapter, DKG. All rights reserved.
          </p>
          <p className="text-small">
            Leading Women Educators Impacting Education Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
