import { Data } from "@/projectData/data";
import Link from "next/link";

type Props = {
  product: Data;
};

function Product({ product }: Props) {
  return (
    <Link
      href={product.url}
      target='_'
      className='relative inline-block md:w-1/2 lg:w-1/3 xl:w-1/4 h-[300px] border-2 border-orange-100'
    >
      <img
        src={product.image}
        className='h-full object-cover w-full'
        alt='project'
      />
      <p className='flex items-center px-4 uppercase text-white font-semibold absolute bottom-0 project-bg h-16 w-full'>
        {product.name}
      </p>
    </Link>
  );
}

export default Product;
