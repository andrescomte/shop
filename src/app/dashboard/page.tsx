import type { Metadata } from 'next';

import { redirect } from 'next/navigation';

import { CONFIG } from 'src/global-config';

import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `Dashboard - ${CONFIG.appName}` };

export default function Page() {
  redirect(paths.dashboard.order.root);
}
