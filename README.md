# Nativewind + Storybook

This is a minimal sample project that combines Nativewind v4 with Storybook v8 (Vite).

Currently this doesn't work when running a proper build - `className` is not correctly being transformed to `class` attribute on React Native components. It's not clear where in the build process things are going wrong.

## Running the project
```bash
# Install dependencies
pnpm i

# Start the dev server
pnpm run dev

# Build and serve the project
pnpm run build && pnpm run serve
```