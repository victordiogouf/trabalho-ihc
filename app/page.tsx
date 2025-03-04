import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen p-6">
      <h1 className="text-2xl font-bold">Trabalho IHC</h1>
      <p className="mt-4 text-lg text-center">
        Prototipação dos cenários descritos no trabalho de IHC
      </p>
      <div className="mt-8">
        <Link
          href="/cadastro-passageiro-1"
          className="text-lg font-semibold text-primary underline-offset-4 hover:underline"
        >
          Cenário 1
        </Link>
      </div>
      <div className="mt-4">
        <Link
          href="/avaliar-carona-1"
          className="text-lg font-semibold text-primary underline-offset-4 hover:underline"
        >
          Cenário 2
        </Link>
      </div>
      <div className="mt-4">
        <Link
          href="/cadastro-motorista-1"
          className="text-lg font-semibold text-primary underline-offset-4 hover:underline"
        >
          Cenário 3
        </Link>
      </div>
    </main>
  );
}
