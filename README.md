### Hexlet tests and linter status:
[![Actions Status](https://github.com/sen98ia/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/sen98ia/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/b4ea84f28b3f2f18996b/maintainability)](https://codeclimate.com/github/sen98ia/frontend-project-46/maintainability)
[![Lint-and-test Status](https://github.com/sen98ia/frontend-project-46/actions/workflows/lint-and-test.yml/badge.svg)](https://github.com/sen98ia/frontend-project-46/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b4ea84f28b3f2f18996b/test_coverage)](https://codeclimate.com/github/sen98ia/frontend-project-46/test_coverage)

<h1>Gendiff</h1>
<h2>Description</h2>
<p>Gendiff or difference generator is a tool to compare two data structures.</p>
<h3>Features</h3>
<ul>
<li>Supports different input formats: yml, yaml, json.</li>
<li>Generates reports in the form of plain text, stylish and json.</li>
</ul>

<h2>Requirements</h2>
<p>Node.js v13.2.0 or higher.</p>

<h2>Setup</h2>

<code>git clone git@github.com:sen98ia/frontend-project-46.git</code>

<code>cd frontend-project-44</code>

<code>npm install</code>

<code>npm link</code>

<h2>Usage and report demonstration</h2>
<p>Use <code>gendiff -h</code> to see usage information.</p>
<h3>Stylish</h3>
<p><code>gendiff filepath1.json filepath2.json</code> or <code>gendiff --format stylish filepath1.json filepath2.json</code></p>
<a href="https://asciinema.org/a/sW6amtwCiF4BdRDFU9L2fQEeu" target="_blank"><img src="https://asciinema.org/a/sW6amtwCiF4BdRDFU9L2fQEeu.svg" /></a>

<h3>Plain</h3>
<code>gendiff --format plain filepath1.json filepath2.json</code>
<a href="https://asciinema.org/a/0G0Nxiu4cp6eTNvgfW3pv4TwX" target="_blank"><img src="https://asciinema.org/a/0G0Nxiu4cp6eTNvgfW3pv4TwX.svg" /></a>

<h3>Plain</h3>
<code>gendiff --format json filepath1.json filepath2.json</code>
https://asciinema.org/a/LNdZ0iG64JlfbYjhkf5dKE9Z5