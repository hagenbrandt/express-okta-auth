import { Document } from "mongoose";

export type Recipe = Document & {
    title: string;
    ingredients: object;
    description: string[];
}