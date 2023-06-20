<style>
	.div_result_container_cls {
		width: 100%;
		font-size: 13px;
	}
	.div_logout_container_cls {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btn_kakao_logout_cls {
		width: 23%;
		height: 55px;
		margin-bottom: 16px;
		outline: none;
		border: none;
		border-radius: 8px;
		display: inline;
		background-color: #fee501;
		text-align: center;
		font-weight: bold;
		font-size: 16px;
		cursor: pointer;
	}
	.div_user_info_cls {
		width: 100%;
		height: 100%;
		padding: 8px;
		border: 1px solid black;
		border-radius: 4px;
	}
</style>

<svelte:head>
	<title>Result</title>
	<meta name="description" content="Social Login Result" />
</svelte:head>

<div class="div_result_container_cls">
	<div class="div_logout_container_cls">
		<button on:click={on_click_kakao_logout} class="btn_kakao_logout_cls"> 카카오 로그아웃 </button>
	</div>
	<div class="div_user_info_cls">
		{user_info}
	</div>
</div>

<script>
	import {
		PUBLIC_KAKAO_CLIENT_ID,
		PUBLIC_KAKAO_REDIRECT_URI,
		PUBLIC_KAKAO_OAUTH_LOGOUT_URL,
		PUBLIC_LOGOUT_REDIRECT_URI
	} from '$env/static/public';
	import { onMount } from 'svelte';
	import { get_token_data_kakao, get_user_info_kakao } from '../../apis/kakao_login.js';

	let user_info = '';

	onMount(async () => {
		const params = new URLSearchParams(window.location.search);
		const authorization_code = params.get('code');

		const access_token_params = {
			grant_type: 'authorization_code',
			client_id: PUBLIC_KAKAO_CLIENT_ID,
			redirect_uri: PUBLIC_KAKAO_REDIRECT_URI,
			code: authorization_code
		};

		const token_data = await get_token_data_kakao(access_token_params);
		const user_data = await get_user_info_kakao(token_data.access_token);
		user_info = JSON.stringify(user_data, null, 4);
	});

	async function on_click_kakao_logout() {
		const logout_url = `${PUBLIC_KAKAO_OAUTH_LOGOUT_URL}?client_id=${PUBLIC_KAKAO_CLIENT_ID}&logout_redirect_uri=${PUBLIC_LOGOUT_REDIRECT_URI}`;
		window.location.href = logout_url;
	}
</script>
