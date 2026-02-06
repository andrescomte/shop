import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

import { _ecommerceLatestProducts } from 'src/_mock';

import { varFade } from 'src/components/animate';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

export function HomeFeaturedProducts({ sx, ...other }: BoxProps) {
  const carousel = useCarousel({
    align: 'start',
    slidesToShow: { xs: 1, sm: 2, md: 3 },
    slideSpacing: '24px',
  });

  return (
    <Box sx={[{ py: { xs: 8, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]} {...other}>
      <Container>
        <SectionTitle
          caption="destacados"
          title="Productos más amados"
          txtGradient="hoy"
          description="Selección de velas y difusores que nuestros clientes recomiendan."
          sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}
          slotProps={{
            description: { sx: { maxWidth: 520, mx: 'auto' } },
          }}
        />

        <Carousel carousel={carousel}>
          {_ecommerceLatestProducts.map((item) => (
            <Stack
              key={item.id}
              component={m.div}
              variants={varFade('inUp', { distance: 24 })}
              sx={(theme) => ({
                p: 2.5,
                borderRadius: 2,
                bgcolor: theme.vars.palette.background.paper,
                boxShadow: theme.vars.shadows[1],
              })}
            >
              <Box
                component="img"
                alt={item.name}
                src={item.coverUrl}
                sx={{
                  width: 1,
                  height: 220,
                  objectFit: 'cover',
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                {item.name}
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                {item.priceSale ? (
                  <>
                    <Typography variant="subtitle1">{fCurrency(item.priceSale)}</Typography>
                    <Typography
                      variant="body2"
                      sx={{ textDecoration: 'line-through', color: 'text.disabled' }}
                    >
                      {fCurrency(item.price)}
                    </Typography>
                  </>
                ) : (
                  <Typography variant="subtitle1">{fCurrency(item.price)}</Typography>
                )}
              </Stack>
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
