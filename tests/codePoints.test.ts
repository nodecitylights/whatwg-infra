import { expect, test } from 'vitest';

import {
	isAsciiAlpha,
	isAsciiAlphanumeric,
	isAsciiByte,
	isAsciiDigit,
	isAsciiHexDigit,
	isAsciiLowerAlpha,
	isAsciiLowerHexDigit,
	isAsciiTabOrNewline,
	isAsciiUpperAlpha,
	isAsciiUpperHexDigit,
	isAsciiWhitespace,
	isC0Control,
	isC0ControlOrSpace,
	isCodePointBetween,
	isNonCharacter,
	isSurrogate,
} from '../src';

test.each([
	['', 0x00, 0x20, false],
	['\u{00}', 0x00, 0x20, true],
	['\u{20}', 0x00, 0x20, true],
	['\u{7F}', 0x00, 0x20, false],
])('is codepoint %s in between %i and %i', (codePoint, min, max, expected) => {
	expect(isCodePointBetween(codePoint, min, max)).toBe(expected);
});

test.each([
	[ '\u{0000}', true],
	[ '\u{003F}', true],
	[ '\u{007F}', true],
	[ '\u{0080}', false],
])('is ASCII byte', (codePoint, expected) => {
	expect(isAsciiByte(codePoint)).toBe(expected);
});

test.each([
	[ '\u{D800}', true],
	[ '\u{DFFF}', true],
	[ '\u{E000}', false],
])('is Unicode surrogate', (codePoint, expected) => {
	expect(isSurrogate(codePoint)).toBe(expected);
});

test('is non-character', () => {
	for (let i = 0xFDD0; i <= 0xFDEF; i++) {
		expect(isNonCharacter(String.fromCodePoint(i))).toBe(true);
	}

	for (let i = 0x4FFFE; i <= 0x10FFFF; i += 0x10000) {
		expect(isNonCharacter(String.fromCodePoint(i))).toBe(true);
	}
});

test.each([
	[ '\u{0009}', true],
	[ '\u{000A}', true],
	[ '\u{000D}', true],
	[ '\u{0000}', false],
])('is ASCII tab or newline', (codePoint, expected) => {
	expect(isAsciiTabOrNewline(codePoint)).toBe(expected);
});

test.each([
	[ '\u{0000}', false],
	[ '\u{0009}', true],
	[ '\u{000A}', true],
	[ '\u{000B}', false],
	[ '\u{000C}', true],
	[ '\u{000D}', true],
	[ '\u{0020}', true],
])('is ASCII whitespace', (codePoint, expected) => {
	expect(isAsciiWhitespace(codePoint)).toBe(expected);
});

test('is C0 control', () => {
	for (let i = 0x0000; i <= 0x001F; i++) {
		expect(isC0Control(String.fromCodePoint(i))).toBe(true);
	}
});

test('is C0 control or space', () => {
	for (let i = 0x0000; i <= 0x001F; i++) {
		expect(isC0ControlOrSpace(String.fromCodePoint(i))).toBe(true);
	}
	expect(isC0ControlOrSpace('\u{0020}')).toBe(true);
});

test('is ASCII digit', () => {
	for(let i = 0x0030; i <= 0x0039; i++) {
		expect(isAsciiDigit(String.fromCodePoint(i))).toBe(true);
	}
});

test('is ASCII upper hex digit', () => {
	for(let i = 0x0041; i <= 0x0046; i++) {
		expect(isAsciiUpperHexDigit(String.fromCodePoint(i))).toBe(true);
	}
});

test('is ASCII lower hex digit', () => {
	for(let i = 0x0061; i <= 0x0066; i++) {
		expect(isAsciiLowerHexDigit(String.fromCodePoint(i))).toBe(true);
	}
});

test('is ASCII hex digit', () => {
	for(let i = 0x0041; i <= 0x0046; i++) {
		expect(isAsciiHexDigit(String.fromCodePoint(i))).toBe(true);
	}

	for(let i = 0x0061; i <= 0x0066; i++) {
		expect(isAsciiHexDigit(String.fromCodePoint(i))).toBe(true);
	}
});

test('is ASCII upper alpha', () => {
	for(let i = 0x0041; i <= 0x005A; i++) {
		expect(isAsciiUpperAlpha(String.fromCodePoint(i))).toBe(true);
	}
});

test('is ASCII lower alpha', () => {
	for(let i = 0x0061; i <= 0x007A; i++) {
		expect(isAsciiLowerAlpha(String.fromCodePoint(i))).toBe(true);
	}
});

test('is ASCII alpha', () => {
	for(let i = 0x0041; i <= 0x005A; i++) {
		expect(isAsciiAlpha(String.fromCodePoint(i))).toBe(true);
	}

	for(let i = 0x0061; i <= 0x007A; i++) {
		expect(isAsciiAlpha(String.fromCodePoint(i))).toBe(true);
	}
});

test('is ASCII alphanumeric', () => {
	for(let i = 0x0030; i <= 0x0039; i++) {
		expect(isAsciiAlphanumeric(String.fromCodePoint(i))).toBe(true);
	}

	for(let i = 0x0041; i <= 0x005A; i++) {
		expect(isAsciiAlphanumeric(String.fromCodePoint(i))).toBe(true);
	}

	for(let i = 0x0061; i <= 0x007A; i++) {
		expect(isAsciiAlphanumeric(String.fromCodePoint(i))).toBe(true);
	}
});