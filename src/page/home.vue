<template>
	<f7-page>
		<f7-navbar>
			<f7-nav-left>
				<f7-link>
					<f7-icon if-ios="f7:bell" if-md="material:notifications_none"></f7-icon>
				</f7-link>
			</f7-nav-left>
			<f7-nav-title>My App</f7-nav-title>
			<f7-nav-right>
				<f7-link>
					<f7-icon material="crop_free"></f7-icon>
				</f7-link>
			</f7-nav-right>
		</f7-navbar>
		
		<f7-swiper pagination :params="{ spaceBetween: 50}" class="home-swiper">
			<f7-swiper-slide>Slide 1</f7-swiper-slide>
			<f7-swiper-slide>Slide 2</f7-swiper-slide>
			<f7-swiper-slide>Slide 3</f7-swiper-slide>
		</f7-swiper>

		<f7-block>
			<f7-row>
				<f7-col>Col 1</f7-col>
				<f7-col>Col 2</f7-col>
				<f7-col>Col 3</f7-col>
				<f7-col>Col 3</f7-col>
			</f7-row>
			<f7-row>
				<f7-col>Col 1</f7-col>
				<f7-col>Col 2</f7-col>
				<f7-col>Col 3</f7-col>
				<f7-col>Col 3</f7-col>
			</f7-row>
		</f7-block>

		<f7-block-title>Songs</f7-block-title>
		<f7-list media-list>
			<f7-list-item title="Item 1" subtitle="Subtitle 1" text="Item 1 Text"></f7-list-item>
			<f7-list-item title="Item 1" subtitle="Subtitle 2" text="Item 2 Text"></f7-list-item>
			<f7-list-item title="Item 1" subtitle="Subtitle 2" text="Item 2 Text"></f7-list-item>
		</f7-list>

		<f7-block-title>Songs</f7-block-title>
		<f7-list media-list>
			<f7-list-item title="Item 1" subtitle="Subtitle 1" text="Item 1 Text"></f7-list-item>
			<f7-list-item title="Item 1" subtitle="Subtitle 2" text="Item 2 Text"></f7-list-item>
			<f7-list-item title="Item 1" subtitle="Subtitle 2" text="Item 2 Text"></f7-list-item>
		</f7-list>

		<f7-block-title>Songs</f7-block-title>
		<f7-list media-list>
			<f7-list-item title="Item 1" subtitle="Subtitle 1" text="Item 1 Text"></f7-list-item>
			<f7-list-item title="Item 1" subtitle="Subtitle 2" text="Item 2 Text"></f7-list-item>
			<f7-list-item title="Item 1" subtitle="Subtitle 2" text="Item 2 Text"></f7-list-item>
		</f7-list>

		
		<f7-toolbar tabbar labels>
			<f7-link icon="icon-home" text="Home" tab-link="#tab1"></f7-link>
			<f7-link icon="icon-email" text="Messages" tab-link="#tab1"></f7-link>
			<f7-link icon="icon-compass" text="Find" tab-link="#tab1"></f7-link>
			<f7-link icon="icon-person" text="Personal" tab-link="#tab1"></f7-link>
		</f7-toolbar>
	</f7-page>
</template>

<style lang="less">
.home-swiper {
	// margin: 0 0 35px;
	height: 10rem;

	// .swpier-slide {
	// 	font-size: 25px;
	// 	font-weight: 300;
	// 	display: flex;
	// 	justify-content: center;
	// 	align-items: center;
	// 	background: #fff;
	// 	color: #000;
	// 	box-sizing: border-box;
	// 	border: 1px solid #ddd;
	// 	background: #fff;
	// }
}
</style>
