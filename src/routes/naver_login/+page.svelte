<style>
	.div_result_container_cls {
		width: 100%;
		font-size: 13px;
	}
	.div_warning_cls {
		font-weight: bold;
		margin-bottom: 16px;
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
	<div class="div_warning_cls">
		❗️이용자 보호를 위해 네이버 서비스에서 직접 로그아웃을 해야합니다.
	</div>
	<div class="div_user_info_cls">
		{user_info}
	</div>
</div>

<script>
	import { PUBLIC_NAVER_CLIENT_ID, PUBLIC_NAVER_CLIENT_SECRET } from '$env/static/public';
	import { onMount } from 'svelte';
	import { get_token_data_naver, get_user_info_naver } from '../../apis/naver_login.js';

	let user_info = '';

	onMount(async () => {
		const params = new URLSearchParams(window.location.search);
		const authorization_code = params.get('code');
		const state = params.get('state');
		const access_token_params = {
			grant_type: 'authorization_code',
			client_id: PUBLIC_NAVER_CLIENT_ID,
			client_secret: PUBLIC_NAVER_CLIENT_SECRET,
			code: authorization_code,
			state: 'test'
		};
		const token_data = await get_token_data_naver(access_token_params);
		const user_data = await get_user_info_naver(token_data);
		user_info = JSON.stringify(user_data.response, null, 4);
	});
</script>
