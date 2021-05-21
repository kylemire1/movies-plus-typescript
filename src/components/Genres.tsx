import { Genre } from '@/lib/movies';

const Genres = ({ genres }: { genres: Genre[] | undefined }) => {
  if (!genres || !genres.length) {
    return null;
  }

  return (
    <ul className="flex mt-2 flex-wrap">
      {genres.map(({ id, name }, idx) => {
        return (
          <li key={id} className="mr-1">
            {idx !== 0 && <span aria-hidden={true}>• </span>}
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default Genres;
