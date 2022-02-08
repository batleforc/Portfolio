# Creating a new sys of pipeline

The goal of this work is to allow my actual team mate and futur one to work faster with a good ci.

The one that i actually use is kind of hard to read and use.

So i'm gonna use YTT https://github.com/vmware-tanzu/carvel-ytt

YTT for FLY is the first step.

The second step is to use it in order to create the kube deploy more easily.

And at the end remove the deploy part from each git and only have it here (each container is only gonna need a DockerFile)

Possible alternative to kubectl cmd
https://github.com/jmkarthik/concourse-kubectl-resource

## Build a yaml file

par exemple dans pipeline

ytt -f {Your file} -f ./source --output-files tmp/

## Create DockerSecret

Please use the credential of the robot

```shell
kubectl create secret docker-registry regcred --docker-server="https://harbor.weebo.fr" --docker-username='bot$pos+pos' --docker-password="" -n pos
```