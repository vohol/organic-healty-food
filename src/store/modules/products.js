export default {
	actions: {
		async fetchProducts(ctx) {
			const res = await fetch('https://sheetdb.io/api/v1/piolx43w5m6nb');
			const products = await res.json();

			ctx.commit('updateProducts', products);
		},
	},
	mutations: {
		updateProducts(state, products) {
			state.products = products;
		},
	},
	state: {
		products: [],
	},
	getters: {
		allProducts(state) {
			return state.products;
		},
		allFilters(_, getters) {
			let result = ['all'];

			getters.allProducts
				.map((el) => el.category)
				.forEach((el) => {
					if (!result.includes(el)) result.push(el);
				});

			return result;
		},
	},
};
