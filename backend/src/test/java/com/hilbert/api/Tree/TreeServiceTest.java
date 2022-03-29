package com.hilbert.api.Tree;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
class TreeServiceTest {

    @Mock
    private TreeRepository treeRepository;
    private TreeService underTest;

    @BeforeEach
    void setUp() {
        underTest = new TreeServiceImpl(treeRepository);
    }

    @Test
    void canFindAllTrees() {
        // when
        underTest.findAllTrees();
        // then
        Mockito.verify(treeRepository).findAll();
    }

    @Test
    void canSaveTree(){
        // given
        Tree tree = new Tree("Ameixa", "ameixa-da-terra", "Olacaceae",
                "Ximenia americana L.", "Significado do nome",
                "Descrição geral","Descrição mais específica",
                "Onde ocorre", "Informação ecológica",
                "Informação fenológica", "Formas de propagação",
                "Guia de manejo","Utilidades", "Importância Cultural");

        // when
        underTest.saveTree(tree);

        // then
        ArgumentCaptor<Tree> treeArgumentCaptor = ArgumentCaptor.forClass(Tree.class);

        Mockito.verify(treeRepository).save(treeArgumentCaptor.capture());

        Tree capturedTree = treeArgumentCaptor.getValue();

        assertThat(capturedTree).isEqualTo(tree);
    }
}