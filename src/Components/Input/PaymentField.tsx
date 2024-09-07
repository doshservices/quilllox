interface IPaymentField {
    name: string
    placeholder?: string
    label: string
}

export const PaymentField = ({ name, placeholder, label }: IPaymentField) => {
    return (
        <div className="pb-6">
            <label htmlFor={name} className="block text-white text-sm font-nunito mb-1.5">{label}</label>
            <input
                className="py-3 px-4 text-sm font-nunito block w-full bg-transparent border-light400 border-[1px] rounded-[4px] focus:outline-none"
                id={name}
                placeholder={placeholder}
                type="text" />
        </div>
    )
}