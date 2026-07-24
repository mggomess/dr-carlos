import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";
import { getSiteConfig } from "@/data";

export function Footer() {
  const site = getSiteConfig();
  const waUrl = buildWhatsAppUrl(site.whatsapp, "Olá! Gostaria de mais informações.");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep text-white/70">
      <div className="container grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold text-white">
            Odonto <span className="text-brand-blue">Siqueira</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            Odontologia premium com tecnologia, acolhimento e sofisticação para o seu sorriso.
          </p>
          <a
            href="https://www.instagram.com/clinicaodontosiqueira"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-brand-blue"
          >
            <Instagram className="h-4 w-4" /> {site.instagram}
          </a>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["Sobre", "#sobre"],
              ["Serviços", "#servicos"],
              ["Galeria", "#galeria"],
              ["Depoimentos", "#depoimentos"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="hover:text-brand-blue">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
              {site.endereco.logradouro} — {site.endereco.bairro}, {site.endereco.cidade}/{site.endereco.estado} · CEP {site.endereco.cep}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-blue" />
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue">
                WhatsApp: {site.whatsapp}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white">Horário</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {site.horario.map((h) => (
              <li key={h.dias} className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-brand-blue" /> {h.dias}: {h.horas}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-white/50">
            Atendemos também: {site.atendeTambem.join(" · ")}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container flex flex-col items-center justify-between gap-2 text-xs text-white/50 md:flex-row">
          <p>© {year} Odonto Siqueira — {site.responsavel} · {site.cro}</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
