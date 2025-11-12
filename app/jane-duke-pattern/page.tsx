import Script from 'next/script';

export default function JaneDukePatternPage() {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com" />
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
            body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
        }
      `}} />

      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-8">
        <div className="max-w-5xl mx-auto">

          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-slate-900 mb-4">
              The Jane Duke Pattern
            </h1>
            <p className="text-2xl text-slate-700">
              Complete Non-Acknowledgment as Cover-Up Strategy (as alleged)
            </p>
          </div>

          {/* The Coordination - Two Consul-Generals */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border-4 border-red-500">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-4xl">👥</span>
              <h2 className="text-3xl font-bold text-slate-900">The Alleged Coordination</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Ana Rojas */}
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-400">
                <div className="text-center">
                  <div className="bg-red-500 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    AR
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Ana Rojas</h3>
                  <p className="text-lg text-slate-700 font-semibold">Consul-General</p>
                  <p className="text-lg text-slate-700 mb-4">Costa Rica (Los Angeles)</p>
                  <div className="bg-white rounded p-3 text-sm text-slate-800 text-left">
                    <p className="font-bold mb-2">Alleged Actions (per family evidence):</p>
                    <p>• Created/relied on fake court orders</p>
                    <p>• Named Australian Consulate in orders</p>
                    <p>• Imposed unprecedented requirements</p>
                  </div>
                </div>
              </div>

              {/* Jane Duke */}
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-400">
                <div className="text-center">
                  <div className="bg-blue-500 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    JD
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Jane Duke</h3>
                  <p className="text-lg text-slate-700 font-semibold">Consul-General</p>
                  <p className="text-lg text-slate-700 mb-4">Australia (Los Angeles)</p>
                  <div className="bg-white rounded p-3 text-sm text-slate-800 text-left">
                    <p className="font-bold mb-2">Alleged Actions/Omissions (per correspondence records):</p>
                    <p>• Australian Consulate included in fake orders</p>
                    <p>• Orders required unprecedented $30,000 bond, passport surrender, flight restrictions</p>
                    <p>• Maintained systematic non-acknowledgment of evidence</p>
                    <p>• Never verified orders despite consulate being named</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Connection */}
            <div className="mt-8 bg-yellow-400 rounded-xl p-6 border-2 border-yellow-600">
              <p className="text-xl font-bold text-slate-900 mb-3 text-center">
                WHY THIS PATTERN MATTERS:
              </p>
              <p className="text-lg text-slate-800 mb-3">
                <strong>The Deduction:</strong> Two Consul-Generals (Costa Rica and Australia) at the same diplomatic level would naturally interact.
                The inclusion of the Australian Consulate in fake orders appears designed to:
              </p>
              <ul className="text-slate-800 ml-4 space-y-2">
                <li>• Borrow legitimacy from a trusted government institution</li>
                <li>• Deceive Australian citizens Mike and Lynne about order validity</li>
                <li>• Prevent the Australian Consulate from protecting their three citizens by implicating them in the orders</li>
              </ul>
              <p className="text-sm text-slate-700 mt-3 italic">
                Note: Direct coordination between Rojas and Duke has not been confirmed but is suggested by the evidence pattern.
              </p>
            </div>
          </div>

          {/* The Non-Acknowledgment Pattern */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-slate-700">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-4xl">📂</span>
              <h2 className="text-3xl font-bold text-slate-900">The Signature Pattern</h2>
            </div>

            <div className="bg-slate-100 rounded-xl p-6 mb-8">
              <p className="text-xl font-bold text-slate-900 mb-3 text-center">
                Not Standard Bureaucratic Evasion
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-100 rounded-lg p-4 border-2 border-green-500">
                  <p className="font-bold text-green-900 mb-2">Typical Response:</p>
                  <p className="text-slate-800">"We received your evidence and have referred it to the appropriate area."</p>
                  <p className="text-sm text-green-800 mt-2 italic">(Acknowledged, even if unhelpful)</p>
                </div>
                <div className="bg-red-100 rounded-lg p-4 border-2 border-red-500">
                  <p className="font-bold text-red-900 mb-2">Jane Duke Pattern:</p>
                  <p className="text-slate-800">Complete silence. Responds as if evidence never sent. Pretends questions don't exist.</p>
                  <p className="text-sm text-red-800 mt-2 italic">(Not acknowledged at all)</p>
                </div>
              </div>
            </div>

            {/* Evidence Timeline */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                22 Months of Complete Non-Acknowledgment
              </h3>

              {/* August 2023 */}
              <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-500">
                <p className="font-bold text-lg text-slate-900 mb-2">August 7, 2023</p>
                <p className="text-slate-800 mb-2">
                  <strong>Evidence Sent:</strong> LAPD Officer Diaz card stating "no valid RO on file",
                  documentation showing father given police clearance 90 minutes before arrest
                </p>
                <div className="bg-white rounded p-3 mt-2">
                  <p className="font-bold text-slate-900">Consulate Response:</p>
                  <p className="text-red-600 font-bold">NO ACKNOWLEDGMENT OF RECEIPT</p>
                </div>
              </div>

              {/* August-December 2023 */}
              <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-500">
                <p className="font-bold text-lg text-slate-900 mb-2">August-December 2023</p>
                <p className="text-slate-800 mb-2">
                  <strong>Evidence Sent:</strong> Repeated requests for verification of orders in CLETS/CARPOS
                  (would take 15 minutes to verify)
                </p>
                <div className="bg-white rounded p-3 mt-2">
                  <p className="font-bold text-slate-900">Consulate Response:</p>
                  <p className="text-red-600 font-bold">NO ACKNOWLEDGMENT OF VERIFICATION REQUEST</p>
                  <p className="text-slate-700 mt-1">Continued "custody dispute" dismissal only</p>
                </div>
              </div>

              {/* April 5, 2024 - Expanded */}
              <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-500">
                <p className="font-bold text-lg text-slate-900 mb-2">April 5, 2024</p>
                <p className="text-slate-800 mb-2">
                  <strong>Evidence Sent:</strong> 63GB of suppressed LAPD bodycam footage (obtained only by subpoena) confirming:
                </p>
                <ul className="text-slate-800 ml-4 mb-2">
                  <li>• Restraining orders not registered in CLETS (California's legal database)</li>
                  <li>• Australian citizen convicted for breaching non-existent order</li>
                  <li>• Written permission to return home excluded from trial evidence</li>
                </ul>
                <p className="text-slate-800 mb-2">
                  <strong>Family warned:</strong> This constitutes child abduction - Australian citizen Arlo taken without legal basis.
                  Ana Rojas has no legitimate custody claim and is evading accountability for documented child abuse.
                </p>
                <div className="bg-white rounded p-3 mt-2">
                  <p className="font-bold text-slate-900">Consulate Response:</p>
                  <p className="text-red-600 font-bold">NO ACKNOWLEDGMENT</p>
                  <p className="text-slate-700 mt-1">Dismissed as "custody battle" - refused to act</p>
                </div>
              </div>

              {/* May 2024 - Expert Reports */}
              <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-500">
                <p className="font-bold text-lg text-slate-900 mb-2">May 2024</p>
                <p className="text-slate-800 mb-2">
                  <strong>Evidence Sent:</strong> Three independent expert reports from:
                </p>
                <ul className="text-slate-800 ml-4 mb-2">
                  <li>• Former Police Chief</li>
                  <li>• CCTV Expert</li>
                  <li>• Attorney</li>
                </ul>
                <p className="text-slate-800 mb-2">
                  All confirming severe abuse by Rojas on Arlo (Australian citizen child)
                </p>
                <div className="bg-white rounded p-3 mt-2">
                  <p className="font-bold text-slate-900">Consulate Response (under Tanya):</p>
                  <p className="text-red-600 font-bold">NO ACKNOWLEDGMENT</p>
                  <p className="text-slate-700 mt-1">Continued "custody dispute" framing</p>
                </div>
              </div>

              {/* January 31, 2025 */}
              <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-500">
                <p className="font-bold text-lg text-slate-900 mb-2">January 31, 2025</p>
                <p className="text-slate-800 mb-2">
                  <strong>Independent Verification:</strong> Journalist Michael Volpe publishes investigation confirming
                  restraining orders don't exist in California legal system. Contacted LAPD, District Attorneys, and
                  Rojas's lawyer - none could provide valid orders or indicate where to find them.
                </p>
                <div className="bg-white rounded p-3 mt-2">
                  <p className="font-bold text-slate-900">DFAT Internal:</p>
                  <p className="text-slate-700">"Let's discuss today" (they knew internally)</p>
                </div>
                <div className="bg-white rounded p-3 mt-2">
                  <p className="font-bold text-slate-900">DFAT External Response to Family:</p>
                  <p className="text-red-600 font-bold">NO ACKNOWLEDGMENT</p>
                </div>
              </div>

              {/* June-July 2025 FOI */}
              <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-500">
                <p className="font-bold text-lg text-slate-900 mb-2">June-July 2025</p>
                <p className="text-slate-800 mb-2">
                  <strong>FOI Request:</strong> All communications between Ana Rojas and Australian Consulate/DFAT
                  during Jane Duke's tenure (April-December 2023)
                </p>
                <div className="bg-white rounded p-3 mt-2">
                  <p className="font-bold text-slate-900">DFAT Response:</p>
                  <p className="text-red-600 font-bold">DID NOT ACKNOWLEDGE QUESTION</p>
                  <p className="text-slate-700 mt-1">
                    Violated FOI statutory requirements - no search description, no document list,
                    no confirmation if communications exist.
                  </p>
                </div>
              </div>
            </div>

            {/* The Pattern Conclusion */}
            <div className="mt-8 bg-slate-900 rounded-xl p-6 text-white">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-4xl">⚠️</span>
                <h3 className="text-2xl font-bold">The Evidence Suggests Deliberate Cover-Up</h3>
              </div>
              <div className="space-y-3 text-lg">
                <p>✓ 22 months of consistent non-acknowledgment pattern</p>
                <p>✓ Multiple pieces of documentary evidence submitted</p>
                <p>✓ Independent journalist verification</p>
                <p>✓ Three expert reports confirming abuse</p>
                <p>✓ 63GB of bodycam documentation</p>
                <p>✓ Evidence of child abduction of Australian citizen</p>
                <p className="text-yellow-400 font-bold text-xl mt-4">
                  → ALL completely unacknowledged. Not assessed. Not rejected. Simply treated as if they never existed.
                </p>
                <p className="text-xl font-bold mt-6 text-center">
                  The pattern suggests: This is deliberate institutional cover-up, not bureaucratic failure.
                </p>
              </div>
            </div>
          </div>

          {/* The Result */}
          <div className="mt-8 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white shadow-2xl border-4 border-yellow-400">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">🛡️</span>
              <h2 className="text-3xl font-bold">Outcome Noted</h2>
            </div>
            <div className="text-center space-y-4 text-xl">
              <p className="font-bold">Following this 22-month pattern...</p>
              <p className="text-3xl font-black">Jane Duke was appointed:</p>
              <p className="text-2xl bg-white text-green-700 rounded-lg p-4 inline-block">
                Ambassador for Counter Modern Slavery,<br/>
                People Smuggling and Human Trafficking
              </p>
              <p className="text-sm mt-6 italic">
                (Appointment note included for context; characterization reflects submitter's view)
              </p>
            </div>
          </div>

          {/* Attribution */}
          <div className="mt-8 text-center text-slate-600 text-sm">
            <p className="font-bold">Attribution & Context:</p>
            <p>The descriptions above reflect the family's records, submissions, and perspective.</p>
            <p>Readers should treat them as allegations pending official verification.</p>
          </div>

        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "The Jane Duke Pattern — Non-Acknowledgment as Cover-Up",
  robots: "noindex, nofollow"
};