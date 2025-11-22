import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-active-notes-loader',
  imports: [SkeletonModule],
  templateUrl: './active-notes-loader.html',
  styleUrl: './active-notes-loader.scss'
})
export class ActiveNotesLoader {

}
