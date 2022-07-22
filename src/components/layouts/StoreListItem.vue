<script>
export default {
	props: ['product'],
};
</script>

<template>
	<li class="shop__item product">
		<router-link
			:to="{
				name: 'product',
				params: {
					productName: product.name.replace(/(\W|_)+/g, '-').toLowerCase(),
				},
			}"
		>
			<h3 class="product__name">
				{{ product.name }}
			</h3>
		</router-link>
	</li>
</template>

<style lang="scss"></style>
