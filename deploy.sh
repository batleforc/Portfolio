docker container stop portfolio
docker container rm portfolio
docker build -t batlefroc/portfolio .
docker run -p 8080:8080 -d --name portfolio batlefroc/portfolio 
sleep 2s
docker logs portfolio