const items = [
  {
    num: "01 / 03",
    title: "研究底蘊",
    body: "團隊來自頂尖學術背景,成員曾於 MIT、哈佛醫學院、臺灣大學、中央研究院、LINE Taiwan 等機構研究與工作,於 IEEE、ICLR、NAACL 等頂級會議發表論文。",
  },
  {
    num: "02 / 03",
    title: "跨產業 Know-how",
    body: "橫跨教育、半導體、醫療、製程的實戰經驗,讓我們能將不同產業的方法論彼此遷移,加速新場域的落地。",
  },
  {
    num: "03 / 03",
    title: "場域導向交付",
    body: "我們堅持深入第一線理解問題,而非套用現成 demo。每個專案都從理解客戶日常開始,確保解決方案真正可用、可維運、可演進。",
  },
];

export default function Why() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="section-label reveal">03 — Why Solvyn</div>
        <h2 className="section-title reveal">三個我們真正不同的地方</h2>
        <div className="why-grid">
          {items.map((it) => (
            <article className="why-item reveal" key={it.num}>
              <div className="why-num">{it.num}</div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
