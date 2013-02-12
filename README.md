# What is it

A simple example showing you how to run unit tests using mocha, checking results
with selenium-runner and having a tap output with tape.

# How to

```bash
git clone git://github.com/vvo/simple-mocha-example.git && cd simple-mocha-example
git submodule update --init --recursive
```

1. Have working selenium-grid running on :4444
2. Have some browsers that can access host through 192.168.56.1

```bash
npm install -g http-server
http-server .
```

```bash
node selenium-test
```