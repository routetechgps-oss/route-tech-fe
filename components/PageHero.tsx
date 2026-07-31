export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-hero"><div className="route-orbit orbit-a"/><div className="route-orbit orbit-b"/><div className="shell"><span className="eyebrow light">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>;
}
