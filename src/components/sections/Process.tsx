const steps = [
  { num: "STEP 01", title: "Discovery", body: "深入場域訪談,理解業務流程與痛點,定義成功指標。" },
  { num: "STEP 02", title: "POC", body: "快速驗證技術可行性與商業價值,降低投入風險。" },
  { num: "STEP 03", title: "Deployment", body: "系統整合、部署、壓力測試,確保進入生產環境穩定運作。" },
  { num: "STEP 04", title: "Iteration", body: "持續監控模型表現,根據真實場域資料優化系統與使用者體驗。" },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="section-label reveal">04 — How We Work</div>
        <h2 className="section-title reveal">合作流程</h2>
        <div className="process-flow">
          {steps.map((s) => (
            <div className="process-step reveal" key={s.num}>
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
