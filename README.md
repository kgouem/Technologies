# DevOps Hands-On Lab

A hands-on DevOps learning environment where I build, deploy, monitor, troubleshoot, and improve applications using real-world DevOps and Cloud engineering practices.

The goal of this repository is to practice the complete application lifecycle — from a developer pushing code to GitHub through CI/CD, containerization, cloud infrastructure, Kubernetes deployment, monitoring, alerting, troubleshooting, and rollback.

## 🎯 Project Goal

Build an end-to-end DevOps environment that simulates how applications are delivered and operated in a real production environment.

The workflow will gradually include:

**Developer → GitHub → CI/CD → Code Quality → Docker → AWS → Kubernetes → Monitoring → Alerting**

## 🏗️ Target Architecture

```text
Developer
    |
    v
GitHub Repository
    |
    v
CI/CD Pipeline
(Jenkins / GitHub Actions)
    |
    +----> Build & Test
    |
    +----> SonarQube
    |
    v
Docker
    |
    v
AWS ECR
    |
    v
AWS EKS
    |
    +----> Kubernetes Deployment
    +----> Kubernetes Service
    +----> Ingress / Load Balancer
    |
    v
Application
    |
    +----> Prometheus
    +----> Grafana
    +----> Datadog
    |
    v
Monitoring & Alerts
```

## 🛠️ Technologies

### Application & Source Control

- React
- Git
- GitHub
- npm

### CI/CD

- Jenkins
- GitHub Actions

### Code Quality

- SonarQube

### Containers

- Docker
- AWS ECR

### Infrastructure as Code

- Terraform

### Configuration Management

- Ansible

### Cloud

- AWS
- VPC
- IAM
- EC2
- ECR
- EKS
- Elastic Load Balancing
- CloudWatch

### Kubernetes

- Deployments
- Services
- ConfigMaps
- Secrets
- Ingress
- Liveness Probes
- Readiness Probes
- Horizontal Pod Autoscaling

### Monitoring & Observability

- Prometheus
- Grafana
- Datadog
- AWS CloudWatch

## 📂 Repository Structure

```text
devops-hands-on-lab/
│
├── app/
│   └── React application
│
├── docker/
│   └── Dockerfile
│
├── kubernetes/
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   └── configmap.yaml
│
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── providers.tf
│
├── ansible/
│   ├── inventory
│   └── playbooks/
│
├── jenkins/
│   └── Jenkinsfile
│
├── .github/
│   └── workflows/
│
├── monitoring/
│   ├── prometheus/
│   └── grafana/
│
├── docs/
│   ├── architecture/
│   └── troubleshooting/
│
├── .gitignore
└── README.md
```

## 🚀 DevOps Workflow

### Phase 1 — Application

Create and run a React application locally.

### Phase 2 — Git & GitHub

Practice:

- Repository creation
- Branching
- Pull requests
- Merging
- Tags
- Releases
- Resolving merge conflicts

### Phase 3 — Docker

Containerize the application and practice:

- Building images
- Running containers
- Port mapping
- Docker logs
- Image tagging
- Troubleshooting containers

### Phase 4 — CI/CD

Create automated pipelines using Jenkins and GitHub Actions.

Pipeline example:

```text
Checkout
   ↓
Install Dependencies
   ↓
Build
   ↓
Test
   ↓
SonarQube Analysis
   ↓
Docker Build
   ↓
Push Image to ECR
   ↓
Deploy to EKS
   ↓
Verify Deployment
```

### Phase 5 — AWS Infrastructure

Use Terraform to provision infrastructure such as:

- VPC
- Public/private subnets
- Security groups
- IAM roles
- ECR
- EKS
- Load balancer

### Phase 6 — Kubernetes

Deploy the application to Amazon EKS and practice:

```bash
kubectl get nodes
kubectl get pods
kubectl get deployments
kubectl get services
kubectl describe pod <pod-name>
kubectl logs <pod-name>
kubectl rollout status deployment/<deployment-name>
kubectl rollout undo deployment/<deployment-name>
```

### Phase 7 — Monitoring

Implement application and infrastructure monitoring using:

**Prometheus**

Collect application and Kubernetes metrics.

**Grafana**

Create dashboards to visualize system health and performance.

**Datadog**

Practice centralized monitoring, logs, metrics, alerts, and troubleshooting.

**CloudWatch**

Monitor AWS resources and application logs.

## 🔥 Failure & Troubleshooting Labs

This repository is also designed to intentionally create failures and troubleshoot them.

Scenarios will include:

- Application deployment failure
- Docker container crash
- Kubernetes `CrashLoopBackOff`
- `ImagePullBackOff`
- Failed readiness probe
- Failed liveness probe
- High CPU usage
- Pod scaling problems
- Service connectivity failure
- Load balancer problems
- CI/CD pipeline failure
- Bad application release
- Terraform deployment failure

Troubleshooting approach:

```text
Detect
  ↓
Assess Impact
  ↓
Check Recent Changes
  ↓
Inspect Metrics
  ↓
Inspect Logs
  ↓
Identify Root Cause
  ↓
Mitigate / Roll Back
  ↓
Verify Recovery
  ↓
Prevent Recurrence
```

## 🔄 Rollback Practice

Practice Kubernetes deployment rollbacks:

```bash
kubectl rollout history deployment/<deployment-name>

kubectl rollout undo deployment/<deployment-name>

kubectl rollout status deployment/<deployment-name>
```

## 📊 SRE Practices

The lab will also cover Site Reliability Engineering concepts including:

- SLA — Service Level Agreement
- SLO — Service Level Objective
- SLI — Service Level Indicator
- Availability
- Reliability
- Latency
- Error rate
- Incident response
- Monitoring
- Alerting
- Root cause analysis
- Rollback and recovery

## 🧪 Example Real-World Scenario

A developer pushes a new React application version to GitHub.

The CI/CD pipeline automatically:

1. Checks out the code.
2. Installs dependencies.
3. Runs tests.
4. Performs SonarQube analysis.
5. Builds a Docker image.
6. Pushes the image to AWS ECR.
7. Deploys the new version to Amazon EKS.
8. Kubernetes performs readiness and liveness checks.
9. Prometheus collects metrics.
10. Grafana displays application health.
11. Datadog monitors logs and alerts.
12. If the deployment fails, the application can be rolled back to the previous stable version.

## 📈 Progress

- [ ] Create React application
- [ ] Push application to GitHub
- [ ] Create Git branching workflow
- [ ] Dockerize application
- [ ] Create GitHub Actions pipeline
- [ ] Configure Jenkins
- [ ] Configure SonarQube
- [ ] Create AWS ECR repository
- [ ] Provision infrastructure with Terraform
- [ ] Create Amazon EKS cluster
- [ ] Deploy application to Kubernetes
- [ ] Configure Load Balancer / Ingress
- [ ] Configure Prometheus
- [ ] Configure Grafana
- [ ] Configure Datadog
- [ ] Configure CloudWatch
- [ ] Configure alerts
- [ ] Test autoscaling
- [ ] Simulate deployment failures
- [ ] Practice troubleshooting
- [ ] Practice rollback
- [ ] Document incidents and solutions

## 📚 Purpose

This repository is intended for continuous hands-on practice in:

**AWS Cloud Engineering | DevOps Engineering | Site Reliability Engineering (SRE)**

Each lab will include documentation describing:

- What was implemented
- Why it was implemented
- Commands used
- Problems encountered
- Troubleshooting steps
- Root cause
- Final solution
- Lessons learned

## 👨‍💻 Author

**Karim Gouem**

AWS Cloud | DevOps | SRE
