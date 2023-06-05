import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

type Props = React.HTMLAttributes<HTMLDivElement>

export const Footer = ({ className }: Props) => {
  return (
    <div
      className={twMerge(
        [
          'w-full flex items-center justify-center gap-8 px-8 py-8 text-right md:px-20',
        ],
        className
      )}
    >
      <div className="font-semibold cursor-pointer flex text-light-2 flex-col gap-2">
        <div className="flex flex-row justify-center gap-3 text-2xl">
          <a className="hover:text-hover transition" href="">
            <FaDiscord />
          </a>
          <a className="hover:text-hover transition" href="">
            <FaTwitter />
          </a>
          <a className="hover:text-hover transition" href="">
            <FaInstagram />
          </a>
        </div>
        <div>&copy; 2023 Some App | All right reserved.</div>
      </div>
    </div>
  )
}
