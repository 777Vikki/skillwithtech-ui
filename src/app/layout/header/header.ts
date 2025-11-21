import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { StoreService } from '../../core/services/store';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { ISubject } from '../../core/interfaces/note-interface';
import { NotesService } from '../../core/services/notes';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, first, switchMap } from 'rxjs';
import { SharedNotesService } from '../../features/notes/services/shared-notes';

interface DropdownChangeEvent {
  originalEvent: Event; // could also use MouseEvent
  value: ISubject;           // adjust type as per your data model
}

@Component({
  selector: 'app-header',
  imports: [FormsModule, Select, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  private sharedNotesService = inject(SharedNotesService);
  private store = inject(StoreService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private notesService = inject(NotesService);
  headers = signal<ISubject[]>([]);
  selectedHeader = this.sharedNotesService.currentNote;
  showProfile = signal<boolean>(false);
  showSettings = signal<boolean>(false);

  ngOnInit(): void {
    this.notesService.getCountDetail().subscribe();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      switchMap(() => this.notesService.getSubjectList()),
    )
    .pipe(first())
    .subscribe(d => {
      const subjectId = this.route.snapshot.queryParams["subjectId"]? +this.route.snapshot.queryParams["subjectId"] : -1;
      this.headers.set(d);
      if (subjectId != null && subjectId > 0) {
        const currentHeader = this.headers().find(d => d.id === subjectId) ?? this.headers()[0];
        this.sharedNotesService.setCurrentNote(currentHeader);
      } else {
        this.sharedNotesService.setCurrentNote(this.headers()[0]);
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
    if(path === '../') {
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

  clearLocalStorage() {
    localStorage.clear();
  }

  @HostListener('document:click')
  closeDropdown() {
    this.showProfile.set(false);
  }
}
