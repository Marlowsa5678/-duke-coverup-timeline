import './styles.module.css';

export default function JaneDukePatternPage() {
  return (
    <div className="wrap">
      <div className="card">
        <div className="pill">Private • Confidential • For review</div>
        <h1>The Jane Duke Pattern</h1>
        <h2>Complete Non-Acknowledgment as a Cover-Up Strategy (as alleged)</h2>

        <h3>👥 The Coordination (as alleged)</h3>
        <div className="grid two">
          <div>
            <p><strong>AR — Ana Rojas</strong><br/><span className="muted">Consul-General, Costa Rica (Los Angeles)</span></p>
            <p className="muted">Alleged actions (per family evidence submissions):</p>
            <ul>
              <li>Created/relied on fake court orders</li>
              <li>Named the Australian Consulate in those orders</li>
              <li>Imposed unprecedented requirements</li>
            </ul>
          </div>
          <div>
            <p><strong>JD — Jane Duke</strong><br/><span className="muted">Consul-General, Australia (Los Angeles)</span></p>
            <p className="muted">Alleged actions/omissions (per correspondence records):</p>
            <ul>
              <li>Named in the purported orders</li>
              <li>Did not verify despite being named</li>
              <li>Maintained systematic non-acknowledgment</li>
            </ul>
          </div>
        </div>

        <div className="callout">
          <strong>Why this allegedly worked:</strong> Two Consul-Generals coordinating is niche/unusual; most reviewers would not think to test for coordination at that level, creating cover.
        </div>

        <div className="divider"></div>

        <h3>📂 The Signature Pattern</h3>
        <p><span className="badge">Typical evasion:</span> "We received your evidence and have referred it…" (acknowledged, even if unhelpful)</p>
        <p><span className="badge">Pattern described here:</span> Silence or replies that ignore the question entirely (no acknowledgment)</p>

        <h3>🗓️ Timeline of Non-Acknowledgment (22 months)</h3>
        <ul>
          <li><strong>Aug 7, 2023:</strong> Evidence sent (e.g., LAPD card noting "no valid RO on file"; police clearance 90 minutes pre-arrest). <em>Reported response:</em> No acknowledgment of receipt.</li>
          <li><strong>Aug–Dec 2023:</strong> Repeated requests to verify orders in CLETS/CARPOS (~15-minute task). <em>Reported response:</em> No acknowledgment of the specific verification; "custody dispute" boilerplate.</li>
          <li><strong>Apr 5, 2024:</strong> ≈63 GB LAPD body-cam + three independent expert reports submitted. <em>Reported response (office under Tanya):</em> No acknowledgment; continued "custody dispute" framing.</li>
          <li><strong>Jan 31, 2025:</strong> Journalist Michael Volpe publishes piece asserting the orders don't exist in CA systems. <em>Internal note (per family):</em> "Let's discuss today." <em>External response:</em> No acknowledgment.</li>
          <li><strong>Jun–Jul 2025:</strong> FOI request re: communications (AR ↔ Consulate/DFAT during Duke tenure). <em>Reported response:</em> Did not acknowledge core request (no search description/doc list/existence confirmation).</li>
        </ul>

        <h3>⚠️ Why this looks deliberate (submitter's inference)</h3>
        <ul>
          <li>22-month consistency</li>
          <li>Multiple documentary submissions</li>
          <li>Independent publication</li>
          <li>Three expert reports</li>
          <li>≈63 GB body-cam</li>
        </ul>
        <p>All reportedly unacknowledged (not assessed/rejected—simply not engaged). <em>Inference:</em> a cover-up pattern, not routine failure.</p>

        <h3>🛡️ Outcome noted</h3>
        <p>Following the period above, <strong>Jane Duke</strong> was appointed <em>Ambassador for Counter-Modern-Slavery, People Smuggling & Human Trafficking</em>. <span className="muted">(Appointment note included for context; characterization reflects submitter's view.)</span></p>

        <p className="footer"><strong>Attribution & context:</strong> The descriptions reflect the family's records, submissions, and perspective. Readers should treat them as assertions pending official verification.</p>
      </div>
    </div>
  );
}

export const metadata = {
  title: "The Jane Duke Pattern — Non-Acknowledgment as Cover-Up",
  robots: "noindex, nofollow"
};