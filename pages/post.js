import Layout from '../components/Layout';
import { withRouter } from 'next/router';


const Post = ({ router }) => (

    <Layout title={router.query.title}>
        <p style={{ width: '80vw' }}>
            Maecenas eget nisi nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent ac semper lectus. Sed at laoreet odio. Etiam sagittis, massa in posuere sollicitudin, erat arcu luctus lacus, vel luctus magna tortor id metus. Maecenas vitae mi fringilla, sollicitudin turpis sit amet, sollicitudin lectus.
        </p>
    </Layout>
);

export default withRouter(Post);