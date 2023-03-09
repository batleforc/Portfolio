# Weebo's Pipeline V3

## What is Weebo's Pipeline?

Weebo's Pipeline is one of the part of the WeeboGitOps environment. It's a Tekton CI/CD full workflow that allow you to deploy your application in a Kubernetes cluster and have full controll over it.

## Dependencies

- GitLeaks : https://raw.githubusercontent.com/tektoncd/catalog/main/task/gitleaks/0.1/gitleaks.yaml
- GitClone : https://raw.githubusercontent.com/tektoncd/catalog/main/task/git-clone/0.8/git-clone.yaml
- Previously kaniko and now buildkit

## Grafana historique (via loki)

{namespace="batleforc-portfolio", app=~"^bpg-pipeline-run-.\*"}
