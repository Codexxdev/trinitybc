import Head from "next/head";
import Series from "../../../components/series/Series";
import Sermons from "../../../components/sermons/Sermons";
import { getClientSeries, getSeriesFilters } from "../../../redux/features/client/series";
import { wrapper } from "../../../redux/Store";


export default function SeriesPage() {
    return (
        <div >
            <Head>
                <title>TBC | Preaching Series</title>
            </Head>
            <Series />
        </div>
    )
}

// export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, query }) => {
//     const { topic, preacher, page, sort, scripture } = query
//     await store.dispatch(getClientSeries({ req, topic, preacher, page, sort, scripture }))
//     await store.dispatch(getSeriesFilters({ req }))
// })
