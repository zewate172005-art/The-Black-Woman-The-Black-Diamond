export default function BookCover({ className = '' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl select-none ${className}`}>
      <img
        src="/logo copy.jpg"
        alt="The Black Woman, The Black Diamond — by Daina Mutindi"
        className="w-full h-full object-cover"
        draggable={false}
      />
    </div>
  );
}
