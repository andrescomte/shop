import type { Metadata } from 'next';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `Aromas - ${CONFIG.appName}` };

export default function Page() {
  return (
    <Container sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Aromas
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>
        Explora nuestra selección de aromas. Aquí podrás filtrar por notas, intensidad y temporada.
      </Typography>
    </Container>
  );
}
