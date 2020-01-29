import axios from 'axios';
const baseUrl = 'https://venten-api.herokuapp.com/api/v1/';

export const fetchAll = () => {
	return axios
		.get(`${baseUrl}products?currentPage=1&limit=50`)
		.then((res) => {
			return res.data.data[0].products;
		})
		.catch((error) => {
			console.log(error.message);
		});
};

export const fetchOne = async (id) => {
	return await axios
		.get(`${baseUrl}products/${id}`)
		.then((res) => {
			return res.data.data[0];
		})
		.catch((error) => {
			console.log(error.message);
		});
};

export const addProduct = async (productData) => {
	return await axios
		.post(`${baseUrl}addproduct`, productData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		.then((res) => {
			return res.data.data[0];
		})
		.catch((error) => {
			console.log(error.message);
		});
};
