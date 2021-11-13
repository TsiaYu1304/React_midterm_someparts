import { Checkbox } from 'antd';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

function CartItem({ cart }) {
    return (
        <div className="cartlist_content">
            <Checkbox onChange={onChange} className="cartlist_content_checkbox"></Checkbox>
            <div className="cartlist_content_img">
                <img className="cartlist_content_img_" src="img/0000.jpg" />
            </div>

            <div className="cartlist_content_item">{cart.name}</div>
            <div className="cartlist_content_price">NT{cart.price}</div>
            <div className="cartlist_content_delete">
                <img className="cartlist_content_delete_icon" src="img/delete.png" />
            </div>
        </div>

    );

}
export default CartItem;