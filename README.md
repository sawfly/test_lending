1 docker-compose up -d
2 docker inspect testlending.app
2.1 get Gateway ("Gateway": "172.24.0.1")
3 add `172.24.0.1 test_lending.app` to hosts
4 docker exec -ti testlending.web bash
if Nodejs don't installed
'curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
 sudo apt-get install -y nodejs'
5 $ npm install --global gulp-cli
6 $ npm install --save-dev gulp
7 $ npm install
8 $ gulp