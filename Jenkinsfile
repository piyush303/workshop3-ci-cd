pipeline {
  agent any

  stages {
    stage ('Installing npm dependencies') {
      steps {
        sh 'export PATH=/usr/local/bin  npm install'
        // Bat 'npm install'
      }
    }

    stage ('Run Unit Test') {
      steps {
        sh 'export PATH=/usr/local/bin npm run test'
      }
    }
  }
}