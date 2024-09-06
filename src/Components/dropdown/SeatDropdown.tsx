import { useState, useEffect, useRef } from 'react';
import { DropdownProps } from '../../utils/interface';

const SeatDropdown = ({ options, onSelect, placeholder, maxWidth }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<number | null>(null);
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

    const handleSelectOption = (option: number) => {
        setSelectedValue(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className={`relative inline-block w-full ${maxWidth}`} ref={dropdownRef}>
            <button
                type="button"
                className="inline-flex items-center gap-2 w-full text-[#2D2D2D] font-montserrat bg-light400 border border-[#BABABA] rounded-[4px] shadow-sm py-2 pl-2 pr-10 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-yellow-300 focus:border-yellow300 text-[.93rem]"
                onClick={handleToggleDropdown}
            >
                {selectedValue || `${placeholder}`}
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.7368 0.78125C14.8684 0.921875 15 1.20312 15 1.48438C15 1.76562 14.8684 2.04688 14.7368 2.1875L8.15789 9.21875C8.02632 9.5 7.76316 9.5 7.5 9.5C7.23684 9.5 6.97368 9.35938 6.8421 9.21875L0.263158 2.1875C0.131579 2.04688 0 1.76562 0 1.48438C0 1.20312 0.131579 0.921875 0.263158 0.78125C0.526316 0.640625 0.657895 0.5 0.921053 0.5H14.0789C14.3421 0.5 14.6053 0.640625 14.7368 0.78125Z" fill="#333333" />
                    </svg>
                </span>
            </button>
            {isOpen && (
                <div className="overflow-hidden origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div
                        className='max-h-[200px] overflow-y-auto'
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu">
                        {options.map((option) => (
                            <button
                                key={option}
                                type="button"
                                className="block px-4 py-1.5 text-sm text-gray-700 hover:bg-black/10 font-montserrat w-full text-left"
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

export default SeatDropdown;
