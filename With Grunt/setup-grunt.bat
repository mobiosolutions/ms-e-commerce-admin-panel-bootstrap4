@echo off

node --version >nul 2>&1 || goto no_node
ruby --version >nul 2>&1 || goto no_ruby
pushd grunt-file
call npm install -g grunt-cli
call npm install
call gem install sass
popd
goto end

:no_node
echo You need to install nodejs. Download the installer from the following page and rerun when you are done.
pause
start http://nodejs.org/download/



:no_ruby
echo You need to install Ruby. Download the installer from the following page, also select two checkboxes Add Ruby executables to your PATH and Associate .rb and .rbw files with this Ruby installation and rerun when you are done.
pause
start http://rubyinstaller.org/downloads/

:end
