import { useState, useEffect, useRef } from 'react';
import { DateDropdownProps } from '../../utils/interface';

const DateDropdown = ({ options, onSelect, placeholder, maxWidth }: DateDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownRef?.current && !dropdownRef?.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option: string) => {
        setSelectedValue(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className={`relative inline-block w-full ${maxWidth}`} ref={dropdownRef}>
            <button
                type="button"
                className="inline-flex items-center gap-2 w-full text-light400 font-montserrat bg-transparent border border-red-primary rounded-[4px] shadow-sm py-[9px] pl-3 pr-10 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-yellow-300 focus:border-yellow300 text-sm"
                onClick={handleToggleDropdown}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.42315 17.9167C4.00217 17.9167 3.64585 17.7708 3.35419 17.4792C3.06252 17.1875 2.91669 16.8312 2.91669 16.4102V5.25647C2.91669 4.8355 3.06252 4.47918 3.35419 4.18751C3.64585 3.89585 4.00217 3.75001 4.42315 3.75001H5.5769V1.9873H6.85898V3.75001H13.1731V1.9873H14.4231V3.75001H15.5769C15.9979 3.75001 16.3542 3.89585 16.6459 4.18751C16.9375 4.47918 17.0834 4.8355 17.0834 5.25647V16.4102C17.0834 16.8312 16.9375 17.1875 16.6459 17.4792C16.3542 17.7708 15.9979 17.9167 15.5769 17.9167H4.42315ZM4.42315 16.6667H15.5769C15.6411 16.6667 15.6998 16.6399 15.7531 16.5865C15.8066 16.5331 15.8334 16.4744 15.8334 16.4102V8.5898H4.16669V16.4102C4.16669 16.4744 4.19342 16.5331 4.2469 16.5865C4.30023 16.6399 4.35898 16.6667 4.42315 16.6667ZM4.16669 7.3398H15.8334V5.25647C15.8334 5.1923 15.8066 5.13355 15.7531 5.08022C15.6998 5.02675 15.6411 5.00001 15.5769 5.00001H4.42315C4.35898 5.00001 4.30023 5.02675 4.2469 5.08022C4.19342 5.13355 4.16669 5.1923 4.16669 5.25647V7.3398ZM10 11.7308C9.79599 11.7308 9.6221 11.659 9.47835 11.5152C9.33474 11.3716 9.26294 11.1977 9.26294 10.9936C9.26294 10.7895 9.33474 10.6156 9.47835 10.4719C9.6221 10.3283 9.79599 10.2565 10 10.2565C10.204 10.2565 10.3779 10.3283 10.5217 10.4719C10.6653 10.6156 10.7371 10.7895 10.7371 10.9936C10.7371 11.1977 10.6653 11.3716 10.5217 11.5152C10.3779 11.659 10.204 11.7308 10 11.7308ZM6.66669 11.7308C6.46266 11.7308 6.28877 11.659 6.14502 11.5152C6.00141 11.3716 5.9296 11.1977 5.9296 10.9936C5.9296 10.7895 6.00141 10.6156 6.14502 10.4719C6.28877 10.3283 6.46266 10.2565 6.66669 10.2565C6.87071 10.2565 7.0446 10.3283 7.18835 10.4719C7.33196 10.6156 7.40377 10.7895 7.40377 10.9936C7.40377 11.1977 7.33196 11.3716 7.18835 11.5152C7.0446 11.659 6.87071 11.7308 6.66669 11.7308ZM13.3334 11.7308C13.1293 11.7308 12.9554 11.659 12.8117 11.5152C12.6681 11.3716 12.5963 11.1977 12.5963 10.9936C12.5963 10.7895 12.6681 10.6156 12.8117 10.4719C12.9554 10.3283 13.1293 10.2565 13.3334 10.2565C13.5374 10.2565 13.7113 10.3283 13.855 10.4719C13.9986 10.6156 14.0704 10.7895 14.0704 10.9936C14.0704 11.1977 13.9986 11.3716 13.855 11.5152C13.7113 11.659 13.5374 11.7308 13.3334 11.7308ZM10 15C9.79599 15 9.6221 14.9281 9.47835 14.7844C9.33474 14.6408 9.26294 14.467 9.26294 14.2629C9.26294 14.0588 9.33474 13.8849 9.47835 13.7413C9.6221 13.5975 9.79599 13.5256 10 13.5256C10.204 13.5256 10.3779 13.5975 10.5217 13.7413C10.6653 13.8849 10.7371 14.0588 10.7371 14.2629C10.7371 14.467 10.6653 14.6408 10.5217 14.7844C10.3779 14.9281 10.204 15 10 15ZM6.66669 15C6.46266 15 6.28877 14.9281 6.14502 14.7844C6.00141 14.6408 5.9296 14.467 5.9296 14.2629C5.9296 14.0588 6.00141 13.8849 6.14502 13.7413C6.28877 13.5975 6.46266 13.5256 6.66669 13.5256C6.87071 13.5256 7.0446 13.5975 7.18835 13.7413C7.33196 13.8849 7.40377 14.0588 7.40377 14.2629C7.40377 14.467 7.33196 14.6408 7.18835 14.7844C7.0446 14.9281 6.87071 15 6.66669 15ZM13.3334 15C13.1293 15 12.9554 14.9281 12.8117 14.7844C12.6681 14.6408 12.5963 14.467 12.5963 14.2629C12.5963 14.0588 12.6681 13.8849 12.8117 13.7413C12.9554 13.5975 13.1293 13.5256 13.3334 13.5256C13.5374 13.5256 13.7113 13.5975 13.855 13.7413C13.9986 13.8849 14.0704 14.0588 14.0704 14.2629C14.0704 14.467 13.9986 14.6408 13.855 14.7844C13.7113 14.9281 13.5374 15 13.3334 15Z" fill="#E8EAED" />
                </svg>
                {selectedValue || `${placeholder}`}
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9999 15.0385L6.34619 9.3845L7.39994 8.33075L11.9999 12.9308L16.5999 8.33075L17.6537 9.3845L11.9999 15.0385Z" fill="#E8EAED" />
                    </svg>
                </span>
            </button>
            {isOpen && (
                <div className="overflow-hidden origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div
                        className='max-h-[250px] overflow-y-auto'
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu">
                        {options.map((option) => (
                            <button
                                key={option}
                                type="button"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-black/10 font-montserrat w-full text-left"
                                onClick={() => handleSelectOption(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DateDropdown;
