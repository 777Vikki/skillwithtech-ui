export const javascriptList = () => {
    return [
        {
            "name": "<p><strong>Basic</strong></p>",
            "sectionId": 44,
            "noteType": "JavaScript",
            "topics": [
                {
                    "text": "<p>What is JavaScript?</p>",
                    "sectionId": 44,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 195,
                    "description": ""
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Closure</strong></p>",
            "sectionId": 45,
            "noteType": "JavaScript",
            "topics": [
                {
                    "text": "<p>What is closures in JavaScript?</p>",
                    "sectionId": 45,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 196,
                    "description": ""
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Hoisting</strong></p>",
            "sectionId": 46,
            "noteType": "JavaScript",
            "topics": [
                {
                    "text": "<p>What is Hoisting in JavaScript?</p>",
                    "sectionId": 46,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 197,
                    "description": ""
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Coding: Find Result and Explain</strong></p>",
            "sectionId": 47,
            "noteType": "JavaScript",
            "topics": [],
            "subSections": [
                {
                    "name": "<p><strong>Find Result and explain it.</strong></p>",
                    "sectionId": 47,
                    "subSectionId": 13,
                    "noteType": "JavaScript",
                    "topics": [
                        {
                            "text": "<pre data-language=\"plain\">\nconsole.log(&quot;Start&quot;);\n\nsetTimeout(() =&gt; {\n    console.log(&quot;Settimeout executed&quot;); \n});\n\nconst myPromise = new Promise((resolve) =&gt; {\n    resolve(&quot;Resolve Promise&quot;); \n});\n\nmyPromise.then((res) =&gt; {\n    console.log(res); \n});\n\nconsole.log(&quot;End&quot;);\n</pre>",
                            "sectionId": 47,
                            "subSectionId": 13,
                            "noteType": "JavaScript",
                            "topicId": 198,
                            "description": "<p><code>console.log(&quot;start&quot;)</code> runs immediately because it’s synchronous.</p><p> <code>setTimeout</code> is asynchronous, so its callback is scheduled in the <strong>macro task queue</strong>.</p><p> The <code>Promise</code> constructor executes right away, but its <code>.then()</code> callback is placed in the <strong>micro task queue</strong>.</p><p> Finally, <code>console.log(&quot;End&quot;)</code> runs synchronously.</p><p>The <strong>event loop</strong> ensures that once the call stack is empty, tasks from the <strong>micro task queue</strong> are processed before tasks from the <strong>macro task queue</strong>.</p><p> That’s why promise callbacks run <strong>before</strong> <code>setTimeout</code> callbacks.</p></br><p>👉 In short:</p><p> <strong>Order of execution</strong> → synchronous code → microtasks (promises) → macrotasks (setTimeout, setInterval).</p>"
                        },
                        {
                            "text": "<pre data-language=\"plain\">\nconst details = {\n  name: &quot;Vivek&quot;,\n  printName: function() {\n      return this.name;\n  },\n  printName1: () =&gt; {\n      return this.name;\n  },\n};\n\nconsole.log(details.printName());\nconsole.log(details.printName1());\n</pre>",
                            "sectionId": 47,
                            "subSectionId": 13,
                            "noteType": "JavaScript",
                            "topicId": 199,
                            "description": "<pre data-language=\"plain\">\nVivek\nundefined\n</pre></br></br><p><code>details.printName()</code> is a regular function. When invoked as <code>details.printName()</code>, <code>this</code> refers to the <code>details</code> object, so it returns <strong>&quot;Vivek&quot;</strong>.</p><p><code>details.printName1()</code> is an arrow function. Arrow functions don’t have their own <code>this</code>; they inherit it lexically from their defining scope. In this case, <code>this</code> refers to the global scope (<code>window</code> in browsers, <code>global</code> in Node.js), where <code>name</code> is not defined, so it returns <strong>undefined</strong>.</p>"
                        },
                        {
                            "text": "<pre data-language=\"plain\">\nconsole.log(name);\nvar name = &quot;Vivek&quot;;\n</pre>",
                            "sectionId": 47,
                            "subSectionId": 13,
                            "noteType": "JavaScript",
                            "topicId": 200,
                            "description": "<pre data-language=\"plain\">\nundefined\n</pre></br><p>When the JavaScript program runs, all variables and functions are moved to the top of their scope. JavaScript allocates memory for <code>var</code>-declared variables and initializes them with <strong>undefined</strong>. So, if we access a variable before its actual assignment, we get <strong>undefined</strong>.</p>"
                        },
                        {
                            "text": "<pre data-language=\"plain\">\nconsole.log(name);\nconst name = &quot;Vivek&quot;;\n</pre>",
                            "sectionId": 47,
                            "subSectionId": 13,
                            "noteType": "JavaScript",
                            "topicId": 201,
                            "description": "<pre data-language=\"plain\">\nReferenceError: Cannot access &#39;name&#39; before initialization\n</pre></br><p>When a JavaScript program runs, all variables and functions are moved to the top of their scope. JavaScript allocates memory for <code>let</code> or <code>const</code>-declared variables but does not assign them a value. So, if we access a variable before its actual assignment, we get a </p></br><pre data-language=\"plain\">\nReferenceError: Cannot access &#39;name&#39; before initialization.\n</pre></br>"
                        }
                    ]
                }
            ]
        },
        {
            "name": "<p><strong>Coding: Complete Implementation</strong></p>",
            "sectionId": 48,
            "noteType": "JavaScript",
            "topics": [
                {
                    "text": "<pre data-language=\"plain\">\nconst counter = () =&gt; {\n    let count = 0;\n    return ...;\n};\n\nconst counterControl = counter();\ncounterControl.increment();\ncounterControl.decrement();\n</pre>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 202,
                    "description": "<pre data-language=\"plain\">\nconst counter = () =&gt; {\n    let count = 0;\n    return {\n        increment: () =&gt; {\n            count++;\n            console.log(count);\n        },\n        decrement: function() {\n            count--;\n            console.log(count);\n        }  \n    };\n};\n\nconst counterControl = counter();\ncounterControl.increment();\ncounterControl.decrement();\n</pre>"
                }
            ],
            "subSections": []
        }
    ];
};