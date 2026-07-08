# 🚀 CloudMart DevOps Platform

A production-inspired full-stack e-commerce application built to demonstrate modern DevOps practices using **Docker**, **Docker Compose**, and **Kubernetes**.

This project showcases how a multi-container application can be containerized, orchestrated, configured, and deployed using industry-standard DevOps tools.

---

# 📌 Project Overview

CloudMart is a full-stack web application consisting of:

- 🖥️ React Frontend
- ⚙️ Node.js + Express Backend
- 🗄️ MySQL Database

The application is first deployed using **Docker Compose** for local development and then migrated to **Kubernetes** with production-style configurations including Deployments, StatefulSets, ConfigMaps, Secrets, Health Probes, and Ingress.

---

# 🏗️ Architecture

```
                    User
                      │
                      ▼
               React Frontend
              (Nginx Container)
                      │
                      ▼
             Node.js Express API
                      │
                      ▼
              MySQL Database
          (Persistent Storage)
```

### Kubernetes Architecture

```
                Ingress
                   │
        ┌──────────┴──────────┐
        │                     │
        ▼                     ▼
 Frontend Service      Backend Service
        │                     │
        ▼                     ▼
Frontend Pods          Backend Pods
                              │
                              ▼
                     MySQL StatefulSet
                              │
                              ▼
                     Persistent Volume
```

---

# 🛠️ Tech Stack

## Frontend

- React
- Nginx

## Backend

- Node.js
- Express.js

## Database

- MySQL

## Containerization

- Docker
- Docker Compose

## Container Orchestration

- Kubernetes

## Kubernetes Resources Used

- Deployment
- StatefulSet
- Service
- ConfigMap
- Secret
- Ingress
- Liveness Probe
- Readiness Probe
- Persistent Volume

---

# ✨ Features

- Full-stack application
- Multi-container architecture
- Dockerized frontend and backend
- Docker Compose deployment
- Kubernetes deployment
- MySQL StatefulSet
- Persistent database storage
- Secure configuration using ConfigMaps & Secrets
- Health monitoring with Liveness & Readiness probes
- Internal service communication
- Ingress-based routing
- Production-style project structure

---

# 📁 Project Structure

```
cloudmart-devops-platform
│
├── backend/
├── frontend/
├── database/
├── kubernetes/
│   ├── backend/
│   ├── frontend/
│   ├── mysql/
│   ├── configmap.yaml
│   ├── secret.yaml
│   └── ingress.yaml
│
├── docs/
├── docker-compose.yml
└── README.md
```

---

# 🐳 Run with Docker Compose

Clone the repository

```bash
git clone <repository-url>
cd cloudmart-devops-platform
```

Start the application

```bash
docker compose up --build
```

Application URLs

Frontend

```
http://localhost:3000
```

Backend API

```
http://localhost:5000
```

---

# ☸️ Deploy on Kubernetes

Apply Kubernetes manifests

```bash
kubectl apply -f kubernetes/
```

Verify resources

```bash
kubectl get pods
kubectl get svc
kubectl get deployments
kubectl get statefulsets
kubectl get ingress
```

---

# ❤️ Health Endpoints

Liveness Probe

```
/health/live
```

Readiness Probe

```
/health/ready
```

Application Health

```
/health
```

---

# 🔒 Kubernetes Features Demonstrated

- Deployment management
- Rolling updates
- Replica management
- Service discovery
- Stateful applications
- Persistent storage
- Secrets management
- Configuration management
- Health monitoring
- Ingress routing

---

# 📸 Screenshots

> Add screenshots here

Suggested screenshots:

- Application Homepage
- Docker Compose Running
- Kubernetes Pods
- Kubernetes Services
- Kubernetes Ingress
- Architecture Diagram

---

# 📚 Learning Outcomes

Through this project I gained practical experience with:

- Docker image creation
- Multi-stage Docker builds
- Docker Compose networking
- Kubernetes Deployments
- StatefulSets
- ConfigMaps
- Secrets
- Services
- Ingress
- Health Probes
- Kubernetes troubleshooting
- Container networking
- Persistent storage
- Production-style application deployment

---

# 🚀 Future Improvements

- GitHub Actions CI/CD Pipeline
- AWS Deployment
- Helm Charts
- Prometheus Monitoring
- Grafana Dashboards
- Terraform Infrastructure as Code

---

# 👨‍💻 Author

**Prasanna Pawar**

DevOps Enthusiast | System Administrator | Cloud & Infrastructure Automation

---