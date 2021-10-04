#!/bin/bash
set -ev

git clone https://${GH_REF} .deploy_git
cd .deploy_git
git checkout master

cd ../
mv .deploy_git/.git/ ./public/
cd ./public
git config user.name "waldenlak" # 修改name
git config user.email "2952068332@qq.com" # 修改email

git add .
git commit -m "Travis CI Auto Builder `date +"%Y-%m-%d %H:%M"`"
git push --force --quiet "https://${Travis_Token}@${GH_REF}" master:master # Travis_Token是在Travis中配置token的名称