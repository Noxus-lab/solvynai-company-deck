import { useReveal } from "@/hooks/useReveal";
import { Hero } from "@/components/blocks/hero";
import Nav from "@/components/sections/Nav";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Why from "@/components/sections/Why";
import Process from "@/components/sections/Process";
import Industries from "@/components/sections/Industries";
import Cases from "@/components/sections/Cases";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function App() {
  useReveal();

  return (
    <>
      <Nav />
      <Hero
        title={
          <>
            Solvyn <span className="ai-gradient">AI</span>
          </>
        }
        subtitle={
          <>
            以技術驅動產業轉型,為台灣企業打造真正能落地的 AI 解決方案。
            <br />
            源自人工智慧研究團隊,深入產業現場 — 我們不只做 demo,而是讓 AI 真正進入企業日常營運。
          </>
        }
        actions={[
          { label: "預約諮詢 →", href: "#contact", variant: "default" },
          { label: "了解我們的方法", href: "#process", variant: "outline" },
        ]}
        titleClassName="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95]"
        subtitleClassName="text-lg md:text-xl leading-relaxed max-w-[740px]"
        actionsClassName="mt-8"
      />
      <About />
      <Services />
      <Why />
      <Process />
      <Industries />
      <Cases />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
