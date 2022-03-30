package com.hilbert.api.tree;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TreeRepository extends JpaRepository<Tree, Long> {
    Boolean existsBySingleName(String singleName);

    Optional<Tree> findBySingleName(String singleName);
}
