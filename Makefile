test: 
	./node_modules/.bin/mocha -R spec --recursive
	DEBUG=objectify-folder node --experimental-modules test-mjs/test.mjs

.PHONY: test