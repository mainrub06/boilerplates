interface IUser {
    name: string;
}

export function logName(value: IUser): void {
    console.log(value.name)
}
