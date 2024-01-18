'use client';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { addVendor } from './actions';
import { vendorSchema } from '../vendorSchema';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function newVendor() {
  const form = useForm({ resolver: zodResolver(vendorSchema), defaultValues: { name: '', slug: '' } });
  const router = useRouter();

  async function onSubmit(values) {
    const newVendor = await addVendor({ name: values.name, slug: values.slug });
    router.push(`/admin/vendors/${newVendor.slug}`);
    toast('Vendor Created');
  }
  return (
    <div className="flex-1">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Add</Button>
        </form>
      </Form>
    </div>
  );
}
