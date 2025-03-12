// MIT License

// Copyright (c) 2025 Josef Wachtler

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

function twoClickFilter(tcfPlaceholder) {
	const tcfWidth = tcfPlaceholder.data('width');
	const tcfHeight = tcfPlaceholder.data('height');
	const tcfSrc = tcfPlaceholder.data('iframe-src');
	const tcfAttributes = tcfPlaceholder.data('attributes');

    let attributes = '';
    for (const [key, value] of Object.entries(tcfAttributes)) {
        attributes += ' ' + key + '="' + value + '"';
    }
	
	let tcfIFrame = '<iframe src="' + tcfSrc + '" width="' + tcfWidth + '" height="' + tcfHeight + '"' + attributes + '></iframe>';
	
	tcfPlaceholder.after(tcfIFrame);
	tcfPlaceholder.hide();
}
 
$(document).ready(function() {
	$('.tcf-button').click(function() {
		twoClickFilter($(this).parent());
	})
});