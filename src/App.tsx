import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Servicos } from "@/components/sections/Servicos";
import { Galeria } from "@/components/sections/Galeria";
import { AntesDepois } from "@/components/sections/AntesDepois";
import { Videos } from "@/components/sections/Videos";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Contato } from "@/components/sections/Contato";
import { Mapa } from "@/components/sections/Mapa";
import { WhatsAppFloat } from "@/components/common/WhatsAppFloat";
import { BackToTop } from "@/components/common/BackToTop";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Diferenciais />
        <Servicos />
        <Galeria />
        <AntesDepois />
        <Videos />
        <Depoimentos />
        <GoogleReviews />
        <FAQ />
        <CTAFinal />
        <Contato />
        <Mapa />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}

export default App;
