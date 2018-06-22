test: 
	./node_modules/.bin/mocha -R spec --recursive
	node --experimental-modules test-mjs/test.mjs

.PHONY: test