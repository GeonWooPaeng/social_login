import { json } from '@sveltejs/kit';
import { PUBLIC_NAVER_OAUTH_TOKEN_URL } from '$env/static/public';

export async function POST({ request }) {
	try {
		const params = await request.json();
		const response = await fetch(PUBLIC_NAVER_OAUTH_TOKEN_URL, {
			method: 'POST',
			body: new URLSearchParams(params)
		});
		if (!response.ok) throw new Error(`[Error] get_token_data_naver status: ${response.status}`);
		return json(await response.json());
	} catch (error) {
		console.log(error);
	}
}
