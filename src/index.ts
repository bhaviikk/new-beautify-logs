export class Log {
  static success(message: string): void {
    console.log(`%c ${message}`, 'color:green');
  }
  static error(message: string): void {
    console.log(`%c ${message}`, 'color:red');
  }
  static warn(message: string): void {
    console.log(`%c ${message}`, 'color:orange');
  }
  static info(message: string): void {
    console.log(`%c ${message}`, 'color:black; background-color:yellow');
  }
  static custom(message: string, color: string, background: string): void {
    if (color === undefined || color === null || color === "") {
      color = "black";
    }
    if (background === undefined || background === null || background === "") {
      color = "white";
    }
    console.log(
      `%c ${message}`, `color:${color}; background-color:${background}`
    );
  }
}
