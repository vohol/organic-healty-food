const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
				@import "./src/assets/scss/_variables.scss";
				@import "./src/assets/scss/_mixins.scss";
				@use "./src/assets/scss/_nullstyle.scss";
        `,
			},
		},
	},
});
