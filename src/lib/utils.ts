import { dev } from '$app/env';

export function getUrl(prefix?: string): string {
	return dev ? `http://localhost:3000${prefix}` : `https://didunas.vercel.app${prefix}`;
}
