import { Component } from '@angular/core';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives:[NavComponent, FooterComponent]
})

export class AppComponent{
    title = 'Tour of Heroes';
}