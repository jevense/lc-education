export declare interface YearItem {
    label: string;
    value: string;
    children?: YearItem[];
}

export declare interface NameCodeItem {
    name: string;
    code: string;
}

export declare interface ProvinceItem {
    initial: string;
    items: NameCodeItem[];
}

export declare interface ProductItem {
    id: string;
    name: string;
    cover: string;
    price: number;
    count?: number;
    checked?: boolean;
}
