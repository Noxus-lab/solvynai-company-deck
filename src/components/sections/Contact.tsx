import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import ContactForm from "@/components/sections/ContactForm";

export default function Contact() {
  return (
    <section className="section section-contact" id="contact">
      <div className="wrap">
        <div className="section-label reveal">08 — Contact</div>
        <h2 className="contact-title reveal">
          Your{" "}
          <AnimatedTextCycle
            words={[
              "team",
              "factory",
              "clinic",
              "classroom",
              "pipeline",
              "workflow",
              "operation",
            ]}
            interval={2400}
            className="ai-gradient"
          />
          <br />
          <span className="keep">deserves the best AI.</span>
        </h2>
        <p className="contact-sub reveal" style={{ transitionDelay: "60ms" }}>
          告訴我們你的場景,我們一起評估 AI 能為你的業務解決什麼問題。
        </p>
        <div className="reveal" style={{ transitionDelay: "120ms" }}>
          <ContactForm />
        </div>
        <div className="contact-info reveal">
          <div>
            <div className="info-label">Email</div>
            <div className="info-value">
              <a href="mailto:info@solvynai.com">info@solvynai.com</a>
            </div>
          </div>
          <div>
            <div className="info-label">Address</div>
            <div className="info-value">新北市三重區重新路 5 段 609 巷 18 號 7 樓之 5</div>
          </div>
        </div>
      </div>
    </section>
  );
}
