# `@Query` vs `JpaRepository`

## Status

Testando

## Contexto

Verificar a existência de uma árvore pelo nome via query própria ou via repositório nativo do JPA.

@Query
```springdataql
@Query("" +
            "SELECT CASE WHEN COUNT(s) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Tree t " +
            "WHERE t.singleName = ?1"
    )    
    Boolean selectExistsSingleName(String singleName);
 ```
JPA
```java
    Boolean existsBySingleName(String singleName);
 ```

## Decisão

testando

## Consequências

verificando