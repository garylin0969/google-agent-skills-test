import Image from 'next/image';
import ImageActions from '@/components/molecules/image-actions';

/**
 * 瀑布流圖片卡片的屬性介面
 */
interface MasonryImageProps {
    /** 圖片唯一識別碼 */
    id: number;
    /** 圖片來源網址 */
    src: string;
    /** 圖片替代文字 */
    alt: string;
    /** 圖片寬度 (像素) */
    width: number;
    /** 圖片高度 (像素) */
    height: number;
}

/**
 * 瀑布流圖片卡片元件。
 *
 * 負責顯示單張圖片，並在滑鼠懸停時顯示漸層覆蓋與操作按鈕。
 * 使用 CSS transition 實現平滑的縮放與淡入效果。
 *
 * @param {Object} props - 元件參數
 * @param {number} props.id - 圖片唯一識別碼
 * @param {string} props.src - 圖片來源網址
 * @param {string} props.alt - 圖片替代文字
 * @param {number} props.width - 圖片寬度 (像素)
 * @param {number} props.height - 圖片高度 (像素)
 * @return {JSX.Element} 渲染後的圖片卡片 UI
 */
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
