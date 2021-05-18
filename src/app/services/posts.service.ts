import { Post } from '../models/post.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = 'http://localhost:3000/posts'

  constructor(private http: HttpClient) { }

  criarPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post);
  }

  retornarPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl)
  }
}
