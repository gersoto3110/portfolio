import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = new BehaviorSubject<boolean>(true);

  show():void {
    this.isLoading.next(true);
  }
  
  hide():void {
    this.isLoading.next(false);
  }
}
