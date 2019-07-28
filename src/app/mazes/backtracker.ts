import { Maze } from './maze';

export class Backtracker extends Maze {

  public create(board: boolean[][], row: number, col: number): void {
    const x0 = 0;
    const y0 = 0;
    board[y0 * 2 + 1][x0 * 2 + 1] = true;
    const stack = [[x0, y0]];
    while (stack.length !== 0) {
      const [x, y] = stack[stack.length - 1];

      const options = [];
      for (const direction of this.directions) {
        const r = (direction[1] + y) * 2 + 1;
        const c = (direction[0] + x) * 2 + 1;
        if (r > 0 && r < row - 1 && c > 0 && c < col - 1 && board[r][c] === false) {
          options.push([direction[0], direction[1]]);
        }
      }

      if (options.length > 0) {
        const [dx, dy] = options[Math.floor(Math.random() * options.length)];
        const xx = x + dx;
        const yy = y + dy;
        stack.push([xx, yy]);
        board[yy * 2 + 1][xx * 2 + 1] = true;
        board[dy + y * 2 + 1][dx + x * 2 + 1] = true;

      } else {
        stack.pop();
      }
    }
  }
}

// private recursiveBacktracker(): void {
//   // // init canvas
//   // const offset = this.pathWidth / 2 + this.wallWidth;
//   // const ctx = this.canvas.getContext('2d');
//   // this.canvas.width = this.pathCol * (this.pathWidth + this.wallWidth) + this.wallWidth;
//   // this.canvas.height = this.pathRow * (this.pathWidth + this.wallWidth) + this.wallWidth;
//   // ctx.fillStyle = this.wallColor;
//   // ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
//   // ctx.strokeStyle = this.pathColor;
//   // ctx.lineCap = 'square';
//   // ctx.lineWidth = this.pathWidth;
//   // ctx.beginPath();

//   const x0 = 0;
//   const y0 = 0;
//   this.board[y0 * 2 + 1][x0 * 2 + 1] = true;
//   const stack = [[x0, y0]];
//   while (stack.length !== 0) {
//     const [x, y] = stack[stack.length - 1];

//     // // move drawing point
//     // ctx.moveTo(x * (this.pathWidth + this.wallWidth) + offset,
//     //            y * (this.pathWidth + this.wallWidth) + offset);

//     const options = [];
//     for (const direction of this.directions) {
//       const r = (direction[1] + y) * 2 + 1;
//       const c = (direction[0] + x) * 2 + 1;
//       if (r > 0 && r < this.row - 1 && c > 0 && c < this.col - 1 && this.board[r][c] === false) {
//         options.push([direction[0], direction[1]]);
//       }
//     }

//     if (options.length > 0) {
//       const [dx, dy] = options[Math.floor(Math.random() * options.length)];
//       const xx = x + dx;
//       const yy = y + dy;
//       stack.push([xx, yy]);
//       this.board[yy * 2 + 1][xx * 2 + 1] = true;
//       this.board[dy + y * 2 + 1][dx + x * 2 + 1] = true;

//       // // draw line
//       // ctx.lineTo(xx * (this.pathWidth + this.wallWidth) + offset,
//       //            yy * (this.pathWidth + this.wallWidth) + offset);
//       // ctx.stroke();
//     } else {
//       stack.pop();
//     }
//   }
// }
