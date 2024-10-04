# ChatGPT Conversation Backup Extension

Chrome Extension for Complete ChatGPT Conversation Backup

**Effortlessly backup your entire ChatGPT conversation history with a single click.**

A single client-side script to backup your entire conversation history on [chatgpt.com](https://chatgpt.com). The output is a single JSON file of your history.

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/muaz742/chatgpt-backup-extension.git
    ```
2. Open Chrome and navigate to the Extensions Management page by typing `chrome://extensions` in the address bar.
3. Enable **Developer Mode** by toggling the switch on the top right of the page.
4. Click the **Load unpacked** button and select the directory where you cloned this repository.

## Usage

1. Go to [https://chatgpt.com](https://chatgpt.com) and make sure you are logged in.
2. Click on the extension icon in the browser toolbar.
3. Click on the **Backup** button.
4. Wait for the backup process to complete. You can monitor progress in the browser console:
   - Press `F12` to open Developer Tools.
   - Go to the **Console** tab to see real-time updates.
5. Once completed, the backup will automatically download as a JSON file.
6. That's it! Your backup is complete.

### Handling Backup Errors

If the backup fails at any point, check the console logs for the offset at which it failed. You can manually adjust the offset values in the script to resume from a specific point.

To adjust the script offsets:
```js
// backup.js
const START_OFFSET = 0;
const STOP_OFFSET = -1;
```

## How it Works

This extension uses the same frontend API that your browser uses when interacting with [chatgpt.com](https://chatgpt.com). It respects rate limits and allows you to backup your conversation history in segments if necessary.

## Key Benefits

- Works on Chrome, Firefox, and Opera.
- Fully client-side; the code is auditable in the `backup.js` file.
- Handles rate limits gracefully.
- Easily adjust offsets to divide large backups into smaller chunks.

## Use Cases

- Backup your ChatGPT conversation history offline.
- Useful for reviewing conversations when the service is unavailable.
- Provides a read-only backup that respects OpenAI's terms and conditions.

## Notes

- Tested with over 700 conversations.
- Backup rate: ~60 conversations per minute.
- Keep your browser tab open (it doesn't need to be in focus).
- On Firefox, you may need to allow pasting before using the script.

## Contributors

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License. See the [LICENSE](LICENSE) file for details.

This project is a fork of the [chatgpt-backup](https://github.com/abacaj/chatgpt-backup) repository by [@abacaj](https://github.com/abacaj), and has been developed with additional features and improvements.
