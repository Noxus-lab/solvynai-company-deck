import { useForm, ValidationError } from "@formspree/react";

const FORM_ID =
  (import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined) ?? "xykojyny";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return (
      <div className="contact-form-success" role="status">
        <div className="success-icon" aria-hidden="true">✓</div>
        <h3>已收到你的諮詢需求</h3>
        <p>我們會在 1–2 個工作天內主動與你聯繫。</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="_subject" value="[Solvyn AI] 新諮詢需求" />

      <div className="form-row form-row-2">
        <div className="form-field">
          <label htmlFor="cf-name">姓名 *</label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" />
          <ValidationError prefix="姓名" field="name" errors={state.errors} className="form-field-error" />
        </div>
        <div className="form-field">
          <label htmlFor="cf-email">Email *</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="form-field-error" />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="cf-company">公司 / 機構</label>
        <input id="cf-company" name="company" type="text" autoComplete="organization" />
        <ValidationError prefix="公司" field="company" errors={state.errors} className="form-field-error" />
      </div>

      <div className="form-field">
        <label htmlFor="cf-scenario">想討論的場景 *</label>
        <textarea
          id="cf-scenario"
          name="scenario"
          rows={4}
          required
          placeholder="簡單描述你的產業、目前的痛點,或希望 AI 能協助解決的問題"
        />
        <ValidationError prefix="場景" field="scenario" errors={state.errors} className="form-field-error" />
      </div>

      <ValidationError errors={state.errors} className="form-error" />

      <button type="submit" className="btn btn-primary btn-lg" disabled={state.submitting}>
        {state.submitting ? "送出中…" : "送出諮詢需求"}
        <span className="arrow">→</span>
      </button>
    </form>
  );
}
