import type { Metadata } from 'next';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `Promociones - ${CONFIG.appName}` };

export default function Page() {
  return (
    <Container sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Promociones
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>
        Descubre las promociones vigentes y descuentos especiales para tus próximas compras.
      </Typography>
    </Container>
  );
}
