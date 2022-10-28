import axios from 'axios'
import config from '../nuxt.config.js'

export default () => {
	const options = {}

	options.baseURL = config.publicRuntimeConfig.baseURL
	options.contentType = 'application/json'
	options.headers = {
		'Access-Control-Allow-Origin' : '*',
		'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
	}

	const instance = axios.create(options)
	return instance
}
