// Email clients don't support Tailwind or CSS variables, so the tokens from
// your @theme are inlined here as constants (same hex values).
const t = {
  background: "#FFF8F1", //        --color-background
  lowest: "#FFFFFF", //            --color-surface-container-lowest
  low: "#FFF2DB", //               --color-surface-container-low
  onBackground: "#221B09", //      --color-on-background
  onSurfaceVariant: "#4F453F", //  --color-on-surface-variant
  primaryContainer: "#2B190E", //  --color-primary-container
  onPrimaryContainer: "#9C7F70", //--color-on-primary-container
  inverseOnSurface: "#FEEFD2", //  --color-inverse-on-surface
  accent: "#FDB711", //            --color-secondary-container
  onAccent: "#6B4B00", //          --color-on-secondary-container
  outline: "#81756E", //           --color-outline
  outlineVariant: "#D3C3BC", //    --color-outline-variant
};

const font = "Inter, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );

interface EmailData {
  name: string;
  email: string;
  topic: string;
  stage: string;
  message: string;
}

const row = (label: string, value: string) => `
  <tr>
    <td style="padding:0 0 20px 0;font-family:${font};">
      <div style="font-size:12px;font-weight:700;letter-spacing:0.08em;color:${t.onSurfaceVariant};margin-bottom:6px;">${label}</div>
      ${value}
    </td>
  </tr>`;

const pill = (text: string) =>
  `<span style="display:inline-block;background:${t.low};border:1px solid ${t.outlineVariant};color:${t.onBackground};font-size:14px;font-weight:600;padding:6px 14px;border-radius:9999px;">${esc(text)}</span>`;

export function buildEmailHtml({ name, email, topic, stage, message }: EmailData) {
  const safeName = esc(name);
  const safeEmail = esc(email);

  return `<!doctype html>
<html>
<body style="margin:0;padding:0;background:${t.background};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${t.background};padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:${t.lowest};border:1px solid ${t.outlineVariant};border-radius:12px;overflow:hidden;box-shadow:0 4px 12px -2px rgba(43,25,14,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:${t.primaryContainer};padding:32px;font-family:${font};">
            <span style="display:inline-block;background:${t.accent};color:${t.onAccent};font-size:12px;font-weight:700;letter-spacing:0.08em;padding:6px 12px;border-radius:9999px;">NEW CONVERSATION</span>
            <h1 style="margin:16px 0 4px;font-size:28px;line-height:1.2;letter-spacing:-0.02em;font-weight:800;color:${t.inverseOnSurface};">${safeName}</h1>
            <a href="mailto:${safeEmail}" style="font-size:16px;color:${t.onPrimaryContainer};text-decoration:none;">${safeEmail}</a>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              ${row("TOPIC", pill(topic))}
              ${row("PROJECT STAGE", pill(stage))}
              ${row(
                "MESSAGE",
                `<div style="background:${t.low};border-left:4px solid ${t.accent};border-radius:8px;padding:16px 20px;font-size:16px;line-height:1.55;color:${t.onBackground};">${esc(message).replace(/\n/g, "<br/>")}</div>`
              )}
            </table>

            <!-- CTA -->
            <a href="mailto:${safeEmail}?subject=${encodeURIComponent("Re: your project")}"
              style="display:inline-block;background:${t.accent};color:${t.onAccent};font-family:${font};font-size:14px;font-weight:600;letter-spacing:0.02em;text-decoration:none;padding:14px 28px;border-radius:9999px;">
              Reply to ${safeName}
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px;border-top:1px solid ${t.outlineVariant};font-family:${font};font-size:12px;color:${t.outline};">
            Sent from your portfolio contact form.
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}