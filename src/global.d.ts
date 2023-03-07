/// <reference types="@sveltejs/kit" />

export interface RegisterAttributes {
	username: string;
	firstname: string;
	lastname: string;
	password: string;
	passwordConfirmation: string;
	language: 'de' | 'el';
	type: 'student' | 'teacher' | 'researcher';
	school_id: string;
}

export interface TaskAttributes {
	id: number;
	rightAnswer: string;
	src: string;
	answerType: 'numbers' | 'twoColors' | 'threeColors';
	audio?: { de: string; el_cy: string };
	video?: { de: string; el_cy: string };
}

export interface AnswerAttributes {
	answer: string;
	rightAnswer?: string;
	time: number;
	taskId?: number;
	skip?: boolean;
}

export interface CompletionAttributes {
	completions: AnswerAttributes[];
	taskType: string;
}

export interface ClassAttributes {
	name: string;
	students: string[];
}
