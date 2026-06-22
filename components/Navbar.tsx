const navItems = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Resume", "#resume"],
  ["Contact", "#contact"]
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-graphite/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#home" className="text-sm font-bold tracking-wide text-white">
          Aaryan Kulkarni
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/7 hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-md border border-signal/50 px-3 py-2 text-sm font-semibold text-signal transition hover:bg-signal hover:text-graphite"
        >
          Connect
        </a>
      </nav>
    </header>
  );
}
