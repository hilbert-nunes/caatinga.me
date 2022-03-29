package com.hilbert.api.Tree;

import com.hilbert.api.Response.Response;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TreeService {
    ResponseEntity<Response<List<TreeDTO>>> findAllTrees();
}
