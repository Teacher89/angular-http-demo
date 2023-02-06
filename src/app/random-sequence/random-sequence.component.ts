import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-random-sequence',
  templateUrl: './random-sequence.component.html',
  styleUrls: ['./random-sequence.component.css']
})

export class RandomSequenceComponent {
  sequence = []

  onSubmit(f: NgForm) {
    const { sequenceMin, sequenceMax, sequenceLength } = f.value

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
          "n": sequenceLength,
          "min": sequenceMin,
          "max": sequenceMax,
          "replacement":true,
          "base":10,
          "pregeneratedRandomization":null
        }}),
    }).then(
      response => response.json()
    ).then(
      data => this.sequence = data.result.random.data
    )
  }
}