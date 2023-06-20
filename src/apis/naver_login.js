import { PUBLIC_NAVER_OAUTH_TOKEN_URL, PUBLIC_NAVER_USER_INFO_URL } from '$env/static/public';

export async function get_token_data_naver(params) {
	try {
		const response = await fetch(PUBLIC_NAVER_OAUTH_TOKEN_URL, {
			method: 'POST',
			body: new URLSearchParams(params)
		});
		if (!response.ok) throw new Error(`[Error] get_token_data_naver status: ${response.status}`);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export async function get_user_info_naver(access_token) {
	try {
		const response = await fetch(PUBLIC_NAVER_USER_INFO_URL, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${access_token}`
			}
		});
		if (!response.ok) throw new Error(`[Error] get_user_info_naver status: ${response.status}`);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}
