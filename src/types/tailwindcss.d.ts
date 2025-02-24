// Fix for tailwindcss utilities
declare module 'tailwindcss/lib/util/flattenColorPalette' {
    import { type CSSRuleObject } from 'tailwindcss/types/config';
    
    export default function flattenColorPalette(
      colors: Record<string, unknown>
    ): CSSRuleObject;
  }