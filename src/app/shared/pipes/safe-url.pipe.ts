import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * skip security to make innerhtml faster
 */
@Pipe({
  name: 'safeUrl', standalone: true,
})
export class SafeUrlPipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);


  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
