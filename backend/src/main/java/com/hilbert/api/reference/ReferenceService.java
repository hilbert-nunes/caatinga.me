package com.hilbert.api.reference;

import com.hilbert.api.response.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

import java.util.List;

public interface ReferenceService {
    ResponseEntity<Response<List<ReferenceDTO>>> findAllReferences();

    ResponseEntity<Response<ReferenceDTO>> getOneReferenceById(Long referenceId);

    ResponseEntity<Response<ReferenceDTO>> saveReference(ReferenceDTO referenceDTO, BindingResult bindingResult);

    ResponseEntity<Response<ReferenceDTO>> updateReference(Long referenceId, ReferenceDTO referenceDTO, BindingResult bindingResult);

    ResponseEntity<Response<String>> deleteReference(Long referenceId);

}
