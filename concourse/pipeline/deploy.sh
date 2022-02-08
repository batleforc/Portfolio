ytt -f . -f ./source --output-files tmp/
fly -t main set-pipeline --pipeline client-pos -c ./tmp/Client.yml
fly -t main set-pipeline --pipeline api-pos -c ./tmp/ApiMain.yml
read test