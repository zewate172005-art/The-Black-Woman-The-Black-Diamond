interface BlackDiamondProps {
  size?: number;
  className?: string;
}

export default function BlackDiamond({ size = 24, className = '' }: BlackDiamondProps) {
  return (
    <img
      src="/images/diamond.png"
      alt="Black Diamond"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
