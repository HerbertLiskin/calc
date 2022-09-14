import HomePage from 'components/HomePage'

// import {
//   RouteObject,
//   // useLocation,
//   useRoutes,
// } from 'react-router-dom'

// const routes: RouteObject[] = [
//   {
//     path: '/',
//     element: <HomePage />,
//   },
// ]

export const LAYOUT_STYLES =
  'relative z-0 m-auto w-[300px] grow items-start mm:w-[90%] ml:w-[590px] t:w-[80%] dxs:w-[1000px] dm:w-[1200px] dl:w-[1388px] dxl:w-[1766px]'

export default function App() {
  // const element = useRoutes(routes)
  // {element}
  return (
    <div>
      <div className={LAYOUT_STYLES}>
        <HomePage />
      </div>
    </div>
  )
}
