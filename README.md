# What is it

A simple example showing you how to run unit tests using mocha, checking results
with selenium-runner and having a tap output with tape.

# How to

1. Have working selenium-grid running on :4444
2. Have some browsers that can access host through 192.168.56.1
3. npm install -g http-server
4.
  ```bash
  http-server .
  ```
5.
  ```bash
  node selenium-test
  ```