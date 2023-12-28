# Creating Base Image of node version 20
FROM node:20

# Creating Working Directory within the container
WORKDIR /myapp

# Copy all file from local to container working directory
COPY . .

# After Copying code into container preaparing node module in image
RUN npm install 

# Setting port 
EXPOSE 3000 

# Executing this command when container run
CMD [ "npm","start" ]