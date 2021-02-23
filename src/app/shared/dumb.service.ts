import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { POST_URL, APP_ID, USER_URL, TAG_URL } from './utils/URLS';

@Injectable({
  providedIn: 'root'
})
export class DumbService {

  headers: HttpHeaders
  constructor(
    private https: HttpClient
  ) {
    this.headers = new HttpHeaders({'app-id': APP_ID});
  }

  getPosts(tag = null) {
    let postUrl = tag ? `${TAG_URL}${tag}/post` : `${POST_URL}`
    return this.https.get(postUrl, {headers: this.headers}).toPromise();
  }

  getUserData(id: string = null) {
    return this.https.get(`${USER_URL}${id}`, { headers: this.headers}).toPromise();
  }

  getComents(id: string = null) {
    return this.https.get(`${POST_URL}${id}/comment`, { headers: this.headers}).toPromise();
  }
}
