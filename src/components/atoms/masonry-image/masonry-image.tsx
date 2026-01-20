import Image from 'next/image';
import ImageActions from '@/components/molecules/image-actions';

interface MasonryImageProps {
    id: number;
    src: string;
    alt: string;
    width: number;
    height: number;
}

const MasonryImage = ({ id, src, alt, width, height }: MasonryImageProps) => {
    return (
        <div className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-neutral-800/50 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="relative overflow-hidden">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Action buttons (Client Component) */}
                <ImageActions imageId={id} />
            </div>
        </div>
    );
};

export default MasonryImage;
