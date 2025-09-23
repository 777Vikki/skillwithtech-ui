export const typescriptList = () => {
    return [
        {
            "name": "<p><strong>Basic</strong></p>",
            "sectionId": 40,
            "noteType": "TypeScript",
            "topics": [
                {
                    "text": "<p><strong>Why did we introduce typescript, we have JavaScript?</strong></p>",
                    "sectionId": 40,
                    "subSectionId": -1,
                    "noteType": "TypeScript",
                    "topicId": 175,
                    "description": "<p><strong>JavaScript</strong> is a <strong>dynamic type</strong>. It doesn’t check <strong>types</strong> at <strong>compile time</strong>. <strong>Errors</strong> like <code>&quot;undefined is not a function&quot;</code> only appear at <strong>runtime</strong>, whereas <strong>TypeScript</strong> adds <strong>static type checking</strong> that catches <strong>bugs</strong> before <strong>execution</strong>.</p></br><p><strong>TypeScript</strong> supports <strong>interfaces</strong>, <strong>generics</strong>, <strong>access modifiers</strong>, <strong>abstract classes</strong> that support better <strong>design patterns</strong>.</p>"
                },
                {
                    "text": "<p><strong>Difference between type vs interface and when to use each.</strong></p>",
                    "sectionId": 40,
                    "subSectionId": -1,
                    "noteType": "TypeScript",
                    "topicId": 176,
                    "description": "<p>In <strong>TypeScript</strong>, an <strong>interface</strong> is a way to define the <strong>shape of an object</strong>, including its <strong>properties</strong>, <strong>types</strong>, and <strong>methods</strong>, without providing the implementation. It’s used for <strong>type-checking</strong> and <strong>ensuring consistency</strong> across objects, classes, or functions.</p></br><p>In <strong>TypeScript</strong>, a <strong>type</strong> (or <strong>type alias</strong>) is a way to <strong>define a custom name for a type</strong> or a combination of types.</p></br><p>✅ <strong>Difference from interface:</strong></p></br><ul><li><code><strong>interface</strong></code> is mainly for <strong>object shapes</strong> and <strong>class implementation</strong>.</li><li><code><strong>type</strong></code> is more <strong>flexible</strong> (can represent primitives, unions, intersections, functions).</li></ul></br><p><strong>Interface</strong></p></br><pre data-language=\"plain\">\ninterface User {\n  id: number;\n  name: string;\n}\n\ninterface User {\n  email?: string; // merged with previous User interface\n}\n</pre></br><p><strong>Type</strong></p></br><pre data-language=\"plain\">\ntype User = {\n  id: number;\n  name: string;\n};\n\n// type User = { email?: string }; // ❌ Error: duplicate\n\n</pre></br><p><strong>Type with union / intersection</strong></p></br><pre data-language=\"plain\">\ntype A = { x: number };\ntype B = { y: string };\ntype C = A &amp; B; // intersection\ntype D = number | string; // union\n</pre>"
                },
                {
                    "text": "<p><strong>Difference between any, unknown, never.</strong></p>",
                    "sectionId": 40,
                    "subSectionId": -1,
                    "noteType": "TypeScript",
                    "topicId": 177,
                    "description": "<p>In <strong>TypeScript</strong>, <code><strong>any</strong></code> is a <strong>special type</strong> that <strong>disables type checking</strong>.</p><p> If we use it, we lose all <strong>TypeScript safety</strong> and <strong>mistakes</strong> won’t be caught during <strong>compilation</strong>.</p></br><p><code><strong>unknown</strong></code> is better than <code><strong>any</strong></code>.</p><p> If we assign anything to <strong>unknown</strong>, we <strong>cannot use it directly</strong> without <strong>checking its type first</strong>.</p><p> We can <strong>prevent runtime errors</strong>.</p></br><p><code><strong>never</strong></code> is a type in <strong>TypeScript</strong> that represents <strong>values that should never happen</strong>.</p>"
                },
                {
                    "text": "<p><strong>Generics – why needed, real example with Angular services (e.g., HttpClient).</strong></p>",
                    "sectionId": 40,
                    "subSectionId": -1,
                    "noteType": "TypeScript",
                    "topicId": 178,
                    "description": "<p><strong>Generics</strong> in <strong>TypeScript</strong> allow us to write <strong>reusable</strong> and <strong>type-safe code</strong> without losing <strong>flexibility</strong>.</p></br><p>For example, <strong>Angular’s HttpClient</strong> uses <strong>Generics</strong> so that we can define the <strong>expected response type</strong>, which avoids using <strong>any</strong> and provides <strong>compile-time safety</strong> and <strong>IntelliSense</strong>.</p></br><pre data-language=\"plain\">\n// Instead of this (unsafe, returns any):\nthis.http.get(&#39;api/users&#39;);\n\n// We use Generics (safe, typed):\nthis.http.get&lt;User[]&gt;(&#39;api/users&#39;).subscribe(users =&gt; {\n  console.log(users[0].name); // ✅ Type-safe\n});\n</pre></br>"
                },
                {
                    "text": "<p><strong>Decorators in TypeScript (how Angular uses them).</strong></p>",
                    "sectionId": 40,
                    "subSectionId": -1,
                    "noteType": "TypeScript",
                    "topicId": 179,
                    "description": "<p>A <strong>decorator</strong> is a <strong>special kind of declaration</strong> that can attach <strong>metadata</strong> or <strong>behavior</strong> to <strong>classes</strong>, <strong>methods</strong>, <strong>properties</strong>, or <strong>parameters</strong> at <strong>design time</strong> (before <strong>runtime execution</strong>).</p><p>They are prefixed with <strong>@</strong> and evaluated at <strong>runtime</strong>.</p><p><strong>Decorators in TypeScript</strong> are <strong>functions</strong> that add <strong>metadata</strong> to <strong>classes</strong>, <strong>methods</strong>, or <strong>properties</strong>. <strong>Angular</strong> uses them (like <strong>@Component</strong>, <strong>@Injectable</strong>, <strong>@Input</strong>, etc.) to understand how to process a <strong>class</strong> – whether it’s a <strong>component</strong>, <strong>module</strong>, <strong>service</strong>, <strong>directive</strong>, or <strong>dependency injection token</strong>.</p><h3>Class Decorators</h3><ul><li><strong>@Component</strong> → marks a <strong>class</strong> as an <strong>Angular component</strong></li><li><strong>@NgModule</strong> → marks a <strong>class</strong> as a <strong>module</strong></li><li><strong>@Injectable</strong> → marks a <strong>class</strong> as a <strong>service</strong> that can be <strong>injected</strong></li></ul><h3>Property Decorators</h3><ul><li><strong>@Input</strong> → passes <strong>data</strong> from <strong>parent to child</strong></li><li><strong>@Output</strong> → emits <strong>events</strong> from <strong>child to parent</strong></li><li><strong>@ViewChild</strong> → gets a <strong>reference</strong> to a <strong>child component, directive, or element</strong></li></ul><h3>Method Decorators</h3><ul><li><strong>@HostListener</strong> → listens to <strong>DOM events</strong> on the <strong>host element</strong></li></ul><h3>Parameter Decorators</h3><ul><li><strong>@Inject</strong> → explicitly tells <strong>Angular</strong> what <strong>dependency</strong> to <strong>inject</strong></li></ul></br><p>constructor(@Inject(&#39;API_URL&#39;) private apiUrl: string) {}</p></br><p><strong>Metadata</strong> is <strong>extra information</strong> attached to a <strong>class</strong> (via <strong>decorators</strong>) that tells <strong>Angular</strong> how to <strong>process</strong>, <strong>instantiate</strong>, or <strong>use</strong> that <strong>class</strong>.</p><pre data-language=\"plain\">\n\n</pre>"
                }
            ],
            "subSections": []
        }
    ];
};