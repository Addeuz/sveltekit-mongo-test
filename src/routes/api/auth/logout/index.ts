import type { RequestHandler } from '@sveltejs/kit';
import { Cookie } from '$lib/database/models';
import * as cookie from 'cookie';

export const post: RequestHandler = async (request) => {
	const cookies = cookie.parse(request.headers.cookie || '');

	if (cookies.session_id && request.locals.user) {
		const deadCookie = await Cookie.findOneAndDelete({ cookie_id: cookies.session_id });
	}

	const headers = {
		'Set-Cookie': cookie.serialize('session_id', cookies.session_id, {
			httpOnly: true,
			expires: new Date(0),
			sameSite: 'lax',
			path: '/'
		})
	};

	return {
		status: 200,
		headers,
		body: {
			message: 'Logout successful'
		}
	};
};
