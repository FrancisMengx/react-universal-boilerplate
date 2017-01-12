setup:
	rm -r ./node_modules/
	npm install

build:
	node ./node_modules/webpack/bin/webpack.js
	cp -r assets/ dist/assets/
	cp -r dev_cert/ dist/dev_cert/

prod-build:
	rm -rf dist/
	node ./node_modules/webpack/bin/webpack.js --objectptimize-minimize --optimize-dedupe
	cp -r assets/ dist/assets

shrinkwrap:
	rm -r ./node_modules/
	npm install
	npm shrinkwrap

start:
	node ./node_modules/nodemon/bin/nodemon.js ./dist/server.js -js-ignore content/ dist/

dev: build
	node ./node_modules/nodemon/bin/nodemon.js ./dist/server.js --watch dist/&
	node ./node_modules/webpack/bin/webpack.js --watch

start-db:
	postgres -D /usr/local/var/postgres/postgres

pre-deploy: prod-build
	mkdir deploy
	cp -r dist/ deploy/
	cp package.json deploy/
	cp npm-shrinkwrap.json deploy/
	mkdir deploy/.ebextensions
	cp -r .ebextensions/ deploy/.ebextensions/
	cd deploy; zip -r ../deploy.zip * .ebextensions/
	rm -rf deploy/
