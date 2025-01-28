/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	future: {
		v3_fetcherPersist: true, // Opt-in to new fetcher persistence behavior
		v3_lazyRouteDiscovery: true, // Use lazy route discovery for better performance
		v3_relativeSplatPath: true, // Enable relative routing for splat routes
		v3_singleFetch: true, // Use single fetch for data fetching
		v3_throwAbortReason: true // New error format for aborted requests
	}
};
