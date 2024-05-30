import '../styles/globals.css'
import {useEffect} from "react";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log('about to change route', url, document.getElementsByTagName('h1')[0].innerText)
      window.intellimize.ready(() => {
        console.log('calling activate()', router.pathname, document.getElementsByTagName('h1')[0].innerText)
        // @ts-ignore
        window.intellimize.activate();
      });
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
