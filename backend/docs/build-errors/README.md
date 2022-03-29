# Build errors

## Maven
- Erro 

  ``` bash
    Failed to execute goal org.apache.maven.plugins:maven-resources-plugin:3.2.0:resources (default-resources) on project sprinttool: Input length = 1 -> [Help 1]`
  ``` 
- Solução
    - `mvn clean package -e -X`
    - Não use caracteres UTF-8 no arquivo `application.properties`

---------------------------------------------------------------------

- Error
  ```bash
  Postgres Datasource not found
  ``` 

- Solution
  - Coloque `dev/test` manualmente no `application.properties` e não em `<profiles>` no `pom.xml` 

---------------------------------------------------------------------

- [SHOULD](../../.resources/rfc2119.txt) see
  - Mensagem que o H2 console continua disponível, mesmo com o perfil  `dev` ativado 
  ```bash 
  H2 console available at '/h2-console'. Database available at 'jdbc:postgresql://localhost:5432/postgres?user=postgres&password=123321' 
  ```
  
