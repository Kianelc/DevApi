## Desafio DevApi

### Instruções para rodar o projeto

1. Ter o [Node](https://nodejs.org/en/) instalado
2. Ter o [npm](https://www.npmjs.com/get-npm) instalado
3. Instalar as dependências do projeto

```
npm install
```
4. Rodar o script que popula a base de dados

```
npm run seed
```
4. Executar no modo de desenvolvimento

```
npm run serve
```

5. Se você não estiver rodando nada na porta padrão, então você receberá o seguinte link:

```
Local:   http://localhost:3000/api/
```

### Link da documentação (Swagger)

[http://localhost:3000/api-docs/](http://localhost:3000/api-docs/)

### Atividades realizadas

- Endpoints
- [x] Listar conectores;
- [x] Filtrar conector por nome, categoria, tipo (REST, BD, SOAP), Privacidade (PUBLIC ou PRIVATE);
- [x] Adicionar conector;
- [x] Editar conector;
- [x] Exclusão lógica.

- Bônus
- [ ] Testes unitários;
- [ ] Linter;
- [ ] Code Formater;
- [ ] Docker;
- [x] Documentação utilizando Swagger ou ReDoc;
- [ ] Utilizar Serverless.

> NOTA: Não utilizei o NestJs, pois precisaria estudar a documentação (levaria +2 dias)
