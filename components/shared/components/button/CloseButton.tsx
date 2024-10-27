import React from "react"
import {XIcon} from '@heroicons/react/solid'
type Props = {
  onClose: ()  => void
}

const CloseButton = ({ onClose }: Props) => (
  <button type="button"
    className="text-danger transition ease-in-out duration-500 transform hover:scale-150 focus:outline-none"
    onClick={() => onClose()}
  >
    <XIcon className="h-6 w-6"></XIcon>
  </button>
)

export default CloseButton
