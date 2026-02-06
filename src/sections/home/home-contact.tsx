import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

export function HomeContact({ sx, ...other }: BoxProps) {
  return (
    <Box sx={[{ py: { xs: 8, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]} {...other}>
      <Container>
        <Stack spacing={6}>
          <SectionTitle
            caption="contáctanos"
            title="¿Tienes dudas?"
            txtGradient="Escríbenos"
            description="Cuéntanos qué buscas y te ayudaremos a encontrar la vela ideal."
            sx={{ textAlign: 'center' }}
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
            <TextField fullWidth label="Nombre" />
            <TextField fullWidth label="Correo electrónico" />
            <TextField fullWidth label="Asunto" />
            <TextField fullWidth label="Mensaje" multiline rows={4} />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button size="large" variant="contained">
                Enviar mensaje
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
