type tagType = {
  title: string,
}
type membersType = {
  name: string,
  img: string
}
export type ProjectState = {
  id: string;
  title: string;
  description: string | undefined;
  tags: tagType[] | undefined;
  members: membersType[]| undefined;
  dueDate: string | undefined;
  progress: number;
  status: string;
};
