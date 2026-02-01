import { Carousel } from '@mantine/carousel';
import { Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './CarouselCard.module.css';

const categoryLabels = {
  'Maggie Benston Center': 'Maggie Benston Center',
  'Student Union Building (SUB)': 'Student Union Building',
  'West Mall Center': 'West Mall Center',
  'Reacreational Activity': 'Recreation',
  Library: 'Library',
}

function Card({ image, title, category }) {
  const cardStyle = image
    ? { backgroundImage: `url(${image})` }
    : { background: 'linear-gradient(135deg, #1f2937, #111827)' }

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={cardStyle}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {categoryLabels[category] ?? category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

export function CardsCarousel({ items }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const carouselItems = items && items.length > 0
    ? items
    : [
        {
          id: 'placeholder',
          image: '',
          title: 'No posts yet',
          category: 'Be the first to post!',
        },
      ];

  const slides = carouselItems.map((item, index) => (
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