package com.hilbert.api.tree;

import com.hilbert.api.response.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/caatinga")
public class TreeController {

    private final TreeService treeService;

    public TreeController(TreeService treeService) {
        this.treeService = treeService;
    }

    @GetMapping(value = "/trees")
    public ResponseEntity<Response<List<TreeDTO>>> findAll(){
        return treeService.findAllTrees();
    }

    @GetMapping("/tree/id/{treeId}")
    public ResponseEntity<Response<TreeDTO>> getOneTreeById(@PathVariable("treeId") Long treeId){
        return treeService.getOneTreeById(treeId);
    }
}
