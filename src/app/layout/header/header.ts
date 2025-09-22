import { Component, inject, OnInit } from '@angular/core';
import { StoreService } from '../../core/services/store';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { INote } from '../../core/interfaces/note-interface';
import { NotesService } from '../../core/services/notes';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, first, switchMap } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [FormsModule, Select, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  store = inject(StoreService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  notesService = inject(NotesService);
  headers: INote[] = [];
  selectedHeader: INote | undefined;

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      switchMap(() => this.store.getHeaders()),
    )
    .pipe(first())
    .subscribe(d => {
      const NotesId = this.route.snapshot.queryParams["notesId"]? +this.route.snapshot.queryParams["notesId"] : -1;
      this.headers = d;
      if (NotesId > 0) {
        this.selectedHeader = this.headers.find(d => d.id === NotesId) ?? this.store.primaryHeader();
      } else {
        this.selectedHeader = this.store.primaryHeader();
      }
      if (this.selectedHeader) {
        this.notesService.setSelectedNotes(this.selectedHeader);
      }
    });
  }

  onNavigation(path: string) {

    const queryParamRequest: any = {
      queryParams: {notesId: this.selectedHeader?.id}
    }
    if(!path) {
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

  onSelectNote() {
    if (this.selectedHeader) {
      this.notesService.setSelectedNotes(this.selectedHeader);
      this.onNavigation('');
    }
  }

}
