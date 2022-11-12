<h1 align="left">
@songwuk/eslint-config
</h1>

> use `bumpp` bumps my version numbers and more

> use `conventional-changelog-cli` Generate a changelog from git metadata

<p align="left">
eslint code and inspired by <a href="https://github.com/antfu/eslint-config">eslint-config</a> 
</p>


<a href="https://www.npmjs.com/package/@songwuk/eslint-config">
<img src="https://img.shields.io/npm/v/@songwuk/eslint-config/latest.svg?style=flat-square" alt="NPM Version" />
</a>

<h2>
Usage
</h2>

## Recommended workflow

1. Make changes
1. Commit those changes
1. Make sure Travis turns green
1. Bump version in `package.json`
1. `conventionalChangelog`
1. Commit `package.json` and `CHANGELOG.md` files
1. Tag
1. Push

The reason why you should commit and tag after `conventionalChangelog` is that the CHANGELOG should be included in the new release, hence `gitRawCommitsOpts.from` defaults to the latest semver tag.

<h3>
install
</h3>

```bash
pnpm add eslint @songwuk/eslint-config -D
```

<h3>
Config
</h3>

`.eslintrc.json`
```json
{
  "extends": ["@songwuk"]
}
```
