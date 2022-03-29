package com.hilbert.api.Tree;

import com.hilbert.api.Response.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
