<script>
import SectionTitle from '../SectionTitle.vue';
import SectionDescription from '../SectionDescription.vue';
export default { components: { SectionTitle, SectionDescription } };
</script>

<template>
	<section class="service">
		<div class="container service__container">
			<div class="service__content">
				<SectionTitle :elementClass="'service__title'"
					>Why We Are The Best?</SectionTitle
				>
				<SectionDescription :elementClass="'service__description'">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley...
				</SectionDescription>

				<div class="swiper service__swiper">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="swiper-slide__icon-wrapper">
								<svg class="svg-delivery-man-dims">
									<use xlink:href="files/sprite.svg#delivery-man"></use>
								</svg>
							</div>
							<div class="swiper-slide__text-content">
								<div class="swiper-slide__title">Fasted delivery Service</div>
								<div class="swiper-slide__discription">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</div>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="swiper-slide__icon-wrapper">
								<svg class="svg-shopping-list-dims">
									<use xlink:href="files/sprite.svg#shopping-list"></use>
								</svg>
							</div>
							<div class="swiper-slide__text-content">
								<div class="swiper-slide__title">Online order Service</div>
								<div class="swiper-slide__discription">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</div>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="swiper-slide__icon-wrapper">
								<svg class="svg-fast-time-dims">
									<use xlink:href="files/sprite.svg#fast-time"></use>
								</svg>
							</div>
							<div class="swiper-slide__text-content">
								<div class="swiper-slide__title">24/8 Service</div>
								<div class="swiper-slide__discription">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-button-next-my">
					<svg class="svg-long-arrow-dims arrow-icon">
						<use
							class="svg-long-arrow-dims"
							xlink:href="files/sprite.svg#long-arrow"
						></use>
					</svg>
				</div>
			</div>
			<div class="service__image-block image-with-courier">
				<div class="image-with-courier__green-elipse"></div>
				<img
					class="image-with-courier__green-snake"
					src="@/assets/img/snake-elipse.png"
					alt=""
				/>
			</div>
		</div>
	</section>
</template>

<style lang="scss"></style>
