import type { Metadata } from 'next';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `Tiendas - ${CONFIG.appName}` };

export default function Page() {
  return (
    <Container sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Tiendas
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>
        Encuentra nuestras tiendas físicas y puntos de venta. Próximamente agregaremos el listado
        completo con direcciones y horarios.
      </Typography>
    </Container>
  );
}
