[![Actions Status](https://github.com/sen98ia/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/sen98ia/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/b4ea84f28b3f2f18996b/maintainability)](https://codeclimate.com/github/sen98ia/frontend-project-46/maintainability)
[![Lint-and-test Status](https://github.com/sen98ia/frontend-project-46/actions/workflows/lint-and-test.yml/badge.svg)](https://github.com/sen98ia/frontend-project-46/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b4ea84f28b3f2f18996b/test_coverage)](https://codeclimate.com/github/sen98ia/frontend-project-46/test_coverage)

# :mag:Gendiff
Build with: JavaScript, Jest, ESLint, npm, lodash, commander.

## Description

Gendiff or difference generator is a tool to compare two data structures.

### Features

- Supports different input formats: yml, yaml, json.
- Generates reports in the form of plain text, stylish and json.

## Requirements

Node.js v13.2.0 or higher.

## Setup

```bash
git clone git@github.com:sen98ia/frontend-project-46.git
```
```bash
cd frontend-project-44
```
```bash
npm install
```

## Usage and report demonstration

Use `gendiff -h` to see usage information.

### Stylish

```bash
gendiff filepath1.json filepath2.json or gendiff --format stylish filepath1.json filepath2.json
```
[![asciicast](https://asciinema.org/a/sW6amtwCiF4BdRDFU9L2fQEeu.svg)](https://asciinema.org/a/sW6amtwCiF4BdRDFU9L2fQEeu)

### Plain
```bash
gendiff --format plain filepath1.json filepath2.json
```
[![asciicast](https://asciinema.org/a/0G0Nxiu4cp6eTNvgfW3pv4TwX.svg)](https://asciinema.org/a/0G0Nxiu4cp6eTNvgfW3pv4TwX)

### JSON
```bash
gendiff --format json filepath1.json filepath2.json
```
[![asciicast](https://asciinema.org/a/LNdZ0iG64JlfbYjhkf5dKE9Z5.svg)](https://asciinema.org/a/LNdZ0iG64JlfbYjhkf5dKE9Z5)