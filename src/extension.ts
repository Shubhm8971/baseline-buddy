import * as vscode from 'vscode';
import { BaselineHoverProvider } from './hoverProvider';
import { BaselineQuickFixProvider } from './quickFixProvider';

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

  // Hover provider (JS + TS)
  const hoverProvider = vscode.languages.registerHoverProvider(
    ['javascript', 'typescript'],
    new BaselineHoverProvider()
  );

  // Quick Fix provider (JS + TS)
  const quickFixProvider = vscode.languages.registerCodeActionsProvider(
    ['javascript', 'typescript'],
    new BaselineQuickFixProvider(),
    { providedCodeActionKinds: [vscode.CodeActionKind.QuickFix] }
  );

  // Push all disposables
  context.subscriptions.push(helloWorld, quickFix, hoverProvider, quickFixProvider);
}

export function deactivate() {
  console.log('Baseline Buddy deactivated ❌');
}
