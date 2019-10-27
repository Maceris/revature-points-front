import { Component } from '@angular/core';
import { Observable, of, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	h = document.documentElement.clientHeight
	w = document.documentElement.clientWidth;
	Ro = this.w<this.h?this.w/2:this.h/2;
	Ri = 2*this.Ro/3;
	Cxo = this.w/2;
	Cyo = this.h/2;
	Cxi = this.Cxo;
	Cyi = this.Ri;
	dragCrescent(target) {
		const drag = fromEvent(target, 'drag');
		console.log(drag);
	}
}
