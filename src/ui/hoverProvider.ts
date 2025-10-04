import * as vscode from 'vscode';
import { getFeatureCompatibility } from '../data/baselineData';

export class HoverProvider implements vscode.HoverProvider {
  async provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): Promise<vscode.Hover | null> {
    const range = document.getWordRangeAtPosition(position, /[\w-]+/);
    const word = document.getText(range);

    if (!word) return null;

    // Fetch compatibility info for the hovered feature
    const featureInfo = await getFeatureCompatibility(word);

    if (!featureInfo) return null;

    // Build hover content
    const markdown = new vscode.MarkdownString();
    markdown.appendMarkdown(`### 🌐 Browser Compatibility\n`);
    markdown.appendMarkdown(`| Browser | Support |\n`);
    markdown.appendMarkdown(`|----------|----------|\n`);
    for (const [browser, status] of Object.entries(featureInfo.support)) {
      markdown.appendMarkdown(`| ${browser} | ${status} |\n`);
    }

    if (featureInfo.fallback) {
      markdown.appendMarkdown(`\n💡 **Suggested Fallback:** \`${featureInfo.fallback}\`\n`);
    }

    markdown.isTrusted = true;
    return new vscode.Hover(markdown, range);
  }
}
