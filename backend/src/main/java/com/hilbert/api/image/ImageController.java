package com.hilbert.api.image;

import com.hilbert.api.response.Response;
import com.hilbert.api.utils.Bytes;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity.BodyBuilder;

import javax.transaction.Transactional;
import java.io.IOException;

@Slf4j
@RestController
@RequestMapping("/api/v1/caatinga")
public class ImageController {
    private final ImageService imageService;

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @PostMapping("/image/upload")
    public ResponseEntity<Response<Image>> uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        log.info("Trying to upload");
        return imageService.uploadImage(file);
    }

    @GetMapping(path = { "/image/get/{imageName}" })
    public Image getImage(@PathVariable("imageName") String imageName) throws IOException {
        return imageService.getImage(imageName);
    }

}
