package com.hilbert.api.Reference;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Table(name = "tb_reference")
public class Reference {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @NotNull
    private String name;

    public Reference() {
    }
}
