docker build -t batlefroc/portfolio .
docker run -p 8080:8080 -d -name portfolio batlefroc/portfolio 

docker logs portfolio