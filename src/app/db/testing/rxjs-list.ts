export const rxjsList = () => {
    return [
        {
            "name": "<p><strong>Basic</strong></p>",
            "subjectId": 4,
            "sectionId": 43,
            "parentSectionId": 0,
            "contents": [
                {
                    "description": "",
                    "subjectId": 4,
                    "sectionId": 43,
                    "parentSectionId": 0,
                    "text": "<p><strong>What is RxJS?</strong></p>",
                    "contentId": 141
                },
                {
                    "description": "",
                    "subjectId": 4,
                    "sectionId": 43,
                    "parentSectionId": 0,
                    "text": "<p><strong>What are observables in Angular?</strong></p>",
                    "contentId": 142
                },
                {
                    "description": "",
                    "subjectId": 4,
                    "sectionId": 43,
                    "parentSectionId": 0,
                    "text": "<p><strong>How do RxJS differ from promises?</strong></p>",
                    "contentId": 143
                },
                {
                    "description": "",
                    "subjectId": 4,
                    "sectionId": 43,
                    "parentSectionId": 0,
                    "text": "<p><strong>Why is RxJS used in Angular?</strong></p>",
                    "contentId": 144
                },
                {
                    "description": "",
                    "subjectId": 4,
                    "sectionId": 43,
                    "parentSectionId": 0,
                    "text": "<p><strong>If Observables are more powerful than Promises, then why do we still use Promises?</strong></p>",
                    "contentId": 145
                },
                {
                    "description": "",
                    "subjectId": 4,
                    "sectionId": 43,
                    "parentSectionId": 0,
                    "text": "<p><strong>How do you subscribe to an Observable? How do you unsubscribe?</strong></p>",
                    "contentId": 146
                },
                {
                    "description": "",
                    "subjectId": 4,
                    "sectionId": 43,
                    "parentSectionId": 0,
                    "text": "<p><strong>What is the use of pipe() in RxJS?</strong></p>",
                    "contentId": 147
                },
                {
                    "description": "",
                    "subjectId": 4,
                    "sectionId": 43,
                    "parentSectionId": 0,
                    "text": "<p><strong>How to chain HTTP calls in sequence using RxJS?</strong></p>",
                    "contentId": 148
                },
                {
                    "description": "",
                    "subjectId": 4,
                    "sectionId": 43,
                    "parentSectionId": 0,
                    "text": "<p><strong>What is the difference between tap and map?</strong></p>",
                    "contentId": 149
                },
                {
                    "description": "<p>When an observable <strong>keeps emitting</strong> but you <strong>never unsubscribe</strong>, it stays in memory even if the component is destroyed.</p></br><p>Example leak sources:</p><ul><li><code>interval()</code>, <code>timer()</code>, <code>WebSocket</code></li><li>Service observables like <code>BehaviorSubject</code></li><li><code>HttpClient</code>? 🟢 Safe (Auto-completes ✅)</li></ul></br><p>There are many ways to prevent memory leaks:</p><ul><li>We can unsubscribe manually in <code>ngOnDestroy()</code>.</li><li>We can use <code>takeUntil()</code> with a notifier, and it unsubscribes when the notifier completes.</li><li>If we use the <code>async</code> pipe, it automatically unsubscribes when the component is destroyed.</li><li>We can use the <code>take()</code> or <code>first()</code> operators, as they automatically complete after the required emission.</li></ul></br>",
                    "subjectId": 4,
                    "sectionId": 43,
                    "parentSectionId": 0,
                    "text": "<p><strong>How do you handle memory leaks with Observables?</strong></p>",
                    "contentId": 150
                },
                {
                    "description": "<p><strong>Creation Operators</strong> are used to create new Observables from scratch or from various sources, such as:</p><ul><li><strong>of()</strong> → creates an observable from a value.</li><li><strong>from()</strong> → creates an observable from an array or a promise.</li><li><strong>fromEvent()</strong> → creates an observable from a DOM event.</li></ul><p><strong>Transformation Operators</strong> are used to transform data emitted by an observable, such as:</p><ul><li><strong>switchMap()</strong> → cancels the previous observable if a new value is emitted.</li><li><strong>mergeMap()</strong> → runs multiple observables in parallel and subscribes to all of them concurrently.</li><li><strong>concatMap()</strong> → waits for each observable to complete before moving to the next.</li><li><strong>exhaustMap()</strong> → ignores new emissions from the source until the current inner observable completes.</li></ul><p><strong>Filtering Operators</strong> are used to filter emitted values based on conditions, such as:</p><ul><li><strong>take(n)</strong> → emits only the first <em>n</em> values and then completes.</li><li><strong>takeUntil()</strong> → unsubscribes from the source observable when a notifier observable emits.</li><li><strong>skip(n)</strong> → ignores the first <em>n</em> emitted values and emits the rest.</li></ul><p><strong>Combination Operators</strong> are used to combine multiple observables into one, such as:</p><ul><li><strong>combineLatest()</strong> → emits the latest values from multiple observables whenever any of them emits.</li><li><strong>forkJoin()</strong> → emits the last value from each observable once all have completed.</li></ul>",
                    "subjectId": 4,
                    "sectionId": 43,
                    "parentSectionId": 0,
                    "text": "<p><strong>Can you explain five RxJS operators with example?</strong></p>",
                    "contentId": 151
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Subject, BehaviorSubject, ReplaySubject, and AsyncSubject</strong></p>",
            "subjectId": 4,
            "sectionId": 44,
            "parentSectionId": 0,
            "contents": [
                {
                    "description": "<p>All are <strong>special types of Observables</strong> in <strong>RxJS</strong> that act as both <strong>Observable</strong> and <strong>Observer</strong> (you can <strong>subscribe</strong> and also <strong>next values</strong>).</p></br><p>🔹 <strong>Subject: </strong>A <strong>Subject</strong> does <strong>not store any values</strong>. Subscribers only receive values <strong>emitted after they subscribe</strong>.</p><p>👉 Best used for <strong>event emitters</strong>, like <strong>button clicks</strong> or <strong>WebSocket streams</strong>.</p></br><p>🔹 <strong>BehaviorSubject: </strong>A <strong>BehaviorSubject</strong> requires an <strong>initial value</strong> and always stores the <strong>latest emitted value</strong>.</p><p>👉 New subscribers immediately receive the <strong>most recent value</strong> along with <strong>future values</strong>.</p><p>Commonly used for <strong>state management</strong> in <strong>Angular applications</strong>.</p></br><p>🔹 <strong>ReplaySubject: </strong>A <strong>ReplaySubject</strong> stores a <strong>buffer of past values</strong> (defined by <strong>buffer size</strong>) and <strong>replays</strong> those values to <strong>new subscribers</strong>, along with <strong>future values</strong>.</p><p>👉 Useful when you want subscribers to get some <strong>history</strong>, like <strong>chat messages</strong> or <strong>cached data</strong>.</p></br><p>🔹 <strong>AsyncSubject: </strong>An <strong>AsyncSubject</strong> emits <strong>only the last value</strong> and <strong>only when the subject completes</strong>.</p><p>👉 All subscribers receive the <strong>same final value</strong>.</p></br><p>Typically used when you want to expose a <strong>single final result</strong>, such as an <strong>HTTP request</strong> or a <strong>long calculation</strong>.</p>",
                    "subjectId": 4,
                    "sectionId": 44,
                    "parentSectionId": 0,
                    "text": "<p><strong>What is the difference between Subject, BehaviorSubject, ReplaySubject, and AsyncSubject in RxJS? Can you give a scenario where each would be most appropriate?</strong></p>",
                    "contentId": 152
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Types of observable</strong></p>",
            "subjectId": 4,
            "sectionId": 45,
            "parentSectionId": 0,
            "contents": [
                {
                    "description": "<p><strong>Creation Operators</strong> are used to create new Observables from scratch or from various sources, such as:</p><ul><li><strong>of()</strong> → creates an observable from a value.</li><li><strong>from()</strong> → creates an observable from an array or a promise.</li><li><strong>fromEvent()</strong> → creates an observable from a DOM event.</li></ul><p><strong>Transformation Operators</strong> are used to transform data emitted by an observable, such as:</p><ul><li><strong>switchMap()</strong> → cancels the previous observable if a new value is emitted.</li><li><strong>mergeMap()</strong> → runs multiple observables in parallel and subscribes to all of them concurrently.</li><li><strong>concatMap()</strong> → waits for each observable to complete before moving to the next.</li><li><strong>exhaustMap()</strong> → ignores new emissions from the source until the current inner observable completes.</li></ul><p><strong>Filtering Operators</strong> are used to filter emitted values based on conditions, such as:</p><ul><li><strong>take(n)</strong> → emits only the first <em>n</em> values and then completes.</li><li><strong>takeUntil()</strong> → unsubscribes from the source observable when a notifier observable emits.</li><li><strong>skip(n)</strong> → ignores the first <em>n</em> emitted values and emits the rest.</li></ul><p><strong>Combination Operators</strong> are used to combine multiple observables into one, such as:</p><ul><li><strong>combineLatest()</strong> → emits the latest values from multiple observables whenever any of them emits.</li><li><strong>forkJoin()</strong> → emits the last value from each observable once all have completed.</li><li><strong>zip()</strong> → <strong>zip</strong> is a <strong>combination operator</strong> in <strong>RxJS</strong> that combines multiple <strong>Observables</strong> by <strong>pairing their emitted values by index</strong>.</li></ul><pre data-language=\"plain\">\nzip(of(&#39;A&#39;, &#39;B&#39;, &#39;C&#39;), of(1, 2, 3)).subscribe(val =&gt; console.log(&#39;zip:&#39;, val));  \n// [&#39;A&#39;,1], [&#39;B&#39;,2], [&#39;C&#39;,3]\n\n</pre></br><ul><li><strong>merge()</strong> → <strong>merge</strong> is a <strong>combination operator</strong> in <strong>RxJS</strong> that combines multiple <strong>Observables</strong> and emits <strong>all their values as they come</strong> — <strong>concurrently</strong>.</li><li><strong>concat()</strong> → <strong>concat</strong> is a <strong>combination operator</strong> in <strong>RxJS</strong> that combines multiple <strong>Observables in sequence</strong>, emitting values from each <strong>only after the previous completes</strong>.</li></ul>",
                    "subjectId": 4,
                    "sectionId": 45,
                    "parentSectionId": 0,
                    "text": "<p><strong>Can you explain types of  operators in sort?</strong></p>",
                    "contentId": 153
                },
                {
                    "description": "<p><code>map</code> transforms the data in the Observable pipeline, while <code>tap</code> is used for side effects like logging without modifying the data.</p>",
                    "subjectId": 4,
                    "sectionId": 45,
                    "parentSectionId": 0,
                    "text": "<p>What is different between <strong>tab </strong>and <strong>map</strong>?</p>",
                    "contentId": 154
                }
            ],
            "subSections": []
        }
    ];
};