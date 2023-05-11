import {ID} from "@/contracts/ID";
import {Author} from "@/models/Author";

export interface Book {
    id?: ID;
    title: string;
    page_amount: number;

    cover_image?: string | null;

    description?: string | null;
    authors?: Author[] | null;
}