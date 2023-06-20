export async function get_token_data_naver(params) {
	try {
		const response = await fetch('/naver_token_data', {
			method: 'POST',
			body: JSON.stringify(params)
		});
		if (!response.ok) throw new Error(`[Error] get_token_data_naver status: ${response.status}`);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export async function get_user_info_naver(token_data) {
	try {
		const response = await fetch('/naver_user_info', {
			method: 'POST',
			body: JSON.stringify(token_data)
		});
		if (!response.ok) throw new Error(`[Error] get_user_info_naver status: ${response.status}`);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}
