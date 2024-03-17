# a11y-experiments

A website to demonstrate various disabilities and how webtechnologies can be used to teach devs how to improve their websites for accessibility. There are various experiments one can view to get a grasp of what it means to have a disability and what happens when you browse the web with it. For both bad examples and good examples. Every experiment has a bit of context, the samples and links to read up further on the topic (if any are available or applicable). If you know a good addition to the project, please use the github issues, discussions or PR ability to suggest or (better yet) supply the solution already.

I'm not planning on actively maintaining this repository, so if somebody eventually wants to take over, thats fine by me. Preferrably a person or organisation that keeps it free and supported over longer time.

## About the experiments

I'm not a UX expert, nor specialized in Accessibility. Therefor you cannot take any major conclusions from this project. It is meant for educational purposes only.

## Install

To install the project, you just need to run `npm install` in this folder. This however requires a valid [NodeJS](https://www.nodejs.org) installation where the NPM task is able to run in the folder. The project is supplied from github <github.com/martinspire/a11y-experiments> and after checking out, installing and running the `npm run start` task, you should be able to see it running on <http://localhost:4100>. Mess around with it and see what you can figure out about accessibility.

## Tasks

There are various tasks defined in the package.json

* To run the project locally, you need to use the `nx serve` or `npm run start` task.
* To build it locally, you need to run `nx build` or `npm run build`.
* To unit test it locally, you need `nx test` or `npm run test`.
* To end to end test it locally, you need `nx e2e` or `npm run e2e`.

NOTE: To view the app locally, you need to open the app at <http://localhost:4100>. Not port 4200 like is default. This to prevent conflicts running it with other applications at the same time. It will show the URL in the console when running the application.

## Made with

* Angular - [Angular.dev](https://angular.dev)
* ESLint - (code quality, including Stylistic)
* Jest - (Unit testing)
* NX - (workspace management) [nx.dev](https://nx.dev)
* Playwright (E2E testing)

### Angular additions

* Material - <https://material.angular.io>
* NG Mocks - <https://github.com/help-me-mom/ng-mocks> - <https://ng-mocks.sudo.eu>
* PrimeNG - <https://primeng.org>
* PrimeNG Icons - <https://primeng.org/icons>
* PrimeFlex - <https://primeflex.org>
* Spectator - <https://github.com/ngneat/spectator> - <https://ngneat.github.io/spectator/>

### VSCode additions

* Recommended extensions
* Various settings
* Extensive ESLint configuration
* Prettier, Stylelint and Editorconfig

## Copyright and legal stuff

This project is made with free and open tools that hopefully allow me to give you a good experience. The code is covered in the MIT license. I just hope that you give me some credit where you use it and perhaps extend on it. I enjoy seeing places where the project has been featured or the responses it got from people that got to experience it. Any breach of licenses or trademarks is accidental and I would love for you to reach out so I can fix it.

This project is built by Martin Spierings from the Netherlands and you can view my profile on [linkedin](https://linkedin.com/in/martinspire) or [twitter/x](https://x.com/martinspire).
