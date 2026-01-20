'use client';

/**
 * 圖片操作按鈕的屬性介面
 */
interface ImageActionsProps {
    /** 圖片唯一識別碼，用於識別操作的目標圖片 */
    imageId: number;
}

/**
 * 圖片操作按鈕群組元件。
 *
 * 提供儲存與分享圖片的互動按鈕。
 * 使用 Hover 動畫，當父層元件被懸停時才會顯示。
 *
 * @param {Object} props - 元件參數
 * @param {number} props.imageId - 圖片唯一識別碼
 * @return {JSX.Element} 渲染後的操作按鈕群組
 */
const ImageActions = ({ imageId }: ImageActionsProps) => {
    /**
     * 處理儲存圖片事件
     */
    const handleSave = () => {
        console.log(`Saved image ${imageId}`);
    };

    /**
     * 處理分享圖片事件
     */
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
