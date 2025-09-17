# SkillWithTechUi

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

src/app/
│
├── core/                          # Core modules & singletons
│   ├── guards/                    # Route guards
│   ├── interceptors/              # HTTP interceptors
│   ├── services/                  # Core services (auth, api, storage)
│   ├── models/                    # Interfaces & types (Note, User, etc.)
│   ├── utils/                     # Helpers, constants
│   └── core.config.ts             # Core configuration
│
├── shared/                        # Reusable components, directives, pipes
│   ├── components/                # Buttons, modals, inputs, loaders
│   ├── directives/                # Shared directives
│   ├── pipes/                     # Shared pipes
│   └── shared.module.ts (optional if needed)
│
├── features/                      # Feature-specific modules
│   ├── auth/                      # Sign in / Sign up
│   │   ├── login/                 # Login component
│   │   ├── register/              # Register component
│   │   └── auth.routes.ts
│   │
│   ├── notes/                     # Notes feature
│   │   ├── components/            # NoteCard, NoteList, NoteEditor
│   │   ├── pages/                 # NotesPage, NoteDetailsPage
│   │   ├── store/                 # NgRx (actions, reducer, effects, selectors)
│   │   └── notes.routes.ts
│   │
│   └── dashboard/                 # Dashboard/Home
│       ├── components/
│       ├── pages/
│       └── dashboard.routes.ts
│
├── state/                         # Global NgRx store (if required)
│   ├── app.actions.ts
│   ├── app.reducer.ts
│   ├── app.effects.ts
│   └── app.selectors.ts
│
├── layout/                        # Application-wide layouts
│   ├── header/                    
│   ├── sidebar/
│   └── layout.component.ts
│
├── app.routes.ts                  # Root routing
├── app.component.ts
└── main.ts

