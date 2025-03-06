'use client'

import { Carona, caronas } from "@/app/mock";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function AvaliarCarona2({ params } : { params: Promise<{ id: string }>}) {
  const [rated, setRated] = useState(false);
  const [found, setFound] = useState<Carona | undefined>(undefined);
  const router = useRouter();
  const form = useForm();

  useEffect(() => {
    params.then(({ id }) => {
      const carona = caronas.find(carona => carona.id === Number(id));
      setFound(carona);

      if (!carona) {
        return;
      }

      const rated = localStorage.getItem('av' + carona.id);
      if (rated) {
        const data = JSON.parse(rated);
        form.setValue('nota', data.nota);
        form.setValue('comentario', data.comentario);
      }
    });
  }, [params, form]);


  if (!found) {
    return (<h1 className="w-full h-full text-center mt-26 text-2xl">Carona não encontrada</h1>)
  }

  const handleSubmit = form.handleSubmit((data) => {
    if (!data.nota || data.nota < 0 || data.nota > 5) {
      form.setError('nota', { type: 'manual', message: 'A nota deve ser um valor entre 0 e 5' });
      return;
    }

    localStorage.setItem('av' + found.id, JSON.stringify(data));

    setRated(true);
  });

  if (rated) {
    setTimeout(() => {router.push('/avaliar-carona-1')}, 2000);

    return (
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="w-full p-6">
          <h1 className="text-3xl font-semibold mt-2 text-center">Avaliação Enviada!</h1>
        </div>
      </main>
    )
  }

  return (
    <>
    <div className='flex justify-between'>
      <Avatar className='mt-6 ml-4' onClick={() => router.back()}>
        <AvatarImage className="w-6 h-6" src="/back.png" alt="back" />
        <AvatarFallback>{"<"}</AvatarFallback>
      </Avatar>

      <Avatar className='mt-6 mr-4' onClick={() => router.push('/')}>
        <AvatarImage className="w-6 h-6" src="/cancel.png" alt="back" />
        <AvatarFallback>{"x"}</AvatarFallback>
      </Avatar>
    </div>
    <main className="flex flex-col items-center p-6">
      <h1 className="w-full h-full font-semibold text-center mt-8 text-2xl">Avaliar Carona</h1>
      <div className="rounded-xl p-6 w-full mt-12 shadow border">
        <div className="flex justify-between">
          <div>{found.data}</div>
          <div>{found.valor}</div>
        </div>
        <div className="mt-4 h-px bg-gray-200 mb-4"></div>
        <div className="text-sm"><strong className="font-semibold">Motorista:</strong> {found.motorista}</div>
        <div className="text-sm mt-2"> <strong className="font-semibold">Origem:</strong> {found.origem}</div>
        <div className="text-sm mt-2"><strong className="font-semibold">Destino:</strong> {found.destino}</div>
      </div>
      <div className="rounded-xl p-6 w-full mt-4 shadow border">
      <Form {...form}>
          <form onSubmit={handleSubmit}>
            <FormField
              control={form.control}
              name="nota"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Nota</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Digite uma nota de 0 a 5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comentario"
              render={({field}) => (
                <FormItem className="mt-4">
                  <FormLabel>Comentário</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Digite um comentário" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-6 w-full">Avaliar</Button>
          </form>
        </Form>
      </div>
    </main>
    </>
  )
}