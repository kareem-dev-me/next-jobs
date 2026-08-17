import Image from "next/image";

type FigmaAssetProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function FigmaAsset({
  src,
  alt,
  width,
  height,
  className,
}: FigmaAssetProps) {
  const isSvg = src.endsWith(".svg");

  return (
    <span
      className={`relative inline-flex overflow-clip ${className ?? ""}`}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized={isSvg}
        className="size-full object-contain"
      />
    </span>
  );
}
