#!/bin/bash
echo "Starting container. Runtime env variables: runvar=${runvar}"
nginx -g 'daemon off;'