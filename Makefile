install:
	npm ci
 
brain-games:
	node bin/brain-games.js
 
publish:
	npm publish --dry-run
	
# Если, например, существует и задача "test" и файл "test", то нужно вписать "test" в ".PHONY" , чтобы цель выполнялась
.PHONY: test,
