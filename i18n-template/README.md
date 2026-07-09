# How to create a language pack

1. Copy the `xx-XX` directory into `ere/i18n/`.
2. Rename the directory to the target language code (examples):
   - `zh-CN` (Simplified Chinese)
   - `zh-HK` (Chinese - Hong Kong)
   - `zh-TW` (Traditional Chinese)
   - `en-US` (American English)
   - `en-GB` (British English)
   - `ja-JP` (Japanese)
   - `ru-RU` (Russian)
   - `ko-KR` (Korean)
3. Replace all instances of `xx-XX` in the directory with your language code.
4. Translate all string text (characters between `"`, `'`, or `` ` ``):
   - If the file exports a class (starts with `module.exports = class`):
     1. Translate strings.
     2. You may remove entries you don’t want to translate — they will fall back to `zh-CN`.
   - If the file exports an object (starts with `module.exports = {`):
     1. Translate strings.
     2. Do NOT remove keys — the game expects them.
   - If the file is a Kojo file (`*.kojo`):
     1. Translate strings.
     2. Do NOT remove any entries or blank characters.
   - To skip translating an entire file:
     1. Find where that file is referenced.
     2. Remove the reference line.
     3. Delete the file.
     4. If unsure, skip this step.
5. Add your language to `ere/i18n/selector.js`, for example:
```javascript
dict['zh-CN'] = new (require('./zh-CN/entry'))();
dict['ja-JP'] = new (require('./ja-JP/entry'))();
dict['en-US'] = new (require('./en-US/entry'))();
// Add this line for French (example):
dict['fr-FR'] = new (require('./fr-FR/entry'))();
```
6. Launch the game and select your language to verify it loads.
7. Use in-game tools to find untranslated entries.
8. Add your name in comments and share the language pack.

Notes for English and Japanese translators:
- Check existing libraries before starting.
- Sections between `// GENERATED START` and `// GENERATED END` are auto-generated. Do not remove or edit those sections.
