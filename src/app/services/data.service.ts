import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';

export class DataService {

  constructor(private url : string,private http : HttpClient) { }

  getAll(){
    return this.http.get(this.url).
    pipe(
        map(response => response),
        catchError(this.handleError)
    );
   }

  create(post : any) {
    return this.http.post(this.url,JSON.stringify(post)).
    pipe(
        map(response => response),
        catchError(this.handleError)
    );
  }

  update(post : any) {
    return this.http.patch(this.url + '/'+post['id'],JSON.stringify({isRead : true})).
    pipe(
        map(response => response),
        catchError(this.handleError)
    );
  }

  delete(postId : any) {
    return this.http.delete(this.url+ '/'+ postId)
      .pipe(
        map(response => response),
        catchError(this.handleError));
  }

  private handleError(error : Response){
    if(error.status === 400){
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(error));
  }
}
