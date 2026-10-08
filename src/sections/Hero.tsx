export function Hero() {
    return (
      <header>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Weihan Yap</h1>

        <p className="mt-6 max-w-xl text-secondary">
          MSc Artificial Intelligence student at Heriot-Watt University and First Class Computer Science graduate. 
          I build software and data-driven applications, from web and mobile apps to machine learning systems.
        </p>

        <nav aria-label="Contact links" className="mt-8 flex flex-wrap gap-6">
          <a href="https://github.com/wyap2327">GitHub</a>
          <a href="https://www.linkedin.com/in/weihan-yap-603b93303/">LinkedIn</a>
          <a href="mailto:wyap2327@outlook.com">Email</a>
        </nav>
      </header>
    )
  }