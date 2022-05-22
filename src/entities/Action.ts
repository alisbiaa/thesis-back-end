import {Role} from "./Role";

class Action {
    protected user_role: Role ;

    constructor(user_role: Role) {
        this.user_role = user_role;
    }

    execute(data : any) : void {
        throw new Error("Method 'execute()' must be implemented.");
    }

    protected allowed(): boolean {
        throw new Error("Method 'allowed()' must be implemented.");
    }
}

interface IBan {
    user_id: string;
    student_id: string;
}

export class Ban extends Action {
    constructor(user_role: Role) {
        super(user_role);
    }

    execute(data: IBan) {
        super.execute(data);
    }

    allowed(): boolean {
        return this.user_role.isAdmin() || this.user_role.isTeacher();
    }
}


