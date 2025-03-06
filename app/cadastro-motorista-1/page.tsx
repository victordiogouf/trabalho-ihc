'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useEffect } from 'react';

export default function CadastroMotorista1() {
  const form = useForm();
  const router = useRouter();

  const handleSubmit = form.handleSubmit((data) => {
    if (!data['full-name'] || data['full-name'].length < 3) {
      form.setError('full-name', { type: 'manual', message: 'O nome deve ter no mínimo 3 caracteres' });
      return;
    }
    
    if (!data.birthday) {
      form.setError('birthday', { type: 'manual', message: 'A data de nascimento é obrigatória' });
      return;
    }

    if (!data.sex) {
      form.setError('sex', { type: 'manual', message: 'O sexo é obrigatório' });
      return;
    }

    localStorage.setItem('motorista-1', JSON.stringify(data));

    router.push('/cadastro-motorista-2');
  });

  useEffect(() => {
    const data = localStorage.getItem('motorista-1');
    if (data) {
      const parsed = JSON.parse(data);
      form.setValue('full-name', parsed['full-name']);
      form.setValue('birthday', parsed.birthday);
      form.setValue('sex', parsed.sex);
    }
  }, [form]);

  return (
    <>
    <Avatar className='mt-6 ml-4' onClick={() => router.back()}>
      <AvatarImage className="w-6 h-6" src="/back.png" alt="back" />
      <AvatarFallback>{"<"}</AvatarFallback>
    </Avatar>
    <main className="flex flex-col items-center h-screen">
      <div className="w-full rounded-xl p-6 mt-8">
        <h1 className="text-3xl font-semibold mb-12 text-center">Cadastre-se</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Etapa 1 de 2
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Preencha algumas informações para prosseguir
        </p>
        <Form {...form}>
          <form className='mt-6' onSubmit={handleSubmit}>
            <FormField
              control={form.control}
              name="full-name"
              render={({field}) => (
                <FormItem className="mt-4">
                  <FormLabel>Nome Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu Nome Completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthday"
              render={({field}) => (
                <FormItem className="mt-4">
                  <FormLabel>Data de Nascimento</FormLabel>
                  <FormControl>
                    <Input type="date" {...field}  className='w-full'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sex"
              render={({field}) => (
                <FormItem className="mt-4">
                  <FormLabel>Sexo</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-row space-x-6 mt-2"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="masculino" className='border-gray-400' />
                        </FormControl>
                        <FormLabel>Masculino</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="feminino" className='border-gray-400' />
                        </FormControl>
                        <FormLabel>Feminino</FormLabel>
                      </FormItem>
                    </RadioGroup>
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