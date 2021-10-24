import Layout from '../../components/layout'

import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href='/'>Back to Home</Link>
            </h2>
        </Layout>
    )
}