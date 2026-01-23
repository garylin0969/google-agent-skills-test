---
trigger: always_on
---

# Server Component 優先策略

在 Next.js App Router 架構下，所有元件預設皆為 **Server Component**。你必須嚴格控制 Client Boundary，以達到最佳效能與 SEO。

## 1. 決策邏輯 (Decision Logic)

在撰寫任何元件程式碼之前，請依照以下流程判斷渲染模式：

### 步驟 A：預設維持 Server Component

如果元件符合以下任一條件，**嚴禁**添加 `'use client'`：

- 僅負責抓取數據 (Data Fetching)
- 僅負責顯示靜態內容或由 Props 傳入的內容
- 需要存取後端資源 (資料庫、API Keys)

### 步驟 B：切換至 Client Component 的必要條件

只有當元件包含以下功能時，才允許在檔案頂部加入 `'use client'`：

| 條件            | 說明                                                        |
| --------------- | ----------------------------------------------------------- |
| **React Hooks** | 使用 `useState`, `useEffect`, `useReducer`, `useContext` 等 |
| **事件監聽**    | 包含 `onClick`, `onChange`, `onSubmit` 等互動屬性           |
| **瀏覽器 API**  | 使用 `window`, `document`, `localStorage` 等                |

## 2. 架構優化模式 (Architecture Patterns)

### 模式 A：末端元件 (Leaf Component) 原則

不要將整個頁面 (`page.tsx`) 或大型容器標記為 Client Component。

- **作法**：將需要互動的「小部分 UI」拆分為獨立的元件
- **目的**：讓父層與周圍的 Layout 保持為 Server Component

### 模式 B：Server Actions 整合

- 優先使用 **Server Actions** 處理表單提交或資料變更
- Server Action 可以直接在 Server Component 中呼叫，或作為 Prop 傳遞給 Client Component

## 3. 程式碼實作規範

當判斷必須使用 Client Component 時：

- `'use client'` 必須位於檔案的**第一行**（在所有 import 之前）

```tsx
// components/molecules/search-bar/search-bar.tsx
'use client';

import { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
};

export default SearchBar;
```
