import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Baseline Buddy is now active!');

  // Hello World command
  let helloWorld = vscode.commands.registerCommand('baseline-buddy.helloWorld', () => {
    vscode.window.showInformationMessage('👋 Hello from Baseline Buddy!');
  });

  // Quick Fix placeholder command
  let quickFix = vscode.commands.registerCommand('baseline-buddy.quickFix', () => {
    vscode.window.showInformationMessage('✅ Quick Fix applied (placeholder)!');
  });

  // Hover provider (baseline suggestion)
  const hoverProvider = vscode.languages.registerHoverProvider(
    { scheme: 'file', language: 'javascript' }, // can extend to css/html later
    {
      provideHover(document, position) {
        const word = document.getText(document.getWordRangeAtPosition(position));

        // Example: simple baseline feature check
        if (word.toLowerCase() === 'flexbox') {
          return new vscode.Hover(
            `⚡ Flexbox is widely supported across modern browsers. [Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)`
          );
        }

        if (word.toLowerCase() === 'grid') {
          return new vscode.Hover(
            `⚡ CSS Grid is supported in all modern browsers. Watch out for older IE versions. [Details](https://caniuse.com/css-grid)`
          );
        }

        return undefined;
      }
    }
  );

  context.subscriptions.push(helloWorld, quickFix, hoverProvider);
}

export function deactivate() {
  console.log('Baseline Buddy deactivated ❌');
}
