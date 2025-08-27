FROM registry.access.redhat.com/ubi8/ubi-minimal:latest

WORKDIR /app

RUN microdnf update -y && \
    microdnf install -y curl wget git && \
    microdnf clean all

# postgresql
RUN curl -o- https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm && \
    microdnf install -y pgdg-redhat-repo-latest.noarch.rpm && \
    microdnf clean all

RUN microdnf install -y postgresql16-client

# JavaScript
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash && \
    . "$HOME/.nvm/nvm.sh" && \
    nvm install --lts && \
    nvm use --lts && \
    npm install -g yarn

COPY . .

RUN yarn install --frozen-lockfile

RUN yarn --cwd packages/app add @backstage/plugin-techdocs && \
    yarn --cwd packages/backend add @backstage/plugin-techdocs-backend

RUN yarn build:backend

EXPOSE 7007

CMD ["yarn", "start"]
