import logo from './logo.svg';
import './App.css';
import Flipkart from './components/Flipkart';
function App() {
  return (
    <>
  <h1 className='bg-red-500'>First React App</h1>
      <div className="App flex items-center flex-wrap justify-center">
        
        <Flipkart price="500" orginalPrice={1000} discount={"50%"} imgSrc={"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/p/k/b/s-vh0423gypl54-veirdo-original-imah6zhqeewghrbg.jpeg?q=70"} />
        <Flipkart price={749} orginalPrice={"1,999"} discount={"62%"} imgSrc={"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/d/e/e/s-w-05-brown-veirdo-original-imaggn7dhbghpzjn.jpeg?q=70"} />
        <Flipkart price="499" orginalPrice={"1,999"} discount={"75%"} imgSrc={"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/s/x/9/l-sszip1-plain-skin-fashion-and-youth-original-imah542vygdd4juu.jpeg?q=70"} />
        <Flipkart price="749" orginalPrice={"1,999"} discount={"62%"} imgSrc={"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/0/w/b/m-vh0423bkpl52-veirdo-original-imagufebchkxgqfb.jpeg?q=70"} />
        <Flipkart price="659" orginalPrice={"2,699"} discount={"75%"} imgSrc={"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/g/o/v/xl-half-zipper-hoodie-the-modern-soul-original-imah4a96ff6f2knj.jpeg?q=70"} />
        <Flipkart price="344" orginalPrice={"1,249"} discount={"72%"} imgSrc={"https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/h/8/s/xl-men-hd-sweatshirt-grey-being-wanted-original-imagspeewhthkzxr.jpeg?q=70&crop=false"} />
        <Flipkart price="344" orginalPrice={"1,249"} discount={"72%"} imgSrc={"https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/h/8/s/xl-men-hd-sweatshirt-grey-being-wanted-original-imagspeewhthkzxr.jpeg?q=70&crop=false"} />
        <Flipkart price="799" orginalPrice={"1,999"} discount={"60%"} imgSrc={"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/9/u/t/s-w-05-rust-veirdo-original-imah6heuhgttvzpb.jpeg?q=70"} />
        <Flipkart price="749" orginalPrice={"1,999"} discount={"62%"} imgSrc={"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/h/n/p/s-vh0423grpl55-veirdo-original-imah6hfdyazt8faa.jpeg?q=70"} />
        <Flipkart price="1,399" orginalPrice={"3,999"} discount={"65%"} imgSrc={"https://rukminim2.flixcart.com/image/612/612/ktyp8cw0/sweatshirt/a/t/r/s-84723704-puma-original-imag76xw9rzjfzej.jpeg?q=70"} />
        
       
      </div>
    </>
  );
}

export default App;
