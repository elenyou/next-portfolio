import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render(){
        return (
            <html lang="en">
                <Head>
                    <meta name="description" content="A site for my portfolio"/>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width"/>
                    <meta name="robots" content="noindex, nofollow"/>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/> 
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
                <style global jsx>{`
                    body {
                        font-family: 'Roboto', sans-serif;
                    }
                `}</style>
            </html>
        )
    }
}