# Usar imagem base leve com Node.js
FROM node:20-alpine

# Criar diretório de trabalho no container
WORKDIR /app

# Copiar os arquivos para dentro do container
COPY . .

# Instalar dependências
RUN npm install

# Expor a porta 8080
EXPOSE 8080

# Comando de inicialização
CMD ["node", "server.js"]