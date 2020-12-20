export const Service = (baseUrl, Axios, token) => {
	const instance = Axios.create({
		baseURL: baseUrl,
		headers: { 'Authorization': token }
		// you can add other headers here which has been passed from AuthorizedLayout as arguments
	});

	const getApiUrl = (controller, action) => {
		return `${controller}`;
	}
	
	const getAllItems = (controller,UNSPLASH_CLIENT_ID, searchData) => {

		let url = `?client_id=${UNSPLASH_CLIENT_ID}`;

		if(searchData.pageNumber && searchData.pageNumber !== null && searchData.pageNumber !==undefined){
			url += `&page=${searchData.pageNumber}`
		}
		if(searchData.pageSize && searchData.pageSize !== null && searchData.pageSize !==undefined){
			url += `&per_page=${searchData.pageSize}`
		}
	
		return instance.get(`${getApiUrl(controller)}${url}` );
	}

	// all other api service functions can be created here which is then accessible to other routes and components 


	return {
		getAllItems,
		}

}

