export interface ILogo {
    height?: string
    width?: string
}

export interface IUpcomingEvents {
    name: string
    day: string,
    month: string,
    date: number,
    img: string
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

export interface ITicket {
    borderColor: string
    position: string
    ticket: {
        type: string
        price: number
    }[]
}