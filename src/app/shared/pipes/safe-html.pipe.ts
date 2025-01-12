import {
  Pipe, PipeTransform, inject,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * skip security to make innerhtml faster
 */
@Pipe({
  name: 'safeHtml', standalone: true,
})
export class SafeHtmlPipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);


  transform(html: any) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
