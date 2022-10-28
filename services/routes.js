/* eslint-disable no-console */
import api from './api'

export default {
    post(data) {
        return api().post(data.api, data.obj)
    },
    patch(data) {
        return api().patch(data.api, data.obj)
    },
    get(data) {
        return api().get(data.api)
    },
}
