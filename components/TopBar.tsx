export default function TopBar() {
  return (
    <div className="sticky top-0 z-30 border-b border-night-line bg-night/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <div className="font-display text-lg font-extrabold text-white">
          Edi<span className="text-brass">.</span>Susilo
        </div>
        <nav className="hidden gap-6 sm:flex">
          <a href="#projects" className="text-sm text-[#AEB9D0] hover:text-white">Projects</a>
          <a href="#about" className="text-sm text-[#AEB9D0] hover:text-white">About</a>
          <a href="#contact" className="text-sm text-[#AEB9D0] hover:text-white">Contact</a>
        </nav>
      </div>
    </div>
  )
}