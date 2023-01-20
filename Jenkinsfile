pipeline {
    agent{
        docker { image 'node:12' }
    }
    stages {
        stage ('build') {
            steps {
                sh 'node --version'
            }
        }
        stage ('run unit tests') {
            steps {
                sh 'sudo chown -R 501:20 "/.npm"'
                sh 'npm i'
                sh 'npm run test'
            }
        }
    }
}