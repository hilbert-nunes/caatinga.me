package com.hilbert.api.TreeReference;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class TreeReferenceDTO {
    private Long id;
    @NotNull(message = "Infome o id da árvore/arbusto")
    private Long treeId;
    @NotNull(message = "Infome o id da referência")
    private Long referenceId;
}
