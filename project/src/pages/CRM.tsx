import { useState } from 'react';
import { Search, CheckCircle, Clock, Flame, XCircle, PhoneOff, X } from 'lucide-react';

const N8N = 'https://n8n.srv1363008.hstgr.cloud';

const STATUSES = [
  { value: 'interested', label: 'Interested', icon: Flame, color: 'bg-green-600 hover:bg-green-500 text-white' },
  { value: 'not_now', label: 'Not Now', icon: Clock, color: 'bg-yellow-600 hover:bg-yellow-500 text-white' },
  { value: 'no_answer', label: 'No Answer', icon: PhoneOff, color: 'bg-slate-600 hover:bg-slate-500 text-white' },
  { value: 'closed', label: 'Closed ✓', icon: CheckCircle, color: 'bg-blue-600 hover:bg-blue-500 text-white' },
  { value: 'cold', label: 'Not Interested', icon: XCircle, color: 'bg-red-700 hover:bg-red-600 text-white' },
];

const STATUS_BADGES: Record<string, string> = {
  pending: 'bg-slate-700 text-slate-300',
  contacted: 'bg-blue-500/20 text-blue-300',
  interested: 'bg-green-500/20 text-green-300',
  not_now: 'bg-yellow-500/20 text-yellow-300',
  hot: 'bg-orange-500/20 text-orange-300',
  cold: 'bg-slate-600/30 text-slate-400',
  closed: 'bg-cyan-500/20 text-cyan-300',
  no_answer: 'bg-slate-600/30 text-slate-400',
};

interface Lead {
  id: number;
  place_id: string;
  name: string;
  city: string;
  niche: string;
  phone: string;
  status: string;
  priority_score: number;
  outreach_message: string;
  tier: string;
}

export default function CRM() {
  const [query, setQuery] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState<string | null>(null);
  const [toast, setToast] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  async function search() {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const r = await fetch(`${N8N}/webhook/crm-search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ q: query.trim() }),
      });
      const data = await r.json();
      setLeads(data.leads || []);
      if (!data.leads?.length) setToast('No leads found');
    } catch {
      setToast('Connection error');
    }
    setLoading(false);
  }

  async function updateStatus(lead: Lead, status: string) {
    setUpdating(lead.place_id + status);
    try {
      const r = await fetch(`${N8N}/webhook/crm-update`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ place_id: lead.place_id, status }),
      });
      const data = await r.json();
      if (data.ok) {
        setLeads(prev => prev.map(l => l.place_id === lead.place_id ? { ...l, status } : l));
        setToast(`${lead.name} → ${status}`);
        setTimeout(() => setToast(''), 3000);
      }
    } catch {
      setToast('Update failed');
    }
    setUpdating(null);
  }

  function copyMessage(msg: string, id: string) {
    navigator.clipboard.writeText(msg);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="min-h-screen px-4 py-20 max-w-2xl mx-auto">
      <div className="mb-8">
        <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">Internal Tool</p>
        <h1 className="text-3xl font-bold text-slate-100 mb-1">Lead Status</h1>
        <p className="text-slate-500 text-sm">Search by phone number or business name to update status.</p>
      </div>

      {/* Search */}
      <div className="flex gap-2 mb-8">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && search()}
          placeholder="Phone number or business name..."
          className="flex-1 px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 text-sm"
        />
        <button
          onClick={search}
          disabled={loading}
          className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
        >
          <Search size={18} />
        </button>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-slate-800 border border-slate-600 rounded-xl px-5 py-3 text-slate-200 text-sm z-50 shadow-xl">
          {toast}
        </div>
      )}

      {/* Results */}
      <div className="space-y-4">
        {loading && (
          <div className="text-center py-12 text-slate-500 text-sm">Searching...</div>
        )}
        {!loading && leads.map(lead => (
          <div key={lead.place_id} className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-5">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-100 text-sm leading-tight truncate">{lead.name}</p>
                <p className="text-slate-500 text-xs mt-0.5">{lead.city} · {lead.niche} · score {lead.priority_score}</p>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0 ${STATUS_BADGES[lead.status] || STATUS_BADGES.pending}`}>
                {lead.status}
              </span>
            </div>

            <p className="text-slate-400 text-xs mb-3 font-mono">{lead.phone}</p>

            {/* Outreach message */}
            <div className="bg-slate-800/50 rounded-xl p-3 mb-4">
              <p className="text-slate-400 text-xs leading-relaxed">{lead.outreach_message}</p>
              <button
                onClick={() => copyMessage(lead.outreach_message, lead.place_id)}
                className="mt-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {copied === lead.place_id ? '✓ Copied' : 'Copy message'}
              </button>
            </div>

            {/* Status buttons */}
            <div className="flex flex-wrap gap-2">
              {STATUSES.map(({ value, label, icon: Icon, color }) => (
                <button
                  key={value}
                  onClick={() => updateStatus(lead, value)}
                  disabled={updating === lead.place_id + value || lead.status === value}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all disabled:opacity-40 ${
                    lead.status === value ? 'ring-2 ring-white/30 ' : ''
                  }${color}`}
                >
                  <Icon size={12} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
