import * as vscode from 'vscode';

export class BaselineQuickFixProvider implements vscode.CodeActionProvider {
  provideCodeActions(
    document: vscode.TextDocument,
    range: vscode.Range
  ): vscode.CodeAction[] | undefined {
    const word = document.getText(range);

    // Placeholder: always suggest replacing "oldFeature" with "newFeature"
    if (word === 'oldFeature') {
      const fix = new vscode.CodeAction(
        'Replace with newFeature (Baseline safe)',
        vscode.CodeActionKind.QuickFix
      );
      fix.edit = new vscode.WorkspaceEdit();
      fix.edit.replace(document.uri, range, 'newFeature');
      return [fix];
    }
    return;
  }
}
