'use client';

import { useState } from 'react';

/**
 * 搜尋欄的屬性介面
 */
interface SearchBarProps {
    /** (選填) 輸入框的佔位文字 */
    placeholder?: string;
}

/**
 * 搜尋欄元件。
 *
 * 提供一個帶有搜尋圖示的輸入框，用於搜尋圖片。
 * 使用內部狀態管理輸入值。
 *
 * @param {Object} props - 元件參數
 * @param {string} [props.placeholder='Search images...'] - 輸入框的佔位文字
 * @return {JSX.Element} 渲染後的搜尋欄 UI
 */
const SearchBar = ({ placeholder = 'Search images...' }: SearchBarProps) => {
    const [query, setQuery] = useState('');

    return (
        <div className="relative">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="w-64 px-4 py-2 pl-10 rounded-full bg-neutral-800/50 border border-neutral-700/50 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
            />
            <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </div>
    );
};

export default SearchBar;
