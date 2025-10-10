export const htmlList = () => {
    return [
        {
            "name": "<p><strong>Basic</strong></p>",
            "sectionId": 41,
            "noteType": "HTML",
            "topics": [
                {
                    "text": "<p>What is HTML?</p>",
                    "sectionId": 41,
                    "subSectionId": -1,
                    "noteType": "HTML",
                    "topicId": 180,
                    "description": "<p>HTML is a <strong>markup language</strong>, not a programming language.</p><p>It uses <strong>tags</strong> (like <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;div&gt;</code>, etc.) to <strong>define the structure and content</strong> of a web page.</p></br><p>Here’s a simple HTML example:</p></br><p>&lt;!DOCTYPE html&gt;</p><p>&lt;html&gt;</p><p>  &lt;head&gt;</p><p>    &lt;title&gt;My First Web Page&lt;/title&gt;</p><p>  &lt;/head&gt;</p><p>  &lt;body&gt;</p><p>    &lt;h1&gt;Welcome to My Website&lt;/h1&gt;</p><p>    &lt;p&gt;This is a paragraph of text.&lt;/p&gt;</p><p>    &lt;a href=&quot;https://www.google.com&quot;&gt;Go to Google&lt;/a&gt;</p><p>  &lt;/body&gt;</p><p>&lt;/html&gt;</p></br><p><strong>Explanation:</strong></p><ul><li><code>&lt;!DOCTYPE html&gt;</code> → Defines the document type (HTML5)</li><li><code>&lt;html&gt;</code> → Root element</li><li><code>&lt;head&gt;</code> → Contains meta info (like title, links, scripts)</li><li><code>&lt;body&gt;</code> → Contains visible page content</li></ul></br><p>🔹<strong>HTML Works With:</strong></p><p><strong>CSS</strong> → for styling and layout</p><p><strong>JavaScript</strong> → for interactivity and dynamic behavior</p>"
                },
                {
                    "text": "<p>What is the difference between inline, block, and inline-block elements?</p>",
                    "sectionId": 41,
                    "subSectionId": -1,
                    "noteType": "HTML",
                    "topicId": 181,
                    "description": "<p><strong>Inline</strong>: Does <strong>not start on a new line</strong> (<code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>).</p></br><p><strong>Block</strong>: <strong>Occupies full width</strong>, <strong>starts on new line</strong> (<code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>).</p></br><p><strong>Inline-block</strong>: <strong>Behaves like inline</strong> but <strong>supports block properties</strong> (<strong>height/width</strong>).</p>"
                },
                {
                    "text": "<p>What are semantic HTML tags? Can you give examples?</p>",
                    "sectionId": 41,
                    "subSectionId": -1,
                    "noteType": "HTML",
                    "topicId": 182,
                    "description": "<p><strong>Semantic HTML tags</strong> describe the <strong>meaning of content</strong> (<strong>improve SEO &amp; accessibility</strong>).</p></br><p><strong>Examples:</strong> <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code>.</p>"
                },
                {
                    "text": "<p>What is SEO?</p>",
                    "sectionId": 41,
                    "subSectionId": -1,
                    "noteType": "HTML",
                    "topicId": 183,
                    "description": "<p><strong>SEO (Search Engine Optimization)</strong> is the practice of <strong>improving a website’s visibility</strong> in <strong>search engines</strong> through <strong>content</strong>, <strong>structure</strong>, and <strong>performance optimization</strong>.</p>"
                },
                {
                    "text": "<p>What is a Web Component?</p>",
                    "sectionId": 41,
                    "subSectionId": -1,
                    "noteType": "HTML",
                    "topicId": 184,
                    "description": "<p>A <strong>Web Component</strong> is a <strong>set of web platform features</strong> that allows you to create <strong>reusable, encapsulated, and custom HTML elements</strong> that work across modern browsers.</p>"
                },
                {
                    "text": "<p>Difference between id and class attributes in HTML?</p>",
                    "sectionId": 41,
                    "subSectionId": -1,
                    "noteType": "HTML",
                    "topicId": 185,
                    "description": "<p><strong>id:</strong> <strong>Unique per page</strong>, used for <strong>specific elements</strong>.</p></br><p><strong>class:</strong> Can be <strong>shared by multiple elements</strong>, used for <strong>styling</strong> and <strong>grouping</strong>.</p>"
                },
                {
                    "text": "<p>What are data- attributes* in HTML? How are they useful in Angular?</p>",
                    "sectionId": 41,
                    "subSectionId": -1,
                    "noteType": "HTML",
                    "topicId": 186,
                    "description": "<p><strong>Custom attributes</strong> (e.g., <code>data-user-id=&quot;123&quot;</code>) used to <strong>store extra data</strong> without <strong>cluttering code</strong>.</p></br><p> 👉 <strong>Useful in Angular</strong> for <strong>passing small dataset</strong> to <strong>components</strong>.</p>"
                },
                {
                    "text": "<p>Difference between &lt;div&gt; and &lt;span&gt; tags?</p>",
                    "sectionId": 41,
                    "subSectionId": -1,
                    "noteType": "HTML",
                    "topicId": 187,
                    "description": "<p><code>&lt;div&gt;</code>: <strong>Block-level container</strong>.</p></br><p> <code>&lt;span&gt;</code>: <strong>Inline container</strong> for <strong>styling specific text/part</strong>.</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>Form and Input</strong></p>",
            "sectionId": 42,
            "noteType": "HTML",
            "topics": [
                {
                    "text": "<p>What is the difference between &lt;input type=&quot;text&quot;&gt; and &lt;textarea&gt;?</p>",
                    "sectionId": 42,
                    "subSectionId": -1,
                    "noteType": "HTML",
                    "topicId": 188,
                    "description": "<p><code>&lt;input type=&quot;text&quot;&gt;</code>: <strong>Single line input</strong>.</p></br><p> <code>&lt;textarea&gt;</code>: <strong>Multi-line input</strong>.</p>"
                },
                {
                    "text": "<p>Difference between &lt;button&gt; and &lt;input type=&quot;button&quot;&gt;?</p>",
                    "sectionId": 42,
                    "subSectionId": -1,
                    "noteType": "HTML",
                    "topicId": 189,
                    "description": "<p><code>&lt;button&gt;</code>: <strong>More flexible</strong> (can contain <strong>HTML inside</strong>, default type is <strong>&quot;submit&quot;</strong>).</p></br><p> <code>&lt;input type=&quot;button&quot;&gt;</code>: <strong>Fixed</strong>, only <strong>text value</strong>.</p>"
                },
                {
                    "text": "<p>What is the difference between GET and POST form methods?</p>",
                    "sectionId": 42,
                    "subSectionId": -1,
                    "noteType": "HTML",
                    "topicId": 190,
                    "description": "<p><strong>GET:</strong> <strong>Data visible in URL</strong> (<strong>not secure</strong>, <strong>limited length</strong>).</p></br><p> <strong>POST:</strong> <strong>Data hidden in body</strong> (<strong>secure</strong>, used for <strong>sensitive data</strong>).</p>"
                }
            ],
            "subSections": []
        },
        {
            "name": "<p><strong>HTML 5</strong></p>",
            "sectionId": 43,
            "noteType": "HTML",
            "topics": [
                {
                    "text": "<p>What is srcset?</p>",
                    "sectionId": 43,
                    "subSectionId": -1,
                    "noteType": "HTML",
                    "topicId": 191,
                    "description": "<p><code><strong>srcset</strong></code><strong> attribute</strong> allows you to provide <strong>multiple versions of the same image</strong> for <strong>different screen sizes</strong> and <strong>resolutions</strong>.</p><p>The <strong>browser automatically chooses</strong> the <strong>best image</strong> to load depending on the <strong>device DPI (pixel density)</strong> and <strong>viewport width</strong>.</p></br><pre data-language=\"plain\">\n&lt;img \n  src=&quot;image-small.jpg&quot; \n  srcset=&quot;image-small.jpg 480w, image-medium.jpg 800w, image-large.jpg 1200w&quot; \n</pre><p>  alt=&quot;Sample Image&quot;&gt;</p></br><p>👉 <strong>Explanation:</strong></p><ul><li><strong>image-small.jpg 480w</strong> → use when <strong>viewport ≤480px</strong>.</li><li><strong>image-medium.jpg 800w</strong> → use when <strong>viewport ≤800px</strong>.</li><li><strong>image-large.jpg 1200w</strong> → use when <strong>viewport ≤1200px</strong>.</li></ul><p><strong>Browser picks the most suitable image automatically.</strong></p></br>"
                },
                {
                    "text": "<p>What is the difference between src and href in HTML?</p>",
                    "sectionId": 43,
                    "subSectionId": -1,
                    "noteType": "HTML",
                    "topicId": 192,
                    "description": "<p><code><strong>src</strong></code>: Tells the <strong>browser</strong> to <strong>embed the resource</strong> at that location (<strong>replace the element’s content</strong>). Example: <code>&lt;img src=&quot;image.png&quot;&gt;</code>.</p></br><p><code><strong>href</strong></code>: Tells the <strong>browser</strong> to <strong>navigate</strong> or <strong>link</strong> to that <strong>resource</strong>. Example: <code>&lt;a href=&quot;page.html&quot;&gt;</code>.</p>"
                },
                {
                    "text": "<p>What tags commonly use the src attribute?</p>",
                    "sectionId": 43,
                    "subSectionId": -1,
                    "noteType": "HTML",
                    "topicId": 193,
                    "description": "<p><code>&lt;img src=&quot;...&quot;&gt;</code> → <strong>for images</strong>.</p><p><code>&lt;script src=&quot;...&quot;&gt;</code> → <strong>for JavaScript files</strong>.</p><p><code>&lt;iframe src=&quot;...&quot;&gt;</code> → <strong>for embedding pages</strong>.</p><p><code>&lt;audio src=&quot;...&quot;&gt;</code> / <code>&lt;video src=&quot;...&quot;&gt;</code> → <strong>for media</strong>.</p><p><code>&lt;source src=&quot;...&quot;&gt;</code> → <strong>inside &lt;audio&gt; or &lt;video&gt;</strong>.</p>"
                }
            ],
            "subSections": []
        }
    ];
};