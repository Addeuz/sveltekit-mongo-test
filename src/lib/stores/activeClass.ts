import type { ITeacherClass } from '$lib/database/models/teacherClass.models';
import { writable } from 'svelte/store';

export const activeClass = writable<ITeacherClass | undefined>(undefined);
