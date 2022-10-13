export type ProjectState = {
  id: string;
  title: string;
  description: string | undefined;
  tags: string[] | undefined;
  members: string[] | undefined;
  dueDate: string | undefined;
  progress: number;
  status: string;
};
