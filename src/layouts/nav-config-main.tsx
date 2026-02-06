import type { NavMainProps } from './main/nav/types';

import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const navData: NavMainProps['data'] = [
  { title: 'Inicio', path: '/' },
  { title: 'Productos', path: paths.product.root },
  { title: 'Tiendas', path: paths.stores },
  { title: 'Aromas', path: paths.aromas },
  { title: 'Promociones', path: paths.promotions },
  { title: 'Nosotros', path: paths.about },
];
