'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function CadastroMotorista2() {
  const [registered, setRegistered] = useState(false);
  const form = useForm();
  const router = useRouter();

  const handleSubmit = form.handleSubmit((data) => {
    if (!data.identity) {
      form.setError('identity', { type: 'manual', message: 'O número do documento de identidade é obrigatório' });
      return;
    }

    if (!data.cpf || data.cpf.length != 11) {
      form.setError('cpf', { type: 'manual', message: 'O CPF deve ter 11 dígitos' });
      return;
    }

    if (!data.cnh || data.cnh.length != 11) {
      form.setError('cnh', { type: 'manual', message: 'A CNH deve ter 11 dígitos' });
      return;
    }

    setRegistered(true);
  });

  if (registered) {
    setTimeout(() => router.push('/'), 2000);

    return (
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="w-full p-6">
          <h1 className="text-3xl font-semibold mt-2 text-center">Cadastro concluído!</h1>
        </div>
      </main>
    );
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
    <main className="flex flex-col items-center h-screen">
      <div className="w-full rounded-xl p-6 mt-8">
        <h1 className="text-3xl font-semibold mb-12 text-center">Cadastre-se</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Etapa 2 de 2
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Preencha com os dados restantes para se cadastrar
        </p>
        <Form {...form}>
          <form className='mt-6' onSubmit={handleSubmit}>
            <FormField 
              control={form.control}
              name="identity"
              render={({field}) => (
                <FormItem className="mt-4">
                  <FormLabel>Número do Documento de Identidade</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cpf"
              render={({field}) => (
                <FormItem className="mt-4">
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="xxxxxxxxxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cnh"
              render={({field}) => (
                <FormItem className="mt-4">
                  <FormLabel>CNH</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="xxxxxxxxxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-6 w-full">Cadastrar</Button>
          </form>
        </Form>
      </div>
    </main>
    </>
  );
}