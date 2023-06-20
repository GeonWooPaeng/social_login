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
		width: 20%;
		height: 35px;
		margin-bottom: 16px;
		outline: none;
		border: none;
		border-radius: 4px;
		display: inline;
		background-color: #fee501;
		text-align: center;
		font-weight: 400;
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
		<button class="btn_kakao_logout_cls"> 카카오 로그아웃 </button>
	</div>
	<div class="div_user_info_cls">
		{user_info}
	</div>
</div>

<script>
	import { PUBLIC_NAVER_CLIENT_ID, PUBLIC_NAVER_CLIENT_SECRET } from '$env/static/public';
	import { onMount } from 'svelte';
	import { get_token_data_naver } from '../../apis/naver_login.js';

	let user_info = '';

	onMount(async () => {
		// const params = new URLSearchParams(window.location.search);
		// const authorization_code = params.get('code');
		// const state = params.get('state');
		// const access_token_params = {
		// 	grant_type: 'authorization_code',
		// 	client_id: PUBLIC_NAVER_CLIENT_ID,
		// 	client_secret: PUBLIC_NAVER_CLIENT_SECRET,
		// 	code: authorization_code,
		// 	state: 'test'
		// };
		// const token_data = await get_token_data_naver(access_token_params);
		// const user_data = await get_user_info_naver(token_data.access_token);
		// user_info = JSON.stringify(user_data, null, 4);
	});
</script>
