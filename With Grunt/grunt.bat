@echo off
pushd grunt-file
call npm install
set params=%*
if "%params%"=="" set params=default
call grunt %params%
popd



