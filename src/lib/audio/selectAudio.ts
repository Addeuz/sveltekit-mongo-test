import { textAndAudio } from '.';

export function selectAudio(
	audioIndex: number,
	language: string,
	superlative?: boolean
): HTMLAudioElement {
	if (superlative) {
		const audioArray = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
		return new Audio(
			textAndAudio[audioArray[(Math.random() * audioArray.length) | 0]].audio[language]
		);
	} else {
		return new Audio(textAndAudio[audioIndex].audio[language]);
	}
}
