export const angularList = () => {
    return [
        {
            "name": "<p><strong>Basic</strong></p>",
            "sectionId": 1,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>What is Angular?</strong></p>",
                    "sectionId": 1,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 1,
                    "description": "<p>Angular is a <strong>TypeScript-based front-end framework</strong> developed by <strong>Google</strong> for building <strong>single-page applications (SPAs)</strong>. It provides a <strong>component-based architecture</strong>, <strong>built-in dependency injection</strong>, <strong>two-way data binding</strong>, and powerful <strong>RxJS-based state management</strong>.</p></br><p>Angular is a <strong>full-fledged framework</strong> that offers a <strong>complete solution</strong> for building <strong>web applications</strong>. It includes built-in support for <strong>routing</strong>, <strong>forms</strong>, and <strong>HTTP communication</strong> through <strong>HttpClient</strong>. Angular provides <strong>two-way data binding</strong>, which automatically synchronizes the <strong>model</strong> and the <strong>view</strong>. It uses <strong>dependency injection</strong> to make <strong>services reusable</strong> and improve <strong>testability</strong>. Angular also leverages <strong>RxJS</strong> for efficient <strong>asynchronous data handling</strong> and supports <strong>TypeScript</strong>, which enhances <strong>maintainability</strong>, <strong>scalability</strong>, and <strong>developer productivity</strong>.</p>"
                },
                {
                    "text": "<p><strong>How is it different from other JavaScript frameworks?</strong></p>",
                    "sectionId": 1,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 2,
                    "description": "<p>Angular is a full-fledged <strong>front-end framework</strong> that provides a <strong>complete solution</strong> for building <strong>web applications</strong>. It includes built-in support for <strong>routing</strong>, <strong>forms</strong>, and <strong>HTTP communication</strong> through <strong>HttpClient</strong>. Angular offers <strong>two-way data binding</strong>, which automatically synchronizes the <strong>model</strong> and the <strong>view</strong>. It uses <strong>dependency injection</strong> to make <strong>services reusable</strong> and improve <strong>testability</strong>. Angular also leverages <strong>RxJS</strong> for efficient <strong>asynchronous data handling</strong> and supports <strong>TypeScript</strong>, which enhances <strong>maintainability</strong>, <strong>scalability</strong>, and <strong>developer productivity</strong>.</p>"
                },
                {
                    "text": "<p><strong>What are the key features of Angular?</strong></p>",
                    "sectionId": 1,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 3,
                    "description": "<p>Angular offers several key features such as <strong>Component-Based Architecture</strong>, <strong>Two-Way Data Binding</strong>, <strong>Dependency Injection (DI)</strong>, <strong>Directives</strong>, <strong>RxJS</strong> for <strong>Reactive Programming</strong>, <strong>Built-in Routing</strong>, robust <strong>Forms Handling</strong>, <strong>State Management</strong> using tools like <strong>NgRx</strong>, and <strong>Cross-Platform Support</strong> for building web, mobile, and desktop applications.</p></br><p>These features make <strong>Angular</strong> a <strong>powerful</strong> and <strong>scalable</strong> framework for building <strong>enterprise-level applications</strong> efficiently.</p>"
                },
                {
                    "text": "<p><strong>If we can create dynamic pages using JavaScript, why do we need Angular?</strong></p>",
                    "sectionId": 1,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 4,
                    "description": "<p><strong>JavaScript</strong> can create <strong>dynamic pages</strong>, but <strong>Angular</strong> provides a <strong>structured framework</strong> for building <strong>large-scale</strong> and <strong>maintainable applications</strong>.</p></br><p> It offers features like <strong>Component-Based Architecture</strong>, <strong>Two-Way Data Binding</strong>, <strong>Dependency Injection</strong>, <strong>Routing</strong>, and <strong>State Management</strong>, which help manage <strong>complexity</strong>, improve <strong>code reusability</strong>, and speed up <strong>development</strong> — especially for <strong>enterprise-grade apps</strong>.</p>"
                },
                {
                    "text": "<p><strong>Explain the differences between AngularJS and Angular.</strong></p>",
                    "sectionId": 1,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 5,
                    "description": "<ol><li><strong>AngularJS</strong> is based on the <strong>MVC (Model-View-Controller) architecture</strong>, whereas <strong>Angular</strong> follows a <strong>Component-Based Architecture</strong>.</li><li><strong>AngularJS</strong> supports <strong>JavaScript</strong>, whereas <strong>Angular</strong> supports <strong>TypeScript</strong>.</li><li><strong>AngularJS</strong> is <strong>not optimized for mobile</strong>, whereas <strong>Angular</strong> is <strong>mobile-friendly</strong>.</li><li><strong>AngularJS</strong> has been <strong>discontinued</strong>, whereas <strong>Angular</strong> is <strong>actively maintained by Google</strong>.</li></ol>"
                },
                {
                    "text": "<p><strong>What is Angular Application load flow?</strong></p>",
                    "sectionId": 1,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 6,
                    "description": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">The browser loads </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">index.html</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, which usually contains a root element (like </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">&lt;app-root&gt;</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">). Then </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">main.ts</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> executes. This is the entry point (the first TypeScript file that runs), and its job is to bootstrap the Angular application.</span></p></br><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Earlier, Angular used </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">platformBrowserDynamic().bootstrapModule(AppModule)</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> for NgModules. But after the introduction of standalone components, it now uses </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">bootstrapApplication()</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> to bootstrap a component directly.</span></p></br></br><pre data-language=\"plain\">\nmain.ts\n\nimport { bootstrapApplication } from &#39;@angular/platform-browser&#39;;\nimport { appConfig } from &#39;./app/app.config&#39;;\nimport { App } from &#39;./app/app&#39;;\nbootstrapApplication(App, appConfig)\n  .catch((err) =&gt; console.error(err));\n</pre></br><p>Next, Angular initializes AppComponent, whose selector (&lt;app-root&gt;) matches the element in index.html.</p><p>For dependency injection setup, bootstrapApplication() also accepts providers such as HttpClient, Router, etc.</p></br></br><pre data-language=\"plain\">\napp.config.ts\n\nimport { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from &#39;@angular/core&#39;;\nimport { provideRouter } from &#39;@angular/router&#39;;\nimport { routes } from &#39;./app.routes&#39;;\nimport { provideHttpClient } from &#39;@angular/common/http&#39;;\nexport const appConfig: ApplicationConfig = {\n  providers: [\n    provideBrowserGlobalErrorListeners(),\n    provideZoneChangeDetection({ eventCoalescing: true }),\n    provideHttpClient(),\n    provideRouter(routes)\n  ]\n};\n</pre></br><p>Angular then builds the component tree starting from the root component, runs change detection, and updates the DOM.</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Angular CLI</strong></p>",
            "sectionId": 2,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>What is the purpose of Angular CLI?</strong></p>",
                    "sectionId": 2,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 30,
                    "description": "<p>The <strong>Angular CLI (Command Line Interface)</strong> is a tool that helps in <strong>creating</strong>, <strong>configuring</strong>, and <strong>managing</strong> Angular projects efficiently.</p></br><p> <code>ng new my-app</code> is used for <strong>project setup</strong> and generates a new <strong>Angular project</strong>.</p><p><strong>Components</strong>, <strong>Services</strong>, <strong>Directives</strong>, <strong>Modules</strong>, <strong>Pipes</strong>, and <strong>Guards</strong> can be generated using the <strong>Angular CLI</strong>.</p></br><p>For example:</p><ul><li>To generate a <strong>Component</strong>: <code>ng generate component component-name</code></li><li>To generate a <strong>Service</strong>: <code>ng generate service service-name</code></li></ul></br><p><code>ng serve</code> runs a <strong>local development server</strong> with <strong>live reload</strong>.</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Module</strong></p>",
            "sectionId": 3,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>What is a module in Angular?</strong></p>",
                    "sectionId": 3,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 31,
                    "description": "<p>A <strong>Module</strong> contains the <strong>logical structure</strong> of a project. It <strong>groups</strong> related <strong>Components</strong>, <strong>Directives</strong>, <strong>Pipes</strong>, and <strong>Services</strong>.</p></br><p>After the introduction of <strong>Standalone Components (Angular 14+)</strong>, the <strong>need for modules</strong> is <strong>reduced</strong>.</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Templates</strong></p>",
            "sectionId": 4,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>What are templates in Angular?</strong></p>",
                    "sectionId": 4,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 32,
                    "description": "<p>A <strong>Template</strong> in <strong>Angular</strong> is <strong>HTML</strong> with <strong>Angular syntax</strong> (such as <strong>Interpolation</strong>, <strong>Property Binding</strong>, <strong>Event Binding</strong>, <strong>Two-Way Binding</strong>, and <strong>Directives</strong>) that defines a <strong>Component&#39;s View</strong> and makes the <strong>UI dynamic</strong>.</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>ng-template and ng-container</strong></p>",
            "sectionId": 5,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>What is different between ng-templace and ng-container?</strong></p>",
                    "sectionId": 5,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 33,
                    "description": "<p><strong>ng-template</strong>:</p></br><p><strong>ng-template </strong>is an <strong>Angular template element</strong> that holds <strong>HTML/Angular code</strong> but is <strong>not rendered in the DOM</strong> by default.</p><p>It’s mainly used with <strong>structural directives</strong> (<code>*ngIf</code>, <code>*ngFor</code>, <code>ngTemplateOutlet</code>) to render <strong>content conditionally</strong> or <strong>dynamically</strong>.</p></br><pre data-language=\"plain\">\n&lt;ng-template #noData&gt;&lt;/ng-template&gt;\n&lt;div *ngIf=&quot;items.length; else noData&quot;&gt;&lt;/div&gt;\n</pre></br><p><strong>Reusable Templates:</strong></p></br><pre data-language=\"plain\">\n&lt;ng-template #welcome&gt;&lt;/ng-template&gt;\n&lt;ng-template #goodbye&gt;&lt;/ng-template&gt;\n\n&lt;ng-container *ngTemplateOutlet=&quot;isLoggedIn ? welcome : goodbye&quot;&gt;&lt;/ng-container&gt;\n</pre></br><p><strong>Dynamic Rendering in TypeScript:</strong></p></br><pre data-language=\"plain\">\nimport { Component, ViewChild, TemplateRef, ViewContainerRef } from &#39;@angular/core&#39;;\n\n@ViewChild(&#39;login&#39;) loginTemplate!: TemplateRef&lt;any&gt;;\n@ViewChild(&#39;signup&#39;) signupTemplate!: TemplateRef&lt;any&gt;;\n@ViewChild(&#39;container&#39;, { read: ViewContainerRef }) container!: ViewContainerRef;\n</pre></br><p><strong>ng-container</strong>:</p></br><p>It’s a <strong>logical container</strong> that does <strong>not create extra DOM elements</strong>.</p><p>It <strong>groups multiple elements</strong> without wrapping them in an unnecessary <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>.</p></br></br></br></br></br>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Directives</strong></p>",
            "sectionId": 6,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>What is a directive?</strong></p>",
                    "sectionId": 6,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 34,
                    "description": "<p>A <strong>Directive</strong> in <strong>Angular</strong> is a <strong>class</strong> that <strong>changes the appearance</strong>, <strong>behavior</strong>, or <strong>layout</strong> of elements <strong>dynamically</strong>.</p>"
                },
                {
                    "text": "<p><strong>Explain the types of directives in Angular.</strong></p>",
                    "sectionId": 6,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 35,
                    "description": "<p><strong>Component Directives</strong>: A <strong>Component</strong> is a <strong>special type of directive</strong> that has a <strong>template</strong> and is used to build <strong>UI views</strong>. Components have their own <strong>templates</strong>, <strong>styles</strong>, and <strong>logic</strong>.</p></br><p><strong>Structural Directives</strong>: <strong>Structural Directives</strong> are <strong>Angular directives</strong> that <strong>change the structure of the DOM</strong> by <strong>adding or removing elements</strong> using <code>*ngIf</code>, <code>*ngFor</code>, or <code>*ngSwitch</code>.</p></br><p><strong>Attribute Directives</strong>: <strong>Attribute Directives</strong> are used to <strong>change the appearance</strong> or <strong>behavior</strong> of <strong>DOM elements</strong> in Angular by <strong>modifying their attributes or styles</strong> using <code>ngClass</code>, <code>ngStyle</code>, or <code>ngModel</code>.</p>"
                },
                {
                    "text": "<p><strong>What is the difference between *ngIf and *ngFor?</strong></p>",
                    "sectionId": 6,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 36,
                    "description": "<p><strong>*ngIf</strong>: <code>*ngIf</code> <strong>conditionally adds or removes</strong> an element based on a <strong>boolean expression</strong>.</p></br><p><strong>*ngFor</strong>: <code>*ngFor</code> <strong>iterates over a list</strong> to <strong>render an element</strong> for each <strong>item</strong>.</p>"
                },
                {
                    "text": "<pre data-language=\"plain\">\n@for (item of items; track item.id) { \n    &lt;div&gt;{{ item.name }}&lt;/div&gt; \n} \n</pre><p><strong>Why do we use track in *ngFor?</strong></p>",
                    "sectionId": 6,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 37,
                    "description": "<p><strong>track</strong> in an <code>@for</code> loop is used to <strong>uniquely identify</strong> each <strong>element</strong> in the <strong>list</strong>, which <strong>improves performance</strong> during <strong>DOM updates</strong>.</p></br><p>When using <strong>track</strong>, <strong>Angular</strong> knows which <strong>items</strong> are <strong>unchanged</strong> and which are <strong>added or removed</strong>. It only <strong>updates the necessary DOM elements</strong> without <strong>re-rendering the entire list</strong>.</p></br><p>Using an <strong>object</strong> with <strong>track</strong> is <strong>not ideal</strong> because if the <strong>object</strong> is <strong>replaced</strong> or <strong>mutated</strong>, Angular may <strong>unnecessarily re-render</strong> it.</p></br><pre data-language=\"plain\">\nthis.items = [...this.items];\n</pre></br><p>This creates a <strong>new array</strong> with the same <strong>objects</strong>, but since the <strong>object references</strong> have changed, Angular treats them as <strong>different</strong> and <strong>re-renders the entire list</strong>.</p></br></br>"
                },
                {
                    "text": "<p><strong>With old syntax </strong></p><pre data-language=\"plain\">\n&lt;div *ngFor=&quot;let product of products; trackBy: product.id&quot;&gt; \n   {{ product.name }} \n&lt;/div&gt; \n</pre><p><strong>Why do we get an error?</strong></p>",
                    "sectionId": 6,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 38,
                    "description": "<p>In the old <strong>structural directive</strong> <code>*ngFor</code>, <strong>trackBy</strong> is <strong>optional</strong> and expects a <strong>function reference</strong>, but after the introduction of the <strong>new control flow</strong>, <strong>track</strong> is <strong>mandatory</strong> in <code>@for</code> and expects a <strong>property access</strong>.</p></br><pre data-language=\"plain\">\ntrackByProductId(index: number, product: any): number {\n  return product.id;\n}\n</pre></br><pre data-language=\"plain\">\n&lt;div *ngFor=&quot;let product of products; trackBy: trackByProductId&quot;&gt; \n  {{ product.name }}\n&lt;/div&gt;\n</pre></br></br>"
                },
                {
                    "text": "<p><strong>Why was the new control flow</strong> (<code>@if</code>, <code>@for</code>, and <code>@switch</code>) <strong>introduced when we already had</strong> <code>*ngIf</code>, <code>*ngFor</code>, <strong>and </strong><code>*ngSwitch</code><strong>?</strong></p>",
                    "sectionId": 6,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 39,
                    "description": "<p><code>*ngIf</code>, <code>*ngFor</code>, and <code>*ngSwitch</code> are based on <strong>microsyntax</strong>, which is the special <code>*</code> <strong>syntax</strong>. <strong>Angular</strong> expands this into <code>&lt;ng-template&gt;</code> behind the scenes, creating <strong>hidden layers</strong>.</p></br><pre data-language=\"plain\">\n&lt;ng-template [ngIf]=&quot;show&quot;&gt;\n  &lt;div&gt;\n    Hello\n  &lt;/div&gt;\n&lt;/ng-template&gt;\n</pre></br><p>This can make <strong>templates</strong> harder to <strong>read</strong> and <strong>debug</strong>, especially with <strong>nesting</strong>.</p></br><p>To solve this, <strong>Angular 17+</strong> introduced <strong>block-based syntax</strong> (using <code>{}</code> blocks with <code>@if</code>, <code>@for</code>, <code>@switch</code>). It’s similar to <strong>JavaScript</strong> and makes <strong>templates cleaner</strong>, <strong>more readable</strong>, and <strong>easier to debug</strong>.</p></br>"
                },
                {
                    "text": "<p><strong>What are components in Angular?</strong></p>",
                    "sectionId": 6,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 40,
                    "description": "<p>A <strong>Component</strong> in <strong>Angular</strong> is the <strong>basic building block</strong> of the <strong>UI</strong>, controlling a section of the <strong>view</strong> with <strong>logic</strong> and <strong>data</strong>. It consists of: <strong>TypeScript File (.ts)</strong>, <strong>HTML Template (.html)</strong>, and <strong>CSS/SCSS (.css or .scss)</strong>.</p></br><ol><li><strong>Components</strong> can be used across the app with <code>&lt;selector&gt;</code>.</li><li><strong>Components</strong> are <strong>encapsulated</strong>; each component has its own <strong>template</strong> and <strong>styles</strong>.</li><li><strong>UI (template)</strong> and <strong>logic (class)</strong> are clearly <strong>separated</strong> in components.</li></ol></br><p><strong>Encapsulation</strong> is defined as the <strong>wrapping up of data</strong> under a <strong>single unit</strong>.</p>"
                },
                {
                    "text": "<p><strong>How are Components different from directives?</strong></p>",
                    "sectionId": 6,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 41,
                    "description": "<ol><li>All <strong>Components</strong> are <strong>Directives</strong>, but not all <strong>Directives</strong> are <strong>Components</strong>.</li><li>A <strong>Component</strong> is a <strong>special type of directive</strong> that has a <strong>template</strong> and is used to build <strong>UI views</strong>.</li><li>Other <strong>Directives</strong> (<strong>Structural</strong> or <strong>Attribute</strong>) do <strong>not have templates</strong> and are used to <strong>modify behavior</strong> or <strong>layout</strong>.</li></ol>"
                },
                {
                    "text": "<p><strong>What is a host listener?</strong></p>",
                    "sectionId": 6,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 42,
                    "description": "<p><code>@HostListener()</code> allows us to <strong>listen to events</strong> on the <strong>host element</strong> of a <strong>directive</strong> or <strong>component</strong>.</p></br><p><strong>Example</strong>: If you create a <strong>directive</strong> and want to <strong>react</strong> to <strong>mouseover</strong>, <strong>click</strong>, <strong>keydown</strong>, etc., on the <strong>element</strong> it’s applied to, you use <code>@HostListener</code>.</p>"
                },
                {
                    "text": "<p><strong>What is a host binding?</strong></p>",
                    "sectionId": 6,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 43,
                    "description": "<p><code>@HostBinding()</code> allows you to <strong>bind a property</strong> of the <strong>host element</strong> (like <strong>class</strong>, <strong>style</strong>, <strong>attr</strong>, <strong>disabled</strong>, etc.) to a <strong>field</strong> in your <strong>directive</strong> or <strong>component</strong>.</p>"
                },
                {
                    "text": "<p><strong>Example of host listener and host binding.</strong></p>",
                    "sectionId": 6,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 44,
                    "description": "<p>If you need a <strong>custom directive</strong> for <strong>highlight</strong>, it can be generated using the <strong>Angular CLI</strong> command:</p></br><pre data-language=\"plain\">\nng generate directive highlight\n</pre></br><p>A <strong>custom directive</strong> is created with the <code>@Directive</code> <strong>decorator</strong>, where the <strong>selector</strong> <code>&quot;[appHighlight]&quot;</code> is defined. It can then be used in the <strong>host element</strong> as an <strong>attribute</strong>.</p></br><p>There are two <strong>built-in decorators</strong>:</p><ul><li><code>@HostListener()</code> for <strong>listening to host element events</strong></li><li><code>@HostBinding()</code> for <strong>binding properties</strong> of the <strong>host element</strong></li></ul></br></br><pre data-language=\"plain\">\nHtml File\n\n&lt;p appHighlight&gt;Hover to see **background color change**!&lt;/p&gt;\n</pre></br></br><pre data-language=\"plain\">\nTypeSrcpt File\n\nimport { Directive, HostBinding, HostListener } from &#39;@angular/core&#39;;\n\n@Directive({\n  selector: &#39;[appHighlight]&#39;\n})\nexport class Highlight {\n\n  @HostBinding(&#39;style.backgroundColor&#39;) bgColor: string = &#39;&#39;;\n  @HostBinding(&#39;style.cursor&#39;) cursor: string = &#39;&#39;;\n  @HostBinding(&#39;style.color&#39;) textColor: string = &#39;&#39;;\n\n  constructor() { }\n\n  @HostListener(&#39;mouseenter&#39;) onMouseEnter() {\n    this.bgColor = &#39;yellow&#39;;\n    this.cursor = &#39;pointer&#39;;\n    this.textColor = &#39;red&#39;;\n  } \n\n  @HostListener(&#39;mouseleave&#39;) onMouseLeave() {\n    this.bgColor = &#39;&#39;;\n    this.cursor = &#39;&#39;;\n    this.textColor = &#39;&#39;;\n  }\n}\n</pre></br></br></br></br>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Service and Injectable</strong></p>",
            "sectionId": 7,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>What is a service in Angular?</strong></p>",
                    "sectionId": 7,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 85,
                    "description": "<p>A <strong>service</strong> in <strong>Angular</strong> is a <strong>reusable class</strong> used to <strong>share data</strong>, <strong>logic</strong>, or <strong>functions</strong> across <strong>components</strong> using <strong>dependency injection</strong>.</p>"
                },
                {
                    "text": "<p><strong>How do you create a service?</strong></p>",
                    "sectionId": 7,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 86,
                    "description": "<p>A service can be created using the Angular CLI command:</p></br><p><code>ng generate service service-name (e.g., User)</code>.</p></br><p>It generates a service class with the <strong>@Injectable()</strong> decorator. The <strong>@Injectable()</strong> decorator makes the service eligible for <strong>dependency injection</strong>.</p></br><p>import { Injectable } from &#39;@angular/core&#39;;</p></br><pre data-language=\"plain\">\n@Injectable({\n  providedIn: &#39;root&#39;\n})\nexport class User {}\n</pre></br><p>If <code><strong>providedIn: &#39;root&#39;</strong></code> is used in a service, it can be reused across the <strong>entire application</strong>. Otherwise, it needs to be <strong>registered in the </strong><code><strong>providers</strong></code><strong> array</strong> of a <strong>module</strong> or <strong>component</strong>.</p>"
                },
                {
                    "text": "<p><strong>Explain Dependency Injection in Angular.</strong></p>",
                    "sectionId": 7,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 87,
                    "description": "<p><strong>Dependency Injection (DI)</strong> is a <strong>design pattern</strong> in <strong>Angular</strong> that allows a <strong>class</strong> to receive its <strong>dependencies</strong> from an <strong>external source</strong> instead of creating them itself. </p></br><p>The <strong>inject()</strong> function was introduced in <strong>Angular v14+</strong>. This means we can directly perform <strong>dependency injection</strong> using the <strong>inject()</strong> function without needing to register dependencies in the <strong>constructor</strong>.</p>"
                },
                {
                    "text": "<p><strong>Explain the concept of the Angular Injector.</strong></p>",
                    "sectionId": 7,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 88,
                    "description": "<p><strong>Angular Injector</strong> is a <strong>mechanism</strong> that provides <strong>dependencies</strong> (like <strong>services</strong>) to <strong>components</strong>, <strong>directives</strong>, <strong>pipes</strong>, and other <strong>classes</strong> using <strong>Dependency Injection</strong>.</p><p>It <strong>creates</strong> and <strong>delivers instances</strong> when needed.</p></br><pre data-language=\"plain\">\nconstructor(private userService: UserService) {}\n</pre></br><p>Here, <strong>Angular</strong> uses the <strong>injector</strong> to provide an <strong>instance</strong> of <strong>UserService</strong> to the <strong>component</strong>.</p>"
                },
                {
                    "text": "<p><strong>What is injectable?</strong></p>",
                    "sectionId": 7,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 89,
                    "description": "<p><strong>@Injectable()</strong> is a <strong>decorator</strong> that marks a <strong>class</strong> as available to be <strong>injected</strong> as a <strong>dependency</strong> into other <strong>classes</strong> (like <strong>components</strong>, <strong>directives</strong>, or <strong>services</strong>).</p>"
                },
                {
                    "text": "<p><strong>What is the level of injectable?</strong></p>",
                    "sectionId": 7,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 90,
                    "description": "<p>We can use @Injectable at <strong>root level</strong>, <strong>module level</strong>, and <strong>component level</strong>. </p></br><p>If <code>providedIn</code> is root (<code>@Injectable({ providedIn: &#39;root&#39; })</code>), it can be <strong>used across the application</strong>. For the <strong>module level</strong>, we can add it in <strong>NgModule</strong> using the <strong>providers array</strong>. For the <strong>component level</strong>, we can add it in the <strong>providers array</strong> for any specific component.</p>"
                },
                {
                    "text": "<p><strong>How does Angular handle dependency injection under the hood?</strong></p>",
                    "sectionId": 7,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 91,
                    "description": "<p><strong>Angular’s Dependency Injection (DI)</strong> is powered by an <strong>injector system</strong>, which is essentially a <strong>hierarchical registry</strong> of <strong>providers</strong> that knows how to <strong>create</strong> and <strong>supply instances</strong> of <strong>services</strong> when needed.</p></br><p>Each <strong>injector</strong> holds a <strong>provider</strong> and each <strong>provider</strong> maps a <strong>token</strong> (usually the <strong>service class</strong>) to a <strong>factory function</strong> that tells <strong>Angular</strong> how to <strong>create the instance</strong>.</p></br><p>When a <strong>component</strong> requests a <strong>dependency</strong>, <strong>Angular</strong> checks its <strong>constructor</strong>, looks up the <strong>token</strong> in the <strong>nearest injector</strong>, <strong>creates the instance</strong> if not cached, and <strong>reuses it</strong> for future requests.</p><p>This allows <strong>services</strong> to be <strong>singleton</strong> at the <strong>root</strong> or <strong>scoped</strong> to <strong>modules/components</strong>, depending on where they’re <strong>provided</strong>.</p></br><p><strong>Note:</strong> A <strong>factory function</strong> is just a <strong>function</strong> that <strong>creates</strong> and <strong>returns</strong> an <strong>object</strong> (or <strong>value</strong>) instead of using <code>new</code>.</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Angular lifecycle hooks</strong></p>",
            "sectionId": 8,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>What are lifecycle hooks in Angular?</strong></p>",
                    "sectionId": 8,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 141,
                    "description": "<p><strong>Lifecycle hooks</strong> are <strong>special methods</strong> in <strong>Angular</strong> that get called <strong>automatically</strong> at different stages of a <strong>component</strong> or <strong>directive’s life cycle</strong> — from <strong>creation</strong> to <strong>destruction</strong>.</p>"
                },
                {
                    "text": "<p><strong>Explain some commonly used lifecycle hooks.</strong></p>",
                    "sectionId": 8,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 142,
                    "description": "<p><code><strong>ngOnChanges(changes: SimpleChanges)</strong></code></p><ul><li>Called whenever an <code>@Input()</code> property value changes.</li><li>Useful for reacting to input updates from a parent component.</li></ul></br><p><code><strong>ngOnInit()</strong></code></p><ul><li>Called once, after the first <code>ngOnChanges</code>.</li><li>Best place for component initialization logic (e.g., fetching data from APIs).</li></ul></br><p><code><strong>ngDoCheck()</strong></code></p><ul><li>Called during every change detection cycle.</li><li>Lets you implement your own change detection logic (advanced usage).</li></ul></br><p><code><strong>ngAfterContentInit()</strong></code></p><ul><li>Called once after projecting external content (<code>&lt;ng-content&gt;</code>) into the component.</li></ul></br><p><code><strong>ngAfterContentChecked()</strong></code></p><ul><li>Called after every check of projected content.</li></ul></br><p><code><strong>ngAfterViewInit()</strong></code></p><ul><li>Called once after component’s view (and its child views) are initialized.</li><li>Good for DOM/child component access via <code>@ViewChild</code>.</li></ul></br><p><code><strong>ngAfterViewChecked()</strong></code></p><ul><li>Called after every check of the component’s view (and child views).</li></ul></br><p><code><strong>ngOnDestroy()</strong></code></p><ul><li>Called just before Angular destroys the component.</li><li>Use it to clean up (unsubscribe from Observables, detach event listeners, etc.).</li></ul></br>"
                },
                {
                    "text": "<p><strong>When a component loads, which lifecycle hook is called first?</strong></p>",
                    "sectionId": 8,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 143,
                    "description": "<p>When an Angular <strong>component loads</strong>, the <strong>first lifecycle hook</strong> that is called is <code><strong>ngOnChanges()</strong></code>, <strong>if the component has any </strong><code><strong>@Input()</strong></code><strong> properties</strong>.</p></br><p>If there are <strong>no </strong><code><strong>@Input()</strong></code><strong> bindings</strong>, then Angular skips <code>ngOnChanges()</code> and directly calls <code><strong>ngOnInit()</strong></code>.</p>"
                },
                {
                    "text": "<p><strong>Why is constructor() called first in Angular?</strong></p>",
                    "sectionId": 8,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 144,
                    "description": "<p>The <code><strong>constructor()</strong></code> is a <strong>TypeScript/JavaScript class feature</strong>, not an Angular lifecycle hook.</p></br><p>The <strong>constructor is called first</strong> because it’s part of the <strong>class instantiation process in TypeScript/JavaScript</strong>, not Angular’s lifecycle.</p></br><p>The <strong>constructor’s job</strong> is only to:</p><ul><li>Initialize <strong>class fields</strong></li><li>Inject <strong>dependencies</strong> via Angular’s <strong>Dependency Injection (DI)</strong> system</li></ul></br>"
                },
                {
                    "text": "<p><strong>Why do we need ngOnInit() if the constructor runs once?</strong></p>",
                    "sectionId": 8,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 145,
                    "description": "<p>The <code><strong>constructor()</strong></code> is a <strong>TypeScript/JavaScript class feature</strong>, not an Angular lifecycle hook.</p></br><p>The <strong>constructor runs too early</strong>, before Angular sets <code>@Input()</code> properties.</p></br><p><code>ngOnInit()</code> runs <strong>after Angular has finished initializing inputs and setting up the component</strong>.</p></br><p><code><strong>ngOnInit()</strong></code> is guaranteed to run <strong>once</strong>, after inputs are ready, making it the best place for <strong>component initialization logic</strong>.</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Data Binding</strong></p>",
            "sectionId": 9,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>How does data binding work in Angular?</strong></p>",
                    "sectionId": 9,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 83,
                    "description": "<p><strong>Data binding in Angular</strong> is the <strong>mechanism</strong> that <strong>connects the component class</strong> (TypeScript) with the <strong>template</strong> (HTML). It allows data to flow <strong>between the model and the view</strong>.</p>"
                },
                {
                    "text": "<p><strong>Explain one-way and two-way binding.</strong></p>",
                    "sectionId": 9,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 84,
                    "description": "<h3><strong>Types of Data Binding</strong></h3></br><ul><li><strong>One-Way Binding:</strong> In <strong>one-way binding</strong>, data flows in <strong>one direction</strong>.</li></ul></br><p><strong>Interpolation (</strong><code><strong>{{ }}</strong></code><strong>):</strong> Interpolation <strong>binds data from the component to the view</strong>. It uses <strong>double curly braces </strong><code><strong>{{}}</strong></code> to bind and display data in the template.</p></br><pre data-language=\"plain\">\n&lt;h1&gt;{{ title }}&lt;/h1&gt;\n</pre></br><p><strong>Property Binding (</strong><code><strong>[property]</strong></code><strong>):</strong> Property binding <strong>updates the UI from the component</strong>, such as <code>[src]</code>, <code>[ngClass]</code>, <code>[ngStyle]</code>. It uses <strong>square brackets</strong> to bind data from the component to the view.</p></br><p><strong>Event Binding (</strong><code><strong>(event)</strong></code><strong>):</strong> Event binding <strong>emits user actions to the component</strong>, such as <code>(click)</code>, <code>(change)</code>.</p></br><ul><li><strong>Two-Way Binding:</strong> In two-way binding, data flows in both directions — from the component to the view and from the view back to the component. Example: <code>[(ngModel)]</code>.</li></ul></br><pre data-language=\"plain\">\n&lt;input [(ngModel)]=&quot;username&quot;&gt;\n</pre>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Pipes</strong></p>",
            "sectionId": 10,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>What is an Angular Pipe?</strong></p>",
                    "sectionId": 10,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 78,
                    "description": "<p><strong>An Angular Pipe</strong> is a <strong>feature</strong> that <strong>transforms data</strong> in <strong>templates</strong> before <strong>displaying</strong> it. It is used with the <strong>| (pipe) operator</strong>.</p>"
                },
                {
                    "text": "<p><strong>How do you create a custom pipe?</strong></p>",
                    "sectionId": 10,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 79,
                    "description": "<p>If I need a <strong>custom pipe</strong> for <strong>uppercase</strong>, it can be generated using the <strong>Angular CLI command</strong></p><p><code>ng generate pipe uppercase</code>.</p></br><p>A <strong>custom pipe</strong> is created with the <strong>@Pipe decorator</strong>, where the <strong>name: &#39;uppercase&#39;</strong> is defined. It can then be used in a <strong>template element</strong> with the <strong>pipe (|) operator</strong>. Every <strong>custom pipe</strong> implements the built-in <strong>transform() method</strong>, which has the signature:</p><p><code>transform(value: unknown, ...args: unknown[]): unknown</code>.</p></br><p>If the <strong>value</strong> is <strong>null</strong>, <strong>undefined</strong>, or an <strong>empty string</strong>, the pipe returns an <strong>empty string</strong>; otherwise, it returns <strong>value.toUpperCase()</strong>.</p></br><pre data-language=\"plain\">\nimport { Pipe, PipeTransform } from &#39;@angular/core&#39;;\n\n@Pipe({\n  name: &#39;uppercase&#39;,\n})\nexport class UppercasePipe implements PipeTransform {\n  transform(value: string, ...args: unknown[]): unknown {\n    return value ? value.toUpperCase() : &#39;&#39;;\n  }\n}\n</pre>"
                },
                {
                    "text": "<p><strong>What is the purpose of the async pipe in Angular?</strong></p>",
                    "sectionId": 10,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 80,
                    "description": "<p>The <strong>async pipe</strong> is used in <strong>templates</strong> to <strong>subscribe</strong> to an <strong>Observable</strong> or <strong>Promise</strong> automatically and <strong>display</strong> the latest <strong>emitted value</strong>.</p><p>It also handles <strong>unsubscribe</strong> when the <strong>component</strong> is <strong>destroyed</strong>.</p>"
                },
                {
                    "text": "<p><strong>What is the drawback of an async pipe?</strong></p>",
                    "sectionId": 10,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 81,
                    "description": "<p>If you have <strong>user$ Observable</strong>:</p><ul><li>If we use <strong>user$ | async</strong> multiple times in the same <strong>template</strong>, Angular will create a <strong>new subscription</strong> each time.</li><li><strong>async pipe</strong> only works inside the <strong>template</strong>.</li><li><strong>async pipe</strong> does not provide a way to handle <strong>errors</strong> emitted by an <strong>Observable</strong> and <strong>cannot use</strong> an <strong>RxJS operator</strong>.</li><li>Every time the <strong>Observable emits</strong>, <strong>async pipe</strong> triggers <strong>change detection</strong>.</li><li>We have to optimize with <strong>ChangeDetectionStrategy.OnPush</strong>.</li></ul>"
                },
                {
                    "text": "<p><strong>What is the difference between Pure and Impure Pipe?</strong></p>",
                    "sectionId": 10,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 82,
                    "description": "<p><strong>Pure pipes</strong> run only when the <strong>input changes</strong> and are <strong>performance-friendly, </strong>while <strong>impure pipes</strong> (declared with <strong>pure: false</strong>) run on <strong>every change detection cycle </strong>and should be used only when working with <strong>mutable data</strong>.</p></br><p>An <strong>impure pipe</strong> can be defined by setting the flag <strong>pure: false</strong> inside the <strong>@Pipe decorator</strong>; otherwise, by default, a pipe is <strong>pure</strong>.</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Routing</strong></p>",
            "sectionId": 11,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>How to access route parameters, query parameters, and static route data?</strong></p>",
                    "sectionId": 11,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 149,
                    "description": "<p>There are two approch to access route. </p><ol><li>snapshot</li><li>subscribe</li></ol></br><p><strong>Pass data in navigation</strong></p></br><pre data-language=\"plain\">\nconst routes: Routes = [\n  {\n    path: &#39;product/:id&#39;,\n    component: ProductComponent,\n    data: { title: &#39;Product Details&#39; } // Static Route Data\n  }\n];\n</pre></br><pre data-language=\"plain\">\n// Query Parameters (?key=value)\nthis.router.navigate([&#39;/search&#39;], { queryParams: { term: &#39;angular&#39; } });\n</pre></br><pre data-language=\"plain\">\n// Route Parameters (:id)\nthis.router.navigate([&#39;/user&#39;, 5]); // 5 is the id\n</pre></br><p><strong>Access data from Route</strong></p></br><pre data-language=\"plain\">\n// Snapshot approach\nthis.userId = this.route.snapshot.paramMap.get(&#39;id&#39;)!;\nthis.term = this.route.snapshot.queryParamMap.get(&#39;term&#39;);\n\n// subscribe to param or queryParam changes\nthis.route.paramMap.subscribe(params =&gt; {\n      this.userId = params.get(&#39;id&#39;)!;\n });\nthis.route.queryParamMap.subscribe(params =&gt; {\n      this.term = params.get(&#39;term&#39;)!;\n });\n\n// Static Route Data\nthis.route.data.subscribe(data =&gt; {\n  console.log(data[&#39;title&#39;]); // static title\n});\n</pre>"
                },
                {
                    "text": "<p><strong>Explain RouterModule and RouterOutlet.</strong></p>",
                    "sectionId": 11,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 150,
                    "description": "<p><code><strong>RouterModule</strong></code> is an <strong>Angular module</strong> that provides all the necessary <strong>services</strong>, <strong>directives</strong>, and <strong>configurations</strong> for <strong>routing</strong> and <strong>navigation</strong> in an Angular application.</p></br><p> <code><strong>&lt;router-outlet&gt;</strong></code> is a <strong>directive</strong> used to <strong>load routed components</strong>, and it is typically placed in the <strong>root component</strong> (<code>AppComponent</code>) or any component where you want to display routed views.</p>"
                }
            ],
            "subSections": [
                {
                    "name": "<p><strong>Routing with Module</strong></p>",
                    "sectionId": 11,
                    "subSectionId": 6,
                    "noteType": "Angular",
                    "topics": [
                        {
                            "text": "<p><strong>How do you handle routing in Angular?</strong></p>",
                            "sectionId": 11,
                            "subSectionId": 6,
                            "noteType": "Angular",
                            "topicId": 146,
                            "description": "<p>In Angular, <code>RouterModule.forRoot()</code> is used in the <strong>root module</strong> to configure <strong>global routes</strong>. It sets up the <strong>Router service</strong> and makes routing directives like <code>&lt;router-outlet&gt;</code> and <code>routerLink</code> available throughout the app. We use <code>.forRoot()</code> only once to ensure the Router is a <strong>singleton</strong>, and in <strong>feature modules</strong>, we use <code>RouterModule.forChild()</code> to add additional routes without creating multiple Router instances.</p></br><pre data-language=\"plain\">\n// app.module.ts (root routes)\n\nimport { NgModule } from &#39;@angular/core&#39;;\nimport { RouterModule, Routes } from &#39;@angular/router&#39;;\nimport { HomeComponent } from &#39;./home/home.component&#39;;\nimport { AboutComponent } from &#39;./about/about.component&#39;;\n\nconst routes: Routes = [\n  { path: &#39;home&#39;, component: HomeComponent },\n  { path: &#39;about&#39;, component: AboutComponent },\n  { path: &#39;&#39;, redirectTo: &#39;home&#39;, pathMatch: &#39;full&#39; }, // default route\n  { path: &#39;**&#39;, redirectTo: &#39;home&#39; } // wildcard route\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],   // configure routes\n  exports: [RouterModule]                   // export for use in AppModule\n})\nexport class AppRoutingModule {}\n</pre></br></br><pre data-language=\"plain\">\n// app-routing.module.ts (root routes)\n\nimport { NgModule } from &#39;@angular/core&#39;;\nimport { BrowserModule } from &#39;@angular/platform-browser&#39;;\nimport { AppComponent } from &#39;./app.component&#39;;\nimport { AppRoutingModule } from &#39;./app-routing.module&#39;;\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    AppRoutingModule   // ✅ routing included here\n  ],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}\n</pre>"
                        },
                        {
                            "text": "<p><strong>Can you explain RouterModule.forRoot() and RouterModule.forChild()</strong></p>",
                            "sectionId": 11,
                            "subSectionId": 6,
                            "noteType": "Angular",
                            "topicId": 148,
                            "description": "<p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">In Angular, </span><code style=\"color: rgb(0, 0, 0); background-color: rgb(236, 236, 236);\">RouterModule.forRoot()</code><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\"> is used in the </span><strong style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">root module</strong><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\"> to configure </span><strong style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">global routes</strong><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">.</span></p></br><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">We use </span><code style=\"background-color: rgb(236, 236, 236); color: rgb(0, 0, 0);\">RouterModule.forChild()</code><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\"> to add additional routes without creating multiple Router instances.</span></p>"
                        }
                    ]
                },
                {
                    "name": "<p><strong>Routing with Standalone Component</strong></p>",
                    "sectionId": 11,
                    "subSectionId": 7,
                    "noteType": "Angular",
                    "topics": [
                        {
                            "text": "<p><strong>How do you handle routing in Angular?</strong></p>",
                            "sectionId": 11,
                            "subSectionId": 7,
                            "noteType": "Angular",
                            "topicId": 147,
                            "description": "<p>With standalone components, routing is configured <strong>directly in </strong><code><strong>main.ts</strong></code> using <code>provideRouter()</code>. Each component has <code>standalone: true</code> and can import <code>RouterModule</code> for directives like <code>&lt;router-outlet&gt;</code> and <code>routerLink</code>. This removes the need for NgModules, making routing simpler and more modular.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "name": "<p><strong>Forms</strong></p>",
            "sectionId": 12,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>What is the difference between reactive forms and template-driven forms?</strong></p>",
                    "sectionId": 12,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 65,
                    "description": "<ul><li><strong>Template-Driven Forms</strong> are built mainly in the <strong>HTML template</strong> using Angular directives (<strong>ngModel</strong>, <strong>ngForm</strong>), whereas <strong>Reactive Forms</strong> are built in <strong>TypeScript</strong> using <strong>FormControl</strong>, <strong>FormGroup</strong>, and <strong>FormBuilder</strong>.</li></ul></br><ul><li> For <strong>data binding</strong>, Template-Driven Forms use <strong>ngModel</strong>, while Reactive Forms use <strong>FormControl</strong>.</li></ul></br><ul><li>For <strong>validation</strong>, Template-Driven Forms use <strong>directives</strong> (such as <strong>required</strong>, <strong>minLength</strong>), whereas Reactive Forms use <strong>Validators</strong>.</li></ul></br><p> Therefore, Template-Driven Forms are <strong>not suitable</strong> for <strong>large and complex forms</strong>, but Reactive Forms are <strong>well-suited</strong> for them.</p>"
                },
                {
                    "text": "<p><strong>What is a FormGroup,  FormControl FormArray in Angular Reactive Forms?</strong></p>",
                    "sectionId": 12,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 66,
                    "description": "<ul><li><strong>FormControl</strong>: Represents a <strong>single form field</strong> (<strong>input</strong>, <strong>select</strong>, etc.).</li></ul></br><ul><li><strong>FormGroup</strong>: A <strong>collection</strong> of <strong>FormControl</strong> elements, treating them as a <strong>unit</strong>.</li></ul></br><ul><li><strong>FormArray</strong>: A <strong>collection</strong> of <strong>single form fields</strong> or <strong>FormGroup</strong>, like an <strong>array</strong>.</li></ul>"
                },
                {
                    "text": "<p><strong>How is form validation handled Template Driven Form in Angular?</strong></p>",
                    "sectionId": 12,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 67,
                    "description": "<p>In Template-Driven Forms, we can use built-in directives for validations such as <code>required</code>, <code>minlength</code>, <code>maxlength</code>, and <code>pattern</code>. We can also implement custom validations using directives that return validation errors.</p></br><pre data-language=\"plain\">\nCustom &quot;noSpace&quot; validator\n\nimport { Directive } from &#39;@angular/core&#39;;\nimport { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from &#39;@angular/forms&#39;;\n\n@Directive({\n  selector: &#39;[appNoSpace]&#39;,\n  providers: [{ provide: NG_VALIDATORS, useExisting: NoSpaceDirective, multi: true }]\n})\nexport class NoSpaceDirective implements Validator {\n  validate(control: AbstractControl): ValidationErrors | null {\n    const value = control.value;\n    if (value &amp;&amp; value.includes(&#39; &#39;)) {\n      return { noSpace: true };\n    }\n    return null;\n  }\n}\n</pre></br><pre data-language=\"plain\">\nUse in Template\n\n&lt;form #myForm=&quot;ngForm&quot;&gt;\n  &lt;input name=&quot;username&quot; ngModel appNoSpace required /&gt;\n  &lt;div *ngIf=&quot;myForm.controls[&#39;username&#39;]?.errors?.noSpace&quot;&gt;\n    Spaces are not allowed.\n  &lt;/div&gt;\n&lt;/form&gt;\n</pre></br></br></br></br>"
                },
                {
                    "text": "<p><strong>How is form validation handled Reactive Form in Angular?</strong></p>",
                    "sectionId": 12,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 68,
                    "description": "<p>In Reactive Forms, we can use built-in validators such as <code>Validators.required</code>, <code>Validators.minLength()</code>, and <code>Validators.pattern()</code>. We can also implement custom validations.</p></br><p><strong>Custom Validator for FormControl:</strong></p><pre data-language=\"plain\">\nExample: No Spaces Validator\n\nimport { AbstractControl, ValidationErrors, ValidatorFn } from &#39;@angular/forms&#39;;\n\nexport function noSpaceValidator(): ValidatorFn {\n  return (control: AbstractControl): ValidationErrors | null =&gt; {\n    if (control.value &amp;&amp; control.value.includes(&#39; &#39;)) {\n      return { noSpace: true }; // invalid\n    }\n    return null; // valid\n  };\n}\n</pre></br><pre data-language=\"plain\">\nUse Custom Validator in FormControl\n\nimport { FormGroup, FormControl, Validators } from &#39;@angular/forms&#39;;\n\nthis.userForm = new FormGroup({\n  username: new FormControl(&#39;&#39;, [Validators.required, noSpaceValidator()])\n});\n</pre></br><p><strong>Custom Validator for FormGroup:</strong></p><pre data-language=\"plain\">\nexport function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {\n  const password = group.get(&#39;password&#39;)?.value;\n  const confirmPassword = group.get(&#39;confirmPassword&#39;)?.value;\n\n  return password === confirmPassword ? null : { passwordsMismatch: true };\n}\n\n// Usage\nthis.registerForm = new FormGroup({\n  password: new FormControl(&#39;&#39;, Validators.required),\n  confirmPassword: new FormControl(&#39;&#39;, Validators.required)\n}, { validators: passwordMatchValidator });\n</pre></br></br></br>"
                },
                {
                    "text": "<p><strong>How to show error in Reactive Form?</strong></p>",
                    "sectionId": 12,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 69,
                    "description": "<pre data-language=\"plain\">\n&lt;form [formGroup]=&quot;myForm&quot; (ngSubmit)=&quot;onSubmit()&quot;&gt;\n  &lt;div&gt;\n    &lt;label&gt;Email: &lt;/label&gt;\n    &lt;input type=&quot;email&quot; formControlName=&quot;email&quot; /&gt;\n\n    @let emailControl = myForm.get(&#39;email&#39;);\n\n    @if(emailControl?.touched &amp;&amp; emailControl?.invalid) {\n      @let emailControlErrors = emailControl?.errors;\n\n      @if(emailControlErrors?.[&#39;required&#39;]) {\n        &lt;small&gt;Email is required&lt;/small&gt;\n      }\n\n      @if(emailControlErrors?.[&#39;email&#39;]) {\n        &lt;small&gt;Invalid email format&lt;/small&gt;\n      }\n\n      @if(emailControlErrors?.[&#39;minlength&#39;]) {\n        &lt;small&gt;Minimum length of email should be 6&lt;/small&gt;\n      }\n    }\n  &lt;/div&gt;\n\n  &lt;button type=&quot;submit&quot; [disabled]=&quot;myForm.invalid&quot;&gt;Submit&lt;/button&gt;\n&lt;/form&gt;\n</pre></br><pre data-language=\"plain\">\nconstructor(private fb: FormBuilder) {\n  this.myForm = this.fb.group({\n    email: [&#39;&#39;, [Validators.required, Validators.email, Validators.minLength(6)]],\n  });\n}\n\nonSubmit() {\n  if (this.myForm.invalid) {\n    this.myForm.markAllAsTouched(); // This will trigger all error messages\n    return;\n  }\n  console.log(this.myForm.value);\n}\n</pre></br></br></br>"
                },
                {
                    "text": "<p><strong>How to show error in Template Driven Form?</strong></p>",
                    "sectionId": 12,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 70,
                    "description": "<pre data-language=\"plain\">\n&lt;form #form=&quot;ngForm&quot; (ngSubmit)=&quot;submitForm(form)&quot;&gt;\n  &lt;div&gt;\n    &lt;label for=&quot;email&quot;&gt;Email: &lt;/label&gt;\n    &lt;input\n      type=&quot;email&quot;\n      name=&quot;email&quot;\n      [(ngModel)]=&quot;user.email&quot;\n      email\n      required\n      minlength=&quot;6&quot;\n      #emailRef=&quot;ngModel&quot;\n    /&gt;\n\n    @if(emailRef.touched &amp;&amp; emailRef.invalid) {\n      @if(emailRef.errors?.[&#39;required&#39;]) {\n        &lt;small&gt;Email is required.&lt;/small&gt;\n      }\n      @if(emailRef.errors?.[&#39;email&#39;]) {\n        &lt;small&gt;Invalid email format&lt;/small&gt;\n      }\n      @if(emailRef.errors?.[&#39;minlength&#39;]) {\n        &lt;small&gt;Minimum 6 characters required.&lt;/small&gt;\n      }\n    }\n  &lt;/div&gt;\n\n  &lt;button type=&quot;submit&quot; [disabled]=&quot;form.invalid&quot;&gt;Submit&lt;/button&gt;\n&lt;/form&gt;\n</pre></br><pre data-language=\"plain\">\nuser = {\n  email: &#39;&#39;,\n  password: &#39;&#39;,\n}\n\nsubmitForm(form: NgForm) {\n  if (form.invalid) {\n    // Mark all controls as touched to show validation errors\n    Object.values(form.controls).forEach(control =&gt; control.markAsTouched());\n    return;\n  }\n\n  console.log(this.user);\n}\n</pre>"
                },
                {
                    "text": "<pre data-language=\"plain\">\nthis.myForm.get(&#39;email&#39;)?.valueChanges\n  .subscribe(value =&gt; \n      { console.log(&#39;Email changed:&#39;, value); \n  }); \n</pre><p><strong>How to optimize this when valueChange fires on every keystroke?</strong></p>",
                    "sectionId": 12,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 71,
                    "description": "<p>We can use <strong>RxJS operators</strong> like <code><strong>debounceTime()</strong></code> and <code><strong>distinctUntilChanged()</strong></code> to optimize <code><strong>valueChanges</strong></code> at every keystroke.</p></br><ul><li><code>debounceTime()</code> delays the emission of values from an observable by a specified time <strong>after the last event</strong>.</li><li><code>distinctUntilChanged()</code> prevents an observable from emitting a value if it is the <strong>same as the previous value</strong>.</li></ul>"
                },
                {
                    "text": "<p><strong>How to create a new form with name, email, and phoneNumber controls every time a button is clicked.</strong></p>",
                    "sectionId": 12,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 72,
                    "description": "<pre data-language=\"plain\">\n&lt;form [formGroup]=&quot;userForm&quot; (ngSubmit)=&quot;onSubmit()&quot;&gt;\n  &lt;div formArrayName=&quot;users&quot;&gt;\n    @for(userGroup of users.controls; track userGroup; let i=$index) {\n      &lt;div [formGroupName]=&quot;i&quot; class=&quot;user-form&quot;&gt;\n        &lt;div&gt;\n          &lt;label for=&quot;name&quot;&gt;Name&lt;/label&gt;\n          &lt;input type=&quot;text&quot; name=&quot;name&quot; formControlName=&quot;name&quot; /&gt;\n          @if(userGroup.get(&#39;name&#39;)?.touched &amp;&amp; userGroup.get(&#39;name&#39;)?.invalid) {\n            &lt;small&gt;Name is required&lt;/small&gt;\n          }\n        &lt;/div&gt;\n\n        &lt;div&gt;\n          &lt;label for=&quot;email&quot;&gt;Email&lt;/label&gt;\n          &lt;input type=&quot;text&quot; name=&quot;email&quot; formControlName=&quot;email&quot; /&gt;\n          @if(userGroup.get(&#39;email&#39;)?.touched &amp;&amp; userGroup.get(&#39;email&#39;)?.invalid) {\n            @let emailControlError = userGroup.get(&#39;email&#39;)?.errors;\n\n            @if(emailControlError?.[&#39;required&#39;]) {\n              &lt;small&gt;Email is required.&lt;/small&gt;\n            }\n            @if(emailControlError?.[&#39;email&#39;]) {\n              &lt;small&gt;Invalid email.&lt;/small&gt;\n            }\n          }\n        &lt;/div&gt;\n\n        &lt;div&gt;\n          &lt;label for=&quot;phoneNumber&quot;&gt;Phone Number&lt;/label&gt;\n          &lt;input type=&quot;text&quot; name=&quot;phoneNumber&quot; formControlName=&quot;phoneNumber&quot; /&gt;\n          @if(userGroup.get(&#39;phoneNumber&#39;)?.touched &amp;&amp; userGroup.get(&#39;phoneNumber&#39;)?.invalid) {\n            &lt;small&gt;Phone Number is required&lt;/small&gt;\n          }\n        &lt;/div&gt;\n      &lt;/div&gt;\n    }\n  &lt;/div&gt;\n\n  &lt;button type=&quot;button&quot; (click)=&quot;addUser()&quot;&gt;Add Another User&lt;/button&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/form&gt;\n</pre></br><pre data-language=\"plain\">\nimport { Component } from &#39;@angular/core&#39;;\nimport { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from &#39;@angular/forms&#39;;\n\n@Component({\n  selector: &#39;app-root&#39;,\n  imports: [ReactiveFormsModule],\n  templateUrl: &#39;./app.html&#39;,\n  styleUrls: [&#39;./app.scss&#39;]\n})\nexport class App {\n  userForm!: FormGroup;\n\n  constructor(private fb: FormBuilder) {\n    this.userForm = this.fb.group({\n      users: this.fb.array([])\n    });\n\n    this.addUser();\n  }\n\n  get users(): FormArray {\n    return this.userForm.get(&#39;users&#39;) as FormArray;\n  }\n\n  createUserForm(): FormGroup {\n    return this.fb.group({\n      name: [&#39;&#39;, [Validators.required]],\n      email: [&#39;&#39;, [Validators.required, Validators.email]],\n      phoneNumber: [&#39;&#39;, [Validators.required]],\n    });\n  }\n\n  addUser() {\n    this.users.push(this.createUserForm());\n  }\n\n  onSubmit() {\n    if (this.userForm.valid) {\n      console.log(this.userForm.value);\n    } else {\n      this.users.controls.forEach(control =&gt; control.markAllAsTouched());\n    }\n  }\n}\n</pre>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Zone.js, NgZone and Change Detection</strong></p>",
            "sectionId": 13,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>What is Zone.js, NgZone and Change Detection?</strong></p>",
                    "sectionId": 13,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 73,
                    "description": "<p><strong>Zone.js</strong> is a JavaScript library that tracks <strong>asynchronous tasks</strong> start and finish. When a task completes, <strong>Zone.js</strong> informs <strong>NgZone</strong> (a wrapper around Zone.js), “Hey, something changed, maybe run <strong>change detection</strong>.”</p></br><p><code>NgZone</code> is an Angular service that acts as a <strong>bridge between asynchronous operations</strong> (like <code>setTimeout</code>, <code>Promise</code>, HTTP requests) and Angular’s <strong>change detection</strong> system. It is built on top of <strong>Zone.js</strong>.</p></br><p><strong>Change Detection:</strong></p><p>Change Detection in Angular is the process that updates the DOM when a component’s state changes. Change Detection runs through the component tree from top to bottom, compares the current and previous values, and updates the DOM if any value has changed.</p></br></br><p><strong>NgZone: Impact on Performance</strong></p><ul><li><strong>Pros:</strong><ul><li>Simplifies change detection by automatically tracking async operations.</li><li>Keeps the UI updated without manual intervention.</li></ul></li><li><strong>Cons / Considerations:</strong><ul><li>Every async operation triggers change detection for the <strong>entire component tree</strong> by default.</li><li>Frequent async operations (like rapid <code>setTimeout</code>, <code>setInterval</code>, or HTTP polling) can <strong>slow down performance</strong>.</li><li>To optimize, you can run tasks <strong>outside Angular’s zone</strong> using <code>ngZone.runOutsideAngular()</code> and only trigger change detection when necessary.</li></ul></li></ul>"
                },
                {
                    "text": "<p><strong>How does Angular’s change detection mechanism work?</strong></p>",
                    "sectionId": 13,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 75,
                    "description": "<p>Zone.js detects clicks, input events, and other DOM events, as well as when an asynchronous task has completed, and informs NgZone: &#39;Hey, something changed, maybe run change detection.&#39; NgZone then tells Angular to run change detection. Change detection runs through the component tree from top to bottom, compares the current and previous values, and updates the DOM if any value has changed. Angular checks all child components, regardless of whether they are affected by the change.</p>"
                },
                {
                    "text": "<p><strong>If I pass the value from parent component to child component, how does child component get this value?</strong></p>",
                    "sectionId": 13,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 76,
                    "description": "<p>Zone.js detects <strong>clicks</strong>, <strong>input events</strong>, and other <strong>DOM events</strong>, as well as when an <strong>asynchronous task</strong> has completed, and informs <strong>NgZone</strong>: &#39;Hey, something changed, maybe run <strong>change detection</strong>.&#39; <strong>NgZone</strong> then tells <strong>Angular</strong> to run <strong>change detection</strong>.</p></br><p>If we enable the <strong>OnPush Change Detection Strategy</strong>, <strong>Angular</strong> only checks a <strong>component</strong> when one of the following happens: the <strong>component</strong> triggers an <strong>event</strong> (click, input), an <strong>@Input</strong> property changes (<strong>reference changes</strong>), or an <strong>asynchronous task</strong> has completed.</p></br><p>Otherwise, <strong>Angular</strong> skips checking the <strong>component</strong>, improving <strong>performance</strong>.</p></br><pre data-language=\"plain\">\nEnable OnPush Strategy\n\nimport { ChangeDetectionStrategy, Component } from &#39;@angular/core&#39;;\n\n@Component({\n  selector: &#39;app-child&#39;,\n  templateUrl: &#39;./child.component.html&#39;,\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class ChildComponent { }\n</pre></br>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Guards</strong></p>",
            "sectionId": 14,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>What are Angular Guards?</strong></p>",
                    "sectionId": 14,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 27,
                    "description": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Angular </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Route Guards</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> are used to control access to routes based on conditions (e.g., authentication, permissions).</span></p>"
                },
                {
                    "text": "<p><strong>Explain the types of route guards.</strong></p>",
                    "sectionId": 14,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 28,
                    "description": "<p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">1. CanActivate:</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanActivate </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">is used to prevent unauthorized access to a route.</span></p></br><p><strong>2.</strong> <strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanActivateChild:</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanActivateChild </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">is used to </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">guard child routes</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> of a particular route.</span></p></br><p><strong>3.</strong> <strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanDeactivate:</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanDeactivate </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">is a</span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> route guard</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> used to prevent navigation away from a component.</span></p></br><p><strong>4.</strong> <strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Resolve</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">: Fetches data before loading a route.</span></p></br><p><strong>5.</strong> <strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanLoad:</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanLoad </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">is used to</span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">prevent loading a module unless conditions are met (used with lazy loading).</span></p></br><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Angular deprecated CanLoad in favor of the more powerful and flexible </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">CanMatch </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">guard starting in </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Angular v14+</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, especially for </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">standalone components</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> and </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">lazy-loaded routes</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">.</span></p>"
                },
                {
                    "text": "<p><strong>Can you explain how to implement authentication guards in Angular?</strong></p>",
                    "sectionId": 14,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 29,
                    "description": "<p>Authentication guards are implemented using the <code>CanActivate</code> interface, which controls access to routes based on conditions such as whether the user is logged in.</p></br><p>Authentication guards can be generated using the Angular CLI command <code>ng generate guard AuthGuard</code>. During generation, I select the <code>CanActivate</code> option, which creates a guard using <code>canActivateFn</code>. Inside the guard, I check whether the user is logged in; if yes, I return <code>true</code>, otherwise I redirect them to the login page. Finally, I apply this guard in the routing configuration by setting <code>canActivate: [AuthGuard]</code> on the required path.</p></br><pre data-language=\"plain\">\nauth.guard.ts\n\nimport { inject } from &#39;@angular/core&#39;;\nimport { CanActivateFn, Router } from &#39;@angular/router&#39;;\nimport { AuthService } from &#39;./auth.service&#39;;\n\nexport const authGuard: CanActivateFn = (route, state) =&gt; {\n  const authService = inject(AuthService);\n  const router = inject(Router);\n\n  if (authService.isLoggedIn()) {\n    return true; // allow access\n  }\n\n  // if not logged in → redirect to login\n  return router.createUrlTree([&#39;/login&#39;]);\n};\n</pre></br></br><pre data-language=\"plain\">\napp.routes.ts\n\nimport { Routes } from &#39;@angular/router&#39;;\nimport { DashboardComponent } from &#39;./dashboard/dashboard.component&#39;;\nimport { authGuard } from &#39;./auth.guard&#39;;\n\nexport const routes: Routes = [\n  {\n    path: &#39;dashboard&#39;,\n    component: DashboardComponent,\n    canActivate: [authGuard]\n  },\n  {\n    path: &#39;login&#39;,\n    loadComponent: () =&gt;\n      import(&#39;./login/login.component&#39;).then(m =&gt; m.LoginComponent),\n  },\n];\n</pre>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Component Communication</strong></p>",
            "sectionId": 15,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>How do components communicate with each other in a large-scale Angular application?</strong></p>",
                    "sectionId": 15,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 45,
                    "description": "<p>If the <strong>communication</strong> is between <strong>parent</strong> and <strong>child</strong>, I can <strong>pass data</strong> from <strong>parent to child</strong> through <code>@Input()</code> and <strong>emit data</strong> from <strong>child to parent</strong> through <code>@Output()</code>. I can also <strong>directly access</strong> a <strong>child component instance</strong> using <code>ViewChild</code> or <code>ContentChild</code>.</p></br><p>If <strong>components</strong> are <strong>unrelated</strong>, I create a <strong>shared service</strong> and <strong>share data</strong> through it using <code>Subject</code> or <code>BehaviorSubject</code> for <strong>real-time updates</strong>.</p></br><p>For <strong>large-scale apps</strong>, I use <strong>centralized state management</strong> like <strong>NgRx</strong> to <strong>manage</strong> and <strong>share data</strong>.</p></br><p>I can also <strong>pass data</strong> through <strong>route params</strong>, <strong>query params</strong>, or <strong>route state</strong>.</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>ViewChild / ViewChildren and ContentChild / ContentChildren</strong></p>",
            "sectionId": 16,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>What is ViewChild?</strong></p>",
                    "sectionId": 16,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 151,
                    "description": "<p><code>ViewChild</code> is used to get a reference to <strong>a single element, directive, or child component</strong> <strong>from the component’s own template (view)</strong>.</p></br><p>It becomes available after the <strong>view is initialized</strong> (<code>ngAfterViewInit</code>).</p></br><p><strong>Accessing a DOM element</strong></p><pre data-language=\"plain\">\n@Component({\n  selector: &#39;app-demo&#39;,\n  template: `&lt;p #para&gt;Hello World&lt;/p&gt;`\n})\nexport class DemoComponent implements AfterViewInit {\n  @ViewChild(&#39;para&#39;) para!: ElementRef;\n\n  ngAfterViewInit() {\n    console.log(this.para.nativeElement.textContent); // Outputs: &quot;Hello World&quot;\n  }\n}\n</pre></br><p><strong>Accessing a Child Component</strong></p><pre data-language=\"plain\">\n@Component({\n  selector: &#39;child-comp&#39;,\n  template: `&lt;p&gt;Child works!&lt;/p&gt;`\n})\nexport class ChildComponent {}\n\n@Component({\n  selector: &#39;app-demo&#39;,\n  template: `&lt;child-comp #child&gt;&lt;/child-comp&gt;`\n})\nexport class DemoComponent implements AfterViewInit {\n  @ViewChild(&#39;child&#39;) childComp!: ChildComponent;\n\n  ngAfterViewInit() {\n    console.log(this.childComp); // Access the ChildComponent instance\n  }\n}\n\n</pre>"
                },
                {
                    "text": "<p><strong>What is ViewChildren?</strong></p>",
                    "sectionId": 16,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 152,
                    "description": "<p><code>ViewChildren</code> is used to get references to <strong>multiple elements or child components</strong> in a component’s own template. It returns a <strong>QueryList</strong> and becomes available after <strong>ngAfterViewInit</strong>.</p></br><p><strong>Accessing multiple DOM elements</strong></p><pre data-language=\"plain\">\n@Component({\n  template: `\n    &lt;p #item *ngFor=&quot;let i of [1,2,3]&quot;&gt;Item {{i}}&lt;/p&gt;\n  `\n})\nexport class DemoComponent implements AfterViewInit {\n  @ViewChildren(&#39;item&#39;) items!: QueryList&lt;ElementRef&gt;;\n\n  ngAfterViewInit() {\n    this.items.forEach(el =&gt; console.log(el.nativeElement.textContent));\n  }\n}\n</pre></br><pre data-language=\"plain\">\n// Output\nItem 1\nItem 2\nItem 3\n</pre></br><p><strong>Accessing multiple Child Components</strong></p><pre data-language=\"plain\">\n@Component({\n  selector: &#39;child-comp&#39;,\n  template: `&lt;p&gt;Child&lt;/p&gt;`\n})\nexport class ChildComponent {}\n\n@Component({\n  template: `\n    &lt;child-comp *ngFor=&quot;let i of [1,2]&quot;&gt;&lt;/child-comp&gt;\n  `\n})\nexport class ParentComponent implements AfterViewInit {\n  @ViewChildren(ChildComponent) children!: QueryList&lt;ChildComponent&gt;;\n\n  ngAfterViewInit() {\n    console.log(this.children.length); // 2\n  }\n</pre><p>}</p>"
                },
                {
                    "text": "<p><strong>What is ContentChild?</strong></p>",
                    "sectionId": 16,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 153,
                    "description": "<p><code>ContentChild</code> is used to get a reference to a <strong>single element, directive, or component projected into a component</strong> via <code>&lt;ng-content&gt;</code>. It is available after <strong>ngAfterContentInit</strong></p></br><p><strong>Accessing projected content</strong></p><pre data-language=\"plain\">\n@Component({\n  selector: &#39;child-comp&#39;,\n  template: `&lt;ng-content&gt;&lt;/ng-content&gt;`\n})\nexport class ChildComponent implements AfterContentInit {\n  @ContentChild(&#39;projected&#39;) projected!: ElementRef;\n\n  ngAfterContentInit() {\n    console.log(this.projected.nativeElement.textContent);\n  }\n}\n</pre></br><pre data-language=\"plain\">\n&lt;!-- Parent Component Template --&gt;\n&lt;child-comp&gt;\n  &lt;p #projected&gt;Hello from Parent&lt;/p&gt;\n&lt;/child-comp&gt;\n</pre>"
                },
                {
                    "text": "<p><strong>What is ContentChildren?</strong></p>",
                    "sectionId": 16,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 154,
                    "description": "<p><code>ContentChildren</code> is used to get references to <strong>multiple elements or components projected into a component</strong> via <code>&lt;ng-content&gt;</code>. It returns a <strong>QueryList</strong> and becomes available after <strong>ngAfterContentInit</strong>.</p></br><p><strong>Accessing multiple projected elements</strong></p><pre data-language=\"plain\">\n@Component({\n  selector: &#39;child-comp&#39;,\n  template: `&lt;ng-content&gt;&lt;/ng-content&gt;`\n})\nexport class ChildComponent implements AfterContentInit {\n  @ContentChildren(&#39;projected&#39;) projectedItems!: QueryList&lt;ElementRef&gt;;\n\n  ngAfterContentInit() {\n    this.projectedItems.forEach(item =&gt; \n      console.log(item.nativeElement.textContent)\n    );\n  }\n}\n</pre></br><pre data-language=\"plain\">\n&lt;!-- Parent Component Template --&gt;\n&lt;child-comp&gt;\n  &lt;p #projected&gt;Item 1&lt;/p&gt;\n  &lt;p #projected&gt;Item 2&lt;/p&gt;\n&lt;/child-comp&gt;\n</pre>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Loading</strong></p>",
            "sectionId": 17,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>What is the difference between eager loading, lazy loading, and preloading in Angular?</strong></p>",
                    "sectionId": 17,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 61,
                    "description": "<p>Angular uses <strong>eager loading</strong>, <strong>lazy loading</strong>, or <strong>preloading</strong> strategies to load components or modules in an application.</p><p>Earlier, Angular loaded a module before accessing its components. However, after introducing <strong>standalone components</strong>, Angular can load components without loading their modules.</p></br><ul><li>In the <strong>eager loading</strong> strategy, all components or modules are loaded immediately when the application starts. This can make the initial load slower if there are many modules or components.</li><li>In the <strong>lazy loading</strong> strategy, modules or components are loaded on demand when the user navigates to those routes. This reduces the initial bundle size and improves startup performance.</li><li>In the <strong>preloading</strong> strategy, modules or components are loaded in the background after the application starts. This combines the benefits of both eager and lazy loading: fast navigation because modules are already loaded, and an optimized initial load.</li></ul></br>"
                },
                {
                    "text": "<p><strong>Can you explain how to implement lazy loading in Angular with module?</strong></p>",
                    "sectionId": 17,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 62,
                    "description": "<p>In the lazy loading strategy, earlier Angular used <code>loadChildren</code> to load modules before accessing components. However, after the introduction of standalone components, it uses <code>loadComponent</code> to load components directly.</p></br><p>Suppose we have a feature module (a module that encapsulates a specific feature or functionality) called <code>Admin</code>. First, we set up routing for the <code>Admin</code> module in <code>admin-routing.module.ts</code> and define a <code>routes</code> array that contains all route configurations related to this module. We then pass this <code>routes</code> array into <code>RouterModule.forChild()</code>.</p><p>Next, we configure app routing with lazy loading in <code>app-routing.module.ts</code>. In the app routing configuration, we use <code>loadChildren</code> to dynamically import the <code>AdminModule</code> when the user navigates to the <code>admin</code> routing path.</p></br><pre data-language=\"plain\">\nadmin/admin-routing.module.ts\n\nimport { NgModule } from &#39;@angular/core&#39;;\nimport { RouterModule, Routes } from &#39;@angular/router&#39;;\nimport { DashboardComponent } from &#39;./dashboard/dashboard.component&#39;;\n\nconst routes: Routes = [\n  { path: &#39;&#39;, component: DashboardComponent } // default path for admin module\n];\n\n@NgModule({\n  imports: [RouterModule.forChild(routes)],\n  exports: [RouterModule]\n})\nexport class AdminRoutingModule { }\n</pre></br><pre data-language=\"plain\">\napp-routing.module.ts\n\nimport { NgModule } from &#39;@angular/core&#39;;\nimport { RouterModule, Routes } from &#39;@angular/router&#39;;\n\nconst routes: Routes = [\n  { \n    path: &#39;admin&#39;, \n    loadChildren: () =&gt; import(&#39;./admin/admin.module&#39;).then(m =&gt; m.AdminModule) \n  },\n  { path: &#39;&#39;, redirectTo: &#39;/&#39;, pathMatch: &#39;full&#39; }\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule { }\n</pre></br>"
                },
                {
                    "text": "<p><strong>Can you explain how to implement lazy loading in Angular with standalone component?</strong></p>",
                    "sectionId": 17,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 64,
                    "description": "<p>In the lazy loading strategy, earlier Angular used <code>loadChildren</code> to load modules before accessing components. However, after the introduction of standalone components, it uses <code>loadComponent</code> to load components directly.</p></br><p>Suppose we have a standalone component called <code>Admin</code>. We configure lazy loading in <code>app.routes.ts</code> by defining a <code>routes</code> array that contains all route configurations. In the <code>admin</code> route, we use <code>loadComponent</code> to dynamically import the <code>AdminComponent</code> when the user navigates to the <code>admin</code> route path.</p></br><pre data-language=\"plain\">\napp.routes.ts\n\nimport { Routes } from &#39;@angular/router&#39;;\n\nexport const routes: Routes = [\n{\npath: &#39;admin&#39;,\nloadComponent: () =&gt;\nimport(&#39;./admin/admin.component&#39;).then(m =&gt; m.AdminComponent)\n},\n{ path: &#39;&#39;, redirectTo: &#39;admin&#39;, pathMatch: &#39;full&#39; }\n];\n</pre>"
                },
                {
                    "text": "<p><strong>Can you explain how to implement preloading in Angular?</strong></p>",
                    "sectionId": 17,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 63,
                    "description": ""
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Performance Optimization</strong></p>",
            "sectionId": 18,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>How can you optimize Angular Application for better performance?</strong></p>",
                    "sectionId": 18,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 46,
                    "description": "<p>In Angular, I optimize <strong>performance</strong> by using <strong>OnPush change detection</strong> with <strong>immutable data</strong>, <strong>trackBy</strong> in <strong>ngFor</strong> to avoid re-rendering, and <strong>pure pipes</strong> for efficiency. I also <strong>lazy load</strong> modules or components to reduce <strong>bundle size</strong>, move <strong>heavy logic</strong> out of <strong>templates</strong>, and <strong>unsubscribe</strong> from <strong>observables</strong> to prevent <strong>memory leaks</strong>. Additionally, I use <strong>standalone components</strong> and <strong>preloading strategies</strong> to improve <strong>load time</strong>.</p></br><p><strong>Immutable Data: </strong></p><p>If we use <strong>mutable objects/arrays</strong>, Angular cannot detect small changes (like this.user.name = &quot;Alice&quot;) unless we replace the entire reference.</p></br><p>Immutable data ensures that whenever we modify something, we <strong>create a new reference</strong>, which works perfectly with <strong>OnPush</strong>.</p></br><pre data-language=\"plain\">\n// ❌ Mutable (Angular won&#39;t detect inside change with OnPush)\nthis.user.name = &quot;Alice&quot;;  \n\n// ✅ Immutable (Angular detects new reference)\nthis.user = { ...this.user, name: &quot;Alice&quot; };\n</pre></br></br><p><strong>move heavy logic out of templates:</strong></p><p>If we call functions from the template for <code>*ngFor</code> or <code>*ngIf</code>, these functions are executed on every change detection cycle, whether the data has changed or not, which makes the performance slow.</p></br><pre data-language=\"plain\">\n❌ Bad Practice (heavy logic in template):\n\n&lt;div *ngFor=&quot;let user of getActiveUsers()&quot;&gt;\n  {{ calculateAge(user.dob) }}\n&lt;/div&gt;\n</pre>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Interceptor</strong></p>",
            "sectionId": 19,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>What is the Interceptor?</strong></p>",
                    "sectionId": 19,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 155,
                    "description": "<p><strong>Interceptor</strong> is a <strong>middleware</strong> for <strong>HTTP requests</strong> and <strong>responses</strong> in <strong>Angular</strong>. It allows us to <strong>modify requests</strong> (like adding <strong>authentication tokens</strong>), <strong>handle errors globally</strong>, or manage <strong>loaders</strong> without repeating code in every service. It improves <strong>code reusability</strong>, <strong>maintainability</strong>, and ensures <strong>consistent handling</strong> of <strong>API calls</strong>.</p>"
                },
                {
                    "text": "<p><strong>If I have multiple APIs, I need to show success and failure for each APIs. How can I handle it at one place?</strong></p>",
                    "sectionId": 19,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 156,
                    "description": "<p>Instead of handling <strong>success</strong> and <strong>error</strong> separately in every <strong>service</strong> or <strong>component</strong>, I used an <strong>HTTP Interceptor</strong>. This allows me to capture every <strong>request</strong> and <strong>response</strong> globally. I <strong>log successes</strong>, and if there’s any <strong>error</strong> (like <strong>401</strong>, <strong>404</strong>, or <strong>500</strong>), I can show a <strong>toast</strong> or <strong>redirect to login</strong> automatically. This makes the <strong>code cleaner</strong>, <strong>reusable</strong>, and avoids <strong>duplication</strong>.</p>"
                },
                {
                    "text": "<p><strong>Suppose I want to add an Authorization token for all API requests through an interceptor, but in the case of login and signup APIs I don’t need to pass the token. How can we handle that scenario efficiently in Angular?</strong></p>",
                    "sectionId": 19,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 157,
                    "description": "<p>In the <strong>interceptor</strong>, I check if the <strong>request URL</strong> is for <strong>login</strong> or <strong>signup</strong>. If yes, I <strong>skip adding the Authorization header</strong>. Otherwise, I <strong>clone the request</strong> and <strong>attach the token</strong>. This way, I handle it <strong>globally</strong> and avoid <strong>repeating logic</strong> in <strong>services</strong>.</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Compiler</strong></p>",
            "sectionId": 20,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>What is the role of a compiler in angular?</strong></p>",
                    "sectionId": 20,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 159,
                    "description": "<p>The <strong>Angular Compiler</strong> is a core part of the Angular framework that converts your application’s <strong>HTML templates</strong> and decorated <strong>TypeScript code</strong> (like components, directives, and pipes) into efficient <strong>JavaScript code</strong> that the browser can understand and execute.</p></br><p>Angular has two main compilation modes:</p></br><ul><li><strong>JIT (Just-in-Time):</strong> Used in the <strong>browser at runtime</strong> and is useful during <strong>development</strong>.</li><li><strong>AOT (Ahead-of-Time):</strong> Used in the <strong>build process</strong> before the app runs in the browser and is <strong>preferred for production</strong>.</li></ul>"
                },
                {
                    "text": "<p><strong>What is Ahead-of-Time (AOT) compilation in Angular?</strong></p>",
                    "sectionId": 20,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 160,
                    "description": "<p><strong>Ahead-of-Time (AOT) compilation</strong> is the process where Angular compiles <strong>TypeScript code</strong> and <strong>HTML templates</strong> into efficient <strong>JavaScript code</strong> during <strong>build time</strong>, <strong>before the browser downloads and runs the application</strong>.</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Challenges Faced in Angular Project</strong></p>",
            "sectionId": 23,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>Tell me about some challenges you faced in your Angular projects.</strong></p>",
                    "sectionId": 23,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 158,
                    "description": "<p>One of the challenges I faced was <strong>implementing a search box</strong>. Initially, every keystroke was hitting the backend API, which <strong>created unnecessary load and poor performance</strong>. I solved this by using <strong>RxJS operators</strong> — <code>debounceTime</code> to wait for the user to stop typing, <code>distinctUntilChanged</code> to avoid duplicate searches, and <code>switchMap</code> to cancel previous API calls when a new value was entered. This <strong>optimized API usage</strong> and <strong>improved the user experience</strong>.</p></br><p>Another challenge was <strong>implementing nested drag-and-drop functionality</strong>. The Angular CDK works well for flat lists, but in my project, we needed <strong>hierarchical data movement across multiple levels</strong>. I extended the CDK drag-drop with <strong>custom logic for nested structures</strong> and handled <strong>index recalculations</strong>. This provided <strong>smooth drag-and-drop</strong> for complex data.</p></br><p>I also faced <strong>memory leak issues</strong> due to multiple subscriptions. Some observables were not unsubscribed properly, <strong>leading to performance degradation</strong>. To fix this, I applied the <strong>async pipe</strong> wherever possible, used the <strong>takeUntil pattern with a Subject</strong>, and even created a <strong>BaseComponent</strong> to centralize cleanup logic in <code>ngOnDestroy</code>. This <strong>ensured stability</strong> and <strong>prevented memory leaks</strong>.</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Unit Testing</strong></p>",
            "sectionId": 24,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>What is Unit Testing in Angular, and why is it important?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 7,
                    "description": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Unit testing in Angular is the process of testing individual components, services, or functions in isolation to ensure they work correctly and make the application more reliable and maintainable.</span></p>"
                },
                {
                    "text": "<p><strong>What testing frameworks are commonly used with Angular (Jasmine, Karma, Jest)?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 8,
                    "description": "<p class=\"ql-align-justify\"><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Jasmine</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> is a testing framework, </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Karma</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> is a test runner (executes tests in browsers), and </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Jest</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> is an alternative framework+runner offering faster, simpler testing.</span></p></br><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">In short: </span><em style=\"background-color: transparent; color: rgb(0, 0, 0);\">Jasmine + Karma work together</em><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, while </span><em style=\"background-color: transparent; color: rgb(0, 0, 0);\">Jest alone can replace both</em><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">.</span></p>"
                },
                {
                    "text": "<p><strong>What is the difference between unit testing and end-to-end testing?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 9,
                    "description": "<p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Unit testing</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> checks individual components/services in isolation, while </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">end-to-end testing</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> validates the entire application flow from the user’s perspective.</span></p>"
                },
                {
                    "text": "<p><strong>What is the default test runner in Angular projects created with Angular CLI?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 10,
                    "description": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">The default test runner in Angular projects created with Angular CLI is </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Karma</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">.</span></p>"
                },
                {
                    "text": "<p><strong>How do you create a new Angular component test file using CLI?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 11,
                    "description": "<p class=\"ql-align-justify\"><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">You can create a new Angular component with its spec (test) file using:</span></p><pre data-language=\"plain\">\nng generate component component-name\n</pre><p class=\"ql-align-justify\"></p><p class=\"ql-align-justify\"><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">👉 The CLI automatically generates the </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">.spec.ts</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> test file.</span></p></br>"
                },
                {
                    "text": "<p><strong>What is ‘describe’ in jasmine in Unit Testing?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 12,
                    "description": ""
                },
                {
                    "text": "<p><strong>What is beforeEach in Jasmine?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 13,
                    "description": ""
                },
                {
                    "text": "<p><strong>What is TestBed in Angular Unit Testing?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 14,
                    "description": "<p><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">TestBed</strong><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">is the </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">primary Angular testing utility</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> that creates a </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">simulated Angular environment</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> for unit testing.</span></p></br><p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">It allows us to test components, directives, pipes, and services </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">with Angular’s dependency injection, change detection, and templates</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">.</span></p></br><p class=\"ql-align-justify\"><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">1. </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">TestBed </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">Configures a testing module</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> (like a mini </span><span style=\"color: rgb(24, 128, 56); background-color: transparent;\">NgModule</span><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">):</span></p><pre data-language=\"plain\">\n\n  TestBed.configureTestingModule({\n  \tdeclarations: [MyComponent],\n  \tproviders: [MyService],\n \timports: [FormsModule, HttpClientTestingModule]\n   });\n</pre><p class=\"ql-align-justify\"></p><p class=\"ql-align-justify\"><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">2.</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> TestBed creates Components for testing:</span></p><pre data-language=\"plain\">\n\n   const fixture = TestBed.createComponent(MyComponent);\n   const component = fixture.componentInstance;\n   fixture.detectChanges(); // runs ngOnInit + bindings\n</pre></br><p>3. TestBed is used to Inject Services:</p><pre data-language=\"plain\">\n      \n    const service = TestBed.inject(MyService);\n\n</pre><p><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">4. Run Change Detection:</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> Updates the DOM after changing component properties.</span></p>"
                },
                {
                    "text": "<p><strong>What is ‘it’ in jasmine in Unit Testing?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 15,
                    "description": ""
                },
                {
                    "text": "<p><strong>What is ‘expect’ in Jasmin?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 16,
                    "description": ""
                },
                {
                    "text": "<p><strong>Can you describe some matchers?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 17,
                    "description": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">In Angular unit testing, a matcher function compares the actual result with the expected result.</span></p></br><p><strong>1.</strong> <strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">toBeTruthy:</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">.toBeTruthy()</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">checks that a value is not </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">false</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">, </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">0</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">, </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">&#39;&#39;</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">, </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">null</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">, </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">undefined</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, or </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">NaN</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">.</span></p></br><p><strong>2.</strong> <strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">toHaveBeenCalledWith: </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">toHaveBeenCalledWith</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">is a Jasmine matcher that checks if a spy (mocked function) was called with the expected arguments. </span> </p>"
                },
                {
                    "text": "<p><strong>How does </strong><strong style=\"color: rgb(0, 138, 0);\">async </strong><strong>work in Angular testing?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 18,
                    "description": "<p><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">async</strong><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">utility (renamed to </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">waitForAsync</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">) tracks all </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">pending async tasks</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> (Promises, timers, XHR) and waits until they are finished. Only then allows the test to continue and run expectations. It waits for </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">real async operations</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> to finish automatically.</span></p></br><pre data-language=\"plain\">\n\nmy.component.ts\n\nimport { Component, OnInit } from &#39;@angular/core&#39;;\n@Component({\n  selector: &#39;app-my&#39;,\n  template: `&lt;div *ngIf=&quot;data&quot;&gt;{{ data }}&lt;/div&gt;`\n})\nexport class MyComponent implements OnInit {\n  data: string | null = null;\n  ngOnInit(): void {\n    // Simulate async data (like HTTP call)\n    this.loadData().then(result =&gt; {\n      this.data = result;\n    });\n  }\n  loadData(): Promise&lt;string&gt; {\n    return new Promise(resolve =&gt; {\n      setTimeout(() =&gt; resolve(&#39;Hello Async Data!&#39;), 500);\n    });\n  }\n}\n</pre></br><pre data-language=\"plain\">\n\n// my.component.spec.ts\n\nit(&#39;should load data async and render it&#39;, waitForAsync(() =&gt; {\n fixture.detectChanges(); // triggers ngOnInit\n fixture.whenStable().then(() =&gt; {\n fixture.detectChanges(); // update view after async resolves\n const div = fixture.debugElement.query(By.css(&#39;div&#39;)).nativeElement;\n expect(div.textContent).toContain(&#39;Hello Async Data!&#39;);\n expect(component.data).toBe(&#39;Hello Async Data!&#39;);\n });\n</pre></br><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">🔑</span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> What happens here:</strong></p></br><p><strong>1.</strong> <strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">fixture.detectChanges():</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> triggers </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">ngOnInit</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, which starts an async task.</span></p></br><p><strong>2.</strong> <strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">fixture.whenStable():</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> waits until </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">all Promises &amp; async tasks are finished</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">.</span></p></br><p><strong>3.</strong> <strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">fixture.detectChanges():</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> refreshes template after data is set.</span></p></br><p><strong>4.</strong> <span style=\"color: rgb(0, 0, 0); background-color: transparent;\">Test asserts that </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">async data is rendered</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">.</span></p></br><p><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">Explain:</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </span></p><p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">I created a </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">loadData</strong><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">function that returns a Promise and resolved this Promise inside </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">ngOnInit()</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, storing the result in a </span><span style=\"color: rgb(24, 128, 56); background-color: transparent;\">data</span><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> property.</span></p></br><p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">For the unit test: I created a </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">loadData</strong><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">function which returns a Promise and resolved this Promise in </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">ngOnInit()</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, then stored the result in the </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">data</strong><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">property. I wrote a unit test case for this. I used </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">TestBed.createComponent</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> to create a fixture for the component, which provides the setup before running the tests, and I accessed the component instance using </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">fixture.componentInstance</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">.</span></p></br><p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">Inside the </span><span style=\"color: rgb(24, 128, 56); background-color: transparent;\">it</span><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> block for </span><em style=\"color: rgb(0, 0, 0); background-color: transparent;\">&#39;should load data async and render it&#39;</em><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, I wrapped the test with the </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">waitForAsync</strong><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">function. First, I ran</span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">fixture.detectChanges()</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> to update the view. Then I used </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">fixture.whenStable()</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> to wait until the component became stable. After that, I got the </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">div</strong><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">element’s </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">nativeElement</strong><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">using </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">fixture.debugElement.query(By.css(&#39;div&#39;)).nativeElement</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">. Finally, I compared </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">div.textContent</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> and </span><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">component.data</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> with</span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\"> </strong><strong style=\"color: rgb(24, 128, 56); background-color: transparent;\">&#39;Hello Async Data&#39;</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">.</span></p>"
                },
                {
                    "text": "<p><strong>How does </strong><strong style=\"color: rgb(0, 138, 0);\">fakeAsync </strong><strong>work in Angular testing?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 19,
                    "description": "<p><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">fakeAsync</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">utility tests asynchronous code </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">synchronously</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> by simulating the passage of time.</span></p></br><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">When you wrap a test function in </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">fakeAsync</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, Angular runs it and replaces real async functions </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">(</strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">setTimeout</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">, </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">setInterval</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">, </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">Promise.then</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, RxJS timers, etc.) with </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">mocked versions</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">.</span></p></br><pre data-language=\"plain\">\n\nfake-async.component.ts\n\nimport { Component, OnInit } from &#39;@angular/core&#39;;\n@Component({\n  selector: &#39;app-fake-async&#39;,\n  template: `\n    &lt;div&gt;Static Div&lt;/div&gt;\n    &lt;div *ngIf=&quot;data&quot;&gt;{{ data }}&lt;/div&gt;\n    &lt;div&gt;Another Div&lt;/div&gt;\n  `\n})\nexport class FakeAsyncComponent implements OnInit {\n  data: string | null = null;\n  ngOnInit(): void {\n    setTimeout(() =&gt; {\n      this.data = &#39;Hello FakeAsync!&#39;;\n    }, 1000);\n  }\n}\n</pre></br><pre data-language=\"plain\">\n\nit(&#39;should load async data into the second div&#39;, fakeAsync(() =&gt; {\n    fixture.detectChanges(); // triggers ngOnInit\n    expect(component.data).toBeNull();\n    tick(1000);              // simulate passage of 1 second\n    fixture.detectChanges();\n    const divs = fixture.debugElement.queryAll(By.css(&#39;div&#39;));\n    expect(divs.length).toBe(3);\n    // Second div contains async data\n    expect(divs[1].nativeElement.textContent).toContain(&#39;Hello FakeAsync!&#39;);\n    expect(component.data).toBe(&#39;Hello FakeAsync!&#39;);\n  }));\n</pre></br><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Note:</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> Don’t use fixture.detectChanges(); in beforeEach() otherwise we will get an error.</span></p>"
                },
                {
                    "text": "<p><strong>What is the difference between</strong><strong style=\"color: rgb(0, 138, 0);\"> tick()</strong><strong> and </strong><strong style=\"color: rgb(0, 138, 0);\">flush()</strong><strong> in Angular tests?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 20,
                    "description": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Both </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">tick()</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> and </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">flush()</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> are used </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">inside </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">fakeAsync</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> tests</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> to control virtual time and execute async tasks.</span></p></br><p><strong>1.</strong>  <strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">tick()</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> is a helper function that works only inside a </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">fakeAsync</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> zone</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">. It </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">simulates the passage of virtual time</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, allowing scheduled async tasks </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">(</strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">setTimeout</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">, </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">setInterval</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, RxJS timers, Promises, etc.) to be executed </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">without waiting in real time</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">.</span></p></br><p><strong>2.</strong>  <strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">flush()</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> is a helper function that works only inside a </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">fakeAsync</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">zone. It executes all pending timers at once, without needing any arguments, and moves the virtual clock forward until all queued timers (macroTasks like </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">setTimeout</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">and </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">setInterval</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">) are executed.</span></p>"
                },
                {
                    "text": "<p><strong>How can you test an Angular service that makes HTTP calls?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 21,
                    "description": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">When a service uses HttpClient, we don’t hit the real backend in unit tests. Instead, we use Angular’s HttpClientTestingModule and HttpTestingController to mock HTTP requests.</span></p></br><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">I test Angular services with HTTP calls by using HttpClientTestingModule and HttpTestingController. This allows me to mock requests, assert on the method/URL, and return mock responses with flush() instead of calling the real backend.</span></p></br><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Call </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">httpMock.verify()</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> in </span><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">afterEach</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">to ensure no unmatched requests.</span></p></br><pre data-language=\"plain\">\n\nTest service file\n\nimport { TestBed } from &#39;@angular/core/testing&#39;;\nimport { User } from &#39;./user&#39;;\nimport { HttpTestingController, provideHttpClientTesting } from &#39;@angular/common/http/testing&#39;;\nimport { provideHttpClient, withFetch } from &#39;@angular/common/http&#39;;\ndescribe(&#39;User&#39;, () =&gt; {\n  let service: User;\n  let httpMock: HttpTestingController;\n  beforeEach(() =&gt; {\n    TestBed.configureTestingModule({\n      providers: [\n        User,\n        provideHttpClient(withFetch()),\n        provideHttpClientTesting()\n      ]\n    });\n    service = TestBed.inject(User);\n    httpMock = TestBed.inject(HttpTestingController);\n  });\n  afterEach(() =&gt; {\n    httpMock.verify();\n  })\n  it(&#39;should be created&#39;, () =&gt; {\n    expect(service).toBeTruthy();\n  });\n  it(&#39;should fetch users from API&#39;, () =&gt; {\n    const mockUsers = [\n      {\n        &quot;userId&quot;: 1,\n        &quot;id&quot;: 1,\n        &quot;title&quot;: &quot;delectus aut autem&quot;,\n        &quot;completed&quot;: false\n      }];\n      \n    service.getUsers().subscribe(users =&gt; {\n      expect(mockUsers).toEqual(users);\n    });\n    const req = httpMock.expectOne(&#39;https://jsonplaceholder.typicode.com/todos/1&#39;);\n    expect(req.request.method).toBe(&#39;GET&#39;);\n    req.flush(mockUsers);\n  });\n});\n\n</pre>"
                },
                {
                    "text": "<p><strong>How do you test an Angular component with </strong><strong style=\"color: rgb(0, 138, 0);\">@Input()</strong><strong> and </strong><strong style=\"color: rgb(0, 138, 0);\">@Output()</strong><strong> properties?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 22,
                    "description": ""
                },
                {
                    "text": "<p><strong>What is </strong><strong style=\"color: rgb(0, 138, 0);\">ComponentFixture</strong><strong> in Angular testing, and why is it used?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 23,
                    "description": ""
                },
                {
                    "text": "<p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">What is the use of </strong><strong style=\"background-color: transparent; color: rgb(24, 128, 56);\">spyOn()</strong><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> in Jasmine?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 24,
                    "description": "<p><code>spyOn</code> is a <strong>Jasmine function</strong> used in Angular unit tests.</p></br><p>It <strong>spies on methods</strong> of components, services, or other objects.</p></br><p>It allows you to <strong>track method calls</strong> and <strong>mock return values</strong> without executing the real implementation.</p>"
                },
                {
                    "text": "<p><strong>What is the use of createSpyObject() in Jasmine?</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 25,
                    "description": ""
                },
                {
                    "text": "<p><strong>Explain Jasmine </strong><strong style=\"color: rgb(0, 138, 0);\">spyOn </strong><strong>and </strong><strong style=\"color: rgb(0, 138, 0);\">createSpyObj </strong><strong>in Angular Unit Testing.</strong></p>",
                    "sectionId": 24,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 26,
                    "description": "<p><code>spyOn</code> is used to watch or mock methods of an existing object. It helps us test without calling the real implementation. For example, <code>spyOn(service, &#39;getData&#39;).and.returnValue(mockData)</code>.</p></br><p><code>createSpyObj</code> is used when we want to mock an entire dependency or service. Instead of creating real objects, we create a fake one with multiple spy methods, like <code>jasmine.createSpyObj(&#39;UserService&#39;, [&#39;getUser&#39;, &#39;saveUser&#39;])</code>.</p></br><p>The key difference is: <code>spyOn</code> works on existing objects, while <code>createSpyObj</code> creates a new fake object.</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>angular.json file</strong></p>",
            "sectionId": 38,
            "noteType": "Angular",
            "topics": [
                {
                    "text": "<p><strong>When we create a component ‘</strong><strong style=\"background-color: rgb(187, 187, 187);\">ng generate component info</strong><strong>’, an app is getting added. From where the app is getting added?</strong></p>",
                    "sectionId": 38,
                    "subSectionId": -1,
                    "noteType": "Angular",
                    "topicId": 167,
                    "description": "<p>The <strong>app</strong> is added as a <strong>prefix</strong> because it&#39;s defined as the <strong>default prefix</strong> in the <strong>angular.json configuration</strong> under the <strong>project&#39;s settings</strong>.</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Angular related other questions</strong></p>",
            "sectionId": 37,
            "noteType": "Angular",
            "topics": [],
            "subSections": [
                {
                    "name": "<p><strong>Tokens</strong></p>",
                    "sectionId": 37,
                    "subSectionId": 8,
                    "noteType": "Angular",
                    "topics": [
                        {
                            "text": "<p><strong>What are authorization tokens in angular?</strong></p>",
                            "sectionId": 37,
                            "subSectionId": 8,
                            "noteType": "Angular",
                            "topicId": 164,
                            "description": "<p><strong>Authorization Tokens: </strong></p><p>Authorization tokens are <strong>pieces of data (usually a string)</strong> issued by the server that prove a user is <strong>authenticated</strong> and has permission to access certain resources.</p></br><p><strong>Common Types:</strong></p><ol><li><strong>JWT (JSON Web Token)</strong> – Encodes user info and expiry time.</li><li><strong>OAuth Tokens</strong> – Access tokens issued by OAuth providers.</li><li><strong>Custom tokens</strong> – Sometimes generated by your backend.</li></ol></br></br>"
                        },
                        {
                            "text": "<p><strong>Do you have any idea about bearer token and JWT token?</strong></p>",
                            "sectionId": 37,
                            "subSectionId": 8,
                            "noteType": "Angular",
                            "topicId": 165,
                            "description": "<p>A <strong>Bearer Token</strong> is used for <strong>authorization</strong>, while a <strong>JWT token</strong> can be used for both <strong>authorization</strong> and carrying <strong>user data/claims</strong>.</p>"
                        }
                    ]
                },
                {
                    "name": "<p><strong>Restful API</strong></p>",
                    "sectionId": 37,
                    "subSectionId": 9,
                    "noteType": "Angular",
                    "topics": [
                        {
                            "text": "<p><strong>What is a Restful API?</strong></p>",
                            "sectionId": 37,
                            "subSectionId": 9,
                            "noteType": "Angular",
                            "topicId": 166,
                            "description": "<p>A <strong>REST API</strong> (Representational State Transfer Application Programming Interface) is a way for two systems (such as a <strong>frontend app</strong> and a <strong>backend server</strong>) to communicate over the Internet using standard <strong>HTTP methods</strong>.</p></br><p><strong>Common HTTP methods:</strong></p><ul><li><strong>GET</strong> → Retrieve data</li><li><strong>POST</strong> → Create new data</li><li><strong>PUT / PATCH</strong> → Update existing data</li><li><strong>DELETE</strong> → Remove data</li></ul>"
                        }
                    ]
                }
            ]
        }
    ];
} 