# Many To Many vs One To Many

## Status

Testado

## Contexto

Uma árvore/arbusto tem várias referências e uma referência tem mais de uma árvore/arbusto. Mas, não faz muito sentido uma referência ser criada sem a existência de uma árvore.

## Decisão

Decidi usar relação One to Many por motivos de facilitação inicial, colocar o `Setter` na entidade `Reference`, mesmo não fazendo muito sentido, e usar uma tabela que guarda a relação entre Árvore e Referência.

## Consequências

Se tornou muito difícil o mapeamento das árvores/arbustos via referências.