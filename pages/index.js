import Home from "../components/Home";
import Head from "next/head";
import { useEffect } from "react";
import { wrapper } from "../redux/Store";
import { useDispatch } from "react-redux";


export default function HomePage() {
  return (
    <div >
      <Head>
        <title>Trinity Baptist Church Abuja</title>
      </Head>
      <Home/>
    </div>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, query }) => {
//   await store.dispatch(getClientLatest({ req }))
//   await store.dispatch(getClientEvents({ req }))
//   await store.dispatch(getClientServices({ req }))
//   await store.dispatch(getClientNewsDetails({ req, id : "6292622db3edd1e66f7d159a" }))
// })