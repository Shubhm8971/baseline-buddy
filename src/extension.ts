import * as vscode from 'vscode';
import { BaselineHoverProvider } from './hoverProvider';

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

  // Hover provider (applies to JavaScript & TypeScript files for now)
  const hoverProvider = vscode.languages.registerHoverProvider(
    ['javascript', 'typescript'],
    new BaselineHoverProvider()
  );

  context.subscriptions.push(helloWorld, quickFix, hoverProvider);
}

export function deactivate() {
  console.log('Baseline Buddy deactivated ❌');
}
