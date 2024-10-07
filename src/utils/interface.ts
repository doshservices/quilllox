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

export interface ITicket {
    borderColor: string
    position: string
    ticket: {
        type: string
        price: number
    }[]
}

export interface IEvent {
    name: string
    coverImage: string
    date: string
    description: string
    startTime: string
    endTime: string
    image: string
}