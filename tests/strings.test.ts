import { expect, test } from 'vitest';

import {
	convertStringToScalarValue,
	normalizeNewlines,
	stripCollapseAsciiWhitespace,
	stripNewlines,
	stripTrailingLeadingAsciiWhitespace,
} from '../src/strings';

test.each([
	[ '', '' ],
	[ '\u{D800}', '\u{FFFD}' ],
	[ '\u{DFFF}', '\u{FFFD}' ],
	[ 'test', 'test' ],
])('convert string to scalar value string', (input, expected) => {
	expect(convertStringToScalarValue(input)).toBe(expected);
});

test.each([
	[ '', '' ],
	[ 'a\n\n', 'a' ],
	[ 'a\r\n\r\n', 'a' ],
	[ 'a\r\r', 'a' ],
	[ 'apple\nbanana', 'applebanana' ],
])('strip newlines', (value, expected) => {
	expect(stripNewlines(value)).toBe(expected);
});

test.each([
	[ '', '' ],
	[ '\r', '\n' ],
	[ '\r\n\r\n', '\n\n' ],
	[ 'a\r\ntttt\r', 'a\ntttt\n'],
])('normalize newlines', (value, expected) => {
	expect(normalizeNewlines(value)).toBe(expected);
});

test.each([
	[ '', '' ],
])('strip trailing and leading ASCII whitespace', (value, expected) => {
	expect(stripTrailingLeadingAsciiWhitespace(value)).toBe(expected);
});

test.each([
	[ '', '' ],
	[ '    ', ' ' ],
	['cat dog  hamster \n\r', 'cat dog hamster'],
	['\r  \n  cat dog  hamster', 'cat dog hamster'],
	['\r  \n  cat dog  hamster \n\r', 'cat dog hamster'],
])('strip and collapse ASCII whitespace', (value, expected) => {
	expect(stripCollapseAsciiWhitespace(value)).toBe(expected);
});
