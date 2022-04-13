import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  template: `
    <h1>Edit Your Profile</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Edit profile form will go here]</h3>
      <br />
      <br />
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default" (click)="stop()">Cancel</button>
    </div>
  `,
})
export class ProfileComponent {
  isDirty: boolean = true
  constructor(private router: Router) {

  }
  stop() {
      this.router.navigate(['/events'])
  }
}