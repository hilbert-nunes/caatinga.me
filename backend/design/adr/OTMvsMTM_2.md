# Many To Many vs One To Many

## Status

Testando

## Contexto

Uma árvore/arbusto tem várias referências e uma referência tem mais de uma árvore/arbusto.

## Decisão

Decidi usar relação Many to Many.

## Consequências

Consegui criar uma árvore contendo referências ou não.
CRUD quase completo. ~~Update por motivos desconhecidos não persiste.~~ [SEE](../../docs/dev-issues/README.md)
`CASCADE` deve ser do tipo `MERGE` para o delete da entidade controladora `Tree` não deletar suas referências.