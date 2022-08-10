import Layout from "../components/layout/Layout";
import { getSession } from 'next-auth/react'
import SignIn from "../components/auth/SignIn";
import Head from "next/head";



export default function SignInPage() {
    return (
        <div>
            <Head>
                <title>Trinity Baptist Church Abuja | Sign In</title>
            </Head>
            <SignIn />
        </div>
    )
}


export async function getServerSideProps(context) {
    const { req } = context
    const session = await getSession({ req })

    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: {}
    }
}