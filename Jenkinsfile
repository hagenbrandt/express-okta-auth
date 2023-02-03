pipeline {
    agent{
        docker { image 'node:14.19.3-alpine' }
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
    post{
        always {
            emailext body: 'A Test Mail from Jenkins', recipientProviders: ['h.brandt@steinberg.de'], subject: 'Test'
        }
    }
}