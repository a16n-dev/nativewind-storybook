# Nativewind + Storybook

This is a minimal sample project that combines Nativewind v4 (Tailwind 3) with Storybook v8 (Vite).

## The problem

If we have this story:
```tsx
<View style={{flex: 1, flexDirection: 'row', gap: 4}}>
  {/* This is a control, to verify styles in general are working (this works) */}
  <View style={{width: 40, height: 40, backgroundColor: 'green'}}/>
  {/* This is a debug syntax from nativewind (this works) */}
  <View style={{ $$css: true, test: 'w-10 h-10 bg-blue-500' }} />
  {/* This is what we need to make sure works (this DOESNT work) */}
  <View className={'w-10 h-10 bg-red-500'}/>
</View>
```

and we run it locally, it looks like this:

<img width="167" alt="image" src="https://github.com/user-attachments/assets/71d43d37-e500-427a-bd6a-20c5cfb66456" />

While after a build, it looks like this:

<img width="130" alt="image" src="https://github.com/user-attachments/assets/cc83e812-e779-4698-9c0f-ca10cf8977a0" />

## Running the project
Try it for yourself:
```bash
# Install dependencies
pnpm i

# Start the dev server
pnpm run dev

# Build and serve the project
pnpm run build && pnpm run serve
```
