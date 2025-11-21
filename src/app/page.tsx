const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "PHP", "Go"],
  },
  {
    title: "Backend & Frameworks",
    items: ["Spring Boot", "Spring Batch", "Nest.js"],
  },
  {
    title: "Frontend Basics",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Infrastructure & DevOps",
    items: ["AWS", "Docker", "Terraform"],
  },
  {
    title: "Databases",
    items: ["MySQL", "Oracle", "SQL Server"],
  },
] as const;

const experiences = [
  {
    period: "2020年1月 〜 2022年9月",
    description:
      "業務系システム開発のソフトウェアエンジニアとして従事。メンバーとして機能追加や保守開発を担当しつつ、一部の案件ではサブリーダーとしてタスク管理やメンバーサポートも行いました。",
  },
  {
    period: "2022年10月 〜 2024年8月",
    description:
      "SaaSプロダクトの開発チームに所属。チームリーダーとして、要件整理、タスク分解、進行管理を行いながら、バックエンドを中心に機能開発を担当しました。",
  },
  {
    period: "2024年9月 〜 2025年12月",
    description:
      "フリーランスのソフトウェアエンジニアとしてAPI開発に従事。要件整理から設計、実装、テストまで一貫して担当し、スケーラブルなAPI基盤の構築を支援しています。",
  },
] as const;

// Card glass effect simplified (no backdrop-blur) with a lighter single shadow for smoother scrolling.
const cardStyles =
  "rounded-3xl border border-white/10 bg-white/[0.08] px-6 py-8 shadow-lg shadow-slate-900/35 sm:px-10";

const glowButtonClasses =
  "group inline-flex items-center gap-2 self-start rounded-full border border-indigo-400/50 bg-gradient-to-r from-indigo-500/70 via-violet-500/70 to-sky-500/60 px-6 py-3 text-sm font-medium tracking-wide text-white shadow-[0_8px_30px_rgba(76,29,149,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(99,102,241,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400/80";

const tagStyles =
  "inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium tracking-tight text-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.45)] transition-all duration-300 hover:border-indigo-400/70 hover:bg-indigo-500/30 hover:shadow-[0_0_18px_rgba(129,140,248,0.65)]";

// Scroll-triggered reveal animations removed; sections render statically for smoother scrolling.

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#030617] via-[#050c2c] via-60% to-[#1b0f37] text-slate-100">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/40 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-[22rem] w-[22rem] translate-x-1/4 rounded-full bg-sky-500/30 blur-[140px]" />
        <div className="absolute top-1/3 left-6 h-56 w-56 rounded-full bg-purple-600/20 blur-[90px]" />
      </div>
      <main className="relative mx-auto flex min-h-screen w-full max-w-[960px] flex-col gap-8 px-5 py-14 sm:px-8 lg:py-20">
        <section
          className={`${cardStyles} flex flex-col gap-6 text-left`}
        >
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Tsuyoshi
            </h1>
            <p className="text-lg font-medium text-indigo-200">
              Software Engineer / PMO
            </p>
          </div>
          <div className="space-y-4 text-slate-200">
            <div className="space-y-2 text-lg font-medium sm:text-xl">
              <p>Software Engineer → PMO</p>
              <p>Backend / API / Team Management</p>
            </div>
            <div className="space-y-1 text-sm leading-relaxed text-slate-100/80 sm:text-base">
              <p>・業務システムとSaaS プロダクトでバックエンド開発を経験</p>
              <p>・業務システム開発ではサブリーダー、SaaS プロダクト開発ではチームリーダーを経験</p>
            </div>
          </div>
          <a href="#experience" className={glowButtonClasses}>
            経歴を見る
            <span
              aria-hidden="true"
              className="text-lg transition-transform duration-300 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </section>

        <section id="about" className={cardStyles}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200/90">
            About
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Profile</h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-100/90">
            <p>1994年生まれ、関西在住。</p>
            <ul className="list-disc space-y-1 pl-5 text-slate-100">
              <li>Role: Software Engineer → PMO</li>
              <li>Focus: Backend / API / Team Management</li>
              <li>Hobbies: Workout, Reading, Sauna, Shisha</li>
            </ul>
            <p>
              業務系システムとSaaSプロダクトの開発を経て、
              「コード」と「プロジェクトデザイン」の両面からチームに貢献できるPMOを目指しています。
            </p>
          </div>
        </section>

        <section id="skills" className={cardStyles}>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200/90">
              Skills
            </p>
            <h2 className="text-2xl font-semibold text-white">Toolkit</h2>
          </div>
          <div className="mt-6 space-y-6">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="space-y-3 rounded-2xl border border-white/5 bg-slate-900/30 p-4 shadow-lg shadow-slate-900/30"
              >
                <p className="text-sm font-semibold text-indigo-100">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className={tagStyles}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className={cardStyles}>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200/90">
              Experience
            </p>
            <h2 className="text-2xl font-semibold text-white">Timeline</h2>
          </div>
          <div className="mt-8 space-y-10">
            {experiences.map((item, index) => (
              <div key={item.period} className="group flex gap-5">
                <div className="relative flex w-10 flex-col items-center">
                  <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 shadow-md shadow-indigo-500/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-400/70" />
                  {index < experiences.length - 1 && (
                    <span className="absolute top-6 bottom-[-2.5rem] w-px bg-gradient-to-b from-indigo-400/80 via-indigo-400/20 to-transparent" />
                  )}
                </div>
                <div className="flex-1 rounded-2xl border border-white/5 bg-slate-950/30 p-5 shadow-lg shadow-slate-900/30 transition-all duration-300 group-hover:border-indigo-200/50 group-hover:bg-slate-900/60 group-hover:shadow-xl group-hover:shadow-slate-900/45">
                  <p className="text-sm font-semibold text-indigo-100">
                    {item.period}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-slate-100/90">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="links" className={cardStyles}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200/90">
            Links
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Find me on</h2>
          <div className="mt-6">
            <a
              href="https://www.instagram.com/tsuyox2024/"
              target="_blank"
              rel="noreferrer"
              className={`${glowButtonClasses} justify-center text-base`}
            >
              Instagram (@tsuyox2024)
            </a>
          </div>
        </section>
      </main>
      <footer className="mx-auto mt-10 w-full max-w-[960px] border-t border-slate-800/60 px-5 py-8 text-center text-xs text-slate-400 sm:px-8">
        © 2025 tsuyox.dev
      </footer>
    </div>
  );
}
