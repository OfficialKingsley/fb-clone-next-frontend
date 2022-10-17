import { Url } from "url";

export interface PostInterface {
  id: Number;
  text: string;
  author: string | number;
  created_at: Date | undefined;
  image: string | Url | null | undefined;
  updated_at: Date | undefined;
}
