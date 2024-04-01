import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
  public code = 0;

  constructor(private auth: AuthService, private router: Router) { }

}
