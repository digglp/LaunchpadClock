import { ILaunchpad } from "./ILaunchpad";

export class LaunchpadMini implements ILaunchpad {
  public write(data: number[]): void {
    console.log("Data is: ", data);
  }
}
