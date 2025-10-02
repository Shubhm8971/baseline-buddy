import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Baseline Buddy is now active!');

	// Register Hello World command
	let helloWorld = vscode.commands.registerCommand('baseline-buddy.helloWorld', () => {
		vscode.window.showInformationMessage('Hello from Baseline Buddy!');
	});
	context.subscriptions.push(helloWorld);

	// Register Quick Fix placeholder command
	let quickFix = vscode.commands.registerCommand('baseline-buddy.quickFix', () => {
		vscode.window.showInformationMessage('✅ Quick Fix applied (placeholder)!');
	});
	context.subscriptions.push(quickFix);
}

export function deactivate() {}
