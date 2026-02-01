import { useMemo, useState } from 'react';
import UploadButton from './UploadButton';
import CreatePostModal from './CreatePostModal';
import CardsCarousel from './Carousel';
import { LOCATIONS } from './locations';

export default function Feed() {
  const [opened, setOpened] = useState(false);
  const [posts, setPosts] = useState([]); // or load from DB for “live”

  const carouselItems = useMemo(() => {
    const locById = new Map(LOCATIONS.map((l) => [l.id, l]));

    return posts.map((p) => {
      const loc = locById.get(p.locationId);
      return {
        id: p.id,
        image: loc?.image ?? '',
        title: loc?.name ?? 'Unknown location',
        category: 'meetup',
        description: p.description,
      };
    });
  }, [posts]);

  function handleCreate(post) {
    setPosts((prev) => [
      { id: crypto?.randomUUID?.() ?? `p_${Date.now()}`, ...post },
      ...prev,
    ]);
  }

  return (
    <>
      <UploadButton onClick={() => setOpened(true)} />

      <CreatePostModal
        opened={opened}
        onClose={() => setOpened(false)}
        onCreate={handleCreate}
      />

      <CardsCarousel items={carouselItems} />
    </>
  );
}
