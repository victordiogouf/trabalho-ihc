export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Trabalho IHC</h1>
      <p className="mt-4 text-lg text-center">
        Prototipação dos cenários descritos no trabalho de IHC
      </p>
      <div className="mt-8">
        <a
          href="/cenario-1"
          className="text-lg font-semibold text-primary underline-offset-4 hover:underline"
        >
          Cenário 1
        </a>
      </div>
      <div className="mt-4">
        <a
          href="/cenario-2"
          className="text-lg font-semibold text-primary underline-offset-4 hover:underline"
        >
          Cenário 2
        </a>
      </div>
      <div className="mt-4">
        <a
          href="/cenario-3"
          className="text-lg font-semibold text-primary underline-offset-4 hover:underline"
        >
          Cenário 3
        </a>
      </div>
    </main>
  );
}
