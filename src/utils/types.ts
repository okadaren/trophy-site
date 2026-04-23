export type Category = "flag" | "plaque" | "trophy" | "ball" | "monument" | "certificate";
export type Filter = Category | "all";

export interface Prize {
  id: number;
  name: string;
  date: string;
  category: Category;
  event: string;
  recipient: string;
  description: string;
  image: string;
}
