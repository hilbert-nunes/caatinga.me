package com.hilbert.api.image;

import com.hilbert.api.response.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity.BodyBuilder;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.Optional;

import static com.hilbert.api.utils.Bytes.compressBytes;
import static com.hilbert.api.utils.Bytes.decompressBytes;

@Service
@Transactional
public class ImageServiceImpl implements ImageService{

    private final ImageRepository imageRepository;

    public ImageServiceImpl(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    @Override
    public ResponseEntity<Response<Image>> uploadImage(MultipartFile file) throws IOException {
        Response<Image> response = new Response<>();
        System.out.println("Original Image Byte Size - " + file.getBytes().length);
        Image img = new Image(file.getOriginalFilename(), file.getContentType(),
                compressBytes(file.getBytes()));
        imageRepository.save(img);
        response.setData(img);
        return ResponseEntity.ok().body(response);
    }

    @Override
    public Image getImage(String imageName) {
        final Optional<Image> retrievedImage = imageRepository.findByName(imageName);
        Image img = new Image(retrievedImage.get().getName(), retrievedImage.get().getType(),
                decompressBytes(retrievedImage.get().getPicByte()));
        return img;
    }
}
