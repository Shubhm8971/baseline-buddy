import * as vscode from 'vscode';
import { HoverProvider } from './hoverProvider';

export function registerUI(context: vscode.ExtensionContext) {
  const selector = [
    { language: 'typescript', scheme: 'file' },
    { language: 'javascript', scheme: 'file' },
    { language: 'html', scheme: 'file' },
    { language: 'css', scheme: 'file' },
  ];

  const hoverProvider = vscode.languages.registerHoverProvider(selector, new HoverProvider());
  context.subscriptions.push(hoverProvider);
}