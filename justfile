default:
	@just --list

@compile:
	npx tsc

@check-exports:
	npx attw --pack . --ignore-rules=cjs-resolves-to-esm

test: compile
	npx just check-exports
	node --experimental-strip-types --test "source/**/*.test.ts"

build:
	npx just compile
