import Image from "next/image";
import Link from "next/link";
import logo from "@/public/brand/onqueueva-logo.png";

/** The original ON-QUEUE VA logo, unmodified (transparent padding trimmed only). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex shrink-0 ${className}`} aria-label="ON-QUEUE VA home">
      <Image src={logo} alt="ON-QUEUE VA — Supporting Your Success, Virtually." priority className="h-10 w-auto md:h-12" sizes="200px" />
    </Link>
  );
}
