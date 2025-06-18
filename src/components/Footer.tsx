import { Link } from "react-router-dom";
import {
  Church,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Service Times", href: "/services" },
    { name: "Ministries", href: "/ministries" },
    { name: "Events", href: "/events" },
    { name: "Give", href: "/give" },
    { name: "Contact", href: "/contact" },
  ];

  const ministries = [
    { name: "Children's Ministry", href: "/ministries/children" },
    { name: "Youth Group", href: "/ministries/youth" },
    { name: "Men's Ministry", href: "/ministries/men" },
    { name: "Women's Ministry", href: "/ministries/women" },
    { name: "Senior Ministry", href: "/ministries/seniors" },
    { name: "Outreach", href: "/ministries/outreach" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Church Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-primary rounded-lg">
                <Church className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Grace Community</span>
                <span className="text-sm text-background/70">Church</span>
              </div>
            </Link>

            <p className="text-background/80 leading-relaxed">
              A place where faith grows, community thrives, and everyone
              belongs. We're committed to loving God and serving our neighbors.
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-background/80">
                <MapPin className="h-4 w-4" />
                <span>123 Faith Street, Grace Valley, CA 90210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-background/80">
                <Phone className="h-4 w-4" />
                <span>(555) 123-PRAY</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-background/80">
                <Mail className="h-4 w-4" />
                <span>info@gracecommunity.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Ministries</h3>
            <ul className="space-y-2">
              {ministries.map((ministry) => (
                <li key={ministry.name}>
                  <Link
                    to={ministry.href}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {ministry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
            <p className="text-background/80 mb-4">
              Subscribe to our newsletter for updates on events, sermons, and
              community news.
            </p>

            <div className="space-y-3">
              <Input
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="sm"
              >
                Subscribe
              </Button>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 hover:bg-background/10"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 hover:bg-background/10"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 hover:bg-background/10"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 hover:bg-background/10"
                >
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 Grace Community Church. All rights reserved.
            </p>

            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-background/60 hover:text-background transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-background/60 hover:text-background transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/accessibility"
                className="text-background/60 hover:text-background transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
