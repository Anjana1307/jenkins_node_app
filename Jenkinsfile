pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Anjana1307/jenkins_node_app.git'
            }
        }
        stage('Install') {
            steps {
               bat 'npm install'
            }
        }
        stage('Run App') {
            steps {
               bat 'node index.js'
            }
        }
        stage('Test') {
            steps {
               bat 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
               bat 'docker build -t my-node-app .'
            }
        }
        stage('Run Docker Container') {
            steps {
               bat 'docker run -d -p 3000:3000 --name node-add-container my-node-app'
            }
        }
        stage('Stop Docker Container') {
            steps {
               bat 'docker stop node-add-container'
            }
        }
    }
}
