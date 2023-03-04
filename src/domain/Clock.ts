import { LaunchpadMini } from "./../infrastructure/LaunchpadMini";
import { ILaunchpad } from "../infrastructure/ILaunchpad";
import { GridSection } from "./GridManager";
import { TextManager } from "./TextManager";
import { TickAnimation } from "./TickAnimation";

export class Clock {
  private textManager: TextManager;
  private tickAnimation: TickAnimation;

  private oldHours: number[];
  private oldMinutes: number[];

  constructor(launchpad: ILaunchpad) {
    this.textManager = new TextManager(launchpad);
    this.tickAnimation = new TickAnimation(launchpad);
  }

  public start() {
    setInterval(async () => {
      const now = new Date();
      const hours = this.getDigits(now.getHours().toString().padStart(2, "0"));
      const minutes = this.getDigits(now.getMinutes().toString().padStart(2, "0"));

      //  await numberBuilder.tick();
      //only update if the time has changed

      this.setHoursOnLaunchpad(hours);
      this.setMinutesOnLaunchpad(minutes);
      this.tickAnimation.animateTick();
    }, 1000);
  }

  private getDigits(strNumber: string): number[] {
    return [parseInt(strNumber[0]), parseInt(strNumber[1])];
  }

  private setHoursOnLaunchpad(hours: number[]) {
    if (this.oldHours === undefined) this.oldHours = new Array<number>(2);

    if (this.oldHours[0] !== hours[0] || this.oldHours[1] !== hours[1]) {
      this.oldHours = hours;

      this.textManager.SetNumberAtSection(hours[0], GridSection.TOP_LEFT_SECTION, LaunchpadMini.GREEN_COLOUR);
      this.textManager.SetNumberAtSection(hours[1], GridSection.TOP_RIGHT_SECTION, LaunchpadMini.ORANGE_COLOUR);
    }
  }

  private setMinutesOnLaunchpad(minutes: number[]) {
    if (this.oldMinutes === undefined) this.oldMinutes = new Array<number>(2);

    if (this.oldMinutes[0] !== minutes[0] || this.oldMinutes[1] !== minutes[1]) {
      this.oldMinutes = minutes;

      this.textManager.SetNumberAtSection(minutes[0], GridSection.BOTTOM_LEFT_SECTION, LaunchpadMini.YELLOW_COLOUR);
      this.textManager.SetNumberAtSection(minutes[1], GridSection.BOTTOM_RIGHT_SECTION, LaunchpadMini.RED_COLOUR);
    }
  }
}
