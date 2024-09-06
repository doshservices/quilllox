import { AppLogo } from "../assets/AppLogo"

export const AppFooter = () => {
    return (
        <footer className="flex flex-col sm:flex-row items-center gap-8 justify-between px-[8%] py-16">
            <div className="flex items-center gap-6 grow sm:basis-[200px] basis-0">
                <a>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.8719 9.25C17.8719 13.6094 14.6727 17.2305 10.4891 17.8633V11.7812H12.5281L12.9148 9.25H10.4891V7.63281C10.4891 6.92969 10.8406 6.26172 11.9305 6.26172H13.0203V4.11719C13.0203 4.11719 12.0359 3.94141 11.0516 3.94141C9.08281 3.94141 7.78203 5.17188 7.78203 7.35156V9.25H5.56719V11.7812H7.78203V17.8633C3.59844 17.2305 0.434376 13.6094 0.434376 9.25C0.434376 4.43359 4.33672 0.53125 9.15313 0.53125C13.9695 0.53125 17.8719 4.43359 17.8719 9.25Z" fill="white" />
                    </svg>
                </a>
                <a>
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2898 4.59375C16.2898 4.76953 16.2898 4.91016 16.2898 5.08594C16.2898 9.97266 12.5984 15.5625 5.81328 15.5625C3.70391 15.5625 1.77031 14.9648 0.153126 13.9102C0.434376 13.9453 0.715626 13.9805 1.03203 13.9805C2.75469 13.9805 4.33672 13.3828 5.60234 12.3984C3.98516 12.3633 2.61406 11.3086 2.15703 9.83203C2.40313 9.86719 2.61406 9.90234 2.86016 9.90234C3.17656 9.90234 3.52813 9.83203 3.80938 9.76172C2.12188 9.41016 0.856251 7.93359 0.856251 6.14062V6.10547C1.34844 6.38672 1.94609 6.52734 2.54375 6.5625C1.52422 5.89453 0.891407 4.76953 0.891407 3.50391C0.891407 2.80078 1.06719 2.16797 1.38359 1.64062C3.21172 3.85547 5.95391 5.33203 9.0125 5.50781C8.94219 5.22656 8.90703 4.94531 8.90703 4.66406C8.90703 2.625 10.5594 0.972656 12.5984 0.972656C13.6531 0.972656 14.6023 1.39453 15.3055 2.13281C16.1141 1.95703 16.9227 1.64062 17.6258 1.21875C17.3445 2.09766 16.782 2.80078 16.0086 3.25781C16.7469 3.1875 17.4852 2.97656 18.118 2.69531C17.6258 3.43359 16.993 4.06641 16.2898 4.59375Z" fill="white" />
                    </svg>
                </a>
                <a>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.19719 4.20703C10.412 4.20703 12.2402 6.03516 12.2402 8.25C12.2402 10.5 10.412 12.293 8.19719 12.293C5.94719 12.293 4.15422 10.5 4.15422 8.25C4.15422 6.03516 5.94719 4.20703 8.19719 4.20703ZM8.19719 10.8867C9.6386 10.8867 10.7988 9.72656 10.7988 8.25C10.7988 6.80859 9.6386 5.64844 8.19719 5.64844C6.72063 5.64844 5.56047 6.80859 5.56047 8.25C5.56047 9.72656 6.75579 10.8867 8.19719 10.8867ZM13.33 4.06641C13.33 4.59375 12.9081 5.01562 12.3808 5.01562C11.8534 5.01562 11.4316 4.59375 11.4316 4.06641C11.4316 3.53906 11.8534 3.11719 12.3808 3.11719C12.9081 3.11719 13.33 3.53906 13.33 4.06641ZM16.0019 5.01562C16.0722 6.31641 16.0722 10.2188 16.0019 11.5195C15.9316 12.7852 15.6503 13.875 14.7363 14.8242C13.8222 15.7383 12.6972 16.0195 11.4316 16.0898C10.1308 16.1602 6.22844 16.1602 4.92766 16.0898C3.66204 16.0195 2.57219 15.7383 1.62297 14.8242C0.708911 13.875 0.427661 12.7852 0.357348 11.5195C0.287036 10.2188 0.287036 6.31641 0.357348 5.01562C0.427661 3.75 0.708911 2.625 1.62297 1.71094C2.57219 0.796875 3.66204 0.515625 4.92766 0.445312C6.22844 0.375 10.1308 0.375 11.4316 0.445312C12.6972 0.515625 13.8222 0.796875 14.7363 1.71094C15.6503 2.625 15.9316 3.75 16.0019 5.01562ZM14.3144 12.8906C14.7363 11.8711 14.6308 9.41016 14.6308 8.25C14.6308 7.125 14.7363 4.66406 14.3144 3.60938C14.0331 2.94141 13.5058 2.37891 12.8378 2.13281C11.7831 1.71094 9.32219 1.81641 8.19719 1.81641C7.03704 1.81641 4.5761 1.71094 3.55657 2.13281C2.85344 2.41406 2.3261 2.94141 2.04485 3.60938C1.62297 4.66406 1.72844 7.125 1.72844 8.25C1.72844 9.41016 1.62297 11.8711 2.04485 12.8906C2.3261 13.5938 2.85344 14.1211 3.55657 14.4023C4.5761 14.8242 7.03704 14.7188 8.19719 14.7188C9.32219 14.7188 11.7831 14.8242 12.8378 14.4023C13.5058 14.1211 14.0683 13.5938 14.3144 12.8906Z" fill="white" />
                    </svg>
                </a>
            </div>
            <AppLogo height="167" width="146" />
            <p className="text-white font-nunito font-light text-sm sm:basis-[200px] basis-0 grow text-center sm:text-right">Quilox Nightclub © 2024. All Rights Reserved.</p>
        </footer>
    )
}