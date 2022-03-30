package com.hilbert.api.tree;

import com.hilbert.api.exception.BadRequestException;
import com.hilbert.api.response.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.ObjectError;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TreeServiceImpl implements TreeService{

    TreeRepository treeRepository;

    public TreeServiceImpl(TreeRepository treeRepository) {
        this.treeRepository = treeRepository;
    }

    @Override
    public ResponseEntity<Response<List<TreeDTO>>> findAllTrees() {

        Response<List<TreeDTO>> response = new Response<List<TreeDTO>>();

        List<Tree> trees = treeRepository.findAll();

        List<TreeDTO> dto = new ArrayList<>();

        trees.forEach(i -> dto.add(this.convertEntityToDto(i)));

        response.setData(dto);

        return ResponseEntity.ok().body(response);
    }

    @Override
    public ResponseEntity<Response<TreeDTO>> getOneTreeById(Long treeId) {
        Response<TreeDTO> response = new Response<>();

        Optional<Tree> optionalTree = treeRepository.findById(treeId);

        if (!optionalTree.isPresent()) {
            ObjectError objectError = new ObjectError("Tree",
                    "Árvore/arbusto com id " + treeId + " não encontrado");
            response.getErrors().add(objectError.getDefaultMessage());
            return ResponseEntity.ok().body(response);
        }

        TreeDTO treeDTO = convertEntityToDto(optionalTree.get());
        response.setData(treeDTO);
        return ResponseEntity.ok().body(response);
    }

    @Override
    public Tree saveTree(Tree tree) {
        Boolean existsSingleName = treeRepository.existsBySingleName(tree.getSingleName());
        if (existsSingleName) {
            throw new BadRequestException(
                    "Árvore/arbusto " + tree.getSingleName() + " já existe");
        }

        return treeRepository.save(tree);
    }

    @Override
    public Tree updateTree(Tree tree) {
        Optional<Tree> optionalTree = treeRepository.findById(tree.getId());

        if (!optionalTree.isPresent()) {
            throw new BadRequestException(
                    "Árvore/arbusto " + tree.getSingleName() + " com id " + tree.getId() + " não encontrado");
        }

        return treeRepository.save(tree);
    }

    @Override
    public ResponseEntity deleteTree(Tree tree) {
        Optional<Tree> optionalTree = treeRepository.findById(tree.getId());

        if (!optionalTree.isPresent()){
            throw new BadRequestException(
                    "Árvore/arbusto " + tree.getSingleName() + " com id " + tree.getId() + " não encontrado");
        }

        treeRepository.delete(tree);

        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<Response<TreeDTO>> getOneTreeByName(String singleName) {
        Response<TreeDTO> response = new Response<>();

        Optional<Tree> optionalTree = treeRepository.findBySingleName(singleName);

        if (!optionalTree.isPresent()) {
            ObjectError objectError = new ObjectError("Tree",
                    "Árvore/arbusto com nome " + singleName + " não encontrado");
            response.getErrors().add(objectError.getDefaultMessage());
            return ResponseEntity.ok().body(response);
        }

        TreeDTO treeDTO = convertEntityToDto(optionalTree.get());
        response.setData(treeDTO);
        return ResponseEntity.ok().body(response);
    }

    private TreeDTO convertEntityToDto(Tree tree) {
        TreeDTO dto = new TreeDTO();
        dto.setSingleName(tree.getSingleName());
        dto.setPopularName(tree.getPopularName());
        dto.setFamily(tree.getFamily());
        dto.setBotanicalName(tree.getBotanicalName());
        dto.setNameMeaning(tree.getNameMeaning());
        dto.setGeneralDescription(tree.getGeneralDescription());
        dto.setSpecialDescription(tree.getSpecialDescription());
        dto.setWhereOccurs(tree.getWhereOccurs());
        dto.setEcologicalInfo(tree.getEcologicalInfo());
        dto.setPhenologicalInfo(tree.getPhenologicalInfo());
        dto.setPropagation(tree.getPropagation());
        dto.setManagementGuide(tree.getManagementGuide());
        dto.setUtilities(tree.getUtilities());
        dto.setCulturalImportance(tree.getCulturalImportance());

        return dto;
    }
}
