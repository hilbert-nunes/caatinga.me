package com.hilbert.api.tree;

import com.hilbert.api.exception.BadRequestException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.validation.BindingResult;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;

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
//      when
        underTest.findAllTrees();
//      then
        Mockito.verify(treeRepository).findAll();
    }

//    @Test
//    void canSaveTree(){
////      given
//        TreeDTO treeDTO = new TreeDTO(1L,"Ameixa", "ameixa-da-terra", "Olacaceae",
//                "Ximenia americana L.", "Significado do nome",
//                "Descrição geral","Descrição mais específica",
//                "Onde ocorre", "Informação ecológica",
//                "Informação fenológica", "Formas de propagação",
//                "Guia de manejo","Utilidades", "Importância Cultural");
//        BindingResult result = mock(BindingResult.class);
//        when(result.hasErrors()).thenReturn(true);
//
////       when
//        underTest.saveTree(treeDTO, result);
//
////      then
//        ArgumentCaptor<Tree> treeArgumentCaptor = ArgumentCaptor.forClass(Tree.class);
//
//        Mockito.verify(treeRepository).save(treeArgumentCaptor.capture());
//
//        Tree capturedTree = treeArgumentCaptor.getValue();
//
//        assertThat(capturedTree).isEqualTo(treeDTO);
//    }

//    @Test
//    void willThrowWhenNameIsTaken(){
////      given
//        TreeDTO treeDTO = new TreeDTO(1L,"Ameixa", "ameixa-da-terra", "Olacaceae",
//                "Ximenia americana L.", "Significado do nome",
//                "Descrição geral","Descrição mais específica",
//                "Onde ocorre", "Informação ecológica",
//                "Informação fenológica", "Formas de propagação",
//                "Guia de manejo","Utilidades", "Importância Cultural");
//        BindingResult result = mock(BindingResult.class);
//        when(result.hasErrors()).thenReturn(true);
//
//        given(treeRepository.existsBySingleName(anyString()))
//                .willReturn(true);
//
////      when
////      then
//        assertThatThrownBy(() -> underTest.saveTree(treeDTO, result))
//                .isInstanceOf(BadRequestException.class)
//                .hasMessageContaining("Árvore/arbusto " + treeDTO.getSingleName() + " já existe");
//
//        verify(treeRepository, never()).save(any());
//    }
}