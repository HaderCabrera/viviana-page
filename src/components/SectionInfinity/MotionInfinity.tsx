import { InfiniteSlider } from "@/components/SectionInfinity/infinite-slider";

export default function InfiniteSliderBasic() {
  const palabras = [
    "Defensa Jurídica",
    "Derechos Fundamentales",
    "Tutelas",
    "Reclamaciones",
    "Asesoría Legal Digital",
    "Justicia en Línea",
    "Transparencia",
    "Confianza",
    "Tecnología Jurídica",
    "Resultados Reales",
    "LexProtege",
    "Tu defensa empieza aquí",
  ];

  return (
    <InfiniteSlider gap={48} reverse className="w-full">
      {palabras.map((texto, i) => (
        <div
          key={i}
        >
          {texto}
        </div>
      ))}
    </InfiniteSlider>
  );
}
