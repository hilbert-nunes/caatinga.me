package com.hilbert.api.Tree;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

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
    void findAllTrees() {
        // when
        underTest.findAllTrees();
        // then
        Mockito.verify(treeRepository).findAll();
    }
}