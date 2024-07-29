// import Herosection from "@/components/Herosection";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
//       <Herosection/>
//     </main>
//   );
// }

// //rep all contant in the main div
// //give full width and work on it bro
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import FaturedCources from "@/components/FeaturedCporces";
import WhyChooseus from "@/components/WhyChooseus";
import GridSection from "@/components/GridSection";
import Upcoming from "@/components/Upcoming";
import Lastone from "@/components/Lastone";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <Herosection />
      <FaturedCources />
      <WhyChooseus />
      <GridSection />
      <Upcoming />
      <Lastone />
      <Footer />
    </main>
  );
}
