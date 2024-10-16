import Stack from "./stack";

export class UndoManager {
    constructor() {
        this.undoStack = new Stack();
        this.redoStack = new Stack();
    }

    execute(cmd) {
        this.undoStack.push(cmd);
        cmd.execute();
    }

    canUndo() {
        return !this.undoStack.isEmpty();
    }

    canRedo() {
        return !this.redoStack.isEmpty();
    }

    undo() {
        if (this.canUndo()) {
            let cmd = this.undoStack.pop();
            this.redoStack.push(cmd);
            cmd.undo();
        }
    }

    redo() {
        if (this.canRedo()) {
            let cmd = this.redoStack.pop();
            this.undoStack.push(cmd);
            cmd.execute();
        }
    }
}
export default UndoManager;
