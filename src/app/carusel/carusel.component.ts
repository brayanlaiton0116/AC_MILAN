import { Component } from '@angular/core';

@Component({
  selector: 'app-carusel',

  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css'],
})
export class CaruselComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
