import { Maze } from './maze';
import { Backtracker } from './backtracker';
import { Prims } from './prims';
import { GrowingTree } from './growing-tree';

enum MazeType {
  GrowingTree,
  Prims,
  Backtracker
}

export const MAZE_OPTIIONS = [
  { id: MazeType.GrowingTree, name: 'Growing Tree' },
  { id: MazeType.Prims, name: 'Prim\'s' },
  { id: MazeType.Backtracker, name: 'Backtracker' }
];

export class MazeFactory {

  static build(type: number): Maze {
    let maze = null;
    switch (type) {
      case MazeType.GrowingTree:
        maze = new GrowingTree();
        break;
      case MazeType.Prims:
        maze = new Prims();
        break;
      case MazeType.Backtracker:
        maze = new Backtracker();
        break;
      default:
        maze = new GrowingTree();
    }
    return maze;
  }

}
