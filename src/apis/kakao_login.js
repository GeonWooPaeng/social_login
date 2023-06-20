import {
	PUBLIC_KAKAO_OAUTH_TOKEN_URL,
	PUBLIC_KAKAO_USER_INFO_URL,
	PUBLIC_KAKAO_OAUTH_AUTHORIZE_URL,
	PUBLIC_KAKAO_CLIENT_ID,
	PUBLIC_KAKAO_REDIRECT_URI
} from '$env/static/public';

export async function get_authorization_page_kakao() {
	try {
		const response = await fetch(
			`${PUBLIC_KAKAO_OAUTH_AUTHORIZE_URL}?response_type=code&client_id=${PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${PUBLIC_KAKAO_REDIRECT_URI}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/xml',
					'Access-Control-Allow-Origin': '*'
				}
			}
		);
		if (!response.ok)
			throw new Error(`[Error] get_authorization_page_kakao status: ${response.status}`);
	} catch (error) {
		console.log(error);
	}
}

export async function get_token_data_kakao(params) {
	try {
		const response = await fetch(PUBLIC_KAKAO_OAUTH_TOKEN_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
			},
			body: new URLSearchParams(params)
		});
		if (!response.ok) throw new Error(`[Error] get_access_token_kakao status: ${response.status}`);
    return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export async function get_user_info_kakao(access_token) {
	try {
		const response = await fetch(PUBLIC_KAKAO_USER_INFO_URL, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
				Authorization: `Bearer ${access_token}`
			}
		});
		if (!response.ok) throw new Error(`[Error] get_user_info_kakao status: ${response.status}`);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}
