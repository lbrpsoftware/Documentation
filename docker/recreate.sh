#!/bin/bash

# $TF_VAR_COT compose -f ./docker-compose.yaml down
$TF_VAR_COT compose -f ./docker-compose.yaml up -d --wait --build
