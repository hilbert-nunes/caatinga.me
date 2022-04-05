package com.hilbert.api.reference;

import com.hilbert.api.response.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.status;

@Service
public class ReferenceServiceImpl implements ReferenceService {

    private final ReferenceRepository referenceRepository;

    public ReferenceServiceImpl(ReferenceRepository referenceRepository) {
        this.referenceRepository = referenceRepository;
    }

    @Override
    public ResponseEntity<Response<List<ReferenceDTO>>> findAllReferences() {

        Response<List<ReferenceDTO>> response = new Response<>();

        List<Reference> references = referenceRepository.findAll();

        List<ReferenceDTO> dto = new ArrayList<>();

        references.forEach(i -> dto.add(this.convertEntityToDto(i)));

        response.setData(dto);

        return ResponseEntity.ok().body(response);
    }

    @Override
    public ResponseEntity<Response<ReferenceDTO>> getOneReferenceById(Long referenceId) {
        Response<ReferenceDTO> response = new Response<>();

        Optional<Reference> optionalReference = referenceRepository.findById(referenceId);

        if (!optionalReference.isPresent()) {
            ObjectError objectError = new ObjectError("Reference",
                    "Referência com id " + referenceId + " não encontrada");
            response.getErrors().add(objectError.getDefaultMessage());
            return status(HttpStatus.NOT_FOUND).body(response);
        }

        ReferenceDTO referenceDTO = convertEntityToDto(optionalReference.get());
        response.setData(referenceDTO);
        return ResponseEntity.ok().body(response);
    }

    @Override
    public ResponseEntity<Response<ReferenceDTO>> saveReference(ReferenceDTO referenceDTO, BindingResult bindingResult) {
        Response<ReferenceDTO> response = new Response<>();

        if (bindingResult.hasErrors()){
            bindingResult.getAllErrors().forEach(r -> response.getErrors().add(r.getDefaultMessage()));

            return ResponseEntity.badRequest().body(response);
        }

        Reference reference = referenceRepository.save(convertDtoToEntity(referenceDTO));

        response.setData(convertEntityToDto(reference));

        return status(HttpStatus.CREATED).body(response);
    }

    @Override
    public ResponseEntity<Response<ReferenceDTO>> updateReference(Long id, ReferenceDTO referenceDTO, BindingResult bindingResult) {
        Response<ReferenceDTO> response = new Response<>();

        if (bindingResult.hasErrors()){
            bindingResult.getAllErrors().forEach(r -> response.getErrors().add(r.getDefaultMessage()));
            return ResponseEntity.ok().body(response);
        }

        Optional<Reference> existsReference = referenceRepository.findById(id);

        if (!existsReference.isPresent()) {
            ObjectError objectError = new ObjectError("Reference",
                    "Referência com " + id + " não encontrado");
            response.getErrors().add(objectError.getDefaultMessage());
            return status(HttpStatus.BAD_REQUEST).body(response);
        }

        referenceDTO.setId(id);
        Reference reference = referenceRepository.save(convertDtoToEntity(referenceDTO));

        response.setData(convertEntityToDto(reference));

        return status(HttpStatus.CREATED).body(response);
    }


    @Override
    public ResponseEntity<Response<String>> deleteReference(Long referenceId) {
        Response<String> response = new Response<>();

        boolean existsReference = referenceRepository.existsById(referenceId);

        if (!existsReference){
            response.getErrors().add("Referência com id " + referenceId + " não encontrada");
            return status(HttpStatus.NOT_FOUND).body(response);
        }

        referenceRepository.deleteById(referenceId);

        response.setData("Referência de id " + referenceId + " apagada com sucesso");

        return ResponseEntity.ok().body(response);
    }

    private ReferenceDTO convertEntityToDto(Reference reference) {
        ReferenceDTO referenceDTO = new ReferenceDTO();
        referenceDTO.setId(reference.getId());
        referenceDTO.setName(reference.getName());
        return referenceDTO;
    }

    private Reference convertDtoToEntity(ReferenceDTO referenceDTO){
        Reference reference = new Reference();
        reference.setId(referenceDTO.getId());
        reference.setName(referenceDTO.getName());
        return reference;
    }

    private void updateReferenceRecord(Reference originalReferenceToBeUpdated, ReferenceDTO referenceDTOUpdated, Long id) {
        originalReferenceToBeUpdated.setId(id);
        originalReferenceToBeUpdated.setName(referenceDTOUpdated.getName());
    }
}
