package com.hilbert.api.tree;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@ToString
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "tb_tree")
public class Tree {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(unique = true, nullable = false)
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

    public Tree(Long id, String singleName, String popularName, String family, String botanicalName, String nameMeaning, String generalDescription, String specialDescription, String whereOccurs, String ecologicalInfo, String phenologicalInfo, String propagation, String managementGuide, String utilities, String culturalImportance) {
        this.id = id;
        this.singleName = singleName;
        this.popularName = popularName;
        this.family = family;
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

    public Tree(String singleName, String popularName, String family, String botanicalName, String nameMeaning, String generalDescription, String specialDescription, String whereOccurs, String ecologicalInfo, String phenologicalInfo, String propagation, String managementGuide, String utilities, String culturalImportance) {
        this.singleName = singleName;
        this.popularName = popularName;
        this.family = family;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Tree tree = (Tree) o;
        return id != null && Objects.equals(id, tree.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
