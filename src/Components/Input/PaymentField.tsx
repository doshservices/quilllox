interface IPaymentField {
    name: string;
    placeholder?: string;
    label: string;
    value: string;
    type: 'text' | 'email';
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PaymentField = ({ name, placeholder, label, value, onChange, type }: IPaymentField) => {
    return (
        <div className="pb-6">
            <label htmlFor={name} className="block text-white text-sm font-nunito mb-1.5">{label}</label>
            <input
                name={name}
                onChange={onChange}
                value={value}
                className="py-3 px-4 text-sm font-nunito block w-full bg-transparent border-light400 focus:outline-light300 -outline-offset-8 border-[1px] rounded-[4px] focus:outline-none"
                id={name}
                placeholder={placeholder}
                type={type}
                required
            />
        </div>
    );
};
