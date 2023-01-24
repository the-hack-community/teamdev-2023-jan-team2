const Button = ({ title }: Button) => {
  return (
    <button className='bg-yellow grid h-7 place-content-center rounded-full'>
      <div className='px-26px pb-4px text-orange'>{title}</div>
    </button>
  )
}
export default Button
