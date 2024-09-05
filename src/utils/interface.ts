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
    options: string[];
    onSelect: (value: string) => void;
    maxWidth?: string
    placeholder: string
}