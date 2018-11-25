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
				sh "cd /var/lib/jenkins/workspace/multibranch_branch-front-end/"
                		sh "cp target/barfinder-0.0.1-SNAPSHOT.war /home/lewisrwebb/wildfly/standalone/deployments"
            		}
		}
		stage('install new modules') {
			steps {
				sh "cd /front-end/"
				sh "sudo npm install"
				sh "npm start"
			}
		}		
    	}
}
