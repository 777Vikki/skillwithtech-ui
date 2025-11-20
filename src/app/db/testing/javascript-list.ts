export const javascriptList = () => {
    return [
        {
            "name": "<p><strong>Basic</strong></p>",
            "subjectId": 5,
            "sectionId": 46,
            "parentSectionId": 0,
            "contents": [
                {
                    "description": "<p>JavaScript (often abbreviated as <strong>JS</strong>) is a <strong>high-level, interpreted programming language</strong> that is widely used to make web pages interactive and dynamic.</p></br><p>It runs in the browser using engines like <strong>V8 (Chrome)</strong> or <strong>SpiderMonkey (Firefox)</strong>, and can also run on servers via <strong>Node.js</strong>. With JavaScript, developers can manipulate the <strong>DOM</strong>, handle <strong>events</strong>, perform <strong>asynchronous operations</strong> (AJAX, Fetch, Promises, async/await), and build <strong>full-stack applications</strong>.</p>",
                    "subjectId": 5,
                    "sectionId": 46,
                    "parentSectionId": 0,
                    "text": "<p>What is JavaScript?</p>",
                    "contentId": 155
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Call(), apply() and bind()</strong></p>",
            "subjectId": 5,
            "sectionId": 47,
            "parentSectionId": 0,
            "contents": [
                {
                    "description": "<p>In JavaScript, <strong>call</strong>, <strong>apply</strong>, and <strong>bind</strong> are methods that allow you to control the context (<strong>this</strong> value) in which a function is executed.</p></br><pre data-language=\"plain\">\nfunction greet(city, country) {\n    console.log(this.name + &#39; from &#39; + city + &#39;, &#39; + country);\n}\nconst person = {\n    name: &#39;Alice&#39;\n};\n\n</pre></br><p>The <strong>call()</strong> method invokes a function with a specified <strong>this</strong> value and arguments passed <strong>individually</strong>.</p></br><pre data-language=\"plain\">\ngreet.call(person, &#39;Delhi&#39;, &#39;India&#39;); // Alice from Delhi, India\n</pre></br><p>The <strong>apply()</strong> method invokes a function with a specified <strong>this</strong> value and arguments passed as an <strong>array</strong>.</p></br><pre data-language=\"plain\">\ngreet.apply(person, [&#39;Los Angeles&#39;, &#39;U.S.&#39;]); // Alice from Los Angeles, U.S.\n</pre></br><p>The <strong>bind()</strong> method creates a <strong>new function</strong> with a given <strong>this</strong> value and optional arguments, <strong>without immediately invoking</strong> it.</p></br><pre data-language=\"plain\">\nconst detail = greet.bind(person, &#39;Moscow&#39;);\ndetail(&#39;Russia&#39;); // Alice from Moscow, Russia\n</pre>",
                    "subjectId": 5,
                    "sectionId": 47,
                    "parentSectionId": 0,
                    "text": "<p>Explain the difference between <strong>call()</strong>, <strong>apply()</strong>, and <strong>bind()</strong> methods in <strong>JavaScript</strong>. When would you use each?</p>",
                    "contentId": 156
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Closure</strong></p>",
            "subjectId": 5,
            "sectionId": 48,
            "parentSectionId": 0,
            "contents": [
                {
                    "description": "<p><strong>Closures</strong> in <strong>JavaScript</strong> are a <strong>powerful feature</strong> that allows <strong>inner functions</strong> to access the <strong>scope</strong> of their <strong>outer (enclosing) functions</strong>, even after the <strong>outer function</strong> has <strong>finished executing</strong>.</p></br><p><strong>Main uses of closures in JavaScript:</strong></p><ul><li>Data Privacy / Encapsulation</li><li>Maintaining State</li><li>Callbacks &amp; Event Handlers</li><li>Function Factories</li><li>Module Pattern</li></ul>",
                    "subjectId": 5,
                    "sectionId": 48,
                    "parentSectionId": 0,
                    "text": "<p>What is closures in JavaScript?</p>",
                    "contentId": 157
                },
                {
                    "description": "<pre data-language=\"plain\">\nts file\n\nincrement!: () =&gt; void;\ndecrement!: () =&gt; void;\n\nconstructor() {}\n\nngOnInit() {\n  const counter = this.createCounterHandler();\n  this.increment = counter.increment;\n  this.decrement = counter.decrement;\n}\n\ncreateCounterHandler() {\n  let count = 0;\n\n  return {\n    increment: () =&gt; {\n      count++;\n      console.log(count);\n    },\n    decrement: () =&gt; {\n      count--;\n      console.log(count);\n    }\n  };\n}\n</pre></br></br><pre data-language=\"plain\">\nhtml file\n\n&lt;div&gt;\n  &lt;button (click)=&quot;increment()&quot;&gt;Increment&lt;/button&gt;\n  &lt;button (click)=&quot;decrement()&quot;&gt;Decrement&lt;/button&gt;\n&lt;/div&gt;\n</pre></br>",
                    "subjectId": 5,
                    "sectionId": 48,
                    "parentSectionId": 0,
                    "text": "<p>Can you implement increment and decrement count in closures in Angular?</p>",
                    "contentId": 158
                },
                {
                    "description": "<pre data-language=\"plain\">\nhtml\n\n&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n\n&lt;head&gt;\n  &lt;meta charset=&quot;UTF-8&quot;&gt;\n  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;\n  &lt;title&gt;Click Counter&lt;/title&gt;\n&lt;/head&gt;\n\n&lt;body&gt;\n  &lt;button id=&quot;incBtn&quot;&gt;Increment&lt;/button&gt;\n  &lt;button id=&quot;decBtn&quot;&gt;Decrement&lt;/button&gt;\n\n  &lt;script src=&quot;./index.js&quot;&gt;&lt;/script&gt;\n&lt;/body&gt;\n\n&lt;/html&gt;\n</pre></br><pre data-language=\"plain\">\nJavaScript\n\nfunction setupClickTracker(incrementBtnId, decrementBtnId) {\n  let clickCount = 0;\n\n  document.getElementById(incrementBtnId).addEventListener(&quot;click&quot;, function () {\n    clickCount++;\n    console.log(&quot;Count:&quot;, clickCount);\n  });\n\n  document.getElementById(decrementBtnId).addEventListener(&quot;click&quot;, function () {\n    clickCount--;\n    console.log(&quot;Count:&quot;, clickCount);\n  });\n}\n\nsetupClickTracker(&quot;incBtn&quot;, &quot;decBtn&quot;);\n</pre></br></br>",
                    "subjectId": 5,
                    "sectionId": 48,
                    "parentSectionId": 0,
                    "text": "<p>Can you implement increment and decrement count in closures in JavaScript?</p>",
                    "contentId": 159
                },
                {
                    "description": "<pre data-language=\"plain\">\nfunction x() {\n    for (var i = 1; i &lt;= 5; i++) {\n        setTimeout(function() {\n            console.log(i);\n        }, i * 1000);\n    }\n}\nx(); // O/P: 6 6 6 6 6\n</pre></br><p><strong>Explain: </strong><code>var</code> is function-scoped, so all iterations share the same <code>i</code>. By the time the <code>setTimeout</code> callbacks execute, the loop has finished, and <code>i</code> is 6. That’s why the output is <code>6 6 6 6 6</code>.</p></br><pre data-language=\"plain\">\nfunction x() {\n    for (let i = 1; i &lt;= 5; i++) {\n        setTimeout(function() {\n            console.log(i);\n        }, i * 1000);\n    }\n}\nx(); // O/P: 1 2 3 4 5\n</pre></br><p><strong>Explain:</strong> When we use <code>let</code>, each iteration has its own <strong>block-scoped </strong><code><strong>i</strong></code>. So, when the <code>setTimeout</code> callbacks run, they print the correct values (1–5).</p></br><pre data-language=\"plain\">\nfunction x() {\n    for (var i = 1; i &lt;= 5; i++) {\n        function close(x) {\n            setTimeout(function() {\n                console.log(x);\n            }, x * 1000);\n        }\n        close(i);\n    }\n}\nx();\n</pre></br><p><strong>Explain:</strong> For each iteration, when the <code>close</code> function is called, it creates a new local execution context. By the time the <code>setTimeout</code> callbacks execute, each one has its own separate copy of <code>i</code> (passed as <code>x</code>). Therefore, the result will be <code>1 2 3 4 5</code>.</p>",
                    "subjectId": 5,
                    "sectionId": 48,
                    "parentSectionId": 0,
                    "text": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Explain the setTimeout in clouser.</span></p>",
                    "contentId": 160
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Hoisting</strong></p>",
            "subjectId": 5,
            "sectionId": 49,
            "parentSectionId": 0,
            "contents": [
                {
                    "description": "<p>In JavaScript, <strong>hoisting</strong> is a phenomenon in which variables and function declarations are moved to the top of their scope during the compilation phase.</p>",
                    "subjectId": 5,
                    "sectionId": 49,
                    "parentSectionId": 0,
                    "text": "<p>What is Hoisting in JavaScript?</p>",
                    "contentId": 161
                },
                {
                    "description": "<p>The <strong>Temporal Dead Zone (TDZ)</strong> is the period between when a <code><strong>let</strong></code> or <code><strong>const</strong></code> variable is <strong>hoisted</strong> (memory allocated) and when it is <strong>initialized</strong> at its <strong>declaration line</strong>.</p><p> During this period, accessing the variable will throw a <strong>ReferenceError</strong>.</p>",
                    "subjectId": 5,
                    "sectionId": 49,
                    "parentSectionId": 0,
                    "text": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">What is the Temporal Dead Zone?</span></p>",
                    "contentId": 162
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Promise</strong></p>",
            "subjectId": 5,
            "sectionId": 50,
            "parentSectionId": 0,
            "contents": [
                {
                    "description": "<p>A <strong>Promise</strong> in <strong>JavaScript</strong> is an <strong>object</strong> that represents the eventual <strong>success</strong> or <strong>failure</strong> of an <strong>asynchronous operation</strong>. It has three <strong>states</strong>: <strong>Pending</strong>, <strong>Fulfilled</strong>, and <strong>Rejected</strong>.</p></br><p><strong>Promises</strong> provide a structured way to write <strong>asynchronous code</strong> using <code><strong>.then()</strong></code> for <strong>success</strong> and <code><strong>.catch()</strong></code> for <strong>error handling</strong>.</p></br><p><strong>Pending</strong> state is the <strong>initial state</strong>. The <strong>operation</strong> is still ongoing, and the <strong>result</strong> is not yet available.</p><p> In the <strong>Fulfilled</strong> state, the <strong>asynchronous operation</strong> completes <strong>successfully</strong> and returns a <strong>result</strong> (via <code><strong>.then()</strong></code>).</p><p> In the <strong>Rejected</strong> state, the <strong>asynchronous operation</strong> <strong>fails</strong> and returns an <strong>error</strong> (via <code><strong>.catch()</strong></code>).</p>",
                    "subjectId": 5,
                    "sectionId": 50,
                    "parentSectionId": 0,
                    "text": "<p>What are Promises in JavaScript?</p>",
                    "contentId": 163
                },
                {
                    "description": "<p><strong>Promise chaining</strong> is a <strong>technique</strong> where we attach multiple <code><strong>.then()</strong></code> calls to a <strong>Promise</strong> so that <strong>asynchronous operations</strong> are executed in <strong>sequence</strong>, one after the other. Each <code><strong>.then()</strong></code> can return a <strong>value</strong> or another <strong>Promise</strong>.</p></br><p><strong>Example 1:</strong></p></br><pre data-language=\"plain\">\nconst fetchNumber = () =&gt; {\n  return new Promise((resolve, reject) =&gt; {\n    setTimeout(() =&gt; resolve(5), 1000);\n  });\n};\n\nfetchNumber()\n  .then(num =&gt; {\n    console.log(&quot;First then:&quot;, num); // 5\n    return num * 2;\n  })\n  .then(num =&gt; {\n    console.log(&quot;Second then:&quot;, num); // 10\n    return num + 3;\n  })\n  .then(num =&gt; {\n    console.log(&quot;Third then:&quot;, num); // 13\n  })\n  .catch(err =&gt; {\n    console.error(&quot;Error:&quot;, err);\n  });\n</pre></br><p><strong>Example 2:</strong></p></br><pre data-language=\"plain\">\nconst fetchData = (id) =&gt; {\n    return new Promise((resolve) =&gt; {\n        setTimeout(() =&gt; resolve({id: id, user: &#39;User &#39; + id}));\n    });\n};\n\nfetchData(1).then(user =&gt; {\n   console.log(&quot;User fetched:&quot;, user); // User fetched: { id: 1, user: &#39;User 1&#39; }\n   return fetchData(user.id + 1);\n})\n.then(user =&gt; {\n    console.log(&quot;Next user fetched:&quot;, user); // Next user fetched: { id: 2, user: &#39;User 2&#39; }\n});\n</pre></br>",
                    "subjectId": 5,
                    "sectionId": 50,
                    "parentSectionId": 0,
                    "text": "<p>Can you explain the Promise chain?</p>",
                    "contentId": 164
                },
                {
                    "description": "<p><strong>Parallel Promises</strong>: There are following <strong>methods</strong> to run <strong>Promises</strong> in <strong>parallel</strong>:</p><ul><li><strong>Promise.all()</strong>: Waits for <strong>all promises</strong> to <strong>fulfill</strong> or <strong>reject immediately</strong> on any <strong>failure</strong>.</li><li><strong>Promise.allSettled()</strong>: Waits for <strong>all promises</strong>, regardless of <strong>success/failure</strong>.</li><li><strong>Promise.race()</strong>: <strong>Resolves/rejects</strong> as soon as the <strong>first promise</strong> settles.</li><li><strong>Promise.any()</strong>: <strong>Resolves</strong> when <strong>any one promise</strong> fulfills; <strong>rejects</strong> only if <strong>all fail</strong>.</li></ul></br>",
                    "subjectId": 5,
                    "sectionId": 50,
                    "parentSectionId": 0,
                    "text": "<p>Can you explain Promise APIs | all, allSettled, race, any</p>",
                    "contentId": 165
                },
                {
                    "description": "<p><strong>Callbacks</strong> are <strong>functions</strong> passed as <strong>arguments</strong> to handle <strong>asynchronous operations</strong>, but can lead to <strong>&quot;callback hell&quot;</strong>.</p></br><p>A <strong>Promise</strong> in <strong>JavaScript</strong> is an <strong>object</strong> that represents the eventual <strong>success</strong> or <strong>failure</strong> of an <strong>asynchronous operation</strong>. <strong>Promises</strong> provide <code><strong>.then()</strong></code> for <strong>success</strong> and <code><strong>.catch()</strong></code> for <strong>error handling</strong>.</p></br><p><strong>Promises</strong> provide <strong>better error handling</strong> and avoid <strong>deeply nested callbacks</strong>.</p>",
                    "subjectId": 5,
                    "sectionId": 50,
                    "parentSectionId": 0,
                    "text": "<p>How do Promises differ from callbacks?</p>",
                    "contentId": 166
                },
                {
                    "description": "<pre data-language=\"plain\">\n// Creating a Promise that resolves after 2 seconds\n\nconst myPromise = new Promise((resolve, reject) =&gt; {\n  setTimeout(() =&gt; {\n    const success = true; // change to false to test rejection\n    if (success) {\n      resolve(&#39;Operation successful!&#39;);\n    } else {\n      reject(&#39;Operation failed!&#39;);\n    }\n  }, 2000);\n});\n\n// Using the Promise\n\nmyPromise\n  .then((message) =&gt; {\n    console.log(message);  // Runs if resolved\n  })\n  .catch((error) =&gt; {\n    console.error(error);  // Runs if rejected\n  });\n</pre>",
                    "subjectId": 5,
                    "sectionId": 50,
                    "parentSectionId": 0,
                    "text": "<p>Can you write a simple example of creating and using a Promise?</p>",
                    "contentId": 167
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Arrow function</strong></p>",
            "subjectId": 5,
            "sectionId": 51,
            "parentSectionId": 0,
            "contents": [
                {
                    "description": "<p><strong>Arrow functions</strong> in <strong>JavaScript</strong> are a <strong>concise syntax</strong> for writing <strong>functions</strong> introduced in <strong>ES6</strong>. They look like this:</p></br><pre data-language=\"plain\">\nconst add = (a, b) =&gt; a + b;\n</pre></br>",
                    "subjectId": 5,
                    "sectionId": 51,
                    "parentSectionId": 0,
                    "text": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">What are arrow functions in JavaScript?</span></p>",
                    "contentId": 168
                },
                {
                    "description": "<p><strong>Regular functions</strong> have a <code><strong>this</strong></code> value. It depends on <strong>how the function is called</strong>, whereas <strong>arrow functions</strong> do not have their own <code><strong>this</strong></code> value. They <strong>inherit </strong><code><strong>this</strong></code> from their surrounding (<strong>lexical scope</strong>).</p></br><pre data-language=\"plain\">\nconst obj = {\n  value: 10,\n  regularFunc: function() {\n    console.log(this.value); // &#39;this&#39; refers to obj\n  },\n  arrowFunc: () =&gt; {\n    console.log(this.value); // &#39;this&#39; refers to outer scope (e.g., window in browser)\n  }\n};\n\nobj.regularFunc(); // Output: 10\nobj.arrowFunc();   // Output: undefined\n</pre></br><p>We can use <code><strong>arguments</strong></code> in <strong>regular functions</strong>. It gives access to all <strong>passed arguments</strong>, whereas <strong>arrow functions</strong> do not have <code><strong>arguments</strong></code>. <strong>Rest parameters (</strong><code><strong>...args</strong></code><strong>)</strong> can be used instead.</p></br></br><p>A <strong>regular function</strong> can be used as a <strong>constructor</strong> with the <code><strong>new</strong></code> keyword that creates <strong>instances</strong>, whereas an <strong>arrow function</strong> cannot be used as a <strong>constructor</strong>.</p></br><pre data-language=\"plain\">\n// Correct: Regular function as constructor\nfunction Person(name) {\n  this.name = name;\n}\nconst p = new Person(&quot;Vivek&quot;);\nconsole.log(p.name); // &quot;Vivek&quot;\n</pre></br><pre data-language=\"plain\">\n// ❌ Incorrect: Arrow function cannot be used as constructor\nconst PersonArrow = (name) =&gt; {\n  this.name = name;\n};\nconst p2 = new PersonArrow(&quot;Vivek&quot;); // TypeError\n</pre>",
                    "subjectId": 5,
                    "sectionId": 51,
                    "parentSectionId": 0,
                    "text": "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">How do arrow function differ from regular functions?</span></p>",
                    "contentId": 169
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>map(), forEach(), filter() and reduce()</strong></p>",
            "subjectId": 5,
            "sectionId": 52,
            "parentSectionId": 0,
            "contents": [
                {
                    "description": "<p>const numbers = [1, 2, 3];</p></br><p><strong>map():</strong> Transforms each element in an array and returns a new array of the same length. Does not mutate the original array.</p></br><pre data-language=\"plain\">\nconst doubled = numbers.map(num =&gt; num * 2);\nconsole.log(doubled); // [2, 4, 6]\n</pre></br><p><strong>forEach():</strong> Iterates over each element in an array to perform an operation. Always returns undefined. Does not mutate the original array (unless done manually).</p></br><pre data-language=\"plain\">\nnumbers.forEach(num =&gt; console.log(num * 2));\n// Output: 2, 4, 6 (just logs, no returned array)\n</pre></br><p><strong>filter():</strong> Returns a new array containing only the elements that satisfy the provided condition (true). Does not mutate the original array.</p></br><pre data-language=\"plain\">\nconst even = numbers.filter(num =&gt; num % 2 === 0);\nconsole.log(even); // [2]\n</pre></br><p><strong>reduce():</strong> Reduces the array to a single value (which can be a number, string, object, array, etc.) based on the accumulator logic. Does not mutate the original array.</p></br><pre data-language=\"plain\">\nconst sum = numbers.reduce((acc, num) =&gt; acc + num, 0);\nconsole.log(sum); // 6\n</pre>",
                    "subjectId": 5,
                    "sectionId": 52,
                    "parentSectionId": 0,
                    "text": "<p>What is the <strong>difference</strong> between <strong>map()</strong>, <strong>forEach()</strong>, <strong>filter()</strong>, and <strong>reduce()</strong> in <strong>JavaScript</strong>? Can you give a <strong>small example</strong> for each?</p>",
                    "contentId": 170
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Currying</strong></p>",
            "subjectId": 5,
            "sectionId": 53,
            "parentSectionId": 0,
            "contents": [
                {
                    "description": "<p><strong>Currying</strong> in <strong>JavaScript</strong> is the process of <strong>transforming a function</strong> with <strong>multiple arguments</strong> into a <strong>sequence of functions</strong>, each taking <strong>one argument at a time</strong>.</p></br><pre data-language=\"plain\">\n// Currying using Closure\nfunction multiply(a) {\n  return function(b) {\n    return a * b;\n  };\n}\n// Usage\nconst multiplyByTwo = multiply(2);\nconsole.log(multiplyByTwo(5)); // Output: 10\nconst multiplyByFive = multiply(5);\nconsole.log(multiplyByFive(5)); // Output: 25\n</pre></br><pre data-language=\"plain\">\n// Currying using Bind method\nfunction multiply(a, b) {\n    return a * b;\n}\n// Usage\nconst multiplyByTwo = multiply.bind(this, 2);\nconsole.log(multiplyByTwo(5)); // Output: 10\nconst multiplyByFive = multiply.bind(null, 5);\nconsole.log(multiplyByFive(5)); // Output: 25\n// the bind method: The first argument is always the ‘this’ context for the function being bound.\n// Since this is not used in the function, we can pass null as the ‘this’ context.\n</pre></br>",
                    "subjectId": 5,
                    "sectionId": 53,
                    "parentSectionId": 0,
                    "text": "<p>What is <strong>currying </strong>in JavaScript?</p>",
                    "contentId": 171
                },
                {
                    "description": "<pre data-language=\"plain\">\nlet sum = function(a) {\n    return function (b) {\n        if(b) {\n            return sum(a+b);\n        } else {\n            return a;\n        }\n    };\n};\nconsole.log(sum(1)(2)(3)(4)(5)()); // 15\nconsole.log(5); // 5\nconsole.log(sum(2)(4)(5)(8)()); // 19\n</pre></br><pre data-language=\"plain\">\nlet sum = a =&gt; b =&gt; b? sum(a+b) : a;\nconsole.log(sum(1)(2)(3)(4)(5)()); // 15\nconsole.log(5); // 5\nconsole.log(sum(2)(4)(5)(8)()); // 19\n</pre>",
                    "subjectId": 5,
                    "sectionId": 53,
                    "parentSectionId": 0,
                    "text": "<p>sum(1)(2)(3)(4)..( n)()</p>",
                    "contentId": 172
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Built-in Methods</strong></p>",
            "subjectId": 5,
            "sectionId": 54,
            "parentSectionId": 0,
            "contents": [
                {
                    "description": "<p><strong>Math</strong> is a <strong>built-in object</strong> in JavaScript</p><p>that is used to <strong>perform mathematical operations</strong>, such as:</p></br><table style=\"border: 1px solid #000;\"><tbody><tr><td data-row=\"2\"><code>Math.floor()</code></td><td data-row=\"2\">Round <strong>down</strong></td><td data-row=\"2\"><code>Math.floor(4.9)</code> → <code>4</code></td></tr><tr><td data-row=\"3\"><code>Math.ceil()</code></td><td data-row=\"3\">Round <strong>up</strong></td><td data-row=\"3\"><code>Math.ceil(4.1)</code> → <code>5</code></td></tr><tr><td data-row=\"4\"><code>Math.round()</code></td><td data-row=\"4\">Round to <strong>nearest integer</strong></td><td data-row=\"4\"><code>Math.round(4.5)</code> → <code>5</code></td></tr><tr><td data-row=\"5\"><code>Math.trunc()</code></td><td data-row=\"5\">Remove decimal part</td><td data-row=\"5\"><code>Math.trunc(4.9)</code> → <code>4</code></td></tr><tr><td data-row=\"6\"><code>Math.random()</code></td><td data-row=\"6\">Generate random number (0–1)</td><td data-row=\"6\"><code>Math.random()</code> → <code>0.54</code></td></tr><tr><td data-row=\"7\"><code>Math.max()</code></td><td data-row=\"7\">Find maximum value</td><td data-row=\"7\"><code>Math.max(5,10,2)</code> → <code>10</code></td></tr><tr><td data-row=\"8\"><code>Math.min()</code></td><td data-row=\"8\">Find minimum value</td><td data-row=\"8\"><code>Math.min(5,10,2)</code> → <code>2</code></td></tr><tr><td data-row=\"9\"><code>Math.sqrt()</code></td><td data-row=\"9\">Square root</td><td data-row=\"9\"><code>Math.sqrt(9)</code> → <code>3</code></td></tr><tr><td data-row=\"10\"><code>Math.pow()</code></td><td data-row=\"10\">Power</td><td data-row=\"10\"><code>Math.pow(2,3)</code> → <code>8</code></td></tr></tbody></table>",
                    "subjectId": 5,
                    "sectionId": 54,
                    "parentSectionId": 0,
                    "text": "<p>What is Math?</p>",
                    "contentId": 173
                },
                {
                    "description": "<table style=\"border: 1px solid #000;\"><tbody><tr><td data-row=\"1\">Method Returns / Does Includes inherited?</td></tr><tr><td data-row=\"2\"> <code>Object.keys()</code></td><td data-row=\"2\">Array of keys</td><td data-row=\"2\">❌</td></tr><tr><td data-row=\"3\"><code>Object.values()</code></td><td data-row=\"3\">Array of values</td><td data-row=\"3\">❌</td></tr><tr><td data-row=\"4\"><code>Object.entries()</code></td><td data-row=\"4\">Array of [key, value]</td><td data-row=\"4\">❌</td></tr><tr><td data-row=\"5\"><code>Object.assign()</code></td><td data-row=\"5\">Copies props to target</td><td data-row=\"5\">❌</td></tr><tr><td data-row=\"6\"><code>Object.create()</code></td><td data-row=\"6\">Creates new object with prototype</td><td data-row=\"6\">—</td></tr><tr><td data-row=\"7\"><code>Object.freeze()</code></td><td data-row=\"7\">Makes object immutable</td><td data-row=\"7\">—</td></tr><tr><td data-row=\"8\"><code>Object.seal()</code></td><td data-row=\"8\">Prevents add/remove, allows modify</td><td data-row=\"8\">—</td></tr><tr><td data-row=\"9\"><code>Object.hasOwn()</code></td><td data-row=\"9\">Checks own property</td><td data-row=\"9\">❌</td></tr><tr><td data-row=\"10\"><code>Object.getOwnPropertyNames()</code></td><td data-row=\"10\">All own (even non-enumerable)</td><td data-row=\"10\">❌</td></tr><tr><td data-row=\"11\"><code>Object.getPrototypeOf()</code></td><td data-row=\"11\">Gets prototype</td><td data-row=\"11\">—</td></tr><tr><td data-row=\"12\"><code>Object.fromEntries()</code></td><td data-row=\"12\">Converts [key, value] array → object</td><td data-row=\"12\">—</td></tr></tbody></table></br>",
                    "subjectId": 5,
                    "sectionId": 54,
                    "parentSectionId": 0,
                    "text": "<p>What is Object built-in method?</p>",
                    "contentId": 174
                },
                {
                    "description": "<pre data-language=\"plain\">\n&lt;input type=&quot;text&quot; (input)=&quot;onInputChangeNumber($event)&quot;/&gt;\n\n// Only Numeric Validation\nonInputChangeNumber(event: any) {\n     const initial = event.target.value;\n     event.target.value = initial.replace(/[^0-9]/g, &#39;&#39;);\n}\n\n// Only Letters Validation\nevent.target.value = initial.replace(/[^a-zA-Z]/g, &#39;&#39;);\n\n// Allow Letters + Space\nevent.target.value = initial.replace(/[^a-zA-Z ]/g, &#39;&#39;);\n\n// Allow Letters + Space + Dot\nevent.target.value = initial.replace(/[^a-zA-Z .]/g, &#39;&#39;);\n\n// Allow Letters + Number\nevent.target.value = initial.replace(/[^a-zA-Z 0-9]/g, &#39;&#39;);\n</pre></br>",
                    "subjectId": 5,
                    "sectionId": 54,
                    "parentSectionId": 0,
                    "text": "<p>event + Regex</p>",
                    "contentId": 175
                },
                {
                    "description": "<pre data-language=\"true\">\n// Only Numeric Validation:\nValidators.pattern(/^[0-9]+$/)\n\n// Only Character Validation:\nValidators.pattern(/^[a-zA-Z]*$/)\n\n// Character + Space + dot Validation:\nValidators.pattern(/^[a-zA-Z .]*$/)\n</pre>",
                    "subjectId": 5,
                    "sectionId": 54,
                    "parentSectionId": 0,
                    "text": "<p>Validators + Regex</p>",
                    "contentId": 176
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Coding: Find Result and Explain</strong></p>",
            "subjectId": 5,
            "sectionId": 55,
            "parentSectionId": 0,
            "contents": [],
            "subSections": [
                {
                    "name": "<p><strong>Find Result and explain it.</strong></p>",
                    "subjectId": 5,
                    "sectionId": 56,
                    "parentSectionId": 55,
                    "contents": [
                        {
                            "description": "<p><code>console.log(&quot;start&quot;)</code> runs immediately because it’s synchronous.</p><p> <code>setTimeout</code> is asynchronous, so its callback is scheduled in the <strong>macro task queue</strong>.</p><p> The <code>Promise</code> constructor executes right away, but its <code>.then()</code> callback is placed in the <strong>micro task queue</strong>.</p><p> Finally, <code>console.log(&quot;End&quot;)</code> runs synchronously.</p><p>The <strong>event loop</strong> ensures that once the call stack is empty, tasks from the <strong>micro task queue</strong> are processed before tasks from the <strong>macro task queue</strong>.</p><p> That’s why promise callbacks run <strong>before</strong> <code>setTimeout</code> callbacks.</p></br><p>👉 In short:</p><p> <strong>Order of execution</strong> → synchronous code → microtasks (promises) → macrotasks (setTimeout, setInterval).</p>",
                            "subjectId": 5,
                            "sectionId": 56,
                            "parentSectionId": 55,
                            "text": "<pre data-language=\"plain\">\nconsole.log(&quot;Start&quot;);\n\nsetTimeout(() =&gt; {\n    console.log(&quot;Settimeout executed&quot;); \n});\n\nconst myPromise = new Promise((resolve) =&gt; {\n    resolve(&quot;Resolve Promise&quot;); \n});\n\nmyPromise.then((res) =&gt; {\n    console.log(res); \n});\n\nconsole.log(&quot;End&quot;);\n</pre>",
                            "contentId": 177
                        },
                        {
                            "description": "<pre data-language=\"plain\">\nVivek\nundefined\n</pre></br></br><p><code>details.printName()</code> is a regular function. When invoked as <code>details.printName()</code>, <code>this</code> refers to the <code>details</code> object, so it returns <strong>&quot;Vivek&quot;</strong>.</p><p><code>details.printName1()</code> is an arrow function. Arrow functions don’t have their own <code>this</code>; they inherit it lexically from their defining scope. In this case, <code>this</code> refers to the global scope (<code>window</code> in browsers, <code>global</code> in Node.js), where <code>name</code> is not defined, so it returns <strong>undefined</strong>.</p>",
                            "subjectId": 5,
                            "sectionId": 56,
                            "parentSectionId": 55,
                            "text": "<pre data-language=\"plain\">\nconst details = {\n  name: &quot;Vivek&quot;,\n  printName: function() {\n      return this.name;\n  },\n  printName1: () =&gt; {\n      return this.name;\n  },\n};\n\nconsole.log(details.printName());\nconsole.log(details.printName1());\n</pre>",
                            "contentId": 178
                        },
                        {
                            "description": "<pre data-language=\"plain\">\nundefined\n</pre></br><p>When the JavaScript program runs, all variables and functions are moved to the top of their scope. JavaScript allocates memory for <code>var</code>-declared variables and initializes them with <strong>undefined</strong>. So, if we access a variable before its actual assignment, we get <strong>undefined</strong>.</p>",
                            "subjectId": 5,
                            "sectionId": 56,
                            "parentSectionId": 55,
                            "text": "<pre data-language=\"plain\">\nconsole.log(name);\nvar name = &quot;Vivek&quot;;\n</pre>",
                            "contentId": 179
                        },
                        {
                            "description": "<pre data-language=\"plain\">\nReferenceError: Cannot access &#39;name&#39; before initialization\n</pre></br><p>When a JavaScript program runs, all variables and functions are moved to the top of their scope. JavaScript allocates memory for <code>let</code> or <code>const</code>-declared variables but does not assign them a value. So, if we access a variable before its actual assignment, we get a </p></br><pre data-language=\"plain\">\nReferenceError: Cannot access &#39;name&#39; before initialization.\n</pre></br>",
                            "subjectId": 5,
                            "sectionId": 56,
                            "parentSectionId": 55,
                            "text": "<pre data-language=\"plain\">\nconsole.log(name);\nconst name = &quot;Vivek&quot;;\n</pre>",
                            "contentId": 180
                        }
                    ],
                    "subSections": []
                }
            ]
        },
        {
            "name": "<p><strong>Coding: Complete Implementation</strong></p>",
            "subjectId": 5,
            "sectionId": 57,
            "parentSectionId": 0,
            "contents": [
                {
                    "description": "<pre data-language=\"plain\">\nconst counter = () =&gt; {\n    let count = 0;\n    return {\n        increment: () =&gt; {\n            count++;\n            console.log(count);\n        },\n        decrement: function() {\n            count--;\n            console.log(count);\n        }  \n    };\n};\n\nconst counterControl = counter();\ncounterControl.increment();\ncounterControl.decrement();\n</pre>",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<pre data-language=\"plain\">\nconst counter = () =&gt; {\n    let count = 0;\n    return ...;\n};\n\nconst counterControl = counter();\ncounterControl.increment();\ncounterControl.decrement();\n</pre>",
                    "contentId": 181
                },
                {
                    "description": "<pre data-language=\"plain\">\nfunction factorial(n) {\n    if (n &lt; 0) return -1; // Factorial not defined for negative numbers\n    let result = 1;\n    for (let i = 2; i &lt;= n; i++) {\n        result *= i;\n    }\n    return result;\n}\n\nconsole.log(factorial(5)); // Output: 120\n</pre></br><pre data-language=\"plain\">\nfunction factorial(n) {\n    if (n &lt; 0) return -1;\n    if (n === 0 || n === 1) return 1;\n    return n * factorial(n - 1);\n}\n\nconsole.log(factorial(5)); // Output: 120\n</pre></br></br>",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p>What is a factorial, and how is it calculated?</p>",
                    "contentId": 182
                },
                {
                    "description": "<pre data-language=\"plain\">\nlet users = [\n  { name: &#39;Alice&#39;, age: 25 },\n  { name: &#39;Bob&#39;, age: 20 },\n  { name: &#39;Charlie&#39;, age: 30 }\n];\n</pre></br><p><strong>Sort by Age (Ascending)</strong></p><pre data-language=\"plain\">\nusers.sort((a, b) =&gt; a.age - b.age);\nconsole.log(users);\n/* Output:\n[\n  { name: &#39;Bob&#39;, age: 20 },\n  { name: &#39;Alice&#39;, age: 25 },\n  { name: &#39;Charlie&#39;, age: 30 }\n]\n*/\n</pre></br><p><strong>Sort by Name (Alphabetical)</strong></p><pre data-language=\"plain\">\nusers.sort((a, b) =&gt; a.name.localeCompare(b.name));\nconsole.log(users);\n/* Output:\n[\n  { name: &#39;Alice&#39;, age: 25 },\n  { name: &#39;Bob&#39;, age: 20 },\n  { name: &#39;Charlie&#39;, age: 30 }\n]\n*/\n</pre></br></br><p><strong>Tips:</strong></p><ol><li>Always use a comparison function for numbers or custom sorting.</li><li>localeCompare is useful for string sorting with international characters.</li><li>Sorting mutates the original array; to avoid that, use array.slice().sort().</li></ol>",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p>What is the difference between sorting strings and numbers in JavaScript?</p>",
                    "contentId": 183
                },
                {
                    "description": "<p>Bubble Sort repeatedly compares adjacent elements and <strong>swaps them</strong> if they are in the wrong order.</p><ul><li>Time complexity: <strong>O(n²)</strong></li><li>Space complexity: <strong>O(1)</strong></li><li>Stable sort: <strong>Yes</strong></li></ul></br><pre data-language=\"plain\">\nfunction bubbleSort(arr) {\n    let n = arr.length;\n    for (let i = 0; i &lt; n - 1; i++) {\n        // Last i elements are already sorted\n        for (let j = 0; j &lt; n - i - 1; j++) {\n            if (arr[j] &gt; arr[j + 1]) {\n                // Swap arr[j] and arr[j+1]\n                let temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n    return arr;\n}\n\nlet numbers = [5, 2, 9, 1, 7];\nconsole.log(bubbleSort(numbers)); // Output: [1, 2, 5, 7, 9]\n</pre>",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p>Can you sort array using bubble sort?</p></br>",
                    "contentId": 184
                },
                {
                    "description": "<pre data-language=\"plain\">\nfunction quickSort(arr) {\n    if (arr.length &lt;= 1) return arr; // Base case\n\n    const pivot = arr[arr.length - 1]; // Choose last element as pivot\n    const left = [];\n    const right = [];\n\n    for (let i = 0; i &lt; arr.length - 1; i++) {\n        if (arr[i] &lt; pivot) {\n            left.push(arr[i]);\n        } else {\n            right.push(arr[i]);\n        }\n    }\n\n    // Recursively sort left and right, then combine\n    return [...quickSort(left), pivot, ...quickSort(right)];\n}\n\n// Example usage\nlet numbers = [5, 2, 9, 1, 7];\nconsole.log(quickSort(numbers)); // Output: [1, 2, 5, 7, 9]\n</pre></br>",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p>Can you sort array using quick sort?</p>",
                    "contentId": 185
                },
                {
                    "description": "<p><strong>Using Set (Simplest &amp; Modern Way):</strong></p><pre data-language=\"plain\">\nlet numbers = [1, 2, 2, 3, 4, 4, 5];\n\nlet uniqueNumbers = [...new Set(numbers)];\nconsole.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]\n</pre></br><p><strong>Using filter() and indexOf():</strong></p><pre data-language=\"plain\">\nlet numbers = [1, 2, 2, 3, 4, 4, 5];\n\nlet uniqueNumbers = numbers.filter((value, index, arr) =&gt; {\n    return arr.indexOf(value) === index;\n});\n\nconsole.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]\n</pre></br><p><strong>Using Object/Map (Good for large arrays):</strong></p><pre data-language=\"plain\">\nlet numbers = [1, 2, 2, 3, 4, 4, 5];\nlet seen = {};\nlet uniqueNumbers = [];\n\nfor (let num of numbers) {\n    if (!seen[num]) {\n        uniqueNumbers.push(num);\n        seen[num] = true;\n    }\n}\n\nconsole.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]\n</pre>",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p>Can you remove duplicate number from array?</p>",
                    "contentId": 186
                },
                {
                    "description": "<p><strong>Using Math.max and Math.min:</strong></p><pre data-language=\"plain\">\nlet numbers = [5, 2, 9, 1, 7];\n\nlet largest = Math.max(...numbers);\nlet smallest = Math.min(...numbers);\n\nconsole.log(&quot;Largest:&quot;, largest); // Output: 9\nconsole.log(&quot;Smallest:&quot;, smallest); // Output: 1\n</pre></br><p><strong>Using a Loop (Classic Approach)</strong></p><pre data-language=\"plain\">\nlet numbers = [5, 2, 9, 1, 7];\n\nlet largest = numbers[0];\nlet smallest = numbers[0];\n\nfor (let i = 1; i &lt; numbers.length; i++) {\n    if (numbers[i] &gt; largest) largest = numbers[i];\n    if (numbers[i] &lt; smallest) smallest = numbers[i];\n}\n\nconsole.log(&quot;Largest:&quot;, largest); // Output: 9\nconsole.log(&quot;Smallest:&quot;, smallest); // Output: 1\n</pre></br>",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p>Find the <strong>largest/smallest number</strong> in an array.</p>",
                    "contentId": 187
                },
                {
                    "description": "<pre data-language=\"plain\">\nlet numbers = [5, 2, 9, 1, 7];\n\nlet largest = -Infinity;\nlet secondLargest = -Infinity;\nlet smallest = Infinity;\nlet secondSmallest = Infinity;\n\nfor (let num of numbers) {\n    // For largest and second largest\n    if (num &gt; largest) {\n        secondLargest = largest;\n        largest = num;\n    } else if (num &gt; secondLargest &amp;&amp; num !== largest) {\n        secondLargest = num;\n    }\n\n    // For smallest and second smallest\n    if (num &lt; smallest) {\n        secondSmallest = smallest;\n        smallest = num;\n    } else if (num &lt; secondSmallest &amp;&amp; num !== smallest) {\n        secondSmallest = num;\n    }\n}\n\nconsole.log(&quot;Second Largest:&quot;, secondLargest);   // Output: 7\nconsole.log(&quot;Second Smallest:&quot;, secondSmallest); // Output: 2\n</pre></br>",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p>Find <strong>second largest/smallest element</strong>.</p>",
                    "contentId": 188
                },
                {
                    "description": "<pre data-language=\"plain\">\nlet str = &quot;Hello World&quot;;\n\nlet vowelsCount = 0;\nlet consonantsCount = 0;\n\n// Convert string to lowercase for easy comparison\nlet lowerStr = str.toLowerCase();\n\nfor (let char of lowerStr) {\n    if (char &gt;= &#39;a&#39; &amp;&amp; char &lt;= &#39;z&#39;) { // Consider only alphabets\n        if (&quot;aeiou&quot;.includes(char)) {\n            vowelsCount++;\n        } else {\n            consonantsCount++;\n        }\n    }\n}\n\nconsole.log(&quot;Vowels:&quot;, vowelsCount);       // Output: 3\nconsole.log(&quot;Consonants:&quot;, consonantsCount); // Output: 7\n</pre>",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p>Count the <strong>number of vowels/consonants</strong> in a string.</p>",
                    "contentId": 189
                },
                {
                    "description": "<pre data-language=\"plain\">\nfunction isPerfectNumber(num) {\n    if (num &lt;= 1) return false; // 1 or negative numbers are not perfect\n\n    let sum = 0;\n    for (let i = 1; i &lt;= num / 2; i++) { // only check up to num/2\n        if (num % i === 0) {\n            sum += i;\n        }\n    }\n\n    return sum === num;\n}\n\n// Test\nconsole.log(isPerfectNumber(6));  // true\nconsole.log(isPerfectNumber(28)); // true\nconsole.log(isPerfectNumber(12)); // false\n</pre></br>",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p>Check if a number is a <strong>perfect number</strong>.</p>",
                    "contentId": 190
                },
                {
                    "description": "<p><strong>Using Array.prototype.flat() (Modern &amp; Simple):</strong></p><pre data-language=\"plain\">\nlet nestedArray = [1, [2, [3, 4], 5], 6];\n\n// Use flat() with Infinity to flatten all levels\nlet flattened = nestedArray.flat(Infinity);\n\nconsole.log(flattened); // Output: [1, 2, 3, 4, 5, 6]\n</pre></br><p><strong>Using Recursion (Classic Interview Approach):</strong></p><pre data-language=\"plain\">\nconst array = [1, [2, [3, 4], 5], 6, [[[7, [8, 9, [10, 11, 12]]]]]];\n\nfunction flattenArray(nestedArray, targetArray = []) {\n    for(const item of nestedArray) {\n        if(Array.isArray(item)) {\n            flattenArray(item, targetArray);\n        } else {\n            targetArray.push(item);\n        }\n    }\n    return targetArray;\n}\nconsole.log(flattenArray(array));\n</pre>",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p>Implement <strong>flattening of nested arrays</strong>.</p>",
                    "contentId": 191
                },
                {
                    "description": "<pre data-language=\"plain\">\nconst nestedObject = {\n    a: 1, \n    b: {\n        c: [1, 4, 5],\n        d: 4,\n        e: {\n            f: [1, 2, 3]\n        },\n        g: null\n    }\n}\n\nfunction flattenObj(nestedObj, targetKey = &#39;&#39;, result = {}) {\n    for(const [key, value] of Object.entries(nestedObj)) {\n        const newKey = targetKey? `${targetKey}.${key}` : key;\n        if(typeof value === &#39;object&#39; &amp;&amp; !Array.isArray(value) &amp;&amp; value !== null) {\n            flattenObj(value, newKey, result);\n        } else {\n            result[newKey] = value;\n        }\n    }\n    return result;\n}\nconsole.log(flattenObj(nestedObject));\n</pre></br>",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p>Implement <strong>flattening </strong>of <strong>nested object</strong>.</p>",
                    "contentId": 192
                },
                {
                    "description": "",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p>Implement <strong>debounce</strong> and <strong>throttle</strong> functions.</p>",
                    "contentId": 193
                },
                {
                    "description": "",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p>Write <strong>memoization</strong> function for optimization.</p>",
                    "contentId": 194
                },
                {
                    "description": "<pre data-language=\"plain\">\nlet arr = [1, 2.5, 3/2, -4, 0.75];\n\nlet integers = arr.filter(num =&gt; Number.isInteger(num));\nlet nonIntegers = arr.filter(num =&gt; !Number.isInteger(num));\n\nconsole.log(&quot;Integers:&quot;, integers);       // [1, -4]\nconsole.log(&quot;Non-Integers:&quot;, nonIntegers); // [2.5, 1.5, 0.75]\n</pre></br>",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p>Find <strong>integer </strong>vs <strong>Non-Integer</strong> Rational Numbers.</p>",
                    "contentId": 195
                },
                {
                    "description": "<pre data-language=\"plain\">\nconst data = {\n  user: {\n    name: &quot;Vivek&quot;,\n    details: {\n      age: 31,\n      city: {\n          cityName: &#39;Varanasi&#39;,\n          pin: 221112\n      },\n      phoneNumbers: [125425, 5468987, 6547526]\n    },\n  },\n  active: false,\n};\n\nfunction hasKey(nestedObj, targetKey) {\n    for(const [key, value] of Object.entries(nestedObj)) {\n        if(key === targetKey) return true;\n        \n        if(typeof value === &#39;object&#39; &amp;&amp; !Array.isArray(value) &amp;&amp; value !== null) {\n            if(hasKey(value, targetKey)) return true; \n        }\n    }\n    return false;\n}\n\nconsole.log(hasKey(data, &#39;phoneNumbers&#39;));\n</pre>",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">Can you </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">check</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\"> if a </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">property exists</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\"> in an </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">object</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">?</span></p>",
                    "contentId": 196
                },
                {
                    "description": "<pre data-language=\"plain\">\nconst data = {\n  user: {\n    name: &quot;Vivek&quot;,\n    details: {\n      age: 31,\n      city: {\n          cityName: &#39;Varanasi&#39;,\n          pin: 221112\n      },\n      phoneNumbers: [125425, 5468987, 6547526]\n    },\n  },\n  active: false,\n};\nfunction deepClone(nestedObj) {\n    const result = {};\n    for(const [key, value] of Object.entries(nestedObj)) {\n        if(typeof value === &#39;object&#39; &amp;&amp; !Array.isArray(value) &amp;&amp; value !== null) {\n            result[key] = deepClone(value);\n        } else {\n            result[key] = value;\n        }\n    }\n    return result;\n}\nconsole.log(deepClone(data));\n</pre></br><p>If you also want to handle <strong>arrays</strong>, <strong>dates</strong>, <strong>maps</strong>, and <strong>sets</strong>, you can extend it — but for normal JSON-style data (objects, arrays, strings, numbers, booleans, null), this version is 100% correct and efficient.</p>",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p>Can you <strong>implement</strong> a <strong>deep copy</strong> manually?</p>",
                    "contentId": 197
                },
                {
                    "description": "<pre data-language=\"plain\">\nfunction curry(fn) {\n  return function curried(...args) {\n    // If enough arguments have been provided, call the original function\n    if (args.length &gt;= fn.length) {\n      return fn(...args);\n    }\n    // Otherwise, return a function that collects more arguments\n    return function (...nextArgs) {\n      return curried(...args, ...nextArgs);\n    };\n  };\n}\n\nfunction add(a, b, c) {\n  return a + b + c;\n}\n\nconst curriedAdd = curry(add);\n\nconsole.log(curriedAdd(1)(2)(3)); // 6\nconsole.log(curriedAdd(1, 2)(3)); // 6\nconsole.log(curriedAdd(1)(2, 3)); // 6\n</pre></br>",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p>Can you implement a <strong>curry function</strong></p><p>// curry(add)(1)(2)(3) should equal add(1, 2, 3)</p></br><p>function curry(fn) {</p><p>}</p></br><p>function add(a, b, c) {</p><p>return a + b + c;</p><p>}</p></br><p>const curriedAdd = curry(add);</p><p>console.log(curriedAdd(1)(2)(3)); // 6</p>",
                    "contentId": 198
                },
                {
                    "description": "<pre data-language=\"plain\">\nfunction isBalanced(brackets) {\n  const stack = [];\n  const pairs = {\n    &#39;)&#39;: &#39;(&#39;,\n    &#39;}&#39;: &#39;{&#39;,\n    &#39;]&#39;: &#39;[&#39;\n  };\n\n  for (let char of brackets) {\n    if ([&#39;(&#39;, &#39;{&#39;, &#39;[&#39;].includes(char)) {\n      stack.push(char);\n    } else if ([&#39;)&#39;, &#39;}&#39;, &#39;]&#39;].includes(char)) {\n      if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {\n        return false;\n      }\n      stack.pop();\n    }\n  }\n\n  return stack.length === 0;\n}\n\n// ✅ Test cases\nconsole.log(isBalanced([&#39;[&#39;, &#39;{&#39;, &#39;(&#39;, &#39;)&#39;, &#39;}&#39;, &#39;]&#39;])); // true\nconsole.log(isBalanced([&#39;[&#39;, &#39;(&#39;, &#39;]&#39;, &#39;)&#39;]));           // false\nconsole.log(isBalanced([&#39;{&#39;, &#39;[&#39;, &#39;]&#39;, &#39;}&#39;]));           // true\nconsole.log(isBalanced([&#39;(&#39;, &#39;)&#39;, &#39;[&#39;, &#39;}&#39;, &#39;]&#39;]));      // false\n</pre>",
                    "subjectId": 5,
                    "sectionId": 57,
                    "parentSectionId": 0,
                    "text": "<p>Check Brackets are balance or not?</p><p>a = [&#39;[&#39;, &#39;{&#39;, &#39;(&#39;, &#39;)&#39;, &#39;}&#39;, &#39;]&#39;];</p>",
                    "contentId": 199
                }
            ],
            "subSections": []
        }
    ];
};