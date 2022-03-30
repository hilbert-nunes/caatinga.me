package com.hilbert.api.tree;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TreeDTO {
    private Long id;
    @NotBlank(message = "A árvore/arbusto não pode ser nula/vazia")
    @Size(min = 2, max = 32, message = "Nome deve conter entre 2 and 32 caracteres")
    private String singleName;
    private String popularName;
    @Size(min = 2, max = 32, message = "Nome deve conter entre 2 and 32 caracteres")
    @NotBlank(message = "A família da árvore/arbusto não pode ser nula/vazia")
    private String family;
    @Size(min = 2, max = 32, message = "Nome deve conter entre 2 and 32 caracteres")
    @NotBlank(message = "Taxonomia da árvore/arbusto não pode ser nula/vazia")
    private String botanicalName;
    private String nameMeaning;
    @Size(min = 100, message = "Descrição geral deve conter no mínimo 100")
    @NotBlank(message = "A descrição geral da árvore/arbusto não pode ser nula/vazia")
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
