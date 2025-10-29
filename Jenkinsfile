pipeline {
  agent any   // Runs on any available Jenkins agent

  stages {

    stage('Pull Code') {
      steps {
        // Clone your GitHub repository
        git 'https://github.com/Nigarish-here66/tech-twirl.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        // Build Docker image from Dockerfile in your repo
        sh 'docker build -t tech-twirl:latest .'
      }
    }

    stage('Push to Docker Hub') {
      steps {
        // Securely log in and push image using saved Jenkins credentials
        withCredentials([string(credentialsId: 'dockerhub-token', variable: 'DOCKER_TOKEN')]) {
          sh 'echo $DOCKER_TOKEN | docker login -u 44815 --password-stdin'
          sh 'docker push 44815/tech-twirl:latest'
        }
      }
    }
  }
}
