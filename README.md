# my-knowledge

# Passo 1 - Configuração ambiente

[] Gerar um arquivo _.env_ na raiz do projeto
[] Utilize o arquivo _/app/.env-sample_ para gerá-lo

# Passo 2 - Deploy aplicação (Docker)

[] Execute para subir a aplicação: _docker-compose up -d --build app_

# Passo 6 - Visualização de logs

Para acessar os logs da aplicação utilize: _docker logs knowledge_
Para acessar de forma iterativa utilize a flag _-f_,

_Exemplo_: docker logs -f container_name/containerID
