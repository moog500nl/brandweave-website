import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const footerNavs = [
  {
    label: "Brandweave",
    items: [
      { href: "/", name: "Homepage" },
      { href: "/about/", name: "About us" },
      { href: "/blog/", name: "Blog" },
      { href: "/contact/", name: "Contact us" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-lg sm:mx-auto sm:text-center">
          <img 
            src="/lovable-uploads/28e9b654-0e33-40ae-a0d7-c285832b7bec.png" 
            alt="Brandweave Logo" 
            className="w-32 sm:mx-auto" 
            loading="lazy"
          />
          <p className="leading-relaxed mt-4 text-sm text-muted-foreground sm:text-center">
            Brandweave is an independent advisory helping CMOs understand and shape how AI perceives, compares and recommends their brands.
          </p>
        </div>
        <ul className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4 mt-12 text-sm font-medium">
          {footerNavs.map((nav) =>
            nav.items.map((item) => (
              <li key={item.name} className="text-muted-foreground hover:text-foreground">
                <Link to={item.href}>{item.name}</Link>
              </li>
            ))
          )}
        </ul>
        <div className="mt-12 flex justify-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Brandweave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}