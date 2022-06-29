import Home from "../components/Home";
import Head from "next/head";
import { wrapper } from "../redux/Store";
import { getClientLatest } from "../redux/features/client/latest";
import { getClientEvents, getClientServices } from "../redux/features/client/events";
import { getClientNewsDetails } from "../redux/features/client/event";


export default function HomePage() {
  return (
    <div >
      <Head>
        <title>Trinity Baptist Church</title>
      </Head>
      <Home/>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, query }) => {
  await store.dispatch(getClientLatest({ req }))
  await store.dispatch(getClientEvents({ req }))
  await store.dispatch(getClientServices({ req }))
  await store.dispatch(getClientNewsDetails({ req, id : "6292622db3edd1e66f7d159a" }))
})