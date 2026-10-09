import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { Coffee, UtensilsCrossed, Candy, Leaf } from 'lucide-react';

interface SmartImageProps extends Omit<ImageProps, 'fill' | 'width' | 'height'> {
  ratio?: string; // e.g. "4/3", "1/1", "16/9"
  fallbackIcon?: 'bowl' | 'burger' | 'cup' | 'sweet' | 'leaf';
  fallbackName?: string;
}

export default function SmartImage({
  src,
  alt,
  ratio = "4/3",
  priority = false,
  className = "",
  fallbackIcon = "leaf",
  fallbackName = "Image",
  ...props
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(!priority);

  const renderFallbackIcon = () => {
    switch (fallbackIcon) {
      case 'cup': return <Coffee size={32} className="text-sage-400 mb-2" />;
      case 'bowl': return <UtensilsCrossed size={32} className="text-sage-400 mb-2" />;
      case 'sweet': return <Candy size={32} className="text-sage-400 mb-2" />;
      case 'burger': return <UtensilsCrossed size={32} className="text-sage-400 mb-2" />;
      default: return <Leaf size={32} className="text-sage-400 mb-2" />;
    }
  };

  if (!src || hasError) {
    return (
      <div 
        className={`relative w-full overflow-hidden bg-sage-100 flex flex-col items-center justify-center border border-sage-200 ${className}`} 
        style={{ aspectRatio: ratio }}
      >
        {renderFallbackIcon()}
        <span className="text-xs font-heading font-bold text-sage-400 text-center px-4 leading-tight">{fallbackName}</span>
      </div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ aspectRatio: ratio }}>
      {/* Shimmer loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-sage-100 animate-pulse -z-10 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-r from-sage-100 via-cream to-sage-100 bg-[length:200%_100%] animate-shimmer" />
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover object-center z-10 transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        sizes="(max-width: 768px) 100vw, 500px"
        {...props}
      />
    </div>
  );
}
