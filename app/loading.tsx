export default function LoadingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="grid place-items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/80 px-8 py-10 text-center shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-cyan-400/30 border-t-cyan-300" aria-hidden="true" />
        <p className="text-sm text-slate-300">Preparando a experiência GRB Tecnologia...</p>
      </div>
    </div>
  );
}
