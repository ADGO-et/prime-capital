"use client";

import { FormEvent, useState } from "react";

type OrderForm = {
  clientName: string; idNumber: string; csdAccountNumber: string; symbol: string;
  side: "BUY" | "SELL"; type: "MARKET" | "LIMIT" | "STOP" | "STOP_LIMIT";
  limitPrice: string; stopPrice: string; quantity: string; timeInForce: "DAY" | "GTC" | "GTD";
  goodTillDate: string; clientSignature: string; clientSignatureDate: string; receivedVia: "In Person" | "Neway App";
};

const initialForm: OrderForm = {
  clientName: "", idNumber: "", csdAccountNumber: "", symbol: "", side: "BUY", type: "MARKET",
  limitPrice: "", stopPrice: "", quantity: "", timeInForce: "DAY", goodTillDate: "",
  clientSignature: "", clientSignatureDate: new Date().toISOString().slice(0, 10), receivedVia: "In Person",
};

const inputClass = "mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2014FF] focus:bg-white focus:ring-2 focus:ring-blue-100";
const labelClass = "block text-xs font-bold uppercase tracking-wide text-slate-700";

export default function GiveOrderPage() {
  const [form, setForm] = useState<OrderForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(false);
  const [error, setError] = useState("");
  const update = <K extends keyof OrderForm>(key: K, value: OrderForm[K]) => setForm((current) => ({ ...current, [key]: value }));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(""); setResult(false); setIsSubmitting(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/orders/submit`, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Could not submit your order. Please try again.");
      setResult(true); setForm(initialForm);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Could not submit your order. Please try again.");
    } finally { setIsSubmitting(false); }
  }

  if (result) return <main className="min-h-screen bg-slate-50 px-4 py-16"><div className="mx-auto max-w-lg rounded-3xl bg-white p-8 text-center shadow-xl"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-700">✓</div><h1 className="mt-5 text-2xl font-extrabold text-slate-900">Order submitted</h1><p className="mt-2 text-slate-600">Thank you. Prime Capital has received your trade order and will review it shortly.</p><button onClick={() => setResult(false)} className="mt-6 rounded-xl bg-[#01016F] px-5 py-3 text-sm font-bold text-white">Give another order</button></div></main>;

  return <main className="min-h-screen bg-[#f5f7fc] pb-20 text-slate-900">
    <section className="relative isolate overflow-hidden bg-[#01016F] px-4 py-20 text-white sm:py-28" style={{ backgroundImage: "linear-gradient(90deg, rgba(1,1,111,.96), rgba(12,10,166,.88)), url('/herobg.png')", backgroundPosition: "center", backgroundSize: "cover" }}><div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl" /><div className="relative mx-auto max-w-5xl"><p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-200">Prime Capital S.C. · Brokerage Services</p><div className="mt-7 grid gap-8 md:grid-cols-[1.5fr_.75fr] md:items-end"><div><h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">Place your trade order with clarity.</h1><p className="mt-6 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">Send a secure buy or sell instruction to our brokerage team. We will review the order and keep you informed of its status.</p></div><div className="border-l border-white/25 pl-5 text-sm leading-relaxed text-blue-100"><p className="font-bold uppercase tracking-wider text-white">Trading notice</p><p className="mt-2">Orders received after 9:00 local time are processed in the next trading session.</p></div></div></div></section>
    <section className="relative z-10 mx-auto -mt-7 max-w-5xl px-4"><div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-blue-950/10 sm:grid-cols-3 sm:p-5"><div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#01016F] text-xs font-extrabold text-white">01</span><div><p className="text-xs font-bold text-slate-900">Account details</p><p className="text-xs text-slate-500">Identify your account</p></div></div><div className="flex items-center gap-3 border-slate-100 sm:border-x sm:px-5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-extrabold text-[#01016F]">02</span><div><p className="text-xs font-bold text-slate-900">Order instruction</p><p className="text-xs text-slate-500">Choose how to trade</p></div></div><div className="flex items-center gap-3 sm:pl-5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-extrabold text-[#01016F]">03</span><div><p className="text-xs font-bold text-slate-900">Confirm & submit</p><p className="text-xs text-slate-500">Authorize your order</p></div></div></div></section>
    <form onSubmit={submit} className="mx-auto mt-8 max-w-5xl border border-slate-200 bg-white px-5 py-2 shadow-sm sm:px-10">
      <section className="border-b border-slate-100 py-8"><h2 className="text-lg font-extrabold text-[#01016F]">Client and account details</h2><div className="mt-6 grid gap-5 md:grid-cols-2"><label className={labelClass}>Client name<input required value={form.clientName} onChange={(e) => update("clientName", e.target.value)} className={inputClass} /></label><label className={labelClass}>Fayda / ID / Passport<input required value={form.idNumber} onChange={(e) => update("idNumber", e.target.value)} className={inputClass} /></label><label className={labelClass}>CSD account number<input required value={form.csdAccountNumber} onChange={(e) => update("csdAccountNumber", e.target.value)} className={inputClass} /></label><label className={labelClass}>Symbol of security<input required value={form.symbol} onChange={(e) => update("symbol", e.target.value.toUpperCase())} placeholder="e.g. EBC" className={inputClass} /></label></div></section>
      <section className="border-b border-slate-100 py-8"><h2 className="text-lg font-extrabold text-[#01016F]">Order instruction</h2><div className="mt-6 grid gap-6 lg:grid-cols-2"><fieldset><legend className={labelClass}>Side</legend><div className="mt-2 flex gap-3">{(["BUY", "SELL"] as const).map((side) => <label key={side} className={`cursor-pointer rounded-xl border px-5 py-3 text-sm font-bold ${form.side === side ? "border-[#2014FF] bg-blue-50 text-[#01016F]" : "border-slate-200 text-slate-600"}`}><input className="sr-only" type="radio" checked={form.side === side} onChange={() => update("side", side)} />{side}</label>)}</div></fieldset><label className={labelClass}>Quantity<input required inputMode="decimal" value={form.quantity} onChange={(e) => update("quantity", e.target.value)} className={inputClass} /></label></div><fieldset className="mt-6"><legend className={labelClass}>Order type</legend><div className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{(["MARKET", "LIMIT", "STOP", "STOP_LIMIT"] as const).map((type) => <label key={type} className={`cursor-pointer rounded-xl border p-3 text-sm font-bold ${form.type === type ? "border-[#2014FF] bg-blue-50 text-[#01016F]" : "border-slate-200 text-slate-600"}`}><input className="sr-only" type="radio" checked={form.type === type} onChange={() => update("type", type)} />{type.replace("_", " ")}</label>)}</div></fieldset><div className="mt-5 grid gap-5 sm:grid-cols-2">{(form.type === "LIMIT" || form.type === "STOP_LIMIT") && <label className={labelClass}>Limit price<input required inputMode="decimal" value={form.limitPrice} onChange={(e) => update("limitPrice", e.target.value)} className={inputClass} /></label>}{(form.type === "STOP" || form.type === "STOP_LIMIT") && <label className={labelClass}>Stop price<input required inputMode="decimal" value={form.stopPrice} onChange={(e) => update("stopPrice", e.target.value)} className={inputClass} /></label>}</div></section>
      <section className="border-b border-slate-100 py-8"><h2 className="text-lg font-extrabold text-[#01016F]">Time in force and confirmation</h2><div className="mt-6 grid gap-5 md:grid-cols-2"><label className={labelClass}>Time in force<select value={form.timeInForce} onChange={(e) => update("timeInForce", e.target.value as OrderForm["timeInForce"])} className={inputClass}><option value="DAY">Day order (DAY)</option><option value="GTC">Good till canceled (GTC)</option><option value="GTD">Good till date (GTD)</option></select></label>{form.timeInForce === "GTD" && <label className={labelClass}>Good till date<input required type="date" value={form.goodTillDate} onChange={(e) => update("goodTillDate", e.target.value)} className={inputClass} /></label>}<label className={labelClass}>Received via<select value={form.receivedVia} onChange={(e) => update("receivedVia", e.target.value as OrderForm["receivedVia"])} className={inputClass}><option value="In Person">In Person</option><option value="Neway App">Neway App</option></select></label></div><div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">I confirm that this order is accurate and authorize its execution. Orders submitted after 9:00 local time (ESX official trading hours) will be processed on the next trading day. Prime Capital S.C. is not liable for resulting loss or missed investment opportunity.</div><div className="mt-6 grid gap-5 md:grid-cols-2"><label className={labelClass}>Client signature<input required value={form.clientSignature} onChange={(e) => update("clientSignature", e.target.value)} placeholder="Type your full legal name" className={inputClass} /></label><label className={labelClass}>Signature date<input required type="date" value={form.clientSignatureDate} onChange={(e) => update("clientSignatureDate", e.target.value)} className={inputClass} /></label></div></section>
      {error && <p role="alert" className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">{error}</p>}<button disabled={isSubmitting} className="mb-8 w-full rounded-2xl bg-gradient-to-r from-[#01016F] to-[#2014FF] px-6 py-4 text-sm font-extrabold text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? "Submitting order..." : "Submit trade order"}</button>
    </form>
  </main>;
}
