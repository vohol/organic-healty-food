<script>
export default {};
</script>

<template>
	<router-link to="/" class="logo">
		<svg class="svg-earth-dims logo__earth">
			<use xlink:href="../assets/files/sprite.svg#earth"></use>
		</svg>
		<svg class="svg-leaf-dims logo__leaf">
			<use xlink:href="../assets/files/sprite.svg#leaf"></use>
		</svg>
	</router-link>
</template>

<style lang="scss" scoped>
.logo {
	display: inline-block;
	width: calc(105px * 0.8);

	&__img {
		max-width: 100%;
		object-fit: cover;
	}
}

.svg-earth-dims {
	width: 36.76px;
	height: 36.86px;
}

.svg-leaf-dims {
	width: 55.97px;
	height: 56px;
}

.logo {
	display: block;
	width: 56px;
	height: 56px;
	padding: 13.79px 13.74px 5.35px 5.47px;
	position: relative;

	&__leaf {
		position: absolute;
		top: 0;
		right: 0;
		transition: all 0.6s;
		transform-origin: 23.5px 32px;
	}

	&:hover &__leaf {
		transform: rotate(-0.25turn);
	}

	&.active &__leaf {
		transform: rotate(-1turn);
	}
}
</style>
