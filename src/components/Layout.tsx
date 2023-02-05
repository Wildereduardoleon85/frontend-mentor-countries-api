import { Filter, Navbar, Search } from '.'

function Layout() {
  return (
    <>
      <Navbar />
      <main className='max-w-screen-lg mx-auto px-4 lg:px-0'>
        <div className='flex mt-12'>
          <Search />
          <Filter />
        </div>
        <div>Countries container</div>
      </main>
    </>
  )
}

export default Layout
