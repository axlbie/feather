// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class AddItemInBagSectionInput {
    id: string;
    name: string;
    bagSectionId: string;
    description: string;
    quantity: number;
    weight: number;
}

export class UpdateItemInBagSectionInput {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    bagSectionId?: Nullable<string>;
    quantity?: Nullable<number>;
    weight?: Nullable<number>;
}

export class UpdateBagSectionInput {
    id: string;
    name?: Nullable<string>;
}

export class AddBagSectionInput {
    id: string;
    name: string;
}

export class Item {
    id: string;
    name: string;
    description: string;
    quantity: number;
    weight: number;
    bagSectionId?: Nullable<string>;
}

export class BagSection {
    id: string;
    name: string;
    items: Item[];
}

export abstract class IQuery {
    abstract bagSection(id: string): Nullable<BagSection> | Promise<Nullable<BagSection>>;

    abstract bagSections(): BagSection[] | Promise<BagSection[]>;
}

export abstract class IMutation {
    abstract updateBagSection(bagSectionId?: Nullable<string>, input?: Nullable<UpdateBagSectionInput>): boolean | Promise<boolean>;

    abstract updateItemInBagSection(input?: Nullable<UpdateItemInBagSectionInput>): boolean | Promise<boolean>;

    abstract addItemInBagSection(input?: Nullable<AddItemInBagSectionInput>): boolean | Promise<boolean>;

    abstract deleteItemInBagSection(itemId: string): boolean | Promise<boolean>;

    abstract deleteBagSection(bagSectionId: string): boolean | Promise<boolean>;

    abstract addBagSection(input?: Nullable<AddBagSectionInput>): boolean | Promise<boolean>;
}

type Nullable<T> = T | null;
