'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useEffect } from 'react';

export default function RegisterLogin() {
  const form = useForm();
  const router = useRouter();

  const handleSubmit = form.handleSubmit((data) => {
    if (!data.email || !data.email.includes('@')) {
      form.setError('email', { type: 'manual', message: 'Email inválido' });
      return;
    }

    if (!data.password || data.password.length < 8) {
      form.setError('password', { type: 'manual', message: 'A senha deve ter no mínimo 8 caracteres' });
      return;
    }

    localStorage.setItem('passageiro-1', JSON.stringify(data));

    router.push('/cadastro-passageiro-2');
  });

  useEffect(() => {
    const data = localStorage.getItem('passageiro-1');
    if (data) {
      const parsed = JSON.parse(data);
      form.setValue('email', parsed.email);
      form.setValue('password', parsed.password);
    }
  }, [form])

  return (
    <>
    <Avatar className='mt-6 ml-4' onClick={() => router.back()}>
      <AvatarImage className="w-6 h-6" src="/back.png" alt="back" />
      <AvatarFallback>{"<"}</AvatarFallback>
    </Avatar>
    <main className="flex flex-col items-center h-screen">
      <div className="w-full rounded-xl p-6 mt-8">
        <h1 className="text-3xl font-semibold mb-24 text-center">Cadastre-se</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Etapa 1 de 2
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Preencha com seu login para prosseguir
        </p>
        <Form {...form}>
          <form className='mt-6' onSubmit={handleSubmit}>
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem className="mt-4">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@exemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem className="mt-4">
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Digite sua senha" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-6 w-full">Prosseguir</Button>
          </form>
        </Form>
      </div>
    </main>
    </>
  );
}