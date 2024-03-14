import { getToken, getUserId } from "./auth";
import AdminLayout from "./AdminLayout";
import Allproducts from "../component/admin/dashboardPage/sideNavOption/Products/Allproducts.js";
import StockFile from "../component/admin/dashboardPage/sideNavOption/Stocks/Addstock";
import Alllocation from "../component/admin/dashboardPage/sideNavOption/Stocks/Alllocations";
import Subscribeuser from "../component/admin/dashboardPage/sideNavOption/Newsletter/Subscriber";
import Allcategories from "../component/admin/dashboardPage/sideNavOption/Products/Allcategories";
import Allbrands from "../component/admin/dashboardPage/sideNavOption/Products/Allbrands";
// import Allunit from "../component/admin/dashboardPage/sideNavOption/Products/Allunit";
// import Alltaxes from "../component/admin/dashboardPage/sideNavOption/Products/Alltaxes";
import Bulkemails from "../component/admin/dashboardPage/sideNavOption/Newsletter/Bulkemail";
import Productsale from "../component/admin/dashboardPage/sideNavOption/Reports/Productsale";
import Orderreport from "../component/admin/dashboardPage/sideNavOption/Reports/Orderreport";
import Categorywise from "../component/admin/dashboardPage/sideNavOption/Reports/Categorieswisesales";
import Salesamount from "../component/admin/dashboardPage/sideNavOption/Reports/Salesamountreport";
import SignUp from "../component/user/Signup/signup";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";
import CustomerLayout from "./CustomerLayout";
import DeliveryStatus from "../component/admin/dashboardPage/sideNavOption/Reports/Deliverystatusreport";
import ProductForm from "../component/admin/addProductDetails/addProductFrom";
import Usernavbar from "../component/user/UserHeader/usernavbar/usernavbar";
import SignIn from "../component/user/signin/sign";
import Home from "../component/user/UserHeader/home/homepage";
import Subcategory from "../component/user/filterbyCategory/subcategory";
import Searchproduct from "../component/SearchProducts/searchProduct";
import AddToCartProduct from "../component/user/AddCartprouct/addtocart";
import Homecategory from "../component/user/filterbyCategory/homecategory";
import Profile from "../component/user/profile/Profile";
import AllProductDetail from "../component/user/UserHeader/allProduct/allProductDetail";
import ProductDetails from "../component/user/Products/productDetails";
import Aboutus from "../component/user/aboutUs/aboutus";
import Allsubcategory from "../component/admin/dashboardPage/sideNavOption/Products/Allsubcategory";
import Delieverydetail from "../component/user/placeOrder/delieverydetail";
import Payment from "../component/user/paymentsdetail/payment";
import Shipping from "../component/user/shippingDetail/shipping";
import TermsofuseDetail from "../component/user/termofuseDetail/termsDetail";
import Security from "../component/user/securityDetail/security";
import Privacy from "../component/user/privacyDetail/privacy";
import Sliderpost from "../component/admin/dashboardPage/sideNavOption/Products/Sliderpost";
import Alltypesubcategory from "../component/admin/dashboardPage/sideNavOption/Products/Alltypesubcategory";
import Payments from "../component/user/placeOrder/startpayment";
import Customer from "../component/admin/dashboardPage/sideNavOption/customerDetail/customer";
import ProductSpecification from "../component/admin/addProductDetails/productSpecification";
import OrderConfirmation from "../component/user/placeOrder/orderConfirm/orderConfirmation";
import Trendingproducts from "../component/admin/dashboardPage/sideNavOption/Products/Trendingproducts";
import Editprofile from "../component/user/Editprofile/editprofile";
import SliderPages from "../component/user/UserHeader/sliderPages/sliderPages";
import Headeradmin from "../component/admin/dashboardPage/sideNavOption/Products/Headeradmin";
import Onlymobile from "../component/user/Products/sliderSubcategory";
import Wishlistinform from "../component/user/wshlistData/wishlistDataInfo";
import SubCategoryfilter from "../component/user/filterbyCategory/subCategoryfilter";
import Careers from "../component/user/Careers/Careers";
import GrievanceRedressal from "../component/user/Grievance Redressal/GrievanceRedressal";
import ContactUs from "../component/user/contactUs/contactUs";
import OrderReport from "../component/admin/dashboardPage/sideNavOption/orders/orderReport";
import AllCategories from "../component/user/Allcategories/allCategories";
import Discount from "../component/user/UserHeader/sliderPages/discount";
import OrderCancellation from "../component/user/Cancellation & return/OrderCancellation";
import Returnpolicy from "../component/user/Return Policy/returnpolicy";
import EPRcompliance from "../component/user/EPR/EPRcompliance";
import Orders from "../component/admin/dashboardPage/orderPage/orders.js";
import Admindashboard from "../component/admin/dashboardPage/sideNavOption/dashboardAdmin/dashboardpage.js";
import Possystemtype from "../component/admin/dashboardPage/sideNavOption/possystems/Systempos.js";

const role = getUserId() ? getUserId()?.userRole : null;
// console.log(role, "aaasdfgfds");
const isLoggedIn = getToken();
const protects = {
  user: [
    {
      path: "/",
      element: isLoggedIn ? <Layout /> : <Navigate to="/" />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/userheader", element: <Usernavbar /> },
        { path: "/productdetail/:_id", element: <ProductDetails /> },
        { path: "/subcategory/:subcategory", element: <Subcategory /> },
        { path: "/search", element: <Searchproduct /> },
        { path: "/addtocart", element: <AddToCartProduct /> },
        {
          path: "/category/:categoryName/:subcategoryName",
          element: <Homecategory />,
        },
        { path: "/category/:categoryName", element: <Homecategory /> },
        { path: "/profile", element: <Profile /> },
        { path: "/allproduct", element: <AllProductDetail /> },
        { path: "/aboutus", element: <Aboutus /> },
        { path: "/deliverydetail/:_id", element: <Delieverydetail /> },
        { path: "/paymentdetail", element: <Payment /> },
        { path: "/shippingdetail", element: <Shipping /> },
        { path: "/termofuse", element: <TermsofuseDetail /> },
        { path: "/paymentsecurity", element: <Security /> },
        { path: "/privacypolicy", element: <Privacy /> },
        { path: "/payment", element: <Payments /> },
        { path: "/contactus", element: <ContactUs /> },
        { path: "careers", element: <Careers /> },
        { path: "grievanceRedressal", element: <GrievanceRedressal /> },
        { path: "/orderconfirmation/:_id", element: <OrderConfirmation /> },
        { path: "/editprofile", element: <Editprofile /> },
        { path: "/salespage", element: <SliderPages /> },
        { path: "/slidersubcategory", element: <Onlymobile /> },
        { path: "/wishlist", element: <Wishlistinform /> },
        { path: "/allcategory", element: <AllCategories /> },
        { path: "/discountproducts", element: <Discount /> },
        { path: "/filterbycategory", element: <SubCategoryfilter /> },
        { path: "/ordercancellationandreturn", element: <OrderCancellation /> },
        { path: "/returnpolicy", element: <Returnpolicy /> },
        { path: "/orders", element: <Orders /> },
        { path: "/e-wastecompliance", element: <EPRcompliance /> },
        { path: "*", element: "NO PAGE FOUND" },
      ],
    },
  ],

  admin: [
    {
      path: "/",
      element: isLoggedIn ? <AdminLayout /> : <Navigate to="/" />,
      children: [
        { path: "/", element: <Admindashboard /> },
        { path: "/allproduct", element: <Allproducts /> },
        { path: "/addstock", element: <StockFile /> },
        { path: "/allloation", element: <Alllocation /> },
        { path: "/subscriber", element: <Subscribeuser /> },
        { path: "/allcategories", element: <Allcategories /> },
        { path: "/allsubcategory", element: <Allsubcategory /> },
        { path: "/allsubtypecategory", element: <Alltypesubcategory /> },
        { path: "/allbrands", element: <Allbrands /> },
        // { path: "/allunit", element: <Allunit /> },
        // { path: "/alltaxes", element: <Alltaxes /> },
        { path: "/orderreport", element: <Orderreport /> },
        { path: "/trackorder", element: <OrderReport /> },
        { path: "/categorywise", element: <Categorywise /> },
        { path: "/bulkemails", element: <Bulkemails /> },
        { path: "/productsale", element: <Productsale /> },
        { path: "/salesamountreport", element: <Salesamount /> },
        { path: "/deliverystatusreport", element: <DeliveryStatus /> },
        { path: "/product", element: <ProductForm /> },
        { path: "/possystem", element: <Possystemtype /> },

        { path: "/slider", element: <Sliderpost /> },
        { path: "/customerdetail", element: <Customer /> },
        { path: "/orders", element: <Orders /> },
        {
          path: "/productspecification/:id",
          element: <ProductSpecification />,
        },
        { path: "/trending", element: <Trendingproducts /> },
        { path: "/Headeradmin", element: <Headeradmin /> },
        { path: "*", element: "NO PAGE FOUND" },
      ],
    },
  ],
  default: [
    {
      path: "/",
      element: <CustomerLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/productdetail/:_id", element: <ProductDetails /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/subcategory/:subcategory", element: <Subcategory /> },
        { path: "/search", element: <Searchproduct /> },
        { path: "/category/:categoryName", element: <Homecategory /> },
        { path: "/allproduct", element: <AllProductDetail /> },
        { path: "/aboutus", element: <Aboutus /> },
        { path: "/deliverydetail", element: <Delieverydetail /> },
        { path: "/paymentdetail", element: <Payment /> },
        { path: "/shippingdetail", element: <Shipping /> },
        { path: "/termofuse", element: <TermsofuseDetail /> },
        { path: "/paymentsecurity", element: <Security /> },
        { path: "/privacypolicy", element: <Privacy /> },
        { path: "/payment", element: <Payments /> },
        { path: "/salespage", element: <SliderPages /> },
        { path: "/slidersubcategory", element: <Onlymobile /> },
        { path: "/contactus", element: <ContactUs /> },
        { path: "careers", element: <Careers /> },
        { path: "GrievanceRedressal", element: <GrievanceRedressal /> },
        { path: "/allcategory", element: <AllCategories /> },
        { path: "/filterbycategory", element: <SubCategoryfilter /> },
        {
          path: "/category/:categoryName/:subcategoryName",
          element: <Homecategory />,
        },
        { path: "/category/:categoryName", element: <Homecategory /> },
        { path: "/discountproducts", element: <Discount /> },
        { path: "/ordercancellationandreturn", element: <OrderCancellation /> },
        { path: "/returnpolicy", element: <Returnpolicy /> },
        { path: "/e-wastecompliance", element: <EPRcompliance /> },
        { path: "*", element: "NO PAGE FOUND" },
      ],
    },
  ],
};

export const protect =
  role && isLoggedIn ? protects[role] : protects["default"];
export const defaultProtect = protects["default"];
