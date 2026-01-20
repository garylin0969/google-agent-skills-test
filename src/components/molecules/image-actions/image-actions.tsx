'use client';

interface ImageActionsProps {
    imageId: number;
}

const ImageActions = ({ imageId }: ImageActionsProps) => {
    const handleSave = () => {
        console.log(`Saved image ${imageId}`);
    };

    const handleShare = () => {
        console.log(`Shared image ${imageId}`);
    };

    return (
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
            <button
                onClick={handleSave}
                className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-neutral-800 backdrop-blur-sm transition-colors hover:bg-white"
            >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                Save
            </button>
            <button
                onClick={handleShare}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-neutral-800 backdrop-blur-sm transition-colors hover:bg-white"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                </svg>
            </button>
        </div>
    );
};

export default ImageActions;
