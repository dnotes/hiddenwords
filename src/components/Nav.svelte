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
		line-height: 30px;
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 46px;
		padding-left: 6px;
		box-shadow: 0 3px 2px rgba(126,126,126,.6);
		z-index: 10;
	}

	div.settings { display:none; width:180px; padding-top:19px; border-bottom-right-radius:8px; box-shadow: 3px 3px 2px rgba(126,126,126,.6)}
	div.settings.showSettings { display:block; }

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
		height: 46px;
		line-height: 46px;
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

<div class="menu" class:showSettings>
	<ul>
		<li><a title="home" class:selected='{segment === undefined}' href='/'><i class="fa fa-home" /></a></li>
		<li><a title="read" rel=prefetch class:selected='{segment === "hw"}' href="/hw"><i class="fa fa-book" /></a></li> 
		<li><a title="settings" class:selected='{segment === "settings"}' href="/settings" on:click|preventDefault={toggleSettings}><i class="fa fa-cog" /></a></li>
	</ul>
	<div class="settings" class:showSettings on:mouseOut="{() => {showSettings=false}}">
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
		<div class="row">
			<a href="/about">about</a>
		</div>
	</div>
</div>
