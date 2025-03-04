'use client'

import { useRouter } from "next/navigation";
import { caronas, Carona } from "../mock";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvaliarCarona1() {
  const router = useRouter();

  function handleSelectCarona(carona: Carona) {
    router.push(`/avaliar-carona/${carona.id}`);
  }

  return (
    <>
    <Avatar className='mt-6 ml-4' onClick={() => router.back()}>
      <AvatarImage className="w-6 h-6" src="/back.png" alt="back" />
      <AvatarFallback>{"<"}</AvatarFallback>
    </Avatar>
    <main className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-semibold mt-8 mb-12 text-center">Selecione uma Carona</h1>

      {caronas.map(carona => (
        <button key={carona.id} onClick={() => handleSelectCarona(carona)} type="button" className="p-4 border shadow w-full rounded-xl text-left mt-4">
          <div>
            <div className="font-medium">{carona.destino}</div>
            <div className="mt-2">
              <div className="text-gray-600 text-sm">{carona.data}</div>
              <div className="text-gray-600 text-sm">{carona.valor}</div>
            </div>
          </div>
        </button>
      ))}
    </main>
    </>
  );
}