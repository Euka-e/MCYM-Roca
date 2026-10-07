import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-line-soft bg-[rgba(255,253,247,.94)] px-5 py-3.5 backdrop-blur-md">
      <Link to="/" className="flex min-h-[48px] min-w-0 items-center gap-3">
        <img
          src="/logo-mark.svg"
          alt="MCYM General Roca"
          className="h-10 w-10 shrink-0"
        />
        <span className="flex min-w-0 flex-col">
          <span className="truncate font-display text-xl font-semibold tracking-[-0.01em] text-[hsl(24_40%_20%)]">
            MCYM General Roca
          </span>
          <span className="text-[13px] uppercase tracking-[0.14em] text-ink-soft">
            Iglesia
          </span>
        </span>
      </Link>
    </header>
  );
};

export default Navigation;
