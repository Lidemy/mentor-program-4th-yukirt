#!/bin/bash

curl --silent https://api.github.com/users/$1 | jq '.["name", "bio", "location", "blog"]' | sed 's/"//g'