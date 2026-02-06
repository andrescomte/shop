import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

const STORE_INFO = [
  {
    label: 'Horario de atención',
    value: 'Lunes a sábado, 10:00 - 19:00 hrs',
  },
  {
    label: 'Tienda física',
    value: 'Av. Providencia 1234, Santiago',
  },
  {
    label: 'Retiro en tienda',
    value: 'Disponible en 2 horas para compras online.',
  },
  {
    label: 'Atención personalizada',
    value: 'Escríbenos y te ayudamos a elegir tu aroma ideal.',
  },
];

export function HomeStoreInfo({ sx, ...other }: BoxProps) {
  return (
    <Box sx={[{ py: { xs: 8, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]} {...other}>
      <Container>
        <SectionTitle
          caption="tienda"
          title="Visítanos"
          txtGradient="en persona"
          description="Te esperamos para que pruebes las fragancias y encuentres la vela perfecta."
          sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}
          slotProps={{
            description: { sx: { maxWidth: 520, mx: 'auto' } },
          }}
        />

        <Stack
          spacing={3}
          sx={{
            maxWidth: 720,
            mx: 'auto',
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            bgcolor: 'background.paper',
            boxShadow: (theme) => theme.vars.shadows[1],
          }}
        >
          {STORE_INFO.map((item) => (
            <Stack key={item.label} spacing={0.5}>
              <Typography variant="subtitle2">{item.label}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.value}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
