import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "clay" | "ink" | "navy" | "paper" | "sage" | "ghost" | "bone-outline";

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
};

type ButtonAsLink = CommonProps & { href: string; onClick?: never; type?: never };
type ButtonAsButton = CommonProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
};

type Props = ButtonAsLink | ButtonAsButton;

const VARIANT_CLASS: Record<Variant, string> = {
  clay: "btn-clay",
  ink: "btn-ink",
  navy: "btn-navy",
  paper: "btn-paper",
  sage: "btn-sage",
  ghost: "btn-ghost",
  "bone-outline": "btn-bone-outline",
};

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3.5 10.5L10.5 3.5M10.5 3.5H4.55M10.5 3.5V9.45"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Button(props: Props) {
  const { children, variant = "clay", className, arrow = true } = props;
  const inner = (
    <>
      <span className="leading-none">{children}</span>
      {arrow && (
        <span className="btn-arrow" aria-hidden>
          <ArrowIcon />
        </span>
      )}
    </>
  );

  if (props.href !== undefined) {
    return (
      <Link
        href={props.href}
        className={cn("btn-base", VARIANT_CLASS[variant], className)}
      >
        {inner}
      </Link>
    );
  }
  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={cn("btn-base", VARIANT_CLASS[variant], className)}
    >
      {inner}
    </button>
  );
}
