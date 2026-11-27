/** Shown on legal pages until the founder and legal counsel approve the final text. Remove at launch sign-off. */
export function LegalDraftNotice({ pending }: { pending: string[] }) {
  return (
    <div role="note" className="rounded-[var(--radius-card)] border border-gold-500 bg-gold-50 p-5 text-[0.9375rem] text-ink-900">
      <p className="font-semibold">Draft for legal review: not yet in effect.</p>
      <p className="mt-1">Still to be confirmed: {pending.join("; ")}.</p>
    </div>
  );
}
