# Negotiation App

This is a take home test done for certain company.

## Synopsis

This is an implementation of a value comparer, which shows success or failure message after comparing the values. This comparison is implemented on the backend. Instructions to run the backend server can be found below.

## Key takeaways of implementation

- There is server side session management tracked by cookie set on client. This lets multiple clients to use the backend.
- `localhost:3000` is whitelisted on server to enable CORS communication
- Fetching of weather information is also implemented on server. This is exposed at endpoint `\weather`
- Components are arranged based on atomic model
- CSS modules are used to keep the classnames unique at component level
- To keep the code consistent, there is a basic `eslint` (uses airbnb recommendation) and `prettier` config
- webpack server is use to run the client server
- babel is used to transpile react and ES2015
- Unit tests and integration tests are separated by the file format
- Tests are implemented using jest and enzyme
- NOTE: since integration test uses enzyme, there a warning to use `act()`. This the limitation of emzyme interfering the react rendering cycle. Ideally we could write the tests using `react testing library`

## To Run the project

1. Install all dependencies

```
yarn
```

2. Run in dev mode

```
yarn start:dev
```

Now app is running at `http://localhost:3000`

## To run Unit tests

```
yarn test:unit
```

## To run Integration tests

```
yarn test:integration
```

## To enable backend

1. checkout the repo for the backend

```
git clone git@github.com:rr235/negotiation-app-server.git
```

2. make a copy of `.env-sample` and rename it to `.env` (make sure correct `OPEN_WEATHER_MAP_API_KEY` is set )

3. Install dependencies

```
yarn
```

4. Run the server

```
yarn start:dev
```

Now backend is running at `http://localhost:5000`
