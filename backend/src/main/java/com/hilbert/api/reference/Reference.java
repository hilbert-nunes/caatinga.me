package com.hilbert.api.reference;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hilbert.api.tree.Tree;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "tb_reference")
public class Reference {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @NotNull
    private String name;

    @JsonIgnore
    @ManyToMany(mappedBy = "references")
    private Set<Tree> trees = new HashSet<>();

    public void addTree(Tree tree){
        trees.add(tree);
        tree.getReferences().add(this);
    }

    public void removeReference(Tree tree){
        trees.remove(tree);
        tree.getReferences().remove(this);
    }

    public Reference() {
    }

    public Reference(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Reference reference = (Reference) o;
        return Objects.equals(id, reference.id) && Objects.equals(name, reference.name) && Objects.equals(trees, reference.trees);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, trees);
    }
}
