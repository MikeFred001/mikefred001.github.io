import Image, { ImageProps } from "next/image";

export default function ScalableImage({
  className = "",
  containerClassName = "",
  src,
  alt = "",
  width,
  height,
  isLoading = false,
  ...props
}: IScalableImageProps) {
  return (
    <div
      className={`relative ${containerClassName}`}
      style={{
        width: width ? `${width}px` : "auto",
        height: height ? `${height}px` : "auto",
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${className}`}
        style={{ objectFit: "cover" }}
        {...props}
      />
    </div>
  );
}

interface IScalableImageProps extends Omit<ImageProps, "src" | "loading"> {
  className?: string;
  containerClassName?: string;
  isLoading?: boolean;
  src: string;
  width?: number;
  height?: number;
}
