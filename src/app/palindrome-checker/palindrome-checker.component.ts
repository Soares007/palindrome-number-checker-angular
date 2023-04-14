import { Component } from '@angular/core';

@Component({
  selector: 'app-palindrome-checker',
  templateUrl: './palindrome-checker.component.html',
  styleUrls: ['./palindrome-checker.component.css']
})
export class PalindromeCheckerComponent {

  num: number | null = null;
  result: string | null = null;
  check() {
    if (this.num !== null) {
      const numString = this.num.toString();
      const numReverso = numString.split('').reverse().join('');
      this.result = numString === numReverso ? 'é um palíndromo' : 'não É um palíndromo';
    }
  }
}
