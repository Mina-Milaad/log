FROM node:18

# تحديث النظام والحزم لتقليل الثغرات
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends \
    gir1.2-gdkpixbuf-2.0 \
    git \
    icu-devtools \
    imagemagick \
    libaom3 \
    libopenexr-3-1-30 \
    libsqlite3-0 \
    libtiff6 \
    libpam0g \
    libpq-dev \
    libgdk-pixbuf2.0-0 \
    libicu72 \
    libmagickcore-6.q16-6 \
    libmagickwand-6.q16-6 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# نسخ ملفات npm
COPY package.json package-lock.json ./

# تثبيت الحزم بدون dev
RUN npm ci --omit=dev

# نسخ باقي ملفات المشروع
COPY . .

# تحديث أي مكتبات Node.js المعروفة بالثغرات (مثال cross-spawn)
RUN npm update cross-spawn

EXPOSE 3000
CMD ["node", "index.js"]
