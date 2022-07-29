const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: '/organic-healty-food/',
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
				@import "@/assets/scss/_variables.scss";
				@import "@/assets/scss/_mixins.scss";
				@import "@/assets/scss/_nullstyle.scss";
        `,
			},
		},
	},
});
