import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getFaq } from "@/data";

export function FAQ() {
  const faq = getFaq();
  return (
    <section id="faq" className="section-padding bg-brand-mist">
      <div className="container max-w-3xl">
        <div className="text-center">
          <span className="eyebrow justify-center">
            <span className="gold-line" /> Dúvidas frequentes
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-brand-deep md:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl bg-white p-6 shadow-glass md:p-10"
        >
          <Accordion type="single" collapsible>
            {faq.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.pergunta}</AccordionTrigger>
                <AccordionContent>{item.resposta}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
