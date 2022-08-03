package com.hilbert.api.image;

import com.hilbert.api.response.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity.BodyBuilder;

import java.io.IOException;
public interface ImageService {
    public ResponseEntity<Response<Image>> uploadImage(MultipartFile file) throws IOException;
    public Image getImage(String imageName);
}
