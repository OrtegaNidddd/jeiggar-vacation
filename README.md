# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


```
jeiggar-vacation
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ src
│  ├─ app
│  │  ├─ AppShell.tsx
│  │  └─ router.tsx
│  ├─ assets
│  │  └─ images
│  │     ├─ amazonas.jpeg
│  │     ├─ eje-cafetero.png
│  │     ├─ hero-image.jpeg
│  │     ├─ isologo.png
│  │     ├─ logo_jeiggar.jpeg
│  │     ├─ sierra-nevada-ancestral.jpeg
│  │     ├─ sierra-nevada-santa-marta.jpeg
│  │     └─ sierra-nevada.jpg
│  ├─ components
│  │  ├─ common
│  │  │  ├─ Footer.tsx
│  │  │  └─ Header.tsx
│  │  ├─ forms
│  │  └─ ui
│  │     ├─ AnimatedCard.tsx
│  │     ├─ Button.tsx
│  │     ├─ ImageCard.tsx
│  │     └─ SimpleCard.tsx
│  ├─ domain
│  │  └─ types
│  │     ├─ AboutUs.ts
│  │     ├─ Buttons.ts
│  │     ├─ Cards.ts
│  │     ├─ Footer.ts
│  │     ├─ Landing.ts
│  │     ├─ NavItem.ts
│  │     └─ Value.ts
│  ├─ features
│  │  ├─ destinations
│  │  ├─ landing
│  │  │  ├─ AboutUs.tsx
│  │  │  ├─ Contact.tsx
│  │  │  ├─ Home.tsx
│  │  │  └─ components
│  │  │     ├─ About.tsx
│  │  │     ├─ CTA.tsx
│  │  │     ├─ Carousel.tsx
│  │  │     ├─ FeaturedTrips.tsx
│  │  │     ├─ Hero.tsx
│  │  │     ├─ TravelCategories.tsx
│  │  │     └─ ValuesSection.tsx
│  │  ├─ map
│  │  └─ quotes
│  ├─ hooks
│  │  └─ useAOS.ts
│  ├─ index.css
│  ├─ main.tsx
│  └─ mocks
│     ├─ about-us-cards.mock.ts
│     ├─ carousel-landing.mock.ts
│     ├─ cta-landing.mock.ts
│     ├─ featured-trips.mock.ts
│     ├─ footer.mock.ts
│     ├─ hero-landing.mock.ts
│     ├─ navigation.mock.ts
│     ├─ travel-categories-landing.mock.ts
│     └─ values.mock.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```