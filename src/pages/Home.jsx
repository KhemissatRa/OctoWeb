import { Features } from 'tailwindcss'
import Category from '../compenents/Category'
import ProductList from '../compenents/ProductList'
import Timeline from '../compenents/Timeline'
import Fouter from '../compenents/Fouter'
 export default function Home () {
  return (
    <div className=' bg-[#DDE0ED] flex justify-center items-center flex-col space-y-8 items-center'>
   <Category/>

   <ProductList/>
      <Timeline/>

   <Fouter/>
   </div>
  )
}
