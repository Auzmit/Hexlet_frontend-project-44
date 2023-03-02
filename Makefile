brain-calc:
	node bin/brain-calc.js

brain-even:
	node bin/brain-even.js

brain-games:
	node bin/brain-games.js

brain-gcd:
	node bin/brain-gcd.js

lint:
	npx eslint

install:
	npm ci
 
publish:
	npm publish --dry-run
	
# Если, например, существует и задача "test" и файл "test", то нужно вписать "test" в ".PHONY" , чтобы цель выполнялась
.PHONY: test,
