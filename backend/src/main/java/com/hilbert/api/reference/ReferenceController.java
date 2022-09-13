package com.hilbert.api.reference;

import com.hilbert.api.response.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/v1")
public class ReferenceController {

    private final ReferenceService referenceService;

    public ReferenceController(ReferenceService referenceService) {
        this.referenceService = referenceService;
    }

    @GetMapping(value = "/references")
    public ResponseEntity<Response<List<ReferenceDTO>>> findAllReferences(){
        return referenceService.findAllReferences();
    }

    @GetMapping("/reference/id/{referenceId}")
    public ResponseEntity<Response<ReferenceDTO>> getOneReferenceById(@PathVariable("referenceId") Long referenceId){
        return referenceService.getOneReferenceById(referenceId);
    }

    @PostMapping("/reference")
    public ResponseEntity<Response<ReferenceDTO>> saveReference(@Valid @RequestBody ReferenceDTO referenceDTO, BindingResult bindingResult){
        return referenceService.saveReference(referenceDTO, bindingResult);
    }

    @PutMapping("/reference/{referenceId}")
    public ResponseEntity<Response<ReferenceDTO>> updateReference(
            @PathVariable("referenceId") Long referenceId,
            @Valid @RequestBody ReferenceDTO referenceDto,
            BindingResult bindingResult){
        return referenceService.updateReference(referenceId, referenceDto, bindingResult);
    }

    @DeleteMapping("/reference/{referenceId}")
    public ResponseEntity<Response<String>> deleteReference(
            @PathVariable("referenceId") Long referenceId){
        return referenceService.deleteReference(referenceId);
    }
}
