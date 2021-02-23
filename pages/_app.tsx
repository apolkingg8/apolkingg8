import {AppProps} from "next/app";

const App = (appProps: AppProps)=> {
    let {Component, pageProps} = appProps

    return (
        <Component {...pageProps}/>
    )
}

export default App
