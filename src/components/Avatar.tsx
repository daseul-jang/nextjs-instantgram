type Props = {
  image?: string | null;
  size?: 'small' | 'big';
  gradient?: boolean;
};

export default function Avatar({
  image,
  size = 'small',
  gradient = true,
}: Props) {
  return (
    <div
      className={`${size === 'small' ? 'w-9 h-9' : 'w-14 h-14'} rounded-full ${
        gradient
          ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'
          : null
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className='rounded-full p-[0.1rem]'
        alt='user profile'
        src={image ?? undefined}
        referrerPolicy='no-referrer'
      />
    </div>
  );
}
