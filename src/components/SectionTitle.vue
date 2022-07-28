<script>
export default {};
</script>

<template>
	<h2 class="section-title">
		<slot />
	</h2>
</template>

<style lang="scss" scoped>
.section-title {
	font-family: 'Rosario', sans-serif;
	font-weight: 700;
	font-size: 34px;
	line-height: 129%;
}

@media screen and (min-width: $tablet) {
	.section-title {
		font-size: 70px;
	}
}
</style>
