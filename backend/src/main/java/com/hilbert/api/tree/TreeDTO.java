package com.hilbert.api.tree;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TreeDTO {
    private Long id;
    @NotNull(message = "A árvore/arbusto deve pelo menos um nome")
    private String singleName;
    private String popularName;
    @NotNull(message = "A família da árvore/arbusto não pode ser nula")
    private String family;
    @NotNull(message = "Taxonomia da árvore/arbusto não pode ser nula")
    private String botanicalName;
    private String nameMeaning;
    private String generalDescription;
    private String specialDescription;
    private String whereOccurs;
    private String ecologicalInfo;
    private String phenologicalInfo;
    private String propagation;
    private String managementGuide;
    private String utilities;
    private String culturalImportance;
}
