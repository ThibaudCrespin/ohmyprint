# Create image based on the official Node 6 image from dockerhub
FROM node:6

# Expose the port the app runs in
EXPOSE 4200
EXPOSE 80

RUN sudo npm install --global @angular/cli
COPY docker-entrypoint.sh /docker-entrypoint.sh
CMD ["/docker-entrypoint.sh"]