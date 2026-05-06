const services = [
  {
    num: "01 / SERVICE",
    title: "AI 策略諮詢",
    body: "深入客戶場域進行診斷,協助企業辨識真正能創造價值的 AI 應用機會,提供從技術可行性到 ROI 的完整評估。",
  },
  {
    num: "02 / SERVICE",
    title: "客製化 AI 開發",
    body: "從 POC 到生產部署的全流程開發,涵蓋 LLM、電腦視覺、Edge AI、模型壓縮與微調,確保解決方案符合場域實際需求。",
  },
  {
    num: "03 / SERVICE",
    title: "持續優化與維運",
    body: "建立模型監控與自動更新機制,讓 AI 系統能隨業務演進持續優化,而非交付後即停滯。",
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-label reveal">02 — What We Do</div>
        <h2 className="section-title reveal">三條可組合的服務線</h2>
        <div className="services-grid stagger">
          {services.map((s) => (
            <div className="service-card reveal" key={s.num}>
              <div className="service-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
