"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const hoverProvider_1 = require("./hoverProvider");
const quickFixProvider_1 = require("./quickFixProvider");
function activate(context) {
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
    const hoverProvider = vscode.languages.registerHoverProvider(['javascript', 'typescript'], new hoverProvider_1.BaselineHoverProvider());
    // Quick Fix provider (JS + TS)
    const quickFixProvider = vscode.languages.registerCodeActionsProvider(['javascript', 'typescript'], new quickFixProvider_1.BaselineQuickFixProvider(), { providedCodeActionKinds: [vscode.CodeActionKind.QuickFix] });
    // Push all disposables
    context.subscriptions.push(helloWorld, quickFix, hoverProvider, quickFixProvider);
}
function deactivate() {
    console.log('Baseline Buddy deactivated ❌');
}
//# sourceMappingURL=extension.js.map