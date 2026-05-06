import morris from "@/assets/Morris_icon.jpg";
import jerry from "@/assets/Jerry_icon.jpg";
import william from "@/assets/William_icon.jpg";

const founders = [
  {
    img: morris,
    name: "Morris Liu",
    role: "Co-Founder & CEO",
    bio: "畢業於清華大學資工系,專注 Edge AI、模型壓縮與部署。曾任矽谷新創軟體工程師與量化交易研究員,並與 UCLA、Microsoft Research 共同發表 ICLR 論文。",
  },
  {
    img: jerry,
    name: "Jerry Shu",
    role: "Co-Founder & CTO",
    bio: "畢業於清華大學電機資工學系,曾於 MIT 與 UCSF 擔任研究員,並於哈佛醫學院領導多項醫療 AI 數位轉型專案,於 IEEE 等多個頂級會議及期刊發表 5+ 篇一作論文。",
  },
  {
    img: william,
    name: "William Chiu",
    role: "Co-Founder & CPO",
    bio: "畢業於台灣大學資工所,專注 LLM、電腦視覺與模型微調。曾任中央研究院研究員,以第一作者發表 NAACL 論文,具 LINE Taiwan 機器學習與產品開發經驗。",
  },
];

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="wrap">
        <div className="section-label reveal">07 — Team</div>
        <h2 className="section-title reveal">創辦團隊</h2>
        <div className="team-grid stagger">
          {founders.map((f) => (
            <article className="founder-card reveal" key={f.name}>
              <div className="founder-avatar" aria-hidden="true">
                <img src={f.img} alt={`${f.name} portrait`} loading="lazy" />
              </div>
              <h3>{f.name}</h3>
              <div className="founder-role">{f.role}</div>
              <p>{f.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
