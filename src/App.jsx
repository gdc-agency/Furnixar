
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages/index/index'
import IndexTwo from './pages/index/index-two'
import IndexThree from './pages/index/index-three'
import IndexFour from './pages/index/index-four'
import IndexFive from './pages/index/index-five'
import IndexSix from './pages/index/index-six'
import About from './pages/inner-pages/about'
import Pricing from './pages/inner-pages/pricing'
import Team from './pages/inner-pages/team'
import OurClients from './pages/inner-pages/our-clients'
import Faq from './pages/inner-pages/faq'
import TermsAndConditions from './pages/inner-pages/terms-and-conditions'
import PortfolioV1 from './pages/portfolio/portfolio-v1'
import PortfolioV2 from './pages/portfolio/portfolio-v2'
import PortfolioV3 from './pages/portfolio/portfolio-v3'
import PortfolioDetailsV1 from './pages/portfolio/portfolio-details-v1'
import PortfolioDetailsV2 from './pages/portfolio/portfolio-details-v2'
import Error from './pages/special/error'
import MyProfile from './pages/account/my-profile'
import MyAccount from './pages/account/my-account'
import EditAccount from './pages/account/edit-account'
import OrderHistory from './pages/account/order-history'
import Wishlist from './pages/account/wishlist'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import ForgerPassword from './pages/auth/forger-password'
import ComingSoon from './pages/special/coming-soon'
import ThankYou from './pages/special/thank-you'
import ShippingMethod from './pages/shop/shipping-method'
import PaymentMethod from './pages/shop/payment-method'
import Invoice from './pages/shop/invoice'
import PaymentConfirmation from './pages/shop/payment-confirmation'
import PaymentSuccess from './pages/shop/payment-success'
import PaymentFailure from './pages/shop/payment-failure'
import Cart from './pages/shop/cart'
import Checkout from './pages/shop/checkout'
import ShopV1 from './pages/shop/shop-v1'
import ShopV2 from './pages/shop/shop-v2'
import ShopV3 from './pages/shop/shop-v3'
import ShopV4 from './pages/shop/shop-v4'
import ProductDetails from './pages/index/product-details'
import BlogV1 from './pages/blog/blog-v1'
import BlogV2 from './pages/blog/blog-v2'
import BlogDetailsV1 from './pages/blog/blog-details-v1'
import BlogDetailsV2 from './pages/blog/blog-details-v2'
import BlogDetailsV3 from './pages/blog/blog-details-v3'
import BlogTag from './pages/blog/blog-tag'
import Contact from './pages/inner-pages/contact'
import ProductCategory from './pages/shop/product-category'

function App() {

  return (
    <>
     <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/index-v2" element={<IndexTwo/>} />
          <Route path="/index-v3" element={<IndexThree/>} />
          <Route path="/index-v4" element={<IndexFour/>} />
          <Route path="/index-v5" element={<IndexFive/>} />
          <Route path="/index-v6" element={<IndexSix/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/our-clients" element={<OurClients/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
          <Route path="/portfolio-v1" element={<PortfolioV1/>} />
          <Route path="/portfolio-v2" element={<PortfolioV2/>} />
          <Route path="/portfolio-v3" element={<PortfolioV3/>} />
          <Route path="/portfolio-details-v1" element={<PortfolioDetailsV1/>} />
          <Route path="/portfolio-details-v1/:id" element={<PortfolioDetailsV1/>} />
          <Route path="/portfolio-details-v2" element={<PortfolioDetailsV2/>} />
          <Route path="/portfolio-details-v2/:id" element={<PortfolioDetailsV2/>} />
          <Route path="/error" element={<Error/>} />
          <Route path="/my-profile" element={<MyProfile/>} />
          <Route path="/my-account" element={<MyAccount/>} />
          <Route path="/edit-account" element={<EditAccount/>} />
          <Route path="/order-history" element={<OrderHistory/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/forger-password" element={<ForgerPassword/>} />
          <Route path="/coming-soon" element={<ComingSoon/>} />
          <Route path="/thank-you" element={<ThankYou/>} />
          <Route path="/shipping-method" element={<ShippingMethod/>} />
          <Route path="/payment-method" element={<PaymentMethod/>} />
          <Route path="/invoice" element={<Invoice/>} />
          <Route path="/payment-confirmation" element={<PaymentConfirmation/>} />
          <Route path="/payment-success" element={<PaymentSuccess/>} />
          <Route path="/payment-failure" element={<PaymentFailure/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/shop-v1" element={<ShopV1/>} />
          <Route path="/shop-v2" element={<ShopV2/>} />
          <Route path="/shop-v3" element={<ShopV3/>} />
          <Route path="/shop-v4" element={<ShopV4/>} />
          <Route path="/product-details" element={<ProductDetails/>} />
          <Route path="/product-details/:id" element={<ProductDetails/>} />
          <Route path="/blog-v1" element={<BlogV1/>} />
          <Route path="/blog-v2" element={<BlogV2/>} />
          <Route path="/blog-details-v1" element={<BlogDetailsV1/>} />
          <Route path="/blog-details-v1/:id" element={<BlogDetailsV1/>} />
          <Route path="/blog-details-v2" element={<BlogDetailsV2/>} />
          <Route path="/blog-details-v2/:id" element={<BlogDetailsV2/>} />
          <Route path="/blog-details-v3" element={<BlogDetailsV3/>} />
          <Route path="/blog-tag" element={<BlogTag/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product-category" element={<ProductCategory/>} />
     </Routes>
    </>
  )
}

export default App
