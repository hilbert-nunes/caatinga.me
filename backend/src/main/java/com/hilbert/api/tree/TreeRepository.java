package com.hilbert.api.tree;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TreeRepository extends JpaRepository<Tree, Long> {
    Boolean existsBySingleName(String singleName);
}
