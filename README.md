# Two Click Filter using jQuery

This is a very simple javascript library using jQuery to implement a
*Two Click Filter* to embed foreign content on your webpage.

## Usage

1. Place the file `twoclickfilter.js` in your project.
2. Load jQuery and the library on your html page at the end of the `body` tag. E.g.:

```html
<script src="https://code.jquery.com/jquery-3.7.1.js" 
    integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" 
    crossorigin="anonymous"></script>
<script src="twoclickfilter.js"></script>
```

3. Create a `div` element as a placeholder which contains some text and a button to load the content.
4. The placeholder `div` is required to have the class `tcf-placeholder`.
5. The following `data` attributes are required in the placeholder `div` element:
  - `data-iframe-src`: the URL to load
  - `data-width`: the width of the embedded page
  - `data-height`: the height of the embedded page
  - `data-attributes`: additional attributes for the `iframe` encoded as json where the key is the name of the attribute and the value is the value of the attribute
6. The button to load the content is required to have the class `tcf-button.
7. Example: 

```html
<div class="tcf-placeholder"
    data-iframe-src="https://www.youtube-nocookie.com/embed/DI9hty_iT4Q?si=3iwHp4QWtJjLxAr_"
    data-width="100%" data-height="400px" 
    data-attributes='{"frameborder": "0", "allow": "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy": "strict-origin-when-cross-origin", "allowfullscreen": "1"}' 
    style="width: 100%; min-height: 400px;">
    <h4>Load Youtube</h4>
    <p>
        If you want to see the video on this page, your personal data will be transmitted to the provider of the video. 
        Please read the privacy policy of the provider before loading the video:
        <a href="https://policies.google.com/privacy" 
        target="_blank" title="https://policies.google.com/privacy">https://policies.google.com/privacy</a>
    </p>
    <button type="button" class="tcf-button">
        Load Video
    </button>
</div>
```

For a complete example see [example.html](example.html)
