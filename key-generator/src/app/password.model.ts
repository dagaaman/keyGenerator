export class PasswordModel {
  isLowerCaseAlphabets: boolean;
  isUpperCaseAlphabets: boolean;
  isNumbers: boolean;
  isSymbols: boolean;
  length: boolean;

  constructor (length) {
    this.length = length;
    this.isLowerCaseAlphabets = true;
    this.isUpperCaseAlphabets = true;
    this.isNumbers = true;
    this.isSymbols = true;
  }
}
