import type { IUser } from '$lib/database/models/users.models';
import { i18n } from '$lib/i18n';
import type { Languages } from '$lib/i18n';
import { taskKeys, keyToThumbnailIdentifier } from '$lib/tasks';
import type { StudentOverview, TaskColors } from '$lib/tasks';
import { generateQRCode, getUrl } from '$lib/utils';

export async function getStudentListMarkup(students: IUser[]): Promise<string> {
	let studentsMarkup = '';

	for (const student of students) {
		const qrCode = await generateQRCode(getUrl(`/login/student?username=${student.username}`));
		// studentsMarkup += `<div style="display: flex; align-items: center; justify-content: center; gap: 1rem;"><img src=${qrCode} /><div style="display: flex; flex-direction: column; align-items: start;"><span>Username: ${student.username}</span><span>Name: ${student.firstname}</span></div></div>`;
		studentsMarkup += `<div class="page" style="display: grid; place-content: center;"><div style="height: 100%; display: flex; align-items: center; justify-content: center; gap: 1rem;"><img src=${qrCode} /><div style="display: flex; flex-direction: column; align-items: start;"><span>Username: ${student.username}</span><span>Name: ${student.firstname}</span></div></div></div>`;
	}

	return `${studentsMarkup}`;
}

export function getStudentOverviewMarkup(overview: StudentOverview, lang: Languages): string {
	return `
        <div class="page" style="color-adjust: exact; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
            <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 0.25rem;">
                <span></span>
                <span style="margin: 0 auto;">${i18n['overall_risk'][lang]}</span>
                ${taskKeys
									.map((task) => {
										const thumnail = keyToThumbnailIdentifier(task);
										return `<img src="${`/thumbnails/${thumnail.name}-01.${thumnail.extension}`}" style="align-self: center; mix-blend-mode: multiply; display: flex; width: 100%; height: 100%; object-fit: cover; gap: 0.25rem;" />`;
									})
									.join('')}
                ${[...overview.values()]
									.sort((a, b) =>
										(a?.firstname ?? '').localeCompare(b.firstname, lang.replace('_', '-'))
									)
									.map(
										({ tasks, firstname }) => `
                                        <span style="padding: 0.5rem;">${firstname}</span>
                                        <span style="display:grid; place-content: center; padding: 0.5rem; background-color: rgb(229 231 235);"></span>
                                        ${taskKeys
																					.map((task) => {
																						const color: TaskColors | undefined =
																							tasks[task]?.[0].color;
																						const text = tasks[task]?.length.toString() ?? '';
																						return `<span style="display:grid; place-content: center; padding: 0.5rem; background-color: ${
																							color === 'green'
																								? 'rgb(34 197 94)'
																								: color === 'yellow'
																								? 'rgb(234 179 8)'
																								: color === 'red'
																								? 'rgb(239 68 68)'
																								: 'rgb(229 231 235)'
																						};">${text}</span>`;
																					})
																					.join('')}
                                    `
									)
									.join('')}
            </div>
        </div>
        `;
}
