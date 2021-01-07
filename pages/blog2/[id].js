import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Car({ car }) {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            <Head>
                <title>{id}</title>
            </Head>
            <main>
                <h1>
                   title= {id}
                </h1>
                <hr />
            </main>
        </div>
    )
}


export async function getServerSideProps({ params }) {
    return {
        props: { car: {} },
    }
}

