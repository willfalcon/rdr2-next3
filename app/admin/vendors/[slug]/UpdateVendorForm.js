'use client';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { deleteVendor, updateVendor } from './actions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { vendorSchema } from '../vendorSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function UpdateVendorForm({ vendor }) {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(vendorSchema),
    defaultValues: {
      ...vendor,
    },
  });

  async function onSubmit(values) {
    const updatedVendor = await updateVendor(vendor.id, values);
    console.log(updatedVendor);
    toast('Vendor Updated');
    router.push(`/admin/vendors/${updatedVendor.slug}`);
  }
  return (
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
        <div className="flex items-center justify-between">
          <Button type="submit">Update</Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="icon">
                <Trash2 />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete vendor?</AlertDialogTitle>
                <AlertDialogDescription>
                  You are about to delete the vendor {vendor.name}. Are you sure you want to do that?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={async () => {
                    await deleteVendor(vendor.id);
                    toast('Vendor deleted');
                    router.push('/admin/vendors');
                  }}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </form>
    </Form>
  );
}
