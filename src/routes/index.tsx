import { createFileRoute } from "@tanstack/react-router";
import gg from "@/assets/gg.jpg.asset.json";
import logo from "@/assets/logo.jpg.asset.json";
import bolonhesa from "@/assets/bolonhesa.jpg.asset.json";
import meia from "@/assets/meia.jpg.asset.json";
import combo from "@/assets/combo.jpg.asset.json";
import pizza45 from "@/assets/pizza45.jpg.asset.json";

const WA = "5573991817508";
const wa = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const MAPS = "https://maps.app.goo.gl/uCyEexZi6DP9pTno6";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DestaK Pizza e Lanches | Delivery em Prado - BA" },
      { name: "description", content: "Pizza G a partir de R$ 40, Pizza GG Super Família e combos. Peça pelo WhatsApp em Prado - BA." },
      { property: "og:title", content: "DestaK Pizza e Lanches | Prado - BA" },
      { property: "og:description", content: "Cardápio, horário e pedido direto pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const sabores = ["Atum", "Baiana", "Baiana picante", "Bolonhesa", "Carne seca", "Carne seca com banana da terra", "Calabresa", "Calabresa picante", "Frango", "Frango com catupiry"];

const cardapio = [
  { img: gg.url, nome: "Pizza GG Super Família", info: "40 cm · 3 sabores à escolha", preco: "Consulte", tag: "A maior" },
  { img: pizza45.url, nome: "Pizza G", info: "8 fatias · 2 sabores à escolha", preco: "R$ 45", tag: "Mais pedida" },
  { img: meia.url, nome: "Pizza Sem Borda", info: "Meio a meio do seu jeito", preco: "R$ 40" },
  { img: combo.url, nome: "Combo Mirim", info: "Hambúrguer + batata + refri lata", preco: "R$ 25", tag: "Combo" },
];

const reviews = [
  { n: "Wesley Junio", t: "Realizei pedido de 1 pizza e 2 lanches para entregar, devido estar hospedado na cidade. Recomendo aos turistas, excelente lanche e pizza. Entrega rápida." },
  { n: "Lene", t: "Excelente atendimento, pizza boa e preço justo." },
  { n: "Pamela Sousa Conceição", t: "Eu adoro os lanches e pizza da Destak, uma delícia de açaí, pastéis e muito mais." },
  { n: "Julia Alomba", t: "Ótimo atendimento, bem educadas, tudo perfeito." },
  { n: "Marconi", t: "Um lugar maravilhoso. Lanches e pizza deliciosa." },
];

const btn = "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 font-bold transition active:translate-y-1";
const solid = `${btn} bg-primary text-primary-foreground shadow-btn hover:brightness-110`;
const outline = `${btn} border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground`;

function Wa({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.5.7.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" />
    </svg>
  );
}

function Marquee() {
  const words = ["Pizza quentinha", "Entrega rápida", "Preço justo", "Feito na hora", "Prado · BA"];
  const row = [...words, ...words, ...words, ...words];
  return (
    <div className="-rotate-2 overflow-hidden bg-primary py-3 text-primary-foreground">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-display text-2xl font-extrabold uppercase italic md:text-3xl">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8">{w}<span className="text-secondary">✦</span></span>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <div className="bg-secondary py-2 text-center text-[11px] font-bold uppercase tracking-[0.2em]">
        Delivery em Prado · Todo dia das 17h às 23h30
      </div>

      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#" className="leading-none">
            <span className="font-display text-3xl font-extrabold text-primary">DestaK<span className="text-secondary">.</span></span>
            <span className="block text-[9px] font-bold uppercase tracking-[0.3em] text-primary">Pizza & Lanches</span>
          </a>
          <nav className="hidden gap-7 text-sm font-semibold md:flex">
            <a href="#cardapio">Cardápio</a><a href="#sabores">Sabores</a><a href="#avaliacoes">Avaliações</a><a href="#contato">Contato</a>
          </nav>
          <a href={wa("Olá! Quero fazer um pedido.")} target="_blank" rel="noreferrer" className={`${solid} px-4 py-2.5 text-sm`}>
            Fazer pedido <Wa className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:pt-16">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">⭐ 4,0 no Google · Portelinha, Prado</p>
          <h1 className="font-display text-6xl font-extrabold uppercase leading-[0.88] md:text-8xl">
            Fome de pizza?<br /><span className="text-primary">A DestaK<br />entrega.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Pizza bem recheada, lanche caprichado e entrega rápida, do jeito que Prado já conhece. Escolha, chame no Zap e espere quentinha.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cardapio" className={solid}>Ver cardápio ↗</a>
            <a href={wa("Olá! Quero fazer um pedido.")} target="_blank" rel="noreferrer" className={outline}><Wa /> Pedir pelo WhatsApp</a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span>• 17h às 23h30</span><span>• Delivery</span><span>• Retirada no local</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-t-full border-2 border-primary p-2">
            <img src={pizza45.url} alt="Pizza G da DestaK" className="aspect-[4/5] w-full rounded-t-full object-cover object-bottom" />
          </div>
          <div className="absolute -bottom-6 -left-4 grid h-32 w-32 animate-spin-slow place-items-center rounded-full border-4 border-background bg-secondary md:-left-10">
            <span className="-rotate-12 text-center font-display text-xl font-extrabold uppercase italic leading-none">Pizza G<br /><span className="text-3xl text-primary">R$45</span></span>
          </div>
        </div>
      </section>

      <Marquee />

      {/* CARDÁPIO */}
      <section id="cardapio" className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Direto do forno</p>
        <h2 className="mt-2 font-display text-5xl font-extrabold uppercase md:text-6xl">O cardápio</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cardapio.map((c) => (
            <article key={c.nome} className="group overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative overflow-hidden">
                <img src={c.img} alt={c.nome} loading="lazy" className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
                {c.tag && <span className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase">{c.tag}</span>}
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-extrabold uppercase leading-tight">{c.nome}</h3>
                  <span className="shrink-0 font-display text-2xl font-extrabold text-primary">{c.preco}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{c.info}</p>
                <a href={wa(`Olá! Quero pedir: ${c.nome}`)} target="_blank" rel="noreferrer" className={`${outline} mt-4 w-full py-2.5 text-sm`}>
                  Pedir este
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SABORES */}
      <section id="sabores" className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
          <div className="relative">
            <img src={bolonhesa.url} alt="Pizza de bolonhesa" loading="lazy" className="aspect-square w-full rotate-[-3deg] rounded-sm border-[10px] border-ink-foreground object-cover shadow-2xl" />
            <img src={logo.url} alt="Logo Destak Pizzas" loading="lazy" className="absolute -bottom-8 -right-2 w-44 rotate-6 rounded-lg border-4 border-ink-foreground shadow-xl md:w-56" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Monte do seu jeito</p>
            <h2 className="mt-2 font-display text-5xl font-extrabold uppercase md:text-6xl">Escolha os<br />sabores</h2>
            <p className="mt-4 text-ink-foreground/70">Na G você escolhe 2 sabores. Na GG Super Família, 3.</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {sabores.map((s) => (
                <li key={s} className="rounded-full border border-ink-foreground/25 px-4 py-2 text-sm font-semibold">{s}</li>
              ))}
              <li className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">e mais…</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section id="avaliacoes" className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Avaliações no Google</p>
            <h2 className="mt-2 font-display text-5xl font-extrabold uppercase md:text-6xl">Quem pede, volta</h2>
          </div>
          <a href={MAPS} target="_blank" rel="noreferrer" className="text-sm font-bold text-primary underline underline-offset-4">Ver todas no Google ↗</a>
        </div>
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {reviews.map((r) => (
            <figure key={r.n} className="mb-5 break-inside-avoid rounded-xl border border-border bg-card p-6">
              <div className="text-lg tracking-widest text-primary">★★★★★</div>
              <blockquote className="mt-3 text-lg leading-snug">"{r.t}"</blockquote>
              <figcaption className="mt-4 flex items-center gap-3 text-sm font-bold">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">{r.n[0]}</span>{r.n}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA + CONTATO */}
      <section id="contato" className="px-5 pb-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-primary text-primary-foreground md:grid md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h2 className="font-display text-5xl font-extrabold uppercase leading-none md:text-6xl">Bateu a fome?<br /><span className="text-secondary">Chama no Zap.</span></h2>
            <dl className="mt-8 space-y-4">
              <div><dt className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70">Endereço</dt>
                <dd><a href={MAPS} target="_blank" rel="noreferrer" className="underline underline-offset-4">Av. Jacarandá, 135 – Portelinha, Prado – BA</a></dd></div>
              <div><dt className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70">Horário</dt><dd>Todos os dias, 17:00 às 23:30</dd></div>
              <div><dt className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70">WhatsApp</dt><dd>(73) 99181-7508</dd></div>
            </dl>
            <a href={wa("Olá! Quero fazer um pedido.")} target="_blank" rel="noreferrer"
              className={`${btn} mt-8 bg-secondary text-secondary-foreground hover:brightness-105`}><Wa /> Fazer meu pedido</a>
          </div>
          <img src={gg.url} alt="Pizzas GG Super Família" loading="lazy" className="h-64 w-full object-cover md:h-full" />
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © DestaK Pizza e Lanches · Prado, BA
      </footer>

      <a href={wa("Olá! Quero fazer um pedido.")} target="_blank" rel="noreferrer" aria-label="Pedir pelo WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-btn">
        <Wa className="h-7 w-7" />
      </a>
    </main>
  );
}
