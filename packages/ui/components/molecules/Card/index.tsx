import Image from '../../../../../apps/web/node_modules/next/image';

const Card = ({ variant, icon, username, img, description, caption }: Card) => {
  let bg = 'bg-orange-500';
  switch (variant) {
    case 'primary':
      bg = 'bg-yellow-500';
      break;
    case 'secondary':
      bg = 'bg-blue-500';
      break;
    case 'tertiary':
      bg = 'bg-navy-500';
      break;
    default:
      break;
  }

  return (
    <div>
      <div className={`${bg} h-[644px] w-[471px] rounded-3xl`}>
        <div className="flex h-[60px]">
          <div className="pt-1.5 pl-2">
            <Image
              src={icon}
              alt="icon"
              width={48}
              height={48}
              className="rounded-full border-black"
            />
          </div>
          <div className="ml-4 pt-3 text-2xl font-bold text-white">
            {username}
          </div>
        </div>
        <div>
          <Image
            src={img}
            alt={description || 'image'}
            width={471}
            height={471}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="pt-8 pl-8 text-2xl font-bold text-white">
          {caption}
        </div>
      </div>
    </div>
  );
};

export default Card;
