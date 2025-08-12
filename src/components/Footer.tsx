import { Link } from "react-router-dom";
import {
  Church,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Church Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-primary rounded-lg">
                <Church className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">MCYM General Roca</span>
                <span className="text-sm text-background/70">Iglesia</span>
              </div>
            </Link>

            <p className="text-background/80 leading-relaxed">
              Una iglesia familiar donde crece la fe y todos son bienvenidos. Nos comprometemos a amar a Dios y servir a nuestro prójimo.
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-background/80">
                <MapPin className="h-4 w-4" />
                <span>Cipolletti 860, General Roca, Río Negro</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-background/80">
                <Phone className="h-4 w-4" />
                <span>(+54) 298 420-4886</span>
              </div>
            </div>
          </div>
          <div className="md:ml-20">
            <div className="mt-6">
              <h4 className="text-xl mb-3">Seguinos</h4>
              <div className="grid grid-cols-3 gap-3 md:flex md:space-x-3 md:gap-0">
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 hover:bg-background/10 w-full md:w-auto"
                  asChild
                >
                  <a
                    href="https://www.facebook.com/iglesiamcymroca"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook MCYM General Roca"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 hover:bg-background/10 w-full md:w-auto"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/iglesiamcymroca?utm_source=ig_web_button_share_sheet&igsh=MWRiaDVlN2ljNXJscg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram MCYM General Roca"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 hover:bg-background/10 w-full md:w-auto"
                  asChild
                >
                  <a
                    href="https://www.youtube.com/@iglesiamcymroca7312"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube MCYM General Roca"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 MCYM General Roca. Todos los derechos reservados.
            </p>

            {/*  <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-background/60 hover:text-background transition-colors"
              >
                Política de privacidad
              </Link>
              <Link
                to="/terms"
                className="text-background/60 hover:text-background transition-colors"
              >
                Términos de servicio
              </Link>
              <Link
                to="/accessibility"
                className="text-background/60 hover:text-background transition-colors"
              >
                Accesibilidad
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
