# ChatGPT Conversation Backup Extension

Chrome Extension for Complete ChatGPT Conversation Backup

**Effortlessly backup your entire ChatGPT conversation history with a single click.**

A single client side script to backup your entire conversation history on [chatgpt.com](https://chatgpt.com). The output is a single JSON file of your history.

## How to use

1. Clone this repository.
1. Open the Extension Management page by navigating to `chrome://extensions`.
2. Enable Developer Mode by clicking the toggle switch next to Developer mode.
3. Click the Load unpacked button and select the extension directory. (Cloned local repository directory)
1. Visit [https://chatgpt.com](https://chatgpt.com)
2. Make sure you are logged in
3. Click on the extension icon
4. Click on the "Backup" button
5. Wait for the backup to complete
6. Download the backup file
7. Done!

If you what see the progress of the backup:
1. Open chrome console or firefox console (F12 on keyboard)
2. Click on "Console" tab
   ![Progress](assets/progress.png)

If it fails at any point you can check the console logs to see the offset it failed at

You can run from any offset by adjusting the script offsets found at the bottom of the script:

```js
// backup.js
const START_OFFSET = 0;
const STOP_OFFSET = -1;
```

## How it works

This uses the same frontend API that is used by your client browser.

## Benefits

Some of the key benefits:

- Nothing to download or install
- Tested on chrome, firefox
- Fully client side, single script, copy paste to run
- Respects rate limits
- Fails early
- Adjust offsets if you have many conversations, ex. start at 0 to 500, then run 500 to 1000
- **Fully auditable code in the backup.js file, no third parties**

## Use cases

- Backup your conversation history offline
- The model output from the current OAI terms state that they belong to you
- Useful if you need to look back when the service is down
- Intended as a read-only backup (the ids aren't stored)

## Notes

- Tested with 700+ conversations
- Current rate is 60 conversations/minute
- Roughly 10 minutes for 600 conversations
- Roughly 1 hour for 6000 conversations
- This is to respect the OAI API rate limits
- Keep your browser tab open, you don't need it to be focused for this to finish
- Chrome **may** prompt you to download the file once it's completed
- Tested on firefox, requires you to type `allow pasting` before you can paste the script

## Contributors

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

- [@FredySandoval](https://github.com/FredySandoval) - Preview backups feature

## License

[MIT](https://choosealicense.com/licenses/mit/)
