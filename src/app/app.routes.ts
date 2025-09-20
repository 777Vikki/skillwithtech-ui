import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'notes', loadComponent: () => import('./features/notes/pages/notes-page/notes-page').then(m => m.NotesPage),
        children: [
            { path: "", pathMatch: "full", redirectTo: "active-notes" },
            { path: 'active-notes', loadComponent: () => import('./features/notes/pages/active-notes/active-notes').then(m => m.ActiveNotes) },
            { path: 'manage-notes', loadComponent: () => import('./features/notes/pages/manage-notes/manage-notes').then(m => m.ManageNotes) },
        ]
    },
    { path: "", pathMatch: "full", redirectTo: "notes" },
];
