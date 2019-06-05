import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

//preloader
Router.onRouteChangeStart = url => NProgress.start(url);
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError= () => NProgress.done();



export default ({ children, title }) => (
    <div className="root">
        <Head>
            <title>NextPortfolio</title>
        </Head>
        <header>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/hireme"><a>Hire Me</a></Link>
        </header>

        <h1>{title}</h1>
        { children }

        <footer>&copy; {new Date().getFullYear()}</footer>

        <style jsx>{`
            .root {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            header {
                width: 100%;
                display: flex;
                justify-content: space-around;
                padding: 1em;
                font-size: 1.2em;
                background: indigo;
            }
            header a {
                color: darkgrey;
                text-decoration: none;
            }
            header a:hover {
                color: lightgrey;
                font-weight: bold;
            }
            footer {
                padding: 1em;
            }
        `}</style>

        <style global jxs>{`
            body {
                margin: 0;
                font-size: 100%;
                background: #fofofo;
            }
        `}</style>
    </div>
);