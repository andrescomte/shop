import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

export function HomeStory({ sx, ...other }: BoxProps) {
  return (
    <Box sx={[{ py: { xs: 8, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]} {...other}>
      <Container>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <SectionTitle
            caption="nuestra historia"
            title="Encendimos"
            txtGradient="una pasión"
            description="Todo comenzó con el deseo de crear momentos más cálidos. Hoy cada vela lleva
            ingredientes de calidad, esencias cuidadosamente seleccionadas y el trabajo de manos
            locales."
            slotProps={{
              description: { sx: { maxWidth: 680, mx: 'auto' } },
            }}
            sx={{ alignItems: 'center' }}
          />

          <Typography variant="body1" sx={{ maxWidth: 720, color: 'text.secondary' }}>
            Nuestro compromiso es diseñar experiencias sensoriales que acompañen cada espacio.
            Trabajamos con cera vegetal, mechas de algodón y envases reutilizables para que la
            belleza se sienta y también se vea.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
