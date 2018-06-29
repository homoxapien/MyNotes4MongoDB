# MyNotes4MongoDB
This is a repository where I put my code for each challenge in MongoDB from freecodecamp.com. If you are looking for solution, you could refer to those scripts with names which begin with '1-' (i.e. Chp1)

# 1. Installation
First of all, installing MongoDB on one's EC2 instance for Cloud9 can be tricky, check out these instructions from picklu: 

1. Run the command sudo nano /etc/yum.repos.d/mongodb-org-3.6.repo on the shell

2. Copy-paste the following content to the file

[mongodb-org-3.6]

name=MongoDB Repository

baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/3.6/x86_64/

gpgcheck=1

enabled=1

gpgkey=https://www.mongodb.org/static/pgp/server-3.6.asc

3. Hit ctrl+o and then hit enter to save the file and hit ctrl+x to close the file.

4. Run the command sudo yum install -y mongodb-org

5. Run the command mkdir /home/ec2-user/environment/data to create a data directory for your MongoDB data folder.

6. Run the command mongod --bind_ip=$IP --dbpath=/home/ec2-user/environment/data --nojournal to run the MongoDB daemon process

(ref: https://community.c9.io/t/how-to-setup-mongodb-in-aws-c9/22553/5)

# 2. Solving challenges 
Basically, just using process.argv list in the .js script.

Then,

$ learnyoumongo run XXX.js

$ learnyoumongo verify XXX.js
