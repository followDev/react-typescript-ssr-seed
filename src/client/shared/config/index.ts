// Config
export const config = {
	WS_PROTOCOL:
		process.env.NODE_ENV === 'development'
			? 'ws://'
			: process.env.WS_PROTOCOL,
	WS_URL: process.env.NODE_ENV === 'development' ? 'localhost:3000' : process.env.WS_URL,
	API_URL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/api',
	LOGIN_URL: '/auth/github'
};
