---
name: git-commit-style
description: 當需要生成、撰寫或修改 Git Commit Message 時使用此技能。
---

# Git Commit Message 規範

當你被要求生成 Git Commit Message 時，必須嚴格遵守以下格式與語言規則。

## 1. 格式結構

Commit Message 必須包含三個部分（Body 與 Footer 為選填，但標題為必填）：

```text
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

## 2. 語言規則 (Language Rules)

### 標題 (Header) 必須全英文

- `<type>`, `<scope>`, 和 `<description>` 必須使用 **英文**。
- 標題長度請盡量控制在 **50-72 字元**以內。
- `<description>` 開頭不要大寫，結尾不要加句號。

### 內文 (Body) 與 頁尾 (Footer) 使用繁體中文

- 若需要詳細說明變更原因或影響，請使用 **繁體中文** 撰寫。
- 這能幫助團隊成員更清楚理解複雜的改動邏輯。

## 3. Type 類別定義

選擇最適合的 type：

| Type       | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| `feat`     | A new feature (新增功能)                                       |
| `fix`      | A bug fix (修復 bug)                                           |
| `docs`     | Documentation only changes (僅修改文件)                        |
| `style`    | Formatting changes (格式修改，不影響程式碼運行)                |
| `refactor` | Code change that neither fixes a bug nor adds a feature (重構) |
| `perf`     | Code change that improves performance (效能優化)               |
| `test`     | Adding or correcting tests (測試相關)                          |
| `build`    | Build system or external dependencies (建置系統變更)           |
| `ci`       | CI configuration changes (CI 設定變更)                         |
| `chore`    | Other changes (雜項處理)                                       |
| `revert`   | Reverts a previous commit (還原提交)                           |

## 4. 範例 (Examples)

### 範例 1：新增功能 (Feature)

```text
feat(auth): add google oauth2 login support

這次更新整合了 Google OAuth2 登入機制。
主要變更：
- 新增 Passport.js 策略設定
- 更新使用者資料庫 Schema 以儲存 provider ID
- 在登入頁面新增「使用 Google 登入」按鈕
```

### 範例 2：修復錯誤 (Bug Fix)

```text
fix(api): handle timeout error in payment gateway

修正了當第三方支付閘道回應超過 30 秒時，伺服器會崩潰的問題。
現在加入了 try-catch 機制與重試邏輯 (retry logic)，確保交易失敗時能正確回傳錯誤訊息給前端。
```

### 範例 3：文件修改 (Docs)

```text
docs(readme): update installation guide

更新 README 中的安裝步驟，補充了環境變數 (.env) 的設定說明，以免新開發者佈署失敗。
```

## 5. 生成檢查清單 (Checklist)

在輸出最終 Commit Message 前，請自我檢查：

- [ ] 第一行是否完全為 **英文**？
- [ ] 第一行是否符合 `<type>(<scope>): <description>` 格式？
- [ ] 若有內文，是否為 **繁體中文**？
- [ ] 標題開頭是否為小寫？
