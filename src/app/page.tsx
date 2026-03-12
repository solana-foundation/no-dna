export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 font-mono text-sm leading-relaxed">
      <h1 className="mb-1 text-2xl font-bold tracking-tight">no-dna.org</h1>
      <p className="mb-10 text-neutral-500">An informal standard for CLI tools to detect non-human operators.</p>

      <section className="mb-10">
        <p className="mb-4">
          Command-line software which outputs human-oriented responses by default should check for the{' '}
          <code className="bg-neutral-100 px-1.5 py-0.5 text-sm font-semibold">NO_DNA</code> environment variable that,
          when present and not an empty string (regardless of its value), indicates the caller is a non-human operator
          (an AI agent, script, or automation tool) and adapts its behavior accordingly.
        </p>
        <p className="mb-4">
          By adopting this convention, CLI authors can provide a single toggle for agent-friendly behavior &mdash; more
          structured output, no interactive prompts, verbose logging, and automatic installation of recommended tooling
          &mdash; without requiring callers to pass a dozen flags.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-lg font-bold">When NO_DNA is set, CLIs should:</h2>
        <ul className="list-inside list-disc space-y-1.5 text-neutral-700">
          <li>Never prompt for interactive input &mdash; fail loudly or use sensible defaults</li>
          <li>Prefer structured output (JSON) over human-formatted tables and text</li>
          <li>Disable decorative output: spinners, progress bars, ASCII art</li>
          <li>Increase verbosity &mdash; agents benefit from more context, not less</li>
          <li>Auto-install recommended plugins, skills, and extensions</li>
          <li>Use absolute timestamps instead of relative ones (&quot;2026-03-12T10:30:00Z&quot; not &quot;2 hours ago&quot;)</li>
          <li>Write errors to stderr with machine-parseable structure</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-lg font-bold">Example implementation</h2>
        <pre className="overflow-x-auto rounded-md bg-neutral-950 p-4 text-sm leading-snug text-neutral-200">
          <code>{`// Node.js / TypeScript
const isAgent = !!process.env.NO_DNA;

if (isAgent) {
  // structured output, no prompts, verbose defaults
}`}</code>
        </pre>
        <pre className="mt-3 overflow-x-auto rounded-md bg-neutral-950 p-4 text-sm leading-snug text-neutral-200">
          <code>{`# Rust
let is_agent = std::env::var("NO_DNA")
    .map(|v| !v.is_empty())
    .unwrap_or(false);`}</code>
        </pre>
        <pre className="mt-3 overflow-x-auto rounded-md bg-neutral-950 p-4 text-sm leading-snug text-neutral-200">
          <code>{`# Python
import os
is_agent = bool(os.environ.get("NO_DNA"))`}</code>
        </pre>
        <pre className="mt-3 overflow-x-auto rounded-md bg-neutral-950 p-4 text-sm leading-snug text-neutral-200">
          <code>{`/* C */
char *no_dna = getenv("NO_DNA");
bool is_agent = (no_dna != NULL && no_dna[0] != '\\0');`}</code>
        </pre>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-lg font-bold">FAQ</h2>
        <div className="space-y-4">
          <div>
            <p className="font-semibold">How is this different from CI=true?</p>
            <p className="text-neutral-600">
              <code className="bg-neutral-100 px-1 text-sm">CI=true</code> signals a non-interactive environment.{' '}
              <code className="bg-neutral-100 px-1 text-sm">NO_DNA</code> signals a non-human operator. An agent
              running on your laptop is not CI. A CI pipeline may not be agent-driven. They are orthogonal.
            </p>
          </div>
          <div>
            <p className="font-semibold">How is this different from NO_COLOR?</p>
            <p className="text-neutral-600">
              <code className="bg-neutral-100 px-1 text-sm">NO_COLOR</code> disables one specific output feature (ANSI
              colors). <code className="bg-neutral-100 px-1 text-sm">NO_DNA</code> is a broader signal that affects
              output format, interactivity, verbosity, and default behavior. A tool can respect both.
            </p>
          </div>
          <div>
            <p className="font-semibold">Should user config files override NO_DNA?</p>
            <p className="text-neutral-600">
              Yes. Explicit user configuration and command-line flags should always take precedence over{' '}
              <code className="bg-neutral-100 px-1 text-sm">NO_DNA</code>.
            </p>
          </div>
          <div>
            <p className="font-semibold">What does DNA stand for?</p>
            <p className="text-neutral-600">
              It doesn&apos;t need to stand for anything &mdash; the metaphor is biological. If there&apos;s no DNA, the
              operator isn&apos;t human. But if you like acronyms: <em>Do Not Assume</em> (a human is present).
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-lg font-bold">Software supporting NO_DNA</h2>
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
              <tr className="border-b border-neutral-100">
                <td className="py-2 pr-4">Anchor</td>
                <td className="py-2 pr-4">Solana development framework</td>
                <td className="py-2">2026</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-neutral-400">
          To add your software to this list, submit a pull request.
        </p>
      </section>

      <footer className="border-t border-neutral-200 pt-6 text-neutral-400">
        <p>
          This is an informal standard. There is no committee, no RFC, no bureaucracy. If your CLI is used by agents,
          check for <code className="bg-neutral-100 px-1 text-sm text-neutral-600">NO_DNA</code> and do the right
          thing.
        </p>
      </footer>
    </main>
  );
}
