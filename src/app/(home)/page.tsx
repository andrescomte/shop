import type { Metadata } from 'next';

import { CONFIG } from 'src/global-config';
import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `Home - ${CONFIG.appName}` };

export default async function Page() {
  return <HomeView />;
}
