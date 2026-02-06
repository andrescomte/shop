'use client';

import Stack from '@mui/material/Stack';

import { BackToTopButton } from 'src/components/animate/back-to-top-button';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeContact } from '../home-contact';
import { HomeStory } from '../home-story';
import { HomeStoreInfo } from '../home-store-info';
import { HomeHeroBanner } from '../home-hero-banner';
import { HomeFeaturesCarousel } from '../home-features-carousel';
import { HomeFeaturedProducts } from '../home-featured-products';

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={[(theme) => ({ position: 'fixed', zIndex: theme.zIndex.appBar + 1 })]}
      />

      <BackToTopButton />

      <HomeHeroBanner />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <HomeFeaturesCarousel />

        <HomeFeaturedProducts />

        <HomeStory />

        <HomeStoreInfo />

        <HomeContact />
      </Stack>
    </>
  );
}
