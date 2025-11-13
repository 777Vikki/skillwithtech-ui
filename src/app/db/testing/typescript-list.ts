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
                    "description": "<p>In <strong>TypeScript</strong>, a <strong>Generic</strong> is a powerful feature that allows you to <strong>create reusable, type-safe components</strong> (functions, classes, or interfaces) that work with <strong>any data type</strong> — without losing type information.</p></br><p>For example, <strong>Angular’s HttpClient</strong> uses <strong>Generics</strong> so that we can define the <strong>expected response type</strong>, which avoids using <strong>any</strong> and provides <strong>compile-time safety</strong> and <strong>IntelliSense</strong>.</p></br><pre data-language=\"plain\">\n// Instead of this (unsafe, returns any):\nthis.http.get(&#39;api/users&#39;);\n\n// We use Generics (safe, typed):\nthis.http.get&lt;User[]&gt;(&#39;api/users&#39;).subscribe(users =&gt; {\n  console.log(users[0].name); // ✅ Type-safe\n});\n</pre>"
                },
                {
                    "text": "<p><strong>Decorators in TypeScript (how Angular uses them).</strong></p>",
                    "sectionId": 40,
                    "subSectionId": -1,
                    "noteType": "TypeScript",
                    "topicId": 179,
                    "description": "<p><strong>Decorators in TypeScript</strong> are special functions that allow you to <strong>modify or enhance classes, methods, properties, or parameters</strong> at design time.</p><p>They are widely used in frameworks like <strong>Angular</strong> to add metadata and behavior to different parts of the code.</p><p>There are several types of decorators:</p><ol><li><strong>Class Decorators</strong> – Used to modify classes.<ul><li>Examples: <code>@Component</code>, <code>@Directive</code>, <code>@Pipe</code>, <code>@Injectable</code></li></ul></li><li><strong>Property Decorators</strong> – Used to modify or observe properties within a class.<ul><li>Examples: <code>@Input</code>, <code>@Output</code>, <code>@ViewChild</code>, <code>@ViewChildren</code>, <code>@ContentChild</code>, <code>@ContentChildren</code></li></ul></li><li><strong>Method Decorators</strong> – Used to modify methods.<ul><li>Examples: <code>@HostListener</code>, <code>@HostBinding</code></li></ul></li><li><strong>Parameter Decorators</strong> – Used to access metadata about parameters in class constructors.<ul><li>Example: <code>@Inject()</code></li></ul></li></ol></br><p><strong>Notes:</strong></p><ul><li><strong>Metadata</strong> = extra information about a class, method, or property — which helps Angular or TypeScript understand <strong>how to treat it</strong>.</li><li><strong>Behavior</strong> = extra functionality added by the decorator.</li></ul></br>"
                },
                {
                    "text": "<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">What are </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">tuple types</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">?</span></p>",
                    "sectionId": 40,
                    "subSectionId": -1,
                    "noteType": "TypeScript",
                    "topicId": 263,
                    "description": "<p>Tuple types in TypeScript allow you to <strong>define an array with a fixed number of elements where each element has a specific type</strong>.</p></br><pre data-language=\"plain\">\nlet person: [string, number] = [&quot;Vivek&quot;, 31];\n</pre></br>"
                },
                {
                    "text": "<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">What are </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">Enums</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\"> and where are they </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">used</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">?</span></p>",
                    "sectionId": 40,
                    "subSectionId": -1,
                    "noteType": "TypeScript",
                    "topicId": 264,
                    "description": "<p>Enums in TypeScript are a special type that allow you to define a <strong>set of named constant values</strong>. They help make code more <strong>readable, maintainable, and type-safe</strong>, especially when working with a known set of options.</p>"
                }
            ],
            "subSections": []
        }
    ];
};