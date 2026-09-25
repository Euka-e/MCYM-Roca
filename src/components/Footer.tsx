import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(24_26%_14%)] px-5 pb-7 pt-9 text-[#fffdf5]">
      <Link to="/" className="inline-flex min-h-[48px] items-center gap-3">
        <img src="/logo.png" alt="" className="h-9 w-9" />
        <span className="flex flex-col">
          <span className="font-display text-xl font-semibold">
            MCYM General Roca
          </span>
          <span className="text-[13px] uppercase tracking-[0.14em] text-[rgba(255,253,245,.72)]">
            Iglesia
          </span>
        </span>
      </Link>
      <p className="mt-5 text-[17px] leading-[1.6] text-[rgba(255,253,245,.86)]">
        Una iglesia familiar donde crece la fe y todos son bienvenidos. Nos
        comprometemos a amar a Dios y servir a nuestro prójimo.
      </p>
      <div className="mt-5 flex flex-col gap-1.5 text-[17px] text-[rgba(255,253,245,.86)]">
        <span>Cipolletti 860, General Roca, Río Negro</span>
        <span>(+54) 298 420-4886</span>
      </div>
      <h2 className="mb-3 mt-7 font-display text-xl font-semibold">Seguinos</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(96px,1fr))] gap-2.5">
        <a
          href="https://www.facebook.com/iglesiamcymroca"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook MCYM General Roca"
          className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-[rgba(255,253,245,.28)] px-2 text-base font-semibold hover:bg-[rgba(255,253,245,.08)]"
        >
          <Facebook className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />{" "}
          Facebook
        </a>
        <a
          href="https://www.instagram.com/iglesiamcymroca?utm_source=ig_web_button_share_sheet&igsh=MWRiaDVlN2ljNXJscg=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram MCYM General Roca"
          className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-[rgba(255,253,245,.28)] px-2 text-base font-semibold hover:bg-[rgba(255,253,245,.08)]"
        >
          <Instagram
            className="h-[18px] w-[18px] shrink-0"
            aria-hidden="true"
          />{" "}
          Instagram
        </a>
        <a
          href="https://www.youtube.com/@iglesiamcymroca7312"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube MCYM General Roca"
          className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-[rgba(255,253,245,.28)] px-2 text-base font-semibold hover:bg-[rgba(255,253,245,.08)]"
        >
          <Youtube className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />{" "}
          YouTube
        </a>
      </div>
      <p className="mt-7 border-t border-[rgba(255,253,245,.2)] pt-5 text-[15px] text-[rgba(255,253,245,.66)]">
        © {new Date().getFullYear()} MCYM General Roca. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
