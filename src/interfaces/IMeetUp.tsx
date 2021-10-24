interface IMeetUp {
  title: string;
  description: string;
  date: string;
  time: string;
  img?: string;
  location: Tlocation;
  ownerId: number;
  linkFeedback: string;
  intend: "Dev" | "All" | "Product";
}
type Tlocation = {
  zoom?: string;
  location?: string;
};

export default IMeetUp;
