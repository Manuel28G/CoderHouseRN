import react from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Cart } from "../../data/cart";
import CartItem from "../../components";
import { styles } from "./styles";
import { style } from "../../components/cart-item/styles";

const onHandlerDeleteItem = (id) => {
  console.log(id);
};

const onHandlerConfirmCart = () => {
  console.log("Confirm Cart");
};

const renderItem = ({ item }) => {
  <CartItem item={item} onDelete={onHandlerDeleteItem} />;
};

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cartList}>
        <FlatList
          data={Cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View sytle={style.footer}>
        <TouchableOpacity style={style.buttonConfirm}></TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
