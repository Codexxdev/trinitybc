import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientEvents = createAsyncThunk(
    `events/getClientEvents`,
    async ({ month, next }, { rejectWithValue }) => {
        // const { origin } = absoluteUrl(req)
        let link = `/api/client/event`

        if (month) {
            link = link.concat(`?month=${month}`)
        }
        if (next) {
            link = link.concat(`&next=${next}`)
        }
        
        try {
            const { data } = await axios.get(link)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)

export const getClientNews = createAsyncThunk(
    `events/getClientNews`,
    async (obj, { rejectWithValue }) => {
        // const { origin } = absoluteUrl(req)
        let link = `/api/client/news`

        // if (month) {
        //     link = link.concat(`?month=${month}`)
        // }
        // if (next) {
        //     link = link.concat(`&next=${next}`)
        // }

        try {
            const { data } = await axios.get(link)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


export const getClientServices = createAsyncThunk(
    `events/getClientServices`,
    async (obj, { rejectWithValue }) => {
        // const { origin } = absoluteUrl(req)

        try {
            const { data } = await axios.get(`/api/client/service`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)



const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        loading: true,
        events: [],
        defaultEvent: {},
        defaultService: {},
        services: [],
        news: [],
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getClientEvents.pending]: (state) => {
            state.loading = true
        },
        [getClientEvents.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.events = payload.events
            state.defaultEvent = payload.defaultEvent
        },
        [getClientEvents.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [getClientServices.pending]: (state) => {
            state.loading = true
        },
        [getClientServices.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.services = payload.services
            state.defaultService = payload.defaultService
        },
        [getClientServices.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [getClientNews.pending]: (state) => {
            state.loading = true
        },
        [getClientNews.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.news = payload.news
        },
        [getClientNews.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export default eventsSlice.reducer