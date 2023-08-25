const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Rick and Morty</a>
  </div>
  <div className="gap-2 ">
    <div className="form-control lg:w-screen flex flex-row justify-center items-center ">
      <input type="text" placeholder="Search" className="input focus:outline-offset-0 focus:outline-1 input-bordered rounded-r-none w-40 md:w-80 lg:w-[640px]" />
      <button type="submit" className="btn btn-primary rounded-l-none">search</button>
    </div>

    <div className="dropdown dropdown-end lg:absolute top-0 right-0 lg:mt-2 lg:mr-2">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src='https://images7.alphacoders.com/633/633262.png' />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar