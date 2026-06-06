import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  BIBLE_THEMES,
  getThemeBySlug,
  getThemesByCategory,
  getCategoryInfo,
} from "@/lib/bible-themes";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeCard } from "@/components/ThemeCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BIBLE_THEMES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const theme = getThemeBySlug(slug);
  if (!theme) return {};
  return {
    title: `${theme.name} — Bible Theme Finder`,
    description: theme.description,
  };
}

export default async function ThemePage({ params }: Props) {
  const { slug } = await params;
  const theme = getThemeBySlug(slug);
  if (!theme) notFound();

  const cat = getCategoryInfo(theme.categorySlug);
  const otRefs = theme.references.filter((r) => r.testament === "OT");
  const ntRefs = theme.references.filter((r) => r.testament === "NT");

  const related = getThemesByCategory(theme.categorySlug)
    .filter((t) => t.slug !== theme.slug)
    .slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#9E9585] mb-8">
          <Link href="/" className="hover:text-[#B8882A] transition">
            All Themes
          </Link>
          <span>/</span>
          <span className="text-[#1A1714]">{theme.name}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-4 ${cat?.color ?? "bg-gray-100 text-gray-700 border-gray-200"}`}
          >
            {theme.category}
          </span>

          <h1
            className="text-5xl sm:text-6xl font-semibold text-[#1A1714] leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {theme.name}
          </h1>

          <p className="text-lg text-[#5C5347] leading-relaxed max-w-2xl">
            {theme.description}
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-[#EDE5D8]">
            <StatPill value={theme.references.length} label="Total Passages" />
            {otRefs.length > 0 && (
              <StatPill value={otRefs.length} label="Old Testament" />
            )}
            {ntRefs.length > 0 && (
              <StatPill value={ntRefs.length} label="New Testament" />
            )}
          </div>
        </header>

        {/* Scripture references */}
        <section className="mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {otRefs.length > 0 && (
              <div>
                <h2
                  className="text-lg font-semibold text-[#1A1714] mb-4 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#B8882A] inline-block" />
                  Old Testament
                </h2>
                <ul className="flex flex-col gap-2">
                  {otRefs.map((r) => (
                    <RefItem key={r.ref} ref_={r.ref} testament="OT" />
                  ))}
                </ul>
              </div>
            )}

            {ntRefs.length > 0 && (
              <div>
                <h2
                  className="text-lg font-semibold text-[#1A1714] mb-4 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#5C8A6E] inline-block" />
                  New Testament
                </h2>
                <ul className="flex flex-col gap-2">
                  {ntRefs.map((r) => (
                    <RefItem key={r.ref} ref_={r.ref} testament="NT" />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Related themes */}
        {related.length > 0 && (
          <section>
            <h2
              className="text-2xl font-semibold text-[#1A1714] mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              More in{" "}
              <em className="italic text-[#B8882A]">{theme.category}</em>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((t) => (
                <ThemeCard key={t.slug} theme={t} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function StatPill({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <p
        className="text-2xl font-semibold text-[#B8882A]"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {value}
      </p>
      <p className="text-xs uppercase tracking-wide text-[#9E9585] mt-0.5">{label}</p>
    </div>
  );
}

function RefItem({ ref_, testament }: { ref_: string; testament: "OT" | "NT" }) {
  const color = testament === "OT" ? "text-[#B8882A] bg-[#FDF6E9] border-[#F0D9A0]" : "text-[#3D7260] bg-[#EEF7F3] border-[#B5D9CA]";
  return (
    <li>
      <span
        className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium w-full ${color}`}
        style={{ fontFamily: "var(--font-serif)" }}
      >
        <span className="text-base">{ref_}</span>
      </span>
    </li>
  );
}
