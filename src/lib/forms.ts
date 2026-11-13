/**
 * Posts a form to Formspree. Resolves `{ ok: true }` only when Formspree accepted it.
 * A missing form id counts as a failure so a mis-configured deploy can never show a
 * fake "thank you" while silently dropping a sign-up.
 *
 * Callers must pass `process.env.NEXT_PUBLIC_FORMSPREE_*_ID` literally (Next inlines it).
 */
export async function postToFormspree(
  formId: string | undefined,
  payload: Record<string, unknown>,
): Promise<{ ok: boolean }> {
  if (!formId) return { ok: false };
  try {
    const res = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    return { ok: res.ok };
  } catch {
    return { ok: false };
  }
}
