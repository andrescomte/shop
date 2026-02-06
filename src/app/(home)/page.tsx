import type { Metadata } from 'next';

import { CONFIG } from 'src/global-config';
import { getProducts } from 'src/actions/product-ssr';

import { ProductShopView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `Home - ${CONFIG.appName}` };

export default async function Page() {
  const { products } = await getProducts();

  return <ProductShopView products={products} />;
}
