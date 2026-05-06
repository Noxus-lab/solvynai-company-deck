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
            <p>Solvyn AI 成立於 2020 年,源自人工智慧研究團隊,結合研究導向與紮實的工程實力,推動 AI 技術走入產業核心。</p>
            <p>團隊深入台灣多元產業場景,專注解決真實世界問題,讓 AI 無縫融入企業日常營運,而非停留在表層應用。</p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-num">2020</div>
                <div className="stat-label">Founded</div>
              </div>
              <div className="stat">
                <div className="stat-num">4+</div>
                <div className="stat-label">Industries</div>
              </div>
              <div className="stat">
                <div className="stat-num">10+</div>
                <div className="stat-label">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
