import MasonryImage from '@/components/atoms/masonry-image';
import SearchBar from '@/components/molecules/search-bar';
import FloatingAddButton from '@/components/atoms/floating-add-button';

// Generate image data with stable seeds (no Math.random for SSR consistency)
const generateImages = (count: number) => {
    const heights = [300, 350, 400, 450, 500, 550, 600];
    return Array.from({ length: count }, (_, i) => {
        // Use deterministic pattern based on index
        const height = heights[i % heights.length];
        const width = 400;
        const seed = (i * 7 + 13) % 1000; // Stable seed based on index
        return {
            id: i,
            src: `https://picsum.photos/seed/${seed}/${width}/${height}`,
            alt: `Gallery image ${i + 1}`,
            width,
            height,
        };
    });
};

const MasonryGrid = () => {
    const images = generateImages(30);

    return (
        <div className="min-h-screen bg-linear-to-br from-neutral-950 via-neutral-900 to-neutral-950">
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-xl bg-neutral-950/80 border-b border-neutral-800/50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                            </svg>
                        </div>
                        <h1 className="text-xl font-bold bg-linear-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                            Masonry Gallery
                        </h1>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* SearchBar is a Client Component */}
                        <SearchBar />
                    </div>
                </div>
            </header>

            {/* Masonry Grid */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
                    {images.map((image) => (
                        <MasonryImage
                            key={image.id}
                            id={image.id}
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                        />
                    ))}
                </div>
            </main>

            {/* Floating action button (Client Component) */}
            <FloatingAddButton />
        </div>
    );
};

export default MasonryGrid;
