import styles from './page.module.css';

export default function JaneDukePatternPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        {/* Title */}
        <div className={styles.title}>
          <h1>The Jane Duke Pattern</h1>
          <p>Complete Non-Acknowledgment as Cover-Up Strategy (as alleged)</p>
        </div>

        {/* The Coordination - Two Consul-Generals */}
        <div className={styles.coordinationCard}>
          <div className={styles.sectionHeader}>
            <span>👥</span>
            <h2>The Alleged Coordination</h2>
          </div>

          <div className={styles.consulGrid}>
            {/* Ana Rojas */}
            <div className={`${styles.consulCard} ${styles.rojas}`}>
              <div className={`${styles.avatar} ${styles.rojas}`}>AR</div>
              <h3 className={styles.consulName}>Ana Rojas</h3>
              <p className={styles.consulTitle}>Consul-General</p>
              <p className={styles.consulLocation}>Costa Rica (Los Angeles)</p>
              <div className={styles.consulActions}>
                <strong>Alleged Actions (per family evidence):</strong>
                <p>• Created/relied on fake court orders</p>
                <p>• Named Australian Consulate in orders</p>
                <p>• Imposed unprecedented requirements</p>
              </div>
            </div>

            {/* Jane Duke */}
            <div className={`${styles.consulCard} ${styles.duke}`}>
              <div className={`${styles.avatar} ${styles.duke}`}>JD</div>
              <h3 className={styles.consulName}>Jane Duke</h3>
              <p className={styles.consulTitle}>Consul-General</p>
              <p className={styles.consulLocation}>Australia (Los Angeles)</p>
              <div className={styles.consulActions}>
                <strong>Alleged Actions/Omissions (per correspondence records):</strong>
                <p>• Australian Consulate included in fake orders</p>
                <p>• Orders required unprecedented $30,000 bond, passport surrender, flight restrictions</p>
                <p>• Maintained systematic non-acknowledgment of evidence</p>
                <p>• Never verified orders despite consulate being named</p>
              </div>
            </div>
          </div>

          {/* The Connection */}
          <div className={styles.connectionBox}>
            <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: '1.25rem'}}>
              WHY THIS PATTERN MATTERS:
            </p>
            <p>
              <strong>The Deduction:</strong> Two Consul-Generals (Costa Rica and Australia) at the same diplomatic level would naturally interact.
              The inclusion of the Australian Consulate in fake orders appears designed to:
            </p>
            <ul>
              <li>• Borrow legitimacy from a trusted government institution</li>
              <li>• Deceive Australian citizens Mike and Lynne about order validity</li>
              <li>• Prevent the Australian Consulate from protecting their three citizens by implicating them in the orders</li>
            </ul>
            <p style={{fontSize: '0.875rem', fontStyle: 'italic', marginTop: '0.75rem'}}>
              Note: Direct coordination between Rojas and Duke has not been confirmed but is suggested by the evidence pattern.
            </p>
          </div>
        </div>

        {/* The Non-Acknowledgment Pattern */}
        <div className={styles.patternCard}>
          <div className={styles.sectionHeader}>
            <span>📂</span>
            <h2>The Signature Pattern</h2>
          </div>

          <div className={styles.comparisonBox}>
            <p style={{textAlign: 'center', fontSize: '1.25rem', fontWeight: 'bold'}}>
              Not Standard Bureaucratic Evasion
            </p>
            <div className={styles.comparisonGrid}>
              <div className={`${styles.responseType} ${styles.typical}`}>
                <p className={styles.typical}>Typical Response:</p>
                <p>"We received your evidence and have referred it to the appropriate area."</p>
                <p style={{color: '#166534'}}>(Acknowledged, even if unhelpful)</p>
              </div>
              <div className={`${styles.responseType} ${styles.duke}`}>
                <p className={styles.duke}>Jane Duke Pattern:</p>
                <p>Complete silence. Responds as if evidence never sent. Pretends questions don't exist.</p>
                <p style={{color: '#991b1b'}}>(Not acknowledged at all)</p>
              </div>
            </div>
          </div>

          {/* Evidence Timeline */}
          <div className={styles.timeline}>
            <h3>22 Months of Complete Non-Acknowledgment</h3>

            {/* August 2023 */}
            <div className={styles.timelineEntry}>
              <p className={styles.timelineDate}>August 7, 2023</p>
              <div className={styles.timelineContent}>
                <strong>Evidence Sent:</strong> LAPD Officer Diaz card stating "no valid RO on file",
                documentation showing father given police clearance 90 minutes before arrest
              </div>
              <div className={styles.responseBox}>
                <p><strong>Consulate Response:</strong></p>
                <p className={styles.noResponse}>NO ACKNOWLEDGMENT OF RECEIPT</p>
              </div>
            </div>

            {/* August-December 2023 */}
            <div className={styles.timelineEntry}>
              <p className={styles.timelineDate}>August-December 2023</p>
              <div className={styles.timelineContent}>
                <strong>Evidence Sent:</strong> Repeated requests for verification of orders in CLETS/CARPOS
                (would take 15 minutes to verify)
              </div>
              <div className={styles.responseBox}>
                <p><strong>Consulate Response:</strong></p>
                <p className={styles.noResponse}>NO ACKNOWLEDGMENT OF VERIFICATION REQUEST</p>
                <p>Continued "custody dispute" dismissal only</p>
              </div>
            </div>

            {/* April 5, 2024 - Expanded */}
            <div className={styles.timelineEntry}>
              <p className={styles.timelineDate}>April 5, 2024</p>
              <div className={styles.timelineContent}>
                <strong>Evidence Sent:</strong> 63GB of suppressed LAPD bodycam footage (obtained only by subpoena) confirming:
                <ul>
                  <li>• Restraining orders not registered in CLETS (California's legal database)</li>
                  <li>• Australian citizen convicted for breaching non-existent order</li>
                  <li>• Written permission to return home excluded from trial evidence</li>
                </ul>
                <strong>Family warned:</strong> This constitutes child abduction - Australian citizen Arlo taken without legal basis.
                Ana Rojas has no legitimate custody claim and is evading accountability for documented child abuse.
              </div>
              <div className={styles.responseBox}>
                <p><strong>Consulate Response:</strong></p>
                <p className={styles.noResponse}>NO ACKNOWLEDGMENT</p>
                <p>Dismissed as "custody battle" - refused to act</p>
              </div>
            </div>

            {/* May 2024 - Expert Reports */}
            <div className={styles.timelineEntry}>
              <p className={styles.timelineDate}>May 2024</p>
              <div className={styles.timelineContent}>
                <strong>Evidence Sent:</strong> Three independent expert reports from:
                <ul>
                  <li>• Former Police Chief</li>
                  <li>• CCTV Expert</li>
                  <li>• Attorney</li>
                </ul>
                All confirming severe abuse by Rojas on Arlo (Australian citizen child)
              </div>
              <div className={styles.responseBox}>
                <p><strong>Consulate Response (under Tanya):</strong></p>
                <p className={styles.noResponse}>NO ACKNOWLEDGMENT</p>
                <p>Continued "custody dispute" framing</p>
              </div>
            </div>

            {/* January 31, 2025 */}
            <div className={styles.timelineEntry}>
              <p className={styles.timelineDate}>January 31, 2025</p>
              <div className={styles.timelineContent}>
                <strong>Independent Verification:</strong> Journalist Michael Volpe publishes investigation confirming
                restraining orders don't exist in California legal system. Contacted LAPD, District Attorneys, and
                Rojas's lawyer - none could provide valid orders or indicate where to find them.
              </div>
              <div className={styles.responseBox}>
                <p><strong>DFAT Internal:</strong></p>
                <p>"Let's discuss today" (they knew internally)</p>
              </div>
              <div className={styles.responseBox}>
                <p><strong>DFAT External Response to Family:</strong></p>
                <p className={styles.noResponse}>NO ACKNOWLEDGMENT</p>
              </div>
            </div>

            {/* June-July 2025 FOI */}
            <div className={styles.timelineEntry}>
              <p className={styles.timelineDate}>June-July 2025</p>
              <div className={styles.timelineContent}>
                <strong>FOI Request:</strong> All communications between Ana Rojas and Australian Consulate/DFAT
                during Jane Duke's tenure (April-December 2023)
              </div>
              <div className={styles.responseBox}>
                <p><strong>DFAT Response:</strong></p>
                <p className={styles.noResponse}>DID NOT ACKNOWLEDGE QUESTION</p>
                <p>Violated FOI statutory requirements - no search description, no document list,
                no confirmation if communications exist.</p>
              </div>
            </div>
          </div>

          {/* The Pattern Conclusion */}
          <div className={styles.conclusionBox}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem'}}>
              <span style={{fontSize: '2rem'}}>⚠️</span>
              <h3>The Evidence Suggests Deliberate Cover-Up</h3>
            </div>
            <ul>
              <li>✓ 22 months of consistent non-acknowledgment pattern</li>
              <li>✓ Multiple pieces of documentary evidence submitted</li>
              <li>✓ Independent journalist verification</li>
              <li>✓ Three expert reports confirming abuse</li>
              <li>✓ 63GB of bodycam documentation</li>
              <li>✓ Evidence of child abduction of Australian citizen</li>
            </ul>
            <p className={styles.highlightText}>
              → ALL completely unacknowledged. Not assessed. Not rejected. Simply treated as if they never existed.
            </p>
            <p style={{fontSize: '1.25rem', fontWeight: 'bold', marginTop: '1.5rem', textAlign: 'center'}}>
              The pattern suggests: This is deliberate institutional cover-up, not bureaucratic failure.
            </p>
          </div>
        </div>

        {/* The Result */}
        <div className={styles.resultCard}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem'}}>
            <span style={{fontSize: '2rem'}}>🛡️</span>
            <h2>Outcome Noted</h2>
          </div>
          <p style={{fontSize: '1.25rem', fontWeight: 'bold'}}>Following this 22-month pattern...</p>
          <p style={{fontSize: '1.875rem', fontWeight: '900', margin: '1rem 0'}}>Jane Duke was appointed:</p>
          <div className={styles.appointmentBox}>
            Ambassador for Counter Modern Slavery,<br/>
            People Smuggling and Human Trafficking
          </div>
          <p style={{fontSize: '0.875rem', fontStyle: 'italic', marginTop: '1.5rem'}}>
            (Appointment note included for context; characterization reflects submitter's view)
          </p>
        </div>

        {/* Attribution */}
        <div className={styles.attribution}>
          <p><strong>Attribution & Context:</strong></p>
          <p>The descriptions above reflect the family's records, submissions, and perspective.</p>
          <p>Readers should treat them as allegations pending official verification.</p>
        </div>

      </div>
    </div>
  );
}

export const metadata = {
  title: "The Jane Duke Pattern — Non-Acknowledgment as Cover-Up",
  robots: "noindex, nofollow"
};