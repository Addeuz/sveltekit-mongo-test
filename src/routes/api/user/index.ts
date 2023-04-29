import { User } from '$lib/database/models';
import type { Languages } from '$lib/i18n';
import { generateQRCode, getUrl } from '$lib/utils';
import type { RequestHandler } from '@sveltejs/kit';
import type { RegisterAttributes } from 'src/global';

export const post: RequestHandler = async (request) => {
	const { username, firstname, lastname, password, language, type, school_id } =
		request.body.valueOf() as RegisterAttributes;

	const user = await User.findOne({ username });

	if (user) {
		return {
			status: 401,
			body: {
				message: 'User already exists'
			}
		};
	}

	const newUser = new User({ username, firstname, lastname, password, language, type, school_id });
	await newUser.save();

	// const qrCode = await generateQRCode(
	// 	`http://192.168.50.66:3000/login/student?username=${newUser.username}`
	// );
	const qrCode = await generateQRCode(getUrl(`/login/student?username=${newUser.username}`));

	return {
		status: 200,
		body: {
			message: 'User created successfully',
			user: newUser,
			qrCode
		}
	};
};

export const put: RequestHandler = async (request) => {
	const data = request.body.valueOf() as { language: Languages; user_id: string };

	const user = await User.findById(data.user_id);

	user.language = data.language;
	await user.save();

	return {
		status: 200
	};
};
