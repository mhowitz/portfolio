import { Link } from 'react-router-dom'

interface CloudButtonProps {
  text: string
  to: string
  position: string
}

function CloudButton({ text, to, position }: CloudButtonProps) {
  return (
    <div className={position}>
      <Link to={to}>
        <div className="cursor-pointer">
          <p className="font-primary inset-0 text-5xl text-emerald-700 drop-shadow-1x">
            {text}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default CloudButton
