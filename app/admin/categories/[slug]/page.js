import { prisma } from '@/lib/prisma';
import ListTitle from '../../LIstTitle';
import UpdateCategoryForm from './UpdateCategoryForm';

export default async function SingleCategoryPage({ params }) {
  const category = await prisma.category.findUnique({
    where: {
      slug: params.slug,
    },
  });
  const vendors = await prisma.vendor.findMany();
  return (
    <>
      <ListTitle href={`/admin/categories/${category.slug}`}>{category.name}</ListTitle>
      <UpdateCategoryForm category={category} vendors={vendors} />
    </>
  );
}
