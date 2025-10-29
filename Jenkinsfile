pipeline {
  agent any

  stages {

    stage('Pull Code') {
      steps {
        echo 'Pulling source code from GitHub...'
        git 'https://github.com/Nigarish-here66/tech-twirl.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        echo 'Building Docker image...'
        sh 'docker build -t 44815/tech-twirl:latest .'
      }
    }

    stage('Push to Docker Hub') {
      steps {
        echo 'Pushing image to Docker Hub...'
        withCredentials([string(credentialsId: 'dockerhub-token', variable: 'DOCKER_TOKEN')]) {
          sh 'echo $DOCKER_TOKEN | docker login -u 44815 --password-stdin'
          sh 'docker push 44815/tech-twirl:latest'
        }
      }
    }
  }
}
