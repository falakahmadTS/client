import { Hero } from "../components/home/Hero"
import { Features } from "../components/home/Features"
import { Stats } from "../components/home/Stats"
import { CTA } from "../components/home/CTA"
import { Testimonials } from "../components/home/Testimonials"
import { LiveNodes } from "../components/home/LiveNodes"
import { Roadmap } from "../components/home/Roadmap"
import { FAQ } from "../components/home/FAQ"
import { Partners } from "../components/home/Partners"

export const Home = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans overflow-hidden">
      <Hero />
      <Partners />
      <Features />
      <LiveNodes />
      <Stats />
      <Roadmap />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  )
}
