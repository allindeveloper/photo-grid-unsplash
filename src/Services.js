
export const Service = (baseUrl, Axios, token) => {
	const instance = Axios.create({
		baseURL: baseUrl,
	});

	const getApiUrl = (controller,action) => {
		return `${controller}/${action}`;
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

		if(searchData.orderBy && searchData.orderBy !== null && searchData.orderBy !== undefined){
			url += `&order_by=${searchData.orderBy}`
		}
	
		return instance.get(`${getApiUrl(controller,action)}${url}` );
	}

	// all other api service functions can be created here which is then accessible to other routes and components 


	return {
		searchAllItems
		}

}

