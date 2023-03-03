import Navbar from './Navbar'

interface Props {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>este es el footer</footer>
    </>
  )
}

export default Layout
