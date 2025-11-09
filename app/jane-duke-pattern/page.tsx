export default function JaneDukePatternPage() {
  return (
    <>
      <style jsx global>{`
        :root { --bg:#0b0c10; --card:#121318; --ink:#e8e8ea; --muted:#a8acb3; --accent:#7aa2ff; --warn:#ffcc66; }
        *{box-sizing:border-box}
        body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif}
        .wrap{max-width:880px;margin:40px auto;padding:24px}
        .card{background:var(--card);border:1px solid #1c1e26;border-radius:16px;padding:28px;box-shadow:0 10px 30px rgba(0,0,0,.25)}
        h1,h2,h3{line-height:1.2;margin:0 0 .6em}
        h1{font-size:clamp(24px,3.2vw,36px)}
        h2{font-size:clamp(18px,2.4vw,24px);color:var(--accent)}
        h3{font-size:clamp(16px,2vw,20px)}
        p{margin:.6em 0}
        .muted{color:var(--muted)}
        .pill{display:inline-block;background:#1b1e27;border:1px solid #262a36;color:var(--muted);padding:2px 10px;border-radius:999px;font-size:12px;letter-spacing:.02em}
        .grid{display:grid;gap:16px}
        @media (min-width:720px){ .grid.two{grid-template-columns:1fr 1fr} }
        ul{margin:.4em 0 .8em 1.2em}
        li{margin:.25em 0}
        .callout{background:#1a1720;border-left:4px solid var(--warn);padding:12px 14px;border-radius:8px}
        .divider{height:1px;background:#1d2029;margin:20px 0}
        .badge{font-weight:600;color:var(--accent)}
        .footer{margin-top:18px;font-size:13px;color:var(--muted)}
      `}</style>
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
    </>
  );
}

export const metadata = {
  title: "The Jane Duke Pattern — Non-Acknowledgment as Cover-Up",
  robots: "noindex, nofollow"
};