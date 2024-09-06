import { useRef } from "react"
import SeatDropdown from "../dropdown/SeatDropdown"
import { ITicket } from "../../utils/interface"

export const Tickets = ({ position, borderColor, ticket }: ITicket) => {

    const ticketMenu = useRef<HTMLDivElement>(null)
    const dropDownArrow = useRef<SVGSVGElement>(null)

    const showTicket = () => {
        ticketMenu?.current?.classList.toggle('hidden')
        dropDownArrow?.current?.classList.toggle('-rotate-90')
    }

    return (
        <section id='tickets' className={`${borderColor} border-t-[1px] rounded-b-[4px] font-nunito mb-4`}>
            <div onClick={showTicket} className="flex justify-between items-center bg-[#2D2D2D] p-3 cursor-pointer">
                <h4 id='tickets' className="font-normal text-base">{position}</h4>
                <svg ref={dropDownArrow} className="-rotate-90 transition-all duration-300 ease-in-out" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.25 5.01562L2.35938 3.90625L7.5 9.04688L12.6406 3.90625L13.75 5.01563L7.5 11.2656L1.25 5.01562Z" fill="#F8F8F8" />
                </svg>
            </div>
            <div className="hidden" ref={ticketMenu}>
                {ticket?.map((ticket, index: number) =>
                    <div key={index} className="flex justify-between items-center gap-4 flex-wrap py-3 px-4 border-b-[#F8F8F81A] border-b-[1px]">
                        <div>
                            <p className="text-sm">{ticket.type}</p>
                            <div className="flex items-center gap-2 mt-1">
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.1 14H9.9V8.6H8.1V14ZM9 6.8C9.255 6.8 9.46875 6.71375 9.64125 6.54125C9.81375 6.36875 9.9 6.155 9.9 5.9C9.9 5.645 9.81375 5.43125 9.64125 5.25875C9.46875 5.08625 9.255 5 9 5C8.745 5 8.53125 5.08625 8.35875 5.25875C8.18625 5.43125 8.1 5.645 8.1 5.9C8.1 6.155 8.18625 6.36875 8.35875 6.54125C8.53125 6.71375 8.745 6.8 9 6.8ZM9 18.5C7.755 18.5 6.585 18.2638 5.49 17.7913C4.395 17.3188 3.4425 16.6775 2.6325 15.8675C1.8225 15.0575 1.18125 14.105 0.70875 13.01C0.23625 11.915 0 10.745 0 9.5C0 8.255 0.23625 7.085 0.70875 5.99C1.18125 4.895 1.8225 3.9425 2.6325 3.1325C3.4425 2.3225 4.395 1.68125 5.49 1.20875C6.585 0.73625 7.755 0.5 9 0.5C10.245 0.5 11.415 0.73625 12.51 1.20875C13.605 1.68125 14.5575 2.3225 15.3675 3.1325C16.1775 3.9425 16.8188 4.895 17.2913 5.99C17.7638 7.085 18 8.255 18 9.5C18 10.745 17.7638 11.915 17.2913 13.01C16.8188 14.105 16.1775 15.0575 15.3675 15.8675C14.5575 16.6775 13.605 17.3188 12.51 17.7913C11.415 18.2638 10.245 18.5 9 18.5ZM9 16.7C11.01 16.7 12.7125 16.0025 14.1075 14.6075C15.5025 13.2125 16.2 11.51 16.2 9.5C16.2 7.49 15.5025 5.7875 14.1075 4.3925C12.7125 2.9975 11.01 2.3 9 2.3C6.99 2.3 5.2875 2.9975 3.8925 4.3925C2.4975 5.7875 1.8 7.49 1.8 9.5C1.8 11.51 2.4975 13.2125 3.8925 14.6075C5.2875 16.0025 6.99 16.7 9 16.7Z" fill="#E2B756" />
                                </svg>
                                <p className="font-light text-xs text-yellow300">Show details</p>
                            </div>
                        </div>
                        <p className="text-[.93rem]">N{ticket.price}</p>
                        <div className="">
                            <SeatDropdown
                                maxWidth="w-[80px]"
                                options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                placeholder="0"
                                onSelect={() => { }} />
                            <p className="text-xs font-light mt-1">No of Guests</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}