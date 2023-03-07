import * as cookie from 'cookie';
import type { Handle, GetSession } from '@sveltejs/kit';
import { User, Cookie, TeacherClass } from '$lib/database/models';
import { connect } from '$lib/database/db';
import { browser } from '$app/env';

export const handle: Handle = async ({ request, resolve }) => {
	await connect();
	const cookies = cookie.parse(request.headers.cookie || '');

	if (cookies.session_id) {
		// const userCookie = await Cookie.findOne({ where: { cookieId: cookies.session_id } });
		const userCookie = await Cookie.findOne({ cookie_id: cookies.session_id });
		const user = await (
			await User.findById(userCookie.user_id)
		).populate({ path: 'classes', model: TeacherClass });
		request.locals.user = JSON.parse(JSON.stringify(user));
		request.locals.authenticated = true;
	} else {
		request.locals.authenticated = false;
	}

	return await resolve(request);
};

/** @type {import('@sveltejs/kit').GetSession} */
export const getSession: GetSession = ({ locals }) => {
	if (!locals.authenticated) {
		return {
			authenticated: locals.authenticated
		};
	}

	return {
		authenticated: locals.authenticated,
		user: locals.user,
		language: browser ? localStorage.getItem('language') : locals.user.language ?? 'el_cy'
	};
};
