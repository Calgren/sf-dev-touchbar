"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
  const reformat = vscode.commands.registerCommand("extension.reformat", () => {
    vscode.commands.executeCommand("editor.action.formatDocument");
  });
  const scratchOrgPush = vscode.commands.registerCommand(
    "extension.scratchOrgPush",
    () => {
      vscode.commands.executeCommand("sfdx.force.source.push");
    }
  );
  const scratchOrgPull = vscode.commands.registerCommand(
    "extension.scratchOrgPull",
    () => {
      vscode.commands.executeCommand("sfdx.force.source.pull");
    }
  );
  const focusTerminal = vscode.commands.registerCommand(
    "extension.focusTerminal",
    () => {
      vscode.commands.executeCommand(
        "workbench.action.terminal.toggleTerminal"
      );
    }
  );

  context.subscriptions.push(
    reformat,
    scratchOrgPush,
    scratchOrgPull,
    focusTerminal
  );
}
exports.activate = activate;
function deactivate() {}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map