Simple Nodejs hello world app for Kubernetes demonstration purpose.

git clone https://github.com/ikovac/kubernetes-hello-world.git

Nodejs application can be found in index.js file. 

If you want deploy this app on Kubernetes do the following:
1. Go to Google Kubernetes Engline (GKE) and login. If you don't have account you can use 1 year free trial option.
2. Create cluster
3. Connect to the cluster
4. cd kubernetes-files
5. kubectl apply -f ./deployment.yaml
6. kubectl apply -f ./service.yaml
7. Wait a while until external IP address appears.
8. Navigate to the [external IP address]:3000
