# Tree Service Test

## Por quê não precisa colocar `@Autowired` no `TreeRepository` ?
Por que sabemos que o `TreeRepository` possue uma implementação satisfatória. Todo método, de fato, funciona bem.

## `canFindAllTrees`
Verifica se, de fato, o método `findAll` do `TreeRepository` foi chamado.

## `canSaveTree`
Verifica se, de fato, o método `save` do `TreeRepository` foi chamado, usando a mesma `Tree` que passamos.

## `willThrowWhenNameIsTaken`
Verifica se a exceção `BadRequestException` é chamada contendo a mensagem "Árvore/arbusto... já existe" e se o método `save` não foi chamado.