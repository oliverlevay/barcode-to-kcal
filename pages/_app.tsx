import BeverageProvider from "@/components/providers/BeverageProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BeverageProvider>
      <Component {...pageProps} />
    </BeverageProvider>
  );
}
