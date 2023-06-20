<style>
	.div_login_container_cls {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btn_login_cls {
		width: 40%;
		outline: none;
		border: none;
		display: inline;
		background-color: transparent;
		cursor: pointer;
	}
	.img_login_cls {
		width: 100%;
	}
</style>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Social Login" />
</svelte:head>
<div class="div_login_container_cls">
	<button on:click={on_click_kakao_login} class="btn_login_cls">
		<img src={kakao_login} alt="kakao-login" class="img_login_cls" />
	</button>
	<button on:click={on_click_naver_login} class="btn_login_cls">
		<img src={naver_login} alt="naver-login" class="img_login_cls" />
	</button>
</div>

<script>
	import {
		PUBLIC_KAKAO_OAUTH_AUTHORIZE_URL,
		PUBLIC_KAKAO_CLIENT_ID,
		PUBLIC_KAKAO_REDIRECT_URI,
		PUBLIC_NAVER_OAUTH_AUTHORIZE_URL,
		PUBLIC_NAVER_CLIENT_ID,
		PUBLIC_NAVER_REDIRECT_URI
	} from '$env/static/public';
	import kakao_login from '$lib/images/kakao-login.png';
	import naver_login from '$lib/images/naver-login.png';
	import { get_authorization_page_kakao } from '../apis/kakao_login.js';

	async function on_click_kakao_login() {
		// const authorize_page = await get_authorization_page_kakao();
		// console.log(authorize_page);
		const authorize_url = `${PUBLIC_KAKAO_OAUTH_AUTHORIZE_URL}?response_type=code&client_id=${PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${PUBLIC_KAKAO_REDIRECT_URI}`;
		window.location.href = authorize_url;
	}

	async function on_click_naver_login() {
		const authorize_url = `${PUBLIC_NAVER_OAUTH_AUTHORIZE_URL}?response_type=code&client_id=${PUBLIC_NAVER_CLIENT_ID}&state=test&redirect_uri=${PUBLIC_NAVER_REDIRECT_URI}`;
		window.location.href = authorize_url;
	}
</script>
