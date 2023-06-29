# Sprout API
## Table of Contents
  - [Technologies](##Technologies)
  - [Approach](##Approach)
  - [Future Updates](##Future)
  - [Credits](##Credits)
## Technologies
  - Node.js
  - Express.js
  - MongoDB/Mongoose
  - AWS/EC2 Deployment
## Approach
This API is the backend to the Sprout mobile app. It was setup using node.js and express.js with the data being stored on MongoDB and managed through the mongoose cli. This API uses the REST implementation along with authorizations. This API needed a way to store the goals from a user on the Sprout app. Thus it uses an authentication middleware using a JWT token for authentication. For deployment, I set up an AWS EC2 instance and connected it to my sprout-api git repository with systemd to keep the service running.
## Future Updates
coming soon...
## Credits
A shoutout to the Youtube channels [Dave Gray](https://www.youtube.com/@DaveGrayTeachesCode) and [Coding Addict](https://www.youtube.com/@CodingAddict) for teaching me what I needed to know in order to make this API.
