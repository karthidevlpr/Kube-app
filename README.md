# Kube-App
Sample Application for kubernetes implementation and running multi container in same pod kubernetes


This branch contain the kubernetes implementation, deploy and run the dockerized server application in Kubernetes, here kubernetes is running two container in same pod with same host, two application container talk to each other inside the pod with localhost


Steps :-
-	With help of MiniKube we can access the Kubernetes cluster in local machine
-	Install the minikube (brew install minikube) , minikube will setup the Api server and control manager and kubectl
-	First dockerized the server application by creating the DockerFile and building the docker image
-	push docker image to DockerHub
-	next create the pods and run the container inside the pods by create and apply the deployments in project
-	to access the dockerized server application outside we need to create and apply the services in project
-	next need to start the service then we can access the application in browser with node IP and port

Commands used for kubernetes implementation

-	Create DockerFile 
-	docker build -t “Image name”  “path of DockerFile” (Build Image)
-	docker push “Image name and tag ” (Push the Image)
-	brew install minikube  (Install the minikube)
-	minikube start (Start the minikube)
-	minikube status  (to check the status of minikube)
-	minikube kubectl -- apply -f deployment.yml  (Create the deployment file in project and apply)
-	minikube kubectl get pods (get the list of pods)
-	minikube kubectl get all (get all information about kubernetes cluster)
-	minikube kubectl -- apply -f service.yml  (Create the service file in project and apply)
-	minikube kubectl get svc (get the list of service)
-	minikube kubectl describe po "pods name" (get the detail information about pod)
-	minikube kubectl delete deployments/pods/svc "name of deployments/pods/svc" (delete the particular deployment , service, pod)
-	minikube kubectl -- delete pods -l app=”match name pods” (delete the list pods same time)
-	minikube service “service name” (start the service)
-	minikube dashboard (open the dashboard of Kubernetes cluster in your local machine)
 

