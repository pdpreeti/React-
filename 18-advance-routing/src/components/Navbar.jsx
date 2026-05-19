import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex px-8 py-4 items-center bg-cyan-800 justify-between'>

      <h2 className='text-2xl font-bold'>Ruby 's Organics</h2>
      <div className="flex gap-10">
        <Link className='text-lg font-medium' to = '/'>Home</Link>
        <Link className='text-lg font-medium' to = '/about'>About</Link>
        <Link className='text-lg font-medium' to = '/makeup'>Makeup</Link>
        <Link className='text-lg font-medium' to = '/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
