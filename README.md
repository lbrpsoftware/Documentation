[logo]: https://www.lbrp.be/files/design/logo_lbrp.svg ""
![logo]

# Documentation

## LBRP Business Software

[LBRP](https://www.lbrp.be) develops software for accounting and bookkeeping firms, as well as for the clients of these firms. This software is developed based on practical experience. As a result, LBRP always focuses on user-friendliness and simplicity.

Our main advantage is that our software development stems from the practical experience of our customers. Suggestions for improvement or additions to the program are added with the necessary attention.

## Build and run

Spin up the following container (*you could mount your volume to a different location and use a different external port*):

```yaml
services:
  vuepress:
    image: node:latest
    build:
      context: .
    container_name: vuepress
    restart: unless-stopped
    volumes:
      - $HOME/docker/lbrp/:/lbrp/
    ports:
      - "8080:8080"
```

```dockerfile
FROM node:latest

RUN apk update && apk upgrade \
    && apk add --no-cache bash git openssh \
    && rm -rf /lbrp

RUN git clone https://github.com/lbrpsoftware/Documentation.git /lbrp

WORKDIR /lbrp
RUN npm install || { cat npm-debug.log; exit 1; }

ENTRYPOINT ["tail", "-f", "/dev/null"]
```

Run this on your Host

```bash
docker compose up -d
```

Run this in your Container

```bash
npm run docs:dev
```

## Contribute

We encourage all contributions, whether that's opening issues to request edits or additions, or adding them yourself in PRs. We recommend checking out the [VuePress](https://vuepress.vuejs.org/) documentation for help writing correctly formatted Markdown.

When contributing PRs, please do your best to follow these guidelines:

  - Use present tense and active voice.
  - Use sentence case in headers and other titles (*e.g. "Create an application"*).
  - If you're adding a new article, add it to the `sidebar` object in `/docs/.vuepress/config.ts`.
  - If you're adding code examples, please include comments to explain what each function, section of code, etc. is achieving.
  - Keep punctuation to the minimum necessary.
  - Always capitalize "LBRP, Accowin, Finasset and Belcofin".
  - Feel free to use **bold text** to emphasize words or phrases, use italic (*in parantheses*), avoid underlines.
  - Use numerals (*e.g. 1, 2, 3*) to represent numbers.
  - If you're making changes, make sure to run `yarn run lint` before committing to ensure your code is formatted correctly.


## The Index

- [LBRP](docs/README.md)