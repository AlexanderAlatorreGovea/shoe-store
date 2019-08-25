import React from 'react';

import './ProductPage.scss';

import image from '../../assets/adidas-yeezy-boost-350-white.png';


const ProductPage = () => (
        <section class="content-area product-single-page">
            <div class="product-imgs">
                <div class="product">
                <div class="circle">
                    <img src={image} />
                </div>
                </div>
            </div>
            <div class="product-detail">
                <div class="titles">
                <div class="brand">
                    Adidas
                </div>
                <div class="product">
                    Yeezy Boost 350 White
                </div>
                </div>
                <div class="details">
                <p>The adidas Yeezy Boost 350 v2 “Static” released in December 2018, bringing a new look to Kanye West's popular silhouette. The updated Yeezy 350 features a transparent mesh panel in place of the usual side stripe. The panel is woven into the Primeknit upper on each lateral side. The Yeezy 350 "Static" introduced an intricate new Primeknit pattern in white and grey hues. The clean appearance is solidified with a translucent white rubber midsole and outsole that wrap full-length Boost cushioning. The unique design of the adidas Yeezy Boost 350 v2 “Static” provided a refreshing update that will be in-demand for years to come.</p>
                <div id="ProductAddToCartRoot"></div>

                <div class="detail-section">
                    <div class="detail">
                    <input type="checkbox" id="delivery-dropdown" class="toggle" />
                    <label class="title" for="delivery-dropdown">Delivery</label>
                    <div class="content">
                    <p class="">
                        The speeds that show are dependent on those made available by the seller.  

                        Standard -  Should arrive 3 to 10 business days after shipment
                        Expedited - Should arrive 3 to 6 business days after shipment
                        Second Day -  Should arrive 2 business days after shipment
                        Next Day - Should arrive by the end of business the day after shipment
                        Pick up - Pick up at our Doral Warehouse facility.
                    </p>
                    </div>
                </div>
                </div>

                <div class="detail-section">
                    <div class="detail">
                    <input type="checkbox" id="refund-dropdown" class="toggle" />
                    <label class="title" for="refund-dropdown">Refund</label>
                    <div class="content">
                    <p class="">
                        NEW! Accepting Returns
                        We accept returns for store credit, within 3 business days of receipt. Items must be tagged and in new/unworn condition. Read more here.

                        100% Authenticity, Guaranteed
                        We carefully inspect every shoe with a fine toothed comb, twice, to validate its authenticity, and to check for conditional/manufacturing issues to ensure all of our items are pristine . We stand behind every item we sell, so you can feel safe about buying. Learn more about our policies here.
                    </p>
                    </div>
                </div>
                </div>
                </div>
            </div>
    </section>
);



export default ProductPage;