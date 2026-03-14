export default function Pay() {
  const walletAddress = '0x45361Bd89Edc1d7C69e2D13a1c314f92c71CF4CD';
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${walletAddress}`;

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-100 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              Pay Securely
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Send USDT directly to our wallet — instant, no middlemen.
            </p>
          </div>

          <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 shadow-xl shadow-cyan-500/10">

            {/* Network badge */}
            <div className="flex justify-center mb-8">
              <span className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
                USDT · Polygon Network
              </span>
            </div>

            {/* QR Code */}
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-white rounded-2xl shadow-lg shadow-cyan-500/20">
                <img
                  src={qrUrl}
                  alt="Wallet QR Code"
                  width={200}
                  height={200}
                />
              </div>
            </div>

            {/* Wallet address */}
            <div className="mb-8">
              <p className="text-slate-400 text-sm text-center mb-3">Wallet Address</p>
              <div className="flex items-center gap-3 bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3">
                <p className="text-slate-200 text-sm font-mono flex-1 break-all">{walletAddress}</p>
                <button
                  onClick={() => navigator.clipboard.writeText(walletAddress)}
                  className="shrink-0 px-3 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 text-cyan-400 text-xs font-medium rounded-lg transition-all duration-200"
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-slate-950/30 border border-slate-700/30 rounded-xl p-5">
              <p className="text-slate-300 text-sm font-medium mb-3">How to pay:</p>
              <ol className="space-y-2 text-slate-400 text-sm">
                <li className="flex gap-2"><span className="text-cyan-400 font-bold">1.</span> Open your crypto wallet (MetaMask, Trust Wallet, etc.)</li>
                <li className="flex gap-2"><span className="text-cyan-400 font-bold">2.</span> Select USDT on the <span className="text-cyan-400">Polygon network</span></li>
                <li className="flex gap-2"><span className="text-cyan-400 font-bold">3.</span> Scan the QR code or paste the wallet address above</li>
                <li className="flex gap-2"><span className="text-cyan-400 font-bold">4.</span> Enter the amount and confirm — arrives in seconds</li>
              </ol>
            </div>

            {/* Warning */}
            <p className="text-slate-500 text-xs text-center mt-6">
              ⚠️ Only send USDT on the Polygon network. Sending other tokens or using a different network may result in permanent loss of funds.
            </p>

          </div>

          {/* Contact */}
          <p className="text-center text-slate-400 text-sm mt-8">
            Questions? Contact us at{' '}
            <a href="mailto:giannis@coreflowautomation.net" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              giannis@coreflowautomation.net
            </a>
          </p>

        </div>
      </section>
    </div>
  );
}
