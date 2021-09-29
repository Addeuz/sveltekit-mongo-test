/// <reference types="@sveltejs/kit" />

export interface RegisterAttributes {
	username: string;
	password: string;
	passwordConfirmation: string;
	type: 'student' | 'teacher' | 'researcher';
	school_id: string;
}

export interface TaskAttributes {
	id: number;
	rightAnswer: string;
	src: string;
	answerType: 'numbers' | 'twoColors' | 'threeColors';
}

export interface AnswerAttributes {
	answer: string;
	rightAnswer: string;
	time: number;
}
