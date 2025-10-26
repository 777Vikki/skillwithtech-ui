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
                    "description": "<p>JavaScript (often abbreviated as <strong>JS</strong>) is a <strong>high-level, interpreted programming language</strong> that is widely used to make web pages interactive and dynamic.</p></br><p>It runs in the browser using engines like <strong>V8 (Chrome)</strong> or <strong>SpiderMonkey (Firefox)</strong>, and can also run on servers via <strong>Node.js</strong>. With JavaScript, developers can manipulate the <strong>DOM</strong>, handle <strong>events</strong>, perform <strong>asynchronous operations</strong> (AJAX, Fetch, Promises, async/await), and build <strong>full-stack applications</strong>.</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Call(), apply() and bind()</strong></p>",
            "sectionId": 54,
            "noteType": "JavaScript",
            "topics": [
                {
                    "text": "<p>Explain the difference between <strong>call()</strong>, <strong>apply()</strong>, and <strong>bind()</strong> methods in <strong>JavaScript</strong>. When would you use each?</p>",
                    "sectionId": 54,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 256,
                    "description": "<p>In JavaScript, <strong>call</strong>, <strong>apply</strong>, and <strong>bind</strong> are methods that allow you to control the context (<strong>this</strong> value) in which a function is executed.</p></br><pre data-language=\"plain\">\nfunction greet(city, country) {\n    console.log(this.name + &#39; from &#39; + city + &#39;, &#39; + country);\n}\nconst person = {\n    name: &#39;Alice&#39;\n};\n\n</pre></br><p>The <strong>call()</strong> method invokes a function with a specified <strong>this</strong> value and arguments passed <strong>individually</strong>.</p></br><pre data-language=\"plain\">\ngreet.call(person, &#39;Delhi&#39;, &#39;India&#39;); // Alice from Delhi, India\n</pre></br><p>The <strong>apply()</strong> method invokes a function with a specified <strong>this</strong> value and arguments passed as an <strong>array</strong>.</p></br><pre data-language=\"plain\">\ngreet.apply(person, [&#39;Los Angeles&#39;, &#39;U.S.&#39;]); // Alice from Los Angeles, U.S.\n</pre></br><p>The <strong>bind()</strong> method creates a <strong>new function</strong> with a given <strong>this</strong> value and optional arguments, <strong>without immediately invoking</strong> it.</p></br><pre data-language=\"plain\">\nconst detail = greet.bind(person, &#39;Moscow&#39;);\ndetail(&#39;Russia&#39;); // Alice from Moscow, Russia\n</pre>"
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
                    "description": "<p><strong>Closures</strong> in <strong>JavaScript</strong> are a <strong>powerful feature</strong> that allows <strong>inner functions</strong> to access the <strong>scope</strong> of their <strong>outer (enclosing) functions</strong>, even after the <strong>outer function</strong> has <strong>finished executing</strong>.</p></br><p><strong>Main uses of closures in JavaScript:</strong></p><ul><li>Data Privacy / Encapsulation</li><li>Maintaining State</li><li>Callbacks &amp; Event Handlers</li><li>Function Factories</li><li>Module Pattern</li></ul>"
                },
                {
                    "text": "<p>Can you implement increment and decrement count in closures in Angular?</p>",
                    "sectionId": 45,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 204,
                    "description": "<pre data-language=\"plain\">\nts file\n\nincrement!: () =&gt; void;\ndecrement!: () =&gt; void;\n\nconstructor() {}\n\nngOnInit() {\n  const counter = this.createCounterHandler();\n  this.increment = counter.increment;\n  this.decrement = counter.decrement;\n}\n\ncreateCounterHandler() {\n  let count = 0;\n\n  return {\n    increment: () =&gt; {\n      count++;\n      console.log(count);\n    },\n    decrement: () =&gt; {\n      count--;\n      console.log(count);\n    }\n  };\n}\n</pre></br></br><pre data-language=\"plain\">\nhtml file\n\n&lt;div&gt;\n  &lt;button (click)=&quot;increment()&quot;&gt;Increment&lt;/button&gt;\n  &lt;button (click)=&quot;decrement()&quot;&gt;Decrement&lt;/button&gt;\n&lt;/div&gt;\n</pre></br>"
                },
                {
                    "text": "<p>Can you implement increment and decrement count in closures in JavaScript?</p>",
                    "sectionId": 45,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 205,
                    "description": "<pre data-language=\"plain\">\nhtml\n\n&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n\n&lt;head&gt;\n  &lt;meta charset=&quot;UTF-8&quot;&gt;\n  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;\n  &lt;title&gt;Click Counter&lt;/title&gt;\n&lt;/head&gt;\n\n&lt;body&gt;\n  &lt;button id=&quot;incBtn&quot;&gt;Increment&lt;/button&gt;\n  &lt;button id=&quot;decBtn&quot;&gt;Decrement&lt;/button&gt;\n\n  &lt;script src=&quot;./index.js&quot;&gt;&lt;/script&gt;\n&lt;/body&gt;\n\n&lt;/html&gt;\n</pre></br><pre data-language=\"plain\">\nJavaScript\n\nfunction setupClickTracker(incrementBtnId, decrementBtnId) {\n  let clickCount = 0;\n\n  document.getElementById(incrementBtnId).addEventListener(&quot;click&quot;, function () {\n    clickCount++;\n    console.log(&quot;Count:&quot;, clickCount);\n  });\n\n  document.getElementById(decrementBtnId).addEventListener(&quot;click&quot;, function () {\n    clickCount--;\n    console.log(&quot;Count:&quot;, clickCount);\n  });\n}\n\nsetupClickTracker(&quot;incBtn&quot;, &quot;decBtn&quot;);\n</pre></br></br>"
                },
                {
                    "text": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Explain the setTimeout in clouser.</span></p>",
                    "sectionId": 45,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 206,
                    "description": "<pre data-language=\"plain\">\nfunction x() {\n    for (var i = 1; i &lt;= 5; i++) {\n        setTimeout(function() {\n            console.log(i);\n        }, i * 1000);\n    }\n}\nx(); // O/P: 6 6 6 6 6\n</pre></br><p><strong>Explain: </strong><code>var</code> is function-scoped, so all iterations share the same <code>i</code>. By the time the <code>setTimeout</code> callbacks execute, the loop has finished, and <code>i</code> is 6. That’s why the output is <code>6 6 6 6 6</code>.</p></br><pre data-language=\"plain\">\nfunction x() {\n    for (let i = 1; i &lt;= 5; i++) {\n        setTimeout(function() {\n            console.log(i);\n        }, i * 1000);\n    }\n}\nx(); // O/P: 1 2 3 4 5\n</pre></br><p><strong>Explain:</strong> When we use <code>let</code>, each iteration has its own <strong>block-scoped </strong><code><strong>i</strong></code>. So, when the <code>setTimeout</code> callbacks run, they print the correct values (1–5).</p></br><pre data-language=\"plain\">\nfunction x() {\n    for (var i = 1; i &lt;= 5; i++) {\n        function close(x) {\n            setTimeout(function() {\n                console.log(x);\n            }, x * 1000);\n        }\n        close(i);\n    }\n}\nx();\n</pre></br><p><strong>Explain:</strong> For each iteration, when the <code>close</code> function is called, it creates a new local execution context. By the time the <code>setTimeout</code> callbacks execute, each one has its own separate copy of <code>i</code> (passed as <code>x</code>). Therefore, the result will be <code>1 2 3 4 5</code>.</p>"
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
                    "description": "<p>In JavaScript, <strong>hoisting</strong> is a phenomenon in which variables and function declarations are moved to the top of their scope during the compilation phase.</p>"
                },
                {
                    "text": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">What is the Temporal Dead Zone?</span></p>",
                    "sectionId": 46,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 207,
                    "description": "<p>The <strong>Temporal Dead Zone (TDZ)</strong> is the period between when a <code><strong>let</strong></code> or <code><strong>const</strong></code> variable is <strong>hoisted</strong> (memory allocated) and when it is <strong>initialized</strong> at its <strong>declaration line</strong>.</p><p> During this period, accessing the variable will throw a <strong>ReferenceError</strong>.</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Promise</strong></p>",
            "sectionId": 50,
            "noteType": "JavaScript",
            "topics": [
                {
                    "text": "<p>What are Promises in JavaScript?</p>",
                    "sectionId": 50,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 210,
                    "description": "<p>A <strong>Promise</strong> in <strong>JavaScript</strong> is an <strong>object</strong> that represents the eventual <strong>success</strong> or <strong>failure</strong> of an <strong>asynchronous operation</strong>. It has three <strong>states</strong>: <strong>Pending</strong>, <strong>Fulfilled</strong>, and <strong>Rejected</strong>.</p></br><p><strong>Promises</strong> provide a structured way to write <strong>asynchronous code</strong> using <code><strong>.then()</strong></code> for <strong>success</strong> and <code><strong>.catch()</strong></code> for <strong>error handling</strong>.</p></br><p><strong>Pending</strong> state is the <strong>initial state</strong>. The <strong>operation</strong> is still ongoing, and the <strong>result</strong> is not yet available.</p><p> In the <strong>Fulfilled</strong> state, the <strong>asynchronous operation</strong> completes <strong>successfully</strong> and returns a <strong>result</strong> (via <code><strong>.then()</strong></code>).</p><p> In the <strong>Rejected</strong> state, the <strong>asynchronous operation</strong> <strong>fails</strong> and returns an <strong>error</strong> (via <code><strong>.catch()</strong></code>).</p>"
                },
                {
                    "text": "<p>Can you explain the Promise chain?</p>",
                    "sectionId": 50,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 211,
                    "description": "<p><strong>Promise chaining</strong> is a <strong>technique</strong> where we attach multiple <code><strong>.then()</strong></code> calls to a <strong>Promise</strong> so that <strong>asynchronous operations</strong> are executed in <strong>sequence</strong>, one after the other. Each <code><strong>.then()</strong></code> can return a <strong>value</strong> or another <strong>Promise</strong>.</p></br><p><strong>Example 1:</strong></p></br><pre data-language=\"plain\">\nconst fetchNumber = () =&gt; {\n  return new Promise((resolve, reject) =&gt; {\n    setTimeout(() =&gt; resolve(5), 1000);\n  });\n};\n\nfetchNumber()\n  .then(num =&gt; {\n    console.log(&quot;First then:&quot;, num); // 5\n    return num * 2;\n  })\n  .then(num =&gt; {\n    console.log(&quot;Second then:&quot;, num); // 10\n    return num + 3;\n  })\n  .then(num =&gt; {\n    console.log(&quot;Third then:&quot;, num); // 13\n  })\n  .catch(err =&gt; {\n    console.error(&quot;Error:&quot;, err);\n  });\n</pre></br><p><strong>Example 2:</strong></p></br><pre data-language=\"plain\">\nconst fetchData = (id) =&gt; {\n    return new Promise((resolve) =&gt; {\n        setTimeout(() =&gt; resolve({id: id, user: &#39;User &#39; + id}));\n    });\n};\n\nfetchData(1).then(user =&gt; {\n   console.log(&quot;User fetched:&quot;, user); // User fetched: { id: 1, user: &#39;User 1&#39; }\n   return fetchData(user.id + 1);\n})\n.then(user =&gt; {\n    console.log(&quot;Next user fetched:&quot;, user); // Next user fetched: { id: 2, user: &#39;User 2&#39; }\n});\n</pre></br>"
                },
                {
                    "text": "<p>Can you explain Promise APIs | all, allSettled, race, any</p>",
                    "sectionId": 50,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 212,
                    "description": "<p><strong>Parallel Promises</strong>: There are following <strong>methods</strong> to run <strong>Promises</strong> in <strong>parallel</strong>:</p><ul><li><strong>Promise.all()</strong>: Waits for <strong>all promises</strong> to <strong>fulfill</strong> or <strong>reject immediately</strong> on any <strong>failure</strong>.</li><li><strong>Promise.allSettled()</strong>: Waits for <strong>all promises</strong>, regardless of <strong>success/failure</strong>.</li><li><strong>Promise.race()</strong>: <strong>Resolves/rejects</strong> as soon as the <strong>first promise</strong> settles.</li><li><strong>Promise.any()</strong>: <strong>Resolves</strong> when <strong>any one promise</strong> fulfills; <strong>rejects</strong> only if <strong>all fail</strong>.</li></ul></br>"
                },
                {
                    "text": "<p>How do Promises differ from callbacks?</p>",
                    "sectionId": 50,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 213,
                    "description": "<p><strong>Callbacks</strong> are <strong>functions</strong> passed as <strong>arguments</strong> to handle <strong>asynchronous operations</strong>, but can lead to <strong>&quot;callback hell&quot;</strong>.</p></br><p>A <strong>Promise</strong> in <strong>JavaScript</strong> is an <strong>object</strong> that represents the eventual <strong>success</strong> or <strong>failure</strong> of an <strong>asynchronous operation</strong>. <strong>Promises</strong> provide <code><strong>.then()</strong></code> for <strong>success</strong> and <code><strong>.catch()</strong></code> for <strong>error handling</strong>.</p></br><p><strong>Promises</strong> provide <strong>better error handling</strong> and avoid <strong>deeply nested callbacks</strong>.</p>"
                },
                {
                    "text": "<p>Can you write a simple example of creating and using a Promise?</p>",
                    "sectionId": 50,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 214,
                    "description": "<pre data-language=\"plain\">\n// Creating a Promise that resolves after 2 seconds\n\nconst myPromise = new Promise((resolve, reject) =&gt; {\n  setTimeout(() =&gt; {\n    const success = true; // change to false to test rejection\n    if (success) {\n      resolve(&#39;Operation successful!&#39;);\n    } else {\n      reject(&#39;Operation failed!&#39;);\n    }\n  }, 2000);\n});\n\n// Using the Promise\n\nmyPromise\n  .then((message) =&gt; {\n    console.log(message);  // Runs if resolved\n  })\n  .catch((error) =&gt; {\n    console.error(error);  // Runs if rejected\n  });\n</pre>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Arrow function</strong></p>",
            "sectionId": 49,
            "noteType": "JavaScript",
            "topics": [
                {
                    "text": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">What are arrow functions in JavaScript?</span></p>",
                    "sectionId": 49,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 208,
                    "description": "<p><strong>Arrow functions</strong> in <strong>JavaScript</strong> are a <strong>concise syntax</strong> for writing <strong>functions</strong> introduced in <strong>ES6</strong>. They look like this:</p></br><pre data-language=\"plain\">\nconst add = (a, b) =&gt; a + b;\n</pre></br>"
                },
                {
                    "text": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">How do arrow function differ from regular functions?</span></p>",
                    "sectionId": 49,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 209,
                    "description": "<p><strong>Regular functions</strong> have a <code><strong>this</strong></code> value. It depends on <strong>how the function is called</strong>, whereas <strong>arrow functions</strong> do not have their own <code><strong>this</strong></code> value. They <strong>inherit </strong><code><strong>this</strong></code> from their surrounding (<strong>lexical scope</strong>).</p></br><pre data-language=\"plain\">\nconst obj = {\n  value: 10,\n  regularFunc: function() {\n    console.log(this.value); // &#39;this&#39; refers to obj\n  },\n  arrowFunc: () =&gt; {\n    console.log(this.value); // &#39;this&#39; refers to outer scope (e.g., window in browser)\n  }\n};\n\nobj.regularFunc(); // Output: 10\nobj.arrowFunc();   // Output: undefined\n</pre></br><p>We can use <code><strong>arguments</strong></code> in <strong>regular functions</strong>. It gives access to all <strong>passed arguments</strong>, whereas <strong>arrow functions</strong> do not have <code><strong>arguments</strong></code>. <strong>Rest parameters (</strong><code><strong>...args</strong></code><strong>)</strong> can be used instead.</p></br></br><p>A <strong>regular function</strong> can be used as a <strong>constructor</strong> with the <code><strong>new</strong></code> keyword that creates <strong>instances</strong>, whereas an <strong>arrow function</strong> cannot be used as a <strong>constructor</strong>.</p></br><pre data-language=\"plain\">\n// Correct: Regular function as constructor\nfunction Person(name) {\n  this.name = name;\n}\nconst p = new Person(&quot;Vivek&quot;);\nconsole.log(p.name); // &quot;Vivek&quot;\n</pre></br><pre data-language=\"plain\">\n// ❌ Incorrect: Arrow function cannot be used as constructor\nconst PersonArrow = (name) =&gt; {\n  this.name = name;\n};\nconst p2 = new PersonArrow(&quot;Vivek&quot;); // TypeError\n</pre>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>map(), forEach(), filter() and reduce()</strong></p>",
            "sectionId": 55,
            "noteType": "JavaScript",
            "topics": [
                {
                    "text": "<p>What is the <strong>difference</strong> between <strong>map()</strong>, <strong>forEach()</strong>, <strong>filter()</strong>, and <strong>reduce()</strong> in <strong>JavaScript</strong>? Can you give a <strong>small example</strong> for each?</p>",
                    "sectionId": 55,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 260,
                    "description": "<p>const numbers = [1, 2, 3];</p></br><p><strong>map():</strong> Transforms each element in an array and returns a new array of the same length. Does not mutate the original array.</p></br><pre data-language=\"plain\">\nconst doubled = numbers.map(num =&gt; num * 2);\nconsole.log(doubled); // [2, 4, 6]\n</pre></br><p><strong>forEach():</strong> Iterates over each element in an array to perform an operation. Always returns undefined. Does not mutate the original array (unless done manually).</p></br><pre data-language=\"plain\">\nnumbers.forEach(num =&gt; console.log(num * 2));\n// Output: 2, 4, 6 (just logs, no returned array)\n</pre></br><p><strong>filter():</strong> Returns a new array containing only the elements that satisfy the provided condition (true). Does not mutate the original array.</p></br><pre data-language=\"plain\">\nconst even = numbers.filter(num =&gt; num % 2 === 0);\nconsole.log(even); // [2]\n</pre></br><p><strong>reduce():</strong> Reduces the array to a single value (which can be a number, string, object, array, etc.) based on the accumulator logic. Does not mutate the original array.</p></br><pre data-language=\"plain\">\nconst sum = numbers.reduce((acc, num) =&gt; acc + num, 0);\nconsole.log(sum); // 6\n</pre>"
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
                },
                {
                    "text": "<p>What is a factorial, and how is it calculated?</p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 221,
                    "description": "<pre data-language=\"plain\">\nfunction factorial(n) {\n    if (n &lt; 0) return -1; // Factorial not defined for negative numbers\n    let result = 1;\n    for (let i = 2; i &lt;= n; i++) {\n        result *= i;\n    }\n    return result;\n}\n\nconsole.log(factorial(5)); // Output: 120\n</pre></br><pre data-language=\"plain\">\nfunction factorial(n) {\n    if (n &lt; 0) return -1;\n    if (n === 0 || n === 1) return 1;\n    return n * factorial(n - 1);\n}\n\nconsole.log(factorial(5)); // Output: 120\n</pre></br></br>"
                },
                {
                    "text": "<p>What is the difference between sorting strings and numbers in JavaScript?</p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 222,
                    "description": "<pre data-language=\"plain\">\nlet users = [\n  { name: &#39;Alice&#39;, age: 25 },\n  { name: &#39;Bob&#39;, age: 20 },\n  { name: &#39;Charlie&#39;, age: 30 }\n];\n</pre></br><p><strong>Sort by Age (Ascending)</strong></p><pre data-language=\"plain\">\nusers.sort((a, b) =&gt; a.age - b.age);\nconsole.log(users);\n/* Output:\n[\n  { name: &#39;Bob&#39;, age: 20 },\n  { name: &#39;Alice&#39;, age: 25 },\n  { name: &#39;Charlie&#39;, age: 30 }\n]\n*/\n</pre></br><p><strong>Sort by Name (Alphabetical)</strong></p><pre data-language=\"plain\">\nusers.sort((a, b) =&gt; a.name.localeCompare(b.name));\nconsole.log(users);\n/* Output:\n[\n  { name: &#39;Alice&#39;, age: 25 },\n  { name: &#39;Bob&#39;, age: 20 },\n  { name: &#39;Charlie&#39;, age: 30 }\n]\n*/\n</pre></br></br><p><strong>Tips:</strong></p><ol><li>Always use a comparison function for numbers or custom sorting.</li><li>localeCompare is useful for string sorting with international characters.</li><li>Sorting mutates the original array; to avoid that, use array.slice().sort().</li></ol>"
                },
                {
                    "text": "<p>Can you sort array using bubble sort?</p></br>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 223,
                    "description": "<p>Bubble Sort repeatedly compares adjacent elements and <strong>swaps them</strong> if they are in the wrong order.</p><ul><li>Time complexity: <strong>O(n²)</strong></li><li>Space complexity: <strong>O(1)</strong></li><li>Stable sort: <strong>Yes</strong></li></ul></br><pre data-language=\"plain\">\nfunction bubbleSort(arr) {\n    let n = arr.length;\n    for (let i = 0; i &lt; n - 1; i++) {\n        // Last i elements are already sorted\n        for (let j = 0; j &lt; n - i - 1; j++) {\n            if (arr[j] &gt; arr[j + 1]) {\n                // Swap arr[j] and arr[j+1]\n                let temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n    return arr;\n}\n\nlet numbers = [5, 2, 9, 1, 7];\nconsole.log(bubbleSort(numbers)); // Output: [1, 2, 5, 7, 9]\n</pre>"
                },
                {
                    "text": "<p>Can you sort array using quick sort?</p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 224,
                    "description": "<pre data-language=\"plain\">\nfunction quickSort(arr) {\n    if (arr.length &lt;= 1) return arr; // Base case\n\n    const pivot = arr[arr.length - 1]; // Choose last element as pivot\n    const left = [];\n    const right = [];\n\n    for (let i = 0; i &lt; arr.length - 1; i++) {\n        if (arr[i] &lt; pivot) {\n            left.push(arr[i]);\n        } else {\n            right.push(arr[i]);\n        }\n    }\n\n    // Recursively sort left and right, then combine\n    return [...quickSort(left), pivot, ...quickSort(right)];\n}\n\n// Example usage\nlet numbers = [5, 2, 9, 1, 7];\nconsole.log(quickSort(numbers)); // Output: [1, 2, 5, 7, 9]\n</pre></br>"
                },
                {
                    "text": "<p>Can you remove duplicate number from array?</p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 225,
                    "description": "<p><strong>Using Set (Simplest &amp; Modern Way):</strong></p><pre data-language=\"plain\">\nlet numbers = [1, 2, 2, 3, 4, 4, 5];\n\nlet uniqueNumbers = [...new Set(numbers)];\nconsole.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]\n</pre></br><p><strong>Using filter() and indexOf():</strong></p><pre data-language=\"plain\">\nlet numbers = [1, 2, 2, 3, 4, 4, 5];\n\nlet uniqueNumbers = numbers.filter((value, index, arr) =&gt; {\n    return arr.indexOf(value) === index;\n});\n\nconsole.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]\n</pre></br><p><strong>Using Object/Map (Good for large arrays):</strong></p><pre data-language=\"plain\">\nlet numbers = [1, 2, 2, 3, 4, 4, 5];\nlet seen = {};\nlet uniqueNumbers = [];\n\nfor (let num of numbers) {\n    if (!seen[num]) {\n        uniqueNumbers.push(num);\n        seen[num] = true;\n    }\n}\n\nconsole.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]\n</pre>"
                },
                {
                    "text": "<p>Find the <strong>largest/smallest number</strong> in an array.</p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 226,
                    "description": "<p><strong>Using Math.max and Math.min:</strong></p><pre data-language=\"plain\">\nlet numbers = [5, 2, 9, 1, 7];\n\nlet largest = Math.max(...numbers);\nlet smallest = Math.min(...numbers);\n\nconsole.log(&quot;Largest:&quot;, largest); // Output: 9\nconsole.log(&quot;Smallest:&quot;, smallest); // Output: 1\n</pre></br><p><strong>Using a Loop (Classic Approach)</strong></p><pre data-language=\"plain\">\nlet numbers = [5, 2, 9, 1, 7];\n\nlet largest = numbers[0];\nlet smallest = numbers[0];\n\nfor (let i = 1; i &lt; numbers.length; i++) {\n    if (numbers[i] &gt; largest) largest = numbers[i];\n    if (numbers[i] &lt; smallest) smallest = numbers[i];\n}\n\nconsole.log(&quot;Largest:&quot;, largest); // Output: 9\nconsole.log(&quot;Smallest:&quot;, smallest); // Output: 1\n</pre></br>"
                },
                {
                    "text": "<p>Find <strong>second largest/smallest element</strong>.</p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 227,
                    "description": "<pre data-language=\"plain\">\nlet numbers = [5, 2, 9, 1, 7];\n\nlet largest = -Infinity;\nlet secondLargest = -Infinity;\nlet smallest = Infinity;\nlet secondSmallest = Infinity;\n\nfor (let num of numbers) {\n    // For largest and second largest\n    if (num &gt; largest) {\n        secondLargest = largest;\n        largest = num;\n    } else if (num &gt; secondLargest &amp;&amp; num !== largest) {\n        secondLargest = num;\n    }\n\n    // For smallest and second smallest\n    if (num &lt; smallest) {\n        secondSmallest = smallest;\n        smallest = num;\n    } else if (num &lt; secondSmallest &amp;&amp; num !== smallest) {\n        secondSmallest = num;\n    }\n}\n\nconsole.log(&quot;Second Largest:&quot;, secondLargest);   // Output: 7\nconsole.log(&quot;Second Smallest:&quot;, secondSmallest); // Output: 2\n</pre></br>"
                },
                {
                    "text": "<p>Count the <strong>number of vowels/consonants</strong> in a string.</p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 228,
                    "description": "<pre data-language=\"plain\">\nlet str = &quot;Hello World&quot;;\n\nlet vowelsCount = 0;\nlet consonantsCount = 0;\n\n// Convert string to lowercase for easy comparison\nlet lowerStr = str.toLowerCase();\n\nfor (let char of lowerStr) {\n    if (char &gt;= &#39;a&#39; &amp;&amp; char &lt;= &#39;z&#39;) { // Consider only alphabets\n        if (&quot;aeiou&quot;.includes(char)) {\n            vowelsCount++;\n        } else {\n            consonantsCount++;\n        }\n    }\n}\n\nconsole.log(&quot;Vowels:&quot;, vowelsCount);       // Output: 3\nconsole.log(&quot;Consonants:&quot;, consonantsCount); // Output: 7\n</pre>"
                },
                {
                    "text": "<p>Check if a number is a <strong>perfect number</strong>.</p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 229,
                    "description": "<pre data-language=\"plain\">\nfunction isPerfectNumber(num) {\n    if (num &lt;= 1) return false; // 1 or negative numbers are not perfect\n\n    let sum = 0;\n    for (let i = 1; i &lt;= num / 2; i++) { // only check up to num/2\n        if (num % i === 0) {\n            sum += i;\n        }\n    }\n\n    return sum === num;\n}\n\n// Test\nconsole.log(isPerfectNumber(6));  // true\nconsole.log(isPerfectNumber(28)); // true\nconsole.log(isPerfectNumber(12)); // false\n</pre></br>"
                },
                {
                    "text": "<p>Implement <strong>flattening of nested arrays</strong>.</p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 230,
                    "description": "<p><strong>Using Array.prototype.flat() (Modern &amp; Simple):</strong></p><pre data-language=\"plain\">\nlet nestedArray = [1, [2, [3, 4], 5], 6];\n\n// Use flat() with Infinity to flatten all levels\nlet flattened = nestedArray.flat(Infinity);\n\nconsole.log(flattened); // Output: [1, 2, 3, 4, 5, 6]\n</pre></br><p><strong>Using Recursion (Classic Interview Approach):</strong></p><pre data-language=\"plain\">\nfunction flattenArray(arr) {\n    let result = [];\n    for (let item of arr) {\n        if (Array.isArray(item)) {\n            result = result.concat(flattenArray(item)); // Recursive call\n        } else {\n            result.push(item);\n        }\n    }\n    return result;\n}\n\nlet nestedArray = [1, [2, [3, 4], 5], 6];\nconsole.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]\n</pre></br>"
                },
                {
                    "text": "<p>Implement <strong>debounce</strong> and <strong>throttle</strong> functions.</p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 231,
                    "description": ""
                },
                {
                    "text": "<p>Write <strong>memoization</strong> function for optimization.</p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 232,
                    "description": ""
                },
                {
                    "text": "<p>Find <strong>integer </strong>vs <strong>Non-Integer</strong> Rational Numbers.</p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 233,
                    "description": "<pre data-language=\"plain\">\nlet arr = [1, 2.5, 3/2, -4, 0.75];\n\nlet integers = arr.filter(num =&gt; Number.isInteger(num));\nlet nonIntegers = arr.filter(num =&gt; !Number.isInteger(num));\n\nconsole.log(&quot;Integers:&quot;, integers);       // [1, -4]\nconsole.log(&quot;Non-Integers:&quot;, nonIntegers); // [2.5, 1.5, 0.75]\n</pre></br>"
                },
                {
                    "text": "<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">Can you </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">check</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\"> if a </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">property exists</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\"> in an </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">object</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">?</span></p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 258,
                    "description": ""
                },
                {
                    "text": "<p>Can you <strong>implement</strong> a <strong>deep copy</strong> manually?</p>",
                    "sectionId": 48,
                    "subSectionId": -1,
                    "noteType": "JavaScript",
                    "topicId": 259,
                    "description": ""
                }
            ],
            "subSections": []
        }
    ];
};