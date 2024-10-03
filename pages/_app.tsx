import StairTransition from "@/components/StairTransition";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <StairTransition></StairTransition>
      <Component {...pageProps} />;
    </AnimatePresence>
  );
}
