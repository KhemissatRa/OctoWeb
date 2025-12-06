import { Features } from 'tailwindcss'
import Category from '../compenents/Category'
import ProductList from '../compenents/ProductList'
import Timeline from '../compenents/Timeline'
import Fouter from '../compenents/Fouter'
import ServiceSection from '../compenents/abtservice'
 export default function Home () {
  return (
    <div className=' bg-white flex justify-center items-center flex-col space-y-8 p-8 items-center'>
   <Category/>
   <ProductList/>
   <ServiceSection/>

      <Timeline/>

   <Fouter/>
   </div>
  )
}
