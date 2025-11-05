export const ngrxList = () => {
    return [
        {
            "name": "<p><strong>Basic</strong></p>",
            "sectionId": 34,
            "noteType": "NgRx",
            "topics": [
                {
                    "text": "<p>What is NgRx in Angular?</p>",
                    "sectionId": 34,
                    "subSectionId": -1,
                    "noteType": "NgRx",
                    "topicId": 133,
                    "description": "<p><strong>NgRx</strong> in <strong>Angular</strong> is a <strong>state management library</strong> built on top of <strong>RxJS</strong> (<em>Reactive Extensions for JavaScript</em>).</p></br><p> It helps manage and maintain the <strong>application state</strong> in a <strong>predictable</strong> (easy to understand and debug) and <strong>scalable</strong> (grow with your application without becoming messy) way, especially useful in <strong>large Angular applications</strong> where multiple components interact with <strong>shared data</strong>.</p></br><p>It follows the <strong>Redux pattern</strong> (<strong>single store</strong>, <strong>unidirectional data flow</strong>, <strong>immutability</strong>), but implemented with <strong>Angular</strong> and <strong>RxJS</strong>.</p></br><p>It uses <strong>Actions</strong>, <strong>Reducers</strong>, <strong>Selectors</strong>, and <strong>Effects</strong> to manage and handle <strong>application state</strong> and <strong>side effects</strong> like <strong>API calls</strong>.</p>"
                },
                {
                    "text": "<p>How does NgRx handle immutability?</p>",
                    "sectionId": 34,
                    "subSectionId": -1,
                    "noteType": "NgRx",
                    "topicId": 134,
                    "description": "<p><strong>NgRx</strong> handles <strong>immutability</strong> by using <strong>pure functions</strong> (<strong>reducers</strong>) that return <strong>new state objects</strong> instead of modifying the <strong>existing state</strong> directly.</p>"
                }
            ],
            "subSections": [
                {
                    "name": "<p><strong>NgRx Flow</strong></p>",
                    "sectionId": 34,
                    "subSectionId": 5,
                    "noteType": "NgRx",
                    "topics": [
                        {
                            "text": "<p>Can you explain NgRx Flow (Redux Pattern in Angular)?</p>",
                            "sectionId": 34,
                            "subSectionId": 5,
                            "noteType": "NgRx",
                            "topicId": 140,
                            "description": "<h3><strong>NgRx Flow (Redux Pattern in Angular)</strong></h3><ol><li><strong>Component Dispatches an Action</strong><ul><li>When something happens in the app (user click, API call, form submit), the <strong>component dispatches an Action</strong>.</li><li>Example: <code>store.dispatch(loadUsers())</code>.</li></ul></li><li><strong>Action Travels to Reducer</strong><ul><li><strong>Reducer</strong> is a <strong>pure function</strong> that receives the <strong>current state</strong> and the <strong>action</strong>.</li><li>It returns a <strong>new state</strong> based on the action.</li><li>No side effects (API calls, async logic) happen here.</li></ul></li><li><strong>State Updates in Store</strong><ul><li>The <strong>Store</strong> holds the <strong>application state</strong>.</li><li>When the reducer returns a <strong>new state</strong>, the store is <strong>updated immutably</strong>.</li></ul></li><li><strong>Selectors Read State</strong><ul><li>Components don’t read state directly from the store object.</li><li>Instead, they use <strong>Selectors</strong> to get <strong>slices of state</strong> efficiently and reactively.</li><li>Example: <code>store.select(getAllUsers)</code>.</li></ul></li><li><strong>Effects Handle Side Effects</strong><ul><li>Any <strong>side effects</strong> (API calls, logging, navigation) are handled by <strong>Effects</strong>.</li><li>Effects <strong>listen to actions</strong>, perform async operations, and then <strong>dispatch new actions</strong> based on results.</li><li>This keeps <strong>components</strong> and <strong>reducers</strong> clean and focused on pure logic.</li></ul></li></ol></br><h3><strong>Flow Diagram (simplified)</strong></h3><pre data-language=\"plain\">\n\n[Component] --dispatch--&gt; [Action] \n    |                           |\n    v                           v\n[Effect] --async tasks--&gt; [Action Success/Failure] --&gt; [Reducer] --&gt; [Store updated]\n    ^\n    |\n[Selectors] &lt;--component subscribes-- \n</pre></br><p><strong>In Sort:</strong> </p><p>Components dispatch Actions. If the Actions involve API calls or other asynchronous operations, <strong>Effects handle those side effects</strong>. Then, <strong>Reducers update the Store</strong>, <strong>Selectors read the data from the Store</strong>, and the <strong>UI updates automatically</strong>.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "name": "<p><strong>key concept of NgRx</strong></p>",
            "sectionId": 35,
            "noteType": "NgRx",
            "topics": [
                {
                    "text": "<p>What is ‘store’ in NgRx?</p>",
                    "sectionId": 35,
                    "subSectionId": -1,
                    "noteType": "NgRx",
                    "topicId": 135,
                    "description": "<p>The <strong>Store</strong> in <strong>NgRx</strong> is a <strong>centralized state management container</strong> for Angular applications. It holds the entire <strong>application state</strong> in a <strong>single tree structure</strong>, following the <strong>Redux pattern</strong> and <strong>RxJS observables</strong>.</p></br><ul><li>The <strong>Store</strong> is <strong>read-only</strong> → components cannot directly modify it.</li><li>To <strong>update the state</strong>, we <strong>dispatch actions</strong>, which are processed by <strong>reducers</strong> to create a <strong>new immutable state</strong>.</li><li>Components can then subscribe to <strong>selectors</strong> to <strong>read slices of state</strong> in a <strong>reactive way</strong>.</li></ul>"
                },
                {
                    "text": "<p>What is ‘Actions’ in NgRx?</p>",
                    "sectionId": 35,
                    "subSectionId": -1,
                    "noteType": "NgRx",
                    "topicId": 136,
                    "description": "<p><strong>Actions</strong> are <strong>plain TypeScript objects</strong>, and they are the <strong>only way</strong> to express that <strong>something happened</strong> (e.g., a <strong>user clicked a button</strong>, <strong>data loaded</strong> from an <strong>API</strong>, or a <strong>login failed</strong>).</p>"
                },
                {
                    "text": "<p>What is ‘Reducer’ in NgRx?</p>",
                    "sectionId": 35,
                    "subSectionId": -1,
                    "noteType": "NgRx",
                    "topicId": 137,
                    "description": "<p>In <strong>NgRx</strong>, a <strong>Reducer</strong> is a <strong>pure function</strong> that takes the <strong>current state</strong> and an <strong>action</strong>, then returns a <strong>new state</strong>.</p>"
                },
                {
                    "text": "<p>What is ‘Selectors’ in NgRx?</p>",
                    "sectionId": 35,
                    "subSectionId": -1,
                    "noteType": "NgRx",
                    "topicId": 138,
                    "description": "<p>In <strong>NgRx</strong>, <strong>Selectors</strong> are <strong>functions</strong> used to query <strong>slices of state</strong> from the <strong>Store</strong>.</p><p> They make it <strong>easier</strong>, <strong>reusable</strong>, and <strong>efficient</strong> to get <strong>data</strong> from the <strong>state</strong>.</p>"
                },
                {
                    "text": "<p>What are ‘effects’ in NgRx?</p>",
                    "sectionId": 35,
                    "subSectionId": -1,
                    "noteType": "NgRx",
                    "topicId": 139,
                    "description": "<p>In <strong>NgRx</strong>, <strong>Effects</strong> handle <strong>side effects</strong> like <strong>API calls</strong>, <strong>logging</strong>, or any <strong>async operations</strong> outside the <strong>component</strong>.</p></br><p>They <strong>listen</strong> to <strong>actions</strong>, perform <strong>tasks</strong> (e.g., <strong>HTTP requests</strong>), and then <strong>dispatch</strong> new <strong>actions</strong> based on the <strong>result</strong> (<strong>success</strong> or <strong>failure</strong>).</p><p>This keeps <strong>components</strong> and <strong>reducers</strong> <strong>clean</strong> and focused on <strong>pure logic</strong>.</p><p><strong>Side effects</strong> = anything outside <strong>reducers</strong> that can’t be <strong>pure</strong>, like:</p><ul><li><strong>API calls</strong> (<strong>HTTP requests</strong>)</li><li><strong>Navigation</strong> (<strong>Router</strong>)</li><li><strong>Local storage updates</strong></li><li><strong>Logging / Notifications</strong></li></ul>"
                }
            ],
            "subSections": []
        }
    ];
};