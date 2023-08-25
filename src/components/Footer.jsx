
const Footer = ({page, setPage}) => {
  return (
    <div className="w-screen flex justify-around items-center m-8">
        <button className="btn"
        onClick={() => page == 1 ?(null):(setPage(page - 1))}>Previous</button>
        <p className="text-xl">Page {page}</p>
        <button className="btn" 
        onClick={() => setPage(page + 1)}
        >Next</button>

    </div>
  )
}

export default Footer