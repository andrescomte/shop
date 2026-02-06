import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade } from 'src/components/animate';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

const FEATURES = [
  {
    title: '0% siliconas y parafinas',
    description: 'Fórmulas limpias y amigables con tu hogar.',
  },
  {
    title: 'Hecho en Chile',
    description: 'Producción local con proveedores certificados.',
  },
  {
    title: 'Fragancias premium',
    description: 'Aromas de alta duración y mezclas exclusivas.',
  },
  {
    title: 'Lo mejor en velas',
    description: 'Diseños que decoran y acompañan cada momento.',
  },
  {
    title: 'Envíos a todo el país',
    description: 'Empaques cuidadosos y entrega segura.',
  },
];

export function HomeFeaturesCarousel({ sx, ...other }: BoxProps) {
  const carousel = useCarousel({
    align: 'start',
    slidesToShow: { xs: 1, sm: 2, md: 3 },
    slideSpacing: '24px',
  });

  return (
    <Box sx={[{ py: { xs: 8, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]} {...other}>
      <Container>
        <SectionTitle
          caption="beneficios"
          title="Por qué elegirnos"
          txtGradient="siempre"
          description="Detalles que marcan la diferencia en cada vela."
          sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}
          slotProps={{
            description: { sx: { maxWidth: 520, mx: 'auto' } },
          }}
        />

        <Carousel carousel={carousel}>
          {FEATURES.map((item) => (
            <Stack
              key={item.title}
              component={m.div}
              variants={varFade('inUp', { distance: 24 })}
              sx={(theme) => ({
                p: 3,
                height: '100%',
                borderRadius: 2,
                bgcolor: theme.vars.palette.background.paper,
                boxShadow: theme.vars.shadows[1],
              })}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.description}
              </Typography>
            </Stack>
          ))}
        </Carousel>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mt: 3 }}
        >
          <CarouselDotButtons
            variant="rounded"
            scrollSnaps={carousel.dots.scrollSnaps}
            selectedIndex={carousel.dots.selectedIndex}
            onClickDot={carousel.dots.onClickDot}
          />
          <CarouselArrowBasicButtons {...carousel.arrows} options={carousel.options} />
        </Stack>
      </Container>
    </Box>
  );
}
