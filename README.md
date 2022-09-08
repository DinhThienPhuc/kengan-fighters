# Reactjs Template

✨✨✨ A React Template to easily build and develop product. ✨✨✨

## Requirements

| Packages | Versions                         |
| -------- | -------------------------------- |
| `node`   | ^12.22.0 or ^14.17.0 or >=16.0.0 |
| `yarn`   | v1 or v2                         |

## How to use

First clone this repository:

```shell
git clone https://github.com/DinhThienPhuc/reactjs-template.git
```

Replace git remote with your repo:

```shell
git remote set-url origin <link-to-your-repo>
```

Change `reactjs-template` folder name to your project name. Then feel free to develop your new world **_voila_**! ✨✨✨

## Structure

```shell
src
├── api
│   ├── <post>
│   │   ├── <post>.api.ts
│   │   └── <post>.interfaces.ts
│   │
│   ├── ...
│   ├── interfaces.ts
│   ├── request.ts
│   └── index.ts
│
├── assets
│   ├── fonts
│   │   ├── ...
│   │   └── <first>.ttf
│   │
│   ├── icons
│   │   ├── <first>.svg
│   │   ├── ...
│   │   └── index.ts
│   │
│   ├── images
│   │   ├── <first>.png
│   │   ├── <second>.jpg
│   │   ├── ...
│   │   └── index.ts
│   │
│   └── styles
│       ├── global.css
│       └── reset.css
│
├── components
│   ├── <com>
│   │   ├── <com>.style.tsx
│   │   ├── <com>.tsx
│   │   └── <com>.utils.tsx
│   │
│   ├── ...
│   └── index.ts
│
├── containers
│   ├── auth
│   │   └── auth-route.tsx
│   │
│   ├── error-boundary
│   │   ├── error-boundary.style.tsx
│   │   └── error-boundary.tsx
│   │
│   ├── layouts
│   │   ├──<component>
│   ├── ├── ...
│   │   ├── default.style.tsx
│   │   └── default.tsx
│   ├── ...
│   └── loadable-fallback
│       └── loading.tsx
│
├── hooks
│   ├── <hook>.ts
│   ├── ...
│   └── index.ts
│
├── pages
│   └── <page>
│       ├── <page>.style.ts
│       ├── <page>.utils.ts
│       └── <page>.tsx
|
├── routes
│   ├── constant.ts
│   └── index.ts
│
├── services
│   ├── i18n
│   │   ├── locales
│   │   └── index.ts
│   ├── ...
│   │
│   └── styled-themes
│       ├── index.tsx
│       └── schema.json
│
├── types
│   └── ...
│
└── utils
    ├── constants.ts
    ├── functions.ts
    ├── interfaces.ts
    └── ...
```

### Explaination elements inside `src`:

🔴 **Rule of import**:

- _**Always use relative path for files inside module**_.
- _**Always use absolute path for connecting file between modules**_.

🔴 **Entry point**: _**the file contains all relative files. It is somehow a gate, an entrance for the whole folder. So that, when importing the element insided folder, we only need to import them all from one**_.

For example, with [`components`](src/components) folder:

[`index.ts`](src/components/index.ts)

```typescript
/* COMPONENTS ENTRY
   ========================================================================== */
import A from './A/A'
import B from './B/B'
import C from './C/C'
...

export { A, B, C }
```

When using a component, instead:

```typescript
import A from '/path/to/component/A/A'
import B from '/path/to/component/B/B'
import C from '/path/to/component/C/C'
...

// Using component A, B, C
```

We could use the shorter import below:

```typescript
import { A, B, C } from 'components'
...

// Using component A, B, C
```

### Folders explainations

#### [`assets`](src/assets) - icons, images, fonts, videos, ...

- [`icons`](src/assets/icons) - Contains all `svg` icons and a [`index.ts`](src/assets/icons/index.ts) file.

  - [`index.ts`](src/assets/icons/index.ts): the entry point for all `svg` icons.

- [`images`](src/assets/images) - Contains all type of image and a [`index.ts`](src/assets/images/index.ts) file.

  - [`index.ts`](src/assets/images/index.ts): the entry point for all image files.

- [`styles`](src/assets/styles) - Contains [`reset.css`](src/assets/styles/reset.css) and [`global.css`](src/assets/styles/global.css) file.

  - [`reset.css`](src/assets/styles/reset.css): reset the style of every browser to the same one, so that styles will be synced between browser crossing.
  - [`global.css`](src/assets/styles/global.css): contains all global styles of the project.

#### [`components`](src/components) - basic, pure components

- `<component>` - Contains all elements of a component

  - `<component>.tsx`: component main content
  - `<component>.style.tsx`: component styles
  - `<component>.utils.tsx`: component utils such as interfaces, constants, functions used for component only

#### [`hooks`](src/hooks) - useful hooks

- `<useHook>` - A custom hook for specific usage, included with example.
- [`index.ts`](src/hooks/index.ts): the entry point for all hooks

#### [`pages`](src/pages) - define page layout, head, which view it will render, ...

- [`_app.tsx`](src/pages/_app.tsx): root component.
- [`_document.tsx`](src/pages/_document.tsx): document component.
- [`404.tsx`](src/pages/404.tsx): not-found component.
- [`index.tsx`](src/pages/index.tsx): homepage

#### [`services`](src/services) - external services of the project, could be easily used by modifying some line of codes

- `<service>` - Contains all elements of a service. It is isolated and independent from the project. It could be plug in and out easily

#### [`utils`](src/utils) - can contains anythings with global scope

- [`constants.ts`](src/utils/constants.ts): global constants.
- [`functions.ts`](src/utils/functions.ts): global functions.
- [`interfaces.ts`](src/utils/interfaces.ts): global interfaces.

## Commit process

In case Husky doesn't run on each commit, run this command manually:

```
chmod ug+x .husky/*
```

## API

Feel free to pick up the best fetching stradegy for you project! ✨✨✨
