import {ID} from "@/models/ID";
import {Timestamps} from "@/models/Timestamps";
import {Book} from "@/models/Book";

export interface Author extends Timestamps {
    id?: ID;
    name: string;

    books?: Book[] | null;
}
