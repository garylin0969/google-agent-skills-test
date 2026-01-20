'use client';

interface FloatingAddButtonProps {
    onClick?: () => void;
}

const FloatingAddButton = ({ onClick }: FloatingAddButtonProps) => {
    const handleClick = () => {
        console.log('Add button clicked');
        onClick?.();
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-linear-to-br from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/30 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
        </button>
    );
};

export default FloatingAddButton;
