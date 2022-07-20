<script>
export default {
	props: {
		elementClass: String,
	},
};
</script>

<template>
	<p class="section-description" :class="elementClass">
		<slot />
	</p>
</template>

<style lang="scss" scoped>
.section-description {
	font-weight: 400;
	font-size: 16px;
	line-height: 167%;
	color: $color-pale-black;
}

@media screen and (min-width: 846px) {
	.section-description {
		font-size: 18px;
	}
}
</style>
