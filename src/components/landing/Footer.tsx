import Link from "next/link";
import Image from "next/image";
import { FigmaAsset } from "@/components/ui/FigmaAsset";
import { footerColumns, socialLinks } from "@/data/landing";

export function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-10 text-white lg:pt-20">
      <div className="landing-container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.3fr] lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex">
              <FigmaAsset
                src="/landing/logo-white.svg"
                alt="JobHuntly"
                width={160}
                height={36}
                className="h-9 w-40"
              />
            </Link>
            <p className="mt-6 max-w-[320px] text-base leading-7 text-line">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 text-lg font-semibold">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-base text-line/80 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-5 text-lg font-semibold">Get job notifications</h3>
            <p className="mb-6 max-w-[320px] text-base leading-7 text-line/80">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <form className="flex flex-col gap-2 sm:flex-row" action="#" method="post">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="h-12 min-w-0 flex-1 bg-white px-4 text-base text-navy outline-none placeholder:text-subtle"
              />
              <button
                type="submit"
                className="h-12 shrink-0 bg-primary px-6 text-base font-bold text-white hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-subtle">
            2021 &copy; JobHuntly. All rights reserved.
          </p>
          <ul className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href="#"
                  aria-label={social.name}
                  className="flex size-8 overflow-clip rounded-full"
                >
                  <Image
                    src={social.src}
                    alt=""
                    width={32}
                    height={32}
                    className="size-full object-cover"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
