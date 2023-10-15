import { textAndAudio } from '.';

export function selectAudio(
	audioIndex: number,
	language: string,
	superlative?: boolean
): HTMLAudioElement | undefined {
	if (superlative) {
		// const audioArray = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
		// const id = textAndAudio[audioArray[(Math.random() * audioArray.length) | 0]].audio[language];
		// if (id) {
		return new Audio('/audio/task_complete.mp3');
		// }
	} else {
		const id = textAndAudio[audioIndex].audio[language];
		if (id) {
			return new Audio(textAndAudio[audioIndex].audio[language]);
		}
	}
}
