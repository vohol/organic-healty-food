export default {
	actions: {
		getBasketData(ctx) {
			let products;

			localStorage.getItem('storage')
				? (products = JSON.parse(localStorage.getItem('storage')))
				: (products = []);

			ctx.commit('updateBasketData', products);
		},
	},
	mutations: {
		updateBasketData(state, products) {
			state.products = products;
		},
		addProductToBasket(state, newProduct) {
			let result = false;

			state.products.forEach((el) => {
				if (el.id == newProduct.id) {
					el.qty += newProduct.qty;
					result = true;
					localStorage.setItem('storage', JSON.stringify(state.products));
					return;
				}
			});

			if (result) return;

			state.products.push(newProduct);
			localStorage.setItem('storage', JSON.stringify(state.products));
		},
	},
	state: {
		products: [],
	},
	getters: {
		getBasketProducts(state) {
			return state.products;
		},
		getBasketQty(state) {
			return state.products.reduce((total, el) => total + el.qty, 0);
		},
	},
};