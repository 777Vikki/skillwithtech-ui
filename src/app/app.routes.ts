import { Routes } from '@angular/router';
import { NotesPage } from './features/notes/pages/notes-page/notes-page';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "notes" },
    { path: "notes", component: NotesPage },
];
