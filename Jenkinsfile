pipeline {
    agent any
    stages {
        stage('---clean---') {
            steps {
                sh "mvn clean package"
            }
        }
        stage('--move war file--') {
            steps {
                sh "cp /var/lib/jenkins/workspace/Barfinder-front-end-branch/target/barfinder-0.0.1-SNAPSHOT.war /home/lewisrwebb/wildfly/standalone/deployments"
            }
        }
    }
}
