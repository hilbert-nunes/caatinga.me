# Decision record template by Michael Nygard

This is the template in [Documenting architecture decisions - Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions).
You can use [adr-tools](https://github.com/npryce/adr-tools) for managing the ADR files.

In each ADR file, write these sections:

# Many To Many vs One To Many

## Status

Testando

## Contexto

Uma árvore/arbusto tem várias referências e uma referência tem mais de uma árvore/arbusto.

## Decisão

Decidi usar relação One to Many (relação forte) por motivos de facilitação inicial.

## Consequências

Pode-se tornar difícil o mapeamento das árvores/arbustos via referências