type ActionType = 'Add' | 'Edit';
type TaskType = 'Section' | 'SubSection' | 'Topic';
type PositionType = 'Above' | 'Below';

interface INoteAction {
  header: string;
  type: ActionType;
  task: TaskType;
  index: number; // can be any number, you can restrict separately
}