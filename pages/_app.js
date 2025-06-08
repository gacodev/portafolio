import "../styles/globals.css";
import FloatingMenu from "../components/FloatingMenu";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <FloatingMenu />
    </>
  );
}

export default MyApp;
