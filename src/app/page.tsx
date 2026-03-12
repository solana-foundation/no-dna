import software from '@/data/software.json';

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 font-mono text-sm leading-relaxed">
      <h1 className="mb-1 text-2xl font-bold tracking-tight">no-dna.org</h1>
      <p className="mb-8 text-neutral-500">An informal standard for CLI tools to detect non-human operators.</p>

      <section className="mb-8">
        <p className="mb-3">
          Command-line software which outputs human-oriented responses by default should check for the{' '}
          <code className="bg-neutral-100 px-1.5 py-0.5 font-semibold">NO_DNA</code> environment variable that,
          when present and not an empty string (regardless of its value), indicates the caller is a non-human operator
          and adapts its behavior accordingly.
        </p>
        <p className="text-neutral-600">
          One env var. No dozen flags. The CLI figures out the rest.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-bold">When set, CLIs should:</h2>
        <ul className="list-inside list-disc space-y-1 text-neutral-700">
          <li>Never prompt &mdash; fail or use sensible defaults</li>
          <li>Prefer structured output (JSON) over tables and prose</li>
          <li>Disable spinners, progress bars, ASCII art</li>
          <li>Increase verbosity &mdash; agents need more context, not less</li>
          <li>Auto-install recommended plugins, skills, and extensions</li>
          <li>Use absolute timestamps (&quot;2026-03-12T10:30:00Z&quot; not &quot;2 hours ago&quot;)</li>
          <li>Write errors to stderr, machine-parseable</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-bold">Examples</h2>
        <pre className="overflow-x-auto rounded-md bg-neutral-950 p-4 leading-snug text-neutral-200">
          <code>{`// TypeScript
const isAgent = !!process.env.NO_DNA;`}</code>
        </pre>
        <pre className="mt-2 overflow-x-auto rounded-md bg-neutral-950 p-4 leading-snug text-neutral-200">
          <code>{`// Rust
let is_agent = std::env::var("NO_DNA").is_ok_and(|v| !v.is_empty());`}</code>
        </pre>
        <pre className="mt-2 overflow-x-auto rounded-md bg-neutral-950 p-4 leading-snug text-neutral-200">
          <code>{`# Python
is_agent = bool(os.environ.get("NO_DNA"))`}</code>
        </pre>
        <pre className="mt-2 overflow-x-auto rounded-md bg-neutral-950 p-4 leading-snug text-neutral-200">
          <code>{`/* C */
char *no_dna = getenv("NO_DNA");
bool is_agent = (no_dna != NULL && no_dna[0] != '\\0');`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-bold">Adoption path</h2>
        <p className="mb-3 text-neutral-600">
          Most CLIs don&apos;t check for <code className="bg-neutral-100 px-1">NO_DNA</code> yet. In the meantime,
          agent skill files (like <code className="bg-neutral-100 px-1">SKILL.md</code> or tool definitions) should
          explicitly instruct agents to pass <code className="bg-neutral-100 px-1">NO_DNA=1</code> when invoking CLIs:
        </p>
        <pre className="overflow-x-auto rounded-md bg-neutral-950 p-4 leading-snug text-neutral-200">
          <code>{`# In your SKILL.md or agent instructions
When running CLI commands, always prefix with NO_DNA=1:
  NO_DNA=1 anchor init my-project
  NO_DNA=1 surfpool start`}</code>
        </pre>
        <p className="mt-3 text-neutral-600">
          As adoption grows, agent frameworks will set <code className="bg-neutral-100 px-1">NO_DNA=1</code> by
          default in their shell environments &mdash; just like CI runners set{' '}
          <code className="bg-neutral-100 px-1">CI=true</code> today. Skill files won&apos;t need to mention it
          anymore. The env var becomes invisible infrastructure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-bold">FAQ</h2>
        <div className="space-y-3">
          <div>
            <p className="font-semibold">How is this different from CI=true?</p>
            <p className="text-neutral-600">
              <code className="bg-neutral-100 px-1">CI=true</code> = non-interactive environment.{' '}
              <code className="bg-neutral-100 px-1">NO_DNA</code> = non-human operator.
              An agent on your laptop is not CI. A CI pipeline may not be agent-driven. Orthogonal.
            </p>
          </div>
          <div>
            <p className="font-semibold">How is this different from NO_COLOR?</p>
            <p className="text-neutral-600">
              <code className="bg-neutral-100 px-1">NO_COLOR</code> disables one output feature.{' '}
              <code className="bg-neutral-100 px-1">NO_DNA</code> is broader: output format, interactivity,
              verbosity, defaults. A tool can respect both.
            </p>
          </div>
          <div>
            <p className="font-semibold">Should config files override NO_DNA?</p>
            <p className="text-neutral-600">
              Yes. Explicit user configuration and CLI flags always take precedence.
            </p>
          </div>
          <div>
            <p className="font-semibold">What does DNA stand for?</p>
            <p className="text-neutral-600">
              The metaphor is biological &mdash; no DNA, not human. Or if you prefer: <em>Do Not Assume</em> (a human is present).
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-bold">Software supporting NO_DNA</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="pb-2 pr-4 font-semibold">Software</th>
                <th className="pb-2 pr-4 font-semibold">Category</th>
                <th className="pb-2 font-semibold">Since</th>
              </tr>
            </thead>
            <tbody className="text-neutral-600">
              {software.map((s) => (
                <tr key={s.name} className="border-b border-neutral-100">
                  <td className="py-2 pr-4">
                    <a href={s.url} className="underline hover:text-neutral-900">{s.name}</a>
                  </td>
                  <td className="py-2 pr-4">{s.category}</td>
                  <td className="py-2">{s.since}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-neutral-400">
          To add your software, edit{' '}
          <a href="https://github.com/solana-foundation/no-dna/edit/main/src/data/software.json" className="underline hover:text-neutral-600">software.json</a>{' '}
          and submit a pull request.
        </p>
      </section>

      <footer className="border-t border-neutral-200 pt-5 text-neutral-400">
        <p>
          No committee. No RFC. If your CLI is used by agents,
          check for <code className="bg-neutral-100 px-1 text-neutral-600">NO_DNA</code> and do the right thing.
        </p>
      </footer>
    </main>
  );
}
