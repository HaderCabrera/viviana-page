import { MorphingDialogBasicOne } from "@/components/Cards/CardAnimated";

export default function Services() {
  // Creamos un array con 5 elementos
  const cards = Array.from({ length: 5 });

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full max-w-6xl mx-auto">
      {/* Primer elemento: ocupa 1 columna y 2 filas */}
      <div className="row-span-2 flex justify-center">
        <MorphingDialogBasicOne />
      </div>

      {/* Los otros 4 elementos: ocupan 1 fila y 1 columna cada uno */}
      {cards.slice(1).map((_, i) => (
        <div key={i} className="flex justify-center">
          <MorphingDialogBasicOne />
        </div>
      ))}
    </div>
  );
}
