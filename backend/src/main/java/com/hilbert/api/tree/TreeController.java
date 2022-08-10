package com.hilbert.api.tree;

import com.hilbert.api.response.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/caatinga")
public class TreeController {

    private final TreeService treeService;

    public TreeController(TreeService treeService) {
        this.treeService = treeService;
    }

    @CrossOrigin(origins = "http://caatinga.s3-website-sa-east-1.amazonaws.com/")
    @GetMapping(value = "/trees")
    public ResponseEntity<Response<List<TreeDTO>>> findAllTrees(){
        return treeService.findAllTrees();
    }

    @CrossOrigin(origins = "http://caatinga.s3-website-sa-east-1.amazonaws.com/")
    @GetMapping("/tree/id/{treeId}")
    public ResponseEntity<Response<TreeDTO>> getOneTreeById(@PathVariable("treeId") Long treeId){
        return treeService.getOneTreeById(treeId);
    }

    @CrossOrigin(origins = "http://caatinga.s3-website-sa-east-1.amazonaws.com/")
    @GetMapping("/tree/name/{singleName}")
    public ResponseEntity<Response<TreeDTO>> getOneTreeByName(@PathVariable("singleName") String singleName){
        return treeService.getOneTreeByName(singleName);
    }

    @CrossOrigin(origins = "http://caatinga.s3-website-sa-east-1.amazonaws.com/")
    @PostMapping("/tree")
    public ResponseEntity<Response<TreeDTO>> saveTree(@Valid @RequestBody TreeDTO treeDTO, BindingResult bindingResult){
        return treeService.saveTree(treeDTO, bindingResult);
    }

    @CrossOrigin(origins = "http://caatinga.s3-website-sa-east-1.amazonaws.com/")
    @PutMapping("/tree/{treeId}")
    public ResponseEntity<Response<TreeDTO>> updateTree(
            @PathVariable("treeId") Long treeId,
            @Valid @RequestBody TreeDTO treeDto,
            BindingResult bindingResult){
        return treeService.updateTree(treeId, treeDto, bindingResult);
    }
    
    @CrossOrigin(origins = "http://caatinga.s3-website-sa-east-1.amazonaws.com/")
    @DeleteMapping("/tree/{treeId}")
    public ResponseEntity<Response<String>> deleteTree(
            @PathVariable("treeId") Long treeId){
        return treeService.deleteTree(treeId);
    }
}
