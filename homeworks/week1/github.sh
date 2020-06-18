#!/bin/bash

data=$(curl --silent https://api.github.com/users/$1);


echo ${data} | grep -o '"name": "[^"]*' | grep -o '[^"]*$'
echo ${data} | grep -o '"bio": "[^"]*' | grep -o '[^"]*$'
echo ${data} | grep -o '"location": "[^"]*' | grep -o '[^"]*$'
echo ${data} | grep -o '"blog": "[^"]*' | grep -o '[^"]*$'
