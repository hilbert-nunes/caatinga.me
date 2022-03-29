package com.hilbert.api.Tree;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@Table(name = "tb_tree")
public class Tree {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(nullable = false)
    private String singleName;

    private String popularName;

    @Column(nullable = false)
    private String family;

    @Column(nullable = false)
    private String botanicalName;

    private String nameMeaning;

    @Column(nullable = false)
    private String generalDescription;

    private String specialDescription;

    private String whereOccurs;

    private String ecologicalInfo;

    private String phenologicalInfo;

    private String propagation;

    private String managementGuide;

    private String utilities;

    private String culturalImportance;

    public Tree() {
    }

    public Tree(String popularName, String botanicalName, String nameMeaning, String generalDescription, String specialDescription, String whereOccurs, String ecologicalInfo, String phenologicalInfo, String propagation, String managementGuide, String utilities, String culturalImportance) {
        this.popularName = popularName;
        this.botanicalName = botanicalName;
        this.nameMeaning = nameMeaning;
        this.generalDescription = generalDescription;
        this.specialDescription = specialDescription;
        this.whereOccurs = whereOccurs;
        this.ecologicalInfo = ecologicalInfo;
        this.phenologicalInfo = phenologicalInfo;
        this.propagation = propagation;
        this.managementGuide = managementGuide;
        this.utilities = utilities;
        this.culturalImportance = culturalImportance;
    }
}
