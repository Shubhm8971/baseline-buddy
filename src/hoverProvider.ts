import * as vscode from 'vscode';

export class BaselineHoverProvider implements vscode.HoverProvider {
  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.Hover> {
    const range = document.getWordRangeAtPosition(position);
    const word = document.getText(range);

    // Example: Show hover info if word is "baseline"
    if (word.toLowerCase() === 'baseline') {
      return new vscode.Hover('ℹ️ This is a baseline keyword recognized by Baseline Buddy.');
    }

    return undefined;
  }
}
