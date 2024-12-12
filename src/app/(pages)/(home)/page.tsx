import About from "@/features/section/about";
import CallToAction from "@/features/section/call-to-action";
import Gallery from "@/features/section/gallery";
import MainHero from "@/features/section/hero/main-hero";
import Testimonial from "@/features/section/testimonial";

export default function Home() {
  return (
    <>
      <MainHero />
      <About />
      <CallToAction />
      <Gallery />
      <Testimonial />
    </>
  );
}
