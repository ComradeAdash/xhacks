import { Carousel } from '@mantine/carousel';
import { Button, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './CarouselCard.module.css';

function Card({ image, title, category, description }) {
  const hasImage = Boolean(image);
  const style = hasImage ? { backgroundImage: `url(${image})` } : { backgroundColor: 'var(--mantine-color-gray-0)' };

  return (
    <Paper shadow="md" p="xl" radius="md" style={style} className={classes.card}>
      {!hasImage ? (
        <div className={classes.placeholder}>
          <Title order={4}>{title ?? 'No posts yet'}</Title>
          <Text size="sm" color="dimmed">No image yet — upload a photo to make this post stand out</Text>
        </div>
      ) : (
        <div className={classes.overlay}>
          <Text className={classes.category} size="xs">{category}</Text>
          <Title order={3} className={classes.title}>{title}</Title>
          {description && (
            <Text className={classes.description} mt="sm" lineClamp={4}>
              {description}
            </Text>
          )}
        </div>
      )}
    </Paper>
  );
}

export const defaultCarouselData = [];

export function CardsCarousel({ items }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const carouselItems = items && items.length > 0 ? items : defaultCarouselData;

  const slides = (carouselItems.length > 0 ? carouselItems : [{ id: 'placeholder', title: 'No posts yet', category: '', image: '' }]).map((item, index) => (
    <Carousel.Slide key={item.id ?? `${item.title}-${index}`}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="100%"
      slideGap={2}
      emblaOptions={{ align: 'start', slidesToScroll: 1 }}
      nextControlProps={{ 'aria-label': 'Next slide' }}
      previousControlProps={{ 'aria-label': 'Previous slide' }}
    >
      {slides}
    </Carousel>
    
  );
}

export default CardsCarousel;