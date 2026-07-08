export PATH := './node_modules/.bin:' + env_var('PATH')

default:
	@just --list

@eslint *OPTIONS:
	eslint . --max-warnings 0 {{OPTIONS}}

@eslint-fix:
	just eslint --fix

@lint: eslint

@lint-fix: eslint-fix

@compile:
	tsc

@check-exports:
	attw --pack . --ignore-rules=cjs-resolves-to-esm

test: lint compile
	just check-exports
	mocha --config mocha.config.json

build:
	just compile
