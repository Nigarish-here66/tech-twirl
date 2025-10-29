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
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh '''
            echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
            docker push 44815/tech-twirl:latest
          '''
        }
      }
    }
  }
}
