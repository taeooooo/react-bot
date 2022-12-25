import * as React from 'react'

type InputProps = React.DetailedHTMLProps<
   React.InputHTMLAttributes<HTMLInputElement>,
   HTMLInputElement
>

const defaultProps = {
   type: 'text',
   className: `bg-gray-50 border 
    border-gray-300 
    text-gray-900 
    text-sm 
    focus:ring-blue-500 
    focus:border-blue-500 
    block w-full p-3 
    dark:bg-gray-700 
    dark:border-gray-600 
    dark:placeholder-gray-400 
    dark:text-white 
    dark:focus:ring-blue-500 
    dark:focus:border-blue-500 
    rounded-none`,
}

export default function Input({ ...inputProps }: InputProps) {
   const mixedInPrpos = {
      ...defaultProps,
      ...inputProps,
   }

   return (
      <input
         // eslint-disable-next-line react/jsx-props-no-spreading
         {...mixedInPrpos}
      />
   )
}
