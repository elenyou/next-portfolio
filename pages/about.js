import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { Component } from 'react';


//fetching data with API from github
export default class About extends Component {

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/elenyou');
        const data = await res.json();
        return { user: data};
    }

    // componentDidMount() {
    //     fetch('https://api.github.com/users/elenyou')
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({
    //                 user: data
    //             });
    //         })
    // }


    render() {
        const { user } = this.props;

        return (
            <Layout title="About">
                <Link href="/">
                    <a>Go home</a>
                </Link>
                <p>{user.name}</p>
                <img src={user.avatar_url} alt="Lena" height="150px"/>
            </Layout>
        )
    }
};
