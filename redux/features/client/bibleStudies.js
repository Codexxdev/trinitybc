import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientBibleStudies = createAsyncThunk(
    `bibleStudies/getClientBibleStudies`,
    async ({ topic, preacher, scripture, page = 1, sort = 'newest' }, { rejectWithValue }) => {
        // const { origin } = absoluteUrl(req)

        let link = `/api/client/biblestudy?page=${page}&sort=${sort}`

        if (topic) {
            link = link.concat(`&topic=${topic}`)
        }
        if (preacher) {
            link = link.concat(`&preacher=${preacher}`)
        }
        if (scripture) {
            link = link.concat(`&scripture=${scripture}`)
        }

        try {
            const { data } = await axios.get(link)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


export const getBibleStudyFilters = createAsyncThunk(
    `biblestudy/getBibleStudyFilters`,
    async (obj, { rejectWithValue }) => {
        // const { origin } = absoluteUrl(req)
        try {
            const { data } = await axios.get(`/api/client/biblestudy/filters`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)



const bibleStudiesSlice = createSlice({
    name: 'bibleStudies',
    initialState: {
        loading: true,
        bibleStudies: [],
        resPerPage: 0,
        totalItems: 0,
        preachers: [],
        scriptures: [],
        topics: [],
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getClientBibleStudies.pending]: (state) => {
            state.loading = true
        },
        [getClientBibleStudies.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.bibleStudies = payload.bibleStudies
            state.resPerPage = payload.resPerPage
            state.totalItems = payload.totalItems
        },
        [getClientBibleStudies.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [getBibleStudyFilters.pending]: (state) => {
            state.loading = true
        },
        [getBibleStudyFilters.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.topics = payload.topics
            state.preachers = payload.preachers
            state.scriptures = payload.scriptures
        },
        [getBibleStudyFilters.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export default bibleStudiesSlice.reducer