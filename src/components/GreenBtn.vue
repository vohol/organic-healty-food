<script>
export default {
	props: {
		elementClass: String,
	},
};
</script>

<template>
	<div class="grn-btn" :class="elementClass">
		<slot />
	</div>
</template>

<style lang="scss">
.grn-btn {
	cursor: pointer;
	padding: 8px 10px;
	border-radius: 8px;
	background-color: #09a66d;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: #ffffff;
	transition: all 0.2s;

	&:hover {
		opacity: 0.8;
	}
}

@media screen and (min-width: $tablet) {
	.grn-btn {
		padding: 10px 23px;
		font-size: 18px;
	}
}
</style>
