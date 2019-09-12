import {maxLineLength} from '@commitlint/ensure';
import {Rule} from './types';

const bodyMaxLineLength: Rule<number> = (
	parsed,
	when = 'always',
	value = 0
) => {
	const input = parsed.body;

	if (!input) {
		return [true];
	}

	return [
		maxLineLength(input, value),
		`body's lines must not be longer than ${value} characters`
	];
};

export default bodyMaxLineLength;
