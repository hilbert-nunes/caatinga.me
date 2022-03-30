package com.hilbert.api.tree;

import com.hilbert.api.response.Response;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TreeService {
    ResponseEntity<Response<List<TreeDTO>>> findAllTrees();

    ResponseEntity<Response<TreeDTO>> getOneTreeById(Long treeId);

    Tree saveTree(Tree tree);

    Tree updateTree(Tree tree);

    ResponseEntity deleteTree(Tree tree);

    ResponseEntity<Response<TreeDTO>> getOneTreeByName(String singleName);
}
