'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function Providers({ session, children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
