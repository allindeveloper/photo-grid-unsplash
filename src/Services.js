
export const Service = (baseUrl, Axios, token) => {
	const instance = Axios.create({
		baseURL: baseUrl,
		headers: { 'Authorization': token }
		// you can add other headers here which has been passed from AuthorizedLayout as arguments
	});

	const getApiUrl = (controller) => {
		return `${controller}`;
	}
	const getApiUrlv2 = (controller,action) => {
		return `${controller}/${action}`;
	}
	
	const getAllItems = (controller,UNSPLASH_CLIENT_ID, searchData) => {

		let url = `?client_id=${UNSPLASH_CLIENT_ID}`;

		if(searchData.pageNumber && searchData.pageNumber !== null && searchData.pageNumber !==undefined){
			url += `&page=${searchData.pageNumber}`
		}
		if(searchData.pageSize && searchData.pageSize !== null && searchData.pageSize !==undefined){
			url += `&per_page=${searchData.pageSize}`
		}
		if(searchData.query && searchData.query !== null && searchData.query !==undefined){
			url += `&query=${searchData.query}`
		}
	
		return instance.get(`${getApiUrl(controller)}${url}` );
	}

	const searchAllItems = (controller,action,UNSPLASH_CLIENT_ID, searchData) => {
		let url = `?client_id=${UNSPLASH_CLIENT_ID}`;

		if(searchData.pageNumber && searchData.pageNumber !== null && searchData.pageNumber !==undefined){
			url += `&page=${searchData.pageNumber}`
		}
		if(searchData.pageSize && searchData.pageSize !== null && searchData.pageSize !==undefined){
			url += `&per_page=${searchData.pageSize}`
		}
		if(searchData.query && searchData.query !== null && searchData.query !==undefined){
			url += `&query=${searchData.query}`
		}
	
		return instance.get(`${getApiUrlv2(controller,action)}${url}` );
	}

	// all other api service functions can be created here which is then accessible to other routes and components 


	return {
		getAllItems,
		searchAllItems
		}

}

