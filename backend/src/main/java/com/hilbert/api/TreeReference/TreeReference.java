package com.hilbert.api.TreeReference;

import com.hilbert.api.Reference.Reference;
import com.hilbert.api.Tree.Tree;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "tb_users_wallet")
public class TreeReference {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @JoinColumn(name = "tb_tree", referencedColumnName = "id")
    @ManyToOne(fetch = FetchType.LAZY)
    private Tree tree;
    @JoinColumn(name = "tb_reference", referencedColumnName = "id")
    @ManyToOne(fetch = FetchType.LAZY)
    private Reference reference;

    public TreeReference() {
    }

    public TreeReference(Tree tree, Reference reference) {
        this.tree = tree;
        this.reference = reference;
    }
}
