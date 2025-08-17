FROM node:18


RUN apt-get update && \
    apt-get install -y --only-upgrade $(apt list --upgradable 2>/dev/null | grep -E 'debian|lib|node' | awk -F/ '{print $1}') && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
