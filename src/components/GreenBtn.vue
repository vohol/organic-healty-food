<script>
export default {};
</script>

<template>
	<div class="grn-btn">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.grn-btn {
	cursor: pointer;
	padding: 8px 10px;
	border-radius: 8px;
	background-color: $color-main-green;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	color: #ffffff;
	transition: all 0.2s;
	border: 1px solid $color-main-green;
	text-transform: capitalize;

	&:hover {
		background-color: white;
		color: $color-main-green;
	}
}

@media screen and (min-width: $tablet) {
	.grn-btn {
		padding: 10px 23px;
		font-size: 18px;
	}
}
</style>
