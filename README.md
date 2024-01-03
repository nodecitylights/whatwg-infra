# @neoncitylights/whatwg-infra

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![npm (scoped)](https://img.shields.io/npm/v/@neoncitylights/whatwg-infra?style=flat-square)](https://www.npmjs.com/package/@neoncitylights/whatwg-infra)
[![Codecov](https://img.shields.io/codecov/c/github/neoncitylights/ts-whatwg-infra?style=flat-square&logo=codecov&logoColor=%23fff)](https://codecov.io/gh/neoncitylights/ts-whatwg-infra)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/neoncitylights/ts-whatwg-infra/.github%2Fworkflows%2Fmain.yml?style=flat-square)](https://github.com/neoncitylights/ts-whatwg-infra/actions/workflows/main.yml)

A small TypeScript package implementing various Unicode-related algorithms from the **WHATWG Infra Standard**[^whatwg-infra]. This currently includes:
 - [§ 4.5 Code points](https://infra.spec.whatwg.org/#code-points)
 - [§ 4.6 Strings](https://infra.spec.whatwg.org/#strings)

## Install

```
npm install @neoncitylights/whatwg-infra
```

## Documentation

[Auto-generated API documentation is available.](https://neoncitylights.github.io/ts-whatwg-infra/)

### API reference

#### Code points

 - `fn`: <a href="#codePoints_isCodePointBetween">#</a> codePoints.**isCodePointBetween**(*value*, *low*, *max*): boolean • [source](./src/codePoints.ts)
 - `fn`: <a href="#codePoints_isAsciiByte">#</a> codePoints.**isAsciiByte**(*value*): boolean • [source](./src/codePoints.ts)
 - `fn`: <a href="#codePoints_isSurrogate">#</a> codePoints.**isSurrogate**(*value*): boolean • [source](./src/codePoints.ts)
 - `fn`: <a href="#codePoints_isScalarValue">#</a> codePoints.**isScalarValue**(*value*): boolean • [source](./src/codePoints.ts)
 - `fn`: <a href="#codePoints_isNonCharacter">#</a> codePoints.**isNonCharacter**(*value*): boolean • [source](./src/codePoints.ts)
 - `fn`: <a href="#codePoints_isAsciiTabOrNewline">#</a> codePoints.**isAsciiTabOrNewline**(*value*): boolean • [source](./src/codePoints.ts)
 - `fn`: <a href="#codePoints_isAsciiWhitespace">#</a> codePoints.**isAsciiWhitespace**(*value*): boolean • [source](./src/codePoints.ts)
 - `fn`: <a href="#codePoints_isC0Control">#</a> codePoints.**isC0Control**(*value*): boolean • [source](./src/codePoints.ts)
 - `fn`: <a href="#codePoints_isC0ControlOrSpace">#</a> codePoints.**isC0ControlOrSpace**(*value*): boolean • [source](./src/codePoints.ts)
 - `fn`: <a href="#codePoints_isControl">#</a> codePoints.**isControl**(*value*): boolean • [source](./src/codePoints.ts)
 - `fn`: <a href="#codePoints_isAsciiDigit">#</a> codePoints.**isAsciiDigit**(*value*): boolean • [source](./src/codePoints.ts)
 - `fn`: <a href="#codePoints_isAsciiUpperHexDigit">#</a> codePoints.**isAsciiUpperHexDigit**(*value*): boolean • [source](./src/codePoints.ts)
 - `fn`: <a href="#codePoints_isAsciiLowerHexDigit">#</a> codePoints.**isAsciiLowerHexDigit**(*value*): boolean • [source](./src/codePoints.ts)
 - `fn`: <a href="#codePoints_isAsciiHexDigit">#</a> codePoints.**isAsciiHexDigit**(*value*): boolean • [source](./src/codePoints.ts)
 - `fn`: <a href="#codePoints_isAsciiUpperAlpha">#</a> codePoints.**isAsciiUpperAlpha**(*value*): boolean • [source](./src/codePoints.ts)
 - `fn`: <a href="#codePoints_isAsciiLowerAlpha">#</a> codePoints.**isAsciiLowerAlpha**(*value*): boolean • [source](./src/codePoints.ts)
 - `fn`: <a href="#codePoints_isAsciiAlpha">#</a> codePoints.**isAsciiAlpha**(*value*): boolean • [source](./src/codePoints.ts)
 - `fn`: <a href="#codePoints_isAsciiAlphanumeric">#</a> codePoints.**isAsciiAlphanumeric**(*value*): boolean • [source](./src/codePoints.ts)

#### Strings

 - `fn`: <a href="#strings_collectCodepoints">#</a> strings.**collectCodepoints**(*value*, *position*, *predicate*): [string, number] • [source](./src/strings.ts)
 - `fn`: <a href="#strings_convertStringToScalarValue">#</a> strings.**convertStringToScalarValue**(*value*): string • [source](./src/strings.ts)
 - `fn`: <a href="#strings_stripNewlines">#</a> strings.**stripNewlines**(*value*): string • [source](./src/strings.ts)
 - `fn`: <a href="#strings_normalizeNewlines">#</a> strings.**normalizeNewlines**(*value*): string • [source](./src/strings.ts)
 - `fn`: <a href="#strings_stripTrailingLeadingAsciiWhitespace">#</a> strings.**stripTrailingLeadingAsciiWhitespace**(*value*): string • [source](./src/strings.ts)
 - `fn`: <a href="#strings_stripCollapseAsciiWhitespace">#</a> strings.**stripCollapseAsciiWhitespace**(*value*): string • [source](./src/strings.ts)

## License

This library is licensed under the MIT license ([`LICENSE-MIT`](./LICENSE) or http://opensource.org/licenses/MIT).

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the MIT license, shall be licensed as above, without any additional terms or conditions.

[^whatwg-infra]: WHATWG Working Group. (2022, November 23). Infra Standard. Retrieved November 25, 2022, from https://infra.spec.whatwg.org/
