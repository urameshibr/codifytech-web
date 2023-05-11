import {ID} from "@/contracts/ID";
import {Timestamps} from "@/contracts/Timestamps";
import {Book} from "@/models/Book";

export interface Author extends Timestamps {
    id?: ID;
    name: string;

    books?: Book[] | null;
}
