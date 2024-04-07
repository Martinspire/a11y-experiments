import {
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  // Http Options
  public httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error?.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else if (error?.status && error?.message) {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    } else {
      errorMessage = String(error);
    }
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
}
