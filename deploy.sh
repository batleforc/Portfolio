git pull
docker container stop portfolio
docker container rm portfolio
docker build -t batlefroc/portfolio .
docker run -p 8080:8080 -d --network weebo --name portfolio batlefroc/portfolio 
docker network connect weebo portfolio
sleep 2s
docker logs portfolio