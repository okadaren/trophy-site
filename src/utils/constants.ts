import data from "../assets/models.json";
import type { Category, Filter, Prize } from "./types";
export const CATEGORIES: Filter[] = [
  "all",
  "flag",
  "plaque",
  "trophy",
  "ball",
  "monument",
  "certificate",
];
export const PRIZES = data as Prize[];
export const CATEGORY_LABELS: Record<Category, string> = {
  flag: "優勝旗・記念旗",
  plaque: "優勝楯",
  trophy: "優勝杯・トロフィー",
  ball: "ウイニングボール",
  monument: "記念碑",
  certificate: "賞状",
};
