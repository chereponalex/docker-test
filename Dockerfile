FROM node:14.15.3-alpine

# определяем каталог для приложения
RUN mkdir /frontend

#после создания каталога, определяем его в качестве рабочего каталога
WORKDIR /frontend

#копируем package.json для зависимостей
COPY ./package.json /frontend/

#устанавливаем зависимости
RUN npm install

#копируем все остальное в наш каталог
COPY . /frontend/

#билд проекта
RUN npm run build

#команда для выполнения операции со стеком
CMD ["npm", "start"]