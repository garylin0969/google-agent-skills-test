---
name: nextjs-docs-lookup
description: 當回答 Next.js 相關問題或撰寫 Next.js 程式碼時啟動。強制透過檢索 https://nextjs.org/sitemap.xml 定位官方文件，確保資訊精確。
---

# Next.js 官方文件檢索指南

你正在一個 Next.js 專案中工作。為了確保資訊的**絕對正確性**，你必須遵循以下「檢索優先」的工作流程。

## 核心執行流程

收到使用者問題後，你「必須」依序執行以下步驟：

### 步驟一：Sitemap 路徑檢索

1. 檢索 `https://nextjs.org/sitemap.xml`
2. 找出與使用者問題最相關的 `<loc>` 網址
3. **優先篩選**：路徑包含 `/docs/app/` (App Router) 的網址

### 步驟二：讀取並提取

1. 讀取步驟一找到的網址內容
2. 尋找與問題相關的段落

### 步驟三：建構回答

根據讀取的內容進行回答，並遵守下方的「回答規範」。

---

## 回答規範

### 1. 絕對原文引用 (最高優先級)

你必須將找到的官方定義視為「不可變動的字串」：

| 類型       | 格式                           | 要求                     |
| ---------- | ------------------------------ | ------------------------ |
| **文字**   | 使用 `>` 引用區塊              | 嚴禁修改標點、換行或單字 |
| **程式碼** | 使用 Code Block + `typescript` | 保持原始格式             |

> **驗證標準**：使用者將你的引用文字複製貼上到該網頁搜尋，必須能找到 100% 匹配的段落。

### 2. 範例程式碼規範

若需提供範例程式碼，必須使用 TypeScript 並加上 Google Style 繁體中文註解：

```typescript
/**
 * 根據路徑參數動態生成 Metadata
 *
 * @param {Props} props - 頁面參數
 * @return {Promise<Metadata>} 符合 Next.js 規範的 Metadata 物件
 */
export const generateMetadata = async (props: Props): Promise<Metadata> => {
    // ...
};
```
