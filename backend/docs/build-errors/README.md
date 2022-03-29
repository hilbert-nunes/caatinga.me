# Build errors

## Maven
- Error 

  ``` bash
    Failed to execute goal org.apache.maven.plugins:maven-resources-plugin:3.2.0:resources (default-resources) on project sprinttool: Input length = 1 -> [Help 1]`
  ``` 
- Solution
    - `mvn clean package -e -X`
    - Do not use accentuation in application properties file 


- Error
  - Postgres Datasource not found 

- Solution
  - Put profile `dev/test` manually in `application.properties` instead `<profiles>` in `pom.xml` 
- [SHOULD](../../.resources/rfc2119.txt) see
  - H2 console continues available on `dev` profile and oddly with postgres url 
  ```bash 
  H2 console available at '/h2-console'. Database available at 'jdbc:postgresql://localhost:5432/postgres?user=postgres&password=123321' 
  ```
  
