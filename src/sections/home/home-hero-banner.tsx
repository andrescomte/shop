import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

export function HomeHeroBanner({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          position: 'relative',
          overflow: 'hidden',
          bgcolor: theme.vars.palette.grey[900],
          color: 'common.white',
          py: { xs: 10, md: 14 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        sx={{
          inset: 0,
          position: 'absolute',
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.75), rgba(0,0,0,0.2)), url(${CONFIG.assetsDir}/assets/images/home/hero-blur.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9,
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={4} sx={{ maxWidth: 600 }}>
          <Typography variant="overline" sx={{ letterSpacing: 3, opacity: 0.7 }}>
            Velas y aromas premium
          </Typography>

          <Typography variant="h1">
            Ilumina tus espacios con velas hechas en Chile.
          </Typography>

          <Typography variant="body1" sx={{ opacity: 0.84 }}>
            Descubre fragancias únicas, ingredientes responsables y diseños que transforman cada
            rincón en un ritual de bienestar.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              component={RouterLink}
              href={paths.promotions}
              color="inherit"
              size="large"
              variant="contained"
            >
              Ver colecciones
            </Button>
            <Button
              component={RouterLink}
              href={paths.contact}
              color="inherit"
              size="large"
              variant="outlined"
            >
              Contáctanos
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
