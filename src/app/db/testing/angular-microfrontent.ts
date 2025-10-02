export const angularMicrofrontendList = () => {
    return [
        {
            "name": "<p><strong>Core Concepts</strong></p>",
            "sectionId": 44,
            "noteType": "AngularMicroFrontend",
            "topics": [
                {
                    "text": "<p>What are Micro Frontends, and why do we need them?</p>",
                    "sectionId": 44,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 195,
                    "description": "<p><a href=\"https://chatgpt.com/c/68d6a5a3-0d6c-8330-9a6c-f1b654eeddf2\" rel=\"noopener noreferrer\" target=\"_blank\">https://chatgpt.com/c/68d6a5a3-0d6c-8330-9a6c-f1b654eeddf2</a></p></br><p><strong>Micro Frontends:</strong></p><p>Micro Frontends (MFE) is an <strong>architectural style</strong> where a frontend application is split into <strong>smaller, independent, self-contained apps (micro apps)</strong>.</p></br><p>Each micro app is responsible for a specific business domain or feature, and they come together to form a larger application.</p></br><p><strong>Why do we need Micro Frontends?</strong></p></br><ol><li><strong>Scalability</strong><ul><li>Large teams can work on different parts of the app without stepping on each other’s code.</li><li>Each team owns one micro frontend.</li></ul></li><li><strong>Independent Deployment</strong><ul><li>A micro app can be deployed <strong>without redeploying the whole application</strong>.</li><li>Faster release cycles and easier hotfixes.</li></ul></li><li><strong>Technology Agnostic</strong><ul><li>Different teams can use <strong>different frontend frameworks/libraries</strong> (Angular, React, Vue, etc.) if needed.</li><li>Useful in large organizations with mixed tech stacks.</li></ul></li><li><strong>Faster Development</strong><ul><li>Teams can work in <strong>parallel</strong> on different micro frontends.</li><li>Reduces dependency bottlenecks.</li></ul></li><li><strong>Code Maintainability</strong><ul><li>Smaller codebases are easier to maintain and refactor.</li><li>Each micro frontend has its own <strong>repo, build pipeline, and CI/CD</strong>.</li></ul></li><li><strong>Resilience</strong><ul><li>If one micro frontend fails, it doesn’t necessarily break the entire app.</li></ul></li></ol></br>"
                },
                {
                    "text": "<p>How do Micro Frontends differ from a monolithic Angular app?</p>",
                    "sectionId": 44,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 196,
                    "description": "<p><strong style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">Micro Frontends (MFE) </strong><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">is an </span><strong style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">architectural style</strong><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\"> where a frontend application is split into </span><strong style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">smaller, independent, self-contained apps (micro apps)</strong><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">.</span></p></br><p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">Each micro app is responsible for a specific business domain or feature, and they come together to form a larger application.</span></p></br></br></br><p>A <strong>Monolithic Angular app</strong> is a <strong>single, large frontend application</strong> built as one unified codebase, where all features, modules, and components reside together. It’s the traditional way of building Angular applications.</p>"
                },
                {
                    "text": "<p>What are the main advantages and disadvantages of Micro Frontends?</p>",
                    "sectionId": 44,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 197,
                    "description": "<p>Micro Frontends are an architectural approach where a large frontend app is split into smaller, independent modules owned by different teams. The main advantages are <strong>independent development and deployment</strong>, <strong>scalability of teams and code</strong>, <strong>technology flexibility</strong>, <strong>easier maintenance</strong>, <strong>incremental upgrades</strong>, and <strong>failure isolation</strong>, meaning one part failing won’t break the whole app.</p></br><p> On the downside, they introduce <strong>complexity in integration and routing</strong>, <strong>setup overhead</strong>, potential <strong>performance issues</strong> if not optimized, <strong>consistency challenges</strong> in UI/UX across teams, and <strong>more complex end-to-end testing</strong>.</p><p> Overall, they are ideal for large applications with multiple teams, but not always necessary for smaller projects.</p>"
                },
                {
                    "text": "<p>What approaches are commonly used to implement Micro Frontends in Angular (Module Federation, Angular Elements, iFrames, single-spa)?</p>",
                    "sectionId": 44,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 198,
                    "description": "<p>Module Federation is currently the most popular approach for Angular apps because it allows independent deployment with shared dependencies.</p>"
                },
                {
                    "text": "<p>What is Webpack 5 Module Federation, and how does Angular support it?</p>",
                    "sectionId": 44,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 199,
                    "description": "<p><strong>Webpack 5 Module Federation:</strong></p><p><strong>Module Federation</strong> is a feature introduced in <strong>Webpack 5</strong> that allows multiple <strong>independent builds</strong> to form a single application. Each build (called a <strong>remote</strong>) can expose and consume code dynamically at runtime.</p></br><p><strong>Angular Supports Module Federation:</strong></p><p>Angular doesn’t have native module federation built-in, but it <strong>integrates seamlessly</strong> with Webpack 5.</p><p>👉<a href=\"https://www.npmjs.com/package/@angular-architects/module-federation\" rel=\"noopener noreferrer\" target=\"_blank\"> </a><code><a href=\"https://www.npmjs.com/package/@angular-architects/module-federation\" rel=\"noopener noreferrer\" target=\"_blank\">@angular-architects/module-federation</a> </code></p><p>This package helps Angular apps set up Module Federation with minimal configuration.</p></br></br></br>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Angular-Specific</strong></p>",
            "sectionId": 45,
            "noteType": "AngularMicroFrontend",
            "topics": [
                {
                    "text": "<p>How do you configure Angular with Module Federation (host and remote apps)?</p>",
                    "sectionId": 45,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 200,
                    "description": "<p>First, <strong>create a workspace</strong> for the applications using:</p></br><pre data-language=\"plain\">\nng new mono-repo-workspace --create-application=false\n</pre></br><p>Then <strong>change directory</strong> to the workspace:</p></br><pre data-language=\"plain\">\ncd mono-repo-workspace\n</pre></br><p>In the second step, <strong>generate the host (shell) application</strong> using:</p></br><pre data-language=\"plain\">\nng generate application shell --routing --style=scss\n</pre></br><p>And <strong>generate the remote application</strong> using:</p></br><pre data-language=\"plain\">\nng generate application dashboard --routing --style=scss\n</pre></br><p>In the third step, <strong>add the Module Federation plugin</strong> by installing the <strong>official community package</strong>:</p></br><pre data-language=\"plain\">\nnpm install @angular-architects/module-federation --save-dev\n</pre></br><p>Then <strong>add it to each app</strong>:</p></br><p>For the <strong>host</strong>:</p></br><pre data-language=\"plain\">\nng add @angular-architects/module-federation --project shell --type host\n</pre></br><p>For the <strong>remote</strong>:</p></br><pre data-language=\"plain\">\nng add @angular-architects/module-federation --project dashboard --type remote\n</pre></br><p>This will generate <code><strong>webpack.config.js</strong></code> and <code><strong>webpack.prod.config.js</strong></code> in both apps.</p>"
                },
                {
                    "text": "<p>How do you share Angular libraries (like Angular core, RxJS, Material) across Micro Frontends?</p>",
                    "sectionId": 45,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 201,
                    "description": "<p>In a Micro Frontend architecture with Angular, we avoid bundling Angular core, RxJS, and Material in each MFE. We use Webpack Module Federation to share these libraries. We mark Angular libraries as <code>singleton: true</code> to ensure only one instance exists across MFEs and use <code>strictVersion: true</code> to avoid version conflicts. This approach reduces bundle size, prevents runtime errors, and ensures consistent behavior across apps.</p></br><pre data-language=\"plain\">\nshared: share({\n    &quot;@angular/core&quot;: { singleton: true, strictVersion: true },\n    &quot;@angular/common&quot;: { singleton: true, strictVersion: true },\n    &quot;@angular/router&quot;: { singleton: true, strictVersion: true },\n    &quot;rxjs&quot;: { singleton: true },\n    &quot;@angular/material&quot;: { singleton: true }\n  })\n</pre></br><p>OR</p></br><pre data-language=\"plain\">\nshared: { \n...shareAll({ singleton: true, strictVersion: true, requiredVersion: &#39;auto&#39; }), \n},\n</pre></br><p><code>shareAll</code> is a helper from <code>@angular-architects/module-federation</code>and it automatically marks <strong>all dependencies from </strong><code><strong>package.json</strong></code> as shared. </p>"
                },
                {
                    "text": "<p>How do you set up routing between multiple Micro Frontends in Angular?</p>",
                    "sectionId": 45,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 202,
                    "description": "<p>In Angular Micro Frontends, routing is managed at two levels. The <strong>host application</strong> defines the top-level routes and lazy-loads each Micro Frontend using <code>loadChildren</code> with Module Federation, while configuring the remotes in <code>webpack.config.js</code>. </p></br><p>Each <strong>remote application</strong> defines its own child routes using <code>RouterModule.forChild()</code> and exposes its modules in <code>webpack.config.js</code>. Navigation between MFEs then works the same as standard Angular routing.</p>"
                },
                {
                    "text": "<p>What’s the difference between using Angular Elements (Web Components) vs Module Federation?</p>",
                    "sectionId": 45,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 203,
                    "description": ""
                },
                {
                    "text": "<p>How do you manage state across different Micro Frontends (NgRx, shared services, custom events)?</p>",
                    "sectionId": 45,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 204,
                    "description": ""
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Integration &amp; Communication</strong></p>",
            "sectionId": 46,
            "noteType": "AngularMicroFrontend",
            "topics": [
                {
                    "text": "<p>How can Micro Frontends communicate with each other?</p>",
                    "sectionId": 46,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 205,
                    "description": ""
                },
                {
                    "text": "<p>How do you handle authentication and authorization in Micro Frontend architecture?</p>",
                    "sectionId": 46,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 206,
                    "description": ""
                },
                {
                    "text": "<p>How do you manage CSS/style isolation in Angular Micro Frontends?</p>",
                    "sectionId": 46,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 207,
                    "description": ""
                },
                {
                    "text": "<p>How do you integrate Angular Micro Frontends with React/Vue Micro Frontends?</p>",
                    "sectionId": 46,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 208,
                    "description": ""
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Performance &amp; Deployment</strong></p>",
            "sectionId": 47,
            "noteType": "AngularMicroFrontend",
            "topics": [
                {
                    "text": "<p>What are the performance challenges in Micro Frontends, and how do you optimize them?</p>",
                    "sectionId": 47,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 209,
                    "description": "<p>Micro Frontends can communicate with each other in several ways:</p></br><ul><li><strong>Shared State (NgRx / Redux):</strong> A global store in the host (Shell) can manage application-wide state, and each MFE can register feature stores.</li><li><strong>Shared Services (DI + Module Federation):</strong> Provide a singleton service (e.g., <code>UserService</code>) in the host and consume it across MFEs. This ensures data consistency like user session or theme.</li><li><strong>Custom Events / DOM Events:</strong> MFEs can dispatch and listen to browser events (<code>CustomEvent</code>, <code>window.postMessage</code>) for loose coupling when they don’t share runtime.</li><li><strong>URL / Query Params:</strong> MFEs can communicate indirectly through route parameters or query strings, useful for cross-navigation.</li><li><strong>Global Event Bus (RxJS / Pub-Sub):</strong> A shared RxJS Subject or Event Bus can broadcast events between MFEs.</li></ul>"
                },
                {
                    "text": "<p>How do you handle duplicate dependencies across Micro Frontends?</p>",
                    "sectionId": 47,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 210,
                    "description": ""
                },
                {
                    "text": "<p>How do you ensure version compatibility of shared libraries in Module Federation?</p>",
                    "sectionId": 47,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 211,
                    "description": ""
                },
                {
                    "text": "<p>How do you manage CI/CD for multiple Micro Frontends?</p>",
                    "sectionId": 47,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 212,
                    "description": ""
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Scenario / Advanced</strong></p>",
            "sectionId": 48,
            "noteType": "AngularMicroFrontend",
            "topics": [
                {
                    "text": "<p>If two Micro Frontends use different Angular versions, how do you make them work together?</p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 213,
                    "description": ""
                },
                {
                    "text": "<p>How would you migrate an existing monolithic Angular app into Micro Frontends?</p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 214,
                    "description": ""
                },
                {
                    "text": "<p>How would you rollback a specific Micro Frontend if a deployment fails?</p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 215,
                    "description": ""
                },
                {
                    "text": "<p>What are some real-world challenges you faced (or might face) in Micro Frontend implementation?</p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "AngularMicroFrontend",
                    "topicId": 216,
                    "description": ""
                }
            ],
            "subSections": []
        }
    ];
}