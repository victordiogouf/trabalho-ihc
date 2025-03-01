'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';

export default function Cenario1() {
  const form = useForm();

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

    if (data.password.length < 8) {
      form.setError('password', { type: 'manual', message: 'A senha deve ter no mínimo 8 caracteres' });
      return;
    }

    if (data.password !== data.confirmPassword) {
      form.setError('confirmPassword', { type: 'manual', message: 'As senhas não coincidem' });
      return;
    }
  });

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="w-90 rounded-xl p-6 border shadow">
        <h1 className="text-xl font-semibold">Bem Vindo</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Preencha o formulário abaixo para se cadastrar no sistema
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
                    <Input type="number" placeholder="32911001100" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem className="mt-4">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="email@exemplo.com" {...field} />
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({field}) => (
                <FormItem className="mt-4">
                  <FormLabel>Confirme sua senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Confirme sua senha" {...field} />
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
  );
}