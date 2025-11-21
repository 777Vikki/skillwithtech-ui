export const angularVersionFeatureList = () => {
    return [
        {
            "name": "<p>Basic</p>",
            "sectionId": 65,
            "noteType": "AngularVersionFeatures",
            "topics": [
                {
                    "text": "<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">What </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">new features</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\"> have you used in the </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">latest version of Angular</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">?</span></p>",
                    "sectionId": 65,
                    "subSectionId": -1,
                    "noteType": "AngularVersionFeatures",
                    "topicId": 353,
                    "description": ""
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Angular 14 Features</strong></p>",
            "sectionId": 66,
            "noteType": "AngularVersionFeatures",
            "topics": [
                {
                    "text": "<p>What are Angular standalone components and how do they differ from NgModules?</p>",
                    "sectionId": 66,
                    "subSectionId": -1,
                    "noteType": "AngularVersionFeatures",
                    "topicId": 354,
                    "description": "<p>Standalone <strong>components</strong> were introduced in <strong>Angular v14+</strong>. A standalone <strong>component</strong> can be defined by setting the flag <code><strong>standalone: true</strong></code> in the <strong>@Component</strong> decorator. These are <strong>self-contained components</strong>, which means any <strong>dependencies</strong> can be imported directly into the <strong>imports</strong> property.</p></br><p>Earlier, Angular used <code><strong>platformBrowserDynamic().bootstrapModule()</strong></code> to load a <strong>module</strong>, and then the <strong>AppComponent</strong> was loaded. In the case of <strong>lazy loading</strong>, Angular used <code><strong>loadChildren</strong></code> to load a <strong>module</strong>, and only then could we access its <strong>components</strong>. If I needed to use a <strong>component</strong> from another <strong>module</strong>, I first had to <strong>import the module</strong> before using the <strong>component</strong>.</p></br><p>With the introduction of <strong>standalone components</strong>, Angular now uses <code><strong>bootstrapApplication()</strong></code> to load the <strong>AppComponent</strong> directly. For <strong>lazy loading</strong>, Angular uses <code><strong>loadComponent()</strong></code> to load a <strong>component</strong> directly. If I need to use a <strong>component</strong> inside another <strong>component</strong>, I can <strong>import that component directly</strong> without needing its <strong>module</strong>. This removes the extra layer of <strong>NgModule</strong>, making <strong>Angular applications</strong> more <strong>lightweight</strong> and <strong>faster</strong>.</p>"
                },
                {
                    "text": "<p>Can standalone components be lazy-loaded?</p>",
                    "sectionId": 66,
                    "subSectionId": -1,
                    "noteType": "AngularVersionFeatures",
                    "topicId": 355,
                    "description": "<p>In <strong>Angular v14+</strong>, <strong>standalone components</strong> can be <strong>lazy-loaded</strong> directly using <code><strong>loadComponent</strong></code>, without needing to wrap them inside an <strong>NgModule</strong>.</p></br><pre data-language=\"plain\">\nimport { Routes } from &#39;@angular/router&#39;;\n\nconst routes: Routes = [\n  {\n    path: &#39;user&#39;,\n    loadComponent: () =&gt;\n      import(&#39;./user/user.component&#39;).then(m =&gt; m.UserComponent)\n  }\n];\n</pre></br>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Angular 15 Features</strong></p>",
            "sectionId": 67,
            "noteType": "AngularVersionFeatures",
            "topics": [],
            "subSections": []
        },
        {
            "name": "<p><strong>Angular 16 Features</strong></p>",
            "sectionId": 68,
            "noteType": "AngularVersionFeatures",
            "topics": [
                {
                    "text": "<p>Explain Signals in Angular.</p>",
                    "sectionId": 68,
                    "subSectionId": -1,
                    "noteType": "AngularVersionFeatures",
                    "topicId": 356,
                    "description": "<p><strong>Signals</strong> were introduced in <strong>Angular v16</strong>. A <strong>signal</strong> is a <strong>reactive model</strong> that <strong>stores a value</strong> and <strong>automatically updates the UI</strong> or <strong>triggers components</strong> when the value <strong>changes</strong>.</p></br><p><strong>Signals</strong> are handled using <code><strong>signal()</strong></code>, <code><strong>computed()</strong></code>, and <code><strong>effect()</strong></code>.</p></br><ul><li><code><strong>signal()</strong></code> creates a <strong>reactive value</strong>.</li><li><code><strong>computed()</strong></code> derives <strong>values</strong> based on other <strong>signals</strong>.</li><li><code><strong>effect()</strong></code> runs <strong>side effects</strong> when <strong>signals change</strong>.</li></ul></br><p>A <strong>reactive model</strong> is a way of <strong>managing</strong> and <strong>updating application state automatically</strong> when the <strong>underlying data changes</strong>.</p>"
                },
                {
                    "text": "<p>How do they differ from RxJS Observables?</p>",
                    "sectionId": 68,
                    "subSectionId": -1,
                    "noteType": "AngularVersionFeatures",
                    "topicId": 357,
                    "description": "<p><strong>Signals</strong> are <strong>synchronous</strong>, <strong>stateful</strong>, and always hold the <strong>current value</strong>, making them ideal for <strong>local component state</strong> and <strong>fine-grained reactivity</strong>.</p></br><p><strong>Observables</strong> are <strong>asynchronous streams</strong> that can <strong>emit multiple values</strong> over time, suited for handling <strong>async events</strong>, <strong>APIs</strong>, and <strong>complex transformations</strong> using <strong>RxJS operators</strong>.</p>"
                },
                {
                    "text": "<p>Can signals replace NgRx? In which scenarios would you still prefer NgRx?</p>",
                    "sectionId": 68,
                    "subSectionId": -1,
                    "noteType": "AngularVersionFeatures",
                    "topicId": 358,
                    "description": "<p><strong>Signals</strong> are great for <strong>local</strong>, <strong>component-level state</strong> and <strong>simple reactive patterns</strong> (e.g., <strong>form states</strong>, <strong>UI toggles</strong>, <strong>derived values</strong>).</p></br><p>Use <strong>NgRx</strong> when the app grows <strong>large</strong>, needs <strong>global consistency</strong>, <strong>scalability</strong>, or <strong>complex side effects</strong>.</p>"
                },
                {
                    "text": "<p>What are declarative destroy hooks?</p>",
                    "sectionId": 68,
                    "subSectionId": -1,
                    "noteType": "AngularVersionFeatures",
                    "topicId": 359,
                    "description": "<p><strong>Declarative destroy hooks</strong> are <strong>Angular’s new way</strong> to automatically handle <strong>cleanup</strong> (like <strong>unsubscribing from Observables</strong>) when a <strong>component</strong> or <strong>directive</strong> is <strong>destroyed</strong>, reducing <strong>boilerplate</strong> and avoiding <strong>memory leaks</strong>.</p></br><pre data-language=\"plain\">\nimport { Component, effect, inject, DestroyRef } from &#39;@angular/core&#39;;\nimport { takeUntilDestroyed } from &#39;@angular/core/rxjs-interop&#39;;\n\nconstructor() {\n    // ✅ RxJS cleanup automatically\n    interval(1000)\n      .pipe(takeUntilDestroyed())\n      .subscribe(val =&gt; console.log(&#39;Interval:&#39;, val));\n\n    // ✅ Signals/effect cleanup automatically\n    effect(() =&gt; {\n      console.log(&#39;Effect running&#39;);\n    }, { injector: inject(DestroyRef) });\n}\n</pre></br>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Angular 17 Features</strong></p>",
            "sectionId": 69,
            "noteType": "AngularVersionFeatures",
            "topics": [
                {
                    "text": "<p>What is <strong>defer()</strong> in <strong>Angular</strong>?</p>",
                    "sectionId": 69,
                    "subSectionId": -1,
                    "noteType": "AngularVersionFeatures",
                    "topicId": 360,
                    "description": ""
                },
                {
                    "text": "<p>What is the new <strong>Control Flow</strong> in<strong> Angular 17</strong>?</p>",
                    "sectionId": 69,
                    "subSectionId": -1,
                    "noteType": "AngularVersionFeatures",
                    "topicId": 361,
                    "description": ""
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Angular 18 Features</strong></p>",
            "sectionId": 70,
            "noteType": "AngularVersionFeatures",
            "topics": [
                {
                    "text": "<p>What is the difference between <strong>Zone-based</strong> and <strong>Zoneless Angular</strong>?</p>",
                    "sectionId": 70,
                    "subSectionId": -1,
                    "noteType": "AngularVersionFeatures",
                    "topicId": 362,
                    "description": ""
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Angular 19 Features</strong></p>",
            "sectionId": 71,
            "noteType": "AngularVersionFeatures",
            "topics": [],
            "subSections": []
        },
        {
            "name": "<p><strong>Angular 20 Features</strong></p>",
            "sectionId": 72,
            "noteType": "AngularVersionFeatures",
            "topics": [],
            "subSections": []
        }
    ];
}