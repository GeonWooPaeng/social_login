import { json } from '@sveltejs/kit';
import { PUBLIC_NAVER_USER_INFO_URL } from '$env/static/public';

export async function POST({ request }) {
	try {
		const req = await request.json();
		const response = await fetch(PUBLIC_NAVER_USER_INFO_URL, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${req.access_token}`
			}
		});
		if (!response.ok) throw new Error(`[Error] get_user_info_naver status: ${response.status}`);
		return json(await response.json());
	} catch (error) {
		console.log(error);
	}
}
