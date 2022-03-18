export function getCompletedSound(completedCount: number): number {
	if (completedCount === 1) {
		return 37;
	}
	if (completedCount === 2) {
		return 38;
	}
	if (completedCount === 3) {
		return 39;
	}
	if (completedCount === 4) {
		return 40;
	}
	if (completedCount === 5) {
		return 41;
	}
	if (completedCount === 6) {
		return 42;
	}
	if (completedCount === 7) {
		return 43;
	}
	if (completedCount === 8) {
		return 44;
	}
	if (completedCount === 9) {
		return 45;
	}
	if (completedCount === 10) {
		return 36;
	}

	return 1;
}
