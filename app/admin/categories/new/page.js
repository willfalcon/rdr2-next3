import Title from '@/components/Title';
import { prisma } from '@/lib/prisma';
import CreateCategoryForm from './CreateCategoryForm';

export default async function newCategory() {
  const vendors = await prisma.vendor.findMany();

  return (
    <div className="flex-1">
      <Title h2>New Category</Title>
      <CreateCategoryForm vendors={vendors} />
    </div>
  );
}
