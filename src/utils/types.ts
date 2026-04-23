export type Category = "flag" | "plaque" | "trophy" | "ball" | "monument" | "certificate";
export type Filter = Category | "all";

export interface Prize {
  id: string;
  name: string;
  shortName: string;
  date: string;
  category: Category;
  achievement: string;
  event: string;
  recipient: string;
  description: string;
}
