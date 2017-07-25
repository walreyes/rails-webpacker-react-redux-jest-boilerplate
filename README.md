# rails-webpacker-react-redux-jest-boilerplate

## Stack
This project is built on:
* Rails
* Webpacker
* React
* Redux

_Testing environment:_
* Jest
* React

## Development set up
Just clone the project and run `docker-compose up web` and visit `localhost:3000`

## Testing set up
Run `docker-compose run test bash` and run `rspec` or `npm test` for jest.
_Jest is reaaally slow inside a docker container but it works, so you might want to run it locally instead_

## Deployment
`git push heroku master` and you are good to go!.

`rails assets:precompile` will get webpacker to compile and deliver the javascript and that's it.
