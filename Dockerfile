# Dockerizing the Keystone + React + Node stack on Latest Ubuntu LTS

FROM ubuntu:latest
MAINTAINER Shawn W. Stern <stern.shawn@gmail.com>

# Replace shell w/ bash, good practice and makes the NVM installation work
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Update sources and install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    git \
    libssl-dev

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 6.9.1

# Install NVM and get Node environment installed
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Install yarn for a speed boost
RUN npm install -g yarn

# Clone and build our App
RUN git clone https://github.com/stern-shawn/keystone-react-boilerplate.git /keystone && \
    cd /keystone/keystone_client_boilerplate && \
    yarn && \
    yarn build && \
    cd .. && \
    yarn && \
    # Change the mongo connection to use docker hosts entry instead of default localhost
    sed -i 's/localhost\/my-project/mongo:27017/g' server.js

# Expose ourselves to the world
ENV PORT 3000
EXPOSE $PORT

# Set default working directory and execute run script for MongoDB + Keystone
WORKDIR /keystone
ENTRYPOINT ["./run.sh"]
