import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { buildWhatsAppUrl } from "@/lib/utils";
import { getSiteConfig } from "@/data";

const schema = z.object({
  nome: z.string().min(2, "Informe seu nome completo"),
  telefone: z.string().min(10, "Informe um telefone válido com DDD"),
  procedimento: z.string().min(2, "Conte qual procedimento tem interesse"),
  mensagem: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

/**
 * Formulário de contato: valida com Zod + React Hook Form e, ao ser
 * enviado, monta uma mensagem estruturada e abre o WhatsApp já
 * preenchida — mantendo o WhatsApp como canal único de conversão.
 */
export function Contato() {
  const site = getSiteConfig();
  const [enviado, setEnviado] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    const mensagem = [
      `Olá! Meu nome é ${data.nome}.`,
      `Telefone: ${data.telefone}`,
      `Tenho interesse em: ${data.procedimento}`,
      data.mensagem ? `Mensagem: ${data.mensagem}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsAppUrl(site.whatsapp, mensagem), "_blank", "noopener,noreferrer");
    setEnviado(true);
    reset();
  };

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container grid gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">
            <span className="gold-line" /> Fale conosco
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-brand-deep md:text-4xl">
            Vamos planejar o seu sorriso
          </h2>
          <p className="mt-4 max-w-md text-brand-deep/60">
            Preencha o formulário e continue a conversa diretamente no WhatsApp com nossa equipe.
          </p>

          <div className="mt-8 rounded-2xl bg-brand-mist p-6">
            <p className="text-sm font-semibold text-brand-deep">{site.nome}</p>
            <p className="mt-1 text-sm text-brand-deep/60">
              {site.endereco.logradouro} — {site.endereco.bairro}, {site.endereco.cidade}/{site.endereco.estado}
            </p>
            <p className="text-sm text-brand-deep/60">CEP {site.endereco.cep}</p>
            <p className="mt-2 text-sm text-brand-deep/60">
              Atende também: {site.atendeTambem.join(" · ")}
            </p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="rounded-2xl border border-brand-deep/5 bg-brand-mist p-6 shadow-glass md:p-8"
        >
          <div className="space-y-5">
            <div>
              <Label htmlFor="nome">Nome completo</Label>
              <Input id="nome" className="mt-1.5" placeholder="Seu nome" {...register("nome")} aria-invalid={!!errors.nome} />
              {errors.nome && <p className="mt-1 text-xs text-red-500">{errors.nome.message}</p>}
            </div>

            <div>
              <Label htmlFor="telefone">Telefone / WhatsApp</Label>
              <Input id="telefone" className="mt-1.5" placeholder="(87) 9 9999-9999" {...register("telefone")} aria-invalid={!!errors.telefone} />
              {errors.telefone && <p className="mt-1 text-xs text-red-500">{errors.telefone.message}</p>}
            </div>

            <div>
              <Label htmlFor="procedimento">Procedimento de interesse</Label>
              <Input id="procedimento" className="mt-1.5" placeholder="Ex.: Implantes, Facetas..." {...register("procedimento")} aria-invalid={!!errors.procedimento} />
              {errors.procedimento && <p className="mt-1 text-xs text-red-500">{errors.procedimento.message}</p>}
            </div>

            <div>
              <Label htmlFor="mensagem">Mensagem (opcional)</Label>
              <Textarea id="mensagem" className="mt-1.5" placeholder="Conte um pouco mais sobre o seu caso" {...register("mensagem")} />
            </div>

            <Button type="submit" variant="whatsapp" className="w-full" disabled={isSubmitting}>
              <Send className="h-4 w-4" />
              Enviar e continuar no WhatsApp
            </Button>

            {enviado && (
              <p className="flex items-center gap-2 text-sm font-medium text-green-600">
                <CheckCircle2 className="h-4 w-4" /> Mensagem pronta! Finalize o envio no WhatsApp aberto.
              </p>
            )}

            <p className="flex items-center justify-center gap-2 text-xs text-brand-deep/40">
              <MessageCircle className="h-3.5 w-3.5" /> Seus dados são usados apenas para o seu atendimento.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
