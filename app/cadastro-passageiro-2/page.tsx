'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';

export default function RegisterPersonalInfo() {
  const [registered, setRegistered] = useState(false);
  const form = useForm();
  const router = useRouter();

  const handleSubmit = form.handleSubmit((data) => {
    if (!data.name || data.name.length < 3) {
      form.setError('name', { type: 'manual', message: 'O nome deve ter no mínimo 3 caracteres' });
      return;
    }

    if (!data.lastName || data.lastName.length < 3) {
      form.setError('lastName', { type: 'manual', message: 'O sobrenome deve ter no mínimo 3 caracteres' });
      return;
    }

    if (!data.phone || data.phone.length != 11) {
      form.setError('phone', { type: 'manual', message: 'O telefone deve ter 11 dígitos' });
      return;
    }

    setRegistered(true);
  });

  if (registered) {
    setTimeout(() => router.push('/'), 2000);

    return (
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="w-full p-6">
          <h1 className="text-3xl font-semibold mt-2 text-center">Cadastrado concluído!</h1>
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
      <div className="w-full p-6 mt-8">
        <h1 className="text-3xl font-semibold mb-12 text-center">Cadastre-se</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Etapa 2 de 2
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Preencha com seus dados para se cadastrar
        </p>
        <Form {...form}>
          <form className='mt-6' onSubmit={handleSubmit}>
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({field}) => (
                <FormItem className="mt-4">
                  <FormLabel>Sobrenome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu sobrenome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({field}) => (
                <FormItem className="mt-4">
                  <FormLabel>Telefone</FormLabel>
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