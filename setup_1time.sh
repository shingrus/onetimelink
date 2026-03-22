#/bin/bash

set -x
rm -f 1time-api
go build -o 1time-api
sudo install 1time-api /usr/local/bin/1time-api
sudo service 1time stop
sudo service 1time start
