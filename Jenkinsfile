pipeline {
    agent{
        docker { image 'node:12' }
    }
    environment {
        HOME = '.'
    }
    stages {
        stage ('build') {
            steps {
                sh 'node --version'
            }
        }
        stage ('run unit tests') {
            steps {
                sh 'npm i'
                sh 'npm run test'
            }
        }
    }
}