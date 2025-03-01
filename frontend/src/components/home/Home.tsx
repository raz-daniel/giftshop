import './Home.css';
import giftShopImage from '../../assets/images/gift-shop.jpg';
import useTitle from '../../hooks/useTitle';

export default function Home(): JSX.Element {
  useTitle('Gift Shop - Home');

  return (
    <div className="Home">
      <div className="hero-section">
        <img src={giftShopImage} alt="Gift Shop" className="shop-image" />
        <div className="overlay"></div>
        <div className="content">
          <h1>Welcome to our Gift Shop</h1>
          <p>Find the perfect present for everyone in your life</p>
        </div>
      </div>
      
      <div className="info-section">
        <div className="info-card">
          <h2>Quality Gifts</h2>
          <p>We carefully select each item in our collection to ensure the highest quality standards.</p>
        </div>
        
        <div className="info-card">
          <h2>For Every Occasion</h2>
          <p>Whether it's a birthday, anniversary, or just because - we have the perfect gift waiting for you.</p>
        </div>
        
        <div className="info-card">
          <h2>Special Discounts</h2>
          <p>Enjoy our special offers and discounts on selected items throughout our collection.</p>
        </div>
      </div>
    </div>
  );
}