'use client';

/**
 * 浮動新增按鈕的屬性介面
 */
interface FloatingAddButtonProps {
    /** (選填) 點擊按鈕時的回呼函式 */
    onClick?: () => void;
}

/**
 * 浮動新增按鈕元件。
 *
 * 固定於畫面右下角的圓形按鈕，帶有漸層背景與陰影效果。
 * 點擊時會觸發回呼函式，並在 console 輸出日誌。
 *
 * @param {Object} props - 元件參數
 * @param {() => void} [props.onClick] - 點擊按鈕時的回呼函式
 * @return {JSX.Element} 渲染後的浮動按鈕 UI
 */
const FloatingAddButton = ({ onClick }: FloatingAddButtonProps) => {
    /**
     * 處理按鈕點擊事件
     */
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
