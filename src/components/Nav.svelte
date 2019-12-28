<script>
	import SettingButton from './SettingButton.svelte'
	import ThemeSetting from './ThemeSetting.svelte'
	import { linkDisplay, theme } from '../store.js'
	linkDisplay.useLocalStorage()
	theme.useLocalStorage()
	import themes from '../themes.js'
	export let segment
	let showSettings = false
	function toggleSettings() {showSettings = !showSettings}
</script>

<style>
	div.menu {
		font-weight: 300;
		line-height: 56px;
		position: fixed;
		top: 0;
		right: 0;
		width: 180px;
		height: 56px;
		overflow: hidden;
		z-index: 10;
	}

	div.menu.showSettings { height: auto; }

	.row {
		text-align: center;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	a {
		text-decoration: none;
		display: inline-block;
		width: 60px;
		height: 60px;
		line-height: 60px;
		text-align: center;
	}
	a.selected { color: aliceblue; }
	i.fa { color: gray; font-size: 24px; }
	li i.fa { font-size: 40px; }
	li a.selected i.fa { text-shadow: -1px -1px 0 lightgoldenrodyellow, 
																		1px 1px 0 lightgoldenrodyellow, 
																		-1px 1px 0 lightgoldenrodyellow, 
																		1px -1px 0 lightgoldenrodyellow, 
																		0 0 8px cornflowerblue; }

</style>

<svelte:head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

<div class="menu" class:showSettings on:mouseOut="{showSettings=false}">
	<ul>
		<li><a title="home" class:selected='{segment === undefined}' href='.'><i class="fa fa-home" /></a></li>
		<li><a title="read" rel=prefetch class:selected='{segment === "read"}' href="read"><i class="fa fa-book" /></a></li> 
		<li><a title="settings" class:selected='{segment === "settings"}' href="settings" on:click|preventDefault={toggleSettings}><i class="fa fa-cog" /></a></li>
	</ul>
	<div class="row">
		<div>
			<SettingButton setting={linkDisplay} value="grid"><i class="fa fa-th" /></SettingButton>
			<SettingButton setting={linkDisplay} value="list"><i class="fa fa-list" /></SettingButton>
		</div>
	</div>
	<div class="row">
		<div>
			{#each themes as i}
				<SettingButton setting={theme} value="{i.id}"><ThemeSetting {...i} /></SettingButton>
			{/each}
		</div>
	</div>
</div>
