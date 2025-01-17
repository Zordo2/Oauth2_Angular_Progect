import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { of } from 'rxjs';
import { HttpService } from './http.service';
import tokenUrl from '../constants/token';
import {Buffer} from 'buffer';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public code: string = '';
  constructor(private httpService: HttpService) { }
  getToken(){
    //to be completed after request is finalized
    const mockUserClient = 'client';
    const mockUserSecret = 'secret';
  //buffer is a package for base64 encoding
    const basicAuth = `Basic ` + Buffer.from(`${mockUserClient}:${mockUserSecret}`).toString('base64');
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': basicAuth
    });
    const options = {
      headers: headers
    }

    return this.httpService.doPost(tokenUrl(this.code), null, options);
  }
}
