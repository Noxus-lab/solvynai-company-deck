export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-label reveal">01 — About</div>
        <div className="about-grid">
          <div className="reveal">
            <h2 className="section-title">深入產業<br />而非停留於表層</h2>
          </div>
          <div className="about-text reveal" style={{ transitionDelay: "80ms" }}>
            <p>Solvyn AI 成立於 2025 年,團隊自 2020 年起即共同投入人工智慧研究,並與諸多學術機構合作發表論文,結合研究導向與紮實的工程實力,推動 AI 技術走入產業核心。</p>
            <p>團隊深入台灣多元產業場景,專注解決真實世界問題,讓 AI 無縫融入企業日常營運,而非停留在表層應用。</p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-num">2025</div>
                <div className="stat-label">Founded</div>
              </div>
              <div className="stat">
                <div className="stat-num">4+</div>
                <div className="stat-label">Industries</div>
              </div>
              <div className="stat">
                <div className="stat-num">30+</div>
                <div className="stat-label">Cases</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
