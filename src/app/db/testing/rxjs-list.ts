export const rxjsList = () => {
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
                    "description": "<p><strong>Creation Operators</strong> are used to create new Observables from scratch or from various sources, such as:</p><ul><li><strong>of()</strong> → creates an observable from a value.</li><li><strong>from()</strong> → creates an observable from an array or a promise.</li><li><strong>fromEvent()</strong> → creates an observable from a DOM event.</li></ul><p><strong>Transformation Operators</strong> are used to transform data emitted by an observable, such as:</p><ul><li><strong>switchMap()</strong> → cancels the previous observable if a new value is emitted.</li><li><strong>mergeMap()</strong> → runs multiple observables in parallel and subscribes to all of them concurrently.</li><li><strong>concatMap()</strong> → waits for each observable to complete before moving to the next.</li><li><strong>exhaustMap()</strong> → ignores new emissions from the source until the current inner observable completes.</li></ul><p><strong>Filtering Operators</strong> are used to filter emitted values based on conditions, such as:</p><ul><li><strong>take(n)</strong> → emits only the first <em>n</em> values and then completes.</li><li><strong>takeUntil()</strong> → unsubscribes from the source observable when a notifier observable emits.</li><li><strong>skip(n)</strong> → ignores the first <em>n</em> emitted values and emits the rest.</li></ul><p><strong>Combination Operators</strong> are used to combine multiple observables into one, such as:</p><ul><li><strong>combineLatest()</strong> → emits the latest values from multiple observables whenever any of them emits.</li><li><strong>forkJoin()</strong> → emits the last value from each observable once all have completed.</li></ul>"
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
                    "description": "<p>All are <strong>special types of Observables</strong> in <strong>RxJS</strong> that act as both <strong>Observable</strong> and <strong>Observer</strong> (you can <strong>subscribe</strong> and also <strong>next values</strong>).</p></br><p>🔹 <strong>Subject: </strong>A <strong>Subject</strong> does <strong>not store any values</strong>. Subscribers only receive values <strong>emitted after they subscribe</strong>.</p><p>👉 Best used for <strong>event emitters</strong>, like <strong>button clicks</strong> or <strong>WebSocket streams</strong>.</p></br><p>🔹 <strong>BehaviorSubject: </strong>A <strong>BehaviorSubject</strong> requires an <strong>initial value</strong> and always stores the <strong>latest emitted value</strong>.</p><p>👉 New subscribers immediately receive the <strong>most recent value</strong> along with <strong>future values</strong>.</p><p>Commonly used for <strong>state management</strong> in <strong>Angular applications</strong>.</p></br><p>🔹 <strong>ReplaySubject: </strong>A <strong>ReplaySubject</strong> stores a <strong>buffer of past values</strong> (defined by <strong>buffer size</strong>) and <strong>replays</strong> those values to <strong>new subscribers</strong>, along with <strong>future values</strong>.</p><p>👉 Useful when you want subscribers to get some <strong>history</strong>, like <strong>chat messages</strong> or <strong>cached data</strong>.</p></br><p>🔹 <strong>AsyncSubject: </strong>An <strong>AsyncSubject</strong> emits <strong>only the last value</strong> and <strong>only when the subject completes</strong>.</p><p>👉 All subscribers receive the <strong>same final value</strong>.</p></br><p>Typically used when you want to expose a <strong>single final result</strong>, such as an <strong>HTTP request</strong> or a <strong>long calculation</strong>.</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Types of observable</strong></p>",
            "sectionId": 33,
            "noteType": "RxJs",
            "topics": [
                {
                    "text": "<p><strong>Can you explain types of  operators in sort?</strong></p>",
                    "sectionId": 33,
                    "subSectionId": -1,
                    "noteType": "RxJs",
                    "topicId": 194,
                    "description": "<p><strong>Creation Operators</strong> are used to create new Observables from scratch or from various sources, such as:</p><ul><li><strong>of()</strong> → creates an observable from a value.</li><li><strong>from()</strong> → creates an observable from an array or a promise.</li><li><strong>fromEvent()</strong> → creates an observable from a DOM event.</li></ul><p><strong>Transformation Operators</strong> are used to transform data emitted by an observable, such as:</p><ul><li><strong>switchMap()</strong> → cancels the previous observable if a new value is emitted.</li><li><strong>mergeMap()</strong> → runs multiple observables in parallel and subscribes to all of them concurrently.</li><li><strong>concatMap()</strong> → waits for each observable to complete before moving to the next.</li><li><strong>exhaustMap()</strong> → ignores new emissions from the source until the current inner observable completes.</li></ul><p><strong>Filtering Operators</strong> are used to filter emitted values based on conditions, such as:</p><ul><li><strong>take(n)</strong> → emits only the first <em>n</em> values and then completes.</li><li><strong>takeUntil()</strong> → unsubscribes from the source observable when a notifier observable emits.</li><li><strong>skip(n)</strong> → ignores the first <em>n</em> emitted values and emits the rest.</li></ul><p><strong>Combination Operators</strong> are used to combine multiple observables into one, such as:</p><ul><li><strong>combineLatest()</strong> → emits the latest values from multiple observables whenever any of them emits.</li><li><strong>forkJoin()</strong> → emits the last value from each observable once all have completed.</li><li><strong>zip()</strong> → <strong>zip</strong> is a <strong>combination operator</strong> in <strong>RxJS</strong> that combines multiple <strong>Observables</strong> by <strong>pairing their emitted values by index</strong>.</li></ul><pre data-language=\"plain\">\nzip(of(&#39;A&#39;, &#39;B&#39;, &#39;C&#39;), of(1, 2, 3)).subscribe(val =&gt; console.log(&#39;zip:&#39;, val));  \n// [&#39;A&#39;,1], [&#39;B&#39;,2], [&#39;C&#39;,3]\n\n</pre></br><ul><li><strong>merge()</strong> → <strong>merge</strong> is a <strong>combination operator</strong> in <strong>RxJS</strong> that combines multiple <strong>Observables</strong> and emits <strong>all their values as they come</strong> — <strong>concurrently</strong>.</li><li><strong>concat()</strong> → <strong>concat</strong> is a <strong>combination operator</strong> in <strong>RxJS</strong> that combines multiple <strong>Observables in sequence</strong>, emitting values from each <strong>only after the previous completes</strong>.</li></ul>"
                }
            ],
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
                            "description": ""
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
                            "description": ""
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
                            "description": ""
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
                            "description": ""
                        }
                    ]
                }
            ]
        }
    ];
};