'use client';

interface ClickableImageProps {
    src: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties;
    width?: string | number;
    height?: string | number;
    propertyId: string | number;
}

export default function ClickableImage({
    src,
    alt = '',
    className,
    style,
    width,
    height,
    propertyId
}: ClickableImageProps) {
    const handleClick = () => {
        console.log(`Property ID Clicked: ${propertyId}`);
    };

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            style={{ ...style, cursor: 'pointer' }}
            width={width}
            height={height}
            onClick={handleClick}
        />
    );
}
