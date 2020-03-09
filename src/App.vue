<template>
	<div id="app">
		<div id="nav">
			<router-view/>
		</div>
	</div>
</template>
<script>
	import Primary_passenger from '@/components/form.vue'
	export default {
		components: {
			Primary: Primary_passenger
		}
	}
</script>
<style lang="scss">
	@import url(https://use.fontawesome.com/releases/v5.1.0/css/all.css);
</style>
