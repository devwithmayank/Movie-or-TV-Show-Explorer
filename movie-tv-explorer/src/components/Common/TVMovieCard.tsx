interface TVMovieCardProps {
  image: string;
  title?: string;
  description?: string;
  rating?: number;
}

const TVMovieCard = ({ image }: TVMovieCardProps) => {
  return <div className="flex flex-col gap-2">
    <img src={image} alt='tv-show-image' className='w-full h-full object-cover' />
  </div>;
};

export default TVMovieCard;
