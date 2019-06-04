import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
    <Layout title="About">
        <Link href="/">
            <a>Go home</a>
        </Link>
        <p>Web developer</p>
        <img src="/static/logo.png" alt="logo" height="150px"/>
    </Layout>
);
