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
            emailext body: 'Build was successful',
            recipientProviders:
                            [[$class: 'DevelopersRecipientProvider'],
                            [$class: 'RequesterRecipientProvider']],
            subject: 'Your app is awesome'
        }
    }
}