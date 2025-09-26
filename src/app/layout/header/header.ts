import { Component, inject, OnInit, signal } from '@angular/core';
import { StoreService } from '../../core/services/store';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { INote } from '../../core/interfaces/note-interface';
import { NotesService } from '../../core/services/notes';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, first, switchMap } from 'rxjs';
import { SharedNotesService } from '../../features/notes/services/shared-notes';

interface DropdownChangeEvent {
  originalEvent: Event; // could also use MouseEvent
  value: INote;           // adjust type as per your data model
}

@Component({
  selector: 'app-header',
  imports: [FormsModule, Select, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  sharedNotesService = inject(SharedNotesService);
  store = inject(StoreService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  notesService = inject(NotesService);
  headers = signal<INote[]>([]);
  selectedHeader = this.sharedNotesService.currentNote;;

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      switchMap(() => this.store.getHeaders()),
    )
    .pipe(first())
    .subscribe(d => {
      const notesId = this.route.snapshot.queryParams["notesId"]? +this.route.snapshot.queryParams["notesId"] : -1;
      this.headers.set(d);
      if (notesId != null && notesId > 0) {
        const currentHeader = this.headers().find(d => d.id === notesId) ?? this.store.primaryHeader();
        this.sharedNotesService.setCurrentNote(currentHeader);
      } else {
        this.sharedNotesService.setCurrentNote(this.store.primaryHeader());
      }
      if (this.selectedHeader()) {
        this.notesService.getSections().subscribe();
      }
    });
  }

  onNavigation(path: string) {

    const queryParamRequest: any = {
      queryParams: {notesId: this.selectedHeader()?.id}
    }
    if(path != null || path === '../') {
      queryParamRequest['relativeTo'] = this.route;
    } else {
      queryParamRequest["queryParamsHandling"] = "merge";
    }
    
    const routerPath = path? [path] : [];
    this.router.navigate(routerPath, queryParamRequest);

    // this.router.navigate([], {
    //     relativeTo: this.route,      // stay on current route
    //     queryParams: { NotesId: this.selectedHeader.id },      // update ID
    //     // queryParamsHandling: 'merge' // keep other query params
    //   });
  }

  onSelectNote(header: DropdownChangeEvent) {
    this.onNavigation('../');
    this.sharedNotesService.setCurrentNote(header.value);
    this.notesService.getSections().subscribe();
  }
}
