class Command {
    execute() {}
}

export class ConcreteCommand extends Command {
    constructor(line, layer) {
        super();
        this.line = line;
        this.layer = layer;
    }

    execute() {
        this.layer.add(this.line);
    }

    undo() {
        this.line.remove();
    }
}
export default ConcreteCommand;
