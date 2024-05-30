import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <style>{`.anti-flicker, .anti-flicker * {visibility: hidden !important; opacity: 0 !important;}`}</style>
        <script
          dangerouslySetInnerHTML={{__html: `(function(e,t,p){var n=document.documentElement,s={p:[],r:[]},u={p:s.p,r:s.r,push:function(e){s.p.push(e)},ready:function(e){s.r.push(e)}};e.intellimize=u,n.className+=" "+p,setTimeout(function(){n.className=n.className.replace(RegExp(" ?"+p),"")},t)})(window,4000, 'anti-flicker')`}}>
        </script>
        <link rel="preload" href="https://cdn.intellimize.co/snippet/117283700.js" as="script"/>
        <script src="https://cdn.intellimize.co/snippet/117283700.js" async></script>
        <link rel="preconnect" href="https://api.intellimize.co" crossOrigin=""/>
        <link rel="preconnect" href="https://117283700.intellimizeio.com"/>
        <link rel="preconnect" href="https://log.intellimize.co" crossOrigin=""/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}