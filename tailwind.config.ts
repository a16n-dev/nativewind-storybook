import type { Config } from 'tailwindcss';

declare var require: any

export default {
  content: ['./stories/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
} satisfies Config;
