package com.hilbert.api.reference;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ReferenceDTO {
    private Long id;
    @NotBlank(message = "O nome não pode ser nulo")
    @Size(min = 10, message = "Nome deve conter no mínimo 10 caracteres")
    private String name;
}
