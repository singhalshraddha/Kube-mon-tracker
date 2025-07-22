# 🚀 Kube-Mon-Tracker

A **Cloud-Native Monitoring System** built using **Prometheus**, **Grafana**, and **Kubernetes**.

---

## 📌 Features

- 📊 Real-time monitoring with Prometheus
- 📈 Interactive dashboards using Grafana
- ⚙️ Kubernetes cluster resource tracking
- 🐳 Dockerized microservices
- 📦 Helm charts for easy deployment
- 🔁 Node.js & Python-based backend services

---

## 🛠️ Tech Stack

- **Kubernetes** (Minikube)
- **Prometheus + Grafana** (via `kube-prometheus-stack`)
- **Node.js**
- **Python**
- **Docker**
- **Helm**

---

## 📷 Screenshots

<img width="1915" height="538" alt="Grafana Dashboard" src="https://github.com/user-attachments/assets/26f1bec7-443d-42f3-b149-0257d9db0e50" />

---

## 🚀 How to Run

```bash
# Clone the repository
git clone https://github.com/singhalshraddha/Kube-mon-tracker.git
cd kube-mon-tracker

# Install monitoring stack with Helm
helm install monitoring ./monitoring

# Deploy backend services
kubectl apply -f k8s-node-service.yaml
kubectl apply -f k8s-python-service.yaml
