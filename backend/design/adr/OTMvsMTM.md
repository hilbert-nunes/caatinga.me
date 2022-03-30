# Many To Many vs One To Many

## Status

Testando

## Contexto

Uma árvore/arbusto tem várias referências e uma referência tem mais de uma árvore/arbusto. Mas, não faz muito sentido uma referência ser criada sem a existência de uma árvore.

## Decisão

Decidi usar relação One to Many (relação forte) por motivos de facilitação inicial, e colocar o `Setter` da entidade `Reference`, mesmo não fazendo muito sentido. 

## Consequências

Pode-se tornar difícil o mapeamento das árvores/arbustos via referências