import { Features } from 'tailwindcss'
import Category from '../compenents/Category'
import ProductList from '../compenents/ProductList'
import Timeline from '../compenents/Timeline'
import ServiceSection from '../compenents/abtservice'
 export default function Home () {
  return (
    <div className=' bg-white flex justify-center items-center flex-col space-y-8 p-8 items-center'>
   <Category/>
      <ServiceSection/>

   <ProductList/>

      <Timeline/>

   </div>
  )
}
