export const angularList = () => {
    return [
        {
            "name": "<p><strong>Basic</strong></p>",
            "subjectId": 1,
            "sectionId": 1,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p>Angular is a <strong>TypeScript-based front-end framework</strong> developed by <strong>Google</strong> for building <strong>single-page applications (SPAs)</strong>. It provides a <strong>component-based architecture</strong>, <strong>built-in dependency injection</strong>, <strong>two-way data binding</strong>, and powerful <strong>RxJS-based state management</strong>.</p></br><p>Angular is a <strong>full-fledged framework</strong> that offers a <strong>complete solution</strong> for building <strong>web applications</strong>. It includes built-in support for <strong>routing</strong>, <strong>forms</strong>, and <strong>HTTP communication</strong> through <strong>HttpClient</strong>. Angular provides <strong>two-way data binding</strong>, which automatically synchronizes the <strong>model</strong> and the <strong>view</strong>. It uses <strong>dependency injection</strong> to make <strong>services reusable</strong> and improve <strong>testability</strong>. Angular also leverages <strong>RxJS</strong> for efficient <strong>asynchronous data handling</strong> and supports <strong>TypeScript</strong>, which enhances <strong>maintainability</strong>, <strong>scalability</strong>, and <strong>developer productivity</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 1,
                    "subSectionId": -1,
                    "contentId": 1,
                    "text": "<p>What is Angular?</p>"
                },
                {
                    "description": "<p>Angular is a full-fledged <strong>front-end framework</strong> that provides a <strong>complete solution</strong> for building <strong>web applications</strong>. It includes built-in support for <strong>routing</strong>, <strong>forms</strong>, and <strong>HTTP communication</strong> through <strong>HttpClient</strong>. Angular offers <strong>two-way data binding</strong>, which automatically synchronizes the <strong>model</strong> and the <strong>view</strong>. It uses <strong>dependency injection</strong> to make <strong>services reusable</strong> and improve <strong>testability</strong>. Angular also leverages <strong>RxJS</strong> for efficient <strong>asynchronous data handling</strong> and supports <strong>TypeScript</strong>, which enhances <strong>maintainability</strong>, <strong>scalability</strong>, and <strong>developer productivity</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 1,
                    "subSectionId": -1,
                    "contentId": 2,
                    "text": "<p>How is it different from other JavaScript frameworks?</p>"
                },
                {
                    "description": "<p>Angular offers several key features such as <strong>Component-Based Architecture</strong>, <strong>Two-Way Data Binding</strong>, <strong>Dependency Injection (DI)</strong>, <strong>Directives</strong>, <strong>RxJS</strong> for <strong>Reactive Programming</strong>, <strong>Built-in Routing</strong>, robust <strong>Forms Handling</strong>, <strong>State Management</strong> using tools like <strong>NgRx</strong>, and <strong>Cross-Platform Support</strong> for building web, mobile, and desktop applications.</p></br><p>These features make <strong>Angular</strong> a <strong>powerful</strong> and <strong>scalable</strong> framework for building <strong>enterprise-level applications</strong> efficiently.</p>",
                    "subjectId": 1,
                    "sectionId": 1,
                    "subSectionId": -1,
                    "contentId": 3,
                    "text": "<p>What are the key features of Angular?</p>"
                },
                {
                    "description": "<p><strong>JavaScript</strong> can create <strong>dynamic pages</strong>, but <strong>Angular</strong> provides a <strong>structured framework</strong> for building <strong>large-scale</strong> and <strong>maintainable applications</strong>.</p></br><p> It offers features like <strong>Component-Based Architecture</strong>, <strong>Two-Way Data Binding</strong>, <strong>Dependency Injection</strong>, <strong>Routing</strong>, and <strong>State Management</strong>, which help manage <strong>complexity</strong>, improve <strong>code reusability</strong>, and speed up <strong>development</strong> — especially for <strong>enterprise-grade apps</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 1,
                    "subSectionId": -1,
                    "contentId": 4,
                    "text": "<p>If we can create dynamic pages using JavaScript, why do we need Angular?</p>"
                },
                {
                    "description": "<ol><li><strong>AngularJS</strong> is based on the <strong>MVC (Model-View-Controller) architecture</strong>, whereas <strong>Angular</strong> follows a <strong>Component-Based Architecture</strong>.</li><li><strong>AngularJS</strong> supports <strong>JavaScript</strong>, whereas <strong>Angular</strong> supports <strong>TypeScript</strong>.</li><li><strong>AngularJS</strong> is <strong>not optimized for mobile</strong>, whereas <strong>Angular</strong> is <strong>mobile-friendly</strong>.</li><li><strong>AngularJS</strong> has been <strong>discontinued</strong>, whereas <strong>Angular</strong> is <strong>actively maintained by Google</strong>.</li></ol>",
                    "subjectId": 1,
                    "sectionId": 1,
                    "subSectionId": -1,
                    "contentId": 5,
                    "text": "<p>Explain the differences between AngularJS and Angular.</p>"
                },
                {
                    "description": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">The browser loads </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">index.html</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, which usually contains a root element (like </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">&lt;app-root&gt;</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">). Then </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">main.ts</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> executes. This is the entry point (the first TypeScript file that runs), and its job is to bootstrap the Angular application.</span></p></br><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Earlier, Angular used </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">platformBrowserDynamic().bootstrapModule(AppModule)</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> for NgModules. But after the introduction of standalone components, it now uses </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">bootstrapApplication()</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> to bootstrap a component directly.</span></p></br></br><pre data-language=\"plain\">\nmain.ts\n\nimport { bootstrapApplication } from &#39;@angular/platform-browser&#39;;\nimport { appConfig } from &#39;./app/app.config&#39;;\nimport { App } from &#39;./app/app&#39;;\nbootstrapApplication(App, appConfig)\n  .catch((err) =&gt; console.error(err));\n</pre></br><p>Next, Angular initializes AppComponent, whose selector (&lt;app-root&gt;) matches the element in index.html.</p><p>For dependency injection setup, bootstrapApplication() also accepts providers such as HttpClient, Router, etc.</p></br></br><pre data-language=\"plain\">\napp.config.ts\n\nimport { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from &#39;@angular/core&#39;;\nimport { provideRouter } from &#39;@angular/router&#39;;\nimport { routes } from &#39;./app.routes&#39;;\nimport { provideHttpClient } from &#39;@angular/common/http&#39;;\nexport const appConfig: ApplicationConfig = {\n  providers: [\n    provideBrowserGlobalErrorListeners(),\n    provideZoneChangeDetection({ eventCoalescing: true }),\n    provideHttpClient(),\n    provideRouter(routes)\n  ]\n};\n</pre></br><p>Angular then builds the component tree starting from the root component, runs change detection, and updates the DOM.</p>",
                    "subjectId": 1,
                    "sectionId": 1,
                    "subSectionId": -1,
                    "contentId": 6,
                    "text": "<p>What is Angular Application load flow?</p>"
                }
            ]
        },
        {
            "name": "<p><strong>Angular CLI</strong></p>",
            "subjectId": 1,
            "sectionId": 2,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p>The <strong>Angular CLI (Command Line Interface)</strong> is a tool that helps in <strong>creating</strong>, <strong>configuring</strong>, and <strong>managing</strong> Angular projects efficiently.</p></br><p> <code>ng new my-app</code> is used for <strong>project setup</strong> and generates a new <strong>Angular project</strong>.</p><p><strong>Components</strong>, <strong>Services</strong>, <strong>Directives</strong>, <strong>Modules</strong>, <strong>Pipes</strong>, and <strong>Guards</strong> can be generated using the <strong>Angular CLI</strong>.</p></br><p>For example:</p><ul><li>To generate a <strong>Component</strong>: <code>ng generate component component-name</code></li><li>To generate a <strong>Service</strong>: <code>ng generate service service-name</code></li></ul></br><p><code>ng serve</code> runs a <strong>local development server</strong> with <strong>live reload</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 2,
                    "subSectionId": -1,
                    "contentId": 7,
                    "text": "<p>What is the purpose of Angular CLI?</p>"
                }
            ]
        },
        {
            "name": "<p><strong>Module</strong></p>",
            "subjectId": 1,
            "sectionId": 3,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p>A <strong>Module</strong> contains the <strong>logical structure</strong> of a project. It <strong>groups</strong> related <strong>Components</strong>, <strong>Directives</strong>, <strong>Pipes</strong>, and <strong>Services</strong>.</p></br><p>After the introduction of <strong>Standalone Components (Angular 14+)</strong>, the <strong>need for modules</strong> is <strong>reduced</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 3,
                    "subSectionId": -1,
                    "contentId": 8,
                    "text": "<p>What is a module in Angular?</p>"
                }
            ]
        },
        {
            "name": "<p><strong>Templates</strong></p>",
            "subjectId": 1,
            "sectionId": 4,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p>A <strong>Template</strong> in <strong>Angular</strong> is <strong>HTML</strong> with <strong>Angular syntax</strong> (such as <strong>Interpolation</strong>, <strong>Property Binding</strong>, <strong>Event Binding</strong>, <strong>Two-Way Binding</strong>, and <strong>Directives</strong>) that defines a <strong>Component&#39;s View</strong> and makes the <strong>UI dynamic</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 4,
                    "subSectionId": -1,
                    "contentId": 9,
                    "text": "<p>What are templates in Angular?</p>"
                }
            ]
        },
        {
            "name": "<p><strong>ng-template and ng-container</strong></p>",
            "subjectId": 1,
            "sectionId": 5,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p><strong>ng-template</strong>:</p></br><p><strong>ng-template </strong>is an <strong>Angular template element</strong> that holds <strong>HTML/Angular code</strong> but is <strong>not rendered in the DOM</strong> by default.</p><p>It’s mainly used with <strong>structural directives</strong> (<code>*ngIf</code>, <code>*ngFor</code>, <code>ngTemplateOutlet</code>) to render <strong>content conditionally</strong> or <strong>dynamically</strong>.</p></br><pre data-language=\"plain\">\n&lt;ng-template #noData&gt;&lt;/ng-template&gt;\n&lt;div *ngIf=&quot;items.length; else noData&quot;&gt;&lt;/div&gt;\n</pre></br><p><strong>Reusable Templates:</strong></p></br><pre data-language=\"plain\">\n&lt;ng-template #welcome&gt;&lt;/ng-template&gt;\n&lt;ng-template #goodbye&gt;&lt;/ng-template&gt;\n\n&lt;ng-container *ngTemplateOutlet=&quot;isLoggedIn ? welcome : goodbye&quot;&gt;&lt;/ng-container&gt;\n</pre></br><p><strong>Dynamic Rendering in TypeScript:</strong></p></br><pre data-language=\"plain\">\nimport { Component, ViewChild, TemplateRef, ViewContainerRef } from &#39;@angular/core&#39;;\n\n@ViewChild(&#39;login&#39;) loginTemplate!: TemplateRef&lt;any&gt;;\n@ViewChild(&#39;signup&#39;) signupTemplate!: TemplateRef&lt;any&gt;;\n@ViewChild(&#39;container&#39;, { read: ViewContainerRef }) container!: ViewContainerRef;\n</pre></br><p><strong>ng-container</strong>:</p></br><p>It’s a <strong>logical container</strong> that does <strong>not create extra DOM elements</strong>.</p><p>It <strong>groups multiple elements</strong> without wrapping them in an unnecessary <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>.</p></br></br></br></br></br>",
                    "subjectId": 1,
                    "sectionId": 5,
                    "subSectionId": -1,
                    "contentId": 10,
                    "text": "<p>What is different between ng-templace and ng-container?</p>"
                }
            ]
        },
        {
            "name": "<p><strong>Directives</strong></p>",
            "subjectId": 1,
            "sectionId": 6,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p>A <strong>Directive</strong> in <strong>Angular</strong> is a <strong>class</strong> that <strong>changes the appearance</strong>, <strong>behavior</strong>, or <strong>layout</strong> of elements <strong>dynamically</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 6,
                    "subSectionId": -1,
                    "contentId": 11,
                    "text": "<p>What is a directive?</p>"
                },
                {
                    "description": "<p><strong>Component Directives</strong>: A <strong>Component</strong> is a <strong>special type of directive</strong> that has a <strong>template</strong> and is used to build <strong>UI views</strong>. Components have their own <strong>templates</strong>, <strong>styles</strong>, and <strong>logic</strong>.</p></br><p><strong>Structural Directives</strong>: <strong>Structural Directives</strong> are <strong>Angular directives</strong> that <strong>change the structure of the DOM</strong> by <strong>adding or removing elements</strong> using <code>*ngIf</code>, <code>*ngFor</code>, or <code>*ngSwitch</code>.</p></br><p><strong>Attribute Directives</strong>: <strong>Attribute Directives</strong> are used to <strong>change the appearance</strong> or <strong>behavior</strong> of <strong>DOM elements</strong> in Angular by <strong>modifying their attributes or styles</strong> using <code>ngClass</code>, <code>ngStyle</code>, or <code>ngModel</code>.</p>",
                    "subjectId": 1,
                    "sectionId": 6,
                    "subSectionId": -1,
                    "contentId": 12,
                    "text": "<p>Explain the types of directives in Angular.</p>"
                },
                {
                    "description": "<p><strong>*ngIf</strong>: <code>*ngIf</code> <strong>conditionally adds or removes</strong> an element based on a <strong>boolean expression</strong>.</p></br><p><strong>*ngFor</strong>: <code>*ngFor</code> <strong>iterates over a list</strong> to <strong>render an element</strong> for each <strong>item</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 6,
                    "subSectionId": -1,
                    "contentId": 13,
                    "text": "<p>What is the difference between *ngIf and *ngFor?</p>"
                },
                {
                    "description": "<p><strong>track</strong> in an <code>@for</code> loop is used to <strong>uniquely identify</strong> each <strong>element</strong> in the <strong>list</strong>, which <strong>improves performance</strong> during <strong>DOM updates</strong>.</p></br><p>When using <strong>track</strong>, <strong>Angular</strong> knows which <strong>items</strong> are <strong>unchanged</strong> and which are <strong>added or removed</strong>. It only <strong>updates the necessary DOM elements</strong> without <strong>re-rendering the entire list</strong>.</p></br><p>Using an <strong>object</strong> with <strong>track</strong> is <strong>not ideal</strong> because if the <strong>object</strong> is <strong>replaced</strong> or <strong>mutated</strong>, Angular may <strong>unnecessarily re-render</strong> it.</p></br><pre data-language=\"plain\">\nthis.items = [...this.items];\n</pre></br><p>This creates a <strong>new array</strong> with the same <strong>objects</strong>, but since the <strong>object references</strong> have changed, Angular treats them as <strong>different</strong> and <strong>re-renders the entire list</strong>.</p></br></br>",
                    "subjectId": 1,
                    "sectionId": 6,
                    "subSectionId": -1,
                    "contentId": 14,
                    "text": "<pre data-language=\"plain\">\n@for (item of items; track item.id) { \n    &lt;div&gt;{{ item.name }}&lt;/div&gt; \n} \n</pre></br><p>Why do we use track in *ngFor?</p>"
                },
                {
                    "description": "<p>In the old <strong>structural directive</strong> <code>*ngFor</code>, <strong>trackBy</strong> is <strong>optional</strong> and expects a <strong>function reference</strong>, but after the introduction of the <strong>new control flow</strong>, <strong>track</strong> is <strong>mandatory</strong> in <code>@for</code> and expects a <strong>property access</strong>.</p></br><pre data-language=\"plain\">\ntrackByProductId(index: number, product: any): number {\n  return product.id;\n}\n</pre></br><pre data-language=\"plain\">\n&lt;div *ngFor=&quot;let product of products; trackBy: trackByProductId&quot;&gt; \n  {{ product.name }}\n&lt;/div&gt;\n</pre></br></br>",
                    "subjectId": 1,
                    "sectionId": 6,
                    "subSectionId": -1,
                    "contentId": 15,
                    "text": "<p>With old syntax </p></br><pre data-language=\"plain\">\n&lt;div *ngFor=&quot;let product of products; trackBy: product.id&quot;&gt; \n   {{ product.name }} \n&lt;/div&gt; \n</pre></br><p>Why do we get an error?</p>"
                },
                {
                    "description": "<p><code>*ngIf</code>, <code>*ngFor</code>, and <code>*ngSwitch</code> are based on <strong>microsyntax</strong>, which is the special <code>*</code> <strong>syntax</strong>. <strong>Angular</strong> expands this into <code>&lt;ng-template&gt;</code> behind the scenes, creating <strong>hidden layers</strong>.</p></br><pre data-language=\"plain\">\n&lt;ng-template [ngIf]=&quot;show&quot;&gt;\n  &lt;div&gt;\n    Hello\n  &lt;/div&gt;\n&lt;/ng-template&gt;\n</pre></br><p>This can make <strong>templates</strong> harder to <strong>read</strong> and <strong>debug</strong>, especially with <strong>nesting</strong>.</p></br><p>To solve this, <strong>Angular 17+</strong> introduced <strong>block-based syntax</strong> (using <code>{}</code> blocks with <code>@if</code>, <code>@for</code>, <code>@switch</code>). It’s similar to <strong>JavaScript</strong> and makes <strong>templates cleaner</strong>, <strong>more readable</strong>, and <strong>easier to debug</strong>.</p></br>",
                    "subjectId": 1,
                    "sectionId": 6,
                    "subSectionId": -1,
                    "contentId": 16,
                    "text": "<p>Why was the new control flow (<code>@if</code>, <code>@for</code>, and <code>@switch</code>) introduced when we already had <code>*ngIf</code>, <code>*ngFor</code>, and <code>*ngSwitch</code>?</p>"
                },
                {
                    "description": "<p>A <strong>Component</strong> in <strong>Angular</strong> is the <strong>basic building block</strong> of the <strong>UI</strong>, controlling a section of the <strong>view</strong> with <strong>logic</strong> and <strong>data</strong>. It consists of: <strong>TypeScript File (.ts)</strong>, <strong>HTML Template (.html)</strong>, and <strong>CSS/SCSS (.css or .scss)</strong>.</p></br><ol><li><strong>Components</strong> can be used across the app with <code>&lt;selector&gt;</code>.</li><li><strong>Components</strong> are <strong>encapsulated</strong>; each component has its own <strong>template</strong> and <strong>styles</strong>.</li><li><strong>UI (template)</strong> and <strong>logic (class)</strong> are clearly <strong>separated</strong> in components.</li></ol></br><p><strong>Encapsulation</strong> is defined as the <strong>wrapping up of data</strong> under a <strong>single unit</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 6,
                    "subSectionId": -1,
                    "contentId": 17,
                    "text": "<p>What are components in Angular?</p>"
                },
                {
                    "description": "<ol><li>All <strong>Components</strong> are <strong>Directives</strong>, but not all <strong>Directives</strong> are <strong>Components</strong>.</li><li>A <strong>Component</strong> is a <strong>special type of directive</strong> that has a <strong>template</strong> and is used to build <strong>UI views</strong>.</li><li>Other <strong>Directives</strong> (<strong>Structural</strong> or <strong>Attribute</strong>) do <strong>not have templates</strong> and are used to <strong>modify behavior</strong> or <strong>layout</strong>.</li></ol>",
                    "subjectId": 1,
                    "sectionId": 6,
                    "subSectionId": -1,
                    "contentId": 18,
                    "text": "<p>How are Components different from directives?</p>"
                },
                {
                    "description": "<p><code>@HostListener()</code> allows us to <strong>listen to events</strong> on the <strong>host element</strong> of a <strong>directive</strong> or <strong>component</strong>.</p></br><p><strong>Example</strong>: If you create a <strong>directive</strong> and want to <strong>react</strong> to <strong>mouseover</strong>, <strong>click</strong>, <strong>keydown</strong>, etc., on the <strong>element</strong> it’s applied to, you use <code>@HostListener</code>.</p>",
                    "subjectId": 1,
                    "sectionId": 6,
                    "subSectionId": -1,
                    "contentId": 19,
                    "text": "<p>What is a host listener?</p>"
                },
                {
                    "description": "<p><code>@HostBinding()</code> allows you to <strong>bind a property</strong> of the <strong>host element</strong> (like <strong>class</strong>, <strong>style</strong>, <strong>attr</strong>, <strong>disabled</strong>, etc.) to a <strong>field</strong> in your <strong>directive</strong> or <strong>component</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 6,
                    "subSectionId": -1,
                    "contentId": 20,
                    "text": "<p>What is a host binding?</p>"
                },
                {
                    "description": "<p>If you need a <strong>custom directive</strong> for <strong>highlight</strong>, it can be generated using the <strong>Angular CLI</strong> command:</p></br><pre data-language=\"plain\">\nng generate directive highlight\n</pre></br><p>A <strong>custom directive</strong> is created with the <code>@Directive</code> <strong>decorator</strong>, where the <strong>selector</strong> <code>&quot;[appHighlight]&quot;</code> is defined. It can then be used in the <strong>host element</strong> as an <strong>attribute</strong>.</p></br><p>There are two <strong>built-in decorators</strong>:</p><ul><li><code>@HostListener()</code> for <strong>listening to host element events</strong></li><li><code>@HostBinding()</code> for <strong>binding properties</strong> of the <strong>host element</strong></li></ul></br></br><pre data-language=\"plain\">\nHtml File\n\n&lt;p appHighlight&gt;Hover to see **background color change**!&lt;/p&gt;\n</pre></br></br><pre data-language=\"plain\">\nTypeSrcpt File\n\nimport { Directive, HostBinding, HostListener } from &#39;@angular/core&#39;;\n\n@Directive({\n  selector: &#39;[appHighlight]&#39;\n})\nexport class Highlight {\n\n  @HostBinding(&#39;style.backgroundColor&#39;) bgColor: string = &#39;&#39;;\n  @HostBinding(&#39;style.cursor&#39;) cursor: string = &#39;&#39;;\n  @HostBinding(&#39;style.color&#39;) textColor: string = &#39;&#39;;\n\n  constructor() { }\n\n  @HostListener(&#39;mouseenter&#39;) onMouseEnter() {\n    this.bgColor = &#39;yellow&#39;;\n    this.cursor = &#39;pointer&#39;;\n    this.textColor = &#39;red&#39;;\n  } \n\n  @HostListener(&#39;mouseleave&#39;) onMouseLeave() {\n    this.bgColor = &#39;&#39;;\n    this.cursor = &#39;&#39;;\n    this.textColor = &#39;&#39;;\n  }\n}\n</pre></br></br></br></br>",
                    "subjectId": 1,
                    "sectionId": 6,
                    "subSectionId": -1,
                    "contentId": 21,
                    "text": "<p>Example of host listener and host binding.</p>"
                }
            ]
        },
        {
            "name": "<p><strong>Service and Injectable</strong></p>",
            "subjectId": 1,
            "sectionId": 7,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p>A <strong>service</strong> in <strong>Angular</strong> is a <strong>reusable class</strong> used to <strong>share data</strong>, <strong>logic</strong>, or <strong>functions</strong> across <strong>components</strong> using <strong>dependency injection</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 7,
                    "subSectionId": -1,
                    "contentId": 22,
                    "text": "<p>What is a service in Angular?</p>"
                },
                {
                    "description": "<p>A service can be created using the Angular CLI command:</p></br><p><code>ng generate service service-name (e.g., User)</code>.</p></br><p>It generates a service class with the <strong>@Injectable()</strong> decorator. The <strong>@Injectable()</strong> decorator makes the service eligible for <strong>dependency injection</strong>.</p></br><p>import { Injectable } from &#39;@angular/core&#39;;</p></br><pre data-language=\"plain\">\n@Injectable({\n  providedIn: &#39;root&#39;\n})\nexport class User {}\n</pre></br><p>If <code><strong>providedIn: &#39;root&#39;</strong></code> is used in a service, it can be reused across the <strong>entire application</strong>. Otherwise, it needs to be <strong>registered in the </strong><code><strong>providers</strong></code><strong> array</strong> of a <strong>module</strong> or <strong>component</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 7,
                    "subSectionId": -1,
                    "contentId": 23,
                    "text": "<p>How do you create a service?</p>"
                },
                {
                    "description": "<p><strong>Dependency Injection (DI)</strong> is a <strong>design pattern</strong> in <strong>Angular</strong> that allows a <strong>class</strong> to receive its <strong>dependencies</strong> from an <strong>external source</strong> instead of creating them itself. </p></br><p>The <strong>inject()</strong> function was introduced in <strong>Angular v14+</strong>. This means we can directly perform <strong>dependency injection</strong> using the <strong>inject()</strong> function without needing to register dependencies in the <strong>constructor</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 7,
                    "subSectionId": -1,
                    "contentId": 24,
                    "text": "<p>Explain Dependency Injection in Angular.</p>"
                },
                {
                    "description": "<p><strong>Angular Injector</strong> is a <strong>mechanism</strong> that provides <strong>dependencies</strong> (like <strong>services</strong>) to <strong>components</strong>, <strong>directives</strong>, <strong>pipes</strong>, and other <strong>classes</strong> using <strong>Dependency Injection</strong>.</p><p>It <strong>creates</strong> and <strong>delivers instances</strong> when needed.</p></br><pre data-language=\"plain\">\nconstructor(private userService: UserService) {}\n</pre></br><p>Here, <strong>Angular</strong> uses the <strong>injector</strong> to provide an <strong>instance</strong> of <strong>UserService</strong> to the <strong>component</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 7,
                    "subSectionId": -1,
                    "contentId": 25,
                    "text": "<p>Explain the concept of the Angular Injector.</p>"
                },
                {
                    "description": "<p><strong>@Injectable()</strong> is a <strong>decorator</strong> that marks a <strong>class</strong> as available to be <strong>injected</strong> as a <strong>dependency</strong> into other <strong>classes</strong> (like <strong>components</strong>, <strong>directives</strong>, or <strong>services</strong>).</p>",
                    "subjectId": 1,
                    "sectionId": 7,
                    "subSectionId": -1,
                    "contentId": 26,
                    "text": "<p>What is injectable?</p>"
                },
                {
                    "description": "<p>We can use @Injectable at <strong>root level</strong>, <strong>module level</strong>, and <strong>component level</strong>. </p></br><p>If <code>providedIn</code> is root (<code>@Injectable({ providedIn: &#39;root&#39; })</code>), it can be <strong>used across the application</strong>. For the <strong>module level</strong>, we can add it in <strong>NgModule</strong> using the <strong>providers array</strong>. For the <strong>component level</strong>, we can add it in the <strong>providers array</strong> for any specific component.</p>",
                    "subjectId": 1,
                    "sectionId": 7,
                    "subSectionId": -1,
                    "contentId": 27,
                    "text": "<p>What is the level of injectable?</p>"
                },
                {
                    "description": "<p><strong>Angular’s Dependency Injection (DI)</strong> is powered by an <strong>injector system</strong>, which is essentially a <strong>hierarchical registry</strong> of <strong>providers</strong> that knows how to <strong>create</strong> and <strong>supply instances</strong> of <strong>services</strong> when needed.</p></br><p>Each <strong>injector</strong> holds a <strong>provider</strong> and each <strong>provider</strong> maps a <strong>token</strong> (usually the <strong>service class</strong>) to a <strong>factory function</strong> that tells <strong>Angular</strong> how to <strong>create the instance</strong>.</p></br><p>When a <strong>component</strong> requests a <strong>dependency</strong>, <strong>Angular</strong> checks its <strong>constructor</strong>, looks up the <strong>token</strong> in the <strong>nearest injector</strong>, <strong>creates the instance</strong> if not cached, and <strong>reuses it</strong> for future requests.</p><p>This allows <strong>services</strong> to be <strong>singleton</strong> at the <strong>root</strong> or <strong>scoped</strong> to <strong>modules/components</strong>, depending on where they’re <strong>provided</strong>.</p></br><p><strong>Note:</strong> A <strong>factory function</strong> is just a <strong>function</strong> that <strong>creates</strong> and <strong>returns</strong> an <strong>object</strong> (or <strong>value</strong>) instead of using <code>new</code>.</p>",
                    "subjectId": 1,
                    "sectionId": 7,
                    "subSectionId": -1,
                    "contentId": 28,
                    "text": "<p>How does Angular handle dependency injection under the hood?</p>"
                }
            ]
        },
        {
            "name": "<p><strong>Angular lifecycle hooks</strong></p>",
            "subjectId": 1,
            "sectionId": 8,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p><strong>Lifecycle hooks</strong> are <strong>special methods</strong> in <strong>Angular</strong> that get called <strong>automatically</strong> at different stages of a <strong>component</strong> or <strong>directive’s life cycle</strong> — from <strong>creation</strong> to <strong>destruction</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 8,
                    "subSectionId": -1,
                    "contentId": 29,
                    "text": "<p>What are lifecycle hooks in Angular?</p>"
                },
                {
                    "description": "<table style=\"border: 1px solid #000;\"><tbody><tr><td data-row=\"1\"><strong>Hook</strong> <strong>Timing / When it Runs</strong> <strong>Purpose / Usage Example</strong></td></tr><tr><td data-row=\"2\"> <strong>1. </strong><code><strong>ngOnChanges(changes: SimpleChanges)</strong></code></td><td data-row=\"2\">Called <strong>before </strong><code><strong>ngOnInit</strong></code> and <strong>whenever input (</strong><code><strong>@Input()</strong></code><strong>) values change</strong></td><td data-row=\"2\">React when parent updates input properties</td></tr><tr><td data-row=\"3\"><strong>2. </strong><code><strong>ngOnInit()</strong></code></td><td data-row=\"3\">Called <strong>once</strong>, after first <code>ngOnChanges</code></td><td data-row=\"3\">Perform <strong>initialization logic</strong>, fetch API data, or set up the component</td></tr><tr><td data-row=\"4\"><strong>3. </strong><code><strong>ngDoCheck()</strong></code></td><td data-row=\"4\">Called <strong>during every change detection cycle</strong></td><td data-row=\"4\">Use for <strong>custom change detection logic</strong> not handled by Angular automatically</td></tr><tr><td data-row=\"5\"><strong>4. </strong><code><strong>ngAfterContentInit()</strong></code></td><td data-row=\"5\">Called <strong>once</strong> after projecting content into the component (using <code>&lt;ng-content&gt;</code>)</td><td data-row=\"5\">React after external content is projected</td></tr><tr><td data-row=\"6\"><strong>5. </strong><code><strong>ngAfterContentChecked()</strong></code></td><td data-row=\"6\">Called <strong>after every check</strong> of projected content</td><td data-row=\"6\">Respond to changes in projected content</td></tr><tr><td data-row=\"7\"><strong>6. </strong><code><strong>ngAfterViewInit()</strong></code></td><td data-row=\"7\">Called <strong>once</strong> after component’s view (and child views) are initialized</td><td data-row=\"7\">Access child components, directives, or DOM elements (e.g., via <code>@ViewChild</code>)</td></tr><tr><td data-row=\"8\"><strong>7. </strong><code><strong>ngAfterViewChecked()</strong></code></td><td data-row=\"8\">Called <strong>after every check</strong> of component’s view</td><td data-row=\"8\">Handle changes that need to react to view updates</td></tr><tr><td data-row=\"9\"><strong>8. </strong><code><strong>ngOnDestroy()</strong></code></td><td data-row=\"9\">Called <strong>just before</strong> Angular destroys the component</td><td data-row=\"9\"><strong>Cleanup</strong> — unsubscribe observables, detach event listeners, clear intervals</td></tr></tbody></table></br>",
                    "subjectId": 1,
                    "sectionId": 8,
                    "subSectionId": -1,
                    "contentId": 30,
                    "text": "<p>Explain some commonly used lifecycle hooks.</p>"
                },
                {
                    "description": "<p>When an Angular <strong>component loads</strong>, the <strong>first lifecycle hook</strong> that is called is <code><strong>ngOnChanges()</strong></code>, <strong>if the component has any </strong><code><strong>@Input()</strong></code><strong> properties</strong>.</p></br><p>If there are <strong>no </strong><code><strong>@Input()</strong></code><strong> bindings</strong>, then Angular skips <code>ngOnChanges()</code> and directly calls <code><strong>ngOnInit()</strong></code>.</p>",
                    "subjectId": 1,
                    "sectionId": 8,
                    "subSectionId": -1,
                    "contentId": 31,
                    "text": "<p>When a component loads, which lifecycle hook is called first?</p>"
                },
                {
                    "description": "<p>The <code><strong>constructor()</strong></code> is a <strong>TypeScript/JavaScript class feature</strong>, not an Angular lifecycle hook.</p></br><p>The <strong>constructor is called first</strong> because it’s part of the <strong>class instantiation process in TypeScript/JavaScript</strong>, not Angular’s lifecycle.</p></br><p>The <strong>constructor’s job</strong> is only to:</p><ul><li>Initialize <strong>class fields</strong></li><li>Inject <strong>dependencies</strong> via Angular’s <strong>Dependency Injection (DI)</strong> system</li></ul></br>",
                    "subjectId": 1,
                    "sectionId": 8,
                    "subSectionId": -1,
                    "contentId": 32,
                    "text": "<p>Why is constructor() called first in Angular?</p>"
                },
                {
                    "description": "<p>The <code><strong>constructor()</strong></code> is a <strong>TypeScript/JavaScript class feature</strong>, not an Angular lifecycle hook.</p></br><p>The <strong>constructor runs too early</strong>, before Angular sets <code>@Input()</code> properties.</p></br><p><code>ngOnInit()</code> runs <strong>after Angular has finished initializing inputs and setting up the component</strong>.</p></br><p><code><strong>ngOnInit()</strong></code> is guaranteed to run <strong>once</strong>, after inputs are ready, making it the best place for <strong>component initialization logic</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 8,
                    "subSectionId": -1,
                    "contentId": 33,
                    "text": "<p>Why do we need ngOnInit() if the constructor runs once?</p>"
                }
            ]
        },
        {
            "name": "<p><strong>Data Binding</strong></p>",
            "subjectId": 1,
            "sectionId": 9,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p><strong>Data binding in Angular</strong> is the <strong>mechanism</strong> that <strong>connects the component class</strong> (TypeScript) with the <strong>template</strong> (HTML). It allows data to flow <strong>between the model and the view</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 9,
                    "subSectionId": -1,
                    "contentId": 34,
                    "text": "<p>How does data binding work in Angular?</p>"
                },
                {
                    "description": "<h3><strong>Types of Data Binding</strong></h3></br><ul><li><strong>One-Way Binding:</strong> In <strong>one-way binding</strong>, data flows in <strong>one direction</strong>.</li></ul></br><p><strong>Interpolation (</strong><code><strong>{{ }}</strong></code><strong>):</strong> Interpolation <strong>binds data from the component to the view</strong>. It uses <strong>double curly braces </strong><code><strong>{{}}</strong></code> to bind and display data in the template.</p></br><pre data-language=\"plain\">\n&lt;h1&gt;{{ title }}&lt;/h1&gt;\n</pre></br><p><strong>Property Binding (</strong><code><strong>[property]</strong></code><strong>):</strong> Property binding <strong>updates the UI from the component</strong>, such as <code>[src]</code>, <code>[ngClass]</code>, <code>[ngStyle]</code>. It uses <strong>square brackets</strong> to bind data from the component to the view.</p></br><p><strong>Event Binding (</strong><code><strong>(event)</strong></code><strong>):</strong> Event binding <strong>emits user actions to the component</strong>, such as <code>(click)</code>, <code>(change)</code>.</p></br><ul><li><strong>Two-Way Binding:</strong> In two-way binding, data flows in both directions — from the component to the view and from the view back to the component. Example: <code>[(ngModel)]</code>.</li></ul></br><pre data-language=\"plain\">\n&lt;input [(ngModel)]=&quot;username&quot;&gt;\n</pre>",
                    "subjectId": 1,
                    "sectionId": 9,
                    "subSectionId": -1,
                    "contentId": 35,
                    "text": "<p>Explain one-way and two-way binding.</p>"
                }
            ]
        },
        {
            "name": "<p><strong>Pipes</strong></p>",
            "subjectId": 1,
            "sectionId": 10,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p><strong>An Angular Pipe</strong> is a <strong>feature</strong> that <strong>transforms data</strong> in <strong>templates</strong> before <strong>displaying</strong> it. It is used with the <strong>| (pipe) operator</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 10,
                    "subSectionId": -1,
                    "contentId": 36,
                    "text": "<p>What is an Angular Pipe?</p>"
                },
                {
                    "description": "<p>If I need a <strong>custom pipe</strong> for <strong>uppercase</strong>, it can be generated using the <strong>Angular CLI command</strong></p><p><code>ng generate pipe uppercase</code>.</p></br><p>A <strong>custom pipe</strong> is created with the <strong>@Pipe decorator</strong>, where the <strong>name: &#39;uppercase&#39;</strong> is defined. It can then be used in a <strong>template element</strong> with the <strong>pipe (|) operator</strong>. Every <strong>custom pipe</strong> implements the built-in <strong>transform() method</strong>, which has the signature:</p><p><code>transform(value: unknown, ...args: unknown[]): unknown</code>.</p></br><p>If the <strong>value</strong> is <strong>null</strong>, <strong>undefined</strong>, or an <strong>empty string</strong>, the pipe returns an <strong>empty string</strong>; otherwise, it returns <strong>value.toUpperCase()</strong>.</p></br><pre data-language=\"plain\">\nimport { Pipe, PipeTransform } from &#39;@angular/core&#39;;\n\n@Pipe({\n  name: &#39;uppercase&#39;,\n})\nexport class UppercasePipe implements PipeTransform {\n  transform(value: string, ...args: unknown[]): unknown {\n    return value ? value.toUpperCase() : &#39;&#39;;\n  }\n}\n</pre>",
                    "subjectId": 1,
                    "sectionId": 10,
                    "subSectionId": -1,
                    "contentId": 37,
                    "text": "<p>How do you create a custom pipe?</p>"
                },
                {
                    "description": "<p>The <strong>async pipe</strong> is used in <strong>templates</strong> to <strong>subscribe</strong> to an <strong>Observable</strong> or <strong>Promise</strong> automatically and <strong>display</strong> the latest <strong>emitted value</strong>.</p><p>It also handles <strong>unsubscribe</strong> when the <strong>component</strong> is <strong>destroyed</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 10,
                    "subSectionId": -1,
                    "contentId": 38,
                    "text": "<p>What is the purpose of the async pipe in Angular?</p>"
                },
                {
                    "description": "<p>If you have <strong>user$ Observable</strong>:</p><ul><li>If we use <strong>user$ | async</strong> multiple times in the same <strong>template</strong>, Angular will create a <strong>new subscription</strong> each time.</li><li><strong>async pipe</strong> only works inside the <strong>template</strong>.</li><li><strong>async pipe</strong> does not provide a way to handle <strong>errors</strong> emitted by an <strong>Observable</strong> and <strong>cannot use</strong> an <strong>RxJS operator</strong>.</li><li>Every time the <strong>Observable emits</strong>, <strong>async pipe</strong> triggers <strong>change detection</strong>.</li><li>We have to optimize with <strong>ChangeDetectionStrategy.OnPush</strong>.</li></ul>",
                    "subjectId": 1,
                    "sectionId": 10,
                    "subSectionId": -1,
                    "contentId": 39,
                    "text": "<p>What is the drawback of an async pipe?</p>"
                },
                {
                    "description": "<p><strong>Pure pipes</strong> run only when the <strong>input changes</strong> and are <strong>performance-friendly, </strong>while <strong>impure pipes</strong> (declared with <strong>pure: false</strong>) run on <strong>every change detection cycle </strong>and should be used only when working with <strong>mutable data</strong>.</p></br><p>An <strong>impure pipe</strong> can be defined by setting the flag <strong>pure: false</strong> inside the <strong>@Pipe decorator</strong>; otherwise, by default, a pipe is <strong>pure</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 10,
                    "subSectionId": -1,
                    "contentId": 40,
                    "text": "<p>What is the difference between Pure and Impure Pipe?</p>"
                }
            ]
        },
        {
            "name": "<p><strong>Routing</strong></p>",
            "subjectId": 1,
            "sectionId": 11,
            "subSectionId": -1,
            "subSections": [
                {
                    "name": "<p><strong>Routing with Module</strong></p>",
                    "subjectId": 1,
                    "sectionId": 11,
                    "subSectionId": 12,
                    "subSections": [],
                    "contents": [
                        {
                            "description": "<p>In Angular, <code>RouterModule.forRoot()</code> is used in the <strong>root module</strong> to configure <strong>global routes</strong>. It sets up the <strong>Router service</strong> and makes routing directives like <code>&lt;router-outlet&gt;</code> and <code>routerLink</code> available throughout the app. We use <code>.forRoot()</code> only once to ensure the Router is a <strong>singleton</strong>, and in <strong>feature modules</strong>, we use <code>RouterModule.forChild()</code> to add additional routes without creating multiple Router instances.</p></br><p>When <strong>navigation</strong> happens, the <strong>Router</strong> first <strong>listens for any URL change</strong> — either through a <strong>routerLink</strong> or <strong>programmatically using the Router service</strong>.</p><p> It <strong>matches</strong> them with <strong>configured routes</strong>, <strong>checks guards</strong>, <strong>loads the respective component</strong>, and <strong>renders it inside </strong><code><strong>&lt;router-outlet&gt;</strong></code>.</p></br><pre data-language=\"plain\">\n// app.module.ts (root routes)\n\nimport { NgModule } from &#39;@angular/core&#39;;\nimport { RouterModule, Routes } from &#39;@angular/router&#39;;\nimport { HomeComponent } from &#39;./home/home.component&#39;;\nimport { AboutComponent } from &#39;./about/about.component&#39;;\n\nconst routes: Routes = [\n  { path: &#39;home&#39;, component: HomeComponent },\n  { path: &#39;about&#39;, component: AboutComponent },\n  { path: &#39;&#39;, redirectTo: &#39;home&#39;, pathMatch: &#39;full&#39; }, // default route\n  { path: &#39;**&#39;, redirectTo: &#39;home&#39; } // wildcard route\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],   // configure routes\n  exports: [RouterModule]                   // export for use in AppModule\n})\nexport class AppRoutingModule {}\n</pre></br></br><pre data-language=\"plain\">\n// app-routing.module.ts (root routes)\n\nimport { NgModule } from &#39;@angular/core&#39;;\nimport { BrowserModule } from &#39;@angular/platform-browser&#39;;\nimport { AppComponent } from &#39;./app.component&#39;;\nimport { AppRoutingModule } from &#39;./app-routing.module&#39;;\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    AppRoutingModule   // ✅ routing included here\n  ],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}\n</pre>",
                            "subjectId": 1,
                            "sectionId": 11,
                            "subSectionId": 12,
                            "contentId": 41,
                            "text": "<p>How do you handle routing in Angular?</p>"
                        },
                        {
                            "description": "<p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">In Angular, </span><code style=\"color: rgb(0, 0, 0); background-color: rgb(236, 236, 236);\">RouterModule.forRoot()</code><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\"> is used in the </span><strong style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">root module</strong><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\"> to configure </span><strong style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">global routes</strong><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">.</span></p></br><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">We use </span><code style=\"background-color: rgb(236, 236, 236); color: rgb(0, 0, 0);\">RouterModule.forChild()</code><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\"> to add additional routes without creating multiple Router instances.</span></p>",
                            "subjectId": 1,
                            "sectionId": 11,
                            "subSectionId": 12,
                            "contentId": 42,
                            "text": "<p>Can you explain RouterModule.forRoot() and RouterModule.forChild()</p>"
                        }
                    ]
                },
                {
                    "name": "<p><strong>Routing with Standalone Component</strong></p>",
                    "subjectId": 1,
                    "sectionId": 11,
                    "subSectionId": 13,
                    "subSections": [],
                    "contents": [
                        {
                            "description": "<p>With standalone components, routing is configured <strong>directly in </strong><code><strong>main.ts</strong></code> using <code>provideRouter()</code>. Each component has <code>standalone: true</code> and can import <code>RouterModule</code> for directives like <code>&lt;router-outlet&gt;</code> and <code>routerLink</code>. This removes the need for NgModules, making routing simpler and more modular.</p>",
                            "subjectId": 1,
                            "sectionId": 11,
                            "subSectionId": 13,
                            "contentId": 43,
                            "text": "<p>How do you handle routing in Angular?</p>"
                        }
                    ]
                }
            ],
            "contents": [
                {
                    "description": "<p>In <strong>Angular</strong>, <strong>Routing</strong> is the mechanism that allows us to <strong>navigate between different views (components/pages)</strong> in a Single Page Application (SPA) without reloading the entire page.</p></br><p>A <strong>Single Page Application (SPA)</strong> is a <strong>web application that loads a single HTML page (index.html)</strong> and dynamically updates the <strong>content</strong>, <strong>without refreshing the entire page</strong>.</p></br>",
                    "subjectId": 1,
                    "sectionId": 11,
                    "subSectionId": -1,
                    "contentId": 44,
                    "text": "<p>What is Routing in Angular?</p>"
                },
                {
                    "description": "<p>There are two approch to access route. </p><ol><li>snapshot</li><li>subscribe</li></ol></br><p><strong>Pass data in navigation</strong></p></br><pre data-language=\"plain\">\nconst routes: Routes = [\n  {\n    path: &#39;product/:id&#39;,\n    component: ProductComponent,\n    data: { title: &#39;Product Details&#39; } // Static Route Data\n  }\n];\n</pre></br><pre data-language=\"plain\">\n// Query Parameters (?key=value)\nthis.router.navigate([&#39;/search&#39;], { queryParams: { term: &#39;angular&#39; } });\n</pre></br><pre data-language=\"plain\">\n// Route Parameters (:id)\nthis.router.navigate([&#39;/user&#39;, 5]); // 5 is the id\n</pre></br><p><strong>Access data from Route</strong></p></br><pre data-language=\"plain\">\n// Snapshot approach\nthis.userId = this.route.snapshot.paramMap.get(&#39;id&#39;)!;\nthis.term = this.route.snapshot.queryParamMap.get(&#39;term&#39;);\n\n// subscribe to param or queryParam changes\nthis.route.paramMap.subscribe(params =&gt; {\n      this.userId = params.get(&#39;id&#39;)!;\n });\nthis.route.queryParamMap.subscribe(params =&gt; {\n      this.term = params.get(&#39;term&#39;)!;\n });\n\n// Static Route Data\nthis.route.data.subscribe(data =&gt; {\n  console.log(data[&#39;title&#39;]); // static title\n});\n</pre>",
                    "subjectId": 1,
                    "sectionId": 11,
                    "subSectionId": -1,
                    "contentId": 45,
                    "text": "<p>How to access route parameters, query parameters, and static route data?</p>"
                },
                {
                    "description": "<p><code><strong>RouterModule</strong></code> is an <strong>Angular module</strong> that provides all the necessary <strong>services</strong>, <strong>directives</strong>, and <strong>configurations</strong> for <strong>routing</strong> and <strong>navigation</strong> in an Angular application.</p></br><p><code>router-outlet</code> is a <strong>placeholder directive</strong> that <strong>loads the routed component</strong> at a <strong>specific location</strong> in the template.</p>",
                    "subjectId": 1,
                    "sectionId": 11,
                    "subSectionId": -1,
                    "contentId": 46,
                    "text": "<p>Explain RouterModule and RouterOutlet.</p>"
                }
            ]
        },
        {
            "name": "<p><strong>Forms</strong></p>",
            "subjectId": 1,
            "sectionId": 14,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<ul><li><strong>Template-Driven Forms</strong> are built mainly in the <strong>HTML template</strong> using Angular directives (<strong>ngModel</strong>, <strong>ngForm</strong>), whereas <strong>Reactive Forms</strong> are built in <strong>TypeScript</strong> using <strong>FormControl</strong>, <strong>FormGroup</strong>, and <strong>FormBuilder</strong>.</li></ul></br><ul><li> For <strong>data binding</strong>, Template-Driven Forms use <strong>ngModel</strong>, while Reactive Forms use <strong>FormControl</strong>.</li></ul></br><ul><li>For <strong>validation</strong>, Template-Driven Forms use <strong>directives</strong> (such as <strong>required</strong>, <strong>minLength</strong>), whereas Reactive Forms use <strong>Validators</strong>.</li></ul></br><p> Therefore, Template-Driven Forms are <strong>not suitable</strong> for <strong>large and complex forms</strong>, but Reactive Forms are <strong>well-suited</strong> for them.</p>",
                    "subjectId": 1,
                    "sectionId": 14,
                    "subSectionId": -1,
                    "contentId": 47,
                    "text": "<p>What is the difference between reactive forms and template-driven forms?</p>"
                },
                {
                    "description": "<ul><li><strong>FormControl</strong>: Represents a <strong>single form field</strong> (<strong>input</strong>, <strong>select</strong>, etc.).</li></ul></br><ul><li><strong>FormGroup</strong>: A <strong>collection</strong> of <strong>FormControl</strong> elements, treating them as a <strong>unit</strong>.</li></ul></br><ul><li><strong>FormArray</strong>: A <strong>collection</strong> of <strong>single form fields</strong> or <strong>FormGroup</strong>, like an <strong>array</strong>.</li></ul>",
                    "subjectId": 1,
                    "sectionId": 14,
                    "subSectionId": -1,
                    "contentId": 48,
                    "text": "<p>What is a FormGroup, FormControl FormArray in Angular Reactive Forms?</p>"
                },
                {
                    "description": "<p>In Template-Driven Forms, we can use built-in directives for validations such as <code>required</code>, <code>minlength</code>, <code>maxlength</code>, and <code>pattern</code>. We can also implement custom validations using directives that return validation errors.</p></br><pre data-language=\"plain\">\nCustom &quot;noSpace&quot; validator\n\nimport { Directive } from &#39;@angular/core&#39;;\nimport { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from &#39;@angular/forms&#39;;\n\n@Directive({\n  selector: &#39;[appNoSpace]&#39;,\n  providers: [{ provide: NG_VALIDATORS, useExisting: NoSpaceDirective, multi: true }]\n})\nexport class NoSpaceDirective implements Validator {\n  validate(control: AbstractControl): ValidationErrors | null {\n    const value = control.value;\n    if (value &amp;&amp; value.includes(&#39; &#39;)) {\n      return { noSpace: true };\n    }\n    return null;\n  }\n}\n</pre></br><pre data-language=\"plain\">\nUse in Template\n\n&lt;form #myForm=&quot;ngForm&quot;&gt;\n  &lt;input name=&quot;username&quot; ngModel appNoSpace required /&gt;\n  &lt;div *ngIf=&quot;myForm.controls[&#39;username&#39;]?.errors?.noSpace&quot;&gt;\n    Spaces are not allowed.\n  &lt;/div&gt;\n&lt;/form&gt;\n</pre></br></br></br></br>",
                    "subjectId": 1,
                    "sectionId": 14,
                    "subSectionId": -1,
                    "contentId": 49,
                    "text": "<p>How is form validation handled Template Driven Form in Angular?</p>"
                },
                {
                    "description": "<p>In Reactive Forms, we can use built-in validators such as <code>Validators.required</code>, <code>Validators.minLength()</code>, and <code>Validators.pattern()</code>. We can also implement custom validations.</p></br><p><strong>Custom Validator for FormControl:</strong></p><pre data-language=\"plain\">\nExample: No Spaces Validator\n\nimport { AbstractControl, ValidationErrors, ValidatorFn } from &#39;@angular/forms&#39;;\n\nexport function noSpaceValidator(): ValidatorFn {\n  return (control: AbstractControl): ValidationErrors | null =&gt; {\n    if (control.value &amp;&amp; control.value.includes(&#39; &#39;)) {\n      return { noSpace: true }; // invalid\n    }\n    return null; // valid\n  };\n}\n</pre></br><pre data-language=\"plain\">\nUse Custom Validator in FormControl\n\nimport { FormGroup, FormControl, Validators } from &#39;@angular/forms&#39;;\n\nthis.userForm = new FormGroup({\n  username: new FormControl(&#39;&#39;, [Validators.required, noSpaceValidator()])\n});\n</pre></br><p><strong>Custom Validator for FormGroup:</strong></p><pre data-language=\"plain\">\nexport function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {\n  const password = group.get(&#39;password&#39;)?.value;\n  const confirmPassword = group.get(&#39;confirmPassword&#39;)?.value;\n\n  return password === confirmPassword ? null : { passwordsMismatch: true };\n}\n\n// Usage\nthis.registerForm = new FormGroup({\n  password: new FormControl(&#39;&#39;, Validators.required),\n  confirmPassword: new FormControl(&#39;&#39;, Validators.required)\n}, { validators: passwordMatchValidator });\n</pre></br></br></br>",
                    "subjectId": 1,
                    "sectionId": 14,
                    "subSectionId": -1,
                    "contentId": 50,
                    "text": "<p>How is form validation handled Reactive Form in Angular?</p>"
                },
                {
                    "description": "<pre data-language=\"plain\">\n&lt;form [formGroup]=&quot;myForm&quot; (ngSubmit)=&quot;onSubmit()&quot;&gt;\n  &lt;div&gt;\n    &lt;label&gt;Email: &lt;/label&gt;\n    &lt;input type=&quot;email&quot; formControlName=&quot;email&quot; /&gt;\n\n    @let emailControl = myForm.get(&#39;email&#39;);\n\n    @if(emailControl?.touched &amp;&amp; emailControl?.invalid) {\n      @let emailControlErrors = emailControl?.errors;\n\n      @if(emailControlErrors?.[&#39;required&#39;]) {\n        &lt;small&gt;Email is required&lt;/small&gt;\n      }\n\n      @if(emailControlErrors?.[&#39;email&#39;]) {\n        &lt;small&gt;Invalid email format&lt;/small&gt;\n      }\n\n      @if(emailControlErrors?.[&#39;minlength&#39;]) {\n        &lt;small&gt;Minimum length of email should be 6&lt;/small&gt;\n      }\n    }\n  &lt;/div&gt;\n\n  &lt;button type=&quot;submit&quot; [disabled]=&quot;myForm.invalid&quot;&gt;Submit&lt;/button&gt;\n&lt;/form&gt;\n</pre></br><pre data-language=\"plain\">\nconstructor(private fb: FormBuilder) {\n  this.myForm = this.fb.group({\n    email: [&#39;&#39;, [Validators.required, Validators.email, Validators.minLength(6)]],\n  });\n}\n\nonSubmit() {\n  if (this.myForm.invalid) {\n    this.myForm.markAllAsTouched(); // This will trigger all error messages\n    return;\n  }\n  console.log(this.myForm.value);\n}\n</pre></br></br></br>",
                    "subjectId": 1,
                    "sectionId": 14,
                    "subSectionId": -1,
                    "contentId": 51,
                    "text": "<p>How to show error in Reactive Form?</p>"
                },
                {
                    "description": "<pre data-language=\"plain\">\n&lt;form #form=&quot;ngForm&quot; (ngSubmit)=&quot;submitForm(form)&quot;&gt;\n  &lt;div&gt;\n    &lt;label for=&quot;email&quot;&gt;Email: &lt;/label&gt;\n    &lt;input\n      type=&quot;email&quot;\n      name=&quot;email&quot;\n      [(ngModel)]=&quot;user.email&quot;\n      email\n      required\n      minlength=&quot;6&quot;\n      #emailRef=&quot;ngModel&quot;\n    /&gt;\n\n    @if(emailRef.touched &amp;&amp; emailRef.invalid) {\n      @if(emailRef.errors?.[&#39;required&#39;]) {\n        &lt;small&gt;Email is required.&lt;/small&gt;\n      }\n      @if(emailRef.errors?.[&#39;email&#39;]) {\n        &lt;small&gt;Invalid email format&lt;/small&gt;\n      }\n      @if(emailRef.errors?.[&#39;minlength&#39;]) {\n        &lt;small&gt;Minimum 6 characters required.&lt;/small&gt;\n      }\n    }\n  &lt;/div&gt;\n\n  &lt;button type=&quot;submit&quot; [disabled]=&quot;form.invalid&quot;&gt;Submit&lt;/button&gt;\n&lt;/form&gt;\n</pre></br><pre data-language=\"plain\">\nuser = {\n  email: &#39;&#39;,\n  password: &#39;&#39;,\n}\n\nsubmitForm(form: NgForm) {\n  if (form.invalid) {\n    // Mark all controls as touched to show validation errors\n    Object.values(form.controls).forEach(control =&gt; control.markAsTouched());\n    return;\n  }\n\n  console.log(this.user);\n}\n</pre>",
                    "subjectId": 1,
                    "sectionId": 14,
                    "subSectionId": -1,
                    "contentId": 52,
                    "text": "<p>How to show error in Template Driven Form?</p>"
                },
                {
                    "description": "<p>We can use <strong>RxJS operators</strong> like <code><strong>debounceTime()</strong></code> and <code><strong>distinctUntilChanged()</strong></code> to optimize <code><strong>valueChanges</strong></code> at every keystroke.</p></br><ul><li><code>debounceTime()</code> delays the emission of values from an observable by a specified time <strong>after the last event</strong>.</li><li><code>distinctUntilChanged()</code> prevents an observable from emitting a value if it is the <strong>same as the previous value</strong>.</li></ul>",
                    "subjectId": 1,
                    "sectionId": 14,
                    "subSectionId": -1,
                    "contentId": 53,
                    "text": "<pre data-language=\"plain\">\nthis.myForm.get(&#39;email&#39;)?.valueChanges\n  .subscribe(value =&gt; \n      { console.log(&#39;Email changed:&#39;, value); \n  }); \n</pre></br><p>How to optimize this when valueChange fires on every keystroke?</p>"
                },
                {
                    "description": "<p>We can use the <strong>event binding approach</strong> by listening to the <code><strong>keyup</strong></code> event on the input element.</p><p>The <code>keyup</code> event is triggered on <strong>every keystroke</strong>, allowing us to capture the current input value and filter the data in real time.</p></br><pre data-language=\"plain\">\nhtml\n\n&lt;input type=&quot;text&quot; (keyup)=&quot;filterList($event)&quot; placeholder=&quot;Search item...&quot; /&gt;\n&lt;ul&gt;\n  &lt;li *ngFor=&quot;let item of filteredItems&quot;&gt;{{ item }}&lt;/li&gt;\n&lt;/ul&gt;\n</pre></br><pre data-language=\"plain\">\nts\n\nfilterList(event: any) {\n  const value = event.target.value.toLowerCase();\n  this.filteredItems = this.items.filter(item =&gt;\n    item.toLowerCase().includes(value)\n  );\n}\n</pre>",
                    "subjectId": 1,
                    "sectionId": 14,
                    "subSectionId": -1,
                    "contentId": 54,
                    "text": "<p>If I need to filter some item at every kaystoke of user. How can we implement with Event binding approach?</p>"
                },
                {
                    "description": "<p>In Angular Reactive Forms, if we want to dynamically add multiple sets of controls (like <code>name</code>, <code>email</code>, <code>phoneNumber</code>) every time the user clicks a button, we can use a <code><strong>FormArray</strong></code>.</p></br><p><strong>Explanation:</strong></p><ul><li><code><strong>FormArray</strong></code> is a collection of <code><strong>FormGroup</strong></code> or <code><strong>FormControl</strong></code>.</li><li>Each time the button is clicked, we push a new <code><strong>FormGroup</strong></code> (with <code>name</code>, <code>email</code>, and <code>phoneNumber</code> controls) into the <code>FormArray</code>.</li><li>This way, the user can add multiple &quot;rows&quot; of data dynamically.</li></ul></br></br><pre data-language=\"plain\">\n&lt;form [formGroup]=&quot;userForm&quot; (ngSubmit)=&quot;onSubmit()&quot;&gt;\n  &lt;div formArrayName=&quot;users&quot;&gt;\n    @for(userGroup of users.controls; track userGroup; let i=$index) {\n      &lt;div [formGroupName]=&quot;i&quot; class=&quot;user-form&quot;&gt;\n        &lt;div&gt;\n          &lt;label for=&quot;name&quot;&gt;Name&lt;/label&gt;\n          &lt;input type=&quot;text&quot; name=&quot;name&quot; formControlName=&quot;name&quot; /&gt;\n          @if(userGroup.get(&#39;name&#39;)?.touched &amp;&amp; userGroup.get(&#39;name&#39;)?.invalid) {\n            &lt;small&gt;Name is required&lt;/small&gt;\n          }\n        &lt;/div&gt;\n\n        &lt;div&gt;\n          &lt;label for=&quot;email&quot;&gt;Email&lt;/label&gt;\n          &lt;input type=&quot;text&quot; name=&quot;email&quot; formControlName=&quot;email&quot; /&gt;\n          @if(userGroup.get(&#39;email&#39;)?.touched &amp;&amp; userGroup.get(&#39;email&#39;)?.invalid) {\n            @let emailControlError = userGroup.get(&#39;email&#39;)?.errors;\n\n            @if(emailControlError?.[&#39;required&#39;]) {\n              &lt;small&gt;Email is required.&lt;/small&gt;\n            }\n            @if(emailControlError?.[&#39;email&#39;]) {\n              &lt;small&gt;Invalid email.&lt;/small&gt;\n            }\n          }\n        &lt;/div&gt;\n\n        &lt;div&gt;\n          &lt;label for=&quot;phoneNumber&quot;&gt;Phone Number&lt;/label&gt;\n          &lt;input type=&quot;text&quot; name=&quot;phoneNumber&quot; formControlName=&quot;phoneNumber&quot; /&gt;\n          @if(userGroup.get(&#39;phoneNumber&#39;)?.touched &amp;&amp; userGroup.get(&#39;phoneNumber&#39;)?.invalid) {\n            &lt;small&gt;Phone Number is required&lt;/small&gt;\n          }\n        &lt;/div&gt;\n      &lt;/div&gt;\n    }\n  &lt;/div&gt;\n\n  &lt;button type=&quot;button&quot; (click)=&quot;addUser()&quot;&gt;Add Another User&lt;/button&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/form&gt;\n</pre></br><pre data-language=\"plain\">\nimport { Component } from &#39;@angular/core&#39;;\nimport { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from &#39;@angular/forms&#39;;\n\n@Component({\n  selector: &#39;app-root&#39;,\n  imports: [ReactiveFormsModule],\n  templateUrl: &#39;./app.html&#39;,\n  styleUrls: [&#39;./app.scss&#39;]\n})\nexport class App {\n  userForm!: FormGroup;\n\n  constructor(private fb: FormBuilder) {\n    this.userForm = this.fb.group({\n      users: this.fb.array([])\n    });\n\n    this.addUser();\n  }\n\n  get users(): FormArray {\n    return this.userForm.get(&#39;users&#39;) as FormArray;\n  }\n\n  createUserForm(): FormGroup {\n    return this.fb.group({\n      name: [&#39;&#39;, [Validators.required]],\n      email: [&#39;&#39;, [Validators.required, Validators.email]],\n      phoneNumber: [&#39;&#39;, [Validators.required]],\n    });\n  }\n\n  addUser() {\n    this.users.push(this.createUserForm());\n  }\n\n  onSubmit() {\n    if (this.userForm.valid) {\n      console.log(this.userForm.value);\n    } else {\n      this.users.controls.forEach(control =&gt; control.markAllAsTouched());\n    }\n  }\n}\n</pre>",
                    "subjectId": 1,
                    "sectionId": 14,
                    "subSectionId": -1,
                    "contentId": 55,
                    "text": "<p>How to create a new form with name, email, and phoneNumber controls every time a button is clicked.</p>"
                },
                {
                    "description": "<pre data-language=\"plain\">\n// ts file\n\nformBuilder = inject(FormBuilder);\n  signUpForm = this.formBuilder.group({\n    name: [&#39;&#39;, [Validators.required]],\n    email: [&#39;&#39;, [Validators.required, Validators.email]],\n    passwordGroup: this.formBuilder.group({\n      password: [&#39;&#39;, [Validators.required]],\n      confirmPassword: [&#39;&#39;, [Validators.required]]\n    }, { validators: this.matchPassword })\n  });\n\n  matchPassword(group: AbstractControl): ValidationErrors | null {\n    const password = group.get(&#39;password&#39;);\n    const confirmPassword = group.get(&#39;confirmPassword&#39;);\n\n    if (password !== confirmPassword) {\n      return { passwordMismatch: true };\n    }\n    return null;\n  }\n</pre></br><pre data-language=\"plain\">\n// html file\n\n&lt;form [formGroup]=&quot;signUpForm&quot;&gt;\n    &lt;div&gt;\n        &lt;label&gt;Name: &lt;/label&gt;\n        &lt;input type=&quot;text&quot; formControlName=&quot;name&quot;&gt;\n    &lt;/div&gt;\n    &lt;div&gt;\n        &lt;label&gt;Name: &lt;/label&gt;\n        &lt;input type=&quot;text&quot; formControlName=&quot;name&quot;&gt;\n    &lt;/div&gt;\n    &lt;div formGroupName=&quot;passwordGroup&quot;&gt;\n        &lt;div&gt;\n            &lt;label&gt;Password: &lt;/label&gt;\n            &lt;input type=&quot;text&quot; formControlName=&quot;password&quot;&gt;\n        &lt;/div&gt;\n        &lt;div&gt;\n            &lt;label&gt;Confirm Password: &lt;/label&gt;\n            &lt;input type=&quot;text&quot; formControlName=&quot;confirmPassword&quot;&gt;\n            @let passwordGroupControl = signUpForm.get(&#39;passwordGroup&#39;);\n            @let passwordGroupErrors = passwordGroupControl?.errors;\n            @if(passwordGroupErrors?.[&#39;passwordMismatch&#39;] &amp;&amp; (passwordGroupControl?.touched)) {\n            &lt;div&gt;\n                &lt;small style=&quot;color:red;&quot;&gt;Passwords do not match&lt;/small&gt;\n            &lt;/div&gt;\n            }\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/form&gt;\n</pre></br>",
                    "subjectId": 1,
                    "sectionId": 14,
                    "subSectionId": -1,
                    "contentId": 56,
                    "text": "<p>Create a registration form with fields: name, email, password, and confirmPassword. Apply validations for required fields, and also ensure password and confirmPassword match. How will you do it in Angular?</p>"
                }
            ]
        },
        {
            "name": "<p><strong>Zone.js, NgZone and Change Detection</strong></p>",
            "subjectId": 1,
            "sectionId": 15,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p><strong>Zone.js</strong> is a JavaScript library that tracks <strong>asynchronous tasks</strong> start and finish. When a task completes, <strong>Zone.js</strong> informs <strong>NgZone</strong> (a wrapper around Zone.js), “Hey, something changed, maybe run <strong>change detection</strong>.”</p></br><p><code>NgZone</code> is an Angular service that acts as a <strong>bridge between asynchronous operations</strong> (like <code>setTimeout</code>, <code>Promise</code>, HTTP requests) and Angular’s <strong>change detection</strong> system. It is built on top of <strong>Zone.js</strong>.</p></br><p><strong>Change Detection:</strong></p><p>Change Detection in Angular is the process that updates the DOM when a component’s state changes. Change Detection runs through the component tree from top to bottom, compares the current and previous values, and updates the DOM if any value has changed.</p></br></br><p><strong>NgZone: Impact on Performance</strong></p><ul><li><strong>Pros:</strong><ul><li>Simplifies change detection by automatically tracking async operations.</li><li>Keeps the UI updated without manual intervention.</li></ul></li><li><strong>Cons / Considerations:</strong><ul><li>Every async operation triggers change detection for the <strong>entire component tree</strong> by default.</li><li>Frequent async operations (like rapid <code>setTimeout</code>, <code>setInterval</code>, or HTTP polling) can <strong>slow down performance</strong>.</li><li>To optimize, you can run tasks <strong>outside Angular’s zone</strong> using <code>ngZone.runOutsideAngular()</code> and only trigger change detection when necessary.</li></ul></li></ul>",
                    "subjectId": 1,
                    "sectionId": 15,
                    "subSectionId": -1,
                    "contentId": 57,
                    "text": "<p>What is Zone.js, NgZone and Change Detection?</p>"
                },
                {
                    "description": "<p>Zone.js detects clicks, input events, and other DOM events, as well as when an asynchronous task has completed, and informs NgZone: &#39;Hey, something changed, maybe run change detection.&#39; NgZone then tells Angular to run change detection. Change detection runs through the component tree from top to bottom, compares the current and previous values, and updates the DOM if any value has changed. Angular checks all child components, regardless of whether they are affected by the change.</p>",
                    "subjectId": 1,
                    "sectionId": 15,
                    "subSectionId": -1,
                    "contentId": 58,
                    "text": "<p>How does Angular’s change detection mechanism work?</p>"
                },
                {
                    "description": "<p>Zone.js detects <strong>clicks</strong>, <strong>input events</strong>, and other <strong>DOM events</strong>, as well as when an <strong>asynchronous task</strong> has completed, and informs <strong>NgZone</strong>: &#39;Hey, something changed, maybe run <strong>change detection</strong>.&#39; <strong>NgZone</strong> then tells <strong>Angular</strong> to run <strong>change detection</strong>.</p></br><p>If we enable the <strong>OnPush Change Detection Strategy</strong>, <strong>Angular</strong> only checks a <strong>component</strong> when one of the following happens: the <strong>component</strong> triggers an <strong>event</strong> (click, input), an <strong>@Input</strong> property changes (<strong>reference changes</strong>), or an <strong>asynchronous task</strong> has completed.</p></br><p>Otherwise, <strong>Angular</strong> skips checking the <strong>component</strong>, improving <strong>performance</strong>.</p></br><pre data-language=\"plain\">\nEnable OnPush Strategy\n\nimport { ChangeDetectionStrategy, Component } from &#39;@angular/core&#39;;\n\n@Component({\n  selector: &#39;app-child&#39;,\n  templateUrl: &#39;./child.component.html&#39;,\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class ChildComponent { }\n</pre></br>",
                    "subjectId": 1,
                    "sectionId": 15,
                    "subSectionId": -1,
                    "contentId": 59,
                    "text": "<p>If I pass the value from parent component to child component, how does child component get this value?</p>"
                },
                {
                    "description": "<p>When you disable zones (e.g., using <code>bootstrapApplication(AppComponent, { ngZone: &#39;noop&#39; })</code>), Angular will <strong>not</strong> run change detection automatically.</p></br><p>You have to handle it manually using one of these:</p></br><p>✅ <strong>ChangeDetectorRef: </strong>You can inject it and manually call:</p><pre data-language=\"plain\">\nconstructor(private cdr: ChangeDetectorRef) {}\n\nsomeAsyncOperation() {\n  fetch(&#39;...&#39;).then(() =&gt; {\n    // update some data\n    this.data = &#39;updated&#39;;\n    this.cdr.detectChanges(); // manually trigger CD\n  });\n}\n</pre></br><p>✅ <strong>ApplicationRef: </strong>You can run a global CD:</p><pre data-language=\"plain\">\nconstructor(private appRef: ApplicationRef) {}\n\nmanualRefresh() {\n  this.appRef.tick(); // run CD across the app\n}\n</pre></br><p>✅ <code>signal</code> or <code>computed</code> (in Angular 16+): When using <strong>signals</strong>, Angular automatically tracks dependencies — <strong>you don’t need </strong><code><strong>zone.js</strong></code> or manual <code>detectChanges()</code> for most cases.</p><pre data-language=\"plain\">\ncount = signal(0);\nincrease() {\n  this.count.update(c =&gt; c + 1); // view auto-updates even without zones\n}\n</pre></br>",
                    "subjectId": 1,
                    "sectionId": 15,
                    "subSectionId": -1,
                    "contentId": 60,
                    "text": "<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">If Angular does not use </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">zone.js</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">, who manages </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">change detection</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">?</span></p>"
                }
            ]
        },
        {
            "name": "<p><strong>Guards</strong></p>",
            "subjectId": 1,
            "sectionId": 16,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Angular </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Route Guards</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> are used to control access to routes based on conditions (e.g., authentication, permissions).</span></p>",
                    "subjectId": 1,
                    "sectionId": 16,
                    "subSectionId": -1,
                    "contentId": 61,
                    "text": "<p>What are Angular Guards?</p>"
                },
                {
                    "description": "<p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">1. CanActivate:</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanActivate </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">is used to prevent unauthorized access to a route.</span></p></br><p><strong>2.</strong> <strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanActivateChild:</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanActivateChild </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">is used to </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">guard child routes</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> of a particular route.</span></p></br><p><strong>3.</strong> <strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanDeactivate:</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanDeactivate </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">is a</span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> route guard</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> used to prevent navigation away from a component.</span></p></br><p><strong>4.</strong> <strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Resolve</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">: Fetches data before loading a route.</span></p></br><p><strong>5.</strong> <strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanLoad:</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanLoad </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">is used to</span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">prevent loading a module unless conditions are met (used with lazy loading).</span></p></br><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Angular deprecated CanLoad in favor of the more powerful and flexible </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanMatch </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">guard starting in </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Angular v14+</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, especially for </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">standalone components</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> and </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">lazy-loaded routes</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">.</span></p>",
                    "subjectId": 1,
                    "sectionId": 16,
                    "subSectionId": -1,
                    "contentId": 62,
                    "text": "<p>Explain the types of route guards.</p>"
                },
                {
                    "description": "<p>Authentication guards are implemented using the <code>CanActivate</code> interface, which controls access to routes based on conditions such as whether the user is logged in.</p></br><p>Authentication guards can be generated using the Angular CLI command <code>ng generate guard AuthGuard</code>. During generation, I select the <code>CanActivate</code> option, which creates a guard using <code>canActivateFn</code>. Inside the guard, I check whether the user is logged in; if yes, I return <code>true</code>, otherwise I redirect them to the login page. Finally, I apply this guard in the routing configuration by setting <code>canActivate: [AuthGuard]</code> on the required path.</p></br><pre data-language=\"plain\">\nauth.guard.ts\n\nimport { inject } from &#39;@angular/core&#39;;\nimport { CanActivateFn, Router } from &#39;@angular/router&#39;;\nimport { AuthService } from &#39;./auth.service&#39;;\n\nexport const authGuard: CanActivateFn = (route, state) =&gt; {\n  const authService = inject(AuthService);\n  const router = inject(Router);\n\n  if (authService.isLoggedIn()) {\n    return true; // allow access\n  }\n\n  // if not logged in → redirect to login\n  return router.createUrlTree([&#39;/login&#39;]);\n};\n</pre></br></br><pre data-language=\"plain\">\napp.routes.ts\n\nimport { Routes } from &#39;@angular/router&#39;;\nimport { DashboardComponent } from &#39;./dashboard/dashboard.component&#39;;\nimport { authGuard } from &#39;./auth.guard&#39;;\n\nexport const routes: Routes = [\n  {\n    path: &#39;dashboard&#39;,\n    component: DashboardComponent,\n    canActivate: [authGuard]\n  },\n  {\n    path: &#39;login&#39;,\n    loadComponent: () =&gt;\n      import(&#39;./login/login.component&#39;).then(m =&gt; m.LoginComponent),\n  },\n];\n</pre>",
                    "subjectId": 1,
                    "sectionId": 16,
                    "subSectionId": -1,
                    "contentId": 63,
                    "text": "<p>Can you explain how to implement authentication guards in Angular?</p>"
                }
            ]
        },
        {
            "name": "<p><strong>Component Communication</strong></p>",
            "subjectId": 1,
            "sectionId": 17,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p>If the <strong>communication</strong> is between <strong>parent</strong> and <strong>child</strong>, I can <strong>pass data</strong> from <strong>parent to child</strong> through <code>@Input()</code> and <strong>emit data</strong> from <strong>child to parent</strong> through <code>@Output()</code>. I can also <strong>directly access</strong> a <strong>child component instance</strong> using <code>ViewChild</code> or <code>ContentChild</code>.</p></br><p>If <strong>components</strong> are <strong>unrelated</strong>, I create a <strong>shared service</strong> and <strong>share data</strong> through it using <code>Subject</code> or <code>BehaviorSubject</code> for <strong>real-time updates</strong>.</p></br><p>For <strong>large-scale apps</strong>, I use <strong>centralized state management</strong> like <strong>NgRx</strong> to <strong>manage</strong> and <strong>share data</strong>.</p></br><p>I can also <strong>pass data</strong> through <strong>route params</strong>, <strong>query params</strong>, or <strong>route state</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 17,
                    "subSectionId": -1,
                    "contentId": 64,
                    "text": "<p>How do components communicate with each other in a large-scale Angular application?</p>"
                }
            ]
        },
        {
            "name": "<p><strong>ViewChild / ViewChildren and ContentChild / ContentChildren</strong></p>",
            "subjectId": 1,
            "sectionId": 18,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p>In <strong>Angular</strong>, <code>@ViewChild</code> is a <strong>decorator</strong> used to get a <strong>reference to a child component, directive, or DOM element</strong> that is part of the component’s <strong>view (template)</strong>.</p></br><p>It becomes available after the <strong>view is initialized</strong> (<code>ngAfterViewInit</code>).</p></br><p><strong>Accessing a DOM element:</strong></p><pre data-language=\"plain\">\n&lt;div #para&gt; View Child Example &lt;/div&gt;\n@ViewChild(&#39;para&#39;) para!: ElementRef;\n</pre></br><p><strong>Accessing a Child Component:</strong></p><pre data-language=\"plain\">\n@ViewChild(&#39;child&#39;) childComp!: ChildComponent;\n</pre></br><p><strong>Accessing a Directive:</strong></p><pre data-language=\"plain\">\n&lt;div #highlightText appHighlight&gt;View Child Decorator&lt;/div&gt;\n@ViewChild(&#39;highlightText&#39;, { read: HighlightDirective }) highlightDir!: HighlightDirective;\n</pre>",
                    "subjectId": 1,
                    "sectionId": 18,
                    "subSectionId": -1,
                    "contentId": 65,
                    "text": "<p>What is ViewChild?</p>"
                },
                {
                    "description": "<p><code>@ViewChildren</code> is a <strong>decorator</strong> in Angular that allows you to get <strong>references to multiple child components, directives, or DOM elements</strong> inside your component’s <strong>template view</strong> — unlike <code>@ViewChild</code>, which gets <strong>only one</strong>.</p></br><p>It returns a <strong>QueryList</strong>, which is a collection (like an array) of all the matching elements.</p></br><p><strong>Accessing multiple DOM elements</strong></p><pre data-language=\"plain\">\n@Component({\n  template: `\n    &lt;p #item *ngFor=&quot;let i of [1,2,3]&quot;&gt;Item {{i}}&lt;/p&gt;\n  `\n})\nexport class DemoComponent implements AfterViewInit {\n  @ViewChildren(&#39;item&#39;) items!: QueryList&lt;ElementRef&gt;;\n\n  ngAfterViewInit() {\n    this.items.forEach(el =&gt; console.log(el.nativeElement.textContent));\n  }\n}\n</pre></br><pre data-language=\"plain\">\n// Output\nItem 1\nItem 2\nItem 3\n</pre></br><p><strong>Accessing multiple Child Components</strong></p><pre data-language=\"plain\">\n@Component({\n  selector: &#39;child-comp&#39;,\n  template: `&lt;p&gt;Child&lt;/p&gt;`\n})\nexport class ChildComponent {}\n\n@Component({\n  template: `\n    &lt;child-comp *ngFor=&quot;let i of [1,2]&quot;&gt;&lt;/child-comp&gt;\n  `\n})\nexport class ParentComponent implements AfterViewInit {\n  @ViewChildren(ChildComponent) children!: QueryList&lt;ChildComponent&gt;;\n\n  ngAfterViewInit() {\n    console.log(this.children.length); // 2\n  }\n</pre><p>}</p>",
                    "subjectId": 1,
                    "sectionId": 18,
                    "subSectionId": -1,
                    "contentId": 66,
                    "text": "<p>What is ViewChildren?</p>"
                },
                {
                    "description": "<p><code>@ContentChild</code> in <strong>Angular</strong> is a <strong>decorator</strong> that allows a component to <strong>access a child element or directive</strong> that is <strong>projected into it</strong> using <code><strong>&lt;ng-content&gt;</strong></code>. It is available after <strong>ngAfterContentInit</strong></p></br><p><strong>Accessing projected content</strong></p><pre data-language=\"plain\">\n@Component({\n  selector: &#39;child-comp&#39;,\n  template: `&lt;ng-content&gt;&lt;/ng-content&gt;`\n})\nexport class ChildComponent implements AfterContentInit {\n  @ContentChild(&#39;projected&#39;) projected!: ElementRef;\n\n  ngAfterContentInit() {\n    console.log(this.projected.nativeElement.textContent);\n  }\n}\n</pre></br><pre data-language=\"plain\">\n&lt;!-- Parent Component Template --&gt;\n&lt;child-comp&gt;\n  &lt;p #projected&gt;Hello from Parent&lt;/p&gt;\n&lt;/child-comp&gt;\n</pre>",
                    "subjectId": 1,
                    "sectionId": 18,
                    "subSectionId": -1,
                    "contentId": 67,
                    "text": "<p>What is ContentChild?</p>"
                },
                {
                    "description": "<p><code>ContentChildren</code> is used to get references to <strong>multiple elements or components projected into a component</strong> via <code>&lt;ng-content&gt;</code>. It returns a <strong>QueryList</strong> and becomes available after <strong>ngAfterContentInit</strong>.</p></br><p><strong>Accessing multiple projected elements</strong></p><pre data-language=\"plain\">\n@Component({\n  selector: &#39;child-comp&#39;,\n  template: `&lt;ng-content&gt;&lt;/ng-content&gt;`\n})\nexport class ChildComponent implements AfterContentInit {\n  @ContentChildren(&#39;projected&#39;) projectedItems!: QueryList&lt;ElementRef&gt;;\n\n  ngAfterContentInit() {\n    this.projectedItems.forEach(item =&gt; \n      console.log(item.nativeElement.textContent)\n    );\n  }\n}\n</pre></br><pre data-language=\"plain\">\n&lt;!-- Parent Component Template --&gt;\n&lt;child-comp&gt;\n  &lt;p #projected&gt;Item 1&lt;/p&gt;\n  &lt;p #projected&gt;Item 2&lt;/p&gt;\n&lt;/child-comp&gt;\n</pre>",
                    "subjectId": 1,
                    "sectionId": 18,
                    "subSectionId": -1,
                    "contentId": 68,
                    "text": "<p>What is ContentChildren?</p>"
                },
                {
                    "description": "<p><strong>Content Projection</strong> is a way to <strong>pass content (HTML or components)</strong> from a <strong>parent component</strong> into a <strong>child component’s template</strong>, allowing the child to display it <strong>in a specific place</strong> using the <code>&lt;ng-content&gt;</code> tag.</p>",
                    "subjectId": 1,
                    "sectionId": 18,
                    "subSectionId": -1,
                    "contentId": 69,
                    "text": "<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">What is </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">Content Projection</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\"> in Angular?</span></p>"
                }
            ]
        },
        {
            "name": "<p><strong>Loading</strong></p>",
            "subjectId": 1,
            "sectionId": 19,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p>Angular uses <strong>eager loading</strong>, <strong>lazy loading</strong>, and <strong>preloading strategies</strong> to load components or modules in an application.</p></br><ul><li><strong>Eager loading</strong>: Loads components or modules before the application starts. This can make the initial load slower if there are many modules or components.</li><li><strong>Lazy loading</strong>: Loads components or modules only when required. For example, when a user navigates to a route, Angular loads the corresponding component dynamically. This reduces the initial bundle size and improves startup performance.</li><li><strong>Preloading</strong>: Loads components or modules in the background after the application has started. This combines the benefits of both eager and lazy loading: fast navigation because modules are already loaded, and an optimized initial load.</li></ul></br><p><strong>Notes:</strong></p><p>Earlier, Angular loaded a module before accessing its components. However, after introducing <strong>standalone components</strong>, Angular can load components without loading their modules.</p>",
                    "subjectId": 1,
                    "sectionId": 19,
                    "subSectionId": -1,
                    "contentId": 70,
                    "text": "<p>What is the difference between eager loading, lazy loading, and preloading in Angular?</p>"
                },
                {
                    "description": "<p>In the lazy loading strategy, earlier Angular used <code>loadChildren</code> to load modules before accessing components. However, after the introduction of standalone components, it uses <code>loadComponent</code> to load components directly.</p></br><p>Suppose we have a feature module (a module that encapsulates a specific feature or functionality) called <code>Admin</code>. First, we set up routing for the <code>Admin</code> module in <code>admin-routing.module.ts</code> and define a <code>routes</code> array that contains all route configurations related to this module. We then pass this <code>routes</code> array into <code>RouterModule.forChild()</code>.</p><p>Next, we configure app routing with lazy loading in <code>app-routing.module.ts</code>. In the app routing configuration, we use <code>loadChildren</code> to dynamically import the <code>AdminModule</code> when the user navigates to the <code>admin</code> routing path.</p></br><pre data-language=\"plain\">\nadmin/admin-routing.module.ts\n\nimport { NgModule } from &#39;@angular/core&#39;;\nimport { RouterModule, Routes } from &#39;@angular/router&#39;;\nimport { DashboardComponent } from &#39;./dashboard/dashboard.component&#39;;\n\nconst routes: Routes = [\n  { path: &#39;&#39;, component: DashboardComponent } // default path for admin module\n];\n\n@NgModule({\n  imports: [RouterModule.forChild(routes)],\n  exports: [RouterModule]\n})\nexport class AdminRoutingModule { }\n</pre></br><pre data-language=\"plain\">\napp-routing.module.ts\n\nimport { NgModule } from &#39;@angular/core&#39;;\nimport { RouterModule, Routes } from &#39;@angular/router&#39;;\n\nconst routes: Routes = [\n  { \n    path: &#39;admin&#39;, \n    loadChildren: () =&gt; import(&#39;./admin/admin.module&#39;).then(m =&gt; m.AdminModule) \n  },\n  { path: &#39;&#39;, redirectTo: &#39;/&#39;, pathMatch: &#39;full&#39; }\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule { }\n</pre></br>",
                    "subjectId": 1,
                    "sectionId": 19,
                    "subSectionId": -1,
                    "contentId": 71,
                    "text": "<p>Can you explain how to implement lazy loading in Angular with module?</p>"
                },
                {
                    "description": "<p>In the lazy loading strategy, earlier Angular used <code>loadChildren</code> to load modules before accessing components. However, after the introduction of standalone components, it uses <code>loadComponent</code> to load components directly.</p></br><p>Suppose we have a standalone component called <code>Admin</code>. We configure lazy loading in <code>app.routes.ts</code> by defining a <code>routes</code> array that contains all route configurations. In the <code>admin</code> route, we use <code>loadComponent</code> to dynamically import the <code>AdminComponent</code> when the user navigates to the <code>admin</code> route path.</p></br><pre data-language=\"plain\">\napp.routes.ts\n\nimport { Routes } from &#39;@angular/router&#39;;\n\nexport const routes: Routes = [\n{\npath: &#39;admin&#39;,\nloadComponent: () =&gt;\nimport(&#39;./admin/admin.component&#39;).then(m =&gt; m.AdminComponent)\n},\n{ path: &#39;&#39;, redirectTo: &#39;admin&#39;, pathMatch: &#39;full&#39; }\n];\n</pre>",
                    "subjectId": 1,
                    "sectionId": 19,
                    "subSectionId": -1,
                    "contentId": 72,
                    "text": "<p>Can you explain how to implement lazy loading in Angular with standalone component?</p>"
                },
                {
                    "description": "",
                    "subjectId": 1,
                    "sectionId": 19,
                    "subSectionId": -1,
                    "contentId": 73,
                    "text": "<p>Can you explain how to implement preloading in Angular?</p>"
                }
            ]
        },
        {
            "name": "<p><strong>Performance Optimization</strong></p>",
            "subjectId": 1,
            "sectionId": 20,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p>In Angular, I optimize <strong>performance</strong> by using <strong>OnPush change detection</strong> with <strong>immutable data</strong>, <strong>trackBy</strong> in <strong>ngFor</strong> to avoid re-rendering, and <strong>pure pipes</strong> for efficiency. I also <strong>lazy load</strong> modules or components to reduce <strong>bundle size</strong>, move <strong>heavy logic</strong> out of <strong>templates</strong>, and <strong>unsubscribe</strong> from <strong>observables</strong> to prevent <strong>memory leaks</strong>. Additionally, I use <strong>standalone components</strong> and <strong>preloading strategies</strong> to improve <strong>load time</strong>.</p></br><p><strong>Immutable Data: </strong></p><p>If a component uses the <strong>OnPush change detection strategy</strong>, it <strong>won’t detect changes</strong> to an <code>@Input()</code> property <strong>unless the input’s reference changes</strong>.</p></br><pre data-language=\"plain\">\n// ❌ Mutable (Angular won&#39;t detect inside change with OnPush)\nthis.user.name = &quot;Alice&quot;;  \n\n// ✅ Immutable (Angular detects new reference)\nthis.user = { ...this.user, name: &quot;Alice&quot; };\n</pre></br></br><p><strong>move heavy logic out of templates:</strong></p><p>If we call functions from the template for <code>*ngFor</code> or <code>*ngIf</code>, these functions are executed on every change detection cycle, whether the data has changed or not, which makes the performance slow.</p></br><pre data-language=\"plain\">\n❌ Bad Practice (heavy logic in template):\n\n&lt;div *ngFor=&quot;let user of getActiveUsers()&quot;&gt;\n  {{ calculateAge(user.dob) }}\n&lt;/div&gt;\n</pre>",
                    "subjectId": 1,
                    "sectionId": 20,
                    "subSectionId": -1,
                    "contentId": 74,
                    "text": "<p>How can you optimize Angular Application for better performance?</p>"
                },
                {
                    "description": "<p>We can use RxJS operator <strong>race</strong>, in which all observables execute simultaneously. If any one observable <strong>emits first (either value or completion)</strong>, all the other observables will be canceled or unsubscribed.</p></br><pre data-language=\"plain\">\nimport { Component } from &#39;@angular/core&#39;;\nimport { HttpClient } from &#39;@angular/common/http&#39;;\nimport { race, Observable } from &#39;rxjs&#39;;\n\n@Component({\n  selector: &#39;app-api-race&#39;,\n  template: `&lt;button (click)=&quot;callApis()&quot;&gt;Call API&lt;/button&gt;`\n})\nexport class ApiRaceComponent {\n  private apiCalls: Observable&lt;any&gt;[] = [];\n\n  constructor(private http: HttpClient) {}\n\n  callApis() {\n    // Create a new API call on every click\n    const apiCall = this.http.get(&#39;http://localhost:3000/long-api&#39;);\n    this.apiCalls.push(apiCall);\n\n    // Run race on all API calls\n    race(...this.apiCalls).subscribe({\n      next: (res) =&gt; {\n        console.log(&#39;First response wins:&#39;, res);\n        // Cancel all other pending API calls\n        this.apiCalls = [];\n      },\n      error: (err) =&gt; console.log(err)\n    });\n  }\n}\n</pre>",
                    "subjectId": 1,
                    "sectionId": 20,
                    "subSectionId": -1,
                    "contentId": 75,
                    "text": "<p>If on a button click I hit an API and the API takes 2 minutes and I keep clicking the button then when I get a response how can I cancel all the other API calls?</p>"
                },
                {
                    "description": "",
                    "subjectId": 1,
                    "sectionId": 20,
                    "subSectionId": -1,
                    "contentId": 76,
                    "text": "<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">If the application takes a long time to </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">load</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">, how can you </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">optimize</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\"> its performance?</span></p>"
                }
            ]
        },
        {
            "name": "<p><strong>Interceptor</strong></p>",
            "subjectId": 1,
            "sectionId": 21,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p><strong>Interceptor</strong> is a <strong>middleware</strong> for <strong>HTTP requests</strong> and <strong>responses</strong> in <strong>Angular</strong>. It allows us to <strong>modify requests</strong> (like adding <strong>authentication tokens</strong>), <strong>handle errors globally</strong>, or manage <strong>loaders</strong> without repeating code in every service. It improves <strong>code reusability</strong>, <strong>maintainability</strong>, and ensures <strong>consistent handling</strong> of <strong>API calls</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 21,
                    "subSectionId": -1,
                    "contentId": 77,
                    "text": "<p>What is the Interceptor?</p>"
                },
                {
                    "description": "<p>Instead of handling <strong>success</strong> and <strong>error</strong> separately in every <strong>service</strong> or <strong>component</strong>, I used an <strong>HTTP Interceptor</strong>. This allows me to capture every <strong>request</strong> and <strong>response</strong> globally. I <strong>log successes</strong>, and if there’s any <strong>error</strong> (like <strong>401</strong>, <strong>404</strong>, or <strong>500</strong>), I can show a <strong>toast</strong> or <strong>redirect to login</strong> automatically. This makes the <strong>code cleaner</strong>, <strong>reusable</strong>, and avoids <strong>duplication</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 21,
                    "subSectionId": -1,
                    "contentId": 78,
                    "text": "<p>If I have multiple APIs, I need to show success and failure for each APIs. How can I handle it at one place?</p>"
                },
                {
                    "description": "<p>In the <strong>interceptor</strong>, I check if the <strong>request URL</strong> is for <strong>login</strong> or <strong>signup</strong>. If yes, I <strong>skip adding the Authorization header</strong>. Otherwise, I <strong>clone the request</strong> and <strong>attach the token</strong>. This way, I handle it <strong>globally</strong> and avoid <strong>repeating logic</strong> in <strong>services</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 21,
                    "subSectionId": -1,
                    "contentId": 79,
                    "text": "<p>Suppose I want to add an Authorization token for all API requests through an interceptor, but in the case of login and signup APIs I don’t need to pass the token. How can we handle that scenario efficiently in Angular?</p>"
                }
            ]
        },
        {
            "name": "<p><strong>Compiler</strong></p>",
            "subjectId": 1,
            "sectionId": 22,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p>The <strong>Angular Compiler</strong> is a core part of the Angular framework that converts your application’s <strong>HTML templates</strong> and decorated <strong>TypeScript code</strong> (like components, directives, and pipes) into efficient <strong>JavaScript code</strong> that the browser can understand and execute.</p></br><p>Angular has two main compilation modes:</p></br><ul><li><strong>JIT (Just-in-Time):</strong> Used in the <strong>browser at runtime</strong> and is useful during <strong>development</strong>.</li><li><strong>AOT (Ahead-of-Time):</strong> Used in the <strong>build process</strong> before the app runs in the browser and is <strong>preferred for production</strong>.</li></ul>",
                    "subjectId": 1,
                    "sectionId": 22,
                    "subSectionId": -1,
                    "contentId": 80,
                    "text": "<p>What is the role of a compiler in angular?</p>"
                },
                {
                    "description": "<p><strong>Ahead-of-Time (AOT) compilation</strong> is the process where Angular compiles <strong>TypeScript code</strong> and <strong>HTML templates</strong> into efficient <strong>JavaScript code</strong> during <strong>build time</strong>, <strong>before the browser downloads and runs the application</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 22,
                    "subSectionId": -1,
                    "contentId": 81,
                    "text": "<p>What is Ahead-of-Time (AOT) compilation in Angular?</p>"
                }
            ]
        },
        {
            "name": "<p><strong>Challenges Faced in Angular Project</strong></p>",
            "subjectId": 1,
            "sectionId": 23,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p>One of the challenges I faced was <strong>implementing a search box</strong>. Initially, every keystroke was hitting the backend API, which <strong>created unnecessary load and poor performance</strong>. I solved this by using <strong>RxJS operators</strong> — <code>debounceTime</code> to wait for the user to stop typing, <code>distinctUntilChanged</code> to avoid duplicate searches, and <code>switchMap</code> to cancel previous API calls when a new value was entered. This <strong>optimized API usage</strong> and <strong>improved the user experience</strong>.</p></br><p>Another challenge was <strong>implementing nested drag-and-drop functionality</strong>. The Angular CDK works well for flat lists, but in my project, we needed <strong>hierarchical data movement across multiple levels</strong>. I extended the CDK drag-drop with <strong>custom logic for nested structures</strong> and handled <strong>index recalculations</strong>. This provided <strong>smooth drag-and-drop</strong> for complex data.</p></br><p>I also faced <strong>memory leak issues</strong> due to multiple subscriptions. Some observables were not unsubscribed properly, <strong>leading to performance degradation</strong>. To fix this, I applied the <strong>async pipe</strong> wherever possible, used the <strong>takeUntil pattern with a Subject</strong>, and even created a <strong>BaseComponent</strong> to centralize cleanup logic in <code>ngOnDestroy</code>. This <strong>ensured stability</strong> and <strong>prevented memory leaks</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 23,
                    "subSectionId": -1,
                    "contentId": 82,
                    "text": "<p>Tell me about some challenges you faced in your Angular projects.</p>"
                }
            ]
        },
        {
            "name": "<p><strong>angular.json file</strong></p>",
            "subjectId": 1,
            "sectionId": 24,
            "subSectionId": -1,
            "subSections": [],
            "contents": [
                {
                    "description": "<p>The <strong>app</strong> is added as a <strong>prefix</strong> because it&#39;s defined as the <strong>default prefix</strong> in the <strong>angular.json configuration</strong> under the <strong>project&#39;s settings</strong>.</p>",
                    "subjectId": 1,
                    "sectionId": 24,
                    "subSectionId": -1,
                    "contentId": 83,
                    "text": "<p>When we create a component ‘<span style=\"background-color: rgb(187, 187, 187);\">ng generate component info</span>’, an app is getting added. From where the app is getting added?</p>"
                }
            ]
        },
        {
            "name": "<p><strong>Scenario-Based Angular Questions</strong></p>",
            "subjectId": 1,
            "sectionId": 25,
            "subSectionId": -1,
            "subSections": [
                {
                    "name": "<p><strong>By ChatGPT</strong></p>",
                    "subjectId": 1,
                    "sectionId": 25,
                    "subSectionId": 26,
                    "subSections": [],
                    "contents": [
                        {
                            "description": "<h4><strong>1. Lazy Loading &amp; Route Guards</strong></h4><p><strong>Scenario:</strong></p><p> Your app has three modules — <code>AuthModule</code>, <code>AdminModule</code>, and <code>UserModule</code>.</p><ul><li><code>AdminModule</code> should be lazy-loaded.</li><li>Only logged-in users can access <code>UserModule</code>.</li><li>Admin routes should load <strong>only after login</strong> and <strong>only if the user is an admin</strong>.</li></ul><p><strong>Question:</strong></p><p> 👉 How will you configure the routes, guards (<code>canActivate</code>, <code>canLoad</code>), and authentication service to handle this?</p><p><strong>What interviewer looks for:</strong></p><ul><li>Understanding difference between <code>canLoad</code> and <code>canActivate</code>.</li><li>Route configuration for lazy loading.</li><li>Handling async role checks via observables.</li></ul><h4><strong>2. API Error Handling</strong></h4><p><strong>Scenario:</strong></p><p> You are calling a backend API using <code>HttpClient</code>. Sometimes the API returns a <code>401</code> (unauthorized), sometimes a <code>500</code> (server error).</p><p> You want to <strong>show a toast message</strong> for <code>500</code> and <strong>redirect to login</strong> for <code>401</code>.</p><p><strong>Question:</strong></p><p> 👉 How will you handle this globally without repeating code in every service?</p><p><strong>Expected Approach:</strong></p><ul><li>Use <code>HttpInterceptor</code></li><li>Implement error handling logic using <code>catchError()</code> in RxJS</li><li>Optionally redirect via <code>Router</code> or show a notification using <code>MatSnackBar</code>.</li></ul><h4><strong>3. Performance Optimization</strong></h4><p><strong>Scenario:</strong></p><p> You notice a list component with 2000 rows is lagging when scrolling or updating.</p><p><strong>Question:</strong></p><p> 👉 What strategies will you use to improve performance?</p><p><strong>Expected Answers:</strong></p><ul><li>Use <code>ChangeDetectionStrategy.OnPush</code></li><li>Use <code>trackBy</code> in <code>*ngFor</code></li><li>Implement pagination or virtual scrolling (e.g., <code>cdk-virtual-scroll-viewport</code>)</li><li>Avoid unnecessary DOM bindings.</li></ul><h4><strong>4. State Management (NgRx Scenario)</strong></h4><p><strong>Scenario:</strong></p><p> You are using NgRx in your app.</p><p> When you click “Add to Cart,” the API call succeeds, but the UI doesn’t update immediately.</p><p><strong>Question:</strong></p><p> 👉 How will you debug and fix it?</p><p><strong>Expected Approach:</strong></p><ul><li>Check if <code>Effect</code> dispatches success action correctly.</li><li>Verify reducer updates state immutably.</li><li>Ensure selector is correctly subscribed in component.</li><li>Check <code>StoreModule.forRoot()</code> / <code>forFeature()</code> registration.</li></ul><h4><strong>5. Communication Between Components</strong></h4><p><strong>Scenario:</strong></p><p> You have a parent component (<code>ProductList</code>) and child component (<code>ProductItem</code>).</p><p> When a user clicks “Add to Wishlist” in <code>ProductItem</code>, the parent should update the total wishlist count.</p><p><strong>Question:</strong></p><p> 👉 What are different ways to achieve this communication?</p><p><strong>Expected Answers:</strong></p><ul><li>Use <code>@Output()</code> with <code>EventEmitter</code></li><li>Use shared service with <code>Subject/BehaviorSubject</code></li><li>Use NgRx or signal-based state for global updates.</li></ul><h4><strong>6. Resolver Scenario</strong></h4><p><strong>Scenario:</strong></p><p> You need to show a “User Details” page, but data should load <strong>before</strong> navigation.</p><p> If API fails, you should <strong>redirect to an error page</strong>.</p><p><strong>Question:</strong></p><p> 👉 How will you implement this?</p><p><strong>Expected Approach:</strong></p><ul><li>Use <code>Resolve</code> interface in a resolver service.</li><li>Fetch data using <code>HttpClient</code>.</li><li>Handle errors with <code>catchError()</code> and return <code>EMPTY</code> or redirect via router.</li></ul><h4><strong>7. Memory Leak Scenario</strong></h4><p><strong>Scenario:</strong></p><p> After navigating multiple times between pages, the app slows down. You suspect memory leaks.</p><p><strong>Question:</strong></p><p> 👉 How will you identify and fix memory leaks in Angular?</p><p><strong>Expected Answer:</strong></p><ul><li>Check unsubscription of observables (especially in <code>ngOnDestroy</code>).</li><li>Use <code>takeUntil()</code> or <code>AsyncPipe</code>.</li><li>Use Chrome DevTools memory profiling.</li><li>Remove event listeners or DOM references in cleanup.</li></ul><h4><strong>8. Change Detection Issue</strong></h4><p><strong>Scenario:</strong></p><p> Your component’s data updates from an observable, but UI doesn’t refresh automatically.</p><p><strong>Question:</strong></p><p> 👉 What could be the reason and how will you fix it?</p><p><strong>Expected Answers:</strong></p><ul><li>Component uses <code>OnPush</code> strategy, and immutable data not triggered.</li><li>Object reference mutated (not replaced).</li><li>Data updated outside Angular zone → use <code>NgZone.run()</code>.</li><li>Manual <code>ChangeDetectorRef.detectChanges()</code> if needed.</li></ul><h4><strong>9. Dynamic Component Loading</strong></h4><p><strong>Scenario:</strong></p><p> You need to load components dynamically at runtime (e.g., showing different widgets based on user role).</p><p><strong>Question:</strong></p><p> 👉 How will you implement dynamic component creation in Angular 15+ (standalone components)?</p><p><strong>Expected Answer:</strong></p><ul><li>Use <code>ViewContainerRef.createComponent()</code></li><li>Use <code>ComponentRef</code> for passing data via <code>@Input()</code>.</li><li>For standalone components: import dynamically via <code>import()</code> and <code>loadComponent</code>.</li></ul><h4><strong>10. Real-World Debugging</strong></h4><p><strong>Scenario:</strong></p><p> In production, you see <code>ExpressionChangedAfterItHasBeenCheckedError</code>.</p><p><strong>Question:</strong></p><p> 👉 Why does this happen and how do you fix it?</p><p><strong>Expected Answers:</strong></p><ul><li>Happens when value changes after Angular’s change detection cycle.</li><li>Fix by using <code>ChangeDetectorRef.detectChanges()</code> or <code>setTimeout()</code> (microtask delay).</li><li>Avoid modifying data in lifecycle hooks like <code>ngAfterViewInit</code> directly.</li></ul></br>",
                            "subjectId": 1,
                            "sectionId": 25,
                            "subSectionId": 26,
                            "contentId": 84,
                            "text": "<p>Scenario 1</p>"
                        }
                    ]
                }
            ],
            "contents": []
        }
    ];
} 