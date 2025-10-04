// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// 👉 Import Baseline Buddy UI logic (hover provider & highlights)
import { registerUI } from './ui';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "baseline-buddy" is now active!');
	console.log('✅ Baseline Buddy hover and compatibility features initializing...');

	// 🔹 Register the Baseline Buddy UI (hover tooltips, highlights, etc.)
	registerUI(context);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('baseline-buddy.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from baseline-buddy!');
	});

	context.subscriptions.push(disposable);

	// Optional: quick feedback on activation
	vscode.window.showInformationMessage('🚀 Baseline Buddy activated — hover over web features to see compatibility!');
}

// This method is called when your extension is deactivated
export function deactivate() {
	console.log('🧹 Baseline Buddy deactivated');
}
