export function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center"
      style={{ backgroundColor: "#EFEBE3", borderTop: "1px solid #DDD5C8" }}
    >
      <p
        className="text-lg font-semibold tracking-widest mb-2"
        style={{ fontFamily: "var(--font-serif)", color: "#1E1A16" }}
      >
        THE COLOR CODE
      </p>
      <p className="text-xs mb-4" style={{ color: "#A07850", fontStyle: "italic" }}>
        Build a wardrobe that works — every time.
      </p>
      <div className="flex justify-center gap-6 text-xs" style={{ color: "#C4A882" }}>
        <span>© {new Date().getFullYear()} The Color Code</span>
        <a href="#" style={{ color: "#C4A882" }}>Privacy Policy</a>
      </div>
    </footer>
  );
}
