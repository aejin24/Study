## Applying Code Convention

<b>** tool - visual studio code **</b>

### 1. Prettier

#### 1-1) Install Prettier Extension

<img src="https://user-images.githubusercontent.com/76193042/181003564-8c22a9ce-a51a-4c57-bbfe-9a8f245af526.png"  width="750px">

#### 1-2) Modify settings.json

```json
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
```

<br>

### 2. ESLint (Only React Project)

#### 2-1) Install Prettier Extension

<img src="https://user-images.githubusercontent.com/76193042/181508627-03d09644-0bf7-4876-becd-04e477585cae.png"  width="450px">

#### 2-2) Modify settings.json

```json
"eslint.alwaysShowStatus": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

<br>

### 3. Stylelint (Only Scss)

### 3-1) Install Stylelint Extension

<img src="https://user-images.githubusercontent.com/76193042/181870535-77ff7906-fc20-4711-9c55-0ad20cdd344e.png" width="450px">

#### 3-2) Modify settings.json

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
},
"stylelint.enable": true,
"stylelint.validate": ["css", "less", "postcss", "scss"]
```