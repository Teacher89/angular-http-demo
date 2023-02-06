import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-heads-or-tails',
  templateUrl: './heads-or-tails.component.html',
  styleUrls: ['./heads-or-tails.component.css']
})

export class HeadsOrTailsComponent {
  computerCoin = null

  onSubmit(f: NgForm) {
    fetch('https://api.random.org/json-rpc/4/invoke', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "jsonrpc":"2.0",
        "method":"generateIntegers",
        "id":2204,
        "params":{
          "apiKey":"e08ff0dd-a2bd-45b1-99b7-dae91249b9b2",
          "n": 1,
          "min": 0,
          "max": 1,
          "replacement":true,
          "base":10,
          "pregeneratedRandomization":null
        }}),
    }).then(
      response => response.json()
    ).then(
      data => this.computerCoin = data.result.random.data[0]
    )
  }
}