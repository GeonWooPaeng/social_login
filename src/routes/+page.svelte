<style>
	.div_login_container_cls {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btn_kakao_login_cls {
		width: 40%;
		outline: none;
		border: none;
		display: inline;
		background-color: transparent;
		cursor: pointer;
	}
	.img_kakao_login_cls {
		width: 100%;
	}
</style>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Social Login" />
</svelte:head>
<div class="div_login_container_cls">
	<button on:click={on_click_kakao_login} class="btn_kakao_login_cls">
		<img src={kakao_login} alt="kakao-login" class="img_kakao_login_cls" />
	</button>
</div>

<script>
	import {
		PUBLIC_KAKAO_OAUTH_AUTHORIZE_URL,
		PUBLIC_REST_API_KEY,
		PUBLIC_RESULT_REDIRECT_URI
	} from '$env/static/public';
	import kakao_login from '$lib/images/kakao-login.png';

	async function on_click_kakao_login() {
		const authorize_url = `${PUBLIC_KAKAO_OAUTH_AUTHORIZE_URL}?response_type=code&client_id=${PUBLIC_REST_API_KEY}&redirect_uri=${PUBLIC_RESULT_REDIRECT_URI}`;
		window.location.href = authorize_url;
	}
</script>
