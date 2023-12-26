import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftcardService {

  private giftCards = [
    { code: 'GIFT100', balance: 5000 },
    { code: 'GIFT200', balance: 200 },
    
  ];

  constructor(private http: HttpClient) {}


  validate(giftCardCode: string): { valid: boolean, balance: number } {
    const giftCard = this.giftCards.find(card => card.code === giftCardCode);
    return {
        valid: giftCard !== undefined,
        balance: giftCard?.balance ?? 0
    };
}
}
