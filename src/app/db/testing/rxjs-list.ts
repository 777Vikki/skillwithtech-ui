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
                    "description": ""
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
                    "description": "<p><strong>Creation Operators</strong> are used to create new Observables from scratch or from various sources, such as:</p><ul><li><strong>of()</strong> → creates an observable from a value.</li><li><strong>from()</strong> → creates an observable from an array or a promise.</li><li><strong>fromEvent()</strong> → creates an observable from a DOM event.</li></ul><p><strong>Transformation Operators</strong> are used to transform data emitted by an observable, such as:</p><ul><li><strong>switchMap()</strong> → cancels the previous observable if a new value is emitted.</li><li><strong>mergeMap()</strong> → runs multiple observables in parallel and subscribes to all of them concurrently.</li><li><strong>concatMap()</strong> → waits for each observable to complete before moving to the next.</li><li><strong>exhaustMap()</strong> → ignores new emissions from the source until the current inner observable completes.</li></ul><p><strong>Filtering Operators</strong> are used to filter emitted values based on conditions, such as:</p><ul><li><strong>take(n)</strong> → emits only the first <em>n</em> values and then completes.</li><li><strong>takeUntil()</strong> → unsubscribes from the source observable when a notifier observable emits.</li><li><strong>skip(n)</strong> → ignores the first <em>n</em> emitted values and emits the rest.</li></ul><p><strong>Combination Operators</strong> are used to combine multiple observables into one, such as:</p><ul><li><strong>combineLatest()</strong> → emits the latest values from multiple observables whenever any of them emits.</li><li><strong>forkJoin()</strong> → emits the last value from each observable once all have completed.</li></ul></br>"
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