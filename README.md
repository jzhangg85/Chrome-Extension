# Article Summarizer

This implementation of a Chrome Extension processes an active tab containing an article and outputs the article's title, url, summary, keywords, and character count. The extension utilizes the text processing API SMMRY.  

## Instructions and Functionality
From the GitHub page, clone the repository (a folder named article_summarizer) containing four files: manifest.json, popup.html, popup.js, and icon.png. Open up the Chrome browser, open More Tools -> Extensions. In the Extensions tab, enable Developer Mode and click "Load unpacked extension." Select the folder named article_summarizer. You should see an icon of a red book appear next to the URL bar in the browser. 

While on a long article, click the red icon and the "Summarize Article" button. The extension will return the article summary with other relevant information from the article.  

Note that in the limited usage of the text processing API SMMRY, the API is limited to 10 requests daily. 

## Considerations
If given more time, the extension's API key for SMMRY would be encrypted for security purposes. Also, the functionality of the extension would be increased to store a history of summarized articles using a web database API.   