import { useState } from "react";

/* ----- Case 01: Audit selector ----- */
const auditItems = [
  {
    id: "a1",
    status: "active" as const,
    statusLabel: "AI 分析中",
    branch: "台北分校 · 林老師",
    name: "Phonics Level 3 — Blending",
    score: "86",
  },
  {
    id: "a2",
    status: "done" as const,
    statusLabel: "已完成",
    branch: "台中分校 · 陳老師",
    name: "Reading Comprehension",
    score: "92",
  },
  {
    id: "a3",
    status: "done" as const,
    statusLabel: "已完成",
    branch: "高雄分校 · 王老師",
    name: "Conversation Class",
    score: "78",
  },
  {
    id: "a4",
    status: "pending" as const,
    statusLabel: "待評分",
    branch: "台南分校 · 張老師",
    name: "Vocabulary Building",
    score: "—",
  },
];

function Case01() {
  const [activeId, setActiveId] = useState("a1");
  const [changing, setChanging] = useState(false);
  const [score, setScore] = useState("86");

  const select = (id: string, newScore: string) => {
    setActiveId(id);
    setChanging(true);
    setTimeout(() => {
      setScore(newScore);
      setChanging(false);
    }, 160);
  };

  return (
    <article className="case-card reveal">
      <div className="case-meta">
        <span className="case-num">CASE 01</span>
        <span className="case-tag">Education · 300+ Branches</span>
      </div>
      <div className="case-grid">
        <div className="case-text">
          <h3>連鎖補教業:分校教學品質 AI 審核系統</h3>
          <div className="case-block">
            <div className="case-label">核心痛點</div>
            <p>大量分校的教學影片,總部難以用人工方式逐一審核,無法公平且準確地評斷分校課程是否達到規定的教學品質。</p>
          </div>
          <div className="case-block">
            <div className="case-label">AI Solution</div>
            <p>將教學影片轉換為語音與板書資料,萃取課程時長、互動比例等關鍵特徵,結合 Human Feedback Loop 與客戶共同建立評分標準,打造可持續優化的 AI 教學品質評分模型,實現自動化且公平的審核機制。</p>
          </div>
          <div className="case-metrics">
            <div className="metric"><div className="metric-value">−92%</div><div className="metric-label">審核時間</div></div>
            <div className="metric"><div className="metric-value">300+</div><div className="metric-label">分校涵蓋</div></div>
            <div className="metric"><div className="metric-value">94%</div><div className="metric-label">評分一致性</div></div>
          </div>
        </div>
        <div className="case-visual">
          <div className="proto">
            <div className="proto-header">
              <span className="proto-title">影片評分清單</span>
              <span className="proto-badge">23 待處理</span>
            </div>
            <div className="proto-audit-list">
              {auditItems.map((it) => (
                <button
                  key={it.id}
                  type="button"
                  className="audit-item"
                  data-active={String(activeId === it.id)}
                  onClick={() => select(it.id, it.score)}
                >
                  <div className="audit-meta">
                    <span className={`audit-status ${it.status}`}>{it.statusLabel}</span>
                    <span className="audit-branch">{it.branch}</span>
                  </div>
                  <div className="audit-name">{it.name}</div>
                </button>
              ))}
            </div>
            <div className="proto-score">
              <div className={`score-num${changing ? " changing" : ""}`}>
                <span>{score}</span>
              </div>
              <div className="score-label">AI 評分</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ----- Case 02: MES line selector ----- */
const mesData: Record<string, { name: string; inspected: string; defects: string; cycle: string; rate: string }> = {
  L01: { name: "PCB 板面檢查", inspected: "12,847", defects: "179", cycle: "0.34s", rate: "99.1%" },
  L02: { name: "焊錫瑕疵偵測", inspected: "8,420", defects: "270", cycle: "0.42s", rate: "96.8%" },
  L03: { name: "外殼刮傷檢查", inspected: "15,201", defects: "243", cycle: "0.28s", rate: "98.4%" },
  L04: { name: "尺寸量測 · 停線換模", inspected: "—", defects: "—", cycle: "—", rate: "—" },
};

function Case02() {
  const [activeLine, setActiveLine] = useState<keyof typeof mesData>("L01");
  const d = mesData[activeLine];

  return (
    <article className="case-card reveal">
      <div className="case-meta">
        <span className="case-num">CASE 02</span>
        <span className="case-tag">Semiconductor · MES Integration</span>
      </div>
      <div className="case-grid">
        <div className="case-text">
          <h3>設備工廠:影像辨識 MES 系統</h3>
          <div className="case-block">
            <div className="case-label">核心痛點</div>
            <ol>
              <li>產線機台訊號難以與伺服器連接,需花費大量成本與人力外接</li>
              <li>產線作業員操作流程難以監管,人力監控成本高</li>
            </ol>
          </div>
          <div className="case-block">
            <div className="case-label">AI Solution</div>
            <p>導入電腦視覺技術,透過現場攝影機擷取產線影像,以模型進行機台狀態辨識,取代傳統訊號串接方式,降低系統整合成本。同時結合行為辨識模型分析作業員操作流程,建立標準作業判斷機制。</p>
          </div>
          <div className="case-metrics">
            <div className="metric"><div className="metric-value">−60%</div><div className="metric-label">整合成本</div></div>
            <div className="metric"><div className="metric-value">98.6%</div><div className="metric-label">偵測準確率</div></div>
            <div className="metric"><div className="metric-value">&lt;2 wk</div><div className="metric-label">部署週期</div></div>
          </div>
        </div>
        <div className="case-visual">
          <div className="proto">
            <div className="proto-header">
              <span className="proto-title">產線即時狀態</span>
              <span className="proto-badge">LIVE</span>
            </div>
            <div className="line-grid">
              {(Object.keys(mesData) as Array<keyof typeof mesData>).map((id) => {
                const v = mesData[id];
                const widthValue = v.rate.endsWith("%") ? v.rate : "0%";
                return (
                  <button
                    key={id}
                    type="button"
                    className="line-card"
                    data-active={String(activeLine === id)}
                    data-line={id}
                    onClick={() => setActiveLine(id)}
                  >
                    <div className="line-id">LINE {id.slice(1)}</div>
                    <div className="line-rate">{v.rate}</div>
                    <div className="line-bar">
                      <span style={{ width: widthValue }} />
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="proto-detail">
              <div className="detail-meta">
                <strong>{activeLine}</strong> · <span>{d.name}</span>
              </div>
              <div className="detail-stats">
                <div><span className="stat-n">{d.inspected}</span><span className="stat-l">已檢測</span></div>
                <div><span className="stat-n">{d.defects}</span><span className="stat-l">瑕疵</span></div>
                <div><span className="stat-n">{d.cycle}</span><span className="stat-l">週期</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ----- Case 03: Clinical EMR ----- */
const emrRows = [
  { id: "r1", cat: "病患意願", catClass: "cat-pt", date: "03/14", star: true, desc: "希望維持行走能力,拒絕長期臥床或輪椅", recorder: "張雅婷 RN · 入院護理評估" },
  { id: "r2", cat: "拒絕施行", catClass: "cat-decline", date: "03/16", star: true, desc: "不施行 CPR / 插管 / 電擊(DNR 已簽署)", recorder: "林建志 MD · 病情討論記錄" },
  { id: "r3", cat: "病患意願", catClass: "cat-pt", date: "03/18", star: false, desc: "出院後希望返家,不入住長照機構", recorder: "許瑞茹 MSW · 社工訪談記錄" },
  { id: "r4", cat: "家屬意願", catClass: "cat-fam", date: "03/20", star: false, desc: "次女:進食困難時優先評估鼻胃管以外選項", recorder: "林建志 MD · 家庭會議記錄" },
];

const emrSourceData: Record<string, { id: string; meta: string; pre: string; quote: string; post: string }> = {
  r1: {
    id: "NUR-20240314-0089",
    meta: "張雅婷 RN · 03/14",
    pre: "病患神情清醒,溝通良好。主動表示:",
    quote: "「我最怕不能走路,就算治療辛苦一點也沒關係,希望能保住走路的能力」",
    post: "。目前步態尚穩,可獨立行走約 20 公尺。",
  },
  r2: {
    id: "MD-20240316-0043",
    meta: "林建志 MD · 03/16",
    pre: "與病患及家屬討論末期照護偏好。病患神智清楚,主動表示:",
    quote: "「不希望使用任何延命的醫療處置,讓我自然走完」",
    post: "。已完成 DNR 同意書簽署。",
  },
  r3: {
    id: "SW-20240318-0027",
    meta: "許瑞茹 MSW · 03/18",
    pre: "評估出院安置選項。病患明確表達:",
    quote: "「我想回自己家裡住,不要去機構」",
    post: "。家屬支持並可提供主要照顧人力。",
  },
  r4: {
    id: "FAM-20240320-0008",
    meta: "林建志 MD / 許瑞茹 MSW · 03/20",
    pre: "家庭會議,次女補充:",
    quote: "「希望能用比較不那麼侵入性的方法協助父親進食」",
    post: "。建議營養師評估替代營養支持方案。",
  },
};

function Case03() {
  const [activeId, setActiveId] = useState("r1");
  const [changing, setChanging] = useState(false);
  const [src, setSrc] = useState(emrSourceData.r1);

  const select = (id: string) => {
    setActiveId(id);
    setChanging(true);
    setTimeout(() => {
      setSrc(emrSourceData[id]);
      setChanging(false);
    }, 180);
  };

  return (
    <article className="case-card reveal">
      <div className="case-meta">
        <span className="case-num">CASE 03</span>
        <span className="case-tag">Healthcare · LLM Application</span>
      </div>
      <div className="case-grid">
        <div className="case-text">
          <h3>醫療 AI 助理:病患意願智能萃取系統</h3>
          <div className="case-block">
            <div className="case-label">核心痛點</div>
            <p>病患與家屬的照護意願散落在數百筆 clinical notes 中,醫護人員難以在關鍵時刻快速掌握,造成決策延誤、甚至違背病患意願的處置。</p>
          </div>
          <div className="case-block">
            <div className="case-label">AI Solution</div>
            <p>透過 LLM 讓醫療團隊在 Goals of Care 討論前,清楚知道每位病患的意願是誰說的、什麼時候說的、確定程度有多高。系統透過說話者歸屬、否定語義解析與跨階段時間軸追蹤,將散落病歷的意願陳述轉為可信、可追溯、可比對的結構化資料。</p>
          </div>
          <div className="case-metrics">
            <div className="metric"><div className="metric-value">91%</div><div className="metric-label">意願辨識準確率</div></div>
            <div className="metric"><div className="metric-value">35 min</div><div className="metric-label">每病患節省</div></div>
            <div className="metric"><div className="metric-value">3×</div><div className="metric-label">資訊掌握速度</div></div>
          </div>
        </div>
        <div className="case-visual">
          <div className="proto">
            <div className="proto-header">
              <span className="proto-title">病患意願與照護需求</span>
              <span className="proto-badge">MRN 00234567</span>
            </div>
            <div className="emr-table">
              {emrRows.map((row) => (
                <button
                  key={row.id}
                  type="button"
                  className={`emr-row${activeId === row.id ? " active" : ""}`}
                  onClick={() => select(row.id)}
                >
                  <div className="emr-top">
                    <span className={`emr-cat ${row.catClass}`}>{row.cat}</span>
                    <span className="emr-date">{row.date}</span>
                  </div>
                  <div className="emr-desc">
                    {row.star && <span className="star">★</span>}
                    {row.desc}
                  </div>
                  <div className="emr-recorder">{row.recorder}</div>
                </button>
              ))}
            </div>
            <div className={`emr-source${changing ? " changing" : ""}`}>
              <div className="emr-source-header">
                <span className="emr-source-title">病歷原文 · <strong>{src.id}</strong></span>
                <span>{src.meta}</span>
              </div>
              <div className="emr-source-body">
                {src.pre}
                <span className="emr-quote">{src.quote}</span>
                {src.post}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Cases() {
  return (
    <section className="section" id="cases">
      <div className="wrap">
        <div className="section-label reveal">06 — Selected Cases</div>
        <h2 className="section-title reveal">精選案例</h2>
        <div className="cases-list">
          <Case01 />
          <Case02 />
          <Case03 />
        </div>
      </div>
    </section>
  );
}
