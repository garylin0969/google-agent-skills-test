---
name: atomic-design-gen
description: 當使用者要求建立元件、UI 區塊或進行前端開發時啟動。強制執行 Atomic Design 架構、kebab-case 命名與特定的檔案導出規範。
---

# Atomic Design 元件開發規範

你必須遵循 **Atomic Design** 的架構原則來組織所有元件。

## 1. 目錄架構 (Directory Structure)

根據元件的複雜度，將其放置於以下對應路徑：

- **Atoms (`components/atoms/`)**：最小單位，不可再分割 (如：Button, Input, Icon)。
- **Molecules (`components/molecules/`)**：由 Atom 組成的小型群組 (如：SearchBar, Card)。
- **Organisms (`components/organisms/`)**：由多個 Molecules/Atoms 組成的複雜區塊 (如：Footer, Header, LoginForm)。

## 2. 命名規範 (Naming Convention)

- **資料夾命名**：嚴格使用 **kebab-case** (例如：`user-avatar`, `site-footer`)。
- **檔案命名**：嚴格使用 **kebab-case** (例如：`site-footer.tsx`)。
- **元件變數名**：使用 **PascalCase** (例如：`SiteFooter`)。

## 3. 檔案組成與內容規範 (File Composition)

每個元件必須是一個獨立的資料夾，包含 `index.ts` 與元件本體檔案。

### 規則 A: 元件本體 (`<component-name>.tsx`)

- **語法**：必須使用 **Arrow Function (箭頭函式)**。
- **導出**：必須使用 `export default`。
- **範例**：

    ```tsx
    // components/organisms/footer/footer.tsx

    // 若有 Props 定義介面
    interface FooterProps = {
        // ...
    };

    const Footer = (props: FooterProps) => {
        return <footer>這裡是 Footer</footer>;
    };

    export default Footer;
    ```

### 規則 B: 索引檔案 (`index.ts`)

- **語法**：主要使用 `export { default }` 進行轉發。
- **擴充**：若該元件有額外的型別或 Helper，可在此進行 Named Export。
- **範例**：

    ```tsx
    // components/organisms/footer/index.ts

    export { default } from './footer';

    // 若有其他需要導出的型別
    // export type { FooterProps } from './footer';
    ```
