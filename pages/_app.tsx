import "antd/dist/antd.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import LayoutWrapper from "../components/layout";
import SettingsProvider from "../utils/SettingsProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SettingsProvider>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </SettingsProvider>
  );
}
export default MyApp;
