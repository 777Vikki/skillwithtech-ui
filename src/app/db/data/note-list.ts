export const noteList = () => {
    return [
        {
            "id": 1,
            "title": "Angular",
            "description": "",
            "sections": [
                {
                    "subjectId": 1,
                    "sectionId": 1,
                    "rootId": 0,
                    "title": "<p><strong>Basic</strong></p>",
                    "qaData": [
                        {
                            "id": 1,
                            "sectionId": 1,
                            "question": "<p>What is Angular?</p>",
                            "answerList": [
                                "<p>Angular is a <strong>TypeScript-based front-end framework</strong> developed by <strong>Google</strong> for building <strong>single-page applications (SPAs)</strong>. It provides a <strong>component-based architecture</strong>, <strong>built-in dependency injection</strong>, <strong>two-way data binding</strong>, and powerful <strong>RxJS-based state management</strong>.</p></br><p>Angular is a <strong>full-fledged framework</strong> that offers a <strong>complete solution</strong> for building <strong>web applications</strong>. It includes built-in support for <strong>routing</strong>, <strong>forms</strong>, and <strong>HTTP communication</strong> through <strong>HttpClient</strong>. Angular provides <strong>two-way data binding</strong>, which automatically synchronizes the <strong>model</strong> and the <strong>view</strong>. It uses <strong>dependency injection</strong> to make <strong>services reusable</strong> and improve <strong>testability</strong>. Angular also leverages <strong>RxJS</strong> for efficient <strong>asynchronous data handling</strong> and supports <strong>TypeScript</strong>, which enhances <strong>maintainability</strong>, <strong>scalability</strong>, and <strong>developer productivity</strong>.</p>"
                            ]
                        },
                        {
                            "id": 2,
                            "sectionId": 1,
                            "question": "<p>How is it different from other JavaScript frameworks?</p>",
                            "answerList": [
                                "<p>Angular is a full-fledged <strong>front-end framework</strong> that provides a <strong>complete solution</strong> for building <strong>web applications</strong>. It includes built-in support for <strong>routing</strong>, <strong>forms</strong>, and <strong>HTTP communication</strong> through <strong>HttpClient</strong>. Angular offers <strong>two-way data binding</strong>, which automatically synchronizes the <strong>model</strong> and the <strong>view</strong>. It uses <strong>dependency injection</strong> to make <strong>services reusable</strong> and improve <strong>testability</strong>. Angular also leverages <strong>RxJS</strong> for efficient <strong>asynchronous data handling</strong> and supports <strong>TypeScript</strong>, which enhances <strong>maintainability</strong>, <strong>scalability</strong>, and <strong>developer productivity</strong>.</p>"
                            ]
                        },
                        {
                            "id": 3,
                            "sectionId": 1,
                            "question": "<p>What are the key features of Angular?</p>",
                            "answerList": [
                                "<p>Angular offers several key features such as <strong>Component-Based Architecture</strong>, <strong>Two-Way Data Binding</strong>, <strong>Dependency Injection (DI)</strong>, <strong>Directives</strong>, <strong>RxJS</strong> for <strong>Reactive Programming</strong>, <strong>Built-in Routing</strong>, robust <strong>Forms Handling</strong>, <strong>State Management</strong> using tools like <strong>NgRx</strong>, and <strong>Cross-Platform Support</strong> for building web, mobile, and desktop applications.</p></br><p>These features make <strong>Angular</strong> a <strong>powerful</strong> and <strong>scalable</strong> framework for building <strong>enterprise-level applications</strong> efficiently.</p>"
                            ]
                        },
                        {
                            "id": 4,
                            "sectionId": 1,
                            "question": "<p>If we can create dynamic pages using JavaScript, why do we need Angular?</p>",
                            "answerList": [
                                "<p><strong>JavaScript</strong> can create <strong>dynamic pages</strong>, but <strong>Angular</strong> provides a <strong>structured framework</strong> for building <strong>large-scale</strong> and <strong>maintainable applications</strong>.</p></br><p> It offers features like <strong>Component-Based Architecture</strong>, <strong>Two-Way Data Binding</strong>, <strong>Dependency Injection</strong>, <strong>Routing</strong>, and <strong>State Management</strong>, which help manage <strong>complexity</strong>, improve <strong>code reusability</strong>, and speed up <strong>development</strong> — especially for <strong>enterprise-grade apps</strong>.</p>"
                            ]
                        },
                        {
                            "id": 5,
                            "sectionId": 1,
                            "question": "<p>Explain the differences between AngularJS and Angular.</p>",
                            "answerList": [
                                "<ol><li><strong>AngularJS</strong> is based on the <strong>MVC (Model-View-Controller) architecture</strong>, whereas <strong>Angular</strong> follows a <strong>Component-Based Architecture</strong>.</li><li><strong>AngularJS</strong> supports <strong>JavaScript</strong>, whereas <strong>Angular</strong> supports <strong>TypeScript</strong>.</li><li><strong>AngularJS</strong> is <strong>not optimized for mobile</strong>, whereas <strong>Angular</strong> is <strong>mobile-friendly</strong>.</li><li><strong>AngularJS</strong> has been <strong>discontinued</strong>, whereas <strong>Angular</strong> is <strong>actively maintained by Google</strong>.</li></ol>"
                            ]
                        },
                        {
                            "id": 6,
                            "sectionId": 1,
                            "question": "<p>What is Angular Application load flow?</p>",
                            "answerList": [
                                "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">The browser loads </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">index.html</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, which usually contains a root element (like </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">&lt;app-root&gt;</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">). Then </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">main.ts</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> executes. This is the entry point (the first TypeScript file that runs), and its job is to bootstrap the Angular application.</span></p></br><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Earlier, Angular used </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">platformBrowserDynamic().bootstrapModule(AppModule)</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> for NgModules. But after the introduction of standalone components, it now uses </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">bootstrapApplication()</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> to bootstrap a component directly.</span></p></br></br><pre data-language=\"plain\">\nmain.ts\n\nimport { bootstrapApplication } from &#39;@angular/platform-browser&#39;;\nimport { appConfig } from &#39;./app/app.config&#39;;\nimport { App } from &#39;./app/app&#39;;\nbootstrapApplication(App, appConfig)\n  .catch((err) =&gt; console.error(err));\n</pre></br><p>Next, Angular initializes AppComponent, whose selector (&lt;app-root&gt;) matches the element in index.html.</p><p>For dependency injection setup, bootstrapApplication() also accepts providers such as HttpClient, Router, etc.</p></br></br><pre data-language=\"plain\">\napp.config.ts\n\nimport { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from &#39;@angular/core&#39;;\nimport { provideRouter } from &#39;@angular/router&#39;;\nimport { routes } from &#39;./app.routes&#39;;\nimport { provideHttpClient } from &#39;@angular/common/http&#39;;\nexport const appConfig: ApplicationConfig = {\n  providers: [\n    provideBrowserGlobalErrorListeners(),\n    provideZoneChangeDetection({ eventCoalescing: true }),\n    provideHttpClient(),\n    provideRouter(routes)\n  ]\n};\n</pre></br><p>Angular then builds the component tree starting from the root component, runs change detection, and updates the DOM.</p>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 2,
                    "rootId": 0,
                    "title": "<p><strong>Angular CLI</strong></p>",
                    "qaData": [
                        {
                            "id": 7,
                            "sectionId": 2,
                            "question": "<p>What is the purpose of Angular CLI?</p>",
                            "answerList": [
                                "<p>The <strong>Angular CLI (Command Line Interface)</strong> is a tool that helps in <strong>creating</strong>, <strong>configuring</strong>, and <strong>managing</strong> Angular projects efficiently.</p></br><p> <code>ng new my-app</code> is used for <strong>project setup</strong> and generates a new <strong>Angular project</strong>.</p><p><strong>Components</strong>, <strong>Services</strong>, <strong>Directives</strong>, <strong>Modules</strong>, <strong>Pipes</strong>, and <strong>Guards</strong> can be generated using the <strong>Angular CLI</strong>.</p></br><p>For example:</p><ul><li>To generate a <strong>Component</strong>: <code>ng generate component component-name</code></li><li>To generate a <strong>Service</strong>: <code>ng generate service service-name</code></li></ul></br><p><code>ng serve</code> runs a <strong>local development server</strong> with <strong>live reload</strong>.</p>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 3,
                    "rootId": 0,
                    "title": "<p><strong>Module</strong></p>",
                    "qaData": [
                        {
                            "id": 8,
                            "sectionId": 3,
                            "question": "<p>What is a module in Angular?</p>",
                            "answerList": [
                                "<p>A <strong>Module</strong> contains the <strong>logical structure</strong> of a project. It <strong>groups</strong> related <strong>Components</strong>, <strong>Directives</strong>, <strong>Pipes</strong>, and <strong>Services</strong>.</p></br><p>After the introduction of <strong>Standalone Components (Angular 14+)</strong>, the <strong>need for modules</strong> is <strong>reduced</strong>.</p>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 4,
                    "rootId": 0,
                    "title": "<p><strong>Templates</strong></p>",
                    "qaData": [
                        {
                            "id": 9,
                            "sectionId": 4,
                            "question": "<p>What are templates in Angular?</p>",
                            "answerList": [
                                "<p>A <strong>Template</strong> in <strong>Angular</strong> is <strong>HTML</strong> with <strong>Angular syntax</strong> (such as <strong>Interpolation</strong>, <strong>Property Binding</strong>, <strong>Event Binding</strong>, <strong>Two-Way Binding</strong>, and <strong>Directives</strong>) that defines a <strong>Component&#39;s View</strong> and makes the <strong>UI dynamic</strong>.</p>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 5,
                    "rootId": 0,
                    "title": "<p><strong>ng-template and ng-container</strong></p>",
                    "qaData": [
                        {
                            "id": 10,
                            "sectionId": 5,
                            "question": "<p>What is different between ng-templace and ng-container?</p>",
                            "answerList": [
                                "<p><strong>ng-template</strong>:</p></br><p><strong>ng-template </strong>is an <strong>Angular template element</strong> that holds <strong>HTML/Angular code</strong> but is <strong>not rendered in the DOM</strong> by default.</p><p>It’s mainly used with <strong>structural directives</strong> (<code>*ngIf</code>, <code>*ngFor</code>, <code>ngTemplateOutlet</code>) to render <strong>content conditionally</strong> or <strong>dynamically</strong>.</p></br><pre data-language=\"plain\">\n&lt;ng-template #noData&gt;&lt;/ng-template&gt;\n&lt;div *ngIf=&quot;items.length; else noData&quot;&gt;&lt;/div&gt;\n</pre></br><p><strong>Reusable Templates:</strong></p></br><pre data-language=\"plain\">\n&lt;ng-template #welcome&gt;&lt;/ng-template&gt;\n&lt;ng-template #goodbye&gt;&lt;/ng-template&gt;\n\n&lt;ng-container *ngTemplateOutlet=&quot;isLoggedIn ? welcome : goodbye&quot;&gt;&lt;/ng-container&gt;\n</pre></br><p><strong>Dynamic Rendering in TypeScript:</strong></p></br><pre data-language=\"plain\">\nimport { Component, ViewChild, TemplateRef, ViewContainerRef } from &#39;@angular/core&#39;;\n\n@ViewChild(&#39;login&#39;) loginTemplate!: TemplateRef&lt;any&gt;;\n@ViewChild(&#39;signup&#39;) signupTemplate!: TemplateRef&lt;any&gt;;\n@ViewChild(&#39;container&#39;, { read: ViewContainerRef }) container!: ViewContainerRef;\n</pre></br><p><strong>ng-container</strong>:</p></br><p>It’s a <strong>logical container</strong> that does <strong>not create extra DOM elements</strong>.</p><p>It <strong>groups multiple elements</strong> without wrapping them in an unnecessary <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>.</p></br></br></br></br></br>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 6,
                    "rootId": 0,
                    "title": "<p><strong>Directives</strong></p>",
                    "qaData": [
                        {
                            "id": 11,
                            "sectionId": 6,
                            "question": "<p>What is a directive?</p>",
                            "answerList": [
                                "<p>A <strong>Directive</strong> in <strong>Angular</strong> is a <strong>class</strong> that <strong>changes the appearance</strong>, <strong>behavior</strong>, or <strong>layout</strong> of elements <strong>dynamically</strong>.</p>"
                            ]
                        },
                        {
                            "id": 12,
                            "sectionId": 6,
                            "question": "<p>Explain the types of directives in Angular.</p>",
                            "answerList": [
                                "<p><strong>Component Directives</strong>: A <strong>Component</strong> is a <strong>special type of directive</strong> that has a <strong>template</strong> and is used to build <strong>UI views</strong>. Components have their own <strong>templates</strong>, <strong>styles</strong>, and <strong>logic</strong>.</p></br><p><strong>Structural Directives</strong>: <strong>Structural Directives</strong> are <strong>Angular directives</strong> that <strong>change the structure of the DOM</strong> by <strong>adding or removing elements</strong> using <code>*ngIf</code>, <code>*ngFor</code>, or <code>*ngSwitch</code>.</p></br><p><strong>Attribute Directives</strong>: <strong>Attribute Directives</strong> are used to <strong>change the appearance</strong> or <strong>behavior</strong> of <strong>DOM elements</strong> in Angular by <strong>modifying their attributes or styles</strong> using <code>ngClass</code>, <code>ngStyle</code>, or <code>ngModel</code>.</p>"
                            ]
                        },
                        {
                            "id": 13,
                            "sectionId": 6,
                            "question": "<p>What is the difference between *ngIf and *ngFor?</p>",
                            "answerList": [
                                "<p><strong>*ngIf</strong>: <code>*ngIf</code> <strong>conditionally adds or removes</strong> an element based on a <strong>boolean expression</strong>.</p></br><p><strong>*ngFor</strong>: <code>*ngFor</code> <strong>iterates over a list</strong> to <strong>render an element</strong> for each <strong>item</strong>.</p>"
                            ]
                        },
                        {
                            "id": 14,
                            "sectionId": 6,
                            "question": "<pre data-language=\"plain\">\n@for (item of items; track item.id) { \n    &lt;div&gt;{{ item.name }}&lt;/div&gt; \n} \n</pre></br><p>Why do we use track in *ngFor?</p>",
                            "answerList": [
                                "<p><strong>track</strong> in an <code>@for</code> loop is used to <strong>uniquely identify</strong> each <strong>element</strong> in the <strong>list</strong>, which <strong>improves performance</strong> during <strong>DOM updates</strong>.</p></br><p>When using <strong>track</strong>, <strong>Angular</strong> knows which <strong>items</strong> are <strong>unchanged</strong> and which are <strong>added or removed</strong>. It only <strong>updates the necessary DOM elements</strong> without <strong>re-rendering the entire list</strong>.</p></br><p>Using an <strong>object</strong> with <strong>track</strong> is <strong>not ideal</strong> because if the <strong>object</strong> is <strong>replaced</strong> or <strong>mutated</strong>, Angular may <strong>unnecessarily re-render</strong> it.</p></br><pre data-language=\"plain\">\nthis.items = [...this.items];\n</pre></br><p>This creates a <strong>new array</strong> with the same <strong>objects</strong>, but since the <strong>object references</strong> have changed, Angular treats them as <strong>different</strong> and <strong>re-renders the entire list</strong>.</p></br></br>"
                            ]
                        },
                        {
                            "id": 15,
                            "sectionId": 6,
                            "question": "<p>With old syntax </p></br><pre data-language=\"plain\">\n&lt;div *ngFor=&quot;let product of products; trackBy: product.id&quot;&gt; \n   {{ product.name }} \n&lt;/div&gt; \n</pre></br><p>Why do we get an error?</p>",
                            "answerList": [
                                "<p>In the old <strong>structural directive</strong> <code>*ngFor</code>, <strong>trackBy</strong> is <strong>optional</strong> and expects a <strong>function reference</strong>, but after the introduction of the <strong>new control flow</strong>, <strong>track</strong> is <strong>mandatory</strong> in <code>@for</code> and expects a <strong>property access</strong>.</p></br><pre data-language=\"plain\">\ntrackByProductId(index: number, product: any): number {\n  return product.id;\n}\n</pre></br><pre data-language=\"plain\">\n&lt;div *ngFor=&quot;let product of products; trackBy: trackByProductId&quot;&gt; \n  {{ product.name }}\n&lt;/div&gt;\n</pre></br></br>"
                            ]
                        },
                        {
                            "id": 16,
                            "sectionId": 6,
                            "question": "<p>Why was the new control flow (<code>@if</code>, <code>@for</code>, and <code>@switch</code>) introduced when we already had <code>*ngIf</code>, <code>*ngFor</code>, and <code>*ngSwitch</code>?</p>",
                            "answerList": [
                                "<p><code>*ngIf</code>, <code>*ngFor</code>, and <code>*ngSwitch</code> are based on <strong>microsyntax</strong>, which is the special <code>*</code> <strong>syntax</strong>. <strong>Angular</strong> expands this into <code>&lt;ng-template&gt;</code> behind the scenes, creating <strong>hidden layers</strong>.</p></br><pre data-language=\"plain\">\n&lt;ng-template [ngIf]=&quot;show&quot;&gt;\n  &lt;div&gt;\n    Hello\n  &lt;/div&gt;\n&lt;/ng-template&gt;\n</pre></br><p>This can make <strong>templates</strong> harder to <strong>read</strong> and <strong>debug</strong>, especially with <strong>nesting</strong>.</p></br><p>To solve this, <strong>Angular 17+</strong> introduced <strong>block-based syntax</strong> (using <code>{}</code> blocks with <code>@if</code>, <code>@for</code>, <code>@switch</code>). It’s similar to <strong>JavaScript</strong> and makes <strong>templates cleaner</strong>, <strong>more readable</strong>, and <strong>easier to debug</strong>.</p></br>"
                            ]
                        },
                        {
                            "id": 17,
                            "sectionId": 6,
                            "question": "<p>What are components in Angular?</p>",
                            "answerList": [
                                "<p>A <strong>Component</strong> in <strong>Angular</strong> is the <strong>basic building block</strong> of the <strong>UI</strong>, controlling a section of the <strong>view</strong> with <strong>logic</strong> and <strong>data</strong>. It consists of: <strong>TypeScript File (.ts)</strong>, <strong>HTML Template (.html)</strong>, and <strong>CSS/SCSS (.css or .scss)</strong>.</p></br><ol><li><strong>Components</strong> can be used across the app with <code>&lt;selector&gt;</code>.</li><li><strong>Components</strong> are <strong>encapsulated</strong>; each component has its own <strong>template</strong> and <strong>styles</strong>.</li><li><strong>UI (template)</strong> and <strong>logic (class)</strong> are clearly <strong>separated</strong> in components.</li></ol></br><p><strong>Encapsulation</strong> is defined as the <strong>wrapping up of data</strong> under a <strong>single unit</strong>.</p>"
                            ]
                        },
                        {
                            "id": 18,
                            "sectionId": 6,
                            "question": "<p>How are Components different from directives?</p>",
                            "answerList": [
                                "<ol><li>All <strong>Components</strong> are <strong>Directives</strong>, but not all <strong>Directives</strong> are <strong>Components</strong>.</li><li>A <strong>Component</strong> is a <strong>special type of directive</strong> that has a <strong>template</strong> and is used to build <strong>UI views</strong>.</li><li>Other <strong>Directives</strong> (<strong>Structural</strong> or <strong>Attribute</strong>) do <strong>not have templates</strong> and are used to <strong>modify behavior</strong> or <strong>layout</strong>.</li></ol>"
                            ]
                        },
                        {
                            "id": 19,
                            "sectionId": 6,
                            "question": "<p>What is a host listener?</p>",
                            "answerList": [
                                "<p><code>@HostListener()</code> allows us to <strong>listen to events</strong> on the <strong>host element</strong> of a <strong>directive</strong> or <strong>component</strong>.</p></br><p><strong>Example</strong>: If you create a <strong>directive</strong> and want to <strong>react</strong> to <strong>mouseover</strong>, <strong>click</strong>, <strong>keydown</strong>, etc., on the <strong>element</strong> it’s applied to, you use <code>@HostListener</code>.</p>"
                            ]
                        },
                        {
                            "id": 20,
                            "sectionId": 6,
                            "question": "<p>What is a host binding?</p>",
                            "answerList": [
                                "<p><code>@HostBinding()</code> allows you to <strong>bind a property</strong> of the <strong>host element</strong> (like <strong>class</strong>, <strong>style</strong>, <strong>attr</strong>, <strong>disabled</strong>, etc.) to a <strong>field</strong> in your <strong>directive</strong> or <strong>component</strong>.</p>"
                            ]
                        },
                        {
                            "id": 21,
                            "sectionId": 6,
                            "question": "<p>Example of host listener and host binding.</p>",
                            "answerList": [
                                "<p>If you need a <strong>custom directive</strong> for <strong>highlight</strong>, it can be generated using the <strong>Angular CLI</strong> command:</p></br><pre data-language=\"plain\">\nng generate directive highlight\n</pre></br><p>A <strong>custom directive</strong> is created with the <code>@Directive</code> <strong>decorator</strong>, where the <strong>selector</strong> <code>&quot;[appHighlight]&quot;</code> is defined. It can then be used in the <strong>host element</strong> as an <strong>attribute</strong>.</p></br><p>There are two <strong>built-in decorators</strong>:</p><ul><li><code>@HostListener()</code> for <strong>listening to host element events</strong></li><li><code>@HostBinding()</code> for <strong>binding properties</strong> of the <strong>host element</strong></li></ul></br></br><pre data-language=\"plain\">\nHtml File\n\n&lt;p appHighlight&gt;Hover to see **background color change**!&lt;/p&gt;\n</pre></br></br><pre data-language=\"plain\">\nTypeSrcpt File\n\nimport { Directive, HostBinding, HostListener } from &#39;@angular/core&#39;;\n\n@Directive({\n  selector: &#39;[appHighlight]&#39;\n})\nexport class Highlight {\n\n  @HostBinding(&#39;style.backgroundColor&#39;) bgColor: string = &#39;&#39;;\n  @HostBinding(&#39;style.cursor&#39;) cursor: string = &#39;&#39;;\n  @HostBinding(&#39;style.color&#39;) textColor: string = &#39;&#39;;\n\n  constructor() { }\n\n  @HostListener(&#39;mouseenter&#39;) onMouseEnter() {\n    this.bgColor = &#39;yellow&#39;;\n    this.cursor = &#39;pointer&#39;;\n    this.textColor = &#39;red&#39;;\n  } \n\n  @HostListener(&#39;mouseleave&#39;) onMouseLeave() {\n    this.bgColor = &#39;&#39;;\n    this.cursor = &#39;&#39;;\n    this.textColor = &#39;&#39;;\n  }\n}\n</pre></br></br></br></br>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 7,
                    "rootId": 0,
                    "title": "<p><strong>Service and Injectable</strong></p>",
                    "qaData": [
                        {
                            "id": 22,
                            "sectionId": 7,
                            "question": "<p>What is a service in Angular?</p>",
                            "answerList": [
                                "<p>A <strong>service</strong> in <strong>Angular</strong> is a <strong>reusable class</strong> used to <strong>share data</strong>, <strong>logic</strong>, or <strong>functions</strong> across <strong>components</strong> using <strong>dependency injection</strong>.</p>"
                            ]
                        },
                        {
                            "id": 23,
                            "sectionId": 7,
                            "question": "<p>How do you create a service?</p>",
                            "answerList": [
                                "<p>A service can be created using the Angular CLI command:</p></br><p><code>ng generate service service-name (e.g., User)</code>.</p></br><p>It generates a service class with the <strong>@Injectable()</strong> decorator. The <strong>@Injectable()</strong> decorator makes the service eligible for <strong>dependency injection</strong>.</p></br><p>import { Injectable } from &#39;@angular/core&#39;;</p></br><pre data-language=\"plain\">\n@Injectable({\n  providedIn: &#39;root&#39;\n})\nexport class User {}\n</pre></br><p>If <code><strong>providedIn: &#39;root&#39;</strong></code> is used in a service, it can be reused across the <strong>entire application</strong>. Otherwise, it needs to be <strong>registered in the </strong><code><strong>providers</strong></code><strong> array</strong> of a <strong>module</strong> or <strong>component</strong>.</p>"
                            ]
                        },
                        {
                            "id": 24,
                            "sectionId": 7,
                            "question": "<p>Explain Dependency Injection in Angular.</p>",
                            "answerList": [
                                "<p><strong>Dependency Injection (DI)</strong> is a <strong>design pattern</strong> in <strong>Angular</strong> that allows a <strong>class</strong> to receive its <strong>dependencies</strong> from an <strong>external source</strong> instead of creating them itself. </p></br><p>The <strong>inject()</strong> function was introduced in <strong>Angular v14+</strong>. This means we can directly perform <strong>dependency injection</strong> using the <strong>inject()</strong> function without needing to register dependencies in the <strong>constructor</strong>.</p>"
                            ]
                        },
                        {
                            "id": 25,
                            "sectionId": 7,
                            "question": "<p>Explain the concept of the Angular Injector.</p>",
                            "answerList": [
                                "<p><strong>Angular Injector</strong> is a <strong>mechanism</strong> that provides <strong>dependencies</strong> (like <strong>services</strong>) to <strong>components</strong>, <strong>directives</strong>, <strong>pipes</strong>, and other <strong>classes</strong> using <strong>Dependency Injection</strong>.</p><p>It <strong>creates</strong> and <strong>delivers instances</strong> when needed.</p></br><pre data-language=\"plain\">\nconstructor(private userService: UserService) {}\n</pre></br><p>Here, <strong>Angular</strong> uses the <strong>injector</strong> to provide an <strong>instance</strong> of <strong>UserService</strong> to the <strong>component</strong>.</p>"
                            ]
                        },
                        {
                            "id": 26,
                            "sectionId": 7,
                            "question": "<p>What is injectable?</p>",
                            "answerList": [
                                "<p><strong>@Injectable()</strong> is a <strong>decorator</strong> that marks a <strong>class</strong> as available to be <strong>injected</strong> as a <strong>dependency</strong> into other <strong>classes</strong> (like <strong>components</strong>, <strong>directives</strong>, or <strong>services</strong>).</p>"
                            ]
                        },
                        {
                            "id": 27,
                            "sectionId": 7,
                            "question": "<p>What is the level of injectable?</p>",
                            "answerList": [
                                "<p>We can use @Injectable at <strong>root level</strong>, <strong>module level</strong>, and <strong>component level</strong>. </p></br><p>If <code>providedIn</code> is root (<code>@Injectable({ providedIn: &#39;root&#39; })</code>), it can be <strong>used across the application</strong>. For the <strong>module level</strong>, we can add it in <strong>NgModule</strong> using the <strong>providers array</strong>. For the <strong>component level</strong>, we can add it in the <strong>providers array</strong> for any specific component.</p>"
                            ]
                        },
                        {
                            "id": 28,
                            "sectionId": 7,
                            "question": "<p>How does Angular handle dependency injection under the hood?</p>",
                            "answerList": [
                                "<p><strong>Angular’s Dependency Injection (DI)</strong> is powered by an <strong>injector system</strong>, which is essentially a <strong>hierarchical registry</strong> of <strong>providers</strong> that knows how to <strong>create</strong> and <strong>supply instances</strong> of <strong>services</strong> when needed.</p></br><p>Each <strong>injector</strong> holds a <strong>provider</strong> and each <strong>provider</strong> maps a <strong>token</strong> (usually the <strong>service class</strong>) to a <strong>factory function</strong> that tells <strong>Angular</strong> how to <strong>create the instance</strong>.</p></br><p>When a <strong>component</strong> requests a <strong>dependency</strong>, <strong>Angular</strong> checks its <strong>constructor</strong>, looks up the <strong>token</strong> in the <strong>nearest injector</strong>, <strong>creates the instance</strong> if not cached, and <strong>reuses it</strong> for future requests.</p><p>This allows <strong>services</strong> to be <strong>singleton</strong> at the <strong>root</strong> or <strong>scoped</strong> to <strong>modules/components</strong>, depending on where they’re <strong>provided</strong>.</p></br><p><strong>Note:</strong> A <strong>factory function</strong> is just a <strong>function</strong> that <strong>creates</strong> and <strong>returns</strong> an <strong>object</strong> (or <strong>value</strong>) instead of using <code>new</code>.</p>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 8,
                    "rootId": 0,
                    "title": "<p><strong>Angular lifecycle hooks</strong></p>",
                    "qaData": [
                        {
                            "id": 29,
                            "sectionId": 8,
                            "question": "<p>What are lifecycle hooks in Angular?</p>",
                            "answerList": [
                                "<p><strong>Lifecycle hooks</strong> are <strong>special methods</strong> in <strong>Angular</strong> that get called <strong>automatically</strong> at different stages of a <strong>component</strong> or <strong>directive’s life cycle</strong> — from <strong>creation</strong> to <strong>destruction</strong>.</p>"
                            ]
                        },
                        {
                            "id": 30,
                            "sectionId": 8,
                            "question": "<p>Explain some commonly used lifecycle hooks.</p>",
                            "answerList": [
                                "<p><code><strong>ngOnChanges(changes: SimpleChanges)</strong></code></p><ul><li>Called whenever an <code>@Input()</code> property value changes.</li><li>Useful for reacting to input updates from a parent component.</li></ul></br><p><code><strong>ngOnInit()</strong></code></p><ul><li>Called once, after the first <code>ngOnChanges</code>.</li><li>Best place for component initialization logic (e.g., fetching data from APIs).</li></ul></br><p><code><strong>ngDoCheck()</strong></code></p><ul><li>Called during every change detection cycle.</li><li>Lets you implement your own change detection logic (advanced usage).</li></ul></br><p><code><strong>ngAfterContentInit()</strong></code></p><ul><li>Called once after projecting external content (<code>&lt;ng-content&gt;</code>) into the component.</li></ul></br><p><code><strong>ngAfterContentChecked()</strong></code></p><ul><li>Called after every check of projected content.</li></ul></br><p><code><strong>ngAfterViewInit()</strong></code></p><ul><li>Called once after component’s view (and its child views) are initialized.</li><li>Good for DOM/child component access via <code>@ViewChild</code>.</li></ul></br><p><code><strong>ngAfterViewChecked()</strong></code></p><ul><li>Called after every check of the component’s view (and child views).</li></ul></br><p><code><strong>ngOnDestroy()</strong></code></p><ul><li>Called just before Angular destroys the component.</li><li>Use it to clean up (unsubscribe from Observables, detach event listeners, etc.).</li></ul></br>"
                            ]
                        },
                        {
                            "id": 31,
                            "sectionId": 8,
                            "question": "<p>When a component loads, which lifecycle hook is called first?</p>",
                            "answerList": [
                                "<p>When an Angular <strong>component loads</strong>, the <strong>first lifecycle hook</strong> that is called is <code><strong>ngOnChanges()</strong></code>, <strong>if the component has any </strong><code><strong>@Input()</strong></code><strong> properties</strong>.</p></br><p>If there are <strong>no </strong><code><strong>@Input()</strong></code><strong> bindings</strong>, then Angular skips <code>ngOnChanges()</code> and directly calls <code><strong>ngOnInit()</strong></code>.</p>"
                            ]
                        },
                        {
                            "id": 32,
                            "sectionId": 8,
                            "question": "<p>Why is constructor() called first in Angular?</p>",
                            "answerList": [
                                "<p>The <code><strong>constructor()</strong></code> is a <strong>TypeScript/JavaScript class feature</strong>, not an Angular lifecycle hook.</p></br><p>The <strong>constructor is called first</strong> because it’s part of the <strong>class instantiation process in TypeScript/JavaScript</strong>, not Angular’s lifecycle.</p></br><p>The <strong>constructor’s job</strong> is only to:</p><ul><li>Initialize <strong>class fields</strong></li><li>Inject <strong>dependencies</strong> via Angular’s <strong>Dependency Injection (DI)</strong> system</li></ul></br>"
                            ]
                        },
                        {
                            "id": 33,
                            "sectionId": 8,
                            "question": "<p>Why do we need ngOnInit() if the constructor runs once?</p>",
                            "answerList": [
                                "<p>The <code><strong>constructor()</strong></code> is a <strong>TypeScript/JavaScript class feature</strong>, not an Angular lifecycle hook.</p></br><p>The <strong>constructor runs too early</strong>, before Angular sets <code>@Input()</code> properties.</p></br><p><code>ngOnInit()</code> runs <strong>after Angular has finished initializing inputs and setting up the component</strong>.</p></br><p><code><strong>ngOnInit()</strong></code> is guaranteed to run <strong>once</strong>, after inputs are ready, making it the best place for <strong>component initialization logic</strong>.</p>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 9,
                    "rootId": 0,
                    "title": "<p><strong>Data Binding</strong></p>",
                    "qaData": [
                        {
                            "id": 34,
                            "sectionId": 9,
                            "question": "<p>How does data binding work in Angular?</p>",
                            "answerList": [
                                "<p><strong>Data binding in Angular</strong> is the <strong>mechanism</strong> that <strong>connects the component class</strong> (TypeScript) with the <strong>template</strong> (HTML). It allows data to flow <strong>between the model and the view</strong>.</p>"
                            ]
                        },
                        {
                            "id": 35,
                            "sectionId": 9,
                            "question": "<p>Explain one-way and two-way binding.</p>",
                            "answerList": [
                                "<h3><strong>Types of Data Binding</strong></h3></br><ul><li><strong>One-Way Binding:</strong> In <strong>one-way binding</strong>, data flows in <strong>one direction</strong>.</li></ul></br><p><strong>Interpolation (</strong><code><strong>{{ }}</strong></code><strong>):</strong> Interpolation <strong>binds data from the component to the view</strong>. It uses <strong>double curly braces </strong><code><strong>{{}}</strong></code> to bind and display data in the template.</p></br><pre data-language=\"plain\">\n&lt;h1&gt;{{ title }}&lt;/h1&gt;\n</pre></br><p><strong>Property Binding (</strong><code><strong>[property]</strong></code><strong>):</strong> Property binding <strong>updates the UI from the component</strong>, such as <code>[src]</code>, <code>[ngClass]</code>, <code>[ngStyle]</code>. It uses <strong>square brackets</strong> to bind data from the component to the view.</p></br><p><strong>Event Binding (</strong><code><strong>(event)</strong></code><strong>):</strong> Event binding <strong>emits user actions to the component</strong>, such as <code>(click)</code>, <code>(change)</code>.</p></br><ul><li><strong>Two-Way Binding:</strong> In two-way binding, data flows in both directions — from the component to the view and from the view back to the component. Example: <code>[(ngModel)]</code>.</li></ul></br><pre data-language=\"plain\">\n&lt;input [(ngModel)]=&quot;username&quot;&gt;\n</pre>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 10,
                    "rootId": 0,
                    "title": "<p><strong>Pipes</strong></p>",
                    "qaData": [
                        {
                            "id": 36,
                            "sectionId": 10,
                            "question": "<p>What is an Angular Pipe?</p>",
                            "answerList": [
                                "<p><strong>An Angular Pipe</strong> is a <strong>feature</strong> that <strong>transforms data</strong> in <strong>templates</strong> before <strong>displaying</strong> it. It is used with the <strong>| (pipe) operator</strong>.</p>"
                            ]
                        },
                        {
                            "id": 37,
                            "sectionId": 10,
                            "question": "<p>How do you create a custom pipe?</p>",
                            "answerList": [
                                "<p>If I need a <strong>custom pipe</strong> for <strong>uppercase</strong>, it can be generated using the <strong>Angular CLI command</strong></p><p><code>ng generate pipe uppercase</code>.</p></br><p>A <strong>custom pipe</strong> is created with the <strong>@Pipe decorator</strong>, where the <strong>name: &#39;uppercase&#39;</strong> is defined. It can then be used in a <strong>template element</strong> with the <strong>pipe (|) operator</strong>. Every <strong>custom pipe</strong> implements the built-in <strong>transform() method</strong>, which has the signature:</p><p><code>transform(value: unknown, ...args: unknown[]): unknown</code>.</p></br><p>If the <strong>value</strong> is <strong>null</strong>, <strong>undefined</strong>, or an <strong>empty string</strong>, the pipe returns an <strong>empty string</strong>; otherwise, it returns <strong>value.toUpperCase()</strong>.</p></br><pre data-language=\"plain\">\nimport { Pipe, PipeTransform } from &#39;@angular/core&#39;;\n\n@Pipe({\n  name: &#39;uppercase&#39;,\n})\nexport class UppercasePipe implements PipeTransform {\n  transform(value: string, ...args: unknown[]): unknown {\n    return value ? value.toUpperCase() : &#39;&#39;;\n  }\n}\n</pre>"
                            ]
                        },
                        {
                            "id": 38,
                            "sectionId": 10,
                            "question": "<p>What is the purpose of the async pipe in Angular?</p>",
                            "answerList": [
                                "<p>The <strong>async pipe</strong> is used in <strong>templates</strong> to <strong>subscribe</strong> to an <strong>Observable</strong> or <strong>Promise</strong> automatically and <strong>display</strong> the latest <strong>emitted value</strong>.</p><p>It also handles <strong>unsubscribe</strong> when the <strong>component</strong> is <strong>destroyed</strong>.</p>"
                            ]
                        },
                        {
                            "id": 39,
                            "sectionId": 10,
                            "question": "<p>What is the drawback of an async pipe?</p>",
                            "answerList": [
                                "<p>If you have <strong>user$ Observable</strong>:</p><ul><li>If we use <strong>user$ | async</strong> multiple times in the same <strong>template</strong>, Angular will create a <strong>new subscription</strong> each time.</li><li><strong>async pipe</strong> only works inside the <strong>template</strong>.</li><li><strong>async pipe</strong> does not provide a way to handle <strong>errors</strong> emitted by an <strong>Observable</strong> and <strong>cannot use</strong> an <strong>RxJS operator</strong>.</li><li>Every time the <strong>Observable emits</strong>, <strong>async pipe</strong> triggers <strong>change detection</strong>.</li><li>We have to optimize with <strong>ChangeDetectionStrategy.OnPush</strong>.</li></ul>"
                            ]
                        },
                        {
                            "id": 40,
                            "sectionId": 10,
                            "question": "<p>What is the difference between Pure and Impure Pipe?</p>",
                            "answerList": [
                                "<p><strong>Pure pipes</strong> run only when the <strong>input changes</strong> and are <strong>performance-friendly, </strong>while <strong>impure pipes</strong> (declared with <strong>pure: false</strong>) run on <strong>every change detection cycle </strong>and should be used only when working with <strong>mutable data</strong>.</p></br><p>An <strong>impure pipe</strong> can be defined by setting the flag <strong>pure: false</strong> inside the <strong>@Pipe decorator</strong>; otherwise, by default, a pipe is <strong>pure</strong>.</p>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 11,
                    "rootId": 0,
                    "title": "<p><strong>Routing</strong></p>",
                    "qaData": [
                        {
                            "id": 41,
                            "sectionId": 11,
                            "question": "<p>What is Routing in Angular?</p>",
                            "answerList": [
                                "<p>In <strong>Angular</strong>, <strong>Routing</strong> is the mechanism that allows us to <strong>navigate between different views (components/pages)</strong> in a Single Page Application (SPA) without reloading the entire page.</p></br><p>A <strong>Single Page Application (SPA)</strong> is a <strong>web application that loads a single HTML page (index.html)</strong> and dynamically updates the <strong>content</strong>, <strong>without refreshing the entire page</strong>.</p></br>"
                            ]
                        },
                        {
                            "id": 42,
                            "sectionId": 11,
                            "question": "<p>How to access route parameters, query parameters, and static route data?</p>",
                            "answerList": [
                                "<p>There are two approch to access route. </p><ol><li>snapshot</li><li>subscribe</li></ol></br><p><strong>Pass data in navigation</strong></p></br><pre data-language=\"plain\">\nconst routes: Routes = [\n  {\n    path: &#39;product/:id&#39;,\n    component: ProductComponent,\n    data: { title: &#39;Product Details&#39; } // Static Route Data\n  }\n];\n</pre></br><pre data-language=\"plain\">\n// Query Parameters (?key=value)\nthis.router.navigate([&#39;/search&#39;], { queryParams: { term: &#39;angular&#39; } });\n</pre></br><pre data-language=\"plain\">\n// Route Parameters (:id)\nthis.router.navigate([&#39;/user&#39;, 5]); // 5 is the id\n</pre></br><p><strong>Access data from Route</strong></p></br><pre data-language=\"plain\">\n// Snapshot approach\nthis.userId = this.route.snapshot.paramMap.get(&#39;id&#39;)!;\nthis.term = this.route.snapshot.queryParamMap.get(&#39;term&#39;);\n\n// subscribe to param or queryParam changes\nthis.route.paramMap.subscribe(params =&gt; {\n      this.userId = params.get(&#39;id&#39;)!;\n });\nthis.route.queryParamMap.subscribe(params =&gt; {\n      this.term = params.get(&#39;term&#39;)!;\n });\n\n// Static Route Data\nthis.route.data.subscribe(data =&gt; {\n  console.log(data[&#39;title&#39;]); // static title\n});\n</pre>"
                            ]
                        },
                        {
                            "id": 43,
                            "sectionId": 11,
                            "question": "<p>Explain RouterModule and RouterOutlet.</p>",
                            "answerList": [
                                "<p><code><strong>RouterModule</strong></code> is an <strong>Angular module</strong> that provides all the necessary <strong>services</strong>, <strong>directives</strong>, and <strong>configurations</strong> for <strong>routing</strong> and <strong>navigation</strong> in an Angular application.</p></br><p> <code><strong>&lt;router-outlet&gt;</strong></code> is a <strong>directive</strong> used to <strong>load routed components</strong>, and it is typically placed in the <strong>root component</strong> (<code>AppComponent</code>) or any component where you want to display routed views.</p>"
                            ]
                        }
                    ],
                    "subSections": [
                        {
                            "subjectId": 1,
                            "sectionId": 12,
                            "rootId": 11,
                            "title": "<p><strong>Routing with Module</strong></p>",
                            "qaData": [
                                {
                                    "id": 44,
                                    "sectionId": 12,
                                    "question": "<p>How do you handle routing in Angular?</p>",
                                    "answerList": [
                                        "<p>In Angular, <code>RouterModule.forRoot()</code> is used in the <strong>root module</strong> to configure <strong>global routes</strong>. It sets up the <strong>Router service</strong> and makes routing directives like <code>&lt;router-outlet&gt;</code> and <code>routerLink</code> available throughout the app. We use <code>.forRoot()</code> only once to ensure the Router is a <strong>singleton</strong>, and in <strong>feature modules</strong>, we use <code>RouterModule.forChild()</code> to add additional routes without creating multiple Router instances.</p></br><pre data-language=\"plain\">\n// app.module.ts (root routes)\n\nimport { NgModule } from &#39;@angular/core&#39;;\nimport { RouterModule, Routes } from &#39;@angular/router&#39;;\nimport { HomeComponent } from &#39;./home/home.component&#39;;\nimport { AboutComponent } from &#39;./about/about.component&#39;;\n\nconst routes: Routes = [\n  { path: &#39;home&#39;, component: HomeComponent },\n  { path: &#39;about&#39;, component: AboutComponent },\n  { path: &#39;&#39;, redirectTo: &#39;home&#39;, pathMatch: &#39;full&#39; }, // default route\n  { path: &#39;**&#39;, redirectTo: &#39;home&#39; } // wildcard route\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],   // configure routes\n  exports: [RouterModule]                   // export for use in AppModule\n})\nexport class AppRoutingModule {}\n</pre></br></br><pre data-language=\"plain\">\n// app-routing.module.ts (root routes)\n\nimport { NgModule } from &#39;@angular/core&#39;;\nimport { BrowserModule } from &#39;@angular/platform-browser&#39;;\nimport { AppComponent } from &#39;./app.component&#39;;\nimport { AppRoutingModule } from &#39;./app-routing.module&#39;;\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    AppRoutingModule   // ✅ routing included here\n  ],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}\n</pre>"
                                    ]
                                },
                                {
                                    "id": 45,
                                    "sectionId": 12,
                                    "question": "<p>Can you explain RouterModule.forRoot() and RouterModule.forChild()</p>",
                                    "answerList": [
                                        "<p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">In Angular, </span><code style=\"color: rgb(0, 0, 0); background-color: rgb(236, 236, 236);\">RouterModule.forRoot()</code><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\"> is used in the </span><strong style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">root module</strong><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\"> to configure </span><strong style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">global routes</strong><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">.</span></p></br><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">We use </span><code style=\"background-color: rgb(236, 236, 236); color: rgb(0, 0, 0);\">RouterModule.forChild()</code><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\"> to add additional routes without creating multiple Router instances.</span></p>"
                                    ]
                                }
                            ],
                            "subSections": []
                        },
                        {
                            "subjectId": 1,
                            "sectionId": 13,
                            "rootId": 11,
                            "title": "<p><strong>Routing with Standalone Component</strong></p>",
                            "qaData": [
                                {
                                    "id": 46,
                                    "sectionId": 13,
                                    "question": "<p>How do you handle routing in Angular?</p>",
                                    "answerList": [
                                        "<p>With standalone components, routing is configured <strong>directly in </strong><code><strong>main.ts</strong></code> using <code>provideRouter()</code>. Each component has <code>standalone: true</code> and can import <code>RouterModule</code> for directives like <code>&lt;router-outlet&gt;</code> and <code>routerLink</code>. This removes the need for NgModules, making routing simpler and more modular.</p>"
                                    ]
                                }
                            ],
                            "subSections": []
                        }
                    ]
                },
                {
                    "subjectId": 1,
                    "sectionId": 14,
                    "rootId": 0,
                    "title": "<p><strong>Forms</strong></p>",
                    "qaData": [
                        {
                            "id": 47,
                            "sectionId": 14,
                            "question": "<p>What is the difference between reactive forms and template-driven forms?</p>",
                            "answerList": [
                                "<ul><li><strong>Template-Driven Forms</strong> are built mainly in the <strong>HTML template</strong> using Angular directives (<strong>ngModel</strong>, <strong>ngForm</strong>), whereas <strong>Reactive Forms</strong> are built in <strong>TypeScript</strong> using <strong>FormControl</strong>, <strong>FormGroup</strong>, and <strong>FormBuilder</strong>.</li></ul></br><ul><li> For <strong>data binding</strong>, Template-Driven Forms use <strong>ngModel</strong>, while Reactive Forms use <strong>FormControl</strong>.</li></ul></br><ul><li>For <strong>validation</strong>, Template-Driven Forms use <strong>directives</strong> (such as <strong>required</strong>, <strong>minLength</strong>), whereas Reactive Forms use <strong>Validators</strong>.</li></ul></br><p> Therefore, Template-Driven Forms are <strong>not suitable</strong> for <strong>large and complex forms</strong>, but Reactive Forms are <strong>well-suited</strong> for them.</p>"
                            ]
                        },
                        {
                            "id": 48,
                            "sectionId": 14,
                            "question": "<p>What is a FormGroup, FormControl FormArray in Angular Reactive Forms?</p>",
                            "answerList": [
                                "<ul><li><strong>FormControl</strong>: Represents a <strong>single form field</strong> (<strong>input</strong>, <strong>select</strong>, etc.).</li></ul></br><ul><li><strong>FormGroup</strong>: A <strong>collection</strong> of <strong>FormControl</strong> elements, treating them as a <strong>unit</strong>.</li></ul></br><ul><li><strong>FormArray</strong>: A <strong>collection</strong> of <strong>single form fields</strong> or <strong>FormGroup</strong>, like an <strong>array</strong>.</li></ul>"
                            ]
                        },
                        {
                            "id": 49,
                            "sectionId": 14,
                            "question": "<p>How is form validation handled Template Driven Form in Angular?</p>",
                            "answerList": [
                                "<p>In Template-Driven Forms, we can use built-in directives for validations such as <code>required</code>, <code>minlength</code>, <code>maxlength</code>, and <code>pattern</code>. We can also implement custom validations using directives that return validation errors.</p></br><pre data-language=\"plain\">\nCustom &quot;noSpace&quot; validator\n\nimport { Directive } from &#39;@angular/core&#39;;\nimport { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from &#39;@angular/forms&#39;;\n\n@Directive({\n  selector: &#39;[appNoSpace]&#39;,\n  providers: [{ provide: NG_VALIDATORS, useExisting: NoSpaceDirective, multi: true }]\n})\nexport class NoSpaceDirective implements Validator {\n  validate(control: AbstractControl): ValidationErrors | null {\n    const value = control.value;\n    if (value &amp;&amp; value.includes(&#39; &#39;)) {\n      return { noSpace: true };\n    }\n    return null;\n  }\n}\n</pre></br><pre data-language=\"plain\">\nUse in Template\n\n&lt;form #myForm=&quot;ngForm&quot;&gt;\n  &lt;input name=&quot;username&quot; ngModel appNoSpace required /&gt;\n  &lt;div *ngIf=&quot;myForm.controls[&#39;username&#39;]?.errors?.noSpace&quot;&gt;\n    Spaces are not allowed.\n  &lt;/div&gt;\n&lt;/form&gt;\n</pre></br></br></br></br>"
                            ]
                        },
                        {
                            "id": 50,
                            "sectionId": 14,
                            "question": "<p>How is form validation handled Reactive Form in Angular?</p>",
                            "answerList": [
                                "<p>In Reactive Forms, we can use built-in validators such as <code>Validators.required</code>, <code>Validators.minLength()</code>, and <code>Validators.pattern()</code>. We can also implement custom validations.</p></br><p><strong>Custom Validator for FormControl:</strong></p><pre data-language=\"plain\">\nExample: No Spaces Validator\n\nimport { AbstractControl, ValidationErrors, ValidatorFn } from &#39;@angular/forms&#39;;\n\nexport function noSpaceValidator(): ValidatorFn {\n  return (control: AbstractControl): ValidationErrors | null =&gt; {\n    if (control.value &amp;&amp; control.value.includes(&#39; &#39;)) {\n      return { noSpace: true }; // invalid\n    }\n    return null; // valid\n  };\n}\n</pre></br><pre data-language=\"plain\">\nUse Custom Validator in FormControl\n\nimport { FormGroup, FormControl, Validators } from &#39;@angular/forms&#39;;\n\nthis.userForm = new FormGroup({\n  username: new FormControl(&#39;&#39;, [Validators.required, noSpaceValidator()])\n});\n</pre></br><p><strong>Custom Validator for FormGroup:</strong></p><pre data-language=\"plain\">\nexport function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {\n  const password = group.get(&#39;password&#39;)?.value;\n  const confirmPassword = group.get(&#39;confirmPassword&#39;)?.value;\n\n  return password === confirmPassword ? null : { passwordsMismatch: true };\n}\n\n// Usage\nthis.registerForm = new FormGroup({\n  password: new FormControl(&#39;&#39;, Validators.required),\n  confirmPassword: new FormControl(&#39;&#39;, Validators.required)\n}, { validators: passwordMatchValidator });\n</pre></br></br></br>"
                            ]
                        },
                        {
                            "id": 51,
                            "sectionId": 14,
                            "question": "<p>How to show error in Reactive Form?</p>",
                            "answerList": [
                                "<pre data-language=\"plain\">\n&lt;form [formGroup]=&quot;myForm&quot; (ngSubmit)=&quot;onSubmit()&quot;&gt;\n  &lt;div&gt;\n    &lt;label&gt;Email: &lt;/label&gt;\n    &lt;input type=&quot;email&quot; formControlName=&quot;email&quot; /&gt;\n\n    @let emailControl = myForm.get(&#39;email&#39;);\n\n    @if(emailControl?.touched &amp;&amp; emailControl?.invalid) {\n      @let emailControlErrors = emailControl?.errors;\n\n      @if(emailControlErrors?.[&#39;required&#39;]) {\n        &lt;small&gt;Email is required&lt;/small&gt;\n      }\n\n      @if(emailControlErrors?.[&#39;email&#39;]) {\n        &lt;small&gt;Invalid email format&lt;/small&gt;\n      }\n\n      @if(emailControlErrors?.[&#39;minlength&#39;]) {\n        &lt;small&gt;Minimum length of email should be 6&lt;/small&gt;\n      }\n    }\n  &lt;/div&gt;\n\n  &lt;button type=&quot;submit&quot; [disabled]=&quot;myForm.invalid&quot;&gt;Submit&lt;/button&gt;\n&lt;/form&gt;\n</pre></br><pre data-language=\"plain\">\nconstructor(private fb: FormBuilder) {\n  this.myForm = this.fb.group({\n    email: [&#39;&#39;, [Validators.required, Validators.email, Validators.minLength(6)]],\n  });\n}\n\nonSubmit() {\n  if (this.myForm.invalid) {\n    this.myForm.markAllAsTouched(); // This will trigger all error messages\n    return;\n  }\n  console.log(this.myForm.value);\n}\n</pre></br></br></br>"
                            ]
                        },
                        {
                            "id": 52,
                            "sectionId": 14,
                            "question": "<p>How to show error in Template Driven Form?</p>",
                            "answerList": [
                                "<pre data-language=\"plain\">\n&lt;form #form=&quot;ngForm&quot; (ngSubmit)=&quot;submitForm(form)&quot;&gt;\n  &lt;div&gt;\n    &lt;label for=&quot;email&quot;&gt;Email: &lt;/label&gt;\n    &lt;input\n      type=&quot;email&quot;\n      name=&quot;email&quot;\n      [(ngModel)]=&quot;user.email&quot;\n      email\n      required\n      minlength=&quot;6&quot;\n      #emailRef=&quot;ngModel&quot;\n    /&gt;\n\n    @if(emailRef.touched &amp;&amp; emailRef.invalid) {\n      @if(emailRef.errors?.[&#39;required&#39;]) {\n        &lt;small&gt;Email is required.&lt;/small&gt;\n      }\n      @if(emailRef.errors?.[&#39;email&#39;]) {\n        &lt;small&gt;Invalid email format&lt;/small&gt;\n      }\n      @if(emailRef.errors?.[&#39;minlength&#39;]) {\n        &lt;small&gt;Minimum 6 characters required.&lt;/small&gt;\n      }\n    }\n  &lt;/div&gt;\n\n  &lt;button type=&quot;submit&quot; [disabled]=&quot;form.invalid&quot;&gt;Submit&lt;/button&gt;\n&lt;/form&gt;\n</pre></br><pre data-language=\"plain\">\nuser = {\n  email: &#39;&#39;,\n  password: &#39;&#39;,\n}\n\nsubmitForm(form: NgForm) {\n  if (form.invalid) {\n    // Mark all controls as touched to show validation errors\n    Object.values(form.controls).forEach(control =&gt; control.markAsTouched());\n    return;\n  }\n\n  console.log(this.user);\n}\n</pre>"
                            ]
                        },
                        {
                            "id": 53,
                            "sectionId": 14,
                            "question": "<pre data-language=\"plain\">\nthis.myForm.get(&#39;email&#39;)?.valueChanges\n  .subscribe(value =&gt; \n      { console.log(&#39;Email changed:&#39;, value); \n  }); \n</pre></br><p>How to optimize this when valueChange fires on every keystroke?</p>",
                            "answerList": [
                                "<p>We can use <strong>RxJS operators</strong> like <code><strong>debounceTime()</strong></code> and <code><strong>distinctUntilChanged()</strong></code> to optimize <code><strong>valueChanges</strong></code> at every keystroke.</p></br><ul><li><code>debounceTime()</code> delays the emission of values from an observable by a specified time <strong>after the last event</strong>.</li><li><code>distinctUntilChanged()</code> prevents an observable from emitting a value if it is the <strong>same as the previous value</strong>.</li></ul>"
                            ]
                        },
                        {
                            "id": 54,
                            "sectionId": 14,
                            "question": "<p>How to create a new form with name, email, and phoneNumber controls every time a button is clicked.</p>",
                            "answerList": [
                                "<p>In Angular Reactive Forms, if we want to dynamically add multiple sets of controls (like <code>name</code>, <code>email</code>, <code>phoneNumber</code>) every time the user clicks a button, we can use a <code><strong>FormArray</strong></code>.</p></br><p><strong>Explanation:</strong></p><ul><li><code><strong>FormArray</strong></code> is a collection of <code><strong>FormGroup</strong></code> or <code><strong>FormControl</strong></code>.</li><li>Each time the button is clicked, we push a new <code><strong>FormGroup</strong></code> (with <code>name</code>, <code>email</code>, and <code>phoneNumber</code> controls) into the <code>FormArray</code>.</li><li>This way, the user can add multiple &quot;rows&quot; of data dynamically.</li></ul></br></br><pre data-language=\"plain\">\n&lt;form [formGroup]=&quot;userForm&quot; (ngSubmit)=&quot;onSubmit()&quot;&gt;\n  &lt;div formArrayName=&quot;users&quot;&gt;\n    @for(userGroup of users.controls; track userGroup; let i=$index) {\n      &lt;div [formGroupName]=&quot;i&quot; class=&quot;user-form&quot;&gt;\n        &lt;div&gt;\n          &lt;label for=&quot;name&quot;&gt;Name&lt;/label&gt;\n          &lt;input type=&quot;text&quot; name=&quot;name&quot; formControlName=&quot;name&quot; /&gt;\n          @if(userGroup.get(&#39;name&#39;)?.touched &amp;&amp; userGroup.get(&#39;name&#39;)?.invalid) {\n            &lt;small&gt;Name is required&lt;/small&gt;\n          }\n        &lt;/div&gt;\n\n        &lt;div&gt;\n          &lt;label for=&quot;email&quot;&gt;Email&lt;/label&gt;\n          &lt;input type=&quot;text&quot; name=&quot;email&quot; formControlName=&quot;email&quot; /&gt;\n          @if(userGroup.get(&#39;email&#39;)?.touched &amp;&amp; userGroup.get(&#39;email&#39;)?.invalid) {\n            @let emailControlError = userGroup.get(&#39;email&#39;)?.errors;\n\n            @if(emailControlError?.[&#39;required&#39;]) {\n              &lt;small&gt;Email is required.&lt;/small&gt;\n            }\n            @if(emailControlError?.[&#39;email&#39;]) {\n              &lt;small&gt;Invalid email.&lt;/small&gt;\n            }\n          }\n        &lt;/div&gt;\n\n        &lt;div&gt;\n          &lt;label for=&quot;phoneNumber&quot;&gt;Phone Number&lt;/label&gt;\n          &lt;input type=&quot;text&quot; name=&quot;phoneNumber&quot; formControlName=&quot;phoneNumber&quot; /&gt;\n          @if(userGroup.get(&#39;phoneNumber&#39;)?.touched &amp;&amp; userGroup.get(&#39;phoneNumber&#39;)?.invalid) {\n            &lt;small&gt;Phone Number is required&lt;/small&gt;\n          }\n        &lt;/div&gt;\n      &lt;/div&gt;\n    }\n  &lt;/div&gt;\n\n  &lt;button type=&quot;button&quot; (click)=&quot;addUser()&quot;&gt;Add Another User&lt;/button&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/form&gt;\n</pre></br><pre data-language=\"plain\">\nimport { Component } from &#39;@angular/core&#39;;\nimport { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from &#39;@angular/forms&#39;;\n\n@Component({\n  selector: &#39;app-root&#39;,\n  imports: [ReactiveFormsModule],\n  templateUrl: &#39;./app.html&#39;,\n  styleUrls: [&#39;./app.scss&#39;]\n})\nexport class App {\n  userForm!: FormGroup;\n\n  constructor(private fb: FormBuilder) {\n    this.userForm = this.fb.group({\n      users: this.fb.array([])\n    });\n\n    this.addUser();\n  }\n\n  get users(): FormArray {\n    return this.userForm.get(&#39;users&#39;) as FormArray;\n  }\n\n  createUserForm(): FormGroup {\n    return this.fb.group({\n      name: [&#39;&#39;, [Validators.required]],\n      email: [&#39;&#39;, [Validators.required, Validators.email]],\n      phoneNumber: [&#39;&#39;, [Validators.required]],\n    });\n  }\n\n  addUser() {\n    this.users.push(this.createUserForm());\n  }\n\n  onSubmit() {\n    if (this.userForm.valid) {\n      console.log(this.userForm.value);\n    } else {\n      this.users.controls.forEach(control =&gt; control.markAllAsTouched());\n    }\n  }\n}\n</pre>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 15,
                    "rootId": 0,
                    "title": "<p><strong>Zone.js, NgZone and Change Detection</strong></p>",
                    "qaData": [
                        {
                            "id": 55,
                            "sectionId": 15,
                            "question": "<p>What is Zone.js, NgZone and Change Detection?</p>",
                            "answerList": [
                                "<p><strong>Zone.js</strong> is a JavaScript library that tracks <strong>asynchronous tasks</strong> start and finish. When a task completes, <strong>Zone.js</strong> informs <strong>NgZone</strong> (a wrapper around Zone.js), “Hey, something changed, maybe run <strong>change detection</strong>.”</p></br><p><code>NgZone</code> is an Angular service that acts as a <strong>bridge between asynchronous operations</strong> (like <code>setTimeout</code>, <code>Promise</code>, HTTP requests) and Angular’s <strong>change detection</strong> system. It is built on top of <strong>Zone.js</strong>.</p></br><p><strong>Change Detection:</strong></p><p>Change Detection in Angular is the process that updates the DOM when a component’s state changes. Change Detection runs through the component tree from top to bottom, compares the current and previous values, and updates the DOM if any value has changed.</p></br></br><p><strong>NgZone: Impact on Performance</strong></p><ul><li><strong>Pros:</strong><ul><li>Simplifies change detection by automatically tracking async operations.</li><li>Keeps the UI updated without manual intervention.</li></ul></li><li><strong>Cons / Considerations:</strong><ul><li>Every async operation triggers change detection for the <strong>entire component tree</strong> by default.</li><li>Frequent async operations (like rapid <code>setTimeout</code>, <code>setInterval</code>, or HTTP polling) can <strong>slow down performance</strong>.</li><li>To optimize, you can run tasks <strong>outside Angular’s zone</strong> using <code>ngZone.runOutsideAngular()</code> and only trigger change detection when necessary.</li></ul></li></ul>"
                            ]
                        },
                        {
                            "id": 56,
                            "sectionId": 15,
                            "question": "<p>How does Angular’s change detection mechanism work?</p>",
                            "answerList": [
                                "<p>Zone.js detects clicks, input events, and other DOM events, as well as when an asynchronous task has completed, and informs NgZone: &#39;Hey, something changed, maybe run change detection.&#39; NgZone then tells Angular to run change detection. Change detection runs through the component tree from top to bottom, compares the current and previous values, and updates the DOM if any value has changed. Angular checks all child components, regardless of whether they are affected by the change.</p>"
                            ]
                        },
                        {
                            "id": 57,
                            "sectionId": 15,
                            "question": "<p>If I pass the value from parent component to child component, how does child component get this value?</p>",
                            "answerList": [
                                "<p>Zone.js detects <strong>clicks</strong>, <strong>input events</strong>, and other <strong>DOM events</strong>, as well as when an <strong>asynchronous task</strong> has completed, and informs <strong>NgZone</strong>: &#39;Hey, something changed, maybe run <strong>change detection</strong>.&#39; <strong>NgZone</strong> then tells <strong>Angular</strong> to run <strong>change detection</strong>.</p></br><p>If we enable the <strong>OnPush Change Detection Strategy</strong>, <strong>Angular</strong> only checks a <strong>component</strong> when one of the following happens: the <strong>component</strong> triggers an <strong>event</strong> (click, input), an <strong>@Input</strong> property changes (<strong>reference changes</strong>), or an <strong>asynchronous task</strong> has completed.</p></br><p>Otherwise, <strong>Angular</strong> skips checking the <strong>component</strong>, improving <strong>performance</strong>.</p></br><pre data-language=\"plain\">\nEnable OnPush Strategy\n\nimport { ChangeDetectionStrategy, Component } from &#39;@angular/core&#39;;\n\n@Component({\n  selector: &#39;app-child&#39;,\n  templateUrl: &#39;./child.component.html&#39;,\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class ChildComponent { }\n</pre></br>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 16,
                    "rootId": 0,
                    "title": "<p><strong>Guards</strong></p>",
                    "qaData": [
                        {
                            "id": 58,
                            "sectionId": 16,
                            "question": "<p>What are Angular Guards?</p>",
                            "answerList": [
                                "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Angular </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Route Guards</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> are used to control access to routes based on conditions (e.g., authentication, permissions).</span></p>"
                            ]
                        },
                        {
                            "id": 59,
                            "sectionId": 16,
                            "question": "<p>Explain the types of route guards.</p>",
                            "answerList": [
                                "<p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">1. CanActivate:</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanActivate </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">is used to prevent unauthorized access to a route.</span></p></br><p><strong>2.</strong> <strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanActivateChild:</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanActivateChild </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">is used to </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">guard child routes</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> of a particular route.</span></p></br><p><strong>3.</strong> <strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanDeactivate:</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanDeactivate </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">is a</span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> route guard</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> used to prevent navigation away from a component.</span></p></br><p><strong>4.</strong> <strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Resolve</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">: Fetches data before loading a route.</span></p></br><p><strong>5.</strong> <strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanLoad:</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanLoad </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">is used to</span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">prevent loading a module unless conditions are met (used with lazy loading).</span></p></br><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Angular deprecated CanLoad in favor of the more powerful and flexible </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanMatch </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">guard starting in </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Angular v14+</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, especially for </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">standalone components</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> and </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">lazy-loaded routes</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">.</span></p>"
                            ]
                        },
                        {
                            "id": 60,
                            "sectionId": 16,
                            "question": "<p>Can you explain how to implement authentication guards in Angular?</p>",
                            "answerList": [
                                "<p>Authentication guards are implemented using the <code>CanActivate</code> interface, which controls access to routes based on conditions such as whether the user is logged in.</p></br><p>Authentication guards can be generated using the Angular CLI command <code>ng generate guard AuthGuard</code>. During generation, I select the <code>CanActivate</code> option, which creates a guard using <code>canActivateFn</code>. Inside the guard, I check whether the user is logged in; if yes, I return <code>true</code>, otherwise I redirect them to the login page. Finally, I apply this guard in the routing configuration by setting <code>canActivate: [AuthGuard]</code> on the required path.</p></br><pre data-language=\"plain\">\nauth.guard.ts\n\nimport { inject } from &#39;@angular/core&#39;;\nimport { CanActivateFn, Router } from &#39;@angular/router&#39;;\nimport { AuthService } from &#39;./auth.service&#39;;\n\nexport const authGuard: CanActivateFn = (route, state) =&gt; {\n  const authService = inject(AuthService);\n  const router = inject(Router);\n\n  if (authService.isLoggedIn()) {\n    return true; // allow access\n  }\n\n  // if not logged in → redirect to login\n  return router.createUrlTree([&#39;/login&#39;]);\n};\n</pre></br></br><pre data-language=\"plain\">\napp.routes.ts\n\nimport { Routes } from &#39;@angular/router&#39;;\nimport { DashboardComponent } from &#39;./dashboard/dashboard.component&#39;;\nimport { authGuard } from &#39;./auth.guard&#39;;\n\nexport const routes: Routes = [\n  {\n    path: &#39;dashboard&#39;,\n    component: DashboardComponent,\n    canActivate: [authGuard]\n  },\n  {\n    path: &#39;login&#39;,\n    loadComponent: () =&gt;\n      import(&#39;./login/login.component&#39;).then(m =&gt; m.LoginComponent),\n  },\n];\n</pre>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 17,
                    "rootId": 0,
                    "title": "<p><strong>Component Communication</strong></p>",
                    "qaData": [
                        {
                            "id": 61,
                            "sectionId": 17,
                            "question": "<p>How do components communicate with each other in a large-scale Angular application?</p>",
                            "answerList": [
                                "<p>If the <strong>communication</strong> is between <strong>parent</strong> and <strong>child</strong>, I can <strong>pass data</strong> from <strong>parent to child</strong> through <code>@Input()</code> and <strong>emit data</strong> from <strong>child to parent</strong> through <code>@Output()</code>. I can also <strong>directly access</strong> a <strong>child component instance</strong> using <code>ViewChild</code> or <code>ContentChild</code>.</p></br><p>If <strong>components</strong> are <strong>unrelated</strong>, I create a <strong>shared service</strong> and <strong>share data</strong> through it using <code>Subject</code> or <code>BehaviorSubject</code> for <strong>real-time updates</strong>.</p></br><p>For <strong>large-scale apps</strong>, I use <strong>centralized state management</strong> like <strong>NgRx</strong> to <strong>manage</strong> and <strong>share data</strong>.</p></br><p>I can also <strong>pass data</strong> through <strong>route params</strong>, <strong>query params</strong>, or <strong>route state</strong>.</p>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 18,
                    "rootId": 0,
                    "title": "<p><strong>ViewChild / ViewChildren and ContentChild / ContentChildren</strong></p>",
                    "qaData": [
                        {
                            "id": 62,
                            "sectionId": 18,
                            "question": "<p>What is ViewChild?</p>",
                            "answerList": [
                                "<p><code>ViewChild</code> is used to get a reference to <strong>a single element, directive, or child component</strong> <strong>from the component’s own template (view)</strong>.</p></br><p>It becomes available after the <strong>view is initialized</strong> (<code>ngAfterViewInit</code>).</p></br><p><strong>Accessing a DOM element</strong></p><pre data-language=\"plain\">\n@Component({\n  selector: &#39;app-demo&#39;,\n  template: `&lt;p #para&gt;Hello World&lt;/p&gt;`\n})\nexport class DemoComponent implements AfterViewInit {\n  @ViewChild(&#39;para&#39;) para!: ElementRef;\n\n  ngAfterViewInit() {\n    console.log(this.para.nativeElement.textContent); // Outputs: &quot;Hello World&quot;\n  }\n}\n</pre></br><p><strong>Accessing a Child Component</strong></p><pre data-language=\"plain\">\n@Component({\n  selector: &#39;child-comp&#39;,\n  template: `&lt;p&gt;Child works!&lt;/p&gt;`\n})\nexport class ChildComponent {}\n\n@Component({\n  selector: &#39;app-demo&#39;,\n  template: `&lt;child-comp #child&gt;&lt;/child-comp&gt;`\n})\nexport class DemoComponent implements AfterViewInit {\n  @ViewChild(&#39;child&#39;) childComp!: ChildComponent;\n\n  ngAfterViewInit() {\n    console.log(this.childComp); // Access the ChildComponent instance\n  }\n}\n\n</pre>"
                            ]
                        },
                        {
                            "id": 63,
                            "sectionId": 18,
                            "question": "<p>What is ViewChildren?</p>",
                            "answerList": [
                                "<p><code>ViewChildren</code> is used to get references to <strong>multiple elements or child components</strong> in a component’s own template. It returns a <strong>QueryList</strong> and becomes available after <strong>ngAfterViewInit</strong>.</p></br><p><strong>Accessing multiple DOM elements</strong></p><pre data-language=\"plain\">\n@Component({\n  template: `\n    &lt;p #item *ngFor=&quot;let i of [1,2,3]&quot;&gt;Item {{i}}&lt;/p&gt;\n  `\n})\nexport class DemoComponent implements AfterViewInit {\n  @ViewChildren(&#39;item&#39;) items!: QueryList&lt;ElementRef&gt;;\n\n  ngAfterViewInit() {\n    this.items.forEach(el =&gt; console.log(el.nativeElement.textContent));\n  }\n}\n</pre></br><pre data-language=\"plain\">\n// Output\nItem 1\nItem 2\nItem 3\n</pre></br><p><strong>Accessing multiple Child Components</strong></p><pre data-language=\"plain\">\n@Component({\n  selector: &#39;child-comp&#39;,\n  template: `&lt;p&gt;Child&lt;/p&gt;`\n})\nexport class ChildComponent {}\n\n@Component({\n  template: `\n    &lt;child-comp *ngFor=&quot;let i of [1,2]&quot;&gt;&lt;/child-comp&gt;\n  `\n})\nexport class ParentComponent implements AfterViewInit {\n  @ViewChildren(ChildComponent) children!: QueryList&lt;ChildComponent&gt;;\n\n  ngAfterViewInit() {\n    console.log(this.children.length); // 2\n  }\n</pre><p>}</p>"
                            ]
                        },
                        {
                            "id": 64,
                            "sectionId": 18,
                            "question": "<p>What is ContentChild?</p>",
                            "answerList": [
                                "<p><code>ContentChild</code> is used to get a reference to a <strong>single element, directive, or component projected into a component</strong> via <code>&lt;ng-content&gt;</code>. It is available after <strong>ngAfterContentInit</strong></p></br><p><strong>Accessing projected content</strong></p><pre data-language=\"plain\">\n@Component({\n  selector: &#39;child-comp&#39;,\n  template: `&lt;ng-content&gt;&lt;/ng-content&gt;`\n})\nexport class ChildComponent implements AfterContentInit {\n  @ContentChild(&#39;projected&#39;) projected!: ElementRef;\n\n  ngAfterContentInit() {\n    console.log(this.projected.nativeElement.textContent);\n  }\n}\n</pre></br><pre data-language=\"plain\">\n&lt;!-- Parent Component Template --&gt;\n&lt;child-comp&gt;\n  &lt;p #projected&gt;Hello from Parent&lt;/p&gt;\n&lt;/child-comp&gt;\n</pre>"
                            ]
                        },
                        {
                            "id": 65,
                            "sectionId": 18,
                            "question": "<p>What is ContentChildren?</p>",
                            "answerList": [
                                "<p><code>ContentChildren</code> is used to get references to <strong>multiple elements or components projected into a component</strong> via <code>&lt;ng-content&gt;</code>. It returns a <strong>QueryList</strong> and becomes available after <strong>ngAfterContentInit</strong>.</p></br><p><strong>Accessing multiple projected elements</strong></p><pre data-language=\"plain\">\n@Component({\n  selector: &#39;child-comp&#39;,\n  template: `&lt;ng-content&gt;&lt;/ng-content&gt;`\n})\nexport class ChildComponent implements AfterContentInit {\n  @ContentChildren(&#39;projected&#39;) projectedItems!: QueryList&lt;ElementRef&gt;;\n\n  ngAfterContentInit() {\n    this.projectedItems.forEach(item =&gt; \n      console.log(item.nativeElement.textContent)\n    );\n  }\n}\n</pre></br><pre data-language=\"plain\">\n&lt;!-- Parent Component Template --&gt;\n&lt;child-comp&gt;\n  &lt;p #projected&gt;Item 1&lt;/p&gt;\n  &lt;p #projected&gt;Item 2&lt;/p&gt;\n&lt;/child-comp&gt;\n</pre>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 19,
                    "rootId": 0,
                    "title": "<p><strong>Loading</strong></p>",
                    "qaData": [
                        {
                            "id": 66,
                            "sectionId": 19,
                            "question": "<p>What is the difference between eager loading, lazy loading, and preloading in Angular?</p>",
                            "answerList": [
                                "<p>Angular uses <strong>eager loading</strong>, <strong>lazy loading</strong>, and <strong>preloading strategies</strong> to load components or modules in an application.</p></br><ul><li><strong>Eager loading</strong>: Loads components or modules before the application starts. This can make the initial load slower if there are many modules or components.</li><li><strong>Lazy loading</strong>: Loads components or modules only when required. For example, when a user navigates to a route, Angular loads the corresponding component dynamically. This reduces the initial bundle size and improves startup performance.</li><li><strong>Preloading</strong>: Loads components or modules in the background after the application has started. This combines the benefits of both eager and lazy loading: fast navigation because modules are already loaded, and an optimized initial load.</li></ul></br><p><strong>Notes:</strong></p><p>Earlier, Angular loaded a module before accessing its components. However, after introducing <strong>standalone components</strong>, Angular can load components without loading their modules.</p>"
                            ]
                        },
                        {
                            "id": 67,
                            "sectionId": 19,
                            "question": "<p>Can you explain how to implement lazy loading in Angular with module?</p>",
                            "answerList": [
                                "<p>In the lazy loading strategy, earlier Angular used <code>loadChildren</code> to load modules before accessing components. However, after the introduction of standalone components, it uses <code>loadComponent</code> to load components directly.</p></br><p>Suppose we have a feature module (a module that encapsulates a specific feature or functionality) called <code>Admin</code>. First, we set up routing for the <code>Admin</code> module in <code>admin-routing.module.ts</code> and define a <code>routes</code> array that contains all route configurations related to this module. We then pass this <code>routes</code> array into <code>RouterModule.forChild()</code>.</p><p>Next, we configure app routing with lazy loading in <code>app-routing.module.ts</code>. In the app routing configuration, we use <code>loadChildren</code> to dynamically import the <code>AdminModule</code> when the user navigates to the <code>admin</code> routing path.</p></br><pre data-language=\"plain\">\nadmin/admin-routing.module.ts\n\nimport { NgModule } from &#39;@angular/core&#39;;\nimport { RouterModule, Routes } from &#39;@angular/router&#39;;\nimport { DashboardComponent } from &#39;./dashboard/dashboard.component&#39;;\n\nconst routes: Routes = [\n  { path: &#39;&#39;, component: DashboardComponent } // default path for admin module\n];\n\n@NgModule({\n  imports: [RouterModule.forChild(routes)],\n  exports: [RouterModule]\n})\nexport class AdminRoutingModule { }\n</pre></br><pre data-language=\"plain\">\napp-routing.module.ts\n\nimport { NgModule } from &#39;@angular/core&#39;;\nimport { RouterModule, Routes } from &#39;@angular/router&#39;;\n\nconst routes: Routes = [\n  { \n    path: &#39;admin&#39;, \n    loadChildren: () =&gt; import(&#39;./admin/admin.module&#39;).then(m =&gt; m.AdminModule) \n  },\n  { path: &#39;&#39;, redirectTo: &#39;/&#39;, pathMatch: &#39;full&#39; }\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule { }\n</pre></br>"
                            ]
                        },
                        {
                            "id": 68,
                            "sectionId": 19,
                            "question": "<p>Can you explain how to implement lazy loading in Angular with standalone component?</p>",
                            "answerList": [
                                "<p>In the lazy loading strategy, earlier Angular used <code>loadChildren</code> to load modules before accessing components. However, after the introduction of standalone components, it uses <code>loadComponent</code> to load components directly.</p></br><p>Suppose we have a standalone component called <code>Admin</code>. We configure lazy loading in <code>app.routes.ts</code> by defining a <code>routes</code> array that contains all route configurations. In the <code>admin</code> route, we use <code>loadComponent</code> to dynamically import the <code>AdminComponent</code> when the user navigates to the <code>admin</code> route path.</p></br><pre data-language=\"plain\">\napp.routes.ts\n\nimport { Routes } from &#39;@angular/router&#39;;\n\nexport const routes: Routes = [\n{\npath: &#39;admin&#39;,\nloadComponent: () =&gt;\nimport(&#39;./admin/admin.component&#39;).then(m =&gt; m.AdminComponent)\n},\n{ path: &#39;&#39;, redirectTo: &#39;admin&#39;, pathMatch: &#39;full&#39; }\n];\n</pre>"
                            ]
                        },
                        {
                            "id": 69,
                            "sectionId": 19,
                            "question": "<p>Can you explain how to implement preloading in Angular?</p>",
                            "answerList": [
                                ""
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 20,
                    "rootId": 0,
                    "title": "<p><strong>Performance Optimization</strong></p>",
                    "qaData": [
                        {
                            "id": 70,
                            "sectionId": 20,
                            "question": "<p>How can you optimize Angular Application for better performance?</p>",
                            "answerList": [
                                "<p>In Angular, I optimize <strong>performance</strong> by using <strong>OnPush change detection</strong> with <strong>immutable data</strong>, <strong>trackBy</strong> in <strong>ngFor</strong> to avoid re-rendering, and <strong>pure pipes</strong> for efficiency. I also <strong>lazy load</strong> modules or components to reduce <strong>bundle size</strong>, move <strong>heavy logic</strong> out of <strong>templates</strong>, and <strong>unsubscribe</strong> from <strong>observables</strong> to prevent <strong>memory leaks</strong>. Additionally, I use <strong>standalone components</strong> and <strong>preloading strategies</strong> to improve <strong>load time</strong>.</p></br><p><strong>Immutable Data: </strong></p><p>If we use <strong>mutable objects/arrays</strong>, Angular cannot detect small changes (like this.user.name = &quot;Alice&quot;) unless we replace the entire reference.</p></br><p>Immutable data ensures that whenever we modify something, we <strong>create a new reference</strong>, which works perfectly with <strong>OnPush</strong>.</p></br><pre data-language=\"plain\">\n// ❌ Mutable (Angular won&#39;t detect inside change with OnPush)\nthis.user.name = &quot;Alice&quot;;  \n\n// ✅ Immutable (Angular detects new reference)\nthis.user = { ...this.user, name: &quot;Alice&quot; };\n</pre></br></br><p><strong>move heavy logic out of templates:</strong></p><p>If we call functions from the template for <code>*ngFor</code> or <code>*ngIf</code>, these functions are executed on every change detection cycle, whether the data has changed or not, which makes the performance slow.</p></br><pre data-language=\"plain\">\n❌ Bad Practice (heavy logic in template):\n\n&lt;div *ngFor=&quot;let user of getActiveUsers()&quot;&gt;\n  {{ calculateAge(user.dob) }}\n&lt;/div&gt;\n</pre>"
                            ]
                        },
                        {
                            "id": 71,
                            "sectionId": 20,
                            "question": "<p>If on a button click I hit an API and the API takes 2 minutes and I keep clicking the button then when I get a response how can I cancel all the other API calls?</p>",
                            "answerList": [
                                "<p>We can use RxJS operator <strong>race</strong>, in which all observables execute simultaneously. If any one observable <strong>emits first (either value or completion)</strong>, all the other observables will be canceled or unsubscribed.</p></br><pre data-language=\"plain\">\nimport { Component } from &#39;@angular/core&#39;;\nimport { HttpClient } from &#39;@angular/common/http&#39;;\nimport { race, Observable } from &#39;rxjs&#39;;\n\n@Component({\n  selector: &#39;app-api-race&#39;,\n  template: `&lt;button (click)=&quot;callApis()&quot;&gt;Call API&lt;/button&gt;`\n})\nexport class ApiRaceComponent {\n  private apiCalls: Observable&lt;any&gt;[] = [];\n\n  constructor(private http: HttpClient) {}\n\n  callApis() {\n    // Create a new API call on every click\n    const apiCall = this.http.get(&#39;http://localhost:3000/long-api&#39;);\n    this.apiCalls.push(apiCall);\n\n    // Run race on all API calls\n    race(...this.apiCalls).subscribe({\n      next: (res) =&gt; {\n        console.log(&#39;First response wins:&#39;, res);\n        // Cancel all other pending API calls\n        this.apiCalls = [];\n      },\n      error: (err) =&gt; console.log(err)\n    });\n  }\n}\n</pre>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 21,
                    "rootId": 0,
                    "title": "<p><strong>Interceptor</strong></p>",
                    "qaData": [
                        {
                            "id": 72,
                            "sectionId": 21,
                            "question": "<p>What is the Interceptor?</p>",
                            "answerList": [
                                "<p><strong>Interceptor</strong> is a <strong>middleware</strong> for <strong>HTTP requests</strong> and <strong>responses</strong> in <strong>Angular</strong>. It allows us to <strong>modify requests</strong> (like adding <strong>authentication tokens</strong>), <strong>handle errors globally</strong>, or manage <strong>loaders</strong> without repeating code in every service. It improves <strong>code reusability</strong>, <strong>maintainability</strong>, and ensures <strong>consistent handling</strong> of <strong>API calls</strong>.</p>"
                            ]
                        },
                        {
                            "id": 73,
                            "sectionId": 21,
                            "question": "<p>If I have multiple APIs, I need to show success and failure for each APIs. How can I handle it at one place?</p>",
                            "answerList": [
                                "<p>Instead of handling <strong>success</strong> and <strong>error</strong> separately in every <strong>service</strong> or <strong>component</strong>, I used an <strong>HTTP Interceptor</strong>. This allows me to capture every <strong>request</strong> and <strong>response</strong> globally. I <strong>log successes</strong>, and if there’s any <strong>error</strong> (like <strong>401</strong>, <strong>404</strong>, or <strong>500</strong>), I can show a <strong>toast</strong> or <strong>redirect to login</strong> automatically. This makes the <strong>code cleaner</strong>, <strong>reusable</strong>, and avoids <strong>duplication</strong>.</p>"
                            ]
                        },
                        {
                            "id": 74,
                            "sectionId": 21,
                            "question": "<p>Suppose I want to add an Authorization token for all API requests through an interceptor, but in the case of login and signup APIs I don’t need to pass the token. How can we handle that scenario efficiently in Angular?</p>",
                            "answerList": [
                                "<p>In the <strong>interceptor</strong>, I check if the <strong>request URL</strong> is for <strong>login</strong> or <strong>signup</strong>. If yes, I <strong>skip adding the Authorization header</strong>. Otherwise, I <strong>clone the request</strong> and <strong>attach the token</strong>. This way, I handle it <strong>globally</strong> and avoid <strong>repeating logic</strong> in <strong>services</strong>.</p>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 22,
                    "rootId": 0,
                    "title": "<p><strong>Compiler</strong></p>",
                    "qaData": [
                        {
                            "id": 75,
                            "sectionId": 22,
                            "question": "<p>What is the role of a compiler in angular?</p>",
                            "answerList": [
                                "<p>The <strong>Angular Compiler</strong> is a core part of the Angular framework that converts your application’s <strong>HTML templates</strong> and decorated <strong>TypeScript code</strong> (like components, directives, and pipes) into efficient <strong>JavaScript code</strong> that the browser can understand and execute.</p></br><p>Angular has two main compilation modes:</p></br><ul><li><strong>JIT (Just-in-Time):</strong> Used in the <strong>browser at runtime</strong> and is useful during <strong>development</strong>.</li><li><strong>AOT (Ahead-of-Time):</strong> Used in the <strong>build process</strong> before the app runs in the browser and is <strong>preferred for production</strong>.</li></ul>"
                            ]
                        },
                        {
                            "id": 76,
                            "sectionId": 22,
                            "question": "<p>What is Ahead-of-Time (AOT) compilation in Angular?</p>",
                            "answerList": [
                                "<p><strong>Ahead-of-Time (AOT) compilation</strong> is the process where Angular compiles <strong>TypeScript code</strong> and <strong>HTML templates</strong> into efficient <strong>JavaScript code</strong> during <strong>build time</strong>, <strong>before the browser downloads and runs the application</strong>.</p>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 23,
                    "rootId": 0,
                    "title": "<p><strong>Challenges Faced in Angular Project</strong></p>",
                    "qaData": [
                        {
                            "id": 77,
                            "sectionId": 23,
                            "question": "<p>Tell me about some challenges you faced in your Angular projects.</p>",
                            "answerList": [
                                "<p>One of the challenges I faced was <strong>implementing a search box</strong>. Initially, every keystroke was hitting the backend API, which <strong>created unnecessary load and poor performance</strong>. I solved this by using <strong>RxJS operators</strong> — <code>debounceTime</code> to wait for the user to stop typing, <code>distinctUntilChanged</code> to avoid duplicate searches, and <code>switchMap</code> to cancel previous API calls when a new value was entered. This <strong>optimized API usage</strong> and <strong>improved the user experience</strong>.</p></br><p>Another challenge was <strong>implementing nested drag-and-drop functionality</strong>. The Angular CDK works well for flat lists, but in my project, we needed <strong>hierarchical data movement across multiple levels</strong>. I extended the CDK drag-drop with <strong>custom logic for nested structures</strong> and handled <strong>index recalculations</strong>. This provided <strong>smooth drag-and-drop</strong> for complex data.</p></br><p>I also faced <strong>memory leak issues</strong> due to multiple subscriptions. Some observables were not unsubscribed properly, <strong>leading to performance degradation</strong>. To fix this, I applied the <strong>async pipe</strong> wherever possible, used the <strong>takeUntil pattern with a Subject</strong>, and even created a <strong>BaseComponent</strong> to centralize cleanup logic in <code>ngOnDestroy</code>. This <strong>ensured stability</strong> and <strong>prevented memory leaks</strong>.</p>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 24,
                    "rootId": 0,
                    "title": "<p><strong>Unit Testing</strong></p>",
                    "qaData": [
                        {
                            "id": 78,
                            "sectionId": 24,
                            "question": "<p>What is Unit Testing in Angular, and why is it important?</p>",
                            "answerList": [
                                "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Unit testing in Angular is the process of testing individual components, services, or functions in isolation to ensure they work correctly and make the application more reliable and maintainable.</span></p>"
                            ]
                        },
                        {
                            "id": 79,
                            "sectionId": 24,
                            "question": "<p>What testing frameworks are commonly used with Angular (Jasmine, Karma, Jest)?</p>",
                            "answerList": [
                                "<p class=\"ql-align-justify\"><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Jasmine</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> is a testing framework, </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Karma</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> is a test runner (executes tests in browsers), and </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Jest</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> is an alternative framework+runner offering faster, simpler testing.</span></p></br><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">In short: </span><em style=\"background-color: transparent; color: rgb(0, 0, 0);\">Jasmine + Karma work together</em><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, while </span><em style=\"background-color: transparent; color: rgb(0, 0, 0);\">Jest alone can replace both</em><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">.</span></p>"
                            ]
                        },
                        {
                            "id": 80,
                            "sectionId": 24,
                            "question": "<p>What is the difference between unit testing and end-to-end testing?</p>",
                            "answerList": [
                                "<p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Unit testing</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> checks individual components/services in isolation, while </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">end-to-end testing</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> validates the entire application flow from the user’s perspective.</span></p>"
                            ]
                        },
                        {
                            "id": 81,
                            "sectionId": 24,
                            "question": "<p>What is the default test runner in Angular projects created with Angular CLI?</p>",
                            "answerList": [
                                "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">The default test runner in Angular projects created with Angular CLI is </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Karma</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">.</span></p>"
                            ]
                        },
                        {
                            "id": 82,
                            "sectionId": 24,
                            "question": "<p>How do you create a new Angular component test file using CLI?</p>",
                            "answerList": [
                                "<p class=\"ql-align-justify\"><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">You can create a new Angular component with its spec (test) file using:</span></p><pre data-language=\"plain\">\nng generate component component-name\n</pre><p class=\"ql-align-justify\"></p><p class=\"ql-align-justify\"><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">👉 The CLI automatically generates the </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">.spec.ts</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> test file.</span></p></br>"
                            ]
                        },
                        {
                            "id": 83,
                            "sectionId": 24,
                            "question": "<p>What is ‘describe’ in jasmine in Unit Testing?</p>",
                            "answerList": [
                                "<p><strong>&#39;describe&#39;</strong> is a <strong>test suite</strong> (a <strong>folder</strong> or <strong>box</strong>) in <strong>Jasmine</strong>. It <strong>groups together related test cases</strong> (<strong>it blocks</strong>) and helps <strong>organize tests logically</strong>.</p>"
                            ]
                        },
                        {
                            "id": 84,
                            "sectionId": 24,
                            "question": "<p>What is beforeEach in Jasmine?</p>",
                            "answerList": [
                                "<p><strong>beforeEach</strong> is a <strong>special function</strong> provided by <strong>Jasmine</strong> (and <strong>Jest</strong>, <strong>Mocha</strong>, etc.). It <strong>runs before every</strong> <strong>‘it’ block</strong> (<strong>spec/test case</strong>) inside a <strong>describe block</strong>. It’s used to <strong>set up common code</strong> needed by <strong>multiple tests</strong>.</p>"
                            ]
                        },
                        {
                            "id": 85,
                            "sectionId": 24,
                            "question": "<p>What is TestBed in Angular Unit Testing?</p>",
                            "answerList": [
                                "<p><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">TestBed</strong><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">is the </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">primary Angular testing utility</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> that creates a </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">simulated Angular environment</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> for unit testing.</span></p></br><p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">It allows us to test components, directives, pipes, and services </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">with Angular’s dependency injection, change detection, and templates</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">.</span></p></br><p class=\"ql-align-justify\"><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">1. </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">TestBed </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">Configures a testing module</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> (like a mini </span><span style=\"color: rgb(24, 128, 56); background-color: transparent;\">NgModule</span><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">):</span></p><pre data-language=\"plain\">\n\n  TestBed.configureTestingModule({\n  \tdeclarations: [MyComponent],\n  \tproviders: [MyService],\n \timports: [FormsModule, HttpClientTestingModule]\n   });\n</pre><p class=\"ql-align-justify\"></p><p class=\"ql-align-justify\"><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">2.</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> TestBed creates Components for testing:</span></p><pre data-language=\"plain\">\n\n   const fixture = TestBed.createComponent(MyComponent);\n   const component = fixture.componentInstance;\n   fixture.detectChanges(); // runs ngOnInit + bindings\n</pre></br><p>3. TestBed is used to Inject Services:</p><pre data-language=\"plain\">\n      \n    const service = TestBed.inject(MyService);\n\n</pre><p><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">4. Run Change Detection:</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> Updates the DOM after changing component properties.</span></p>"
                            ]
                        },
                        {
                            "id": 86,
                            "sectionId": 24,
                            "question": "<p>What is ‘it’ in jasmine in Unit Testing?</p>",
                            "answerList": [
                                "<p><strong>‘it’</strong> defines a <strong>test case</strong>. It takes a <strong>description string</strong> that states the <strong>expected behavior</strong>, and a <strong>function</strong> that contains the <strong>test logic</strong> with <strong>expect</strong>.</p>"
                            ]
                        },
                        {
                            "id": 87,
                            "sectionId": 24,
                            "question": "<p>What is ‘expect’ in Jasmin?</p>",
                            "answerList": [
                                "<p>In <strong>Angular unit testing</strong>, the <strong>expect</strong> function <strong>verifies</strong> that the <strong>actual result</strong> matches the <strong>expected result</strong> using <strong>matchers</strong>.</p>"
                            ]
                        },
                        {
                            "id": 88,
                            "sectionId": 24,
                            "question": "<p>Can you describe some matchers?</p>",
                            "answerList": [
                                "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">In Angular unit testing, a matcher function compares the actual result with the expected result.</span></p></br><p><strong>1.</strong> <strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">toBeTruthy:</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">.toBeTruthy()</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">checks that a value is not </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">false</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">, </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">0</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">, </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">&#39;&#39;</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">, </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">null</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">, </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">undefined</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, or </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">NaN</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">.</span></p></br><p><strong>2.</strong> <strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">toHaveBeenCalledWith: </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">toHaveBeenCalledWith</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">is a Jasmine matcher that checks if a spy (mocked function) was called with the expected arguments. </span> </p>"
                            ]
                        },
                        {
                            "id": 89,
                            "sectionId": 24,
                            "question": "<p>How does <span style=\"color: rgb(0, 138, 0);\">async </span>work in Angular testing?</p>",
                            "answerList": [
                                "<p><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">async</strong><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">utility (renamed to </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">waitForAsync</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">) tracks all </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">pending async tasks</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> (Promises, timers, XHR) and waits until they are finished. Only then allows the test to continue and run expectations. It waits for </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">real async operations</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> to finish automatically.</span></p></br><pre data-language=\"plain\">\n\nmy.component.ts\n\nimport { Component, OnInit } from &#39;@angular/core&#39;;\n@Component({\n  selector: &#39;app-my&#39;,\n  template: `&lt;div *ngIf=&quot;data&quot;&gt;{{ data }}&lt;/div&gt;`\n})\nexport class MyComponent implements OnInit {\n  data: string | null = null;\n  ngOnInit(): void {\n    // Simulate async data (like HTTP call)\n    this.loadData().then(result =&gt; {\n      this.data = result;\n    });\n  }\n  loadData(): Promise&lt;string&gt; {\n    return new Promise(resolve =&gt; {\n      setTimeout(() =&gt; resolve(&#39;Hello Async Data!&#39;), 500);\n    });\n  }\n}\n</pre></br><pre data-language=\"plain\">\n\n// my.component.spec.ts\n\nit(&#39;should load data async and render it&#39;, waitForAsync(() =&gt; {\n fixture.detectChanges(); // triggers ngOnInit\n fixture.whenStable().then(() =&gt; {\n fixture.detectChanges(); // update view after async resolves\n const div = fixture.debugElement.query(By.css(&#39;div&#39;)).nativeElement;\n expect(div.textContent).toContain(&#39;Hello Async Data!&#39;);\n expect(component.data).toBe(&#39;Hello Async Data!&#39;);\n });\n</pre></br><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">🔑</span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> What happens here:</strong></p></br><p><strong>1.</strong> <strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">fixture.detectChanges():</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> triggers </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">ngOnInit</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, which starts an async task.</span></p></br><p><strong>2.</strong> <strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">fixture.whenStable():</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> waits until </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">all Promises &amp; async tasks are finished</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">.</span></p></br><p><strong>3.</strong> <strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">fixture.detectChanges():</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> refreshes template after data is set.</span></p></br><p><strong>4.</strong> <span style=\"color: rgb(0, 0, 0); background-color: transparent;\">Test asserts that </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">async data is rendered</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">.</span></p></br><p><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">Explain:</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </span></p><p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">I created a </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">loadData</strong><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">function that returns a Promise and resolved this Promise inside </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">ngOnInit()</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, storing the result in a </span><span style=\"color: rgb(24, 128, 56); background-color: transparent;\">data</span><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> property.</span></p></br><p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">For the unit test: I created a </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">loadData</strong><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">function which returns a Promise and resolved this Promise in </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">ngOnInit()</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, then stored the result in the </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">data</strong><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">property. I wrote a unit test case for this. I used </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">TestBed.createComponent</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> to create a fixture for the component, which provides the setup before running the tests, and I accessed the component instance using </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">fixture.componentInstance</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">.</span></p></br><p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">Inside the </span><span style=\"color: rgb(24, 128, 56); background-color: transparent;\">it</span><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> block for </span><em style=\"color: rgb(0, 0, 0); background-color: transparent;\">&#39;should load data async and render it&#39;</em><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, I wrapped the test with the </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">waitForAsync</strong><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">function. First, I ran</span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">fixture.detectChanges()</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> to update the view. Then I used </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">fixture.whenStable()</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> to wait until the component became stable. After that, I got the </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">div</strong><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">element’s </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">nativeElement</strong><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">using </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">fixture.debugElement.query(By.css(&#39;div&#39;)).nativeElement</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">. Finally, I compared </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">div.textContent</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> and </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">component.data</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> with</span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">&#39;Hello Async Data&#39;</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">.</span></p>"
                            ]
                        },
                        {
                            "id": 90,
                            "sectionId": 24,
                            "question": "<p>How does <span style=\"color: rgb(0, 138, 0);\">fakeAsync </span>work in Angular testing?</p>",
                            "answerList": [
                                "<p><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">fakeAsync</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">utility tests asynchronous code </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">synchronously</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> by simulating the passage of time.</span></p></br><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">When you wrap a test function in </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">fakeAsync</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, Angular runs it and replaces real async functions </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">(</strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">setTimeout</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">, </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">setInterval</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">, </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">Promise.then</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, RxJS timers, etc.) with </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">mocked versions</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">.</span></p></br><pre data-language=\"plain\">\n\nfake-async.component.ts\n\nimport { Component, OnInit } from &#39;@angular/core&#39;;\n@Component({\n  selector: &#39;app-fake-async&#39;,\n  template: `\n    &lt;div&gt;Static Div&lt;/div&gt;\n    &lt;div *ngIf=&quot;data&quot;&gt;{{ data }}&lt;/div&gt;\n    &lt;div&gt;Another Div&lt;/div&gt;\n  `\n})\nexport class FakeAsyncComponent implements OnInit {\n  data: string | null = null;\n  ngOnInit(): void {\n    setTimeout(() =&gt; {\n      this.data = &#39;Hello FakeAsync!&#39;;\n    }, 1000);\n  }\n}\n</pre></br><pre data-language=\"plain\">\n\nit(&#39;should load async data into the second div&#39;, fakeAsync(() =&gt; {\n    fixture.detectChanges(); // triggers ngOnInit\n    expect(component.data).toBeNull();\n    tick(1000);              // simulate passage of 1 second\n    fixture.detectChanges();\n    const divs = fixture.debugElement.queryAll(By.css(&#39;div&#39;));\n    expect(divs.length).toBe(3);\n    // Second div contains async data\n    expect(divs[1].nativeElement.textContent).toContain(&#39;Hello FakeAsync!&#39;);\n    expect(component.data).toBe(&#39;Hello FakeAsync!&#39;);\n  }));\n</pre></br><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Note:</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> Don’t use fixture.detectChanges(); in beforeEach() otherwise we will get an error.</span></p>"
                            ]
                        },
                        {
                            "id": 91,
                            "sectionId": 24,
                            "question": "<p>What is the difference between<span style=\"color: rgb(0, 138, 0);\"> tick()</span> and <span style=\"color: rgb(0, 138, 0);\">flush()</span> in Angular tests?</p>",
                            "answerList": [
                                "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Both </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">tick()</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> and </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">flush()</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> are used </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">inside </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">fakeAsync</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> tests</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> to control virtual time and execute async tasks.</span></p></br><p><strong>1.</strong>  <strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">tick()</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> is a helper function that works only inside a </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">fakeAsync</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> zone</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">. It </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">simulates the passage of virtual time</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, allowing scheduled async tasks </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">(</strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">setTimeout</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">, </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">setInterval</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, RxJS timers, Promises, etc.) to be executed </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">without waiting in real time</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">.</span></p></br><p><strong>2.</strong>  <strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">flush()</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> is a helper function that works only inside a </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">fakeAsync</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">zone. It executes all pending timers at once, without needing any arguments, and moves the virtual clock forward until all queued timers (macroTasks like </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">setTimeout</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">and </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">setInterval</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">) are executed.</span></p>"
                            ]
                        },
                        {
                            "id": 92,
                            "sectionId": 24,
                            "question": "<p>How can you test an Angular service that makes HTTP calls?</p>",
                            "answerList": [
                                "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">When a service uses HttpClient, we don’t hit the real backend in unit tests. Instead, we use Angular’s HttpClientTestingModule and HttpTestingController to mock HTTP requests.</span></p></br><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">I test Angular services with HTTP calls by using HttpClientTestingModule and HttpTestingController. This allows me to mock requests, assert on the method/URL, and return mock responses with flush() instead of calling the real backend.</span></p></br><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Call </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">httpMock.verify()</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> in </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">afterEach</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">to ensure no unmatched requests.</span></p></br><pre data-language=\"plain\">\n\nTest service file\n\nimport { TestBed } from &#39;@angular/core/testing&#39;;\nimport { User } from &#39;./user&#39;;\nimport { HttpTestingController, provideHttpClientTesting } from &#39;@angular/common/http/testing&#39;;\nimport { provideHttpClient, withFetch } from &#39;@angular/common/http&#39;;\ndescribe(&#39;User&#39;, () =&gt; {\n  let service: User;\n  let httpMock: HttpTestingController;\n  beforeEach(() =&gt; {\n    TestBed.configureTestingModule({\n      providers: [\n        User,\n        provideHttpClient(withFetch()),\n        provideHttpClientTesting()\n      ]\n    });\n    service = TestBed.inject(User);\n    httpMock = TestBed.inject(HttpTestingController);\n  });\n  afterEach(() =&gt; {\n    httpMock.verify();\n  })\n  it(&#39;should be created&#39;, () =&gt; {\n    expect(service).toBeTruthy();\n  });\n  it(&#39;should fetch users from API&#39;, () =&gt; {\n    const mockUsers = [\n      {\n        &quot;userId&quot;: 1,\n        &quot;id&quot;: 1,\n        &quot;title&quot;: &quot;delectus aut autem&quot;,\n        &quot;completed&quot;: false\n      }];\n      \n    service.getUsers().subscribe(users =&gt; {\n      expect(mockUsers).toEqual(users);\n    });\n    const req = httpMock.expectOne(&#39;https://jsonplaceholder.typicode.com/todos/1&#39;);\n    expect(req.request.method).toBe(&#39;GET&#39;);\n    req.flush(mockUsers);\n  });\n});\n\n</pre>"
                            ]
                        },
                        {
                            "id": 93,
                            "sectionId": 24,
                            "question": "<p>How do you test an Angular component with <span style=\"color: rgb(0, 138, 0);\">@Input()</span> and <span style=\"color: rgb(0, 138, 0);\">@Output()</span> properties?</p>",
                            "answerList": [
                                "<p>In <strong>input property unit test cases</strong>, we test using <strong>mock data</strong>.</p><p>First, we use <code><strong>describe</strong></code> to define the component test suite and create an <strong>instance of the component</strong>.</p><p>Then, we <strong>assign mock data</strong> to the <strong>input property</strong> of the component.</p><p>After that, we call <code><strong>fixture.detectChanges()</strong></code> to trigger <strong>change detection</strong> and update the template.</p><p>Finally, we use <code><strong>expect(nameElement.textContent).toContain(mockUser.name)</strong></code> to verify that the template displays the <strong>expected value</strong>.</p>"
                            ]
                        },
                        {
                            "id": 94,
                            "sectionId": 24,
                            "question": "<p>What is <span style=\"color: rgb(0, 138, 0);\">ComponentFixture</span> in Angular testing, and why is it used?</p>",
                            "answerList": [
                                "<p><strong>ComponentFixture</strong> allows us to:</p><ul><li><strong>Access the component instance</strong></li><li><strong>Access the native DOM element</strong> using <code><strong>fixture.nativeElement</strong></code> for <strong>DOM testing</strong></li><li><strong>Trigger change detection</strong> using <code><strong>fixture.detectChanges()</strong></code></li></ul></br>"
                            ]
                        },
                        {
                            "id": 95,
                            "sectionId": 24,
                            "question": "<p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">What is the use of </span><span style=\"color: rgb(24, 128, 56); background-color: transparent;\">spyOn()</span><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> in Jasmine?</span></p>",
                            "answerList": [
                                "<p><code><strong>spyOn()</strong></code> is used to <strong>spy on an existing method</strong> of a <strong>real object or service</strong>.</p><p>It tracks calls, arguments, and return values — and optionally allows you to mock its behavior.</p></br><p><strong>getSum method is called from component&#39;s ngOnInit with parameters:</strong></p><pre data-language=\"plain\">\n  it(&#39;should call getSum method from UserService&#39;, () =&gt; {\n    const userService = TestBed.inject(UserService);\n    const spy = spyOn(userService, &#39;getSum&#39;).and.callThrough();\n    component.ngOnInit();\n    expect(spy).toHaveBeenCalledOnceWith(5, 7);\n  });\n</pre></br><p><strong>getSum method is called from component&#39;s ngOnInit without parameters:</strong></p><pre data-language=\"plain\">\n it(&#39;should call getSum method from UserService&#39;, () =&gt; {\n    const userService = TestBed.inject(UserService);\n    const spy = spyOn(userService, &#39;getSum&#39;).and.callThrough();\n    component.ngOnInit();\n    expect(spy).toHaveBeenCalled();\n  });\n</pre></br><p><strong>getSum method is called from component&#39;s ngOnInit and return value 7:</strong></p><pre data-language=\"plain\">\nit(&#39;should set sum with the value returned from getSum&#39;, () =&gt; {\n    spyOn(userService, &#39;getSum&#39;).and.returnValue(7);\n    fixture.detectChanges(); // triggers ngOnInit()\n    expect(component.sum).toBe(7);\n  });\n</pre></br><p>✅ <strong>Key Points:</strong></p><ul><li>Works on <strong>existing objects</strong>.</li><li>Replaces only the <strong>specific method</strong> you spy on.</li><li>You can <strong>mock return values</strong> or <strong>verify calls</strong>.</li></ul></br><p><strong>“Used to spy”</strong> means <strong>to watch, track, or monitor a function’s behavior</strong> during a test — <strong>without actually running its real implementation</strong></p>"
                            ]
                        },
                        {
                            "id": 96,
                            "sectionId": 24,
                            "question": "<p>What is the use of createSpyObject() in Jasmine?</p>",
                            "answerList": [
                                "<p><code><strong>createSpyObject()</strong></code> is used to <strong>create a completely fake object</strong> with one or more <strong>spy methods</strong> — without needing a real class or instance.</p></br><pre data-language=\"plain\">\nit(&#39;should call save method of mock service&#39;, () =&gt; {\n  const mockService = jasmine.createSpyObj(&#39;UserService&#39;, [&#39;save&#39;]);\n  mockService.save.and.returnValue(of(true));\n\n  component = new UserComponent(mockService);\n  component.saveUser();\n\n  expect(mockService.save).toHaveBeenCalled();\n});\n</pre></br><p>✅ <strong>Key Points:</strong></p><ul><li>Creates a <strong>mock object from scratch</strong>.</li><li>Ideal when you want <strong>complete control</strong> over dependencies.</li><li>Doesn’t require the <strong>real class</strong> or <strong>Angular TestBed</strong>.</li></ul></br>"
                            ]
                        }
                    ],
                    "subSections": [
                        {
                            "subjectId": 1,
                            "sectionId": 25,
                            "rootId": 24,
                            "title": "<p> <strong>Scenario Based Questions</strong></p>",
                            "qaData": [
                                {
                                    "id": 97,
                                    "sectionId": 25,
                                    "question": "<p>How will you test if:</p><p>The input is rendered properly in the template?</p><p>The output event is emitted when a button is clicked?</p></br><p>Reference: <a href=\"https://chatgpt.com/c/68e843dd-b120-8321-901e-714ee269378f\" rel=\"noopener noreferrer\" target=\"_blank\">https://chatgpt.com/c/68e843dd-b120-8321-901e-714ee269378f</a></p>",
                                    "answerList": [
                                        "<pre data-language=\"plain\">\nuser-card.component.ts\n\nimport { Component, Input, Output, EventEmitter } from &#39;@angular/core&#39;;\nimport { CommonModule } from &#39;@angular/common&#39;;\n\nexport interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\n@Component({\n  selector: &#39;app-user-card&#39;,\n  standalone: true,\n  imports: [CommonModule],\n  template: `\n    &lt;div class=&quot;user-card&quot;&gt;\n      &lt;h3 class=&quot;user-name&quot;&gt;{{ user?.name }}&lt;/h3&gt;\n      &lt;p class=&quot;user-email&quot;&gt;{{ user?.email }}&lt;/p&gt;\n      &lt;button class=&quot;select-btn&quot; (click)=&quot;onSelect()&quot;&gt;Select&lt;/button&gt;\n    &lt;/div&gt;\n  `\n})\nexport class UserCardComponent {\n  @Input() user!: User;\n  @Output() userSelected = new EventEmitter&lt;User&gt;();\n\n  onSelect() {\n    this.userSelected.emit(this.user);\n  }\n}\n</pre></br><pre data-language=\"plain\">\nuser-card.component.spec.ts\n\nimport { ComponentFixture, TestBed } from &#39;@angular/core/testing&#39;;\nimport { UserCardComponent, User } from &#39;./user-card.component&#39;;\nimport { By } from &#39;@angular/platform-browser&#39;;\n\ndescribe(&#39;UserCardComponent&#39;, () =&gt; {\n  let component: UserCardComponent;\n  let fixture: ComponentFixture&lt;UserCardComponent&gt;;\n\n  const mockUser: User = {\n    id: 1,\n    name: &#39;Vivek Maurya&#39;,\n    email: &#39;vivek@example.com&#39;\n  };\n\n  beforeEach(async () =&gt; {\n    await TestBed.configureTestingModule({\n      imports: [UserCardComponent]\n    }).compileComponents();\n\n    fixture = TestBed.createComponent(UserCardComponent);\n    component = fixture.componentInstance;\n  });\n\n  it(&#39;should render input user details properly&#39;, () =&gt; {\n    // Arrange\n    component.user = mockUser;\n\n    // Act\n    fixture.detectChanges();\n\n    // Assert\n    const nameElement = fixture.debugElement.query(By.css(&#39;.user-name&#39;)).nativeElement;\n    const emailElement = fixture.debugElement.query(By.css(&#39;.user-email&#39;)).nativeElement;\n\n    expect(nameElement.textContent).toContain(mockUser.name);\n    expect(emailElement.textContent).toContain(mockUser.email);\n  });\n\n  it(&#39;should emit userSelected event when button is clicked&#39;, () =&gt; {\n    // Arrange\n    component.user = mockUser;\n    fixture.detectChanges();\n\n    spyOn(component.userSelected, &#39;emit&#39;);\n\n    // Act\n    const button = fixture.debugElement.query(By.css(&#39;.select-btn&#39;));\n    button.triggerEventHandler(&#39;click&#39;, null);\n\n    // Assert\n    expect(component.userSelected.emit).toHaveBeenCalledWith(mockUser);\n  });\n});\n</pre></br>"
                                    ]
                                },
                                {
                                    "id": 98,
                                    "sectionId": 25,
                                    "question": "<p>How will you test <code>ngOnInit()</code> without making a real HTTP call?</p>",
                                    "answerList": [
                                        "<pre data-language=\"plain\">\nuser.service.ts (mocked service interface)\n\nimport { Injectable } from &#39;@angular/core&#39;;\nimport { Observable, of } from &#39;rxjs&#39;;\n\nexport interface User {\n  id: number;\n  name: string;\n}\n\n@Injectable({\n  providedIn: &#39;root&#39;\n})\nexport class UserService {\n  getUsers(): Observable&lt;User[]&gt; {\n    // Normally this would make an HTTP request\n    return of([]);\n  }\n}\n</pre></br></br><pre data-language=\"plain\">\nuser-list.component.ts\n\nimport { Component, OnInit } from &#39;@angular/core&#39;;\nimport { CommonModule } from &#39;@angular/common&#39;;\nimport { UserService, User } from &#39;./user.service&#39;;\n\n@Component({\n  selector: &#39;app-user-list&#39;,\n  standalone: true,\n  imports: [CommonModule],\n  template: `\n    &lt;ul&gt;\n      &lt;li *ngFor=&quot;let user of users&quot;&gt;{{ user.name }}&lt;/li&gt;\n    &lt;/ul&gt;\n  `\n})\nexport class UserListComponent implements OnInit {\n  users: User[] = [];\n\n  constructor(private userService: UserService) {}\n\n  ngOnInit(): void {\n    this.userService.getUsers().subscribe((data) =&gt; {\n      this.users = data;\n    });\n  }\n}\n</pre></br></br><pre data-language=\"plain\">\nuser-list.component.spec.ts\n\nimport { ComponentFixture, TestBed } from &#39;@angular/core/testing&#39;;\nimport { of } from &#39;rxjs&#39;;\nimport { UserListComponent } from &#39;./user-list.component&#39;;\nimport { UserService, User } from &#39;./user.service&#39;;\n\ndescribe(&#39;UserListComponent&#39;, () =&gt; {\n  let component: UserListComponent;\n  let fixture: ComponentFixture&lt;UserListComponent&gt;;\n  let userServiceSpy: jasmine.SpyObj&lt;UserService&gt;;\n\n  const mockUsers: User[] = [\n    { id: 1, name: &#39;Vivek Maurya&#39; },\n    { id: 2, name: &#39;Rohit Sharma&#39; }\n  ];\n\n  beforeEach(async () =&gt; {\n    // ✅ Create a spy object for UserService\n    userServiceSpy = jasmine.createSpyObj(&#39;UserService&#39;, [&#39;getUsers&#39;]);\n\n    // ✅ Mock getUsers() to return an observable\n    userServiceSpy.getUsers.and.returnValue(of(mockUsers));\n\n    await TestBed.configureTestingModule({\n      imports: [UserListComponent],\n      providers: [\n        { provide: UserService, useValue: userServiceSpy } // inject spy instead of real service\n      ]\n    }).compileComponents();\n\n    fixture = TestBed.createComponent(UserListComponent);\n    component = fixture.componentInstance;\n  });\n\n  it(&#39;should call getUsers on ngOnInit and set users correctly&#39;, () =&gt; {\n    // Act\n    fixture.detectChanges(); // triggers ngOnInit()\n\n    // Assert\n    expect(userServiceSpy.getUsers).toHaveBeenCalledTimes(1);\n    expect(component.users).toEqual(mockUsers);\n\n    // Optional: Verify rendered DOM\n    const compiled = fixture.nativeElement as HTMLElement;\n    const listItems = compiled.querySelectorAll(&#39;li&#39;);\n    expect(listItems.length).toBe(2);\n    expect(listItems[0].textContent).toContain(&#39;Vivek Maurya&#39;);\n  });\n});\n</pre></br>"
                                    ]
                                },
                                {
                                    "id": 99,
                                    "sectionId": 25,
                                    "question": "<p>How do you handle asynchronous operations in tests?</p>",
                                    "answerList": [
                                        "<pre data-language=\"plain\">\nuser.service.ts\n\nimport { Injectable } from &#39;@angular/core&#39;;\nimport { Observable, of } from &#39;rxjs&#39;;\nimport { delay } from &#39;rxjs/operators&#39;;\n\nexport interface User {\n  id: number;\n  name: string;\n}\n\n@Injectable({ providedIn: &#39;root&#39; })\nexport class UserService {\n  getUserAsync(): Observable&lt;User&gt; {\n    // Simulate async API call with delay\n    return of({ id: 1, name: &#39;Vivek Maurya&#39; }).pipe(delay(1000));\n  }\n}\n</pre></br></br><pre data-language=\"plain\">\nuser-async.component.ts\n\nimport { Component, OnInit } from &#39;@angular/core&#39;;\nimport { CommonModule } from &#39;@angular/common&#39;;\nimport { UserService, User } from &#39;./user.service&#39;;\n\n@Component({\n  selector: &#39;app-user-async&#39;,\n  standalone: true,\n  imports: [CommonModule],\n  template: `\n    &lt;div *ngIf=&quot;user&quot;&gt;{{ user.name }}&lt;/div&gt;\n  `\n})\nexport class UserAsyncComponent implements OnInit {\n  user!: User | null;\n\n  constructor(private userService: UserService) {}\n\n  ngOnInit(): void {\n    this.userService.getUserAsync().subscribe((res) =&gt; {\n      this.user = res;\n    });\n  }\n}\n</pre></br></br><p>🔹 Using <code>fakeAsync</code> + <code>tick(): </code>Best when you control all async operations <strong>within Angular’s fakeAsync zone</strong>, like <code>setTimeout</code>, <code>delay</code>, or <code>Promise.resolve()</code>.</p></br><pre data-language=\"plain\">\nimport { ComponentFixture, TestBed, fakeAsync, tick } from &#39;@angular/core/testing&#39;;\nimport { of } from &#39;rxjs&#39;;\nimport { delay } from &#39;rxjs/operators&#39;;\nimport { UserAsyncComponent } from &#39;./user-async.component&#39;;\nimport { UserService, User } from &#39;./user.service&#39;;\n\ndescribe(&#39;UserAsyncComponent (fakeAsync)&#39;, () =&gt; {\n  let fixture: ComponentFixture&lt;UserAsyncComponent&gt;;\n  let component: UserAsyncComponent;\n  let userServiceSpy: jasmine.SpyObj&lt;UserService&gt;;\n\n  const mockUser: User = { id: 1, name: &#39;Vivek Maurya&#39; };\n\n  beforeEach(async () =&gt; {\n    userServiceSpy = jasmine.createSpyObj(&#39;UserService&#39;, [&#39;getUserAsync&#39;]);\n    userServiceSpy.getUserAsync.and.returnValue(of(mockUser).pipe(delay(1000)));\n\n    await TestBed.configureTestingModule({\n      imports: [UserAsyncComponent],\n      providers: [{ provide: UserService, useValue: userServiceSpy }]\n    }).compileComponents();\n\n    fixture = TestBed.createComponent(UserAsyncComponent);\n    component = fixture.componentInstance;\n  });\n\n  it(&#39;should load user data using fakeAsync and tick()&#39;, fakeAsync(() =&gt; {\n    fixture.detectChanges(); // triggers ngOnInit()\n\n    // simulate the 1000ms delay in service\n    tick(1000);\n    fixture.detectChanges();\n\n    expect(component.user).toEqual(mockUser);\n    const compiled = fixture.nativeElement as HTMLElement;\n    expect(compiled.textContent).toContain(&#39;Vivek Maurya&#39;);\n  }));\n});\n</pre></br></br><p>🔹 Using <code>async</code> + <code>whenStable(): </code>Best when your code involves <strong>Promises</strong> or you want Angular to automatically wait for all async tasks to complete.</p></br><pre data-language=\"plain\">\nimport { ComponentFixture, TestBed, waitForAsync } from &#39;@angular/core/testing&#39;;\nimport { of } from &#39;rxjs&#39;;\nimport { UserAsyncComponent } from &#39;./user-async.component&#39;;\nimport { UserService, User } from &#39;./user.service&#39;;\n\ndescribe(&#39;UserAsyncComponent (waitForAsync)&#39;, () =&gt; {\n  let fixture: ComponentFixture&lt;UserAsyncComponent&gt;;\n  let component: UserAsyncComponent;\n  let userServiceSpy: jasmine.SpyObj&lt;UserService&gt;;\n\n  const mockUser: User = { id: 1, name: &#39;Vivek Maurya&#39; };\n\n  beforeEach(waitForAsync(() =&gt; {\n    userServiceSpy = jasmine.createSpyObj(&#39;UserService&#39;, [&#39;getUserAsync&#39;]);\n    userServiceSpy.getUserAsync.and.returnValue(of(mockUser)); // no delay needed here\n\n    TestBed.configureTestingModule({\n      imports: [UserAsyncComponent],\n      providers: [{ provide: UserService, useValue: userServiceSpy }]\n    }).compileComponents();\n  }));\n\n  beforeEach(() =&gt; {\n    fixture = TestBed.createComponent(UserAsyncComponent);\n    component = fixture.componentInstance;\n  });\n\n  it(&#39;should load user data using async and whenStable()&#39;, waitForAsync(() =&gt; {\n    fixture.detectChanges(); // triggers ngOnInit()\n\n    fixture.whenStable().then(() =&gt; {\n      fixture.detectChanges();\n      expect(component.user).toEqual(mockUser);\n    });\n  }));\n});\n</pre>"
                                    ]
                                },
                                {
                                    "id": 100,
                                    "sectionId": 25,
                                    "question": "<p>How do you ensure the template updates correctly after a property value change?</p>",
                                    "answerList": [
                                        "<pre data-language=\"plain\">\ngreeting.component.ts\n\nimport { Component } from &#39;@angular/core&#39;;\nimport { CommonModule } from &#39;@angular/common&#39;;\n\n@Component({\n  selector: &#39;app-greeting&#39;,\n  standalone: true,\n  imports: [CommonModule],\n  template: `\n    &lt;h2 class=&quot;greeting-message&quot;&gt;Hello, {{ name }}!&lt;/h2&gt;\n    &lt;input\n      type=&quot;text&quot;\n      class=&quot;name-input&quot;\n      [(ngModel)]=&quot;name&quot;\n      placeholder=&quot;Enter your name&quot;\n    /&gt;\n  `\n})\nexport class GreetingComponent {\n  name = &#39;Guest&#39;;\n}\n</pre></br></br><pre data-language=\"plain\">\ngreeting.component.spec.ts\n\nimport { ComponentFixture, TestBed } from &#39;@angular/core/testing&#39;;\nimport { FormsModule } from &#39;@angular/forms&#39;;\nimport { By } from &#39;@angular/platform-browser&#39;;\nimport { GreetingComponent } from &#39;./greeting.component&#39;;\n\ndescribe(&#39;GreetingComponent&#39;, () =&gt; {\n  let fixture: ComponentFixture&lt;GreetingComponent&gt;;\n  let component: GreetingComponent;\n\n  beforeEach(async () =&gt; {\n    await TestBed.configureTestingModule({\n      imports: [GreetingComponent, FormsModule]\n    }).compileComponents();\n\n    fixture = TestBed.createComponent(GreetingComponent);\n    component = fixture.componentInstance;\n    fixture.detectChanges(); // initial render\n  });\n\n  it(&#39;should update DOM when component property changes&#39;, () =&gt; {\n    // Arrange\n    component.name = &#39;Vivek&#39;;\n    \n    // Act\n    fixture.detectChanges(); // important to update template bindings\n    \n    // Assert\n    const messageEl: HTMLElement = fixture.nativeElement.querySelector(&#39;.greeting-message&#39;);\n    expect(messageEl.textContent).toContain(&#39;Hello, Vivek!&#39;);\n  });\n\n  it(&#39;should update component property when user types in input&#39;, () =&gt; {\n    // Arrange\n    const inputEl = fixture.debugElement.query(By.css(&#39;.name-input&#39;)).nativeElement as HTMLInputElement;\n    \n    // Act\n    inputEl.value = &#39;Rohit&#39;;\n    inputEl.dispatchEvent(new Event(&#39;input&#39;));\n    fixture.detectChanges();\n\n    // Assert\n    expect(component.name).toBe(&#39;Rohit&#39;);\n\n    const messageEl: HTMLElement = fixture.nativeElement.querySelector(&#39;.greeting-message&#39;);\n    expect(messageEl.textContent).toContain(&#39;Hello, Rohit!&#39;);\n  });\n});\n</pre>"
                                    ]
                                },
                                {
                                    "id": 101,
                                    "sectionId": 25,
                                    "question": "<p>How do you test the HTTP request and response?</p>",
                                    "answerList": [
                                        ""
                                    ]
                                },
                                {
                                    "id": 102,
                                    "sectionId": 25,
                                    "question": "<p>How do you mock the dependency?</p>",
                                    "answerList": [
                                        ""
                                    ]
                                }
                            ],
                            "subSections": []
                        }
                    ]
                },
                {
                    "subjectId": 1,
                    "sectionId": 26,
                    "rootId": 0,
                    "title": "<p><strong>angular.json file</strong></p>",
                    "qaData": [
                        {
                            "id": 103,
                            "sectionId": 26,
                            "question": "<p>When we create a component ‘<span style=\"background-color: rgb(187, 187, 187);\">ng generate component info</span>’, an app is getting added. From where the app is getting added?</p>",
                            "answerList": [
                                "<p>The <strong>app</strong> is added as a <strong>prefix</strong> because it&#39;s defined as the <strong>default prefix</strong> in the <strong>angular.json configuration</strong> under the <strong>project&#39;s settings</strong>.</p>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 1,
                    "sectionId": 27,
                    "rootId": 0,
                    "title": "<p><strong>Angular v14-19 Feature</strong></p>",
                    "qaData": [],
                    "subSections": [
                        {
                            "subjectId": 1,
                            "sectionId": 28,
                            "rootId": 27,
                            "title": "<p><strong>Angular 14 Features</strong></p>",
                            "qaData": [
                                {
                                    "id": 104,
                                    "sectionId": 28,
                                    "question": "<p>What are Angular standalone components and how do they differ from NgModules?</p>",
                                    "answerList": [
                                        "<p>Standalone <strong>components</strong> were introduced in <strong>Angular v14+</strong>. A standalone <strong>component</strong> can be defined by setting the flag <code><strong>standalone: true</strong></code> in the <strong>@Component</strong> decorator. These are <strong>self-contained components</strong>, which means any <strong>dependencies</strong> can be imported directly into the <strong>imports</strong> property.</p></br><p>Earlier, Angular used <code><strong>platformBrowserDynamic().bootstrapModule()</strong></code> to load a <strong>module</strong>, and then the <strong>AppComponent</strong> was loaded. In the case of <strong>lazy loading</strong>, Angular used <code><strong>loadChildren</strong></code> to load a <strong>module</strong>, and only then could we access its <strong>components</strong>. If I needed to use a <strong>component</strong> from another <strong>module</strong>, I first had to <strong>import the module</strong> before using the <strong>component</strong>.</p></br><p>With the introduction of <strong>standalone components</strong>, Angular now uses <code><strong>bootstrapApplication()</strong></code> to load the <strong>AppComponent</strong> directly. For <strong>lazy loading</strong>, Angular uses <code><strong>loadComponent()</strong></code> to load a <strong>component</strong> directly. If I need to use a <strong>component</strong> inside another <strong>component</strong>, I can <strong>import that component directly</strong> without needing its <strong>module</strong>. This removes the extra layer of <strong>NgModule</strong>, making <strong>Angular applications</strong> more <strong>lightweight</strong> and <strong>faster</strong>.</p>"
                                    ]
                                },
                                {
                                    "id": 105,
                                    "sectionId": 28,
                                    "question": "<p>Can standalone components be lazy-loaded?</p>",
                                    "answerList": [
                                        "<p>In <strong>Angular v14+</strong>, <strong>standalone components</strong> can be <strong>lazy-loaded</strong> directly using <code><strong>loadComponent</strong></code>, without needing to wrap them inside an <strong>NgModule</strong>.</p></br><pre data-language=\"plain\">\nimport { Routes } from &#39;@angular/router&#39;;\n\nconst routes: Routes = [\n  {\n    path: &#39;user&#39;,\n    loadComponent: () =&gt;\n      import(&#39;./user/user.component&#39;).then(m =&gt; m.UserComponent)\n  }\n];\n</pre></br>"
                                    ]
                                }
                            ],
                            "subSections": []
                        },
                        {
                            "subjectId": 1,
                            "sectionId": 29,
                            "rootId": 27,
                            "title": "<p><strong>Angular 15 Features</strong></p>",
                            "qaData": [],
                            "subSections": []
                        },
                        {
                            "subjectId": 1,
                            "sectionId": 30,
                            "rootId": 27,
                            "title": "<p><strong>Angular 16 Features</strong></p>",
                            "qaData": [
                                {
                                    "id": 106,
                                    "sectionId": 30,
                                    "question": "<p>Explain Signals in Angular.</p>",
                                    "answerList": [
                                        "<p><strong>Signals</strong> were introduced in <strong>Angular v16</strong>. A <strong>signal</strong> is a <strong>reactive model</strong> that <strong>stores a value</strong> and <strong>automatically updates the UI</strong> or <strong>triggers components</strong> when the value <strong>changes</strong>.</p></br><p><strong>Signals</strong> are handled using <code><strong>signal()</strong></code>, <code><strong>computed()</strong></code>, and <code><strong>effect()</strong></code>.</p></br><ul><li><code><strong>signal()</strong></code> creates a <strong>reactive value</strong>.</li><li><code><strong>computed()</strong></code> derives <strong>values</strong> based on other <strong>signals</strong>.</li><li><code><strong>effect()</strong></code> runs <strong>side effects</strong> when <strong>signals change</strong>.</li></ul></br><p>A <strong>reactive model</strong> is a way of <strong>managing</strong> and <strong>updating application state automatically</strong> when the <strong>underlying data changes</strong>.</p>"
                                    ]
                                },
                                {
                                    "id": 107,
                                    "sectionId": 30,
                                    "question": "<p>How do they differ from RxJS Observables?</p>",
                                    "answerList": [
                                        "<p><strong>Signals</strong> are <strong>synchronous</strong>, <strong>stateful</strong>, and always hold the <strong>current value</strong>, making them ideal for <strong>local component state</strong> and <strong>fine-grained reactivity</strong>.</p></br><p><strong>Observables</strong> are <strong>asynchronous streams</strong> that can <strong>emit multiple values</strong> over time, suited for handling <strong>async events</strong>, <strong>APIs</strong>, and <strong>complex transformations</strong> using <strong>RxJS operators</strong>.</p>"
                                    ]
                                },
                                {
                                    "id": 108,
                                    "sectionId": 30,
                                    "question": "<p>Can signals replace NgRx? In which scenarios would you still prefer NgRx?</p>",
                                    "answerList": [
                                        "<p><strong>Signals</strong> are great for <strong>local</strong>, <strong>component-level state</strong> and <strong>simple reactive patterns</strong> (e.g., <strong>form states</strong>, <strong>UI toggles</strong>, <strong>derived values</strong>).</p></br><p>Use <strong>NgRx</strong> when the app grows <strong>large</strong>, needs <strong>global consistency</strong>, <strong>scalability</strong>, or <strong>complex side effects</strong>.</p>"
                                    ]
                                },
                                {
                                    "id": 109,
                                    "sectionId": 30,
                                    "question": "<p>What are declarative destroy hooks?</p>",
                                    "answerList": [
                                        "<p><strong>Declarative destroy hooks</strong> are <strong>Angular’s new way</strong> to automatically handle <strong>cleanup</strong> (like <strong>unsubscribing from Observables</strong>) when a <strong>component</strong> or <strong>directive</strong> is <strong>destroyed</strong>, reducing <strong>boilerplate</strong> and avoiding <strong>memory leaks</strong>.</p></br><pre data-language=\"plain\">\nimport { Component, effect, inject, DestroyRef } from &#39;@angular/core&#39;;\nimport { takeUntilDestroyed } from &#39;@angular/core/rxjs-interop&#39;;\n\nconstructor() {\n    // ✅ RxJS cleanup automatically\n    interval(1000)\n      .pipe(takeUntilDestroyed())\n      .subscribe(val =&gt; console.log(&#39;Interval:&#39;, val));\n\n    // ✅ Signals/effect cleanup automatically\n    effect(() =&gt; {\n      console.log(&#39;Effect running&#39;);\n    }, { injector: inject(DestroyRef) });\n}\n</pre></br>"
                                    ]
                                }
                            ],
                            "subSections": []
                        }
                    ]
                },
                {
                    "subjectId": 1,
                    "sectionId": 31,
                    "rootId": 0,
                    "title": "<p><strong>Angular related other questions</strong></p>",
                    "qaData": [],
                    "subSections": [
                        {
                            "subjectId": 1,
                            "sectionId": 32,
                            "rootId": 31,
                            "title": "<p><strong>Tokens</strong></p>",
                            "qaData": [
                                {
                                    "id": 110,
                                    "sectionId": 32,
                                    "question": "<p>What are authorization tokens in angular?</p>",
                                    "answerList": [
                                        "<p><strong>Authorization Tokens: </strong></p><p>Authorization tokens are <strong>pieces of data (usually a string)</strong> issued by the server that prove a user is <strong>authenticated</strong> and has permission to access certain resources.</p></br><p><strong>Common Types:</strong></p><ol><li><strong>JWT (JSON Web Token)</strong> – Encodes user info and expiry time.</li><li><strong>OAuth Tokens</strong> – Access tokens issued by OAuth providers.</li><li><strong>Custom tokens</strong> – Sometimes generated by your backend.</li></ol></br></br>"
                                    ]
                                },
                                {
                                    "id": 111,
                                    "sectionId": 32,
                                    "question": "<p>Do you have any idea about bearer token and JWT token?</p>",
                                    "answerList": [
                                        "<p>A <strong>Bearer Token</strong> is used for <strong>authorization</strong>, while a <strong>JWT token</strong> can be used for both <strong>authorization</strong> and carrying <strong>user data/claims</strong>.</p>"
                                    ]
                                }
                            ],
                            "subSections": []
                        },
                        {
                            "subjectId": 1,
                            "sectionId": 33,
                            "rootId": 31,
                            "title": "<p><strong>Restful API</strong></p>",
                            "qaData": [
                                {
                                    "id": 112,
                                    "sectionId": 33,
                                    "question": "<p>What is a Restful API?</p>",
                                    "answerList": [
                                        "<p>A <strong>REST API</strong> (Representational State Transfer Application Programming Interface) is a way for two systems (such as a <strong>frontend app</strong> and a <strong>backend server</strong>) to communicate over the Internet using standard <strong>HTTP methods</strong>.</p></br><p><strong>Common HTTP methods:</strong></p><ul><li><strong>GET</strong> → Retrieve data</li><li><strong>POST</strong> → Create new data</li><li><strong>PUT / PATCH</strong> → Update existing data</li><li><strong>DELETE</strong> → Remove data</li></ul>"
                                    ]
                                }
                            ],
                            "subSections": []
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "title": "NgRx",
            "description": "",
            "sections": [
                {
                    "subjectId": 2,
                    "sectionId": 34,
                    "rootId": 0,
                    "title": "<p><strong>Basic</strong></p>",
                    "qaData": [
                        {
                            "id": 113,
                            "sectionId": 34,
                            "question": "<p>What is NgRx in Angular?</p>",
                            "answerList": [
                                "<p><strong>NgRx</strong> in <strong>Angular</strong> is a <strong>state management library</strong> built on top of <strong>RxJS</strong> (<em>Reactive Extensions for JavaScript</em>).</p></br><p> It helps manage and maintain the <strong>application state</strong> in a <strong>predictable</strong> (easy to understand and debug) and <strong>scalable</strong> (grow with your application without becoming messy) way, especially useful in <strong>large Angular applications</strong> where multiple components interact with <strong>shared data</strong>.</p></br><p>It follows the <strong>Redux pattern</strong> (<strong>single store</strong>, <strong>unidirectional data flow</strong>, <strong>immutability</strong>), but implemented with <strong>Angular</strong> and <strong>RxJS</strong>.</p></br><p>It uses <strong>Actions</strong>, <strong>Reducers</strong>, <strong>Selectors</strong>, and <strong>Effects</strong> to manage and handle <strong>application state</strong> and <strong>side effects</strong> like <strong>API calls</strong>.</p>"
                            ]
                        },
                        {
                            "id": 114,
                            "sectionId": 34,
                            "question": "<p>How does NgRx handle immutability?</p>",
                            "answerList": [
                                "<p><strong>NgRx</strong> handles <strong>immutability</strong> by using <strong>pure functions</strong> (<strong>reducers</strong>) that return <strong>new state objects</strong> instead of modifying the <strong>existing state</strong> directly.</p>"
                            ]
                        }
                    ],
                    "subSections": [
                        {
                            "subjectId": 2,
                            "sectionId": 35,
                            "rootId": 34,
                            "title": "<p><strong>NgRx Flow</strong></p>",
                            "qaData": [
                                {
                                    "id": 115,
                                    "sectionId": 35,
                                    "question": "<p>Can you explain NgRx Flow (Redux Pattern in Angular)?</p>",
                                    "answerList": [
                                        "<h3><strong>NgRx Flow (Redux Pattern in Angular)</strong></h3><ol><li><strong>Component Dispatches an Action</strong><ul><li>When something happens in the app (user click, API call, form submit), the <strong>component dispatches an Action</strong>.</li><li>Example: <code>store.dispatch(loadUsers())</code>.</li></ul></li><li><strong>Action Travels to Reducer</strong><ul><li><strong>Reducer</strong> is a <strong>pure function</strong> that receives the <strong>current state</strong> and the <strong>action</strong>.</li><li>It returns a <strong>new state</strong> based on the action.</li><li>No side effects (API calls, async logic) happen here.</li></ul></li><li><strong>State Updates in Store</strong><ul><li>The <strong>Store</strong> holds the <strong>application state</strong>.</li><li>When the reducer returns a <strong>new state</strong>, the store is <strong>updated immutably</strong>.</li></ul></li><li><strong>Selectors Read State</strong><ul><li>Components don’t read state directly from the store object.</li><li>Instead, they use <strong>Selectors</strong> to get <strong>slices of state</strong> efficiently and reactively.</li><li>Example: <code>store.select(getAllUsers)</code>.</li></ul></li><li><strong>Effects Handle Side Effects</strong><ul><li>Any <strong>side effects</strong> (API calls, logging, navigation) are handled by <strong>Effects</strong>.</li><li>Effects <strong>listen to actions</strong>, perform async operations, and then <strong>dispatch new actions</strong> based on results.</li><li>This keeps <strong>components</strong> and <strong>reducers</strong> clean and focused on pure logic.</li></ul></li></ol></br><h3><strong>Flow Diagram (simplified)</strong></h3><pre data-language=\"plain\">\n\n[Component] --dispatch--&gt; [Action] \n    |                           |\n    v                           v\n[Effect] --async tasks--&gt; [Action Success/Failure] --&gt; [Reducer] --&gt; [Store updated]\n    ^\n    |\n[Selectors] &lt;--component subscribes-- \n</pre></br>"
                                    ]
                                }
                            ],
                            "subSections": []
                        }
                    ]
                },
                {
                    "subjectId": 2,
                    "sectionId": 36,
                    "rootId": 0,
                    "title": "<p><strong>key concept of NgRx</strong></p>",
                    "qaData": [
                        {
                            "id": 116,
                            "sectionId": 36,
                            "question": "<p>What is ‘store’ in NgRx?</p>",
                            "answerList": [
                                "<p>The <strong>Store</strong> in <strong>NgRx</strong> is a <strong>centralized state management container</strong> for Angular applications. It holds the entire <strong>application state</strong> in a <strong>single tree structure</strong>, following the <strong>Redux pattern</strong> and <strong>RxJS observables</strong>.</p></br><ul><li>The <strong>Store</strong> is <strong>read-only</strong> → components cannot directly modify it.</li><li>To <strong>update the state</strong>, we <strong>dispatch actions</strong>, which are processed by <strong>reducers</strong> to create a <strong>new immutable state</strong>.</li><li>Components can then subscribe to <strong>selectors</strong> to <strong>read slices of state</strong> in a <strong>reactive way</strong>.</li></ul>"
                            ]
                        },
                        {
                            "id": 117,
                            "sectionId": 36,
                            "question": "<p>What is ‘Actions’ in NgRx?</p>",
                            "answerList": [
                                "<p><strong>Actions</strong> are <strong>plain TypeScript objects</strong>, and they are the <strong>only way</strong> to express that <strong>something happened</strong> (e.g., a <strong>user clicked a button</strong>, <strong>data loaded</strong> from an <strong>API</strong>, or a <strong>login failed</strong>).</p>"
                            ]
                        },
                        {
                            "id": 118,
                            "sectionId": 36,
                            "question": "<p>What is ‘Reducer’ in NgRx?</p>",
                            "answerList": [
                                "<p>In <strong>NgRx</strong>, a <strong>Reducer</strong> is a <strong>pure function</strong> that takes the <strong>current state</strong> and an <strong>action</strong>, then returns a <strong>new state</strong>.</p>"
                            ]
                        },
                        {
                            "id": 119,
                            "sectionId": 36,
                            "question": "<p>What is ‘Selectors’ in NgRx?</p>",
                            "answerList": [
                                "<p>In <strong>NgRx</strong>, <strong>Selectors</strong> are <strong>functions</strong> used to query <strong>slices of state</strong> from the <strong>Store</strong>.</p><p> They make it <strong>easier</strong>, <strong>reusable</strong>, and <strong>efficient</strong> to get <strong>data</strong> from the <strong>state</strong>.</p>"
                            ]
                        },
                        {
                            "id": 120,
                            "sectionId": 36,
                            "question": "<p>What are ‘effects’ in NgRx?</p>",
                            "answerList": [
                                "<p>In <strong>NgRx</strong>, <strong>Effects</strong> handle <strong>side effects</strong> like <strong>API calls</strong>, <strong>logging</strong>, or any <strong>async operations</strong> outside the <strong>component</strong>.</p></br><p>They <strong>listen</strong> to <strong>actions</strong>, perform <strong>tasks</strong> (e.g., <strong>HTTP requests</strong>), and then <strong>dispatch</strong> new <strong>actions</strong> based on the <strong>result</strong> (<strong>success</strong> or <strong>failure</strong>).</p><p>This keeps <strong>components</strong> and <strong>reducers</strong> <strong>clean</strong> and focused on <strong>pure logic</strong>.</p><p><strong>Side effects</strong> = anything outside <strong>reducers</strong> that can’t be <strong>pure</strong>, like:</p><ul><li><strong>API calls</strong> (<strong>HTTP requests</strong>)</li><li><strong>Navigation</strong> (<strong>Router</strong>)</li><li><strong>Local storage updates</strong></li><li><strong>Logging / Notifications</strong></li></ul>"
                            ]
                        }
                    ],
                    "subSections": []
                }
            ]
        },
        {
            "id": 3,
            "title": "RxJS",
            "description": "",
            "sections": [
                {
                    "subjectId": 3,
                    "sectionId": 37,
                    "rootId": 0,
                    "title": "<p><strong>Basic</strong></p>",
                    "qaData": [
                        {
                            "id": 121,
                            "sectionId": 37,
                            "question": "<p><strong>What is RxJS?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 122,
                            "sectionId": 37,
                            "question": "<p><strong>What are observables in Angular?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 123,
                            "sectionId": 37,
                            "question": "<p><strong>How do RxJS differ from promises?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 124,
                            "sectionId": 37,
                            "question": "<p><strong>Why is RxJS used in Angular?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 125,
                            "sectionId": 37,
                            "question": "<p><strong>If Observables are more powerful than Promises, then why do we still use Promises?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 126,
                            "sectionId": 37,
                            "question": "<p><strong>How do you subscribe to an Observable? How do you unsubscribe?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 127,
                            "sectionId": 37,
                            "question": "<p><strong>What is the use of pipe() in RxJS?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 128,
                            "sectionId": 37,
                            "question": "<p><strong>How to chain HTTP calls in sequence using RxJS?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 129,
                            "sectionId": 37,
                            "question": "<p><strong>What is the difference between tap and map?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 130,
                            "sectionId": 37,
                            "question": "<p><strong>How do you handle memory leaks with Observables?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 131,
                            "sectionId": 37,
                            "question": "<p><strong>Can you explain five RxJS operators with example?</strong></p>",
                            "answerList": [
                                "<p><strong>Creation Operators</strong> are used to create new Observables from scratch or from various sources, such as:</p><ul><li><strong>of()</strong> → creates an observable from a value.</li><li><strong>from()</strong> → creates an observable from an array or a promise.</li><li><strong>fromEvent()</strong> → creates an observable from a DOM event.</li></ul><p><strong>Transformation Operators</strong> are used to transform data emitted by an observable, such as:</p><ul><li><strong>switchMap()</strong> → cancels the previous observable if a new value is emitted.</li><li><strong>mergeMap()</strong> → runs multiple observables in parallel and subscribes to all of them concurrently.</li><li><strong>concatMap()</strong> → waits for each observable to complete before moving to the next.</li><li><strong>exhaustMap()</strong> → ignores new emissions from the source until the current inner observable completes.</li></ul><p><strong>Filtering Operators</strong> are used to filter emitted values based on conditions, such as:</p><ul><li><strong>take(n)</strong> → emits only the first <em>n</em> values and then completes.</li><li><strong>takeUntil()</strong> → unsubscribes from the source observable when a notifier observable emits.</li><li><strong>skip(n)</strong> → ignores the first <em>n</em> emitted values and emits the rest.</li></ul><p><strong>Combination Operators</strong> are used to combine multiple observables into one, such as:</p><ul><li><strong>combineLatest()</strong> → emits the latest values from multiple observables whenever any of them emits.</li><li><strong>forkJoin()</strong> → emits the last value from each observable once all have completed.</li></ul>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 3,
                    "sectionId": 38,
                    "rootId": 0,
                    "title": "<p><strong>Subject, BehaviorSubject, ReplaySubject, and AsyncSubject</strong></p>",
                    "qaData": [
                        {
                            "id": 132,
                            "sectionId": 38,
                            "question": "<p><strong>What is the difference between Subject, BehaviorSubject, ReplaySubject, and AsyncSubject in RxJS? Can you give a scenario where each would be most appropriate?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 3,
                    "sectionId": 39,
                    "rootId": 0,
                    "title": "<p><strong>Types of observable</strong></p>",
                    "qaData": [
                        {
                            "id": 133,
                            "sectionId": 39,
                            "question": "<p><strong>Can you explain types of  operators in sort?</strong></p>",
                            "answerList": [
                                "<p><strong>Creation Operators</strong> are used to create new Observables from scratch or from various sources, such as:</p><ul><li><strong>of()</strong> → creates an observable from a value.</li><li><strong>from()</strong> → creates an observable from an array or a promise.</li><li><strong>fromEvent()</strong> → creates an observable from a DOM event.</li></ul><p><strong>Transformation Operators</strong> are used to transform data emitted by an observable, such as:</p><ul><li><strong>switchMap()</strong> → cancels the previous observable if a new value is emitted.</li><li><strong>mergeMap()</strong> → runs multiple observables in parallel and subscribes to all of them concurrently.</li><li><strong>concatMap()</strong> → waits for each observable to complete before moving to the next.</li><li><strong>exhaustMap()</strong> → ignores new emissions from the source until the current inner observable completes.</li></ul><p><strong>Filtering Operators</strong> are used to filter emitted values based on conditions, such as:</p><ul><li><strong>take(n)</strong> → emits only the first <em>n</em> values and then completes.</li><li><strong>takeUntil()</strong> → unsubscribes from the source observable when a notifier observable emits.</li><li><strong>skip(n)</strong> → ignores the first <em>n</em> emitted values and emits the rest.</li></ul><p><strong>Combination Operators</strong> are used to combine multiple observables into one, such as:</p><ul><li><strong>combineLatest()</strong> → emits the latest values from multiple observables whenever any of them emits.</li><li><strong>forkJoin()</strong> → emits the last value from each observable once all have completed.</li></ul></br>"
                            ]
                        }
                    ],
                    "subSections": [
                        {
                            "subjectId": 3,
                            "sectionId": 40,
                            "rootId": 39,
                            "title": "<p><strong>Creation Operators</strong></p>",
                            "qaData": [
                                {
                                    "id": 134,
                                    "sectionId": 40,
                                    "question": "<p><strong>What are creation operators in RxJS?</strong></p>",
                                    "answerList": [
                                        ""
                                    ]
                                }
                            ],
                            "subSections": []
                        },
                        {
                            "subjectId": 3,
                            "sectionId": 41,
                            "rootId": 39,
                            "title": "<p><strong>Transformation Operators</strong></p>",
                            "qaData": [
                                {
                                    "id": 135,
                                    "sectionId": 41,
                                    "question": "<p><strong>What are Transformation operators in RxJS?</strong></p>",
                                    "answerList": [
                                        ""
                                    ]
                                }
                            ],
                            "subSections": []
                        },
                        {
                            "subjectId": 3,
                            "sectionId": 42,
                            "rootId": 39,
                            "title": "<p><strong>Filter Operators</strong></p>",
                            "qaData": [
                                {
                                    "id": 136,
                                    "sectionId": 42,
                                    "question": "<p><strong>What are filter operators in RxJS</strong></p>",
                                    "answerList": [
                                        ""
                                    ]
                                }
                            ],
                            "subSections": []
                        },
                        {
                            "subjectId": 3,
                            "sectionId": 43,
                            "rootId": 39,
                            "title": "<p><strong>Combination Operators</strong></p>",
                            "qaData": [
                                {
                                    "id": 137,
                                    "sectionId": 43,
                                    "question": "<p><strong>What are combination operators in RxJS?</strong></p>",
                                    "answerList": [
                                        ""
                                    ]
                                }
                            ],
                            "subSections": []
                        }
                    ]
                }
            ]
        },
        {
            "id": 4,
            "title": "JavaScript",
            "description": "",
            "sections": [
                {
                    "subjectId": 4,
                    "sectionId": 44,
                    "rootId": 0,
                    "title": "<p><strong>Basic</strong></p>",
                    "qaData": [
                        {
                            "id": 138,
                            "sectionId": 44,
                            "question": "<p>What is JavaScript?</p>",
                            "answerList": [
                                "<p>JavaScript (often abbreviated as <strong>JS</strong>) is a <strong>high-level, interpreted programming language</strong> that is widely used to make web pages interactive and dynamic.</p></br><p>It runs in the browser using engines like <strong>V8 (Chrome)</strong> or <strong>SpiderMonkey (Firefox)</strong>, and can also run on servers via <strong>Node.js</strong>. With JavaScript, developers can manipulate the <strong>DOM</strong>, handle <strong>events</strong>, perform <strong>asynchronous operations</strong> (AJAX, Fetch, Promises, async/await), and build <strong>full-stack applications</strong>.</p>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 4,
                    "sectionId": 45,
                    "rootId": 0,
                    "title": "<p><strong>Closure</strong></p>",
                    "qaData": [
                        {
                            "id": 139,
                            "sectionId": 45,
                            "question": "<p>What is closures in JavaScript?</p>",
                            "answerList": [
                                "<p><strong>Closures</strong> in <strong>JavaScript</strong> are a <strong>powerful feature</strong> that allows <strong>inner functions</strong> to access the <strong>scope</strong> of their <strong>outer (enclosing) functions</strong>, even after the <strong>outer function</strong> has <strong>finished executing</strong>.</p></br><p><strong>Main uses of closures in JavaScript:</strong></p><ul><li>Data Privacy / Encapsulation</li><li>Maintaining State</li><li>Callbacks &amp; Event Handlers</li><li>Function Factories</li><li>Module Pattern</li></ul>"
                            ]
                        },
                        {
                            "id": 140,
                            "sectionId": 45,
                            "question": "<p>Can you implement increment and decrement count in closures in Angular?</p>",
                            "answerList": [
                                "<pre data-language=\"plain\">\nts file\n\nincrement!: () =&gt; void;\ndecrement!: () =&gt; void;\n\nconstructor() {}\n\nngOnInit() {\n  const counter = this.createCounterHandler();\n  this.increment = counter.increment;\n  this.decrement = counter.decrement;\n}\n\ncreateCounterHandler() {\n  let count = 0;\n\n  return {\n    increment: () =&gt; {\n      count++;\n      console.log(count);\n    },\n    decrement: () =&gt; {\n      count--;\n      console.log(count);\n    }\n  };\n}\n</pre></br></br><pre data-language=\"plain\">\nhtml file\n\n&lt;div&gt;\n  &lt;button (click)=&quot;increment()&quot;&gt;Increment&lt;/button&gt;\n  &lt;button (click)=&quot;decrement()&quot;&gt;Decrement&lt;/button&gt;\n&lt;/div&gt;\n</pre></br>"
                            ]
                        },
                        {
                            "id": 141,
                            "sectionId": 45,
                            "question": "<p>Can you implement increment and decrement count in closures in JavaScript?</p>",
                            "answerList": [
                                "<pre data-language=\"plain\">\nhtml\n\n&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n\n&lt;head&gt;\n  &lt;meta charset=&quot;UTF-8&quot;&gt;\n  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;\n  &lt;title&gt;Click Counter&lt;/title&gt;\n&lt;/head&gt;\n\n&lt;body&gt;\n  &lt;button id=&quot;incBtn&quot;&gt;Increment&lt;/button&gt;\n  &lt;button id=&quot;decBtn&quot;&gt;Decrement&lt;/button&gt;\n\n  &lt;script src=&quot;./index.js&quot;&gt;&lt;/script&gt;\n&lt;/body&gt;\n\n&lt;/html&gt;\n</pre></br><pre data-language=\"plain\">\nJavaScript\n\nfunction setupClickTracker(incrementBtnId, decrementBtnId) {\n  let clickCount = 0;\n\n  document.getElementById(incrementBtnId).addEventListener(&quot;click&quot;, function () {\n    clickCount++;\n    console.log(&quot;Count:&quot;, clickCount);\n  });\n\n  document.getElementById(decrementBtnId).addEventListener(&quot;click&quot;, function () {\n    clickCount--;\n    console.log(&quot;Count:&quot;, clickCount);\n  });\n}\n\nsetupClickTracker(&quot;incBtn&quot;, &quot;decBtn&quot;);\n</pre></br></br>"
                            ]
                        },
                        {
                            "id": 142,
                            "sectionId": 45,
                            "question": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Explain the setTimeout in clouser.</span></p>",
                            "answerList": [
                                "<pre data-language=\"plain\">\nfunction x() {\n    for (var i = 1; i &lt;= 5; i++) {\n        setTimeout(function() {\n            console.log(i);\n        }, i * 1000);\n    }\n}\nx(); // O/P: 6 6 6 6 6\n</pre></br><p><strong>Explain: </strong><code>var</code> is function-scoped, so all iterations share the same <code>i</code>. By the time the <code>setTimeout</code> callbacks execute, the loop has finished, and <code>i</code> is 6. That’s why the output is <code>6 6 6 6 6</code>.</p></br><pre data-language=\"plain\">\nfunction x() {\n    for (let i = 1; i &lt;= 5; i++) {\n        setTimeout(function() {\n            console.log(i);\n        }, i * 1000);\n    }\n}\nx(); // O/P: 1 2 3 4 5\n</pre></br><p><strong>Explain:</strong> When we use <code>let</code>, each iteration has its own <strong>block-scoped </strong><code><strong>i</strong></code>. So, when the <code>setTimeout</code> callbacks run, they print the correct values (1–5).</p></br><pre data-language=\"plain\">\nfunction x() {\n    for (var i = 1; i &lt;= 5; i++) {\n        function close(x) {\n            setTimeout(function() {\n                console.log(x);\n            }, x * 1000);\n        }\n        close(i);\n    }\n}\nx();\n</pre></br><p><strong>Explain:</strong> For each iteration, when the <code>close</code> function is called, it creates a new local execution context. By the time the <code>setTimeout</code> callbacks execute, each one has its own separate copy of <code>i</code> (passed as <code>x</code>). Therefore, the result will be <code>1 2 3 4 5</code>.</p>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 4,
                    "sectionId": 46,
                    "rootId": 0,
                    "title": "<p><strong>Hoisting</strong></p>",
                    "qaData": [
                        {
                            "id": 143,
                            "sectionId": 46,
                            "question": "<p>What is Hoisting in JavaScript?</p>",
                            "answerList": [
                                "<p>In JavaScript, <strong>hoisting</strong> is a phenomenon in which variables and function declarations are moved to the top of their scope during the compilation phase.</p>"
                            ]
                        },
                        {
                            "id": 144,
                            "sectionId": 46,
                            "question": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">What is the Temporal Dead Zone?</span></p>",
                            "answerList": [
                                "<p>The <strong>Temporal Dead Zone (TDZ)</strong> is the period between when a <code><strong>let</strong></code> or <code><strong>const</strong></code> variable is <strong>hoisted</strong> (memory allocated) and when it is <strong>initialized</strong> at its <strong>declaration line</strong>.</p><p> During this period, accessing the variable will throw a <strong>ReferenceError</strong>.</p>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 4,
                    "sectionId": 47,
                    "rootId": 0,
                    "title": "<p><strong>Promise</strong></p>",
                    "qaData": [
                        {
                            "id": 145,
                            "sectionId": 47,
                            "question": "<p>What are Promises in JavaScript?</p>",
                            "answerList": [
                                "<p>A <strong>Promise</strong> in <strong>JavaScript</strong> is an <strong>object</strong> that represents the eventual <strong>success</strong> or <strong>failure</strong> of an <strong>asynchronous operation</strong>. It has three <strong>states</strong>: <strong>Pending</strong>, <strong>Fulfilled</strong>, and <strong>Rejected</strong>.</p></br><p><strong>Promises</strong> provide a structured way to write <strong>asynchronous code</strong> using <code><strong>.then()</strong></code> for <strong>success</strong> and <code><strong>.catch()</strong></code> for <strong>error handling</strong>.</p></br><p><strong>Pending</strong> state is the <strong>initial state</strong>. The <strong>operation</strong> is still ongoing, and the <strong>result</strong> is not yet available.</p><p> In the <strong>Fulfilled</strong> state, the <strong>asynchronous operation</strong> completes <strong>successfully</strong> and returns a <strong>result</strong> (via <code><strong>.then()</strong></code>).</p><p> In the <strong>Rejected</strong> state, the <strong>asynchronous operation</strong> <strong>fails</strong> and returns an <strong>error</strong> (via <code><strong>.catch()</strong></code>).</p>"
                            ]
                        },
                        {
                            "id": 146,
                            "sectionId": 47,
                            "question": "<p>Can you explain the Promise chain?</p>",
                            "answerList": [
                                "<p><strong>Promise chaining</strong> is a <strong>technique</strong> where we attach multiple <code><strong>.then()</strong></code> calls to a <strong>Promise</strong> so that <strong>asynchronous operations</strong> are executed in <strong>sequence</strong>, one after the other. Each <code><strong>.then()</strong></code> can return a <strong>value</strong> or another <strong>Promise</strong>.</p></br><p><strong>Example 1:</strong></p></br><pre data-language=\"plain\">\nconst fetchNumber = () =&gt; {\n  return new Promise((resolve, reject) =&gt; {\n    setTimeout(() =&gt; resolve(5), 1000);\n  });\n};\n\nfetchNumber()\n  .then(num =&gt; {\n    console.log(&quot;First then:&quot;, num); // 5\n    return num * 2;\n  })\n  .then(num =&gt; {\n    console.log(&quot;Second then:&quot;, num); // 10\n    return num + 3;\n  })\n  .then(num =&gt; {\n    console.log(&quot;Third then:&quot;, num); // 13\n  })\n  .catch(err =&gt; {\n    console.error(&quot;Error:&quot;, err);\n  });\n</pre></br><p><strong>Example 2:</strong></p></br><pre data-language=\"plain\">\nconst fetchData = (id) =&gt; {\n    return new Promise((resolve) =&gt; {\n        setTimeout(() =&gt; resolve({id: id, user: &#39;User &#39; + id}));\n    });\n};\n\nfetchData(1).then(user =&gt; {\n   console.log(&quot;User fetched:&quot;, user); // User fetched: { id: 1, user: &#39;User 1&#39; }\n   return fetchData(user.id + 1);\n})\n.then(user =&gt; {\n    console.log(&quot;Next user fetched:&quot;, user); // Next user fetched: { id: 2, user: &#39;User 2&#39; }\n});\n</pre></br>"
                            ]
                        },
                        {
                            "id": 147,
                            "sectionId": 47,
                            "question": "<p>Can you explain Promise APIs | all, allSettled, race, any</p>",
                            "answerList": [
                                "<p><strong>Parallel Promises</strong>: There are following <strong>methods</strong> to run <strong>Promises</strong> in <strong>parallel</strong>:</p><ul><li><strong>Promise.all()</strong>: Waits for <strong>all promises</strong> to <strong>fulfill</strong> or <strong>reject immediately</strong> on any <strong>failure</strong>.</li><li><strong>Promise.allSettled()</strong>: Waits for <strong>all promises</strong>, regardless of <strong>success/failure</strong>.</li><li><strong>Promise.race()</strong>: <strong>Resolves/rejects</strong> as soon as the <strong>first promise</strong> settles.</li><li><strong>Promise.any()</strong>: <strong>Resolves</strong> when <strong>any one promise</strong> fulfills; <strong>rejects</strong> only if <strong>all fail</strong>.</li></ul></br>"
                            ]
                        },
                        {
                            "id": 148,
                            "sectionId": 47,
                            "question": "<p>How do Promises differ from callbacks?</p>",
                            "answerList": [
                                "<p><strong>Callbacks</strong> are <strong>functions</strong> passed as <strong>arguments</strong> to handle <strong>asynchronous operations</strong>, but can lead to <strong>&quot;callback hell&quot;</strong>.</p></br><p>A <strong>Promise</strong> in <strong>JavaScript</strong> is an <strong>object</strong> that represents the eventual <strong>success</strong> or <strong>failure</strong> of an <strong>asynchronous operation</strong>. <strong>Promises</strong> provide <code><strong>.then()</strong></code> for <strong>success</strong> and <code><strong>.catch()</strong></code> for <strong>error handling</strong>.</p></br><p><strong>Promises</strong> provide <strong>better error handling</strong> and avoid <strong>deeply nested callbacks</strong>.</p>"
                            ]
                        },
                        {
                            "id": 149,
                            "sectionId": 47,
                            "question": "<p>Can you write a simple example of creating and using a Promise?</p>",
                            "answerList": [
                                "<pre data-language=\"plain\">\n// Creating a Promise that resolves after 2 seconds\n\nconst myPromise = new Promise((resolve, reject) =&gt; {\n  setTimeout(() =&gt; {\n    const success = true; // change to false to test rejection\n    if (success) {\n      resolve(&#39;Operation successful!&#39;);\n    } else {\n      reject(&#39;Operation failed!&#39;);\n    }\n  }, 2000);\n});\n\n// Using the Promise\n\nmyPromise\n  .then((message) =&gt; {\n    console.log(message);  // Runs if resolved\n  })\n  .catch((error) =&gt; {\n    console.error(error);  // Runs if rejected\n  });\n</pre>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 4,
                    "sectionId": 48,
                    "rootId": 0,
                    "title": "<p><strong>Arrow function</strong></p>",
                    "qaData": [
                        {
                            "id": 150,
                            "sectionId": 48,
                            "question": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">What are arrow functions in JavaScript?</span></p>",
                            "answerList": [
                                "<p><strong>Arrow functions</strong> in <strong>JavaScript</strong> are a <strong>concise syntax</strong> for writing <strong>functions</strong> introduced in <strong>ES6</strong>. They look like this:</p></br><pre data-language=\"plain\">\nconst add = (a, b) =&gt; a + b;\n</pre></br>"
                            ]
                        },
                        {
                            "id": 151,
                            "sectionId": 48,
                            "question": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">How do arrow function differ from regular functions?</span></p>",
                            "answerList": [
                                "<p><strong>Regular functions</strong> have a <code><strong>this</strong></code> value. It depends on <strong>how the function is called</strong>, whereas <strong>arrow functions</strong> do not have their own <code><strong>this</strong></code> value. They <strong>inherit </strong><code><strong>this</strong></code> from their surrounding (<strong>lexical scope</strong>).</p></br><pre data-language=\"plain\">\nconst obj = {\n  value: 10,\n  regularFunc: function() {\n    console.log(this.value); // &#39;this&#39; refers to obj\n  },\n  arrowFunc: () =&gt; {\n    console.log(this.value); // &#39;this&#39; refers to outer scope (e.g., window in browser)\n  }\n};\n\nobj.regularFunc(); // Output: 10\nobj.arrowFunc();   // Output: undefined\n</pre></br><p>We can use <code><strong>arguments</strong></code> in <strong>regular functions</strong>. It gives access to all <strong>passed arguments</strong>, whereas <strong>arrow functions</strong> do not have <code><strong>arguments</strong></code>. <strong>Rest parameters (</strong><code><strong>...args</strong></code><strong>)</strong> can be used instead.</p></br></br><p>A <strong>regular function</strong> can be used as a <strong>constructor</strong> with the <code><strong>new</strong></code> keyword that creates <strong>instances</strong>, whereas an <strong>arrow function</strong> cannot be used as a <strong>constructor</strong>.</p></br><p>// Correct: Regular function as constructor</p><p>function Person(name) {</p><p>  this.name = name;</p><p>}</p><p>const p = new Person(&quot;Vivek&quot;);</p><p>console.log(p.name); // &quot;Vivek&quot;</p></br><pre data-language=\"plain\">\n// ❌ Incorrect: Arrow function cannot be used as constructor\nconst PersonArrow = (name) =&gt; {\n  this.name = name;\n};\nconst p2 = new PersonArrow(&quot;Vivek&quot;); // TypeError\n</pre></br>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 4,
                    "sectionId": 49,
                    "rootId": 0,
                    "title": "<p><strong>Coding: Find Result and Explain</strong></p>",
                    "qaData": [],
                    "subSections": [
                        {
                            "subjectId": 4,
                            "sectionId": 50,
                            "rootId": 49,
                            "title": "<p><strong>Find Result and explain it.</strong></p>",
                            "qaData": [
                                {
                                    "id": 152,
                                    "sectionId": 50,
                                    "question": "<pre data-language=\"plain\">\nconsole.log(&quot;Start&quot;);\n\nsetTimeout(() =&gt; {\n    console.log(&quot;Settimeout executed&quot;); \n});\n\nconst myPromise = new Promise((resolve) =&gt; {\n    resolve(&quot;Resolve Promise&quot;); \n});\n\nmyPromise.then((res) =&gt; {\n    console.log(res); \n});\n\nconsole.log(&quot;End&quot;);\n</pre>",
                                    "answerList": [
                                        "<p><code>console.log(&quot;start&quot;)</code> runs immediately because it’s synchronous.</p><p> <code>setTimeout</code> is asynchronous, so its callback is scheduled in the <strong>macro task queue</strong>.</p><p> The <code>Promise</code> constructor executes right away, but its <code>.then()</code> callback is placed in the <strong>micro task queue</strong>.</p><p> Finally, <code>console.log(&quot;End&quot;)</code> runs synchronously.</p><p>The <strong>event loop</strong> ensures that once the call stack is empty, tasks from the <strong>micro task queue</strong> are processed before tasks from the <strong>macro task queue</strong>.</p><p> That’s why promise callbacks run <strong>before</strong> <code>setTimeout</code> callbacks.</p></br><p>👉 In short:</p><p> <strong>Order of execution</strong> → synchronous code → microtasks (promises) → macrotasks (setTimeout, setInterval).</p>"
                                    ]
                                },
                                {
                                    "id": 153,
                                    "sectionId": 50,
                                    "question": "<pre data-language=\"plain\">\nconst details = {\n  name: &quot;Vivek&quot;,\n  printName: function() {\n      return this.name;\n  },\n  printName1: () =&gt; {\n      return this.name;\n  },\n};\n\nconsole.log(details.printName());\nconsole.log(details.printName1());\n</pre>",
                                    "answerList": [
                                        "<pre data-language=\"plain\">\nVivek\nundefined\n</pre></br></br><p><code>details.printName()</code> is a regular function. When invoked as <code>details.printName()</code>, <code>this</code> refers to the <code>details</code> object, so it returns <strong>&quot;Vivek&quot;</strong>.</p><p><code>details.printName1()</code> is an arrow function. Arrow functions don’t have their own <code>this</code>; they inherit it lexically from their defining scope. In this case, <code>this</code> refers to the global scope (<code>window</code> in browsers, <code>global</code> in Node.js), where <code>name</code> is not defined, so it returns <strong>undefined</strong>.</p>"
                                    ]
                                },
                                {
                                    "id": 154,
                                    "sectionId": 50,
                                    "question": "<pre data-language=\"plain\">\nconsole.log(name);\nvar name = &quot;Vivek&quot;;\n</pre>",
                                    "answerList": [
                                        "<pre data-language=\"plain\">\nundefined\n</pre></br><p>When the JavaScript program runs, all variables and functions are moved to the top of their scope. JavaScript allocates memory for <code>var</code>-declared variables and initializes them with <strong>undefined</strong>. So, if we access a variable before its actual assignment, we get <strong>undefined</strong>.</p>"
                                    ]
                                },
                                {
                                    "id": 155,
                                    "sectionId": 50,
                                    "question": "<pre data-language=\"plain\">\nconsole.log(name);\nconst name = &quot;Vivek&quot;;\n</pre>",
                                    "answerList": [
                                        "<pre data-language=\"plain\">\nReferenceError: Cannot access &#39;name&#39; before initialization\n</pre></br><p>When a JavaScript program runs, all variables and functions are moved to the top of their scope. JavaScript allocates memory for <code>let</code> or <code>const</code>-declared variables but does not assign them a value. So, if we access a variable before its actual assignment, we get a </p></br><pre data-language=\"plain\">\nReferenceError: Cannot access &#39;name&#39; before initialization.\n</pre></br>"
                                    ]
                                }
                            ],
                            "subSections": []
                        }
                    ]
                },
                {
                    "subjectId": 4,
                    "sectionId": 51,
                    "rootId": 0,
                    "title": "<p><strong>Coding: Complete Implementation</strong></p>",
                    "qaData": [
                        {
                            "id": 156,
                            "sectionId": 51,
                            "question": "<pre data-language=\"plain\">\nconst counter = () =&gt; {\n    let count = 0;\n    return ...;\n};\n\nconst counterControl = counter();\ncounterControl.increment();\ncounterControl.decrement();\n</pre>",
                            "answerList": [
                                "<pre data-language=\"plain\">\nconst counter = () =&gt; {\n    let count = 0;\n    return {\n        increment: () =&gt; {\n            count++;\n            console.log(count);\n        },\n        decrement: function() {\n            count--;\n            console.log(count);\n        }  \n    };\n};\n\nconst counterControl = counter();\ncounterControl.increment();\ncounterControl.decrement();\n</pre>"
                            ]
                        },
                        {
                            "id": 157,
                            "sectionId": 51,
                            "question": "<p>What is a factorial, and how is it calculated?</p>",
                            "answerList": [
                                "<pre data-language=\"plain\">\nfunction factorial(n) {\n    if (n &lt; 0) return -1; // Factorial not defined for negative numbers\n    let result = 1;\n    for (let i = 2; i &lt;= n; i++) {\n        result *= i;\n    }\n    return result;\n}\n\nconsole.log(factorial(5)); // Output: 120\n</pre></br><pre data-language=\"plain\">\nfunction factorial(n) {\n    if (n &lt; 0) return -1;\n    if (n === 0 || n === 1) return 1;\n    return n * factorial(n - 1);\n}\n\nconsole.log(factorial(5)); // Output: 120\n</pre></br></br>"
                            ]
                        },
                        {
                            "id": 158,
                            "sectionId": 51,
                            "question": "<p>What is the difference between sorting strings and numbers in JavaScript?</p>",
                            "answerList": [
                                "<pre data-language=\"plain\">\nlet users = [\n  { name: &#39;Alice&#39;, age: 25 },\n  { name: &#39;Bob&#39;, age: 20 },\n  { name: &#39;Charlie&#39;, age: 30 }\n];\n</pre></br><p><strong>Sort by Age (Ascending)</strong></p><pre data-language=\"plain\">\nusers.sort((a, b) =&gt; a.age - b.age);\nconsole.log(users);\n/* Output:\n[\n  { name: &#39;Bob&#39;, age: 20 },\n  { name: &#39;Alice&#39;, age: 25 },\n  { name: &#39;Charlie&#39;, age: 30 }\n]\n*/\n</pre></br><p><strong>Sort by Name (Alphabetical)</strong></p><pre data-language=\"plain\">\nusers.sort((a, b) =&gt; a.name.localeCompare(b.name));\nconsole.log(users);\n/* Output:\n[\n  { name: &#39;Alice&#39;, age: 25 },\n  { name: &#39;Bob&#39;, age: 20 },\n  { name: &#39;Charlie&#39;, age: 30 }\n]\n*/\n</pre></br></br><p><strong>Tips:</strong></p><ol><li>Always use a comparison function for numbers or custom sorting.</li><li>localeCompare is useful for string sorting with international characters.</li><li>Sorting mutates the original array; to avoid that, use array.slice().sort().</li></ol>"
                            ]
                        },
                        {
                            "id": 159,
                            "sectionId": 51,
                            "question": "<p>Can you sort array using bubble sort?</p></br>",
                            "answerList": [
                                "<p>Bubble Sort repeatedly compares adjacent elements and <strong>swaps them</strong> if they are in the wrong order.</p><ul><li>Time complexity: <strong>O(n²)</strong></li><li>Space complexity: <strong>O(1)</strong></li><li>Stable sort: <strong>Yes</strong></li></ul></br><pre data-language=\"plain\">\nfunction bubbleSort(arr) {\n    let n = arr.length;\n    for (let i = 0; i &lt; n - 1; i++) {\n        // Last i elements are already sorted\n        for (let j = 0; j &lt; n - i - 1; j++) {\n            if (arr[j] &gt; arr[j + 1]) {\n                // Swap arr[j] and arr[j+1]\n                let temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n    return arr;\n}\n\nlet numbers = [5, 2, 9, 1, 7];\nconsole.log(bubbleSort(numbers)); // Output: [1, 2, 5, 7, 9]\n</pre>"
                            ]
                        },
                        {
                            "id": 160,
                            "sectionId": 51,
                            "question": "<p>Can you sort array using quick sort?</p>",
                            "answerList": [
                                "<pre data-language=\"plain\">\nfunction quickSort(arr) {\n    if (arr.length &lt;= 1) return arr; // Base case\n\n    const pivot = arr[arr.length - 1]; // Choose last element as pivot\n    const left = [];\n    const right = [];\n\n    for (let i = 0; i &lt; arr.length - 1; i++) {\n        if (arr[i] &lt; pivot) {\n            left.push(arr[i]);\n        } else {\n            right.push(arr[i]);\n        }\n    }\n\n    // Recursively sort left and right, then combine\n    return [...quickSort(left), pivot, ...quickSort(right)];\n}\n\n// Example usage\nlet numbers = [5, 2, 9, 1, 7];\nconsole.log(quickSort(numbers)); // Output: [1, 2, 5, 7, 9]\n</pre></br>"
                            ]
                        },
                        {
                            "id": 161,
                            "sectionId": 51,
                            "question": "<p>Can you remove duplicate number from array?</p>",
                            "answerList": [
                                "<p><strong>Using Set (Simplest &amp; Modern Way):</strong></p><pre data-language=\"plain\">\nlet numbers = [1, 2, 2, 3, 4, 4, 5];\n\nlet uniqueNumbers = [...new Set(numbers)];\nconsole.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]\n</pre></br><p><strong>Using filter() and indexOf():</strong></p><pre data-language=\"plain\">\nlet numbers = [1, 2, 2, 3, 4, 4, 5];\n\nlet uniqueNumbers = numbers.filter((value, index, arr) =&gt; {\n    return arr.indexOf(value) === index;\n});\n\nconsole.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]\n</pre></br><p><strong>Using Object/Map (Good for large arrays):</strong></p><pre data-language=\"plain\">\nlet numbers = [1, 2, 2, 3, 4, 4, 5];\nlet seen = {};\nlet uniqueNumbers = [];\n\nfor (let num of numbers) {\n    if (!seen[num]) {\n        uniqueNumbers.push(num);\n        seen[num] = true;\n    }\n}\n\nconsole.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]\n</pre>"
                            ]
                        },
                        {
                            "id": 162,
                            "sectionId": 51,
                            "question": "<p>Find the <strong>largest/smallest number</strong> in an array.</p>",
                            "answerList": [
                                "<p><strong>Using Math.max and Math.min:</strong></p><pre data-language=\"plain\">\nlet numbers = [5, 2, 9, 1, 7];\n\nlet largest = Math.max(...numbers);\nlet smallest = Math.min(...numbers);\n\nconsole.log(&quot;Largest:&quot;, largest); // Output: 9\nconsole.log(&quot;Smallest:&quot;, smallest); // Output: 1\n</pre></br><p><strong>Using a Loop (Classic Approach)</strong></p><pre data-language=\"plain\">\nlet numbers = [5, 2, 9, 1, 7];\n\nlet largest = numbers[0];\nlet smallest = numbers[0];\n\nfor (let i = 1; i &lt; numbers.length; i++) {\n    if (numbers[i] &gt; largest) largest = numbers[i];\n    if (numbers[i] &lt; smallest) smallest = numbers[i];\n}\n\nconsole.log(&quot;Largest:&quot;, largest); // Output: 9\nconsole.log(&quot;Smallest:&quot;, smallest); // Output: 1\n</pre></br>"
                            ]
                        },
                        {
                            "id": 163,
                            "sectionId": 51,
                            "question": "<p>Find <strong>second largest/smallest element</strong>.</p>",
                            "answerList": [
                                "<pre data-language=\"plain\">\nlet numbers = [5, 2, 9, 1, 7];\n\nlet largest = -Infinity;\nlet secondLargest = -Infinity;\nlet smallest = Infinity;\nlet secondSmallest = Infinity;\n\nfor (let num of numbers) {\n    // For largest and second largest\n    if (num &gt; largest) {\n        secondLargest = largest;\n        largest = num;\n    } else if (num &gt; secondLargest &amp;&amp; num !== largest) {\n        secondLargest = num;\n    }\n\n    // For smallest and second smallest\n    if (num &lt; smallest) {\n        secondSmallest = smallest;\n        smallest = num;\n    } else if (num &lt; secondSmallest &amp;&amp; num !== smallest) {\n        secondSmallest = num;\n    }\n}\n\nconsole.log(&quot;Second Largest:&quot;, secondLargest);   // Output: 7\nconsole.log(&quot;Second Smallest:&quot;, secondSmallest); // Output: 2\n</pre></br>"
                            ]
                        },
                        {
                            "id": 164,
                            "sectionId": 51,
                            "question": "<p>Count the <strong>number of vowels/consonants</strong> in a string.</p>",
                            "answerList": [
                                "<pre data-language=\"plain\">\nlet str = &quot;Hello World&quot;;\n\nlet vowelsCount = 0;\nlet consonantsCount = 0;\n\n// Convert string to lowercase for easy comparison\nlet lowerStr = str.toLowerCase();\n\nfor (let char of lowerStr) {\n    if (char &gt;= &#39;a&#39; &amp;&amp; char &lt;= &#39;z&#39;) { // Consider only alphabets\n        if (&quot;aeiou&quot;.includes(char)) {\n            vowelsCount++;\n        } else {\n            consonantsCount++;\n        }\n    }\n}\n\nconsole.log(&quot;Vowels:&quot;, vowelsCount);       // Output: 3\nconsole.log(&quot;Consonants:&quot;, consonantsCount); // Output: 7\n</pre>"
                            ]
                        },
                        {
                            "id": 165,
                            "sectionId": 51,
                            "question": "<p>Check if a number is a <strong>perfect number</strong>.</p>",
                            "answerList": [
                                "<pre data-language=\"plain\">\nfunction isPerfectNumber(num) {\n    if (num &lt;= 1) return false; // 1 or negative numbers are not perfect\n\n    let sum = 0;\n    for (let i = 1; i &lt;= num / 2; i++) { // only check up to num/2\n        if (num % i === 0) {\n            sum += i;\n        }\n    }\n\n    return sum === num;\n}\n\n// Test\nconsole.log(isPerfectNumber(6));  // true\nconsole.log(isPerfectNumber(28)); // true\nconsole.log(isPerfectNumber(12)); // false\n</pre></br>"
                            ]
                        },
                        {
                            "id": 166,
                            "sectionId": 51,
                            "question": "<p>Implement <strong>flattening of nested arrays</strong>.</p>",
                            "answerList": [
                                "<p><strong>Using Array.prototype.flat() (Modern &amp; Simple):</strong></p><pre data-language=\"plain\">\nlet nestedArray = [1, [2, [3, 4], 5], 6];\n\n// Use flat() with Infinity to flatten all levels\nlet flattened = nestedArray.flat(Infinity);\n\nconsole.log(flattened); // Output: [1, 2, 3, 4, 5, 6]\n</pre></br><p><strong>Using Recursion (Classic Interview Approach):</strong></p><pre data-language=\"plain\">\nfunction flattenArray(arr) {\n    let result = [];\n    for (let item of arr) {\n        if (Array.isArray(item)) {\n            result = result.concat(flattenArray(item)); // Recursive call\n        } else {\n            result.push(item);\n        }\n    }\n    return result;\n}\n\nlet nestedArray = [1, [2, [3, 4], 5], 6];\nconsole.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]\n</pre></br>"
                            ]
                        },
                        {
                            "id": 167,
                            "sectionId": 51,
                            "question": "<p>Implement <strong>debounce</strong> and <strong>throttle</strong> functions.</p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 168,
                            "sectionId": 51,
                            "question": "<p>Write <strong>memoization</strong> function for optimization.</p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 169,
                            "sectionId": 51,
                            "question": "<p>Find <strong>integer </strong>vs <strong>Non-Integer</strong> Rational Numbers.</p>",
                            "answerList": [
                                "<pre data-language=\"plain\">\nlet arr = [1, 2.5, 3/2, -4, 0.75];\n\nlet integers = arr.filter(num =&gt; Number.isInteger(num));\nlet nonIntegers = arr.filter(num =&gt; !Number.isInteger(num));\n\nconsole.log(&quot;Integers:&quot;, integers);       // [1, -4]\nconsole.log(&quot;Non-Integers:&quot;, nonIntegers); // [2.5, 1.5, 0.75]\n</pre></br>"
                            ]
                        }
                    ],
                    "subSections": []
                }
            ]
        },
        {
            "id": 5,
            "title": "TypeScript",
            "description": "",
            "sections": [
                {
                    "subjectId": 5,
                    "sectionId": 52,
                    "rootId": 0,
                    "title": "<p><strong>Basic</strong></p>",
                    "qaData": [
                        {
                            "id": 170,
                            "sectionId": 52,
                            "question": "<p><strong>Why did we introduce typescript, we have JavaScript?</strong></p>",
                            "answerList": [
                                "<p><strong>JavaScript</strong> is a <strong>dynamic type</strong>. It doesn’t check <strong>types</strong> at <strong>compile time</strong>. <strong>Errors</strong> like <code>&quot;undefined is not a function&quot;</code> only appear at <strong>runtime</strong>, whereas <strong>TypeScript</strong> adds <strong>static type checking</strong> that catches <strong>bugs</strong> before <strong>execution</strong>.</p></br><p><strong>TypeScript</strong> supports <strong>interfaces</strong>, <strong>generics</strong>, <strong>access modifiers</strong>, <strong>abstract classes</strong> that support better <strong>design patterns</strong>.</p>"
                            ]
                        },
                        {
                            "id": 171,
                            "sectionId": 52,
                            "question": "<p><strong>Difference between type vs interface and when to use each.</strong></p>",
                            "answerList": [
                                "<p>In <strong>TypeScript</strong>, an <strong>interface</strong> is a way to define the <strong>shape of an object</strong>, including its <strong>properties</strong>, <strong>types</strong>, and <strong>methods</strong>, without providing the implementation. It’s used for <strong>type-checking</strong> and <strong>ensuring consistency</strong> across objects, classes, or functions.</p></br><p>In <strong>TypeScript</strong>, a <strong>type</strong> (or <strong>type alias</strong>) is a way to <strong>define a custom name for a type</strong> or a combination of types.</p></br><p>✅ <strong>Difference from interface:</strong></p></br><ul><li><code><strong>interface</strong></code> is mainly for <strong>object shapes</strong> and <strong>class implementation</strong>.</li><li><code><strong>type</strong></code> is more <strong>flexible</strong> (can represent primitives, unions, intersections, functions).</li></ul></br><p><strong>Interface</strong></p></br><pre data-language=\"plain\">\ninterface User {\n  id: number;\n  name: string;\n}\n\ninterface User {\n  email?: string; // merged with previous User interface\n}\n</pre></br><p><strong>Type</strong></p></br><pre data-language=\"plain\">\ntype User = {\n  id: number;\n  name: string;\n};\n\n// type User = { email?: string }; // ❌ Error: duplicate\n\n</pre></br><p><strong>Type with union / intersection</strong></p></br><pre data-language=\"plain\">\ntype A = { x: number };\ntype B = { y: string };\ntype C = A &amp; B; // intersection\ntype D = number | string; // union\n</pre>"
                            ]
                        },
                        {
                            "id": 172,
                            "sectionId": 52,
                            "question": "<p><strong>Difference between any, unknown, never.</strong></p>",
                            "answerList": [
                                "<p>In <strong>TypeScript</strong>, <code><strong>any</strong></code> is a <strong>special type</strong> that <strong>disables type checking</strong>.</p><p> If we use it, we lose all <strong>TypeScript safety</strong> and <strong>mistakes</strong> won’t be caught during <strong>compilation</strong>.</p></br><p><code><strong>unknown</strong></code> is better than <code><strong>any</strong></code>.</p><p> If we assign anything to <strong>unknown</strong>, we <strong>cannot use it directly</strong> without <strong>checking its type first</strong>.</p><p> We can <strong>prevent runtime errors</strong>.</p></br><p><code><strong>never</strong></code> is a type in <strong>TypeScript</strong> that represents <strong>values that should never happen</strong>.</p>"
                            ]
                        },
                        {
                            "id": 173,
                            "sectionId": 52,
                            "question": "<p><strong>Generics – why needed, real example with Angular services (e.g., HttpClient).</strong></p>",
                            "answerList": [
                                "<p><strong>Generics</strong> in <strong>TypeScript</strong> allow us to write <strong>reusable</strong> and <strong>type-safe code</strong> without losing <strong>flexibility</strong>.</p></br><p>For example, <strong>Angular’s HttpClient</strong> uses <strong>Generics</strong> so that we can define the <strong>expected response type</strong>, which avoids using <strong>any</strong> and provides <strong>compile-time safety</strong> and <strong>IntelliSense</strong>.</p></br><pre data-language=\"plain\">\n// Instead of this (unsafe, returns any):\nthis.http.get(&#39;api/users&#39;);\n\n// We use Generics (safe, typed):\nthis.http.get&lt;User[]&gt;(&#39;api/users&#39;).subscribe(users =&gt; {\n  console.log(users[0].name); // ✅ Type-safe\n});\n</pre></br>"
                            ]
                        },
                        {
                            "id": 174,
                            "sectionId": 52,
                            "question": "<p><strong>Decorators in TypeScript (how Angular uses them).</strong></p>",
                            "answerList": [
                                "<p>A <strong>decorator</strong> is a <strong>special kind of declaration</strong> that can attach <strong>metadata</strong> or <strong>behavior</strong> to <strong>classes</strong>, <strong>methods</strong>, <strong>properties</strong>, or <strong>parameters</strong> at <strong>design time</strong> (before <strong>runtime execution</strong>).</p><p>They are prefixed with <strong>@</strong> and evaluated at <strong>runtime</strong>.</p><p><strong>Decorators in TypeScript</strong> are <strong>functions</strong> that add <strong>metadata</strong> to <strong>classes</strong>, <strong>methods</strong>, or <strong>properties</strong>. <strong>Angular</strong> uses them (like <strong>@Component</strong>, <strong>@Injectable</strong>, <strong>@Input</strong>, etc.) to understand how to process a <strong>class</strong> – whether it’s a <strong>component</strong>, <strong>module</strong>, <strong>service</strong>, <strong>directive</strong>, or <strong>dependency injection token</strong>.</p><h3>Class Decorators</h3><ul><li><strong>@Component</strong> → marks a <strong>class</strong> as an <strong>Angular component</strong></li><li><strong>@NgModule</strong> → marks a <strong>class</strong> as a <strong>module</strong></li><li><strong>@Injectable</strong> → marks a <strong>class</strong> as a <strong>service</strong> that can be <strong>injected</strong></li></ul><h3>Property Decorators</h3><ul><li><strong>@Input</strong> → passes <strong>data</strong> from <strong>parent to child</strong></li><li><strong>@Output</strong> → emits <strong>events</strong> from <strong>child to parent</strong></li><li><strong>@ViewChild</strong> → gets a <strong>reference</strong> to a <strong>child component, directive, or element</strong></li></ul><h3>Method Decorators</h3><ul><li><strong>@HostListener</strong> → listens to <strong>DOM events</strong> on the <strong>host element</strong></li></ul><h3>Parameter Decorators</h3><ul><li><strong>@Inject</strong> → explicitly tells <strong>Angular</strong> what <strong>dependency</strong> to <strong>inject</strong></li></ul></br><p>constructor(@Inject(&#39;API_URL&#39;) private apiUrl: string) {}</p></br><p><strong>Metadata</strong> is <strong>extra information</strong> attached to a <strong>class</strong> (via <strong>decorators</strong>) that tells <strong>Angular</strong> how to <strong>process</strong>, <strong>instantiate</strong>, or <strong>use</strong> that <strong>class</strong>.</p><pre data-language=\"plain\">\n\n</pre>"
                            ]
                        }
                    ],
                    "subSections": []
                }
            ]
        },
        {
            "id": 6,
            "title": "HTML",
            "description": "",
            "sections": [
                {
                    "subjectId": 6,
                    "sectionId": 53,
                    "rootId": 0,
                    "title": "<p><strong>Basic</strong></p>",
                    "qaData": [
                        {
                            "id": 175,
                            "sectionId": 53,
                            "question": "<p>What is HTML?</p>",
                            "answerList": [
                                "<p>HTML is a <strong>markup language</strong>, not a programming language.</p><p>It uses <strong>tags</strong> (like <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;div&gt;</code>, etc.) to <strong>define the structure and content</strong> of a web page.</p></br><p>Here’s a simple HTML example:</p></br><p>&lt;!DOCTYPE html&gt;</p><p>&lt;html&gt;</p><p>  &lt;head&gt;</p><p>    &lt;title&gt;My First Web Page&lt;/title&gt;</p><p>  &lt;/head&gt;</p><p>  &lt;body&gt;</p><p>    &lt;h1&gt;Welcome to My Website&lt;/h1&gt;</p><p>    &lt;p&gt;This is a paragraph of text.&lt;/p&gt;</p><p>    &lt;a href=&quot;https://www.google.com&quot;&gt;Go to Google&lt;/a&gt;</p><p>  &lt;/body&gt;</p><p>&lt;/html&gt;</p></br><p><strong>Explanation:</strong></p><ul><li><code>&lt;!DOCTYPE html&gt;</code> → Defines the document type (HTML5)</li><li><code>&lt;html&gt;</code> → Root element</li><li><code>&lt;head&gt;</code> → Contains meta info (like title, links, scripts)</li><li><code>&lt;body&gt;</code> → Contains visible page content</li></ul></br><p>🔹<strong>HTML Works With:</strong></p><p><strong>CSS</strong> → for styling and layout</p><p><strong>JavaScript</strong> → for interactivity and dynamic behavior</p>"
                            ]
                        },
                        {
                            "id": 176,
                            "sectionId": 53,
                            "question": "<p>What is the difference between inline, block, and inline-block elements?</p>",
                            "answerList": [
                                "<p><strong>Inline</strong>: Does <strong>not start on a new line</strong> (<code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>).</p></br><p><strong>Block</strong>: <strong>Occupies full width</strong>, <strong>starts on new line</strong> (<code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>).</p></br><p><strong>Inline-block</strong>: <strong>Behaves like inline</strong> but <strong>supports block properties</strong> (<strong>height/width</strong>).</p>"
                            ]
                        },
                        {
                            "id": 177,
                            "sectionId": 53,
                            "question": "<p>What are semantic HTML tags? Can you give examples?</p>",
                            "answerList": [
                                "<p><strong>Semantic HTML tags</strong> describe the <strong>meaning of content</strong> (<strong>improve SEO &amp; accessibility</strong>).</p></br><p><strong>Examples:</strong> <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code>.</p>"
                            ]
                        },
                        {
                            "id": 178,
                            "sectionId": 53,
                            "question": "<p>What is SEO?</p>",
                            "answerList": [
                                "<p><strong>SEO (Search Engine Optimization)</strong> is the practice of <strong>improving a website’s visibility</strong> in <strong>search engines</strong> through <strong>content</strong>, <strong>structure</strong>, and <strong>performance optimization</strong>.</p>"
                            ]
                        },
                        {
                            "id": 179,
                            "sectionId": 53,
                            "question": "<p>What is a Web Component?</p>",
                            "answerList": [
                                "<p>A <strong>Web Component</strong> is a <strong>set of web platform features</strong> that allows you to create <strong>reusable, encapsulated, and custom HTML elements</strong> that work across modern browsers.</p>"
                            ]
                        },
                        {
                            "id": 180,
                            "sectionId": 53,
                            "question": "<p>Difference between id and class attributes in HTML?</p>",
                            "answerList": [
                                "<p><strong>id:</strong> <strong>Unique per page</strong>, used for <strong>specific elements</strong>.</p></br><p><strong>class:</strong> Can be <strong>shared by multiple elements</strong>, used for <strong>styling</strong> and <strong>grouping</strong>.</p>"
                            ]
                        },
                        {
                            "id": 181,
                            "sectionId": 53,
                            "question": "<p>What are data- attributes* in HTML? How are they useful in Angular?</p>",
                            "answerList": [
                                "<p><strong>Custom attributes</strong> (e.g., <code>data-user-id=&quot;123&quot;</code>) used to <strong>store extra data</strong> without <strong>cluttering code</strong>.</p></br><p> 👉 <strong>Useful in Angular</strong> for <strong>passing small dataset</strong> to <strong>components</strong>.</p>"
                            ]
                        },
                        {
                            "id": 182,
                            "sectionId": 53,
                            "question": "<p>Difference between &lt;div&gt; and &lt;span&gt; tags?</p>",
                            "answerList": [
                                "<p><code>&lt;div&gt;</code>: <strong>Block-level container</strong>.</p></br><p> <code>&lt;span&gt;</code>: <strong>Inline container</strong> for <strong>styling specific text/part</strong>.</p>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 6,
                    "sectionId": 54,
                    "rootId": 0,
                    "title": "<p><strong>Form and Input</strong></p>",
                    "qaData": [
                        {
                            "id": 183,
                            "sectionId": 54,
                            "question": "<p>What is the difference between &lt;input type=&quot;text&quot;&gt; and &lt;textarea&gt;?</p>",
                            "answerList": [
                                "<p><code>&lt;input type=&quot;text&quot;&gt;</code>: <strong>Single line input</strong>.</p></br><p> <code>&lt;textarea&gt;</code>: <strong>Multi-line input</strong>.</p>"
                            ]
                        },
                        {
                            "id": 184,
                            "sectionId": 54,
                            "question": "<p>Difference between &lt;button&gt; and &lt;input type=&quot;button&quot;&gt;?</p>",
                            "answerList": [
                                "<p><code>&lt;button&gt;</code>: <strong>More flexible</strong> (can contain <strong>HTML inside</strong>, default type is <strong>&quot;submit&quot;</strong>).</p></br><p> <code>&lt;input type=&quot;button&quot;&gt;</code>: <strong>Fixed</strong>, only <strong>text value</strong>.</p>"
                            ]
                        },
                        {
                            "id": 185,
                            "sectionId": 54,
                            "question": "<p>What is the difference between GET and POST form methods?</p>",
                            "answerList": [
                                "<p><strong>GET:</strong> <strong>Data visible in URL</strong> (<strong>not secure</strong>, <strong>limited length</strong>).</p></br><p> <strong>POST:</strong> <strong>Data hidden in body</strong> (<strong>secure</strong>, used for <strong>sensitive data</strong>).</p>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 6,
                    "sectionId": 55,
                    "rootId": 0,
                    "title": "<p><strong>HTML 5</strong></p>",
                    "qaData": [
                        {
                            "id": 186,
                            "sectionId": 55,
                            "question": "<p>What is srcset?</p>",
                            "answerList": [
                                "<p><code><strong>srcset</strong></code><strong> attribute</strong> allows you to provide <strong>multiple versions of the same image</strong> for <strong>different screen sizes</strong> and <strong>resolutions</strong>.</p><p>The <strong>browser automatically chooses</strong> the <strong>best image</strong> to load depending on the <strong>device DPI (pixel density)</strong> and <strong>viewport width</strong>.</p></br><pre data-language=\"plain\">\n&lt;img \n  src=&quot;image-small.jpg&quot; \n  srcset=&quot;image-small.jpg 480w, image-medium.jpg 800w, image-large.jpg 1200w&quot; \n</pre><p>  alt=&quot;Sample Image&quot;&gt;</p></br><p>👉 <strong>Explanation:</strong></p><ul><li><strong>image-small.jpg 480w</strong> → use when <strong>viewport ≤480px</strong>.</li><li><strong>image-medium.jpg 800w</strong> → use when <strong>viewport ≤800px</strong>.</li><li><strong>image-large.jpg 1200w</strong> → use when <strong>viewport ≤1200px</strong>.</li></ul><p><strong>Browser picks the most suitable image automatically.</strong></p></br>"
                            ]
                        },
                        {
                            "id": 187,
                            "sectionId": 55,
                            "question": "<p>What is the difference between src and href in HTML?</p>",
                            "answerList": [
                                "<p><code><strong>src</strong></code>: Tells the <strong>browser</strong> to <strong>embed the resource</strong> at that location (<strong>replace the element’s content</strong>). Example: <code>&lt;img src=&quot;image.png&quot;&gt;</code>.</p></br><p><code><strong>href</strong></code>: Tells the <strong>browser</strong> to <strong>navigate</strong> or <strong>link</strong> to that <strong>resource</strong>. Example: <code>&lt;a href=&quot;page.html&quot;&gt;</code>.</p>"
                            ]
                        },
                        {
                            "id": 188,
                            "sectionId": 55,
                            "question": "<p>What tags commonly use the src attribute?</p>",
                            "answerList": [
                                "<p><code>&lt;img src=&quot;...&quot;&gt;</code> → <strong>for images</strong>.</p><p><code>&lt;script src=&quot;...&quot;&gt;</code> → <strong>for JavaScript files</strong>.</p><p><code>&lt;iframe src=&quot;...&quot;&gt;</code> → <strong>for embedding pages</strong>.</p><p><code>&lt;audio src=&quot;...&quot;&gt;</code> / <code>&lt;video src=&quot;...&quot;&gt;</code> → <strong>for media</strong>.</p><p><code>&lt;source src=&quot;...&quot;&gt;</code> → <strong>inside &lt;audio&gt; or &lt;video&gt;</strong>.</p>"
                            ]
                        }
                    ],
                    "subSections": []
                }
            ]
        },
        {
            "id": 7,
            "title": "CSS",
            "description": "",
            "sections": []
        },
        {
            "id": 8,
            "title": "CI/CD pipelines with Azure",
            "description": "",
            "sections": [
                {
                    "subjectId": 8,
                    "sectionId": 56,
                    "rootId": 0,
                    "title": "<p><strong>Basic CI/CD in Azure</strong></p>",
                    "qaData": [
                        {
                            "id": 189,
                            "sectionId": 56,
                            "question": "<p><strong>What is a CI/CD pipeline and why is it important?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 190,
                            "sectionId": 56,
                            "question": "<p><strong>How is CI/CD implemented in Azure DevOps?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 191,
                            "sectionId": 56,
                            "question": "<p><strong>Difference between build pipeline (CI) and release pipeline (CD) in Azure?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 192,
                            "sectionId": 56,
                            "question": "<p><strong>Can you explain the difference between YAML pipelines and Classic pipelines? Which one do you prefer?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 193,
                            "sectionId": 56,
                            "question": "<p><strong>What is the role of Azure Repos, Pipelines, Artifacts, Boards in Azure DevOps?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 8,
                    "sectionId": 57,
                    "rootId": 0,
                    "title": "<p><strong>Pipeline Setup</strong></p>",
                    "qaData": [
                        {
                            "id": 194,
                            "sectionId": 57,
                            "question": "<p><strong>How do you configure a pipeline to build and deploy an Angular application to Azure App Service?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 195,
                            "sectionId": 57,
                            "question": "<p><strong>What are stages, jobs, and tasks in an Azure pipeline?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 196,
                            "sectionId": 57,
                            "question": "<p><strong>How do you define pipeline triggers (e.g., run pipeline on every push to main branch)?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 197,
                            "sectionId": 57,
                            "question": "<p><strong>How do you use pipeline templates for reusability?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 198,
                            "sectionId": 57,
                            "question": "<p><strong>How do you integrate unit tests / linting in CI pipelines?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 8,
                    "sectionId": 58,
                    "rootId": 0,
                    "title": "<p><strong>Deployment in Azure</strong></p>",
                    "qaData": [
                        {
                            "id": 199,
                            "sectionId": 58,
                            "question": "<p><strong>How do you deploy an application to Azure App Service using a pipeline?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 200,
                            "sectionId": 58,
                            "question": "<p><strong>How do you deploy to multiple environments (Dev, QA, Prod) using Azure pipelines?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 201,
                            "sectionId": 58,
                            "question": "<p><strong>What is blue-green deployment and canary release? Can we do this in Azure DevOps?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 202,
                            "sectionId": 58,
                            "question": "<p><strong>How do you configure infrastructure as code (IaC) with pipelines (e.g., ARM templates, Bicep, Terraform)?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 203,
                            "sectionId": 58,
                            "question": "<p><strong>How do you set up approvals &amp; gates before deploying to production?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 8,
                    "sectionId": 59,
                    "rootId": 0,
                    "title": "<p><strong>Security &amp; Secrets</strong></p>",
                    "qaData": [
                        {
                            "id": 204,
                            "sectionId": 59,
                            "question": "<p><strong>How do you manage secrets (API keys, DB passwords) in a pipeline?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 205,
                            "sectionId": 59,
                            "question": "<p><strong>How do you integrate Azure Key Vault with pipelines?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 206,
                            "sectionId": 59,
                            "question": "<p><strong>How do you ensure pipeline security (e.g., prevent unauthorized deployments)?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 8,
                    "sectionId": 60,
                    "rootId": 0,
                    "title": "<p><strong>Advanced &amp; Troubleshooting</strong></p>",
                    "qaData": [
                        {
                            "id": 207,
                            "sectionId": 60,
                            "question": "<p><strong>Your build pipeline is failing — how do you debug it?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 208,
                            "sectionId": 60,
                            "question": "<p><strong>Your pipeline takes too long — how do you optimize it?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 209,
                            "sectionId": 60,
                            "question": "<p><strong>How do you roll back a failed deployment?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 210,
                            "sectionId": 60,
                            "question": "<p><strong>How do you configure branch policies (PR validation builds, approvals)?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 211,
                            "sectionId": 60,
                            "question": "<p><strong>How do you track and monitor pipeline execution in Azure DevOps?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 212,
                            "sectionId": 60,
                            "question": "<p><strong>What’s the difference between using Azure DevOps Pipelines vs GitHub Actions?</strong></p>",
                            "answerList": [
                                ""
                            ]
                        }
                    ],
                    "subSections": []
                }
            ]
        },
        {
            "id": 9,
            "title": "Micro Frontend in Angular",
            "description": "",
            "sections": [
                {
                    "subjectId": 9,
                    "sectionId": 61,
                    "rootId": 0,
                    "title": "<p><strong>Core Concepts</strong></p>",
                    "qaData": [
                        {
                            "id": 213,
                            "sectionId": 61,
                            "question": "<p>What are Micro Frontends, and why do we need them?</p>",
                            "answerList": [
                                "<p><a href=\"https://chatgpt.com/c/68d6a5a3-0d6c-8330-9a6c-f1b654eeddf2\" rel=\"noopener noreferrer\" target=\"_blank\">https://chatgpt.com/c/68d6a5a3-0d6c-8330-9a6c-f1b654eeddf2</a></p></br><p><strong>Micro Frontends:</strong></p><p>Micro Frontends (MFE) is an <strong>architectural style</strong> where a frontend application is split into <strong>smaller, independent, self-contained apps (micro apps)</strong>.</p></br><p>Each micro app is responsible for a specific business domain or feature, and they come together to form a larger application.</p></br><p><strong>Why do we need Micro Frontends?</strong></p></br><ol><li><strong>Scalability</strong><ul><li>Large teams can work on different parts of the app without stepping on each other’s code.</li><li>Each team owns one micro frontend.</li></ul></li><li><strong>Independent Deployment</strong><ul><li>A micro app can be deployed <strong>without redeploying the whole application</strong>.</li><li>Faster release cycles and easier hotfixes.</li></ul></li><li><strong>Technology Agnostic</strong><ul><li>Different teams can use <strong>different frontend frameworks/libraries</strong> (Angular, React, Vue, etc.) if needed.</li><li>Useful in large organizations with mixed tech stacks.</li></ul></li><li><strong>Faster Development</strong><ul><li>Teams can work in <strong>parallel</strong> on different micro frontends.</li><li>Reduces dependency bottlenecks.</li></ul></li><li><strong>Code Maintainability</strong><ul><li>Smaller codebases are easier to maintain and refactor.</li><li>Each micro frontend has its own <strong>repo, build pipeline, and CI/CD</strong>.</li></ul></li><li><strong>Resilience</strong><ul><li>If one micro frontend fails, it doesn’t necessarily break the entire app.</li></ul></li></ol></br>"
                            ]
                        },
                        {
                            "id": 214,
                            "sectionId": 61,
                            "question": "<p>How do Micro Frontends differ from a monolithic Angular app?</p>",
                            "answerList": [
                                "<p><strong style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">Micro Frontends (MFE) </strong><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">is an </span><strong style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">architectural style</strong><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\"> where a frontend application is split into </span><strong style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">smaller, independent, self-contained apps (micro apps)</strong><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">.</span></p></br><p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">Each micro app is responsible for a specific business domain or feature, and they come together to form a larger application.</span></p></br></br></br><p>A <strong>Monolithic Angular app</strong> is a <strong>single, large frontend application</strong> built as one unified codebase, where all features, modules, and components reside together. It’s the traditional way of building Angular applications.</p>"
                            ]
                        },
                        {
                            "id": 215,
                            "sectionId": 61,
                            "question": "<p>What are the main advantages and disadvantages of Micro Frontends?</p>",
                            "answerList": [
                                "<p>Micro Frontends are an architectural approach where a large frontend app is split into smaller, independent modules owned by different teams. The main advantages are <strong>independent development and deployment</strong>, <strong>scalability of teams and code</strong>, <strong>technology flexibility</strong>, <strong>easier maintenance</strong>, <strong>incremental upgrades</strong>, and <strong>failure isolation</strong>, meaning one part failing won’t break the whole app.</p></br><p> On the downside, they introduce <strong>complexity in integration and routing</strong>, <strong>setup overhead</strong>, potential <strong>performance issues</strong> if not optimized, <strong>consistency challenges</strong> in UI/UX across teams, and <strong>more complex end-to-end testing</strong>.</p><p> Overall, they are ideal for large applications with multiple teams, but not always necessary for smaller projects.</p>"
                            ]
                        },
                        {
                            "id": 216,
                            "sectionId": 61,
                            "question": "<p>What approaches are commonly used to implement Micro Frontends in Angular (Module Federation, Angular Elements, iFrames, single-spa)?</p>",
                            "answerList": [
                                "<p>Module Federation is currently the most popular approach for Angular apps because it allows independent deployment with shared dependencies.</p>"
                            ]
                        },
                        {
                            "id": 217,
                            "sectionId": 61,
                            "question": "<p>What is Webpack 5 Module Federation, and how does Angular support it?</p>",
                            "answerList": [
                                "<p><strong>Webpack 5 Module Federation:</strong></p><p><strong>Module Federation</strong> is a feature introduced in <strong>Webpack 5</strong> that allows multiple <strong>independent builds</strong> to form a single application. Each build (called a <strong>remote</strong>) can expose and consume code dynamically at runtime.</p></br><p><strong>Angular Supports Module Federation:</strong></p><p>Angular doesn’t have native module federation built-in, but it <strong>integrates seamlessly</strong> with Webpack 5.</p><p>👉<a href=\"https://www.npmjs.com/package/@angular-architects/module-federation\" rel=\"noopener noreferrer\" target=\"_blank\"> </a><code><a href=\"https://www.npmjs.com/package/@angular-architects/module-federation\" rel=\"noopener noreferrer\" target=\"_blank\">@angular-architects/module-federation</a> </code></p><p>This package helps Angular apps set up Module Federation with minimal configuration.</p></br></br></br>"
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 9,
                    "sectionId": 62,
                    "rootId": 0,
                    "title": "<p><strong>Angular-Specific</strong></p>",
                    "qaData": [
                        {
                            "id": 218,
                            "sectionId": 62,
                            "question": "<p>How do you configure Angular with Module Federation (host and remote apps)?</p>",
                            "answerList": [
                                "<p>First, <strong>create a workspace</strong> for the applications using:</p></br><pre data-language=\"plain\">\nng new mono-repo-workspace --create-application=false\n</pre></br><p>Then <strong>change directory</strong> to the workspace:</p></br><pre data-language=\"plain\">\ncd mono-repo-workspace\n</pre></br><p>In the second step, <strong>generate the host (shell) application</strong> using:</p></br><pre data-language=\"plain\">\nng generate application shell --routing --style=scss\n</pre></br><p>And <strong>generate the remote application</strong> using:</p></br><pre data-language=\"plain\">\nng generate application dashboard --routing --style=scss\n</pre></br><p>In the third step, <strong>add the Module Federation plugin</strong> by installing the <strong>official community package</strong>:</p></br><pre data-language=\"plain\">\nnpm install @angular-architects/module-federation --save-dev\n</pre></br><p>Then <strong>add it to each app</strong>:</p></br><p>For the <strong>host</strong>:</p></br><pre data-language=\"plain\">\nng add @angular-architects/module-federation --project shell --type host\n</pre></br><p>For the <strong>remote</strong>:</p></br><pre data-language=\"plain\">\nng add @angular-architects/module-federation --project dashboard --type remote\n</pre></br><p>This will generate <code><strong>webpack.config.js</strong></code> and <code><strong>webpack.prod.config.js</strong></code> in both apps.</p>"
                            ]
                        },
                        {
                            "id": 219,
                            "sectionId": 62,
                            "question": "<p>How do you share Angular libraries (like Angular core, RxJS, Material) across Micro Frontends?</p>",
                            "answerList": [
                                "<p>In a Micro Frontend architecture with Angular, we avoid bundling Angular core, RxJS, and Material in each MFE. We use Webpack Module Federation to share these libraries. We mark Angular libraries as <code>singleton: true</code> to ensure only one instance exists across MFEs and use <code>strictVersion: true</code> to avoid version conflicts. This approach reduces bundle size, prevents runtime errors, and ensures consistent behavior across apps.</p></br><pre data-language=\"plain\">\nshared: share({\n    &quot;@angular/core&quot;: { singleton: true, strictVersion: true },\n    &quot;@angular/common&quot;: { singleton: true, strictVersion: true },\n    &quot;@angular/router&quot;: { singleton: true, strictVersion: true },\n    &quot;rxjs&quot;: { singleton: true },\n    &quot;@angular/material&quot;: { singleton: true }\n  })\n</pre></br><p>OR</p></br><pre data-language=\"plain\">\nshared: { \n...shareAll({ singleton: true, strictVersion: true, requiredVersion: &#39;auto&#39; }), \n},\n</pre></br><p><code>shareAll</code> is a helper from <code>@angular-architects/module-federation</code>and it automatically marks <strong>all dependencies from </strong><code><strong>package.json</strong></code> as shared. </p>"
                            ]
                        },
                        {
                            "id": 220,
                            "sectionId": 62,
                            "question": "<p>How do you set up routing between multiple Micro Frontends in Angular?</p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 221,
                            "sectionId": 62,
                            "question": "<p>What’s the difference between using Angular Elements (Web Components) vs Module Federation?</p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 222,
                            "sectionId": 62,
                            "question": "<p>How do you manage state across different Micro Frontends (NgRx, shared services, custom events)?</p>",
                            "answerList": [
                                ""
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 9,
                    "sectionId": 63,
                    "rootId": 0,
                    "title": "<p><strong>Integration &amp; Communication</strong></p>",
                    "qaData": [
                        {
                            "id": 223,
                            "sectionId": 63,
                            "question": "<p>How can Micro Frontends communicate with each other?</p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 224,
                            "sectionId": 63,
                            "question": "<p>How do you handle authentication and authorization in Micro Frontend architecture?</p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 225,
                            "sectionId": 63,
                            "question": "<p>How do you manage CSS/style isolation in Angular Micro Frontends?</p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 226,
                            "sectionId": 63,
                            "question": "<p>How do you integrate Angular Micro Frontends with React/Vue Micro Frontends?</p>",
                            "answerList": [
                                ""
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 9,
                    "sectionId": 64,
                    "rootId": 0,
                    "title": "<p><strong>Performance &amp; Deployment</strong></p>",
                    "qaData": [
                        {
                            "id": 227,
                            "sectionId": 64,
                            "question": "<p>What are the performance challenges in Micro Frontends, and how do you optimize them?</p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 228,
                            "sectionId": 64,
                            "question": "<p>How do you handle duplicate dependencies across Micro Frontends?</p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 229,
                            "sectionId": 64,
                            "question": "<p>How do you ensure version compatibility of shared libraries in Module Federation?</p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 230,
                            "sectionId": 64,
                            "question": "<p>How do you manage CI/CD for multiple Micro Frontends?</p>",
                            "answerList": [
                                ""
                            ]
                        }
                    ],
                    "subSections": []
                },
                {
                    "subjectId": 9,
                    "sectionId": 65,
                    "rootId": 0,
                    "title": "<p><strong>Scenario / Advanced</strong></p>",
                    "qaData": [
                        {
                            "id": 231,
                            "sectionId": 65,
                            "question": "<p>If two Micro Frontends use different Angular versions, how do you make them work together?</p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 232,
                            "sectionId": 65,
                            "question": "<p>How would you migrate an existing monolithic Angular app into Micro Frontends?</p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 233,
                            "sectionId": 65,
                            "question": "<p>How would you rollback a specific Micro Frontend if a deployment fails?</p>",
                            "answerList": [
                                ""
                            ]
                        },
                        {
                            "id": 234,
                            "sectionId": 65,
                            "question": "<p>What are some real-world challenges you faced (or might face) in Micro Frontend implementation?</p>",
                            "answerList": [
                                ""
                            ]
                        }
                    ],
                    "subSections": []
                }
            ]
        }
    ];
} 