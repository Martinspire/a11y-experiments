import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  IWikiQuery, IWikiRestQuery, IWikiResult,
} from '@interfaces/wiki.interface';
import { ApiConstant } from '@shared/constants/api.constants';
import {
  Observable,
  catchError,
  first, map,
} from 'rxjs';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class WikiService extends ApiService {
  private http = inject(HttpClient);


  getWikiRandomArticle(): Observable<IWikiRestQuery> {
    return this.http
      .get<IWikiRestQuery>(ApiConstant.wikiRandomUrl)
      .pipe(
        first(),
        map((data) => {
          if (!data?.title || !data?.extract) {
            console.error('data not right', data);
            throw new Error('data not right');
          }
          return data;
        }),
        catchError(this.handleError),
      );
  }

  getWikiImage(query: string): Observable<IWikiResult> {
    return this.http
      .get<IWikiQuery>(ApiConstant.wikiImageUrl + query)
      .pipe(
        first(),
        map((data) => {
          if (!data?.query?.pages) {
            console.error('data not right', data);
            throw new Error('data not right');
          }
          return Object.values(data.query.pages)[0];
        }),
        catchError(this.handleError),
      );
  }

  getWikiSummary(query: string): Observable<IWikiResult> {
    return this.http
      .get<IWikiQuery>(ApiConstant.wikiSummaryUrl + query)
      .pipe(
        first(),
        map((data) => {
          if (!data?.query?.pages) {
            console.error('data not right', data);
            throw new Error('data not right');
          }
          return Object.values(data.query.pages)[0];
        }),
        catchError(this.handleError),
      );
  }
}
