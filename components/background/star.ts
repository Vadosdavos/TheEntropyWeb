import { getRandomNumber } from "utils/numbers/random";

const STARS_SPEED = 0.5;

export default class Star {
  private x: number;

  private y: number;

  private z: number;

  private centerX: number;

  private centerY: number;

  private focalLength: number;

  private canvasWidth: number;

  private radius: number;

  private color: string;

  private canvasContext: CanvasRenderingContext2D;

  constructor(
    canvasWidth: number,
    canvasHeight: number,
    canvasContext: CanvasRenderingContext2D,
    color: string,
  ) {
    this.centerX = canvasWidth / 2;
    this.centerY = canvasHeight / 2;
    this.focalLength = canvasWidth * 1;
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.z = Math.random() * canvasWidth;
    this.radius = Math.random() * 1.1;
    this.color = color;
    this.canvasWidth = canvasWidth;
    this.canvasContext = canvasContext;
  }

  draw() {
    let pixelX = (this.x - this.centerX) * (this.focalLength / this.z);
    pixelX += this.centerX;
    let pixelY = (this.y - this.centerY) * (this.focalLength / this.z);
    pixelY += this.centerY;
    this.canvasContext.beginPath();
    this.canvasContext.arc(pixelX, pixelY, this.radius, 0, Math.PI * 2);
    this.canvasContext.shadowBlur = getRandomNumber(3, 10);
    this.canvasContext.shadowColor = this.color;
    this.canvasContext.strokeStyle = this.color;
    this.canvasContext.fillStyle = "rgba( 255, 255, 255, .5)";
    this.canvasContext.fill();
    this.canvasContext.stroke();
    this.canvasContext.closePath();
  }

  update() {
    this.z -= STARS_SPEED;
    if (this.z <= 0) {
      this.z = this.canvasWidth;
    }
  }
}
