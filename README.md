# Product Management API

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [Commands](#commands)

## Introduction

- An application will be developed for a product management system.
- The application will have a swagger documentation.



## Swagger Documentation
- You can find the swagger documentation in the following link:
	- [Swagger Documentation](http://localhost:3000/v1/docs)

## Usage

Clone the repo with ssh:

```bash
git clone git@github.com:Emreozgun/insider-case-study.git
```

Clone the repo with https:
```bash
git clone https://github.com/Emreozgun/insider-case-study.git
```

To run test docker-compose file:

```bash
yarn docker:build-test
```

To start docker containers:

```bash
yarn docker:up
```
To down docker containers:

```bash
yarn docker:down
```

To run remove containers and images:

```bash
yarn docker:rm
```

Testing:

```bash
# run all tests
yarn test

# run all tests in watch mode
yarn test:watch

# run test coverage
yarn coverage
```

To run ESLint:

```bash
yarn lint
```

Fix ESLint errors:

```bash
yarn lint:fix
```

To run prettier:

```bash
yarn prettier
```

Fix prettier errors:

```bash
yarn prettier:fix
```
