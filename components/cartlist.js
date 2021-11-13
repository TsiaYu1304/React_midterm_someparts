
import CartItem from './cartitem';
import Carts from "../json/products.json";
import { Button } from 'antd';

 


function CartList() {
 
// const getTotalPrice = () => {
//     return (cartItems.length > 0) ?
//        cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
//        : 0;
//  }



    return (
        <div>
            <div className="cartlist_title">
                <div className="cartlist_title_item">商品</div>
                <div className="cartlist_title_price">價格</div>
                <div className="cartlist_title_delete">刪除</div>
            </div>

            {Carts.map(cart => <CartItem cart={cart} />)}

            
            <div className="cartlist_totle">
                <div className="cartlist_totle_n"></div>
                <div className="cartlist_totlebox">
                    <div className="cartlist_totlebox_detail">
                        <div className="cartlist_totlebox_detail_text">總金額：（共2件）</div>
                        <div className="cartlist_totlebox_detail_price">NT300</div>
                    </div>
                    <div className="cartlist_totlebox_btn">
                        <Button type="primary" className="cartlist_totlebox_btn_" block
                            style={{ backgroundColor: 'black', borderColor: 'black' }}>
                            去買單
                        </Button>
                    </div>
                </div>
            </div>



        </div>


    );
}
export default CartList;