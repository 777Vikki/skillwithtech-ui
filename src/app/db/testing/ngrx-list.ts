export const ngrxList = () => {
    return [
        {
            "name": "<p><strong>Basic</strong></p>",
            "sectionId": 31,
            "noteType": "RxJs",
            "topics": [
                {
                    "text": "<p><strong>What is RxJS?</strong></p>",
                    "sectionId": 31,
                    "subSectionId": -1,
                    "noteType": "RxJs",
                    "topicId": 116,
                    "description": ""
                },
                {
                    "text": "<p><strong>What are observables in Angular?</strong></p>",
                    "sectionId": 31,
                    "subSectionId": -1,
                    "noteType": "RxJs",
                    "topicId": 117,
                    "description": ""
                },
                {
                    "text": "<p><strong>How do RxJS differ from promises?</strong></p>",
                    "sectionId": 31,
                    "subSectionId": -1,
                    "noteType": "RxJs",
                    "topicId": 118,
                    "description": ""
                },
                {
                    "text": "<p><strong>Why is RxJS used in Angular?</strong></p>",
                    "sectionId": 31,
                    "subSectionId": -1,
                    "noteType": "RxJs",
                    "topicId": 119,
                    "description": ""
                },
                {
                    "text": "<p><strong>If Observables are more powerful than Promises, then why do we still use Promises?</strong></p>",
                    "sectionId": 31,
                    "subSectionId": -1,
                    "noteType": "RxJs",
                    "topicId": 120,
                    "description": ""
                },
                {
                    "text": "<p><strong>How do you subscribe to an Observable? How do you unsubscribe?</strong></p>",
                    "sectionId": 31,
                    "subSectionId": -1,
                    "noteType": "RxJs",
                    "topicId": 121,
                    "description": ""
                },
                {
                    "text": "<p><strong>What is the use of pipe() in RxJS?</strong></p>",
                    "sectionId": 31,
                    "subSectionId": -1,
                    "noteType": "RxJs",
                    "topicId": 122,
                    "description": ""
                },
                {
                    "text": "<p><strong>How to chain HTTP calls in sequence using RxJS?</strong></p>",
                    "sectionId": 31,
                    "subSectionId": -1,
                    "noteType": "RxJs",
                    "topicId": 123,
                    "description": ""
                },
                {
                    "text": "<p><strong>What is the difference between tap and map?</strong></p>",
                    "sectionId": 31,
                    "subSectionId": -1,
                    "noteType": "RxJs",
                    "topicId": 124,
                    "description": ""
                },
                {
                    "text": "<p><strong>How do you handle memory leaks with Observables?</strong></p>",
                    "sectionId": 31,
                    "subSectionId": -1,
                    "noteType": "RxJs",
                    "topicId": 125,
                    "description": ""
                },
                {
                    "text": "<p><strong>Can you explain five RxJS operators with example?</strong></p>",
                    "sectionId": 31,
                    "subSectionId": -1,
                    "noteType": "RxJs",
                    "topicId": 126,
                    "description": ""
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Subject, BehaviorSubject, ReplaySubject, and AsyncSubject</strong></p>",
            "sectionId": 32,
            "noteType": "RxJs",
            "topics": [
                {
                    "text": "<p><strong>What is the difference between Subject, BehaviorSubject, ReplaySubject, and AsyncSubject in RxJS? Can you give a scenario where each would be most appropriate?</strong></p>",
                    "sectionId": 32,
                    "subSectionId": -1,
                    "noteType": "RxJs",
                    "topicId": 127,
                    "description": "<p>All are special types of <strong>Observables</strong> in RxJS that act as both <strong>Observable</strong> and <strong>Observer</strong> (you can subscribe and also emit values).</p></br><ul><li><strong>🔹 Subject:</strong> A Subject does <strong>not store any values</strong>. Subscribers only receive values <strong>emitted after they subscribe</strong>. It’s best used for <strong>event emitters</strong>, like button clicks or WebSocket streams.</li><li><strong>🔹 BehaviorSubject:</strong> A BehaviorSubject <strong>requires an initial value</strong> and always stores the <strong>latest emitted value</strong>. New subscribers immediately receive the <strong>most recent value</strong> along with future values. It’s commonly used for <strong>state management in Angular applications</strong>.</li><li><strong>🔹 ReplaySubject:</strong> A ReplaySubject <strong>stores a buffer of past values</strong> (defined by buffer size) and <strong>replays those values to new subscribers</strong>, along with future values. It is useful when you want subscribers to <strong>get some history</strong>, like chat messages or cached data.</li><li><strong>🔹 AsyncSubject:</strong> An AsyncSubject <strong>emits only the last value</strong> and only <strong>when the subject completes</strong>. All subscribers receive the <strong>same final value</strong>. It is typically used when you want to <strong>expose a single final result</strong>, such as an HTTP request or a long calculation.</li></ul></br>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Types of observable</strong></p>",
            "sectionId": 33,
            "noteType": "RxJs",
            "topics": [],
            "subSections": [
                {
                    "name": "<p><strong>Creation Operators</strong></p>",
                    "sectionId": 33,
                    "subSectionId": 1,
                    "noteType": "RxJs",
                    "topics": [
                        {
                            "text": "<p><strong>What are creation operators in RxJS?</strong></p>",
                            "sectionId": 33,
                            "subSectionId": 1,
                            "noteType": "RxJs",
                            "topicId": 128,
                            "description": "<p><strong>Creation operations</strong> are used to <strong>create new Observables</strong>.</p></br><ul><li><code><strong>of()</strong></code> is a creation operator in RxJS that <strong>creates an observable from values</strong>:</li></ul></br><pre data-language=\"plain\">\nof(10, 20, 30).subscribe(console.log); // 10, 20, 30\n</pre></br><ul><li><code><strong>from()</strong></code> is a creation operator in RxJS that <strong>creates an observable from an array, promise, or iterable</strong>:</li></ul><pre data-language=\"plain\">\n\nfrom([1, 2, 3]).subscribe(console.log); // 1, 2, 3\n</pre></br><ul><li><code><strong>fromEvent()</strong></code> is a creation operator in RxJS that <strong>creates observables from DOM events</strong>:</li></ul><pre data-language=\"plain\">\n\nfromEvent(document, &#39;click&#39;).subscribe(() =&gt; console.log(&#39;Clicked&#39;));\n</pre></br><ul><li><code><strong>interval()</strong></code> is a creation operator in RxJS that <strong>emits an ascending sequence of numbers (0, 1, 2, …) at regular time intervals specified in milliseconds</strong>:</li></ul><pre data-language=\"plain\">\n\ninterval(1000).subscribe(console.log); // 0,1,2 every sec\n</pre><ul><li><code><strong>timer()</strong></code> is a creation operator in RxJS:<ul><li>With <strong>one argument</strong>, it emits 0 <strong>once</strong> after the specified delay.</li><li>With <strong>two arguments</strong>, it emits an infinite ascending sequence (0, 1, 2...) <strong>starting after the initial delay, then at the specified interval</strong>.</li></ul></li></ul><pre data-language=\"plain\">\n\ntimer(2000).subscribe(console.log); // starts after 2s, then 0\ntimer(2000, 1000).subscribe(console.log); // starts after 2s, then every 1s\n</pre></br><ul><li><code><strong>range()</strong></code> is a creation operator in RxJS that <strong>emits numbers in sequence</strong>:</li></ul><pre data-language=\"plain\">\n\nrange(3, 8).subscribe(console.log); // 3,4,5,6,7,8\n</pre>"
                        }
                    ]
                },
                {
                    "name": "<p><strong>Transformation Operators</strong></p>",
                    "sectionId": 33,
                    "subSectionId": 2,
                    "noteType": "RxJs",
                    "topics": [
                        {
                            "text": "<p><strong>What are Transformation operators in RxJS?</strong></p>",
                            "sectionId": 33,
                            "subSectionId": 2,
                            "noteType": "RxJs",
                            "topicId": 129,
                            "description": "<p><strong>Transformation operators</strong> are used to <strong>change emitted values</strong>.</p></br><ul><li><code><strong>switchMap()</strong></code> is a transformation operator in RxJS that <strong>maps each source value into an inner observable</strong> and <strong>cancels the previous observable</strong> if a new value is emitted.</li><li><code><strong>mergeMap()</strong></code> is a transformation operator in RxJS that <strong>maps each source value into an inner observable</strong> and <strong>subscribes to all of them concurrently</strong>, allowing multiple asynchronous operations to run in parallel.</li><li><code><strong>concatMap()</strong></code> is a transformation operator in RxJS that <strong>maps each source value into an inner observable</strong> and <strong>subscribes to them one by one</strong>, in order, <strong>waiting for each to complete</strong> before moving to the next.</li><li><code><strong>exhaustMap()</strong></code> is a transformation operator in RxJS that <strong>maps each source value into an inner observable</strong> but <strong>ignores new emissions from the source</strong> until the current inner observable completes.</li><li><code><strong>map()</strong></code> is a <strong>pipeable transformation operator</strong> in RxJS that <strong>transforms each emitted source value into a new value one-to-one</strong>.</li></ul>"
                        }
                    ]
                },
                {
                    "name": "<p><strong>Filter Operators</strong></p>",
                    "sectionId": 33,
                    "subSectionId": 3,
                    "noteType": "RxJs",
                    "topics": [
                        {
                            "text": "<p><strong>What are filter operators in RxJS</strong></p>",
                            "sectionId": 33,
                            "subSectionId": 3,
                            "noteType": "RxJs",
                            "topicId": 130,
                            "description": "<p><strong>Filtering operators</strong> allow only certain values from a stream.</p><ul><li><code><strong>take(n)</strong></code> is a filtering operator in RxJS that <strong>emits only the first n values</strong> from the source observable and then completes:</li></ul><pre data-language=\"plain\">\n\nof(1, 2, 3, 4, 5, 6).pipe(take(3)).subscribe(console.log); // Output: 1, 2, 3\n</pre></br><ul><li><code><strong>takeUntil()</strong></code> is a filtering operator in RxJS that <strong>completes the source observable when a notifier observable emits</strong>.</li><li>It is commonly used for <strong>cleaning up subscriptions</strong>:</li></ul><pre data-language=\"plain\">\n\nprivate destroy$ = new Subject&lt;void&gt;();\n\nof(1, 2, 3, 4, 5, 6).pipe(takeUntil(this.destroy$)).subscribe(console.log);\n\nngOnDestroy() {\n  this.destroy$.next();      // 👈 Required for takeUntil to trigger\n  this.destroy$.complete();  // 👈 Best practice to clean up the Subject itself\n}\n</pre><ul><li><code><strong>takeWhile()</strong></code> is a filtering operator in RxJS that <strong>emits values as long as the given condition is true</strong>; once the condition becomes false, it completes the observable:</li></ul><pre data-language=\"plain\">\n\nof(1, 2, 3, 4, 5).pipe(takeWhile(value =&gt; value &lt; 4)).subscribe(console.log); \n// Output: 1, 2, 3\n</pre><ul><li><code><strong>filter()</strong></code> is a filtering operator in RxJS that <strong>emits values that pass a predicate (condition)</strong>:</li></ul><pre data-language=\"plain\">\n\nof(1, 2, 3, 4).pipe(filter(val =&gt; val % 2 === 0)).subscribe(console.log); // Output: 2, 4\n</pre><ul><li><code><strong>skip()</strong></code> is a filtering operator in RxJS that <strong>ignores the first n emitted values</strong> from the source observable and emits the rest:</li></ul><pre data-language=\"plain\">\n\nof(1, 2, 3, 4).pipe(skip(2)).subscribe(console.log); // Output: 3, 4\n</pre><ul><li><code><strong>debounceTime()</strong></code> delays the emitted values from a stream by a <strong>set time</strong>, and only emits the <strong>latest value</strong> if no new value arrives during that time.</li><li><code><strong>distinctUntilChanged()</strong></code> is a filtering operator in RxJS that <strong>emits values only when they are different from the previous value</strong>.</li></ul>"
                        }
                    ]
                },
                {
                    "name": "<p><strong>Combination Operators</strong></p>",
                    "sectionId": 33,
                    "subSectionId": 4,
                    "noteType": "RxJs",
                    "topics": [
                        {
                            "text": "<p><strong>What are combination operators in RxJS?</strong></p>",
                            "sectionId": 33,
                            "subSectionId": 4,
                            "noteType": "RxJs",
                            "topicId": 132,
                            "description": "<p><strong>Combination operators</strong> are used to <strong>merge or combine streams</strong>.</p><ul><li><code><strong>combineLatest</strong></code> is a combination operator in RxJS that <strong>emits the latest values from multiple Observables whenever any of them emits</strong>:</li></ul><pre data-language=\"plain\">\n\ncombineLatest([interval(1000).pipe(take(5)), interval(500).pipe(take(10))])\n      .subscribe(val =&gt; console.log(&#39;combineLatest:&#39;, val));\n</pre><ul><li><code><strong>forkJoin()</strong></code> is a combination operator in RxJS that <strong>waits for all observables to complete</strong>, then emits the <strong>last value from each</strong>:</li></ul><pre data-language=\"plain\">\n\nforkJoin({\n  fast: interval(500).pipe(take(2)),   // completes with last value (1)\n  slow: interval(1000).pipe(take(1))   // completes with last value (0)\n}).subscribe(val =&gt; console.log(&#39;forkJoin:&#39;, val));\n</pre><ul><li><code><strong>zip</strong></code> is a combination operator in RxJS that <strong>combines multiple Observables by pairing their emitted values by index</strong>:</li></ul><pre data-language=\"plain\">\n\nzip(of(&#39;A&#39;, &#39;B&#39;, &#39;C&#39;), of(1, 2, 3)).subscribe(val =&gt; console.log(&#39;zip:&#39;, val)); \n// Output: [&#39;A&#39;,1], [&#39;B&#39;,2], [&#39;C&#39;,3]\n</pre><ul><li><code><strong>merge</strong></code> is a combination operator in RxJS that <strong>combines multiple observables and emits all their values as they arrive concurrently</strong>.</li><li><code><strong>concat</strong></code> is a combination operator in RxJS that <strong>combines multiple observables in sequence</strong>, emitting values from each only <strong>after the previous one completes</strong>.</li></ul></br>"
                        }
                    ]
                }
            ]
        }
    ];
};