export interface ILogo {
    height?: string
    width?: string
}

export interface IUpcomingEvents {
    name: string
    day: string,
    month: string,
    date: number,
    image: string
    _id: string
}

export interface DropdownProps {
    options: number[];
    onSelect: (value: number) => void;
    maxWidth?: string
    placeholder: string
}

export interface DateDropdownProps {
    options: string[];
    onSelect: (value: string) => void;
    maxWidth?: string
    placeholder: string
}

export type ITables = {
    _id: string;
    name: string;
    numberOfGuest: number;
    maxNumberOfGuest: number;
    price: number;
    tableSection: string;
    createdAt: string;
    updatedAt: string;
    __v?: number;
    description: string;
    images: string[];
    amount?: number;
};

export interface IStoreTable {
    _id: string;
    name: string;
    numberOfGuest: number;
    maxNumberOfGuest: number;
    price: number;
    tableSection: string;
    createdAt: string;
    updatedAt: string;
    __v?: number;
    description: string;
    images: string[];
    amount?: number;
    date?: string
}

export interface IEvent {
    name: string
    coverImage: string
    date: string
    description: string
    startTime: string
    endTime: string
    image: string
    pg: number
    _id?: string
}