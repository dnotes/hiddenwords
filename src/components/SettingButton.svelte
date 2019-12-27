<script>
	export let setting
	export let value
	function update() {
		setting.set(value)
	}
</script>

<style>
	a {
		display: inline-block;
		text-align: center;
		width: 40px;
		height: 40px;
		line-height: 40px;
		font-size: 24px;
		box-shadow: 0 0 2px rgba(126,126,126,.5);
		border-radius: 20px;
		overflow: hidden;
		margin: 4px;
	}
	a.selected {
		box-shadow: 0 0 5px rgba(126,140,255,.6);
	}
</style>

<a href='/' class:selected='{ $setting === value }' on:click|preventDefault={update}>
<slot></slot>
</a>