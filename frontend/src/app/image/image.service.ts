import { Arvore } from 'src/app/arvore/model/arvore';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Image } from './model/image';
import { Response } from 'src/app/Response';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = environment.apiUrl

  retrievedImage: any;
  base64Data: any;
  retrievedResponse: any;
  message!: string;

  constructor(private http: HttpClient) { }

  //Gets called when the user clicks on submit to upload the image
  onUpload(selectedFile: File):Observable<Response<Image>> {

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', selectedFile, selectedFile.name);

    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("access_token"));
    console.log(uploadImageData);

    return this.http.post<Response<Image>>(`${this.apiUrl}/api/v1/caatinga/image/upload/`, uploadImageData, {
      headers: headers
    })

  }

  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage(imageName: String):Observable<Response<Image>> {
    console.log('Tentando dentro do Serviço')
    // return this.http.get<Response<Arvore>>(`${this.apiUrl}/api/v1/caatinga/tree/name/${singleName}`)
    //Make a call to Sprinf Boot to get the Image Bytes.
    return this.http.get<Response<Image>>(`${this.apiUrl}/api/v1/caatinga/image/get/` + imageName)
  }
}
