import { Injectable } from '@angular/core';
import { PasswordModel } from './password.model';

@Injectable({
  providedIn: 'root'
})
export class PasswordHelperService {

  constructor() { }


  makeKey(options: PasswordModel) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
 }

  private addUpperAlphabets(str: string, options: PasswordModel) {
    if(options.isUpperCaseAlphabets) {
      str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    return str;
  }

  private addLowerAlphabets(str: string, options: PasswordModel) {
    if(options.isLowerCaseAlphabets) {
      str += 'abcdefghijklmnopqrstuvwxyz';
    }
    return str;
  }

}
