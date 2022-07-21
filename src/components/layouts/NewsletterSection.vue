<script>
import SectionTitle from '../SectionTitle.vue';
import GreenBtn from '../GreenBtn.vue';
export default {
	components: { SectionTitle, GreenBtn },
};
</script>

<template>
	<section class="subscribe">
		<div
			class="left-img img"
			data-aos="fade-right"
			data-aos-once="true"
			data-aos-delay="500"
		>
			<img src="@/assets/img/greens1.png" alt="greens" />
		</div>
		<div class="container subscribe__container">
			<SectionTitle :elementClass="'subscribe__title'">
				Subscribe Newsletter</SectionTitle
			>
			<form class="subscribe__form">
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Your email:"
					class="subscribe__email"
					required
				/>
				<GreenBtn :elementClass="'subscribe__btn'">subscribe</GreenBtn>
			</form>
		</div>
		<div
			class="right-img img"
			data-aos="fade-left"
			data-aos-once="true"
			data-aos-delay="500"
		>
			<img src="@/assets/img/greens2.png" alt="greens" />
		</div>
	</section>
</template>

<style lang="scss" scoped>
.subscribe {
	overflow: hidden;
	position: relative;
	display: flex;
	justify-content: space-between;
	padding-bottom: 60px;
	background-color: $color-light-yellow;

	&__container {
		@include py(60px);
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	&__title {
		margin-bottom: 20px;
		text-align: center;
	}

	&__form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__email {
		@include max-res-width(600px);
		@include px(30px);
		height: 48px;
		font-size: 14px;
		line-height: 1.5px;
		border-radius: 5px;
		border: 1px solid $color-light-green;
		margin-bottom: 20px;
	}

	&__btn {
		max-width: 150px;
		@include flex-center;
	}
}

@media screen and (min-width: $tablet) {
	.subscribe {
		&__title {
			margin-bottom: 30px;
		}

		&__form {
			display: flex;
			flex-direction: row;
			justify-content: center;
		}

		&__email {
			font-size: 16px;
			margin-bottom: 0;
			margin-right: 20px;
		}

		&__btn {
			height: 48px;
			max-width: 150px;
			@include flex-center;
		}
	}
}
</style>
