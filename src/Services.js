export const Service = (baseUrl, Axios, token) => {
	const instance = Axios.create({
		baseURL: baseUrl,
		headers: { 'Authorization': token }
		// you can add other headers here which has been passed from AuthorizedLayout as arguments
	});

	const getApiUrl = (controller, action) => {
		return `${controller}/${action}/`;
	}
	const getApiEnumUrl = (controller, action,method) => {
		return `${controller}/${action}/${method}`;
	}

	const restUrl = (controller) => {
		return `${controller}`;
	}

	const getRestUrl = (controller,action) => {
		return `${controller}/${action}`;
	}

	const getAllItems = (controller, action, data) => {
		return instance.post(getApiUrl(controller, action), data);
	}

	const getItems = (controller, action,method, data) => {
		return instance.get(getApiEnumUrl(controller, action,method), data);
	}

	const getEnumItems = (controller, action) => {
		return instance.get(getApiUrl(controller, action));
	}

	const getItem = (controller) => {
		return instance.get(restUrl(controller));
	}
	const getStates = (method,controller, id, action) => {
		return instance.get(`${method}/${restUrl(controller)}/${id}/${action}`);
	}

	const getPatients = (controller, PageNumber, PageSize,searchData) => {
		return instance.get(`${restUrl(controller)}?PageNumber=${PageNumber}&PageSize=${PageSize}`);
	}

	const getCharts = (controller,action,PageNumber, PageSize=10000, searchData) =>{

		let url = `?PageNumber=${PageNumber}&PageSize=${PageSize}`;

		if(searchData.Provider && searchData.Provider !== null && searchData.Provider !==undefined){
			url += `&ProviderId=${searchData.Provider}`
		}
		if(searchData.isSigned &&searchData.isSigned !==null && searchData.isSigned !==undefined){
			url += `&isSigned=${searchData.isSigned}`
		}
		return instance.get(`${getApiUrl(controller,action)}${url}`);
	}

	const getOrderLabs = (controller,action,PageNumber, PageSize=10, searchData) =>{

		let url = `?PageNumber=${PageNumber}&PageSize=${PageSize}`;

		if(searchData.Provider && searchData.Provider !== null){
			url += `&ProviderId=${searchData.Provider}`
		}
		return instance.get(`${getApiUrl(controller,action)}${url}`);
	}

	

	const createItem = (data, controller, action) => {
		return instance.post(getApiUrl(controller, action), data);
	}

	const createItemV1 = (data, controller) => {
		return instance.post(restUrl(controller), data);
	}

	const userLogin = (data, controller, action) => {
		return instance.post(getRestUrl(controller,action), data);
	}

	// all other api service functions can be created here which is then accessible to other routes and components in the Authorized Layout


	return {
		getOrderLabs,
		getEnumItems,
		getCharts,
		getStates,
		getItem,
		createItemV1,
		getPatients,
		getAllItems,
		userLogin,
		getItems,
		createItem,
		}

}

