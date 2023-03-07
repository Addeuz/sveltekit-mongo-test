import { dev } from '$app/env';
import QRCode from 'qrcode';

export function getUrl(prefix?: string): string {
	return dev ? `http://localhost:3000${prefix}` : `https://didunas.vercel.app${prefix}`;
}

export function generateUserId(): string {
	let left = '';
	let right = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < 4) {
		left += characters.charAt(Math.floor(Math.random() * charactersLength));
		right += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return `${left}-${right}`;
}

export const generateQRCode = async (text: string): Promise<string> => {
	try {
		return await QRCode.toDataURL(text);
	} catch (err) {
		console.error(err);
	}
};
