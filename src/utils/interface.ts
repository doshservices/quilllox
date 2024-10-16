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

export interface ITables {
    name: string
    _id: string,
}

export interface IStoreTable {
    amount: number | string
    table: string
    event: string
    date: string
    name: string
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
}